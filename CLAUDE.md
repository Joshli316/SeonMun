# SeonMun 선문 (宣門) — North Korea Missions Research Platform

A bilingual (EN/KO), AI-powered research platform connecting 242 years of Christianity in North Korea to today's defector ministry and "Day After" preparedness. Sister project to **XuanYan 宣研** (China), **Sendō 宣道** (Japan), and **TruyềnĐạo 傳道** (Vietnam).

## Tech Stack
- TypeScript/HTML single-page app
- Tailwind CSS (dark mode default)
- Vite for bundling
- Cloudflare Pages deployment
- Cloudflare Worker as API proxy for Claude API calls
- No framework — vanilla TypeScript with module bundling

## Structure
```
src/
  index.html          — Homepage
  css/
    main.css          — Tailwind + custom CSS vars
  ts/
    main.ts           — App init, router, language toggle
    i18n.ts           — Bilingual string management (EN/KO)
    timeline.ts       — Animated timeline component
    search.ts         — Full-text search across reports
    map.ts            — Animated spread/destruction map (Leaflet)
    chat.ts           — Ask the Archive RAG interface
  pages/
    research/         — 12 research report pages
    tools/            — Interactive tool pages (Day After, training, etc.)
    heritage/         — Jerusalem of the East + Juche comparison experience
    personas/         — AI conversation interfaces
    about/            — About page
  data/
    reports/          — Report content as JSON (EN + KO)
    timeline.json     — Timeline events (1784-2026)
    personas/         — Persona corpora (Thomas, Ju Ki-Chul, Moffett, etc.)
    map-data.json     — Geographic + temporal church data
  assets/
    fonts/            — Noto Serif KR + Noto Sans KR + JetBrains Mono
    img/              — Coal textures, ember effects, historical photos
dist/                 — Built output
worker/
  src/index.ts        — CF Worker for Claude API proxy
```

## Entry Point
src/index.html

## Deployment
`wrangler pages deploy dist/`

## Conventions
- All user-facing strings go through i18n.ts — no hardcoded EN or KO text
- CSS custom properties for all colors (dark mode is default, light mode via toggle)
- Bilingual toggle persists to localStorage as `seonmun-lang`
- Report content stored as structured JSON with `en` and `ko` fields
- Mobile-first responsive: 375px → 768px → 1024px → 1440px
- Monospace (JetBrains Mono) for data/stats, Serif (Noto Serif KR) for headings, Sans (Noto Sans KR) for body
- Ember orange accent (#C45B22) on coal black (#0C0A08) — never pure black or pure white
- Ember glow effect (radial gradient + box-shadow) on hover states for interactive elements
- Ash grey (#8A7E76) as secondary accent for structural elements, dividers
- Crack light motif — thin ember lines on dark surfaces as section dividers
- Korean text uses Noto Sans KR — designed for Hangul clarity
- For Korean translations, mark AI-translated content with: "AI 번역 — 검토 대기" / "AI-translated — review pending"
- All API calls to Claude go through CF Worker proxy at /api/* — never expose API key in client
- SECURITY: Extra caution with any content that could endanger people inside North Korea. No real names of living defectors. No operational details of border networks.

## Sister Projects
- XuanYan 宣研 (China) at ~/Desktop/Projects/XuanYan/. Dark navy + gold aesthetic.
- Sendō 宣道 (Japan) at ~/Desktop/Projects/Sendo/. Sumi charcoal + vermillion aesthetic.
- TruyềnĐạo 傳道 (Vietnam) at ~/Desktop/Projects/TruyenDao/. Lacquer black + oxblood cinnabar + gold leaf.
- SeonMun must be visually distinct — coal black + ember orange + ash grey.

## Research Source
~/Desktop/Projects/Research/2026-04-13-north-korea-missions-scholarship/ (12 reports + NotebookLM deliverables)
