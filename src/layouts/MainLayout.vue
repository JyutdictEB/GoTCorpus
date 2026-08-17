<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" :aria-label="$t('common.menu')" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $t('app.title') }}
        </q-toolbar-title>

        <q-btn-dropdown flat dense no-caps :label="languageLabel">
          <q-list>
            <q-item
              v-for="option in languageOptions"
              :key="option.value"
              clickable
              @click="onLanguageChange(option.value)"
            >
              <q-item-section>
                <q-item-label>{{ option.label }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon v-if="locale === option.value" name="check" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <div class="q-ml-sm">v0.1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="175" :breakpoint="700">
      <q-scroll-area style="height: calc(100% - 0px); margin-top: 0px;">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.homepage') }}
            </q-item-section>
          </q-item>

          <q-item to="/introduction" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.introduction') }}
            </q-item-section>
          </q-item>

          <q-item to="/phoneme_description" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.phonemeDescription') }}
            </q-item-section>
          </q-item>

          <q-item to="/vocabulary" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.vocabulary') }}
            </q-item-section>
          </q-item>

          <q-item to="/sentences" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.sentences') }}
            </q-item-section>
          </q-item>

          <q-item to="/idioms" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.idioms') }}
            </q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>

            <q-item-section id="list-name">
              {{ $t('nav.about') }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale, SupportedLocale } from 'boot/i18n';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const { locale } = useI18n()

    const languageOptions: { value: SupportedLocale; label: string }[] = [
      { value: 'en-US', label: 'English' },
      { value: 'zh-HK', label: '繁體中文' },
    ]

    const languageLabel = computed(
      () => languageOptions.find(option => option.value === locale.value)?.label ?? 'English'
    )

    function onLanguageChange(value: SupportedLocale) {
      setLocale(value)
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      locale,
      languageOptions,
      languageLabel,
      onLanguageChange,
    }
  }
});
</script>