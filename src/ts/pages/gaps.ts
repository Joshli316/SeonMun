import { getLang } from '../i18n';

export async function renderGaps(app: HTMLElement): Promise<void> {
  const lang = getLang();
  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Loading gaps...</div>`;

  try {
    const data = await import('../../data/gaps.json');
    const gaps = (data.default || data) as any[];
    const categories = [...new Set(gaps.map((g: any) => g.category))];

    const catLabels: Record<string, { en: string; ko: string }> = {
      'historical': { en: 'Historical', ko: '역사' },
      'contemporary': { en: 'Contemporary', ko: '현대' },
      'theological': { en: 'Theological', ko: '신학' },
      'defector-studies': { en: 'Defector Studies', ko: '탈북민 연구' },
      'missiological': { en: 'Missiological', ko: '선교학' },
      'comparative': { en: 'Comparative', ko: '비교' },
    };

    app.innerHTML = `
      <section class="section">
        <div class="container">
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '연구 공백 추적기' : 'Research Gap Tracker'}</h1>
          <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '북한 기독교 학술 연구에서 가장 큰 미해결 질문들을 추적합니다. 공백을 인수하여 기여하세요.' : 'Track the biggest unanswered questions in North Korea Christianity scholarship. Claim a gap to contribute.'}</p>

          <!-- Filters -->
          <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-xl); flex-wrap: wrap;" id="gap-filters">
            <button class="filter-btn active" data-cat="all" style="padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;">${lang === 'ko' ? '전체' : 'All'}</button>
            ${categories.map(c => `<button class="filter-btn" data-cat="${c}" style="padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;">${catLabels[c]?.[lang === 'ko' ? 'ko' : 'en'] || c}</button>`).join('')}
          </div>

          <div id="gap-grid" class="grid-auto"></div>

          <hr class="crack-light">

          <!-- Suggest a Gap -->
          <div class="coal-panel" style="padding: var(--space-xl);">
            <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-md);">${lang === 'ko' ? '공백 제안하기' : 'Suggest a Gap'}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-bottom: var(--space-md);">${lang === 'ko' ? '새로운 연구 공백을 발견하셨나요? 제안해 주세요.' : 'Found a new research gap? Suggest it for review.'}</p>
            <form id="gap-suggest-form" style="display: flex; flex-direction: column; gap: var(--space-md);">
              <input type="text" placeholder="${lang === 'ko' ? '공백 주제' : 'Gap topic'}" style="padding: var(--space-md); background: var(--bg-surface); border: 1px solid var(--border-default); border-radius: var(--radius-sm); color: var(--text-primary); font-family: var(--font-body);">
              <textarea placeholder="${lang === 'ko' ? '설명' : 'Description'}" rows="3" style="padding: var(--space-md); background: var(--bg-surface); border: 1px solid var(--border-default); border-radius: var(--radius-sm); color: var(--text-primary); font-family: var(--font-body); resize: vertical;"></textarea>
              <button type="submit" class="btn-ember" style="align-self: start;">${lang === 'ko' ? '제출' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </section>
    `;

    // Render gaps
    const grid = document.getElementById('gap-grid')!;
    renderGapCards(grid, gaps, lang, 'all');

    // Filter
    document.getElementById('gap-filters')?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('#gap-filters .filter-btn').forEach(b => {
        (b as HTMLElement).style.cssText = 'padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;';
      });
      (btn as HTMLElement).style.cssText = 'padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;';
      renderGapCards(grid, gaps, getLang(), btn.getAttribute('data-cat') || 'all');
    });

    // Form
    document.getElementById('gap-suggest-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(lang === 'ko' ? '감사합니다! 제안이 접수되었습니다.' : 'Thank you! Your suggestion has been received.');
    });
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Unable to load gaps.</div>`;
  }
}

function renderGapCards(container: HTMLElement, gaps: any[], lang: string, category: string): void {
  const filtered = category === 'all' ? gaps : gaps.filter(g => g.category === category);

  container.innerHTML = filtered.map(g => {
    const topic = lang === 'ko' ? g.topic.ko : g.topic.en;
    const desc = lang === 'ko' ? g.description.ko : g.description.en;
    const sigDots = '●'.repeat(g.significance) + '○'.repeat(5 - g.significance);
    const difDots = '●'.repeat(g.difficulty) + '○'.repeat(5 - g.difficulty);

    return `
      <div class="coal-panel" style="padding: var(--space-lg);">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember);">${g.id.toUpperCase()}</span>
          <span style="font-size: var(--text-xs); padding: 2px 8px; border-radius: var(--radius-full); ${g.status === 'open' ? 'background: var(--accent-ember-subtle); color: var(--accent-ember);' : 'background: var(--color-success); color: white;'}">${g.status}</span>
        </div>
        <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-sm);">${topic}</h3>
        <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55; margin-bottom: var(--space-md);">${desc}</p>
        <div style="display: flex; gap: var(--space-lg); font-size: var(--text-xs); color: var(--text-tertiary);">
          <span>${lang === 'ko' ? '중요도' : 'Significance'}: <span style="color: var(--accent-ember); letter-spacing: 2px;">${sigDots}</span></span>
          <span>${lang === 'ko' ? '난이도' : 'Difficulty'}: <span style="color: var(--accent-ash); letter-spacing: 2px;">${difDots}</span></span>
        </div>
      </div>
    `;
  }).join('');
}
