# AGENTS.md

Guidance for AI agents working in this repository.

## Project overview

Lagarrue's GoT Cantonese Online Corpus — a static SPA presenting a digitized
late-19th-century Cantonese linguistic corpus from the Gulf of Tonkin region.
There is **no backend**: all data lives as JSON files under `src/assets/` and is
bundled at build time.

- Repository: https://github.com/JyutdictEB/GoTCorpus
- Stack: Quasar 2 + Vue 3 (Composition API via `defineComponent`) + TypeScript,
  built with `@quasar/app-vite` v2 (Vite 8)
- Package manager: **npm** (a `package-lock.json` is committed; do not switch to
  yarn/pnpm)

## Requirements

- **Node >= 22.22.0** — enforced by `engines` and hard-checked by the Quasar
  CLI; older Node makes every `quasar` command exit immediately.
- After a fresh clone, run `npx quasar prepare` once so `.quasar/tsconfig.json`
  is generated (`tsconfig.json` extends it; `.quasar/` is git-ignored).

## Commands

| Task | Command |
|---|---|
| Install | `npm install` |
| Dev server | `npm run dev` (opens browser automatically) |
| Lint | `npm run lint` (eslint over `.js/.ts/.vue`) |
| Format | `npm run format` (prettier) |
| Production build | `npm run build` → outputs `dist/spa/` |
| Tests | none — `npm test` is a placeholder |

Before considering any change done, run `npm run lint` and `npm run build`;
both must pass. CI (`.github/workflows/ci.yml`) runs install, lint, build and
`npm audit --audit-level=high` on every push/PR — keep it green.

## Project layout

- `src/layouts/MainLayout.vue` — shell with navigation drawer; version string
  shown in the toolbar header (keep it in sync with `package.json` version).
- `src/pages/` — one page per corpus section: `IntroductionPage`,
  `PhonemeDescriptionPage`, `VocabularyPage`, `SentencesPage`, `IdiomsPage`,
  plus `IndexPage` (scanned images carousel) and `AboutPage` (description,
  citations, contact).
- `src/router/routes.ts` — routes are lazy-loaded; hash mode is intentional
  (static-hosting friendly), do not switch to history mode without configuring
  the host.
- `src/assets/*.json` — corpus data. `vocabulary.json` (~1.3 MB) is the largest.
- `src/boot/` — empty apart from `.gitkeep`; there is no axios or any network
  layer, do not reintroduce one for local data.

## Conventions

- **JSON data is loaded on demand**: pages fetch their JSON with dynamic
  `import()` inside `onMounted` and expose a `loading` ref wired to
  `q-table :loading`. Never revert to top-level static JSON imports — that
  inlines the data into the page chunk (Vocabulary was a 874 KB chunk).
- Path aliases (`assets/...`, `pages/...`, `layouts/...`, `components/...`)
  come from the Quasar-generated tsconfig; use them instead of relative paths.
- `quasar.config.js` is ESM (`defineConfig` from `#q-app/wrappers`). The
  `chunkSizeWarningLimit = 1100` in `extendViteConf` deliberately silences the
  expected large JSON data chunk warning.
- No test suite exists; lint + a successful build are the quality gate.

## Gotchas

- `package.json` contains npm `overrides` (esbuild, glob) that pin transitive
  deps to non-vulnerable versions — keep them until the parent packages update.
- `npm audit` fails against the npmmirror registry (audit API not implemented);
  use `npm audit --registry=https://registry.npmjs.org` if your npm is
  configured to a mirror.
