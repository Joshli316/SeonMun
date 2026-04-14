// Static imports for Vite code splitting — each report becomes a lazy chunk
const reportLoaders: Record<string, () => Promise<any>> = {
  '01': () => import('../data/reports/01.json'),
  '02': () => import('../data/reports/02.json'),
  '03': () => import('../data/reports/03.json'),
  '04': () => import('../data/reports/04.json'),
  '05': () => import('../data/reports/05.json'),
  '06': () => import('../data/reports/06.json'),
  '07': () => import('../data/reports/07.json'),
  '08': () => import('../data/reports/08.json'),
  '09': () => import('../data/reports/09.json'),
  '10': () => import('../data/reports/10.json'),
  '11': () => import('../data/reports/11.json'),
  '12': () => import('../data/reports/12.json'),
};

export async function loadReport(id: string): Promise<any | null> {
  const loader = reportLoaders[id];
  if (!loader) return null;
  try {
    const module = await loader();
    return module.default || module;
  } catch {
    return null;
  }
}

export async function loadTimeline(): Promise<any[]> {
  const module = await import('../data/timeline.json');
  return module.default || module;
}
