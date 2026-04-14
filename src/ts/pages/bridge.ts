import { getLang } from '../i18n';

export async function renderBridge(app: HTMLElement): Promise<void> {
  const lang = getLang();
  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Loading sources...</div>`;

  try {
    const data = await import('../../data/sources.json');
    const sources = (data.default || data) as any[];

    const langFilter = (l: string) => sources.filter(s => s.language === l);
    const enSources = langFilter('en');
    const koSources = langFilter('ko');
    const jaSources = langFilter('ja');

    app.innerHTML = `
      <section class="section">
        <div class="container">
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '한영 학술 다리' : 'Korean-English Scholarship Bridge'}</h1>
          <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '한국 학계와 영어 학계를 나란히 — 각 언어에서 무엇이 존재하고 무엇이 빠져있는지 확인하세요.' : 'Korean and English scholarship side by side — see what exists in each language and where the gaps are.'}</p>

          <!-- Stats -->
          <div class="grid-3col" style="margin-bottom: var(--space-xl);">
            <div class="coal-panel" style="padding: var(--space-lg); text-align: center;">
              <div class="stat-value">${enSources.length}</div>
              <div class="stat-label">${lang === 'ko' ? '영어 출처' : 'English Sources'}</div>
            </div>
            <div class="coal-panel" style="padding: var(--space-lg); text-align: center;">
              <div class="stat-value">${koSources.length}</div>
              <div class="stat-label">${lang === 'ko' ? '한국어 출처' : 'Korean Sources'}</div>
            </div>
            <div class="coal-panel" style="padding: var(--space-lg); text-align: center;">
              <div class="stat-value">${jaSources.length}</div>
              <div class="stat-label">${lang === 'ko' ? '일본어 출처' : 'Japanese Sources'}</div>
            </div>
          </div>

          <div style="background: var(--accent-ember-subtle); padding: var(--space-md) var(--space-lg); border-radius: var(--radius-sm); margin-bottom: var(--space-xl); border-left: 3px solid var(--accent-ember);">
            <p style="font-size: var(--text-sm); color: var(--accent-ember);">${lang === 'ko' ? '핵심 발견: 한국어 연구는 영어 연구보다 5-10배 더 방대하지만 세계 교회에는 거의 보이지 않습니다.' : 'Key finding: Korean-language research is 5-10x larger than English-language work, but nearly invisible to the global church.'}</p>
          </div>

          <!-- Search -->
          <input type="text" id="bridge-search" placeholder="${lang === 'ko' ? '주제 검색...' : 'Search by topic...'}" style="width: 100%; padding: var(--space-md); background: var(--bg-surface); border: 1px solid var(--border-default); border-radius: var(--radius-sm); color: var(--text-primary); font-family: var(--font-body); margin-bottom: var(--space-xl); font-size: var(--text-base);">

          <!-- Two-column comparison -->
          <div class="grid-2col" id="bridge-columns">
            <div>
              <h3 style="font-size: var(--text-lg); color: var(--accent-ember); margin-bottom: var(--space-lg);">${lang === 'ko' ? '영어 출처' : 'English Sources'}</h3>
              <div id="en-sources" style="display: flex; flex-direction: column; gap: var(--space-md);"></div>
            </div>
            <div>
              <h3 style="font-size: var(--text-lg); color: var(--accent-ember); margin-bottom: var(--space-lg);">${lang === 'ko' ? '한국어 출처' : 'Korean Sources'}</h3>
              <div id="ko-sources" style="display: flex; flex-direction: column; gap: var(--space-md);"></div>
            </div>
          </div>

          ${jaSources.length > 0 ? `
            <hr class="crack-light">
            <h3 style="font-size: var(--text-lg); color: var(--accent-ember); margin-bottom: var(--space-lg);">${lang === 'ko' ? '일본어 식민지 시대 출처' : 'Japanese Colonial-Era Sources'}</h3>
            <p style="color: var(--color-warning); font-size: var(--text-sm); margin-bottom: var(--space-md);">${lang === 'ko' ? '번역 필요 — 이 출처들은 한국어나 영어로 번역되지 않았습니다.' : 'Translation needed — these sources have not been translated to Korean or English.'}</p>
            <div id="ja-sources" style="display: flex; flex-direction: column; gap: var(--space-md);"></div>
          ` : ''}
        </div>
      </section>
    `;

    // Render sources
    renderSourceList('en-sources', enSources, lang);
    renderSourceList('ko-sources', koSources, lang);
    if (jaSources.length) renderSourceList('ja-sources', jaSources, lang);

    // Search
    document.getElementById('bridge-search')?.addEventListener('input', (e) => {
      const q = (e.target as HTMLInputElement).value.toLowerCase();
      const filterSrc = (list: any[]) => list.filter(s => {
        const text = `${s.title} ${s.titleTranslated || ''} ${s.author} ${s.abstract?.en || ''} ${s.abstract?.ko || ''}`.toLowerCase();
        return text.includes(q);
      });
      renderSourceList('en-sources', filterSrc(enSources), lang);
      renderSourceList('ko-sources', filterSrc(koSources), lang);
      if (jaSources.length) renderSourceList('ja-sources', filterSrc(jaSources), lang);
    });
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">Unable to load sources.</div>`;
  }
}

function renderSourceList(containerId: string, sources: any[], lang: string): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = sources.map(s => {
    const abstract = lang === 'ko' ? (s.abstract?.ko || s.abstract?.en || '') : (s.abstract?.en || '');
    return `
      <div class="coal-panel" style="padding: var(--space-md);">
        <div style="font-weight: 500; margin-bottom: var(--space-xs);">${s.title}</div>
        ${s.titleTranslated ? `<div style="font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: var(--space-xs);">${s.titleTranslated}</div>` : ''}
        <div style="font-size: var(--text-sm); color: var(--accent-ash); margin-bottom: var(--space-sm);">${s.author} (${s.year}) — ${s.type}</div>
        <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.55;">${abstract}</p>
      </div>
    `;
  }).join('');

  if (sources.length === 0) {
    container.innerHTML = `<p style="color: var(--text-tertiary); font-size: var(--text-sm);">${lang === 'ko' ? '일치하는 출처 없음' : 'No matching sources'}</p>`;
  }
}
