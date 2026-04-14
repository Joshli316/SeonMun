import { getLang } from '../i18n';

export function renderEstimator(app: HTMLElement): void {
  const lang = getLang();

  const sources = [
    { name: 'Open Doors International', range: [200000, 400000], method: { en: 'Defector interviews, field contacts, historical extrapolation', ko: '탈북민 인터뷰, 현장 연락처, 역사적 외삽' }, color: 'var(--accent-ember)' },
    { name: 'South Korean Intelligence (NIS)', range: [0, 10000], method: { en: 'Classified sources, defector debriefings, signal intelligence', ko: '기밀 출처, 탈북민 심문, 신호 정보' }, color: 'var(--color-info)' },
    { name: 'NKDB Database', range: [30000, 100000], method: { en: '20,000+ defector interviews, cross-referenced testimony analysis', ko: '20,000건 이상의 탈북민 인터뷰, 교차 참조 증언 분석' }, color: 'var(--accent-ash)' },
    { name: { en: 'Academic Consensus', ko: '학계 합의' }, range: [10000, 200000], method: { en: 'Varies widely by researcher and methodology', ko: '연구자와 방법론에 따라 크게 다름' }, color: 'var(--color-warning)' },
  ];

  const historicalParallels = [
    { country: { en: 'Soviet Union', ko: '소련' }, years: 70, before: '~30M', after: '~70M', note: { en: 'Christianity grew underground despite 70 years of suppression', ko: '70년의 억압에도 기독교가 지하에서 성장' } },
    { country: { en: 'Albania', ko: '알바니아' }, years: 25, before: '70%', after: '~35%', note: { en: 'Officially "atheist state" 1967-1991. Religion survived but diminished', ko: '공식적 "무신론 국가" 1967-1991. 종교가 살아남았지만 감소' } },
    { country: { en: 'China (post-Cultural Revolution)', ko: '중국 (문화혁명 이후)' }, years: 10, before: '~1M', after: '~38-100M', note: { en: 'Explosive growth after 10 years of total suppression', ko: '10년간의 완전한 억압 후 폭발적 성장' } },
    { country: { en: 'North Korea', ko: '북한' }, years: 75, before: '~300K', after: '???', note: { en: '75+ years of suppression. The longest case. No comparable precedent.', ko: '75년 이상의 억압. 가장 긴 사례. 비교할 선례 없음.' } },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '지하교회 추정기' : 'Underground Church Estimator'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '북한에 기독교인이 몇 명이나 있을까요? 추정치를 탐색하고, 방법론을 비교하고, 가정을 조정하세요.' : 'How many Christians are in North Korea? Explore estimates, compare methodologies, and adjust assumptions.'}</p>

        <!-- Source comparison -->
        <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-lg);">${lang === 'ko' ? '출처별 추정치' : 'Estimates by Source'}</h2>
        <div style="display: flex; flex-direction: column; gap: var(--space-md); margin-bottom: var(--space-2xl);">
          ${sources.map(s => {
            const name = typeof s.name === 'string' ? s.name : (lang === 'ko' ? s.name.ko : s.name.en);
            const method = lang === 'ko' ? s.method.ko : s.method.en;
            const maxVal = 500000;
            const leftPct = (s.range[0] / maxVal) * 100;
            const widthPct = ((s.range[1] - s.range[0]) / maxVal) * 100;
            return `
              <div class="coal-panel" style="padding: var(--space-lg);">
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm);">
                  <span style="font-weight: 500;">${name}</span>
                  <span style="font-family: var(--font-mono); color: ${s.color};">${(s.range[0] / 1000).toFixed(0)}K - ${(s.range[1] / 1000).toFixed(0)}K</span>
                </div>
                <div style="height: 8px; background: var(--bg-elevated); border-radius: var(--radius-full); position: relative; margin-bottom: var(--space-sm);">
                  <div style="position: absolute; left: ${leftPct}%; width: ${widthPct}%; height: 100%; background: ${s.color}; border-radius: var(--radius-full); opacity: 0.8;"></div>
                </div>
                <div style="font-size: var(--text-sm); color: var(--text-tertiary);">${method}</div>
              </div>
            `;
          }).join('')}
          <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-tertiary); padding: 0 var(--space-lg);">
            <span>0</span><span>100K</span><span>200K</span><span>300K</span><span>400K</span><span>500K</span>
          </div>
        </div>

        <hr class="crack-light">

        <!-- Interactive methodology -->
        <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-lg);">${lang === 'ko' ? '가정 조정기' : 'Assumption Adjuster'}</h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${lang === 'ko' ? '가정을 조정하면 추정치가 어떻게 변하는지 보세요.' : 'Adjust assumptions and see how the estimate changes.'}</p>

        <div class="coal-panel" style="padding: var(--space-xl);">
          <div style="display: flex; flex-direction: column; gap: var(--space-lg);">
            <div>
              <label style="font-size: var(--text-sm); color: var(--text-secondary); display: block; margin-bottom: var(--space-xs);">${lang === 'ko' ? '탈북민 외삽률 (탈북민이 보고한 비율이 전체 인구를 대표하는 정도)' : 'Defector Extrapolation Rate (how well defector reports represent total population)'}</label>
              <input type="range" id="est-extrap" min="1" max="100" value="30" style="width: 100%; accent-color: var(--accent-ember);" aria-label="Extrapolation rate">
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); color: var(--text-tertiary);"><span>${lang === 'ko' ? '낮음 (1%)' : 'Low (1%)'}</span><span>${lang === 'ko' ? '높음 (100%)' : 'High (100%)'}</span></div>
            </div>
            <div>
              <label style="font-size: var(--text-sm); color: var(--text-secondary); display: block; margin-bottom: var(--space-xs);">${lang === 'ko' ? '세대간 전달률 (비밀 신앙이 자녀에게 전달되는 정도)' : 'Generational Transmission Rate (how much secret faith passes to children)'}</label>
              <input type="range" id="est-gen" min="5" max="80" value="30" style="width: 100%; accent-color: var(--accent-ember);" aria-label="Generational transmission">
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); color: var(--text-tertiary);"><span>5%</span><span>80%</span></div>
            </div>
            <div>
              <label style="font-size: var(--text-sm); color: var(--text-secondary); display: block; margin-bottom: var(--space-xs);">${lang === 'ko' ? '"기독교인"의 정의 (개인 기도자 포함 여부)' : 'Definition of "Christian" (whether to include private pray-ers)'}</label>
              <input type="range" id="est-def" min="1" max="3" value="2" style="width: 100%; accent-color: var(--accent-ember);" aria-label="Definition breadth">
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); color: var(--text-tertiary);"><span>${lang === 'ko' ? '좁음' : 'Narrow'}</span><span>${lang === 'ko' ? '보통' : 'Moderate'}</span><span>${lang === 'ko' ? '넓음' : 'Broad'}</span></div>
            </div>
          </div>

          <div style="text-align: center; margin-top: var(--space-xl); padding: var(--space-lg); background: var(--accent-ember-subtle); border-radius: var(--radius-sm);">
            <div style="font-family: var(--font-mono); font-size: var(--text-4xl); color: var(--accent-ember);" id="est-result">~90,000</div>
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: var(--space-xs);">${lang === 'ko' ? '추정 기독교인 수' : 'estimated Christians'}</div>
          </div>
        </div>

        <hr class="crack-light">

        <!-- Historical comparison -->
        <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-lg);">${lang === 'ko' ? '역사적 비교' : 'Historical Parallels'}</h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${lang === 'ko' ? '다른 국가에서 억압 후 기독교는 어떻게 되었나요?' : 'What happened to Christianity after suppression in other countries?'}</p>

        <div class="grid-2col">
          ${historicalParallels.map(p => `
            <div class="coal-panel" style="padding: var(--space-lg);">
              <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-sm);">${lang === 'ko' ? p.country.ko : p.country.en}</h3>
              <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: var(--space-md);">${p.years} ${lang === 'ko' ? '년 억압' : 'years of suppression'}</div>
              <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-sm);">
                <div><span style="font-size: var(--text-xs); color: var(--text-tertiary);">${lang === 'ko' ? '이전' : 'Before'}</span><br><span style="font-family: var(--font-mono); color: var(--accent-ember);">${p.before}</span></div>
                <div style="color: var(--text-tertiary);">→</div>
                <div><span style="font-size: var(--text-xs); color: var(--text-tertiary);">${lang === 'ko' ? '이후' : 'After'}</span><br><span style="font-family: var(--font-mono); color: var(--accent-ember);">${p.after}</span></div>
              </div>
              <p style="font-size: var(--text-sm); color: var(--text-secondary);">${lang === 'ko' ? p.note.ko : p.note.en}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Interactive estimator
  const update = () => {
    const extrap = parseInt((document.getElementById('est-extrap') as HTMLInputElement).value);
    const gen = parseInt((document.getElementById('est-gen') as HTMLInputElement).value);
    const defn = parseInt((document.getElementById('est-def') as HTMLInputElement).value);
    // Simple model: base ~300K pre-war Christians, survived fraction, generational transmission over 3 gens
    const baseSurvived = 300000 * (extrap / 100) * 0.1; // 10% base survival
    const transmitted = baseSurvived * Math.pow(gen / 100, 3); // 3 generations
    const defMultiplier = [0.5, 1, 2][defn - 1]; // narrow, moderate, broad
    const estimate = Math.round(transmitted * defMultiplier);
    const result = document.getElementById('est-result');
    if (result) result.textContent = `~${estimate.toLocaleString()}`;
  };

  ['est-extrap', 'est-gen', 'est-def'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', update);
  });
}
