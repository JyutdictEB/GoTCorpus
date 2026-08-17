import { boot } from 'quasar/wrappers'
import { Lang } from 'quasar'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export const SUPPORTED_LOCALES = ['en-US', 'zh-HK'] as const

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'locale'

function isSupportedLocale(value: string | null): value is SupportedLocale {
  return value !== null && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

function resolveInitialLocale(): SupportedLocale {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isSupportedLocale(stored)) {
      return stored
    }
  }
  return 'en-US'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: resolveInitialLocale(),
  fallbackLocale: 'en-US',
  messages,
})

/**
 * Switches the Quasar component language pack. Note: Quasar v2 ships no
 * `zh-HK` pack, so `zh-HK` is mapped to the Traditional Chinese `zh-TW` pack.
 * The pack is loaded with dynamic `import()` so it is split into a separate
 * async chunk in the production build.
 */
export async function applyQuasarLang(locale: SupportedLocale): Promise<void> {
  const lang =
    locale === 'zh-HK' ? await import('quasar/lang/zh-TW') : await import('quasar/lang/en-US')
  Lang.set(lang.default)
}

export function setLocale(locale: SupportedLocale): void {
  i18n.global.locale.value = locale
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // ignore storage failures (e.g. private browsing mode)
  }
  void applyQuasarLang(locale)
}

export default boot(async ({ app }) => {
  await applyQuasarLang(i18n.global.locale.value as SupportedLocale)
  app.use(i18n)
})