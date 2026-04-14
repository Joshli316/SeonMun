import { registerRoute, initApp, getRouteParam } from './main';
import { t, getLang } from './i18n';
import { initSearch } from './search';
import { loadReport, loadTimeline } from './data-loader';
import { renderMap } from './pages/map';
import { renderHeritageLanding, renderJerusalem, renderCounterfeit, renderRevival, renderShowChurches } from './pages/heritage';
import { renderTestimonies } from './pages/testimonies';
import { renderDayAfter } from './pages/dayafter';
import { renderTrainingList, renderTrainingModule } from './pages/training';
import { renderPersonaGallery, renderPersonaChat } from './pages/personas';
import { renderEstimator } from './pages/estimator';
import { renderGaps } from './pages/gaps';
import { renderBridge } from './pages/bridge';

// ── Home Page ──────────────────────────────────────────────
function renderHome(): void {
  const app = document.getElementById('app')!;
  const lang = getLang();

  app.innerHTML = `
    <!-- Hero: Asymmetric split -->
    <section class="section" style="padding-top: var(--space-2xl); padding-bottom: var(--space-3xl);">
      <div class="container">
        <div class="grid-hero">
          <!-- Left: Story -->
          <div>
            <h1 style="font-size: var(--text-4xl); line-height: 1.1; margin-bottom: var(--space-lg);" data-i18n="hero.title">${t('hero.title')}</h1>
            <p style="font-size: var(--text-lg); color: var(--text-secondary); line-height: 1.65; margin-bottom: var(--space-xl);" data-i18n="hero.subtitle">${t('hero.subtitle')}</p>
            <div style="display: flex; gap: var(--space-md); flex-wrap: wrap;">
              <a href="#/research" class="btn-ember" data-i18n="hero.cta.archive">${t('hero.cta.archive')}</a>
              <a href="#/research" class="btn-ash" data-i18n="hero.cta.research">${t('hero.cta.research')}</a>
            </div>
          </div>
          <!-- Right: Stats panel -->
          <div class="coal-panel" style="padding: var(--space-xl); border-left: 3px solid var(--accent-ember);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl);">
              <div>
                <div class="stat-value" data-i18n="stats.watchlist">${t('stats.watchlist')}</div>
                <div class="stat-label" data-i18n="stats.watchlist.detail">${t('stats.watchlist.detail')}</div>
              </div>
              <div>
                <div class="stat-value" style="font-size: var(--text-xl);" data-i18n="stats.believers">${t('stats.believers')}</div>
                <div class="stat-label" data-i18n="stats.believers.detail">${t('stats.believers.detail')}</div>
              </div>
              <div>
                <div class="stat-value" data-i18n="stats.prisoners">${t('stats.prisoners')}</div>
                <div class="stat-label" data-i18n="stats.prisoners.detail">${t('stats.prisoners.detail')}</div>
              </div>
              <div>
                <div class="stat-value" data-i18n="stats.defectors">${t('stats.defectors')}</div>
                <div class="stat-label" data-i18n="stats.defectors.detail">${t('stats.defectors.detail')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crack light divider -->
    <div class="container"><hr class="crack-light"></div>

    <!-- Three Pillars -->
    <section class="section">
      <div class="container">
        <div class="grid-3col">
          <!-- Research -->
          <a href="#/research" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">01 — 12 REPORTS</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);" data-i18n="pillars.research.title">${t('pillars.research.title')}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.65;" data-i18n="pillars.research.desc">${t('pillars.research.desc')}</p>
          </a>
          <!-- Tools -->
          <a href="#/tools" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">02 — INTERACTIVE</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);" data-i18n="pillars.tools.title">${t('pillars.tools.title')}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.65;" data-i18n="pillars.tools.desc">${t('pillars.tools.desc')}</p>
          </a>
          <!-- Heritage -->
          <a href="#/heritage" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
            <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember); margin-bottom: var(--space-sm); letter-spacing: 1px;">03 — EXPERIENCE</div>
            <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);" data-i18n="pillars.heritage.title">${t('pillars.heritage.title')}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.65;" data-i18n="pillars.heritage.desc">${t('pillars.heritage.desc')}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Crack light divider -->
    <div class="container"><hr class="crack-light"></div>

    <!-- Timeline Preview -->
    <section class="section">
      <div class="container">
        <h2 style="margin-bottom: var(--space-sm);" data-i18n="timeline.title">${t('timeline.title')}</h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-xl);" data-i18n="timeline.subtitle">${t('timeline.subtitle')}</p>
        <div class="timeline-container">
          <div class="timeline-track" id="home-timeline">
            ${renderTimelinePreview(lang)}
          </div>
        </div>
        <div style="margin-top: var(--space-lg);">
          <a href="#/timeline" class="btn-ash" data-i18n="timeline.view_full">${t('timeline.view_full')}</a>
        </div>
      </div>
    </section>

    <!-- Crack light divider -->
    <div class="container"><hr class="crack-light"></div>

    <!-- The Quartet -->
    <section class="section">
      <div class="container">
        <h2 style="margin-bottom: var(--space-sm);" data-i18n="quartet.title">${t('quartet.title')}</h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-xl);" data-i18n="quartet.subtitle">${t('quartet.subtitle')}</p>
        <div class="grid-4col">
          ${renderQuartetCard('XuanYan 宣研', 'quartet.china', 'quartet.china.desc', '#0B1222', '#D4A44C', '~5-7%', lang)}
          ${renderQuartetCard('Sendō 宣道', 'quartet.japan', 'quartet.japan.desc', '#0A0908', '#C8323C', '~1.5%', lang)}
          ${renderQuartetCard('TruyềnĐạo 傳道', 'quartet.vietnam', 'quartet.vietnam.desc', '#12090B', '#9B2335', '~8-10%', lang)}
          ${renderQuartetCard('SeonMun 선문', 'quartet.nk', 'quartet.nk.desc', '#0C0A08', '#C45B22', '???', lang, true)}
        </div>
      </div>
    </section>
  `;
}

function renderTimelinePreview(lang: string): string {
  const events = [
    { year: '1784', en: 'First Catholic converts', ko: '최초의 천주교 신자' },
    { year: '1866', en: 'Robert Jermain Thomas martyred', ko: '로버트 저메인 토마스 순교' },
    { year: '1907', en: 'Pyongyang Revival', ko: '평양 대부흥' },
    { year: '1950', en: 'Korean War begins', ko: '한국전쟁 발발' },
    { year: '1972', en: 'Kim Il-sung consolidates Juche', ko: '김일성 주체사상 공고화' },
    { year: '2002', en: 'Open Doors ranks NK #1', ko: '오픈도어즈 북한 1위 선정' },
  ];
  return events.map(e => `
    <div class="timeline-event">
      <div class="dot"></div>
      <div class="year">${e.year}</div>
      <div class="event-title">${lang === 'ko' ? e.ko : e.en}</div>
    </div>
  `).join('');
}

function renderQuartetCard(name: string, titleKey: string, descKey: string, bg: string, accent: string, pct: string, lang: string, active = false): string {
  const border = active ? `border: 2px solid ${accent}; box-shadow: 0 0 20px ${accent}33;` : `border: 1px solid var(--border-subtle);`;
  return `
    <div style="background: ${bg}; ${border} padding: var(--space-lg); position: relative;">
      <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: ${accent}; margin-bottom: var(--space-sm);">${name}</div>
      <div style="font-size: var(--text-lg); font-weight: 500; margin-bottom: var(--space-xs);" data-i18n="${titleKey}">${t(titleKey)}</div>
      <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-md);" data-i18n="${descKey}">${t(descKey)}</div>
      <div style="font-family: var(--font-mono); font-size: var(--text-2xl); color: ${accent};">${pct}</div>
      <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Christian %</div>
      ${active ? '<div style="position: absolute; top: var(--space-sm); right: var(--space-sm); font-size: var(--text-xs); color: var(--accent-ember); font-family: var(--font-mono);">YOU ARE HERE</div>' : ''}
    </div>
  `;
}

// ── Research Page ──────────────────────────────────────────
async function renderResearch(): Promise<void> {
  const app = document.getElementById('app')!;
  const lang = getLang();

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);" data-i18n="research.title">${t('research.title')}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);" data-i18n="research.subtitle">${t('research.subtitle')}</p>

        <!-- Filters -->
        <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-xl); flex-wrap: wrap;" id="report-filters">
          <button class="filter-btn active" data-filter="all" data-i18n="research.filter.all">${t('research.filter.all')}</button>
          <button class="filter-btn" data-filter="History" data-i18n="research.filter.history">${t('research.filter.history')}</button>
          <button class="filter-btn" data-filter="Theology" data-i18n="research.filter.theology">${t('research.filter.theology')}</button>
          <button class="filter-btn" data-filter="Contemporary" data-i18n="research.filter.contemporary">${t('research.filter.contemporary')}</button>
          <button class="filter-btn" data-filter="Methodology" data-i18n="research.filter.methodology">${t('research.filter.methodology')}</button>
        </div>

        <!-- Report Grid -->
        <div id="report-grid" class="grid-auto">
          <div style="color: var(--text-secondary);" data-i18n="common.loading">${t('common.loading')}</div>
        </div>
      </div>
    </section>
  `;

  // Add filter button styles
  document.querySelectorAll('.filter-btn').forEach(btn => {
    (btn as HTMLElement).style.cssText = `
      padding: 6px 16px; background: transparent; border: 1px solid var(--border-default);
      border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm);
      font-family: var(--font-body); cursor: pointer; transition: all var(--transition-default);
    `;
  });
  document.querySelector('.filter-btn.active')?.setAttribute('style',
    'padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;'
  );

  // Load reports
  try {
    const reportIndex = await import('../data/report-index');
    const grid = document.getElementById('report-grid')!;
    const reports = reportIndex.default;
    renderReportGrid(grid, reports, lang, 'all');

    // Filter logic
    document.getElementById('report-filters')?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(b => {
        (b as HTMLElement).style.cssText = `padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;`;
        b.classList.remove('active');
      });
      (btn as HTMLElement).style.cssText = `padding: 6px 16px; background: var(--accent-ember-subtle); border: 1px solid var(--accent-ember); border-radius: var(--radius-full); color: var(--accent-ember); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;`;
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderReportGrid(grid, reports, getLang(), filter);
    });
  } catch {
    const grid = document.getElementById('report-grid')!;
    grid.innerHTML = `<div style="color: var(--text-secondary);">${t('common.error')}</div>`;
  }
}

function renderReportGrid(container: HTMLElement, reports: any[], lang: string, filter: string): void {
  const filtered = filter === 'all' ? reports : reports.filter(r => r.tags?.includes(filter));
  const featured = ['01', '07', '08'];

  container.innerHTML = filtered.map(r => {
    const isFeatured = featured.includes(r.id);
    const title = lang === 'ko' ? r.title.ko : r.title.en;
    const summary = lang === 'ko' ? r.summary.ko : r.summary.en;
    return `
      <a href="#/research/${r.id}" class="coal-panel ember-glow" style="padding: var(--space-lg); text-decoration: none; display: block; ${isFeatured ? 'border-color: var(--border-ember);' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
          <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-ember);">#${r.id}</span>
          ${isFeatured ? '<span style="font-size: var(--text-xs); color: var(--accent-ember); background: var(--accent-ember-subtle); padding: 2px 8px; border-radius: var(--radius-full);">Featured</span>' : ''}
        </div>
        <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-sm); color: var(--text-primary);">${title}</h3>
        <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55; margin-bottom: var(--space-md);">${summary}</p>
        <div style="display: flex; gap: var(--space-sm); flex-wrap: wrap;">
          ${(r.tags || []).map((tag: string) => `<span style="font-size: var(--text-xs); color: var(--text-tertiary); background: var(--bg-elevated); padding: 2px 8px; border-radius: var(--radius-full);">${tag}</span>`).join('')}
        </div>
      </a>
    `;
  }).join('');
}

// ── Single Report Page ──────────────────────────────────────
async function renderReport(): Promise<void> {
  const app = document.getElementById('app')!;
  const lang = getLang();
  const hash = window.location.hash.slice(1);
  const id = hash.split('/').pop() || '01';

  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);" data-i18n="common.loading">${t('common.loading')}</div>`;

  try {
    const data = await loadReport(id);
    if (!data) throw new Error('Report not found');
    const title = lang === 'ko' ? data.title.ko : data.title.en;
    const content = lang === 'ko' ? data.content.ko : data.content.en;

    // Parse markdown content to HTML
    const html = markdownToHtml(content);

    // Extract headings for TOC
    const headings = extractHeadings(content);

    app.innerHTML = `
      <div class="reading-progress" id="reading-progress" style="width: 0%;"></div>
      <section class="section" style="padding-top: var(--space-xl);">
        <div class="container">
          <a href="#/research" style="color: var(--text-secondary); font-size: var(--text-sm); text-decoration: none; display: inline-block; margin-bottom: var(--space-lg);" data-i18n="toc.back">${t('toc.back')}</a>
          ${lang === 'ko' ? '<div style="display: inline-block; margin-left: var(--space-md); font-size: var(--text-xs); color: var(--accent-ash); background: var(--accent-ash-subtle); padding: 2px 8px; border-radius: var(--radius-full);" data-i18n="report.ai_translated">' + t('report.ai_translated') + '</div>' : ''}
          <div class="grid-report-detail">
            <!-- TOC sidebar -->
            <aside style="position: sticky; top: 80px;" class="toc-sidebar">
              <h4 style="font-size: var(--text-sm); color: var(--accent-ember); margin-bottom: var(--space-md); font-family: var(--font-mono);" data-i18n="toc.title">${t('toc.title')}</h4>
              <nav style="display: flex; flex-direction: column; gap: var(--space-xs);">
                ${headings.map((h, i) => `<a href="#section-${i}" style="font-size: var(--text-sm); color: var(--text-secondary); text-decoration: none; padding: 4px 0; transition: color var(--transition-default);">${h}</a>`).join('')}
              </nav>
            </aside>
            <!-- Content -->
            <article>
              <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xl);">${title}</h1>
              <div class="report-content">${html}</div>
              ${data.sources ? `
                <hr class="crack-light">
                <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-md);" data-i18n="toc.sources">${t('toc.sources')}</h3>
                <ul style="color: var(--text-secondary); font-size: var(--text-sm);">
                  ${data.sources.map((s: string) => `<li style="margin-bottom: var(--space-xs);">${s}</li>`).join('')}
                </ul>
              ` : ''}
            </article>
          </div>
        </div>
      </section>
    `;

    // Reading progress
    window.addEventListener('scroll', updateReadingProgress);
    function updateReadingProgress() {
      const bar = document.getElementById('reading-progress');
      if (!bar) { window.removeEventListener('scroll', updateReadingProgress); return; }
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${Math.min(100, (scrolled / total) * 100)}%`;
    }
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">${t('common.error')}</div>`;
  }
}

// ── Timeline Page ──────────────────────────────────────────
async function renderTimeline(): Promise<void> {
  const app = document.getElementById('app')!;
  const lang = getLang();

  app.innerHTML = `<div class="container section" style="color: var(--text-secondary);" data-i18n="common.loading">${t('common.loading')}</div>`;

  try {
    const events = await loadTimeline();

    // Group by era
    const eras: Record<string, any[]> = {};
    events.forEach((e: any) => {
      const era = e.era || 'Other';
      if (!eras[era]) eras[era] = [];
      eras[era].push(e);
    });

    const eraKeys = Object.keys(eras);
    const eraLabels: Record<string, string> = {
      'catholic': lang === 'ko' ? '천주교 시작' : 'Catholic Beginnings',
      'protestant': lang === 'ko' ? '개신교 도래' : 'Protestant Arrival',
      'japanese': lang === 'ko' ? '일제강점기' : 'Japanese Occupation',
      'division': lang === 'ko' ? '분단과 전쟁' : 'Division & War',
      'kim1': lang === 'ko' ? '김일성 시대' : 'Kim Il-sung Era',
      'kim2': lang === 'ko' ? '김정일 시대' : 'Kim Jong-il Era',
      'kim3': lang === 'ko' ? '김정은 시대' : 'Kim Jong-un Era',
    };

    const categoryColors: Record<string, string> = {
      missions: 'var(--accent-ember)',
      persecution: 'var(--color-error)',
      cultural: 'var(--accent-ash)',
      political: 'var(--color-info)',
      institutional: 'var(--color-success)',
    };

    app.innerHTML = `
      <section class="section">
        <div class="container">
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);" data-i18n="timeline.page.title">${t('timeline.page.title')}</h1>
          <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);" data-i18n="timeline.page.subtitle">${t('timeline.page.subtitle')}</p>

          <!-- Era filters -->
          <div style="display: flex; gap: var(--space-sm); margin-bottom: var(--space-xl); flex-wrap: wrap;" id="era-filters">
            ${eraKeys.map(era => `
              <button class="filter-btn" data-era="${era}" style="padding: 6px 16px; background: transparent; border: 1px solid var(--border-default); border-radius: var(--radius-full); color: var(--text-secondary); font-size: var(--text-sm); font-family: var(--font-body); cursor: pointer;">${eraLabels[era] || era}</button>
            `).join('')}
          </div>

          <!-- Timeline -->
          <div id="timeline-full">
            ${eraKeys.map(era => {
              const isDarkEra = ['kim1', 'kim2', 'kim3', 'division'].includes(era);
              return `
                <div class="era-section" data-era="${era}" id="era-${era}" style="margin-bottom: var(--space-2xl); ${isDarkEra ? 'background: rgba(0,0,0,0.3); padding: var(--space-lg); margin-left: calc(-1 * var(--space-lg)); margin-right: calc(-1 * var(--space-lg));' : ''}">
                  <h2 style="font-size: var(--text-xl); color: var(--accent-ember); margin-bottom: var(--space-lg);">${eraLabels[era] || era}</h2>
                  <hr class="crack-light-sm">
                  <div style="display: flex; flex-direction: column; gap: var(--space-md); padding-left: var(--space-xl); border-left: 2px solid ${isDarkEra ? 'var(--color-error)' : 'var(--border-default)'};">
                    ${eras[era].map((ev: any) => {
                      const title = lang === 'ko' ? ev.title.ko : ev.title.en;
                      const desc = lang === 'ko' ? ev.description.ko : ev.description.en;
                      const catColor = categoryColors[ev.category] || 'var(--accent-ash)';
                      return `
                        <div class="timeline-event-full" style="position: relative; padding: var(--space-md) 0;">
                          <div style="position: absolute; left: calc(-1 * var(--space-xl) - 6px); top: var(--space-lg); width: 12px; height: 12px; border-radius: 50%; background: ${catColor};"></div>
                          <div style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--accent-ember); margin-bottom: var(--space-xs);">${ev.year}</div>
                          <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-xs);">${title}</h3>
                          <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${desc}</p>
                          ${ev.significance ? `<div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-top: var(--space-xs); font-style: italic;">${lang === 'ko' ? ev.significance.ko || ev.significance.en : ev.significance.en}</div>` : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;

    // Era filter clicks
    // Era filter clicks — scroll to era
    document.getElementById('era-filters')?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-btn');
      if (!btn) return;
      const era = btn.getAttribute('data-era');
      if (era) {
        document.getElementById(`era-${era}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Deep link support — scroll to era from URL hash
    const fullHash = window.location.hash;
    const eraMatch = fullHash.match(/#\/timeline\/(\w+)/);
    if (eraMatch) {
      setTimeout(() => {
        document.getElementById(`era-${eraMatch[1]}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  } catch {
    app.innerHTML = `<div class="container section" style="color: var(--text-secondary);">${t('common.error')}</div>`;
  }
}

// ── Ask the Archive Page ──────────────────────────────────
function renderAsk(): void {
  const app = document.getElementById('app')!;
  const lang = getLang();

  const suggestedQuestions = [
    { en: 'What was the 1907 Pyongyang Revival?', ko: '1907년 평양 대부흥은 무엇이었나요?' },
    { en: 'How did Kim Il-sung model Juche on Christianity?', ko: '김일성은 어떻게 주체사상을 기독교에 본떠 만들었나요?' },
    { en: 'What do we know about the underground church?', ko: '지하교회에 대해 무엇을 알고 있나요?' },
    { en: 'What is the "Day After" problem?', ko: '"그날 이후" 문제란 무엇인가요?' },
    { en: 'Why was Pyongyang called "Jerusalem of the East"?', ko: '평양이 왜 "동방의 예루살렘"이라 불렸나요?' },
    { en: 'Who was Robert Jermain Thomas?', ko: '로버트 저메인 토마스는 누구였나요?' },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="chat-container">
          <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);" data-i18n="ask.title">${t('ask.title')}</h1>
          <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-lg);" data-i18n="ask.subtitle">${t('ask.subtitle')}</p>

          <!-- Suggested questions -->
          <div class="suggested-questions" id="suggested-questions">
            ${suggestedQuestions.map(q => `
              <button class="suggested-q">${lang === 'ko' ? q.ko : q.en}</button>
            `).join('')}
          </div>

          <hr class="crack-light-sm">

          <!-- Chat messages -->
          <div class="chat-messages" id="chat-messages"></div>

          <!-- Input -->
          <div class="chat-input-row">
            <input type="text" class="chat-input" id="chat-input" placeholder="${t('ask.placeholder')}" data-i18n-placeholder="ask.placeholder">
            <button class="btn-ember" id="chat-send" data-i18n="ask.send">${t('ask.send')}</button>
          </div>
        </div>
      </div>
    </section>
  `;

  // Chat logic
  const chatMessages = document.getElementById('chat-messages')!;
  const chatInput = document.getElementById('chat-input') as HTMLInputElement;
  const chatSend = document.getElementById('chat-send')!;

  async function sendMessage(text: string) {
    // Add user message
    chatMessages.innerHTML += `<div class="chat-message user">${escapeHtml(text)}</div>`;
    chatInput.value = '';
    chatInput.disabled = true;

    // Add thinking indicator
    const thinkingId = `thinking-${Date.now()}`;
    chatMessages.innerHTML += `<div class="chat-message assistant" id="${thinkingId}" style="color: var(--text-secondary);">${t('ask.thinking')}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang: getLang() }),
      });

      const thinkingEl = document.getElementById(thinkingId);

      if (!response.ok) {
        if (thinkingEl) thinkingEl.innerHTML = 'The archive is currently offline. Please try again later.';
        chatInput.disabled = false;
        return;
      }

      // Stream response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          fullResponse += decoder.decode(value, { stream: true });
          if (thinkingEl) thinkingEl.innerHTML = markdownToHtml(fullResponse);
        }
      }
    } catch {
      const thinkingEl = document.getElementById(thinkingId);
      if (thinkingEl) thinkingEl.innerHTML = 'Unable to connect to the archive. The API may not be configured yet.';
    }

    chatInput.disabled = false;
    chatInput.focus();
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) sendMessage(text);
  });

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const text = chatInput.value.trim();
      if (text) sendMessage(text);
    }
  });

  // Suggested question clicks
  document.getElementById('suggested-questions')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.suggested-q');
    if (btn) sendMessage(btn.textContent || '');
  });
}

// ── Tools Page ──────────────────────────────────────────
function renderTools(): void {
  const app = document.getElementById('app')!;
  const lang = getLang();

  const tools = [
    { en: { title: 'Ask the Archive', desc: 'AI-powered Q&A grounded in 12 research reports.' }, ko: { title: '아카이브에 질문하기', desc: '12편의 연구 보고서를 기반으로 한 AI Q&A.' }, link: '#/ask' },
    { en: { title: 'Interactive Timeline', desc: '242 years of Christianity in North Korea.' }, ko: { title: '대화형 타임라인', desc: '북한 기독교 242년.' }, link: '#/timeline' },
    { en: { title: 'Spread & Destruction Map', desc: 'Watch Christianity rise and disappear across the Korean peninsula.' }, ko: { title: '확산과 파괴 지도', desc: '한반도에서 기독교가 세워지고 사라지는 것을 지켜보세요.' }, link: '#/map' },
    { en: { title: 'Defector Testimony Archive', desc: 'Anonymized accounts from published defector testimonies.' }, ko: { title: '탈북민 증언 아카이브', desc: '출판된 탈북민 증언의 익명화된 기록.' }, link: '#/testimonies' },
    { en: { title: '"Day After" Scenario Planner', desc: 'Three scenarios for NK opening. Checklists and preparedness scoring.' }, ko: { title: '"그날 이후" 시나리오 플래너', desc: 'NK 개방을 위한 세 가지 시나리오. 체크리스트와 대비 점수.' }, link: '#/dayafter' },
    { en: { title: 'Training Modules', desc: '5 modules for defector ministry and NK missions.' }, ko: { title: '훈련 모듈', desc: '탈북민 사역과 북한 선교를 위한 5개 모듈.' }, link: '#/training' },
    { en: { title: 'Historical Conversations', desc: 'Chat with 6 key figures from Korean Christian history.' }, ko: { title: '역사적 대화', desc: '한국 기독교 역사의 핵심 인물 6인과 대화.' }, link: '#/personas' },
    { en: { title: 'Underground Church Estimator', desc: 'Explore estimates, adjust assumptions, compare methodologies.' }, ko: { title: '지하교회 추정기', desc: '추정치 탐색, 가정 조정, 방법론 비교.' }, link: '#/estimator' },
    { en: { title: 'Research Gap Tracker', desc: 'Track unanswered questions in NK Christianity scholarship.' }, ko: { title: '연구 공백 추적기', desc: 'NK 기독교 학술 연구의 미해결 질문 추적.' }, link: '#/gaps' },
    { en: { title: 'Korean-English Scholarship Bridge', desc: 'Korean and English sources side by side.' }, ko: { title: '한영 학술 다리', desc: '한국어와 영어 출처를 나란히.' }, link: '#/bridge' },
  ];

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '도구' : 'Tools'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-xl);">${lang === 'ko' ? '연구를 기반으로 한 대화형 도구 — 교회, 선교사, 학자를 위해.' : 'Interactive tools built on research — for churches, missionaries, and scholars.'}</p>
        <div class="grid-auto">
          ${tools.map(tool => {
            const t = lang === 'ko' ? tool.ko : tool.en;
            return `
              <a href="${tool.link}" class="coal-panel ember-glow" style="padding: var(--space-xl); text-decoration: none; display: block;">
                <h3 style="font-size: var(--text-xl); margin-bottom: var(--space-md);">${t.title}</h3>
                <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.55;">${t.desc}</p>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

// ── Heritage Page ──────────────────────────────────────────
// ── About Page ──────────────────────────────────────────
function renderAbout(): void {
  const app = document.getElementById('app')!;

  app.innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 720px;">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-xl);" data-i18n="about.title">${t('about.title')}</h1>
        <p style="font-size: var(--text-lg); line-height: 1.75; margin-bottom: var(--space-lg);" data-i18n="about.p1">${t('about.p1')}</p>
        <p style="font-size: var(--text-lg); line-height: 1.75; margin-bottom: var(--space-lg);" data-i18n="about.p2">${t('about.p2')}</p>
        <hr class="crack-light">
        <p style="font-size: var(--text-lg); color: var(--text-secondary); line-height: 1.75;" data-i18n="footer.mission">${t('footer.mission')}</p>
      </div>
    </section>
  `;
}

// ── Markdown Helpers ──────────────────────────────────────
function markdownToHtml(md: string): string {
  const lines = md.split('\n');
  const output: string[] = [];
  let h2Index = 0;
  let inTable = false;
  let isFirstRow = true;
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Horizontal rules
    if (trimmed === '---') {
      if (inList) { output.push('</ul>'); inList = false; }
      if (inTable) { output.push('</table>'); inTable = false; }
      output.push('<hr class="crack-light">');
      continue;
    }

    // H2
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      if (inTable) { output.push('</table>'); inTable = false; }
      const text = applyInline(trimmed.slice(3));
      output.push(`<h2 id="section-${h2Index++}">${text}</h2>`);
      continue;
    }

    // H3
    if (trimmed.startsWith('### ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      if (inTable) { output.push('</table>'); inTable = false; }
      const text = applyInline(trimmed.slice(4));
      output.push(`<h3>${text}</h3>`);
      continue;
    }

    // Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed.slice(1, -1).split('|').map(c => c.trim());
      // Separator row
      if (cells.every(c => /^[-:]+$/.test(c))) continue;
      if (!inTable) {
        if (inList) { output.push('</ul>'); inList = false; }
        output.push('<table>');
        inTable = true;
        isFirstRow = true;
      }
      const tag = isFirstRow ? 'th' : 'td';
      output.push(`<tr>${cells.map(c => `<${tag}>${applyInline(c)}</${tag}>`).join('')}</tr>`);
      // Check if next line is separator — then this was the header
      const next = lines[i + 1]?.trim() || '';
      if (next.startsWith('|') && next.split('|').filter(c => c.trim()).every(c => /^[-:]+$/.test(c))) {
        isFirstRow = false;
      } else {
        isFirstRow = false;
      }
      continue;
    } else if (inTable) {
      output.push('</table>');
      inTable = false;
    }

    // List item
    if (trimmed.startsWith('- ')) {
      if (!inList) { output.push('<ul>'); inList = true; }
      output.push(`<li>${applyInline(trimmed.slice(2))}</li>`);
      continue;
    } else if (inList && trimmed !== '') {
      output.push('</ul>');
      inList = false;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      output.push(`<blockquote>${applyInline(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    // Empty line
    if (trimmed === '') continue;

    // Paragraph
    output.push(`<p>${applyInline(trimmed)}</p>`);
  }

  if (inList) output.push('</ul>');
  if (inTable) output.push('</table>');

  return output.join('\n');
}

function applyInline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic (single *)
  text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  return text;
}

function extractHeadings(md: string): string[] {
  const headings: string[] = [];
  const regex = /^## (.+)$/gm;
  let match;
  while ((match = regex.exec(md)) !== null) {
    headings.push(match[1].replace(/\*\*/g, ''));
  }
  return headings;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ── Register Routes ──────────────────────────────────────
registerRoute('/', renderHome);
registerRoute('/research', () => { renderResearch(); });
registerRoute('/research/:id', () => { renderReport(); });
registerRoute('/timeline', () => { renderTimeline(); });
registerRoute('/timeline/:era', () => { renderTimeline(); });
registerRoute('/ask', renderAsk);
registerRoute('/tools', renderTools);
registerRoute('/about', renderAbout);

// Phase 2 routes
registerRoute('/map', () => { renderMap(document.getElementById('app')!); });
registerRoute('/heritage', () => { renderHeritageLanding(document.getElementById('app')!); });
registerRoute('/heritage/jerusalem', () => { renderJerusalem(document.getElementById('app')!); });
registerRoute('/heritage/counterfeit', () => { renderCounterfeit(document.getElementById('app')!); });
registerRoute('/heritage/revival', () => { renderRevival(document.getElementById('app')!); });
registerRoute('/heritage/showchurches', () => { renderShowChurches(document.getElementById('app')!); });
registerRoute('/testimonies', () => { renderTestimonies(document.getElementById('app')!); });
registerRoute('/dayafter', () => { renderDayAfter(document.getElementById('app')!); });
registerRoute('/training', () => { renderTrainingList(document.getElementById('app')!); });
registerRoute('/training/:id', () => { const id = getRouteParam('id'); if (id) renderTrainingModule(document.getElementById('app')!, id); });

// Phase 3 routes
registerRoute('/personas', () => { renderPersonaGallery(document.getElementById('app')!); });
registerRoute('/personas/:id', () => { const id = getRouteParam('id'); if (id) renderPersonaChat(document.getElementById('app')!, id); });
registerRoute('/estimator', () => { renderEstimator(document.getElementById('app')!); });
registerRoute('/gaps', () => { renderGaps(document.getElementById('app')!); });
registerRoute('/bridge', () => { renderBridge(document.getElementById('app')!); });

// ── Boot ──────────────────────────────────────────
initApp();
initSearch();
