# GoT Corpus

**Lagarrue's GoT Cantonese Online Corpus** — an online, searchable corpus of
Cantonese linguistic materials from the Gulf of Tonkin (GoT) region, digitized
from a late-19th-century work authored by a French military officer, in which
Cantonese is transcribed using the Vietnamese alphabet.

The corpus contains over 2,400 vocabulary items and more than 2,500 unique
characters with pronunciation, presented through a static single-page
application — no backend, all data is bundled as JSON.

**Live repository:** https://github.com/JyutdictEB/GoTCorpus

## Features

- **Introduction** — background of the source materials
- **Phoneme Description** — the Jyutping++ transcription scheme
- **Vocabulary** — 2,400+ entries with original text, Jyutping++, corresponding
  characters, French and Vietnamese translations (searchable table)
- **Sentences** — example sentences from the source
- **Idioms** — idiom entries
- **About** — project background, citation formats, contact

## Tech stack

- [Quasar 2](https://quasar.dev/) + [Vue 3](https://vuejs.org/) + TypeScript
- [`@quasar/app-vite`](https://v2.quasar.dev/quasar-cli-vite) v2 (Vite 8)
- Corpus data: static JSON under `src/assets/`, lazy-loaded per page
- CI: GitHub Actions (lint + build + `npm audit`) on every push/PR

## Getting started

Requires **Node.js >= 22.22** and npm.

```bash
npm install
npx quasar prepare   # generates .quasar/tsconfig.json (needed once per clone)
npm run dev          # start dev server with hot reload
```

### Other scripts

```bash
npm run lint         # eslint
npm run format       # prettier
npm run build        # production build -> dist/spa/
```

The built site in `dist/spa/` can be served by any static file host (the router
uses hash mode, so no server-side rewrites are needed).

## Project structure

```
src/
├── assets/            # corpus JSON data + scanned page images
├── layouts/           # MainLayout (navigation shell)
├── pages/             # one page per corpus section
├── router/            # lazy-loaded routes (hash mode)
└── css/               # global styles, Quasar variables
```

## Citation

If you use this project, please cite accordingly (see the About page for full
details):

- **Supplementary study** (pre-processing / corpus linguistics): Huang, J., &
  Lai, J. (2024). Evolving pre-processing of raw corpus: The digitization
  initiative of Cantonese material at the Sino-Vietnamese border in the late
  19th century. *Buckeye East Asian Linguistics*, 9, 32–51.
- **Main study** (historical linguistics): Lai, J., Wòng, P., Huang, J., &
  Ng, G.-O. (2023). The affiliation of Cantonese at the Sino-Vietnamese border
  in the late 19th century. *Current Research in Chinese Linguistics*, 102(2).
  https://doi.org/10.29499/CrCL.202307_102(2).0004
- **Website code**: cite this GitHub repository (see About page).

## Contact & links

- Contact: **jyutjam@tutanota.com**
- [Hamzau Baakwaa](https://hamzau.com) · [Jyutdict](https://jyutdict.org) ·
  [Lingnaam Jyutjam](https://jyutjam.org) · [Jyutping++](https://jyutjam.org/j++/)

## License

See [LICENCE](LICENCE).
