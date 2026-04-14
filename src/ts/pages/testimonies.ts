import { getLang } from '../i18n';

export async function renderTestimonies(app: HTMLElement): Promise<void> {
  const lang = getLang();
  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Loading testimonies...</div>`;

  try {
    const data = await import('../../data/testimonies.json');
    const testimonies = (data.default || data) as any[];
    const themes = [...new Set(testimonies.map((t: any) => t.theme))];

    app.innerHTML = `
      <section class="section">
        <div class="container">
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '탈북민 증언 아카이브' : 'Defector Testimony Archive'}</h1>
          <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-lg);">${lang === 'ko' ? '익명화된 탈북민 증언 — 학술 문헌, 인권 보고서, 출판된 기록에서 수집.' : 'Anonymized defector accounts — curated from academic literature, human rights reports, and published records.'}</p>
          <p style="color: var(--color-warning); font-size: var(--text-sm); margin-bottom: var(--space-xl);">${lang === 'ko' ? '보안 참고: 모든 증언은 익명화된 합성물입니다. 실제 이름이나 식별 정보는 포함되지 않습니다.' : 'Security note: All testimonies are anonymized composites. No real names or identifying information is included.'}</p>

          <!-- Theme filters -->
          <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-xl); flex-wrap: wrap;" id="theme-filters">
            <button class="filter-btn active" data-theme="all" style="padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;">${lang === 'ko' ? '전체' : 'All'}</button>
            ${themes.map(th => `<button class="filter-btn" data-theme="${th}" style="padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;">${formatTheme(th as string, lang)}</button>`).join('')}
          </div>

          <!-- Search -->
          <input type="text" id="testimony-search" placeholder="${lang === 'ko' ? '증언 검색...' : 'Search testimonies...'}" style="width: 100%; padding: var(--space-md); background: var(--bg-surface); border: 1px solid var(--border-default); border-radius: var(--radius-sm); color: var(--text-primary); font-family: var(--font-body); margin-bottom: var(--space-xl); font-size: var(--text-base);">

          <!-- Testimonies grid -->
          <div id="testimony-grid" style="display: flex; flex-direction: column; gap: var(--space-lg);"></div>

          <hr class="crack-light">

          <!-- The Numbers Problem -->
          <div id="numbers-problem">
            <h2 style="font-size: var(--text-2xl); margin-bottom: var(--space-lg);">${lang === 'ko' ? '숫자의 문제' : 'The Numbers Problem'}</h2>
            <p style="color: var(--text-secondary); margin-bottom: var(--space-xl);">${lang === 'ko' ? '북한에 기독교인이 몇 명이나 있을까요? 아무도 모릅니다. 추정치는 0에서 50만까지 다양합니다.' : 'How many Christians are in North Korea? Nobody knows. Estimates range from 0 to 500,000.'}</p>

            <div style="position: relative; height: 200px; background: var(--bg-surface); border: 1px solid var(--border-default); padding: var(--space-lg); margin-bottom: var(--space-lg);">
              <div style="position: absolute; bottom: var(--space-lg); left: var(--space-lg); right: var(--space-lg); height: 4px; background: var(--border-default);">
                ${renderEstimateBar(0, 'South Korean Intelligence', lang === 'ko' ? '한국 정보기관' : 'South Korean Intelligence', '~0-10K', 'var(--color-info)')}
                ${renderEstimateBar(20, 'Academic Consensus', lang === 'ko' ? '학계 합의' : 'Academic Consensus', '~30K-100K', 'var(--accent-ash)')}
                ${renderEstimateBar(50, 'Open Doors Estimate', lang === 'ko' ? '오픈도어즈 추정' : 'Open Doors Estimate', '~200K-400K', 'var(--accent-ember)')}
                ${renderEstimateBar(90, 'Highest Claims', lang === 'ko' ? '최고 주장' : 'Highest Claims', '~500K', 'var(--color-warning)')}
              </div>
              <div style="position: absolute; bottom: 8px; left: var(--space-lg); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-tertiary);">0</div>
              <div style="position: absolute; bottom: 8px; right: var(--space-lg); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-tertiary);">500,000</div>
            </div>

            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.65;">${lang === 'ko' ? '불확실성 자체가 이야기입니다. 북한의 근본적인 접근 문제는 연구자들이 내부에서 무슨 일이 일어나는지 확인할 수 없다는 것을 의미합니다. 모든 추정치는 탈북민 증언, 위성 이미지, 추론에 기반합니다.' : 'The uncertainty itself is the story. North Korea\'s fundamental access problem means researchers cannot verify what happens inside. Every estimate is based on defector testimony, satellite imagery, and inference.'}</p>
          </div>
        </div>
      </section>
    `;

    // Render testimonies
    const grid = document.getElementById('testimony-grid')!;
    renderTestimonyCards(grid, testimonies, lang, 'all', '');

    // Filter logic
    document.getElementById('theme-filters')?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#theme-filters .filter-btn').forEach(b => {
        (b as HTMLElement).style.cssText = 'padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;';
      });
      (btn as HTMLElement).style.cssText = 'padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;';
      const theme = btn.getAttribute('data-theme') || 'all';
      const search = (document.getElementById('testimony-search') as HTMLInputElement).value;
      renderTestimonyCards(grid, testimonies, getLang(), theme, search);
    });

    // Search
    document.getElementById('testimony-search')?.addEventListener('input', (e) => {
      const search = (e.target as HTMLInputElement).value;
      const activeTheme = document.querySelector('#theme-filters .filter-btn[style*="ember-subtle"]')?.getAttribute('data-theme') || 'all';
      renderTestimonyCards(grid, testimonies, getLang(), activeTheme, search);
    });
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Unable to load testimonies.</div>`;
  }
}

function renderTestimonyCards(container: HTMLElement, testimonies: any[], lang: string, theme: string, search: string): void {
  let filtered = theme === 'all' ? testimonies : testimonies.filter(t => t.theme === theme);
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(t => {
      const text = `${t.pseudonym[lang === 'ko' ? 'ko' : 'en']} ${t.summary[lang === 'ko' ? 'ko' : 'en']} ${t.fullText[lang === 'ko' ? 'ko' : 'en']}`.toLowerCase();
      return text.includes(q);
    });
  }

  container.innerHTML = filtered.map(t => {
    const pseudo = lang === 'ko' ? t.pseudonym.ko : t.pseudonym.en;
    const summary = lang === 'ko' ? t.summary.ko : t.summary.en;
    const fullText = lang === 'ko' ? t.fullText.ko : t.fullText.en;
    return `
      <div class="coal-panel ember-glow" style="padding: var(--space-xl);">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
          <h3 style="font-size: var(--text-lg); color: var(--accent-ember);">${pseudo}</h3>
          <span style="font-size: var(--text-xs); color: var(--text-tertiary); background: var(--bg-elevated); padding: 2px 8px; border-radius: var(--radius-full);">${formatTheme(t.theme, lang)}</span>
        </div>
        <p style="color: var(--text-primary); margin-bottom: var(--space-md);">${summary}</p>
        <details>
          <summary style="color: var(--accent-ember); cursor: pointer; font-size: var(--text-sm);">${lang === 'ko' ? '전체 읽기' : 'Read full testimony'}</summary>
          <div style="margin-top: var(--space-md); color: var(--text-secondary); line-height: 1.75; white-space: pre-line;">${fullText}</div>
          <div style="margin-top: var(--space-sm); font-size: var(--text-xs); color: var(--text-tertiary);">${lang === 'ko' ? '출처' : 'Source'}: ${t.source} (${t.year})</div>
        </details>
      </div>
    `;
  }).join('');

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color: var(--text-tertiary);">${lang === 'ko' ? '일치하는 증언이 없습니다.' : 'No matching testimonies.'}</p>`;
  }
}

function formatTheme(theme: string, lang: string): string {
  const map: Record<string, { en: string; ko: string }> = {
    'underground-faith': { en: 'Underground Faith', ko: '지하 신앙' },
    'prison-camp': { en: 'Prison Camp', ko: '정치범수용소' },
    'family-tradition': { en: 'Family Tradition', ko: '가족 전통' },
    'first-encounter': { en: 'First Encounter', ko: '첫 만남' },
    'post-defection-conversion': { en: 'Post-Defection', ko: '탈북 후 개종' },
  };
  return map[theme]?.[lang === 'ko' ? 'ko' : 'en'] || theme;
}

function renderEstimateBar(pct: number, label: string, displayLabel: string, value: string, color: string): string {
  return `<div style="position: absolute; left: ${pct}%; bottom: 20px; text-align: center; transform: translateX(-50%);">
    <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: ${color}; margin-bottom: 4px;">${value}</div>
    <div style="width: 2px; height: 40px; background: ${color}; margin: 0 auto;"></div>
    <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-top: 4px; white-space: nowrap;">${displayLabel}</div>
  </div>`;
}
