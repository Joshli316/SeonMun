type Lang = 'en' | 'ko';

interface Translations {
  [key: string]: { en: string; ko: string };
}

const strings: Translations = {
  // Nav
  'nav.research': { en: 'Research', ko: '연구' },
  'nav.tools': { en: 'Tools', ko: '도구' },
  'nav.heritage': { en: 'Heritage', ko: '유산' },
  'nav.about': { en: 'About', ko: '소개' },
  'nav.search': { en: 'Search', ko: '검색' },

  // Hero
  'hero.title': {
    en: 'From Jerusalem of the East to the World\'s Darkest Place',
    ko: '동방의 예루살렘에서 세계에서 가장 어두운 곳으로'
  },
  'hero.subtitle': {
    en: 'Pyongyang once had over 100 churches and was the center of Korean Christianity. Today it is the capital of the nation ranked #1 on the World Watch List for 23+ consecutive years. This platform connects 242 years of that story to today\'s defector ministry and "Day After" preparedness.',
    ko: '평양에는 한때 100개 이상의 교회가 있었고 한국 기독교의 중심지였습니다. 오늘날 평양은 23년 이상 연속 세계감시목록 1위인 나라의 수도입니다. 이 플랫폼은 242년의 역사를 오늘날의 탈북민 사역과 "그날 이후" 대비와 연결합니다.'
  },
  'hero.cta.archive': { en: 'Explore the Archive', ko: '아카이브 탐색' },
  'hero.cta.research': { en: 'Read the Research', ko: '연구 읽기' },

  // Stats
  'stats.watchlist': { en: '#1 World Watch List', ko: '세계감시목록 1위' },
  'stats.watchlist.detail': { en: '23+ consecutive years', ko: '23년 이상 연속' },
  'stats.believers': { en: 'Est. 200K-400K', ko: '추정 20만-40만' },
  'stats.believers.detail': { en: 'secret believers', ko: '비밀 신자' },
  'stats.prisoners': { en: '50K-70K', ko: '5만-7만' },
  'stats.prisoners.detail': { en: 'in prison camps', ko: '정치범수용소 수감' },
  'stats.defectors': { en: '34,500+', ko: '34,500명 이상' },
  'stats.defectors.detail': { en: 'defectors in South Korea', ko: '남한 거주 탈북민' },

  // Three Pillars
  'pillars.research.title': { en: 'Research Archive', ko: '연구 아카이브' },
  'pillars.research.desc': { en: '12 in-depth reports spanning Catholic beginnings (1784), the 1907 Revival, Japanese occupation, Juche, the underground church, and the Korean-English scholarship gap.', ko: '천주교 시작(1784년), 1907년 부흥, 일제강점기, 주체사상, 지하교회, 한영 학술 격차를 아우르는 12편의 심층 보고서.' },
  'pillars.tools.title': { en: 'Interactive Tools', ko: '대화형 도구' },
  'pillars.tools.desc': { en: '"Day After" scenario planner, defector ministry training modules, AI-powered archive search, and preparedness assessment tools.', ko: '"그날 이후" 시나리오 플래너, 탈북민 사역 훈련 모듈, AI 기반 아카이브 검색, 대비 평가 도구.' },
  'pillars.heritage.title': { en: 'Heritage Experience', ko: '유산 체험' },
  'pillars.heritage.desc': { en: '"Jerusalem of the East" — Pyongyang\'s lost churches. The 1907 Revival. Juche as counterfeit Christianity. Interactive explorations of North Korea\'s Christian story.', ko: '"동방의 예루살렘" — 평양의 잃어버린 교회들. 1907년 부흥. 기독교의 모조품으로서의 주체사상. 북한 기독교 이야기의 대화형 탐색.' },

  // Timeline Preview
  'timeline.title': { en: '242 Years of Christianity in North Korea', ko: '북한 기독교 242년' },
  'timeline.subtitle': {
    en: 'From the first Catholic converts to the underground church — trace the arc of faith through persecution.',
    ko: '최초의 천주교 신자부터 지하교회까지 — 박해를 통한 신앙의 궤적을 따라가세요.'
  },
  'timeline.view_full': { en: 'View Full Timeline', ko: '전체 타임라인 보기' },

  // Quartet
  'quartet.title': { en: 'Four Countries. Four Stories. One Mission.', ko: '네 나라. 네 이야기. 하나의 사명.' },
  'quartet.subtitle': {
    en: 'SeonMun is part of a quartet of AI-powered missions research platforms covering Asia\'s most significant Christian stories.',
    ko: '선문은 아시아의 가장 중요한 기독교 이야기를 다루는 AI 기반 선교 연구 플랫폼 4부작의 일부입니다.'
  },
  'quartet.china': { en: 'China', ko: '중국' },
  'quartet.china.desc': { en: 'Persecution + rapid growth', ko: '박해 + 급속한 성장' },
  'quartet.japan': { en: 'Japan', ko: '일본' },
  'quartet.japan.desc': { en: 'Full freedom + persistent stagnation', ko: '완전한 자유 + 지속적 정체' },
  'quartet.vietnam': { en: 'Vietnam', ko: '베트남' },
  'quartet.vietnam.desc': { en: 'Controlled accommodation + steady growth', ko: '통제된 수용 + 꾸준한 성장' },
  'quartet.nk': { en: 'North Korea', ko: '북한' },
  'quartet.nk.desc': { en: 'Total suppression + unknown survival', ko: '완전한 억압 + 알 수 없는 생존' },

  // Footer
  'footer.mission': {
    en: 'We believe AI can serve the Great Commission — not replace human connection, but extend it across the most closed border on earth.',
    ko: '우리는 AI가 대위임명을 섬길 수 있다고 믿습니다 — 인간의 연결을 대체하는 것이 아니라, 지구상 가장 폐쇄적인 국경 너머로 확장하는 것입니다.'
  },
  'footer.tagline': { en: 'Powered by AI. Grounded in 242 years of history.', ko: 'AI 기반. 242년의 역사에 뿌리.' },
  'footer.fc': { en: 'About', ko: '소개' },
  'footer.privacy': { en: 'Privacy', ko: '개인정보' },
  'footer.github': { en: 'GitHub', ko: 'GitHub' },
  'footer.notebook': { en: 'NotebookLM', ko: 'NotebookLM' },

  // Research page
  'research.title': { en: 'Research Reports', ko: '연구 보고서' },
  'research.subtitle': {
    en: '12 in-depth reports on Christianity in North Korea — from Catholic beginnings to AI-enabled scholarship.',
    ko: '북한 기독교에 관한 12편의 심층 보고서 — 천주교 시작부터 AI 기반 학술 연구까지.'
  },
  'research.filter.all': { en: 'All', ko: '전체' },
  'research.filter.history': { en: 'History', ko: '역사' },
  'research.filter.theology': { en: 'Theology', ko: '신학' },
  'research.filter.contemporary': { en: 'Contemporary', ko: '현대' },
  'research.filter.methodology': { en: 'Methodology', ko: '방법론' },

  // Timeline page
  'timeline.page.title': { en: 'Christianity in North Korea: A Timeline', ko: '북한의 기독교: 타임라인' },
  'timeline.page.subtitle': {
    en: 'From the first Catholic converts (1784) to the underground church today — scroll through 242 years.',
    ko: '최초의 천주교 신자(1784년)부터 오늘날의 지하교회까지 — 242년을 스크롤하세요.'
  },

  // Timeline eras
  'era.catholic': { en: 'Catholic Beginnings', ko: '천주교 시작' },
  'era.protestant': { en: 'Protestant Arrival', ko: '개신교 도래' },
  'era.japanese': { en: 'Japanese Occupation', ko: '일제강점기' },
  'era.division': { en: 'Division & War', ko: '분단과 전쟁' },
  'era.kim1': { en: 'Kim Il-sung', ko: '김일성 시대' },
  'era.kim2': { en: 'Kim Jong-il', ko: '김정일 시대' },
  'era.kim3': { en: 'Kim Jong-un', ko: '김정은 시대' },

  // Ask the Archive
  'ask.title': { en: 'Ask the Archive', ko: '아카이브에 질문하기' },
  'ask.subtitle': {
    en: 'Ask anything about Christianity in North Korea. Every answer is grounded in our 12 research reports with source citations.',
    ko: '북한 기독교에 관한 무엇이든 질문하세요. 모든 답변은 12편의 연구 보고서를 근거로 하며 출처가 인용됩니다.'
  },
  'ask.placeholder': { en: 'Ask about North Korean Christianity...', ko: '북한 기독교에 대해 질문하세요...' },
  'ask.send': { en: 'Send', ko: '전송' },
  'ask.thinking': { en: 'Searching the archive...', ko: '아카이브 검색 중...' },

  // Search
  'search.placeholder': { en: 'Search reports, timeline, tools...', ko: '보고서, 타임라인, 도구 검색...' },
  'search.hint': { en: 'Press Cmd+K to search', ko: 'Cmd+K로 검색' },
  'search.no_results': { en: 'No results found', ko: '결과를 찾을 수 없습니다' },

  // Report
  'toc.title': { en: 'Contents', ko: '목차' },
  'toc.sources': { en: 'Sources', ko: '참고자료' },
  'toc.back': { en: '← Back to Reports', ko: '← 보고서 목록으로' },
  'report.ai_translated': { en: 'AI-translated — review pending', ko: 'AI 번역 — 검토 대기' },

  // About
  'about.title': { en: 'About SeonMun', ko: '선문 소개' },
  'about.p1': {
    en: 'SeonMun (선문/宣門) is a bilingual research platform applying AI to North Korea missions scholarship and defector ministry support.',
    ko: '선문(宣門)은 AI를 북한 선교 학술 연구와 탈북민 사역 지원에 적용하는 이중언어 연구 플랫폼입니다.'
  },
  'about.p2': {
    en: 'The platform connects 242 years of Christianity in North Korea to practical ministry tools. Every feature is bilingual, AI-powered, and grounded in peer-reviewed research.',
    ko: '이 플랫폼은 북한 기독교 242년의 역사를 실용적 사역 도구와 연결합니다. 모든 기능은 이중언어, AI 기반이며 동료 심사를 거친 연구에 근거합니다.'
  },

  // Common
  'common.loading': { en: 'Loading...', ko: '로딩 중...' },
  'common.error': { en: 'Something went wrong. Please try again.', ko: '문제가 발생했습니다. 다시 시도해 주세요.' },
  'common.back': { en: 'Back', ko: '뒤로' },
  'common.read_more': { en: 'Read More', ko: '더 보기' },
  'common.words': { en: 'words', ko: '단어' },
};

let currentLang: Lang = (localStorage.getItem('seonmun-lang') as Lang) || 'en';

export function t(key: string): string {
  const entry = strings[key];
  if (!entry) {
    console.warn(`Missing i18n key: ${key}`);
    return key;
  }
  return entry[currentLang];
}

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang): void {
  currentLang = lang;
  localStorage.setItem('seonmun-lang', lang);
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')!;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')!;
    (el as HTMLInputElement).placeholder = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html')!;
    el.innerHTML = t(key);
  });
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

export function toggleLang(): void {
  setLang(currentLang === 'en' ? 'ko' : 'en');
}

export { type Lang, type Translations };
