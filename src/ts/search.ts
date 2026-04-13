import { getLang } from './i18n';

interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  type: 'report' | 'timeline' | 'tool';
}

// Simple TF-IDF search across reports
export async function searchReports(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const lang = getLang();
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  const results: (SearchResult & { score: number })[] = [];

  try {
    const reportIndex = await import('../data/report-index');
    const reports = reportIndex.default;

    for (const report of reports) {
      const title = (lang === 'ko' ? report.title.ko : report.title.en).toLowerCase();
      const summary = (lang === 'ko' ? report.summary.ko : report.summary.en).toLowerCase();
      const text = `${title} ${summary}`;

      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 3;
        if (summary.includes(term)) score += 1;
      }

      if (score > 0) {
        results.push({
          title: lang === 'ko' ? report.title.ko : report.title.en,
          excerpt: lang === 'ko' ? report.summary.ko : report.summary.en,
          url: `#/research/${report.id}`,
          type: 'report',
          score,
        });
      }
    }

    // Search timeline events
    const timelineData = await import('../data/timeline.json');
    const events = timelineData.default || timelineData;

    for (const event of events as any[]) {
      const title = (lang === 'ko' ? event.title.ko : event.title.en).toLowerCase();
      const desc = (lang === 'ko' ? event.description.ko : event.description.en).toLowerCase();
      const text = `${title} ${desc}`;

      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 3;
        if (desc.includes(term)) score += 1;
      }

      if (score > 0) {
        results.push({
          title: `${event.year} — ${lang === 'ko' ? event.title.ko : event.title.en}`,
          excerpt: lang === 'ko' ? event.description.ko : event.description.en,
          url: `#/timeline`,
          type: 'timeline',
          score,
        });
      }
    }
  } catch {
    // Data not loaded yet
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ score, ...rest }) => rest);
}

// Highlight matching terms in text
export function highlightTerms(text: string, query: string): string {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  let result = text;
  for (const term of terms) {
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  }
  return result;
}

// Initialize search modal behavior
export function initSearch(): void {
  const input = document.querySelector('.search-input') as HTMLInputElement;
  const resultsContainer = document.getElementById('search-results');
  if (!input || !resultsContainer) return;

  let debounceTimer: number;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(async () => {
      const query = input.value.trim();
      if (!query) {
        resultsContainer.innerHTML = '';
        return;
      }

      const results = await searchReports(query);

      if (results.length === 0) {
        const lang = getLang();
        resultsContainer.innerHTML = `<div class="search-result-item" style="color: var(--text-tertiary);">${lang === 'ko' ? '결과를 찾을 수 없습니다' : 'No results found'}</div>`;
        return;
      }

      resultsContainer.innerHTML = results.map(r => `
        <a href="${r.url}" class="search-result-item" style="text-decoration: none; display: block;">
          <div class="result-title">${highlightTerms(r.title, query)}</div>
          <div class="result-excerpt">${highlightTerms(r.excerpt.slice(0, 120) + '...', query)}</div>
        </a>
      `).join('');

      // Close modal on result click
      resultsContainer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          const modal = document.getElementById('search-modal');
          if (modal) modal.classList.remove('open');
          input.value = '';
          resultsContainer.innerHTML = '';
        });
      });
    }, 200);
  });
}
