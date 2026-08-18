export default {
  app: {
    title: "Lagarrue's GoT Cantonese Online Corpus",
  },
  common: {
    search: 'Search',
    menu: 'Menu',
  },
  nav: {
    homepage: 'Homepage',
    introduction: 'Introduction',
    phonemeDescription: 'Phoneme Description',
    vocabulary: 'Vocabulary',
    sentences: 'Sentences',
    idioms: 'Idioms',
    about: 'About',
  },
  language: {
    enUS: 'English',
    zhHK: '繁體中文',
  },
  pages: {
    introduction: {
      title: 'Introduction',
    },
    phonemeDescription: {
      title: 'Phoneme Description',
    },
    vocabulary: {
      title: 'Vocabulary',
    },
    sentences: {
      title: 'Sentences',
    },
    idioms: {
      title: 'Idioms',
    },
  },
  indexPage: {
    cover: 'Cover',
    letter1: 'Letter from General Galliéni (1)',
    letter2: 'Letter from General Galliéni (2)',
    coverCaption: 'Cover page of the book',
  },
  columns: {
    index: 'Index',
    pdfPage: 'PDF Page',
    originalPage: 'Original Page',
    originalText: 'Original Text',
    jyutpingPlusPlus: 'Jyutping++',
    corresChar: 'Corres. Char.',
    originalFrenchText: 'Original French Text',
    frenchGoogleTrans: 'French (Google Trans.)',
    frenchTransCorr: 'French (Trans. Corr.)',
    originalVietnameseText: 'Original Vietnamese Text',
    vietnameseGoogleTrans: 'Vietnamese (Google Trans.)',
    vietnameseTransCorr: 'Vietnamese (Trans. Corr.)',
    note: 'Note',
    googleTrans: 'Google Trans.',
    deepLTrans: 'DeepL Trans.',
    presumptions: 'Presumptions',
    spellings: 'Spellings',
    descriptions: 'Descriptions',
    languageAnalogues: 'Language Analogues',
    exampleWords: 'Example Words',
    jyutpingPlusPlusTokenized: 'Jyutping++ (Tokenized)',
  },
  about: {
    heading: 'About',
    sourceMaterialHeading: 'The Source Material',
    sourceMaterialBody:
      'This corpus is built on Éléments de Langue Chinoise: Dialecte Cantonais, notation Quốc Ngữ, a textbook published in Hanoi in 1900 by Lagarrue, a French naval officer, for French officers, officials and colonists. The book records the Cantonese spoken in the Gulf of Tonkin (GoT) region in the late Qing period, a variety for which documentation from that era is scarce. Its most unusual feature is that the Cantonese is written in the Vietnamese alphabet (Chữ Quốc ngữ) rather than the Latin alphabet commonly used by Western authors of the time.',
    contentsHeading: 'What the Corpus Contains',
    contentsBody:
      'The textbook contains over 2,400 vocabulary items and some 2,500 unique characters with pronunciation, together with pronunciation and grammar notes, dialogues, pleadings in Classical Chinese read with Cantonese phonetics, a trilingual Cantonese–French–Vietnamese glossary, Cantonese idioms with French translations, and comparisons with the Guangzhou Cantonese of the same period. This website presents the digitized vocabulary, sentences and idioms from the book, searchable online.',
    digitizationHeading: 'How It Was Digitized',
    digitizationBody:
      'The pre-processing workflow combined manual work with automation. The Cantonese text written in the Vietnamese alphabet was organized by hand, since no standard Vietnamese spelling exists for these sounds. The French parts were processed with OCR (Azure AI Vision) and then manually corrected, and the French and Vietnamese annotations were machine-translated in batches and checked by hand. The transcribed text was then converted to Jyutping++ using a Unicode rule-based algorithm that decomposes Vietnamese characters and their tone marks. The full workflow is described in the supplementary study cited below, which was presented at the 27th International Conference on Yue Dialects and published in Buckeye East Asian Linguistics (2024).',
    findingsHeading: 'Linguistic Findings',
    findingsBody:
      'Analysis based on this corpus (Lai et al. 2023, presented at the 25th International Conference on Yue Dialects) reports several phonological features of this border variety: the merger of the rhymes 豪 and 侯, the 陽 rhyme merging with the colloquial reading of the 梗 class, and notable instances of the rising tone 古上聲. Details can be found in the main study cited below.',
    openAccessHeading: 'Open Access',
    openAccessBody1:
      'The corpus is freely accessible online (got.jyutdict.org) with a search function, and the underlying database will be open-sourced after further proofreading.',
    openAccessBody2:
      'Researchers and anyone interested in the historical linguistics of Cantonese are welcome to use the data and cite the studies below.',
    citationHeading: 'Citation',
    citationIntro:
      'Welcome to cite this project! If the cited content is related to the preprocessing and corpus linguistics of this project, please cite the {supplementary}; if it is related to the historical linguistics of this project, please cite the {main}; if it is related to the website code of this project, please cite the {github}.',
    citationSupplementary: 'supplementary study',
    citationMain: 'main study',
    citationGithub: 'GitHub repository',
    supplementaryHeading: 'The supplementary study',
    mainHeading: 'The main study',
    githubHeading: 'GitHub repository',
    mlaLabel: 'MLA 8th:',
    apaLabel: 'APA:',
    contactHeading: 'Contact Us',
    contactIntro: 'For any questions or comments, please contact us at {email}.',
    contactGithub:
      'This project is supported by our personal passions. Source code is available on our {githubPage}.',
    githubPageLink: 'GitHub page',
    friendlyLinks: 'Friendly Links:',
    links: {
      hamzauBaakwaa:
        'Hamzau Baakwaa (An online Chinese dictionary of a modern variety similar to this database):',
      jyutdict: 'Jyutdict:',
      lingnaamJyutjamHomepage: 'Lingnaam Jyutjam Homepage:',
      jyutpingPlusPlus: 'Jyutping++:',
      jyutping: 'Jyutping:',
      jyutpingInputMethod: 'Jyutping Input Method:',
    },
    linkUrls: {
      hamzauBaakwaa: 'https://hamzau.com',
      jyutdict: 'https://jyutdict.org',
      lingnaamJyutjamHomepage: 'https://jyutjam.org/en/',
      jyutpingPlusPlus: 'https://jyutjam.org/en/jpp/',
      jyutping: 'https://jyutping.org/en/',
      jyutpingInputMethod: 'https://jyutping.net/',
    },
  },
  errorNotFound: {
    message: 'Oops. Nothing here...',
    goHome: 'Go Home',
  },
}