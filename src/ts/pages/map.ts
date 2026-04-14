import { t, getLang } from '../i18n';

export function renderMap(app: HTMLElement): void {
  const lang = getLang();

  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h1 style="font-size: var(--text-3xl); margin-bottom: var(--space-sm);">${lang === 'ko' ? '기독교의 확산과 파괴' : 'The Spread and Destruction of Christianity'}</h1>
        <p style="color: var(--text-secondary); font-size: var(--text-lg); margin-bottom: var(--space-lg);">${lang === 'ko' ? '1784년부터 현재까지 — 교회가 세워지고 사라지는 것을 지켜보세요.' : 'From 1784 to present — watch churches rise and disappear.'}</p>

        <!-- Year slider -->
        <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg);">
          <span style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-tertiary);">1784</span>
          <input type="range" id="year-slider" min="1784" max="2026" value="1907" style="flex: 1; accent-color: var(--accent-ember);" aria-label="Year">
          <span style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-tertiary);">2026</span>
          <span id="year-display" style="font-family: var(--font-mono); font-size: var(--text-2xl); color: var(--accent-ember); min-width: 80px; text-align: right;">1907</span>
        </div>

        <!-- Map container -->
        <div id="map-container" style="width: 100%; height: 500px; background: var(--bg-surface); border: 1px solid var(--border-default); position: relative; overflow: hidden;">
          <div id="map-canvas" style="width: 100%; height: 100%;"></div>
        </div>

        <!-- Legend -->
        <div style="display: flex; gap: var(--space-lg); margin-top: var(--space-lg); flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--accent-ember);"></div>
            <span style="font-size: var(--text-sm); color: var(--text-secondary);">${lang === 'ko' ? '활성 교회 (1950 이전)' : 'Active Church (pre-1950)'}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--accent-ash);"></div>
            <span style="font-size: var(--text-sm); color: var(--text-secondary);">${lang === 'ko' ? '파괴/폐쇄' : 'Destroyed/Closed'}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--color-warning);"></div>
            <span style="font-size: var(--text-sm); color: var(--text-secondary);">${lang === 'ko' ? '전시용 교회' : 'Show Church'}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--color-error);"></div>
            <span style="font-size: var(--text-sm); color: var(--text-secondary);">${lang === 'ko' ? '정치범수용소' : 'Prison Camp'}</span>
          </div>
        </div>

        <hr class="crack-light">

        <!-- Prison camp toggle -->
        <div style="margin-top: var(--space-lg);">
          <label style="display: flex; align-items: center; gap: var(--space-sm); cursor: pointer;">
            <input type="checkbox" id="camp-toggle" style="accent-color: var(--accent-ember); width: 18px; height: 18px;">
            <span style="font-size: var(--text-base); color: var(--text-secondary);">${lang === 'ko' ? '정치범수용소 오버레이 표시' : 'Show Prison Camp Overlay'}</span>
          </label>
        </div>

        <!-- Narrative text -->
        <div id="map-narrative" class="coal-panel" style="padding: var(--space-lg); margin-top: var(--space-lg);">
          <p style="color: var(--text-secondary); font-size: var(--text-base); line-height: 1.65;" id="narrative-text"></p>
        </div>
      </div>
    </section>
  `;

  initMap(lang);
}

async function initMap(lang: string): Promise<void> {
  try {
    const mapData = await import('../../data/map-data.json');
    const points = (mapData.default || mapData) as any[];

    const canvas = document.getElementById('map-canvas')!;
    const slider = document.getElementById('year-slider') as HTMLInputElement;
    const yearDisplay = document.getElementById('year-display')!;
    const narrativeText = document.getElementById('narrative-text')!;
    const campToggle = document.getElementById('camp-toggle') as HTMLInputElement;

    let showCamps = false;

    // Simple SVG-based map centered on Korean Peninsula
    function renderPoints(year: number) {
      const visible = points.filter(p => {
        if (p.status === 'prison-camp' && !showCamps) return false;
        if (p.status === 'show-church' && year < 1988) return false;
        if (p.status === 'prison-camp' && year < 1958) return false;
        if (p.year > year) return false;
        return true;
      });

      // Determine point colors based on year
      const getColor = (p: any) => {
        if (p.status === 'prison-camp') return 'var(--color-error)';
        if (p.status === 'show-church') return 'var(--color-warning)';
        if (year >= 1950 && p.status === 'built') return 'var(--accent-ash)'; // destroyed
        if (p.status === 'destroyed' && year >= 1950) return 'var(--accent-ash)';
        return 'var(--accent-ember)';
      };

      // Map coordinates: Korean peninsula roughly 33-43 lat, 124-131 lng
      const minLat = 37.5, maxLat = 43, minLng = 124, maxLng = 131;
      const w = canvas.clientWidth, h = canvas.clientHeight;

      const toX = (lng: number) => ((lng - minLng) / (maxLng - minLng)) * w;
      const toY = (lat: number) => h - ((lat - minLat) / (maxLat - minLat)) * h;

      canvas.innerHTML = `
        <svg width="${w}" height="${h}" style="position: absolute; top: 0; left: 0;">
          ${visible.map(p => {
            const x = toX(p.lng);
            const y = toY(p.lat);
            const color = getColor(p);
            const name = lang === 'ko' ? p.name.ko : p.name.en;
            const r = p.status === 'prison-camp' ? 8 : 6;
            return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="0.85" style="cursor: pointer;">
              <title>${name} (${p.year})</title>
            </circle>`;
          }).join('')}
        </svg>
      `;

      // Update narrative
      const narratives: Record<string, { en: string; ko: string }> = {
        '1784': { en: 'The first Catholic converts. Christianity enters Korea through lay people — no missionaries needed.', ko: '최초의 천주교 신자. 기독교가 평신도를 통해 한국에 들어옴 — 선교사가 필요 없었음.' },
        '1866': { en: 'Robert Jermain Thomas throws Bibles from the burning General Sherman. The Protestant seed is planted near Pyongyang.', ko: '로버트 저메인 토마스가 불타는 제너럴 셔먼호에서 성경을 던짐. 개신교의 씨앗이 평양 근처에 뿌려짐.' },
        '1907': { en: 'The Great Pyongyang Revival. The city earns its name: "Jerusalem of the East." Over 100 churches will fill these streets.', ko: '평양 대부흥. 도시가 그 이름을 얻음: "동방의 예루살렘." 100개 이상의 교회가 이 거리를 채울 것.' },
        '1945': { en: 'Liberation from Japan — but division at the 38th parallel. Pyongyang, with its 100+ churches, falls under Soviet control.', ko: '일본으로부터 해방 — 그러나 38선에서 분단. 100개 이상의 교회가 있던 평양이 소련 통제 하에 놓임.' },
        '1950': { en: 'The Korean War. Watch the churches disappear. The "Jerusalem of the East" is destroyed. 300,000 Christians flee south.', ko: '한국전쟁. 교회가 사라지는 것을 지켜보세요. "동방의 예루살렘"이 파괴됨. 30만 기독교인이 남쪽으로 피난.' },
        '1988': { en: 'Four "show churches" open in Pyongyang. Real worship or diplomatic theater? The debate continues.', ko: '4개의 "전시용 교회"가 평양에 개방. 진정한 예배인가 외교적 연극인가? 논쟁은 계속.' },
        '2026': { en: 'Today: #1 on the World Watch List for 23+ years. An estimated 50,000-70,000 Christians in prison camps. Four show churches remain.', ko: '오늘: 23년 이상 세계감시목록 1위. 추정 5만-7만 기독교인이 정치범수용소에 수감. 4개의 전시용 교회만 남아있음.' },
      };

      // Find closest narrative
      const narYears = Object.keys(narratives).map(Number).sort((a, b) => a - b);
      let closestYear = narYears[0];
      for (const ny of narYears) {
        if (ny <= year) closestYear = ny;
      }
      const nar = narratives[String(closestYear)];
      narrativeText.textContent = lang === 'ko' ? nar.ko : nar.en;
    }

    renderPoints(1907);

    slider.addEventListener('input', () => {
      const year = parseInt(slider.value);
      yearDisplay.textContent = String(year);
      renderPoints(year);
    });

    campToggle.addEventListener('change', () => {
      showCamps = campToggle.checked;
      renderPoints(parseInt(slider.value));
    });
  } catch {
    const canvas = document.getElementById('map-canvas');
    if (canvas) canvas.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-tertiary);">Map data loading...</div>`;
  }
}
