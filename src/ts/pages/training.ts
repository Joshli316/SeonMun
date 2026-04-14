import { getLang } from '../i18n';

interface Module {
  id: string;
  title: { en: string; ko: string };
  desc: { en: string; ko: string };
  sections: { title: { en: string; ko: string }; content: { en: string; ko: string } }[];
  quiz: { q: { en: string; ko: string }; options: { en: string; ko: string }[]; correct: number }[];
}

const modules: Module[] = [
  {
    id: 'm1', title: { en: 'Understanding North Korea\'s Christian Story', ko: '북한의 기독교 이야기 이해하기' },
    desc: { en: 'From "Jerusalem of the East" to total suppression. The 1907 Revival. The Kim family\'s Christian roots.', ko: '"동방의 예루살렘"에서 완전한 억압까지. 1907년 대부흥. 김씨 가문의 기독교 뿌리.' },
    sections: [
      { title: { en: 'The Golden Age', ko: '황금시대' }, content: { en: 'Pyongyang once had over 100 churches and was called the "Jerusalem of the East." The 1907 Revival was one of the most significant in world Christianity. Nearly 30% of Pyongyang\'s population was Christian.', ko: '평양에는 한때 100개 이상의 교회가 있었고 "동방의 예루살렘"이라 불렸습니다. 1907년 대부흥은 세계 기독교 역사상 가장 중요한 부흥 중 하나였습니다.' } },
      { title: { en: 'The Destruction', ko: '파괴' }, content: { en: 'After 1945, Kim Il-sung systematically destroyed Christianity. Churches closed, pastors arrested, 300,000 Christians fled south. The Korean War completed the destruction.', ko: '1945년 이후 김일성은 체계적으로 기독교를 파괴했습니다. 교회 폐쇄, 목사 체포, 30만 기독교인 남쪽으로 피난. 한국전쟁이 파괴를 완성.' } },
      { title: { en: 'The Kim Family\'s Christian Roots', ko: '김씨 가문의 기독교 뿌리' }, content: { en: 'Kim Il-sung\'s mother Kang Pan-suk was a Presbyterian deaconess. His grandfather was a church elder. He grew up singing hymns. The founder of the world\'s most anti-Christian state was raised Christian.', ko: '김일성의 어머니 강반석은 장로교 집사였습니다. 할아버지는 교회 장로. 찬송가를 부르며 자랐습니다. 세계에서 가장 반기독교적인 국가의 창건자가 기독교인으로 자랐습니다.' } },
    ],
    quiz: [
      { q: { en: 'What was Pyongyang called before 1950?', ko: '1950년 이전에 평양은 무엇이라 불렸나요?' }, options: [{ en: 'City of Lights', ko: '빛의 도시' }, { en: 'Jerusalem of the East', ko: '동방의 예루살렘' }, { en: 'Pearl of Asia', ko: '아시아의 진주' }], correct: 1 },
      { q: { en: 'What was Kim Il-sung\'s mother\'s role in the church?', ko: '김일성의 어머니는 교회에서 어떤 역할이었나요?' }, options: [{ en: 'Pastor', ko: '목사' }, { en: 'Presbyterian deaconess', ko: '장로교 집사' }, { en: 'Choir director', ko: '성가대 지휘자' }], correct: 1 },
    ]
  },
  {
    id: 'm2', title: { en: 'Juche Deconditioning', ko: '주체사상 탈조건화' },
    desc: { en: 'What Juche does to the mind. How it parallels and distorts Christianity. What NOT to do.', ko: '주체사상이 정신에 미치는 영향. 기독교를 어떻게 모방하고 왜곡하는지. 하지 말아야 할 것.' },
    sections: [
      { title: { en: 'How Juche Mimics Christianity', ko: '주체사상이 기독교를 모방하는 방법' }, content: { en: 'Every element of Juche has a Christian parallel: Trinity → Three Kims, Ten Commandments → Ten Principles, Confession → Self-Criticism, Eternal Life → Eternal President. This is not atheism — it is theological substitution.', ko: '주체사상의 모든 요소에는 기독교의 대응물이 있습니다: 삼위일체 → 3대 김씨, 십계명 → 10대 원칙, 고백 → 생활총화, 영생 → 영원한 주석. 이것은 무신론이 아니라 신학적 대체입니다.' } },
      { title: { en: 'What NOT to Do', ko: '하지 말아야 할 것' }, content: { en: 'Do NOT compare Kim worship to Christian worship flippantly — it triggers deep trauma. Do NOT assume defectors will automatically see the parallels. Do NOT rush deconditioning — it takes years. The self-criticism sessions (saenghwal chonghwa) that every North Korean endures weekly can make confession and testimony feel dangerous.', ko: '김씨 숭배를 기독교 예배와 경솔하게 비교하지 마세요 — 깊은 트라우마를 촉발합니다. 탈북민이 자동으로 유사점을 볼 것이라고 가정하지 마세요. 탈조건화를 서두르지 마세요 — 수년이 걸립니다.' } },
    ],
    quiz: [
      { q: { en: 'What is saenghwal chonghwa?', ko: '생활총화란 무엇인가요?' }, options: [{ en: 'Weekly self-criticism session', ko: '주간 생활총화' }, { en: 'Morning exercise routine', ko: '아침 운동' }, { en: 'School graduation ceremony', ko: '학교 졸업식' }], correct: 0 },
    ]
  },
  {
    id: 'm3', title: { en: 'Working with North Korean Defectors', ko: '탈북민과 함께 일하기' },
    desc: { en: '70 years of divergent development. Trust building. PTSD awareness. Economic integration.', ko: '70년의 분리된 발전. 신뢰 구축. PTSD 인식. 경제적 통합.' },
    sections: [
      { title: { en: 'The 70-Year Cultural Gap', ko: '70년의 문화적 격차' }, content: { en: 'North and South Korean dialects have diverged significantly. One in five defectors report speech-based discrimination. South Korea\'s consumer culture, digital saturation, and competitive education system are disorienting. Defectors arrive with no recognized credentials.', ko: '남북한 방언이 크게 분화되었습니다. 탈북민 5명 중 1명이 말투 기반 차별을 보고합니다. 남한의 소비 문화, 디지털 포화, 경쟁적 교육 시스템은 혼란스럽습니다.' } },
      { title: { en: 'Mental Health Awareness', ko: '정신 건강 인식' }, content: { en: 'Suicidal ideation among defectors: 11.9% (double the SK average). 30% of female defectors show clinical depression. PTSD is pervasive. Critically: suicidal ideation increases after 5+ years in South Korea.', ko: '탈북민의 자살 충동: 11.9%(남한 평균의 2배). 여성 탈북민의 30%가 임상 우울증. PTSD가 만연. 중요: 남한 체류 5년 이후 자살 충동이 증가.' } },
    ],
    quiz: [
      { q: { en: 'What percentage of defectors report speech-based discrimination?', ko: '몇 퍼센트의 탈북민이 말투 기반 차별을 보고하나요?' }, options: [{ en: '5%', ko: '5%' }, { en: '20%', ko: '20%' }, { en: '50%', ko: '50%' }], correct: 1 },
    ]
  },
  {
    id: 'm4', title: { en: 'The Underground Church — What We Know', ko: '지하교회 — 우리가 아는 것' },
    desc: { en: 'The numbers problem. Models of secret faith. Show churches. What defectors report.', ko: '숫자의 문제. 비밀 신앙의 모델. 전시용 교회. 탈북민이 보고하는 것.' },
    sections: [
      { title: { en: 'The Numbers Problem', ko: '숫자의 문제' }, content: { en: 'Estimates range from essentially zero to 500,000. Open Doors estimates 200,000-400,000. South Korean intelligence gives much lower numbers. The fundamental problem: nobody can go inside and verify. All information comes from defector testimony, satellite imagery, and inference.', ko: '추정치는 사실상 0에서 50만까지 다양합니다. 오픈도어즈는 20만-40만으로 추정. 한국 정보기관은 훨씬 낮은 수치를 제시. 근본적 문제: 누구도 내부에 들어가 확인할 수 없습니다.' } },
      { title: { en: 'Models of Secret Faith', ko: '비밀 신앙의 모델' }, content: { en: 'Underground worship operates on a very small scale — often a single family. Parents pass faith to children in secret. Some families possess partial Bibles smuggled from China. Some have maintained secret faith across three generations.', ko: '지하 예배는 매우 소규모로 운영됩니다 — 종종 한 가족 단위. 부모가 비밀리에 자녀에게 신앙을 전달. 일부 가족은 중국에서 밀수된 부분적 성경을 소유. 일부는 3세대에 걸쳐 비밀 신앙을 유지.' } },
    ],
    quiz: [
      { q: { en: 'What is the range of estimates for Christians in NK?', ko: '북한 기독교인 추정치의 범위는?' }, options: [{ en: '10,000-50,000', ko: '1만-5만' }, { en: '0 to 500,000', ko: '0에서 50만' }, { en: '1 million+', ko: '100만 이상' }], correct: 1 },
    ]
  },
  {
    id: 'm5', title: { en: 'Preparing for the Day After', ko: '"그날 이후" 준비하기' },
    desc: { en: 'What churches can do NOW to prepare for a potential opening of North Korea.', ko: '교회가 지금 할 수 있는 것 — 북한의 잠재적 개방에 대비하여.' },
    sections: [
      { title: { en: 'Lessons from History', ko: '역사의 교훈' }, content: { en: 'German reunification (1990): East German churches emptied. Western churches were unprepared. Cults rushed in. Romania (1989): rapid change, chaotic. Vietnam (1986): gradual, managed. Each scenario requires different preparation.', ko: '독일 통일(1990): 동독 교회가 비어짐. 서독 교회가 준비되지 않았음. 사이비 종교가 몰려듦. 루마니아(1989): 급격하고 혼란스러운 변화. 베트남(1986): 점진적이고 관리된 변화.' } },
      { title: { en: 'What to Do Now', ko: '지금 할 일' }, content: { en: 'Train defector pastors for future deployment. Prepare trauma-informed counseling resources. Stockpile Korean-language materials. Build cross-denominational coordination. Study the three scenarios and prepare for each.', ko: '미래 배치를 위한 탈북민 목사 훈련. 트라우마 정보 기반 상담 자원 준비. 한국어 자료 비축. 교단 간 조정 체계 구축. 세 가지 시나리오를 연구하고 각각에 대비.' } },
    ],
    quiz: [
      { q: { en: 'What happened to East German churches after reunification?', ko: '통일 후 동독 교회에 무슨 일이 일어났나요?' }, options: [{ en: 'They thrived', ko: '번성했다' }, { en: 'They emptied', ko: '비어졌다' }, { en: 'They were banned', ko: '금지되었다' }], correct: 1 },
    ]
  },
];

export function renderTrainingList(app: HTMLElement): void {
  const lang = getLang();
  const progress = JSON.parse(localStorage.getItem('seonmun-training') || '{}');

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '훈련 모듈' : 'Training Modules'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '탈북민 사역과 북한 선교를 위한 5개 모듈.' : '5 modules for defector ministry and North Korea missions.'}</p>

        <div style="margin-bottom: var(--space-xl); font-family: var(--font-mono); font-size: var(--text-sm); color: var(--accent-ember);">
          ${Object.keys(progress).length}/5 ${lang === 'ko' ? '모듈 완료' : 'modules completed'}
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-lg);">
          ${modules.map((m, i) => {
            const done = progress[m.id];
            return `
              <a href="#/training/${m.id}" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: flex; align-items: start; gap: var(--space-lg); ${done ? 'border-color: var(--color-success);' : ''}">
                <div style="font-family: var(--font-mono); font-size: var(--text-2xl); color: ${done ? 'var(--color-success)' : 'var(--accent-ember)'}; min-width: 40px;">${done ? '✓' : String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-xs);">${lang === 'ko' ? m.title.ko : m.title.en}</h3>
                  <p style="color: var(--text-secondary); font-size: var(--text-sm);">${lang === 'ko' ? m.desc.ko : m.desc.en}</p>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderTrainingModule(app: HTMLElement, moduleId: string): void {
  const lang = getLang();
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) { app.innerHTML = `<div class="container section">Module not found.</div>`; return; }

  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <a href="#/training" style="color: var(--text-secondary); font-size: var(--text-sm); display: inline-block; margin-bottom: var(--space-lg);">${lang === 'ko' ? '← 모듈 목록으로' : '← Back to Modules'}</a>
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xl);">${lang === 'ko' ? mod.title.ko : mod.title.en}</h1>

        <div class="report-content">
          ${mod.sections.map(s => `
            <h2>${lang === 'ko' ? s.title.ko : s.title.en}</h2>
            <p>${lang === 'ko' ? s.content.ko : s.content.en}</p>
          `).join('<hr class="crack-light-sm">')}
        </div>

        <hr class="crack-light">

        <!-- Quiz -->
        <div id="quiz-section">
          <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-lg); color: var(--accent-ember);">${lang === 'ko' ? '지식 확인' : 'Knowledge Check'}</h2>
          ${mod.quiz.map((q, qi) => `
            <div class="coal-panel" style="padding: var(--space-lg); margin-bottom: var(--space-md);" data-quiz="${qi}">
              <p style="margin-bottom: var(--space-md); font-weight: 500;">${lang === 'ko' ? q.q.ko : q.q.en}</p>
              <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
                ${q.options.map((o, oi) => `
                  <button class="quiz-option" data-qi="${qi}" data-oi="${oi}" style="text-align: left; padding: var(--space-sm) var(--space-md); background: var(--bg-elevated); border: 1px solid var(--border-default); border-radius: var(--radius-sm); color: var(--text-secondary); cursor: pointer; font-family: var(--font-body); font-size: var(--text-sm); min-height: 44px;">${lang === 'ko' ? o.ko : o.en}</button>
                `).join('')}
              </div>
              <div class="quiz-feedback" style="margin-top: var(--space-sm); font-size: var(--text-sm); display: none;"></div>
            </div>
          `).join('')}
        </div>

        <button id="complete-module" class="btn-ember" style="margin-top: var(--space-xl); display: none;">${lang === 'ko' ? '모듈 완료' : 'Complete Module'}</button>
      </div>
    </section>
  `;

  // Quiz logic
  let correctCount = 0;
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.getAttribute('data-qi')!);
      const oi = parseInt(btn.getAttribute('data-oi')!);
      const isCorrect = oi === mod.quiz[qi].correct;
      const feedback = btn.closest('[data-quiz]')?.querySelector('.quiz-feedback') as HTMLElement;

      // Disable all options for this question
      btn.closest('[data-quiz]')?.querySelectorAll('.quiz-option').forEach(b => {
        (b as HTMLElement).style.pointerEvents = 'none';
        (b as HTMLElement).style.opacity = '0.6';
      });

      (btn as HTMLElement).style.opacity = '1';
      (btn as HTMLElement).style.border = isCorrect ? '1px solid var(--color-success)' : '1px solid var(--color-error)';

      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.color = isCorrect ? 'var(--color-success)' : 'var(--color-error)';
        feedback.textContent = isCorrect ? (lang === 'ko' ? '정답!' : 'Correct!') : (lang === 'ko' ? '오답입니다.' : 'Incorrect.');
      }

      if (isCorrect) correctCount++;

      // Show complete button after all quizzes answered
      const answered = document.querySelectorAll('.quiz-feedback[style*="display: block"]').length;
      if (answered === mod.quiz.length) {
        const completeBtn = document.getElementById('complete-module');
        if (completeBtn) completeBtn.style.display = 'inline-flex';
      }
    });
  });

  document.getElementById('complete-module')?.addEventListener('click', () => {
    const progress = JSON.parse(localStorage.getItem('seonmun-training') || '{}');
    progress[mod.id] = true;
    localStorage.setItem('seonmun-training', JSON.stringify(progress));
    window.location.hash = '#/training';
  });
}
