export default {
  app: {
    title: 'Lagarrue 北部灣粵語在線語料庫',
  },
  common: {
    search: '搜尋',
    menu: '選單',
  },
  nav: {
    homepage: '首頁',
    introduction: '導言',
    phonemeDescription: '音位描述',
    vocabulary: '詞彙',
    sentences: '例句',
    idioms: '成語',
    about: '關於',
  },
  language: {
    enUS: 'English',
    zhHK: '繁體中文',
  },
  pages: {
    introduction: {
      title: '導言',
    },
    phonemeDescription: {
      title: '音位描述',
    },
    vocabulary: {
      title: '詞彙',
    },
    sentences: {
      title: '例句',
    },
    idioms: {
      title: '成語',
    },
  },
  indexPage: {
    cover: '封面',
    letter1: 'Galliéni 將軍來信（1）',
    letter2: 'Galliéni 將軍來信（2）',
    coverCaption: '書籍封面',
  },
  columns: {
    index: '序號',
    pdfPage: 'PDF 頁碼',
    originalPage: '原書頁碼',
    originalText: '原文',
    jyutpingPlusPlus: 'Jyutping++',
    corresChar: '對應漢字',
    originalFrenchText: '法語原文',
    frenchGoogleTrans: '法語（Google 翻譯）',
    frenchTransCorr: '法語（譯文校訂）',
    originalVietnameseText: '越南語原文',
    vietnameseGoogleTrans: '越南語（Google 翻譯）',
    vietnameseTransCorr: '越南語（譯文校訂）',
    note: '備註',
    googleTrans: 'Google 翻譯',
    deepLTrans: 'DeepL 翻譯',
    presumptions: '擬測',
    spellings: '拼寫',
    descriptions: '描述',
    languageAnalogues: '語言類比',
    exampleWords: '例詞',
    jyutpingPlusPlusTokenized: 'Jyutping++（分詞）',
  },
  about: {
    heading: '關於',
    sourceMaterialHeading: '原始材料',
    sourceMaterialBody:
      '本語料庫建基於《Éléments de Langue Chinoise: Dialecte Cantonais, notation Quốc Ngữ》——法國海軍軍官 Lagarrue 1900 年於河內出版的教科書，供法國軍官、公務員及殖民者使用。該書記錄晚清時期北部灣（GoT）地區的粵語，此一方言在當時的文獻記載甚為罕見。其最獨特之處，在於全書以越南文字（Chữ Quốc ngữ）而非當時西方作者慣用的拉丁字母拼寫粵語。',
    contentsHeading: '語料庫內容',
    contentsBody:
      '原書收錄逾 2,400 個詞彙、約 2,500 個附讀音的獨立字形，另有語音與語法說明、會話課文、以粵語音誦讀的文言文狀詞、粵–法–越三語詞表、附法語譯文的粵語成語，以及與同期廣州粵語的比較。本網站呈現書中數碼化後的詞彙、例句與成語，並提供網上檢索功能。',
    digitizationHeading: '數碼化流程',
    digitizationBody:
      '前處理流程結合人工與自動化技術：以越南文字書寫的粵語材料，因並無標準越南語拼法可依，須以人工整理；法文部分以 OCR（Azure AI Vision）識別後再經人工校對；法語及越南語注釋以機器翻譯批量處理，再經人工核對。轉寫文本其後透過一套基於 Unicode 規則的演算法，將越南文字連同聲調符號分解，轉換為 Jyutping++。完整流程詳見下方引用的補充研究——該研究曾於第二十七屆國際粵方言研討會發表，並刊於《Buckeye East Asian Linguistics》（2024）。',
    findingsHeading: '語言學發現',
    findingsBody:
      '基於本語料庫的分析（Lai et al. 2023，曾於第二十五屆國際粵方言研討會發表）指出該邊境方言的若干音系特點：豪、侯兩韻合流，陽韻與梗攝白讀合流，以及古上聲讀升調的明顯用例。詳情見下方引用的主要研究。',
    openAccessHeading: '開放取用',
    openAccessBody1:
      '本語料庫於網上免費開放（got.jyutdict.org），附檢索功能；在完成進一步校訂後，底層資料庫亦將開放源碼。',
    openAccessBody2:
      '歡迎研究者及對粵語歷史語言學有興趣的人士使用本資料，並引用下列研究。',
    citationHeading: '引用',
    citationIntro:
      '歡迎引用本計劃！若引用的內容與本計劃的前處理工序及語料庫語言學相關，請引用{supplementary}；若與本計劃的歷史語言學相關，請引用{main}；若與本計劃的網站程式碼相關，請引用{github}。',
    citationSupplementary: '補充研究',
    citationMain: '主要研究',
    citationGithub: 'GitHub 儲存庫',
    supplementaryHeading: '補充研究',
    mainHeading: '主要研究',
    githubHeading: 'GitHub 儲存庫',
    mlaLabel: 'MLA 第 8 版：',
    apaLabel: 'APA：',
    contactHeading: '聯絡我們',
    contactIntro: '如有任何疑問或意見，歡迎透過 {email} 與我們聯絡。',
    contactGithub: '本計劃由我們的個人熱忱所支持。原始碼可在我們的 {githubPage} 上取得。',
    githubPageLink: 'GitHub 頁面',
    friendlyLinks: '友好連結：',
    links: {
      hamzauBaakwaa: 'Hamzau Baakwaa（一個與本資料庫相近、記錄現代方言的網上中文字典）：',
      jyutdict: 'Jyutdict：',
      lingnaamJyutjamHomepage: 'Lingnaam Jyutjam 主頁：',
      jyutpingPlusPlus: 'Jyutping++：',
      jyutping: 'Jyutping：',
      jyutpingInputMethod: 'Jyutping 輸入法：',
    },
    linkUrls: {
      hamzauBaakwaa: 'https://hamzau.com',
      jyutdict: 'https://jyutdict.org',
      lingnaamJyutjamHomepage: 'https://jyutjam.org/',
      jyutpingPlusPlus: 'https://jyutjam.org/jpp/',
      jyutping: 'https://jyutping.org/',
      jyutpingInputMethod: 'https://jyutping.net/',
    },
  },
  errorNotFound: {
    message: '糟糕，這裏甚麼都沒有……',
    goHome: '返回首頁',
  },
}