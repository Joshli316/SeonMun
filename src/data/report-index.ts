const reports = [
  {
    id: '01',
    title: { en: 'Christianity in North Korea: A Historical Overview', ko: '북한의 기독교: 역사적 개관' },
    summary: { en: 'From the first Catholic converts in 1784 through the "Jerusalem of the East" era to total suppression under three generations of Kim family rule.', ko: '1784년 최초의 천주교 신자부터 "동방의 예루살렘" 시대를 거쳐 3대에 걸친 김씨 통치 하의 완전한 억압까지. AI 번역 — 검토 대기' },
    tags: ['History'],
  },
  {
    id: '02',
    title: { en: 'Existing Scholarship on Christianity in North Korea', ko: '북한 기독교에 관한 기존 학술 연구' },
    summary: { en: 'A comprehensive review of Korean-language, English-language, and multilingual scholarship on North Korean Christianity.', ko: '북한 기독교에 관한 한국어, 영어, 다국어 학술 연구의 종합적 검토. AI 번역 — 검토 대기' },
    tags: ['Methodology'],
  },
  {
    id: '03',
    title: { en: 'Research Gaps in North Korea Missions Scholarship', ko: '북한 선교 학술 연구의 공백' },
    summary: { en: 'Identifying the biggest unanswered questions — from underground church estimates to "Day After" planning frameworks.', ko: '지하교회 추정치부터 "그날 이후" 계획 프레임워크까지 — 가장 큰 미해결 질문 식별. AI 번역 — 검토 대기' },
    tags: ['Methodology'],
  },
  {
    id: '04',
    title: { en: 'AI-Enabled Research Methods for North Korea Studies', ko: 'AI 기반 북한 연구 방법론' },
    summary: { en: 'How AI tools — NLP, satellite analysis, defector testimony processing — can address the fundamental access problem.', ko: 'NLP, 위성 분석, 탈북민 증언 처리 등 AI 도구가 근본적인 접근 문제를 어떻게 해결할 수 있는지. AI 번역 — 검토 대기' },
    tags: ['Methodology', 'Contemporary'],
  },
  {
    id: '05',
    title: { en: 'Digital Archives and Data Infrastructure', ko: '디지털 아카이브와 데이터 인프라' },
    summary: { en: 'Building the digital infrastructure for North Korea Christianity research — existing archives, gaps, and platform design.', ko: '북한 기독교 연구를 위한 디지털 인프라 구축 — 기존 아카이브, 공백, 플랫폼 설계. AI 번역 — 검토 대기' },
    tags: ['Methodology'],
  },
  {
    id: '06',
    title: { en: 'Defector Ministry and Diaspora Engagement', ko: '탈북민 사역과 디아스포라 참여' },
    summary: { en: 'The 34,500+ North Korean defectors in South Korea — their ministry needs, church integration challenges, and role in future missions.', ko: '남한 내 34,500명 이상의 탈북민 — 사역 필요, 교회 통합 과제, 미래 선교에서의 역할. AI 번역 — 검토 대기' },
    tags: ['Contemporary'],
  },
  {
    id: '07',
    title: { en: 'Juche Ideology and Its Cultural Impact on Christianity', ko: '주체사상과 기독교에 대한 문화적 영향' },
    summary: { en: 'How Kim Il-sung built a counterfeit religion on Christian foundations — and what that means for the underground church and defector ministry.', ko: '김일성이 기독교 토대 위에 어떻게 모조 종교를 건설했는지 — 그리고 이것이 지하교회와 탈북민 사역에 무엇을 의미하는지. AI 번역 — 검토 대기' },
    tags: ['Theology', 'History'],
  },
  {
    id: '08',
    title: { en: 'The Underground Church: What We Know and Don\'t', ko: '지하교회: 우리가 아는 것과 모르는 것' },
    summary: { en: 'Estimates range from 0 to 500,000. Models of secret faith, show churches, defector reports — and the honest limits of our knowledge.', ko: '추정치는 0에서 50만까지. 비밀 신앙의 모델, 전시용 교회, 탈북민 보고 — 그리고 우리 지식의 솔직한 한계. AI 번역 — 검토 대기' },
    tags: ['Contemporary', 'Theology'],
  },
  {
    id: '09',
    title: { en: 'Korean vs. Western Scholarship: The Language Divide', ko: '한국 학계 대 서양 학계: 언어의 장벽' },
    summary: { en: 'South Korean research is 5-10x larger than English-language work — but invisible to the global church. Bridging the scholarship gap.', ko: '한국 연구는 영어 연구보다 5-10배 더 크지만 세계 교회에는 보이지 않습니다. 학술 격차 해소. AI 번역 — 검토 대기' },
    tags: ['Methodology'],
  },
  {
    id: '10',
    title: { en: 'Historical Figures of Korean Christianity', ko: '한국 기독교의 역사적 인물들' },
    summary: { en: 'Robert Jermain Thomas, Samuel Moffett, Kil Sun-ju, Ju Ki-Chul, Son Yang-won — the pioneers, martyrs, and visionaries.', ko: '로버트 저메인 토마스, 사무엘 모펫, 길선주, 주기철, 손양원 — 개척자, 순교자, 선각자. AI 번역 — 검토 대기' },
    tags: ['History'],
  },
  {
    id: '11',
    title: { en: 'Current Missions Innovations and "Day After" Planning', ko: '현재의 선교 혁신과 "그날 이후" 계획' },
    summary: { en: 'What happens if North Korea suddenly opens? Lessons from German reunification, Romanian revolution, and Chinese reform.', ko: '북한이 갑자기 개방되면 어떻게 될까요? 독일 통일, 루마니아 혁명, 중국 개혁의 교훈. AI 번역 — 검토 대기' },
    tags: ['Contemporary'],
  },
  {
    id: '12',
    title: { en: 'Competitive Analysis: North Korea Missions Landscape', ko: '경쟁 분석: 북한 선교 현황' },
    summary: { en: 'Open Doors, VOM Korea, NKDB, 38 North — what exists, what\'s missing, and where SeonMun fills the gap.', ko: '오픈도어즈, VOM 코리아, NKDB, 38 North — 무엇이 존재하고, 무엇이 부족하며, 선문이 어디서 공백을 메우는지. AI 번역 — 검토 대기' },
    tags: ['Contemporary', 'Methodology'],
  },
];

export default reports;
