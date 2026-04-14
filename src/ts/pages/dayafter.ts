import { getLang } from '../i18n';

export function renderDayAfter(app: HTMLElement): void {
  const lang = getLang();

  const scenarios = [
    {
      id: 'gradual',
      title: { en: 'Scenario 1: Gradual Opening', ko: '시나리오 1: 점진적 개방' },
      model: { en: 'Modeled on China (post-1978) or Vietnam (post-1986)', ko: '중국(1978년 이후) 또는 베트남(1986년 이후) 모델' },
      desc: { en: 'Government-controlled religious registration. Slow, managed reform. The regime retains power but loosens control.', ko: '정부 통제 종교 등록. 느리고 관리된 개혁. 정권이 권력을 유지하면서 통제를 완화.' },
      prepare: [
        { en: 'Develop Korean-language training materials for registered church framework', ko: '등록 교회 체계를 위한 한국어 훈련 자료 개발' },
        { en: 'Prepare for Three-Self style government oversight of churches', ko: '삼자 방식의 정부 교회 감독에 대비' },
        { en: 'Build relationships with Chinese house church networks who navigated similar transitions', ko: '유사한 전환을 경험한 중국 가정교회 네트워크와 관계 구축' },
        { en: 'Train patience — this scenario unfolds over decades, not months', ko: '인내심 훈련 — 이 시나리오는 몇 달이 아니라 수십 년에 걸쳐 전개' },
      ],
      color: 'var(--color-info)',
    },
    {
      id: 'sudden',
      title: { en: 'Scenario 2: Sudden Collapse', ko: '시나리오 2: 갑작스러운 붕괴' },
      model: { en: 'Modeled on Romania (1989) or German Reunification (1990)', ko: '루마니아(1989년) 또는 독일 통일(1990년) 모델' },
      desc: { en: 'Rapid, chaotic regime change. Borders open suddenly. The church must respond in weeks, not years.', ko: '급격하고 혼란스러운 정권 교체. 국경이 갑자기 개방. 교회는 수년이 아닌 수주 내에 대응해야 함.' },
      prepare: [
        { en: 'Pre-position rapid deployment teams with psychological first aid training', ko: '심리적 응급처치 훈련을 받은 긴급 배치팀 사전 배치' },
        { en: 'Learn from East Germany: churches emptied after reunification — avoid repeating this', ko: '동독의 교훈: 통일 후 교회가 비어짐 — 이를 반복하지 않기' },
        { en: 'Prevent denominational competition rush — coordinate, don\'t compete', ko: '교단 간 경쟁 돌진 방지 — 경쟁하지 말고 협력' },
        { en: 'Prepare trauma-informed pastoral care at scale', ko: '대규모 트라우마 정보 기반 목회 돌봄 준비' },
        { en: 'Stockpile Korean-language Bibles and discipleship materials', ko: '한국어 성경과 제자훈련 자료 비축' },
      ],
      color: 'var(--color-error)',
    },
    {
      id: 'reform',
      title: { en: 'Scenario 3: Chinese-Brokered Reform', ko: '시나리오 3: 중국 중재 개혁' },
      model: { en: 'Modeled on Myanmar\'s partial opening', ko: '미얀마의 부분적 개방 모델' },
      desc: { en: 'China maintains influence. Reform is limited and controlled. Religious access is negotiated, not guaranteed.', ko: '중국이 영향력 유지. 개혁은 제한적이고 통제됨. 종교적 접근은 보장이 아닌 협상을 통해.' },
      prepare: [
        { en: 'Leverage Korean-Chinese (Joseonjok) church networks already operating near the border', ko: '이미 국경 근처에서 활동 중인 조선족 교회 네트워크 활용' },
        { en: 'Prepare for restricted zones — not all of NK may open equally', ko: '제한 구역 대비 — 북한 전체가 동등하게 개방되지 않을 수 있음' },
        { en: 'Build institutional capacity slowly — think decades', ko: '기관 역량을 천천히 구축 — 수십 년 단위로 생각' },
        { en: 'Study how churches in China operate within government constraints', ko: '중국 교회가 정부 제약 내에서 어떻게 운영되는지 연구' },
      ],
      color: 'var(--color-warning)',
    },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '"그날 이후" 시나리오 플래너' : '"Day After" Scenario Planner'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '북한이 갑자기 개방되면 어떻게 될까요? 세 가지 시나리오, 역사적 교훈, 대비 도구.' : 'What happens if North Korea suddenly opens? Three scenarios, lessons from history, and preparedness tools.'}</p>

        <div style="display: flex; flex-direction: column; gap: var(--space-xl);">
          ${scenarios.map(s => `
            <div class="coal-panel" style="padding: var(--space-xl); border-left: 4px solid ${s.color};">
              <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-xs); color: var(--text-primary);">${lang === 'ko' ? s.title.ko : s.title.en}</h2>
              <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-md);">${lang === 'ko' ? s.model.ko : s.model.en}</div>
              <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${lang === 'ko' ? s.desc.ko : s.desc.en}</p>

              <h4 style="font-size: var(--text-base); color: var(--accent-ember); margin-bottom: var(--space-md);">${lang === 'ko' ? '교회가 지금 준비해야 할 것:' : 'What the church should prepare now:'}</h4>
              <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
                ${s.prepare.map((p, i) => `
                  <label style="display: flex; align-items: start; gap: var(--space-sm); cursor: pointer;">
                    <input type="checkbox" class="prep-check" data-scenario="${s.id}" style="accent-color: var(--accent-ember); margin-top: 3px; min-width: 18px; min-height: 18px;">
                    <span style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${lang === 'ko' ? p.ko : p.en}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <hr class="crack-light">

        <!-- Preparedness Score -->
        <div class="coal-panel" style="padding: var(--space-xl); margin-top: var(--space-xl);">
          <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-lg);">${lang === 'ko' ? '대비 점수' : 'Preparedness Score'}</h2>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${lang === 'ko' ? '위의 체크리스트를 사용하여 각 시나리오에 대한 조직의 준비 상태를 추적하세요.' : 'Use the checklists above to track your organization\'s readiness for each scenario.'}</p>

          <div class="grid-3col" id="prep-scores">
            ${scenarios.map(s => `
              <div style="text-align: center;">
                <div style="font-family: var(--font-mono); font-size: var(--text-3xl); color: ${s.color};" id="score-${s.id}">0%</div>
                <div style="font-size: var(--text-sm); color: var(--text-tertiary);">${lang === 'ko' ? s.title.ko.split(': ')[1] : s.title.en.split(': ')[1]}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  // Preparedness score tracking
  document.querySelectorAll('.prep-check').forEach(cb => {
    cb.addEventListener('change', () => {
      scenarios.forEach(s => {
        const checks = document.querySelectorAll(`.prep-check[data-scenario="${s.id}"]`);
        const checked = document.querySelectorAll(`.prep-check[data-scenario="${s.id}"]:checked`);
        const pct = Math.round((checked.length / checks.length) * 100);
        const scoreEl = document.getElementById(`score-${s.id}`);
        if (scoreEl) scoreEl.textContent = `${pct}%`;
      });
    });
  });
}
