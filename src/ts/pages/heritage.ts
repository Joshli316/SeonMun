import { getLang } from '../i18n';

export function renderHeritageLanding(app: HTMLElement): void {
  const lang = getLang();
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '유산 체험' : 'Heritage Experience'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '평양의 잃어버린 교회들부터 주체사상의 기독교 모방까지.' : 'From Pyongyang\'s lost churches to Juche\'s imitation of Christianity.'}</p>
        <div class="grid-2col">
          <a href="#/heritage/jerusalem" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">JERUSALEM OF THE EAST</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);">${lang === 'ko' ? '동방의 예루살렘' : 'Jerusalem of the East'}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? '평양에 100개 이상의 교회가 있었습니다. 1907년 부흥은 세계 기독교 역사상 가장 중요한 부흥 중 하나였습니다. 그 도시에 무슨 일이 일어났는지 알아보세요.' : 'Pyongyang once had over 100 churches. The 1907 Revival was one of the most significant in world Christianity. Discover what happened to that city.'}</p>
          </a>
          <a href="#/heritage/counterfeit" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">THE COUNTERFEIT</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);">${lang === 'ko' ? '모조품: 주체 대 기독교' : 'The Counterfeit: Juche vs. Christianity'}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? '주체사상은 기독교를 억압한 것이 아니라 대체했습니다. 삼위일체 → 3대 김씨. 대응 관계를 살펴보세요.' : 'Juche didn\'t just suppress Christianity — it replaced it. Trinity → Three Kims. Explore the parallels.'}</p>
          </a>
          <a href="#/heritage/revival" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">1907 REVIVAL</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);">${lang === 'ko' ? '1907년 대부흥' : 'The 1907 Revival'}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? '세계 기독교 역사상 가장 중요한 부흥 사건 중 하나. 길선주 목사의 공개 고백이 연쇄반응을 촉발했습니다.' : 'One of the most significant revival events in world Christianity. Pastor Kil Sun-ju\'s public confession started a chain reaction.'}</p>
          </a>
          <a href="#/heritage/showchurches" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">THE FOUR SHOW CHURCHES</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);">${lang === 'ko' ? '4개의 전시용 교회' : 'The Four Show Churches'}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? '봉수교회, 칠골교회, 장충성당, 정백사원. 진짜 교회인가 외교적 전시물인가?' : 'Bongsu, Chilgol, Changchung, Jongbaek. Real churches or diplomatic props?'}</p>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function renderJerusalem(app: HTMLElement): void {
  const lang = getLang();
  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <a href="#/heritage" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 유산 체험으로' : '← Back to Heritage'}</a>
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xl);">${lang === 'ko' ? '동방의 예루살렘' : 'Jerusalem of the East'}</h1>

        <div class="report-content">
          <h2>${lang === 'ko' ? '100개의 교회가 있는 도시' : 'A City of 100 Churches'}</h2>
          <p>${lang === 'ko' ? '20세기 초, 평양은 한국 기독교의 심장이었습니다. 도시 인구의 거의 30%가 기독교인이었고 100개 이상의 교회가 거리를 채웠습니다. 숭실학교, 조선기독교대학, 여러 병원과 학교가 선교사들에 의해 설립되었습니다.' : 'In the early 20th century, Pyongyang was the heart of Korean Christianity. Nearly 30% of the city\'s population was Christian, and over 100 churches filled its streets. Soongsil Academy, Chosun Christian College, and numerous hospitals and schools were founded by missionaries.'}</p>

          <h2>${lang === 'ko' ? '1907년 대부흥' : 'The 1907 Revival'}</h2>
          <p>${lang === 'ko' ? '1907년 1월, 장대현교회에서의 성경공부 모임에서 놀라운 일이 일어났습니다. 길선주 목사가 공개적으로 죄를 고백하자 연쇄 반응이 시작되었습니다. 한국 문화에서 이전에 알려지지 않았던 자발적이고 동시적인 공개 고백이 교회를 휩쓸었습니다. 30,000명 이상이 회심했습니다.' : 'In January 1907, at Bible study meetings in Jangdaehyeon Church, something extraordinary happened. When Pastor Kil Sun-ju publicly confessed his sins, a chain reaction began. Spontaneous, simultaneous public confession — previously unknown in Korean culture — swept through the church. Over 30,000 converts resulted.'}</p>
          <p style="color: var(--accent-ember); font-style: italic;">${lang === 'ko' ? '"이 부흥은 세계 기독교 역사상 가장 중요한 부흥 사건 중 하나로 남아 있습니다."' : '"This revival remains one of the most significant revival events in the history of world Christianity."'}</p>

          <h2>${lang === 'ko' ? '파괴' : 'The Destruction'}</h2>
          <p>${lang === 'ko' ? '1945년 해방 후, 평양은 소련의 통제 하에 놓였습니다. 김일성은 체계적인 기독교 억압을 시작했습니다. 교회가 폐쇄되고, 목사들이 체포되고, 약 30만 명의 기독교인이 남쪽으로 피난했습니다. 한국전쟁(1950-1953) 동안 남아있던 교회 대부분이 잔해로 변했습니다.' : 'After liberation in 1945, Pyongyang fell under Soviet control. Kim Il-sung began systematic suppression of Christianity. Churches were closed, pastors arrested, and an estimated 300,000 Christians fled south. During the Korean War (1950-1953), most remaining churches were reduced to rubble.'}</p>

          <h2>${lang === 'ko' ? '칠골교회: 가장 잔인한 아이러니' : 'Chilgol Church: The Cruelest Irony'}</h2>
          <p>${lang === 'ko' ? '김일성의 어머니 강반석은 독실한 장로교 집사였습니다. 어린 김일성은 교회에서 찬송가를 부르며 자랐습니다. 오늘날, 체제가 운영하는 칠골교회는 바로 그의 어머니가 다녔던 교회 자리에 세워져 있습니다. 기독교를 말살한 사람의 기독교인 어머니를 기리는 교회 — 평양의 가장 잔인한 아이러니입니다.' : 'Kim Il-sung\'s mother, Kang Pan-suk, was a devout Presbyterian deaconess. Young Kim grew up singing hymns at church. Today, the regime-operated Chilgol Church stands on the site of his mother\'s church. A church honoring the Christian mother of the man who destroyed Christianity — Pyongyang\'s cruelest irony.'}</p>

          <h2>${lang === 'ko' ? '무엇이 살아남았는가?' : 'What Survived?'}</h2>
          <p>${lang === 'ko' ? '오늘날 평양에는 4개의 전시용 교회만 남아 있습니다. 추정 20만-40만 명의 비밀 신자가 있지만, 아무도 확실히 알지 못합니다. 100개 이상의 교회가 있던 "동방의 예루살렘"은 23년 이상 세계에서 기독교인이 가장 심한 박해를 받는 나라 1위인 국가의 수도가 되었습니다.' : 'Today, only four show churches remain in Pyongyang. An estimated 200,000-400,000 secret believers may exist, but nobody knows for certain. The "Jerusalem of the East" — with its 100+ churches — became the capital of the nation ranked #1 for Christian persecution for 23+ consecutive years.'}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderCounterfeit(app: HTMLElement): void {
  const lang = getLang();

  const parallels = [
    { christian: { en: 'Trinity (Father, Son, Holy Spirit)', ko: '삼위일체 (성부, 성자, 성령)' }, juche: { en: 'Three Kims (Kim Il-sung, Kim Jong-il, Kim Jong-un)', ko: '3대 김씨 (김일성, 김정일, 김정은)' } },
    { christian: { en: 'Ten Commandments', ko: '십계명' }, juche: { en: 'Ten Principles of Monolithic Ideology', ko: '유일사상 10대 원칙' } },
    { christian: { en: 'Confession of Sin', ko: '죄의 고백' }, juche: { en: 'Self-Criticism Sessions (saenghwal chonghwa)', ko: '생활총화' } },
    { christian: { en: 'Pilgrimage to Holy Sites', ko: '성지순례' }, juche: { en: 'Mandatory visits to Mansu Hill', ko: '만수대 의무 방문' } },
    { christian: { en: 'Eternal Life', ko: '영생' }, juche: { en: 'Kim Il-sung: "Eternal President" (30+ years after death)', ko: '김일성: "영원한 주석" (사후 30년 이상)' } },
    { christian: { en: 'Nativity of Christ', ko: '그리스도의 탄생' }, juche: { en: 'Kim Jong-il birth narrative (sacred Paektu Mountain, double rainbow)', ko: '김정일 출생 설화 (신성한 백두산, 쌍무지개)' } },
    { christian: { en: 'Scripture (Bible)', ko: '경전 (성경)' }, juche: { en: 'Kim Il-sung Works (must be in every home)', ko: '김일성 저작집 (모든 가정에 필수)' } },
    { christian: { en: 'Original Sin', ko: '원죄' }, juche: { en: 'Songbun (hereditary class system based on family loyalty)', ko: '성분 (가문 충성도 기반 세습 계급제도)' } },
    { christian: { en: 'Hymns and Worship Songs', ko: '찬송가와 예배 노래' }, juche: { en: 'Revolutionary songs praising the Kim family', ko: '김씨 가문을 찬양하는 혁명 가요' } },
    { christian: { en: 'Grace and Salvation', ko: '은혜와 구원' }, juche: { en: '"Fatherly Love" of the Great Leader', ko: '위대한 수령의 "아버지 사랑"' } },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 960px;">
        <a href="#/heritage" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 유산 체험으로' : '← Back to Heritage'}</a>
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '모조품: 주체 대 기독교' : 'The Counterfeit: Juche vs. Christianity'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '주체사상은 기독교를 억압하기만 한 것이 아니라 대체했습니다. 김일성 — 장로교 집사의 아들 — 은 어린 시절의 신앙을 본떠 새로운 종교를 만들었습니다.' : 'Juche didn\'t just suppress Christianity — it replaced it. Kim Il-sung — son of a Presbyterian deaconess — built a new religion modeled on the faith of his childhood.'}</p>

        <div style="display: flex; flex-direction: column; gap: 2px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px;">
            <div style="background: var(--accent-ember-subtle); padding: var(--space-md) var(--space-lg); text-align: center;">
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); letter-spacing: 1px;">${lang === 'ko' ? '기독교' : 'CHRISTIANITY'}</span>
            </div>
            <div style="background: var(--bg-elevated); padding: var(--space-md) var(--space-lg); text-align: center;">
              <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-error); letter-spacing: 1px;">${lang === 'ko' ? '주체사상' : 'JUCHE'}</span>
            </div>
          </div>
          ${parallels.map(p => `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2px;">
              <div class="coal-panel" style="padding: var(--space-md) var(--space-lg); border-left: 3px solid var(--accent-ember);">
                <span style="font-size: var(--text-base); color: var(--text-primary);">${lang === 'ko' ? p.christian.ko : p.christian.en}</span>
              </div>
              <div class="coal-panel" style="padding: var(--space-md) var(--space-lg); border-left: 3px solid var(--color-error);">
                <span style="font-size: var(--text-base); color: var(--text-primary);">${lang === 'ko' ? p.juche.ko : p.juche.en}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <hr class="crack-light">
        <div class="coal-panel" style="padding: var(--space-xl); border-left: 3px solid var(--accent-ember);">
          <p style="font-size: var(--text-lg); line-height: 1.65; color: var(--text-primary); font-style: italic;">${lang === 'ko' ? '"이것은 무신론이 아니다. 이것은 신학적 대체다. 주체사상의 모든 요소는 김일성이 어린 시절 평양 교회에서 배운 기독교의 해당 요소를 가지고 있다."' : '"This is not atheism. This is theological substitution. Every element of Juche has a corresponding element in the Christianity that Kim Il-sung learned as a child in Pyongyang\'s churches."'}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderRevival(app: HTMLElement): void {
  const lang = getLang();
  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <a href="#/heritage" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 유산 체험으로' : '← Back to Heritage'}</a>
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xl);">${lang === 'ko' ? '1907년 평양 대부흥' : 'The 1907 Pyongyang Revival'}</h1>
        <div class="report-content">
          <h2>${lang === 'ko' ? '배경' : 'The Background'}</h2>
          <p>${lang === 'ko' ? '1900년대 초, 평양은 개신교 기독교의 요새가 되었습니다. 선교사들과 한국 기독교인들은 1904-05년 웨일스 부흥의 소식에 영감을 받아 영적 갱신을 위해 간절히 기도하고 있었습니다.' : 'By the early 1900s, Pyongyang had become a stronghold of Protestant Christianity. Missionaries and Korean Christians had been praying earnestly for spiritual renewal, inspired by reports of the Welsh Revival of 1904-05.'}</p>

          <h2>${lang === 'ko' ? '그 사건' : 'The Event'}</h2>
          <p>${lang === 'ko' ? '1907년 1월, 평양 장대현교회에서의 성경공부 모임 중에 길선주 목사 — 한쪽 눈이 보이지 않지만 성경 전체를 암기한 — 가 공개적으로 자신의 죄를 고백했습니다. 그의 고백이 연쇄반응을 촉발했습니다.' : 'In January 1907, during Bible study meetings at Jangdaehyeon Church in Pyongyang, Pastor Kil Sun-ju — blind in one eye but having memorized the entire Bible — publicly confessed his sins. His confession triggered a chain reaction.'}</p>
          <p>${lang === 'ko' ? '참석자들이 자발적이고 동시적으로 공개 고백을 시작했습니다 — 이전에 한국 문화에서 알려지지 않은 관행이었습니다. 장로, 교회 지도자, 심지어 외국 선교사들도 공개적으로 회개했습니다. 이 운동은 평양에서 한국 반도 전체로 급속히 퍼졌습니다.' : 'Attendees began spontaneous, simultaneous public confession — a practice previously unknown in Korean culture. Elders, church leaders, and even foreign missionaries publicly repented. The movement spread rapidly from Pyongyang throughout the Korean peninsula.'}</p>

          <h2>${lang === 'ko' ? '영향' : 'The Impact'}</h2>
          <p>${lang === 'ko' ? '30,000명 이상이 회심했습니다. 이 부흥은 한국 교회의 성격을 세대를 걸쳐 형성했습니다: 새벽기도, 열정적인 기도, 공개적 헌신의 전통 모두가 이 사건에 뿌리를 두고 있습니다. 이것은 세계 기독교 역사상 가장 중요한 부흥 사건 중 하나로 인정받고 있습니다.' : 'Over 30,000 converts resulted. The Revival shaped the character of the Korean church for generations: the tradition of dawn prayer, fervent intercession, and public commitment all trace roots to this event. It is recognized as one of the most significant revival events in world Christianity.'}</p>

          <h2>${lang === 'ko' ? '잃어버린 것' : 'What Was Lost'}</h2>
          <p style="color: var(--accent-ember);">${lang === 'ko' ? '이 부흥이 일어난 도시 — 평양 — 는 세계에서 가장 반기독교적인 정권의 수도가 되었습니다. 길선주 목사가 고백한 교회는 더 이상 존재하지 않습니다. 이것이 역사에서 이 이야기를 이해하기 어렵게 만듭니다: 세계적으로 중요한 영적 사건의 장소가 세계에서 가장 어두운 곳 중 하나가 되었습니다.' : 'The city where this revival happened — Pyongyang — became the capital of the world\'s most anti-Christian regime. The church where Kil Sun-ju confessed no longer exists. This is what makes this story so hard to comprehend: the site of a world-significant spiritual event became one of the darkest places on earth.'}</p>
        </div>
      </div>
    </section>
  `;
}

export function renderShowChurches(app: HTMLElement): void {
  const lang = getLang();
  const churches = [
    { name: { en: 'Bongsu Protestant Church (봉수교회)', ko: '봉수교회' }, year: 1988, desc: { en: 'The first "show church" opened to demonstrate religious freedom to foreign visitors. ~300 attendees on Sundays. Foreign visitors report formal, rehearsed-feeling services.', ko: '외국인 방문객에게 종교의 자유를 보여주기 위해 개방된 최초의 "전시용 교회". 일요일 약 300명 출석. 외국인 방문객들은 형식적이고 연습된 느낌의 예배를 보고.' } },
    { name: { en: 'Chilgol Church (칠골교회)', ko: '칠골교회' }, year: 1992, desc: { en: 'Built on the site of the church attended by Kim Il-sung\'s mother, Kang Pan-suk. She was a devout Presbyterian deaconess. The church honoring her faith exists in a nation that destroyed her faith.', ko: '김일성의 어머니 강반석이 다녔던 교회 자리에 세워짐. 그녀는 독실한 장로교 집사였음. 그녀의 신앙을 기리는 교회가 그녀의 신앙을 파괴한 나라에 존재.' } },
    { name: { en: 'Changchung Catholic Cathedral (장충성당)', ko: '장충성당' }, year: 1988, desc: { en: 'Pyongyang\'s only Catholic church. Services held irregularly. No resident priest — visiting priests from abroad occasionally celebrate Mass.', ko: '평양의 유일한 천주교 교회. 비정기적으로 미사 거행. 상주 신부 없음 — 해외 방문 신부가 간혹 미사를 집전.' } },
    { name: { en: 'Jongbaek Russian Orthodox Church (정백사원)', ko: '정백 러시아정교회 사원' }, year: 2006, desc: { en: 'Built in 2003-2006 apparently at the initiative of then-North Korean ambassador to Russia. Has a Russian Orthodox priest. The least visited of the four.', ko: '2003-2006년에 당시 주러시아 북한 대사의 주도로 건립된 것으로 보임. 러시아 정교회 신부가 있음. 4개 중 가장 방문이 적음.' } },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <a href="#/heritage" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 유산 체험으로' : '← Back to Heritage'}</a>
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '4개의 전시용 교회' : 'The Four Show Churches'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '평양에 한때 100개 이상의 교회가 있었습니다. 오늘날 4개만 남아 있습니다 — 모두 정권이 운영합니다.' : 'Pyongyang once had over 100 churches. Today, four remain — all operated by the regime.'}</p>

        <div style="display: flex; flex-direction: column; gap: var(--space-lg);">
          ${churches.map(c => `
            <div class="coal-panel" style="padding: var(--space-xl); border-left: 3px solid var(--color-warning);">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
                <h3 style="font-size: var(--text-xl);">${lang === 'ko' ? c.name.ko : c.name.en}</h3>
                <span style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--accent-ash);">${c.year}</span>
              </div>
              <p style="color: var(--text-secondary); line-height: 1.65;">${lang === 'ko' ? c.desc.ko : c.desc.en}</p>
            </div>
          `).join('')}
        </div>

        <hr class="crack-light">
        <div class="coal-panel" style="padding: var(--space-xl);">
          <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-md); color: var(--accent-ember);">${lang === 'ko' ? '진짜 교회인가?' : 'Are They Real?'}</h3>
          <p style="color: var(--text-secondary); line-height: 1.65;">${lang === 'ko' ? '대부분의 분석가들은 이 교회들을 외교적 전시물로 간주합니다. 빌리 그레이엄은 1992년 봉수교회 방문 후 회중이 진정한 것인지 확신할 수 없었다고 했습니다. 외국인 방문객들은 일관되게 형식적이고 연출된 느낌의 예배를 보고합니다. 그러나 일부 관찰자들은 적어도 일부 참석자들이 진정한 신자일 수 있다고 주장합니다.' : 'Most analysts consider these churches diplomatic props. Billy Graham, after visiting Bongsu Church in 1992, said he was uncertain whether the congregation was genuine. Foreign visitors consistently report formal, staged-feeling services. However, some observers argue that at least some attendees may be genuine believers.'}</p>
        </div>
      </div>
    </section>
  `;
}
