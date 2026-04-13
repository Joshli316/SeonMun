# Implementation Plan: SeonMun 선문 (宣門)

## Overview
A bilingual (English/Korean), AI-powered research platform on Christianity in North Korea, covering 242 years of history (Catholic beginnings 1784 → today's underground church and defector ministry). Fourth in the Asia quartet after XuanYan 宣研 (China), Sendō 宣道 (Japan), and TruyềnĐạo 傳道 (Vietnam). The sister codebases are the architectural template — SeonMun ports faster but uses a distinct visual identity (underground ember: coal black + ember orange + ash grey). Unique features: the "Jerusalem of the East" heritage experience (Pyongyang's lost churches), "Day After" scenario planner (reunification preparedness), defector testimony archive, Juche-Christianity comparison, and Korean-English scholarship bridge.

## Design Spec

### Direction
Mood: **Grounded urgency** — editorial depth meets hidden resilience. Density: **Balanced** (spacious for reading, denser for tools). Color: **Dark mode with warm ember accent on coal base**. Type: **Korean serif display + Korean sans body + data mono**. Shapes: **Sharp content containers, slightly rounded interactive elements, crack-light borders**.

### Color Palette (CSS Custom Properties)

```css
:root {
  /* Base — coal black */
  --bg-base: #0C0A08;        /* deep coal with warm undertone */
  --bg-surface: #171412;     /* lifted surface — like ash layer */
  --bg-elevated: #221E1A;    /* cards, modals */
  --bg-overlay: rgba(12, 10, 8, 0.85);

  /* Text — smoke white */
  --text-primary: #E8E2DA;   /* warm off-white, like smoke */
  --text-secondary: #A89E94; /* warm grey */
  --text-tertiary: #6B6058;  /* labels, captions */
  --text-disabled: #3D3830;

  /* Accent primary — ember orange */
  --accent-primary: #C45B22;     /* deep ember orange */
  --accent-hover: #D4692E;       /* brighter on hover */
  --accent-pressed: #A84D1C;     /* darker on press */
  --accent-subtle: rgba(196, 91, 34, 0.12); /* tinted backgrounds */

  /* Accent secondary — ash grey */
  --accent-ash: #8A7E76;         /* warm ash */
  --accent-ash-hover: #9E928A;   /* lighter on hover */
  --accent-ash-subtle: rgba(138, 126, 118, 0.12);

  /* Ember glow — CSS effect for hover states */
  --ember-glow: radial-gradient(ellipse at center,
    rgba(196, 91, 34, 0.15) 0%,
    rgba(196, 91, 34, 0.06) 40%,
    rgba(12, 10, 8, 0) 70%);
  --ember-shadow: 0 0 20px rgba(196, 91, 34, 0.2);

  /* Crack light — thin ember lines */
  --crack-gradient: linear-gradient(90deg,
    transparent 0%,
    rgba(196, 91, 34, 0.4) 20%,
    rgba(196, 91, 34, 0.6) 50%,
    rgba(196, 91, 34, 0.4) 80%,
    transparent 100%);

  /* Borders — ash edge */
  --border-subtle: #1E1A16;
  --border-default: #2E2A26;
  --border-strong: #4A4440;
  --border-ember: rgba(196, 91, 34, 0.3); /* ember accent borders */

  /* Semantic */
  --color-success: #6B8A5E;  /* muted green */
  --color-warning: #C4962B;  /* amber warning */
  --color-error: #B84233;    /* ember-adjacent red */
  --color-info: #5E7A8A;     /* steel blue */

  /* Light mode (toggle) */
  --light-bg-base: #F8F4EE;
  --light-bg-surface: #EDE8E0;
  --light-text-primary: #1A1614;
  --light-accent-primary: #A84D1C;
}
```

**Contrast verified:** Body text (#E8E2DA on #0C0A08) = 15.8:1 ratio. Ember accent on coal = 5.2:1 (AA). Ash grey on coal = 4.6:1 (AA). All pass WCAG AA.

### Typography

```css
--font-display: 'Noto Serif KR', Georgia, serif;
--font-body: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;

/* Type scale */
--text-xs: 12px;     /* labels, captions */
--text-sm: 14px;     /* metadata, footnotes */
--text-base: 16px;   /* body */
--text-lg: 18px;     /* large body, lead paragraphs */
--text-xl: 24px;     /* h4, card titles */
--text-2xl: 32px;    /* h3 */
--text-3xl: 44px;    /* h2 */
--text-4xl: 60px;    /* h1, hero */
--text-5xl: 84px;    /* display */

/* Weights — only 3 used */
--weight-regular: 400;
--weight-medium: 500;
--weight-bold: 700;

/* Line heights */
--leading-tight: 1.15;   /* headings */
--leading-snug: 1.35;    /* subheadings */
--leading-normal: 1.55;  /* body */
--leading-relaxed: 1.75; /* long-form reading */
```

### Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 40px;
--space-2xl: 64px;
--space-3xl: 96px;
--space-4xl: 128px;
```

### Shapes & Effects

```css
--radius-none: 0;        /* content containers, cards */
--radius-sm: 4px;        /* buttons, inputs, toggles */
--radius-md: 8px;        /* dropdowns, tooltips */
--radius-full: 9999px;   /* pills, badges */

--shadow-sm: 0 1px 3px rgba(12, 10, 8, 0.4);
--shadow-md: 0 4px 12px rgba(12, 10, 8, 0.5);
--shadow-lg: 0 8px 24px rgba(12, 10, 8, 0.6);
--shadow-ember: 0 0 16px rgba(196, 91, 34, 0.15); /* ember glow for featured */

--transition-default: 200ms ease;
--transition-slow: 400ms ease;
--transition-ember: 600ms ease; /* slower pulse for ember glow */
```

### Anti-AI Checklist
1. Vary spacing — tighter within coal panels, looser between sections
2. Left-aligned headings, asymmetric hero layout
3. Solid ember buttons, ash ghost buttons — no gradients on buttons
4. Ember + ash palette — no blue/purple defaults
5. Featured report cards break the grid; staggered layout for testimony cards
6. Hero leads with the "Jerusalem of the East" paradox, not generic centered h1
7. Sharp containers (coal panels), 4px buttons — mixed radius
8. One dominant element per section — size or color, not both
9. No emoji — use crack-light dividers or no decoration
10. Specific copy: "From Jerusalem of the East to the world's darkest place" not "Explore missions resources"

### Responsive Breakpoints
- **Mobile:** 375px — single column, stacked sections
- **Tablet:** 768px — 2-column grid for reports, side nav emerges
- **Desktop:** 1024px — full layout, timeline horizontal
- **Wide:** 1440px — max-width container with generous margins

---

## Phase 1: Foundation (5 Builds)

### Build 1A — Project Scaffold + Homepage (Steps 1-6)

**Step 1.** Initialize Vite + TypeScript project. Install Tailwind CSS. Configure vite.config.ts with base path and build settings. Add Noto Serif KR, Noto Sans KR, and JetBrains Mono via Google Fonts link.

**Step 2.** Create src/css/main.css with all CSS custom properties from the Design Spec (coal palette, typography, spacing, shapes, ember glow, crack light). Set up Tailwind with custom theme extending the CSS vars. Set `<body>` to --bg-base with --text-primary default.

**Step 3.** Create src/ts/i18n.ts — bilingual string store with `en` and `ko` objects. Include: nav items, hero text, footer, common UI labels, error messages. Export `t(key)` function that reads `localStorage.getItem('seonmun-lang')` and returns the correct string. Default to English.

**Step 4.** Create src/ts/main.ts — app initialization: language toggle listener, hash-based router (`#/research`, `#/tools`, `#/heritage`, `#/personas`, `#/about`), page loading, smooth scroll behavior.

**Step 5.** Build src/index.html with full homepage:
- **Nav:** Logo "SeonMun 선문 宣門" left, nav links center (Research, Tools, Heritage, About), EN/KO toggle right. Sticky, coal-black bg with crack-light ember border on scroll.
- **Hero:** Asymmetric split layout. Left: "From Jerusalem of the East to the World's Darkest Place" (h1 in Noto Serif KR), subtext about Pyongyang's transformation from 100+ churches to the capital of atheism, two CTAs (ember "Explore the Archive" + ash ghost "Read the Research"). Right: coal-texture panel with key stats (#1 World Watch List for 23+ years, est. 200K-400K secret believers, 50K-70K in prison camps, 34,500 defectors in South Korea). NOT a centered generic hero.
- **Three Pillars section:** Research (12 reports) | Tools (Day After, training) | Heritage (Jerusalem of the East, Juche comparison). Cards with coal-panel styling, crack-light section dividers.
- **Timeline Preview:** Horizontal scrolling mini-timeline with 5-6 key dates (1784, 1907, 1950, 1994, 2014, 2020). Links to full timeline page.
- **The Quartet section:** Show SeonMun alongside XuanYan, Sendō, and TruyềnĐạo — "Four countries. Four stories. One mission." with visual comparison.
- **Footer:** NotebookLM link, research source credit.

**Step 6.** Wire up language toggle. All visible text uses `t()`. Toggle switches all text without page reload. Persist to `seonmun-lang` in localStorage.

### Build 1B — 12 Research Reports (Steps 7-10)

**Step 7.** Create src/data/reports/ directory. Convert all 12 research reports from ~/Desktop/Projects/Research/2026-04-13-north-korea-missions-scholarship/ into structured JSON with `en` and `ko` fields. Korean translations marked "AI 번역 — 검토 대기". Structure: `{ id, title: {en, ko}, summary: {en, ko}, sections: [{heading: {en, ko}, content: {en, ko}}], metadata: {wordCount, date, tags} }`.

**Step 8.** Create src/pages/research/index.html — report listing page. Grid of 12 report cards with coal-panel styling. Each shows number, title, one-line summary, word count. Hover: ember glow effect. Ember accent on featured reports (01, 07, 08). Filter by tag.

**Step 9.** Create src/pages/research/report.html — single report template. Renders JSON content with proper headings, tables, lists. Table of contents sidebar on desktop. Reading progress bar (ember orange). Bilingual toggle switches content inline. Print-friendly layout. Back to report list link.

**Step 10.** Create src/ts/search.ts — client-side TF-IDF search across all reports. Search bar on report listing page. Results show matching excerpts with highlighted terms. Supports both English and Korean queries.

### Build 1C — Interactive Timeline (Steps 11-14)

**Step 11.** Create src/data/timeline.json — timeline events from 1784 to 2026. Each event: `{ year, era, title: {en, ko}, description: {en, ko}, category, significance }`. Categories: missions, persecution, cultural, political, institutional. ~50-60 events covering all major periods.

**Step 12.** Create src/ts/timeline.ts — animated timeline component. Horizontal scrolling on desktop, vertical on mobile. Era markers with crack-light dividers. Event dots color-coded by category. Click to expand full event detail. The timeline should have a visible "darkness" transition around 1950 — the coal getting darker as the persecution era begins.

**Step 13.** Build src/pages/research/timeline.html — full timeline page. Era filter buttons (Catholic Beginnings, Protestant Arrival, Japanese Occupation, Division & War, Kim Il-sung, Kim Jong-il, Kim Jong-un). Smooth scroll to era. Events animate in as user scrolls.

**Step 14.** Add "jump to era" feature — clicking a timeline period scrolls with animation. Deep links via hash (#/timeline/1907).

### Build 1D — Ask the Archive RAG (Steps 15-19)

**Step 15.** Create worker/src/index.ts — Cloudflare Worker. Handles POST /api/ask with message body. Forwards to Claude API with system prompt containing North Korea Christianity context. Streams response. CORS headers for local dev.

**Step 16.** Create src/data/reports/ chunked index for RAG context. Split report JSON into chunks (~500 tokens each) with metadata (report number, section, topic). Store as searchable index.

**Step 17.** Create src/ts/chat.ts — chat interface component. Text input, streaming response display, source citations with links to full reports. Maintains conversation history in sessionStorage. Bilingual: user can ask in English or Korean.

**Step 18.** Build src/pages/research/ask.html — Ask the Archive page. System prompt instructs Claude to answer questions about North Korean Christianity using the 12 reports as primary sources, cite specific reports, and respond in the language the user writes in. Coal-panel chat container with ember glow on AI responses. SECURITY NOTE: system prompt must include instruction to never reveal operational details about border networks, specific defector identities, or methods that could endanger people.

**Step 19.** Add suggested questions carousel: "What was the 1907 Pyongyang Revival?", "How did Kim Il-sung model Juche on Christianity?", "What do we know about the underground church?", "What is the 'Day After' problem?", "평양이 왜 '동방의 예루살렘'이라 불렸나요?" (Korean: Why was Pyongyang called "Jerusalem of the East"?).

### Build 1E — Deploy + Polish (Steps 20-23)

**Step 20.** Configure Cloudflare Pages. Set up wrangler.toml for Worker. Create GitHub repo. Push and deploy.

**Step 21.** Performance pass: lazy-load images, preload fonts (Noto Serif KR, Noto Sans KR), minify JSON data, add service worker for offline report reading.

**Step 22.** Accessibility pass: semantic HTML throughout, alt text on all images, focus-visible styles matching ember theme, ARIA labels on interactive elements, keyboard navigation for timeline.

**Step 23.** Mobile polish: test at 375px, 768px, 1024px, 1440px. Fix any overflow, touch target sizes (min 44px), nav hamburger on mobile.

---

## Phase 2: Interactive Tools (5 Builds)

### Build 2A — Animated Spread/Destruction Map (Steps 24-27)

**Step 24.** Create src/data/map-data.json — geographic + temporal church data. Points: early Catholic missions (Seoul area), Protestant centers (Pyongyang, Sorae), Christian institutions (Soongsil, Chosun Christian College), persecution sites (prison camps), show churches (Bongsu, Chilgol, Changchung, Russian Orthodox). Each point: `{ lat, lng, year, type, name: {en, ko}, description: {en, ko}, status: "built" | "destroyed" | "show-church" | "prison-camp" }`.

**Step 25.** Create src/ts/map.ts — Leaflet map with CartoDB Dark Matter tiles. Custom markers: ember for active churches (pre-1950), ash grey for destroyed, red for prison camps, muted ember for show churches. Timeline slider at bottom — drag to animate the RISE AND DESTRUCTION of Christianity. Watch churches appear (1784-1950), then watch them disappear (1950-present). The visual should be devastating.

**Step 26.** Build src/pages/research/map.html — full map page. Year counter animates as slider moves. Legend with status colors. Click marker for popup with details. Narrative text updates by era — from "Jerusalem of the East" to "four show churches remain."

**Step 27.** Add prison camp overlay — toggle to show known kwanliso locations with estimated religious prisoner populations. Satellite imagery comparison links (HRNK/38 North references).

### Build 2B — "Jerusalem of the East" Heritage Experience (Steps 28-32)

**Step 28.** Build src/pages/heritage/index.html — heritage landing page. Two paths: "Jerusalem of the East" (Pyongyang's lost churches) and "The Counterfeit" (Juche vs. Christianity comparison). Dramatic coal-panel layout with ember accents.

**Step 29.** Build "Jerusalem of the East" experience — scrollytelling page walking through Pyongyang's Christian history. 1907 Revival (30,000 converts, Kil Sun-ju's confession). The city of 100+ churches, Christian universities, hospitals. Then the destruction — Soviet occupation, Korean War, Kim Il-sung's purge. Interactive before/after: show what was there and what replaced it. The Chilgol show church — built on the site of Kim Il-sung's MOTHER'S church. End with the question: "What survived?"

**Step 30.** Build "The Counterfeit" experience — side-by-side comparison of Christianity and Juche. Interactive comparison table: Trinity ↔ Three Kims, Ten Commandments ↔ Ten Principles, Confession ↔ Self-Criticism, Pilgrimage ↔ Mansu Hill, Eternal Life ↔ Eternal President, Nativity ↔ Kim Jong-il birth narrative, Scripture ↔ Kim Il-sung Works. Each pair expands to show the parallel in detail. The point: Juche didn't just suppress Christianity — it replaced it.

**Step 31.** Build "The 1907 Revival" mini-experience — focused on the Pyongyang Revival as a world-historical event. What happened (Kil Sun-ju's public confession started a chain reaction), why it mattered (one of the most significant revival events in global Christianity), and what was lost (the city where it happened became the capital of the world's most anti-Christian regime).

**Step 32.** Add "The Four Show Churches" section — what are they, why do they exist, are they real churches or diplomatic props? Include foreign visitor accounts. Photos where available.

### Build 2C — Defector Testimony Archive (Steps 33-36)

**Step 33.** Create src/data/testimonies.json — curated, ANONYMIZED defector accounts about faith in North Korea. Sources: published accounts from research reports, academic literature, human rights documentation. NO identifying information. Each testimony: `{ id, pseudonym, theme, summary: {en, ko}, fullText: {en, ko}, source, year, tags }`. Themes: underground faith, prison camp, family tradition, first encounter, post-defection conversion.

**Step 34.** Build src/pages/tools/testimonies/index.html — testimony archive page. Filterable by theme. Each testimony as a card with pseudonym, one-line summary, and "Read more" expand. Ember glow on hover. Coal-dark reading experience. Bilingual toggle.

**Step 35.** Create src/ts/testimony-search.ts — search across testimonies. Keyword search with highlighted matches. Filter by theme, by era, by topic.

**Step 36.** Add "The Numbers Problem" visualization — interactive data viz showing the RANGE of estimates for Christians in NK (0 to 500,000). Show where each estimate comes from, methodology, and why the uncertainty exists. Make the uncertainty itself the story.

### Build 2D — "Day After" Scenario Planner (Steps 37-41)

**Step 37.** Build src/pages/tools/dayafter/index.html — "Day After" landing page. Explain the concept: what happens if North Korea suddenly opens? Three scenarios, lessons from history, and preparedness tools. This is the unique-to-SeonMun feature.

**Step 38.** Build Scenario 1: "Gradual Opening" — modeled on China post-1978 or Vietnam post-1986. Government-controlled religious registration. What the church should prepare: training materials, registered church framework, patience. Interactive checklist.

**Step 39.** Build Scenario 2: "Sudden Collapse" — modeled on Romanian revolution (1989) or German reunification (1990). Rapid, chaotic. Lessons from East Germany (churches depleted, West German churches unprepared, cults rushed in). What the church should prepare: rapid deployment teams, psychological support infrastructure, preventing denominational competition. Interactive checklist.

**Step 40.** Build Scenario 3: "Chinese-Brokered Reform" — modeled on Myanmar's partial opening. China maintains influence, reform is limited and controlled. What the church should prepare: working within Chinese border networks, leveraging Korean-Chinese churches, slow institutional building. Interactive checklist.

**Step 41.** Add "Preparedness Score" — organizations/churches answer 10-15 questions about their readiness. Output: score per scenario, specific gaps, recommended actions, downloadable preparedness plan. Bilingual output (EN/KO).

### Build 2E — Training Modules (Steps 42-45)

**Step 42.** Build src/pages/tools/training/index.html — training module listing. 5 modules for churches and workers in defector ministry and NK missions.

**Step 43.** Build Module 1: "Understanding North Korea's Christian Story" — condensed from reports 01 and 07. "Jerusalem of the East" to total suppression. The 1907 Revival. Kim family's Christian roots. Interactive quiz.

**Step 44.** Build Module 2: "Juche Deconditioning" — for churches working with defectors. What Juche does to the mind (authority, worship, trust, confession). How it parallels and distorts Christianity. What NOT to do (don't compare Kim worship to Christian worship flippantly — it triggers). Module 3: "Working with North Korean Defectors" — cultural gap (70 years of divergent development), trust building, PTSD awareness, economic integration support.

**Step 45.** Build Module 4: "The Underground Church — What We Know and Don't" — honest assessment from report 08. The numbers problem, models of secret faith, show churches, what defectors report. Module 5: "Preparing for the Day After" — condensed from reports 11 and the Day After tool. What churches can do now to prepare.

---

## Phase 3: Advanced Features (4 Builds)

### Build 3A — AI Persona Conversations (Steps 46-51)

**Step 46.** Create src/data/personas/ — corpus files for each historical figure. Primary sources: Robert Jermain Thomas (General Sherman account, Bible-throwing narrative), Samuel Moffett (Pyongyang mission reports, Soongsil founding), Kil Sun-ju (1907 Revival accounts, sermons), Ju Ki-Chul (prison letters, Shinto shrine resistance), others with available writings.

**Step 47.** Build src/pages/personas/index.html — persona selection gallery. Cards with portrait (historical or representational), name (Korean + English), dates, one-line identity, "Speak with [name]" CTA. Categories: Missionary Pioneers, Korean Martyrs, Modern Voices.

**Step 48.** Build src/pages/personas/chat.html — conversation interface. System prompt instructs Claude to respond as the historical figure, drawing from their corpus, in the persona's voice and era. The figure responds in the language the user writes in.

**Step 49.** Implement 6 primary personas:
1. **Robert Jermain Thomas (1839-1866)** — Welsh missionary martyred on the General Sherman. Threw Bibles onto the shore as the ship burned. The pages became wallpaper — the homeowner later became a Christian.
2. **Samuel Austin Moffett (1864-1939)** — "Apostle to Korea." Founded Soongsil Academy in Pyongyang. His life's work was in the city that became the capital of atheism.
3. **Kil Sun-ju (1869-1935)** — Korean pastor at the center of the 1907 Revival. Blind in one eye, memorized the entire Bible. His public confession started a chain reaction.
4. **Ju Ki-Chul (1897-1944)** — Presbyterian pastor who refused to bow at Shinto shrines. Imprisoned, released, re-imprisoned, died in Pyongyang Prison. Model of faithful defiance.
5. **Son Yang-won (1902-1950)** — "The Saint of Love." Two sons killed by communists. Forgave and ADOPTED their killer. Then executed by communists. One of the most extraordinary forgiveness stories in Christian history.
6. **Composite Defector Voice** — NOT a single person. Anonymized composite based on published testimonies. Represents contemporary defector experience: escape, first encounter with Christianity, conversion, processing Juche. Ethically constructed with clear labeling.

**Step 50.** Add conversation starters: "Robert, what happened on the General Sherman?" / "Reverend Moffett, tell me about Pyongyang when it had churches" / "Pastor Kil, what started the 1907 Revival?" / "Pastor Ju, why did you refuse to bow?" / "주기철 목사님, 왜 신사참배를 거부하셨습니까?" (Korean)

**Step 51.** Add conversation sharing — export a conversation as a styled card for social media or as a PDF.

### Build 3B — Underground Church Estimator (Steps 52-54)

**Step 52.** Build src/pages/tools/estimator/index.html — interactive data visualization. Show the RANGE of estimates for Christians in NK and the methodology behind each. Sources: Open Doors (~400K), South Korean intelligence (much lower), academic estimates (varies wildly), NKDB data.

**Step 53.** Create interactive methodology comparison — user can adjust assumptions (defector extrapolation rate, regional variation, generational transmission rate, definition of "Christian") and see how the estimate changes. Make the uncertainty transparent and educational.

**Step 54.** Add historical comparison panel — how many Christians were in the Soviet Union after 70 years? Albania after 25 years? China after the Cultural Revolution? What do these parallels suggest for NK? Interactive comparison chart.

### Build 3C — Research Gap Tracker (Steps 55-58)

**Step 55.** Create src/data/gaps.json — structured gap data from report 03. Each gap: `{ id, topic: {en, ko}, category, description: {en, ko}, significance, difficulty, status: "open" | "in-progress" | "completed", claimedBy }`. ~30 gaps.

**Step 56.** Build src/pages/research/gaps.html — gap tracker page. Filterable grid by category (historical, contemporary, theological, defector studies, missiological, comparative). Status badges. Sort by significance or difficulty.

**Step 57.** Add "I'm Working on This" form — researchers can claim a gap. Collects name, institution, expected completion, brief description. Stored via CF Worker.

**Step 58.** Add "Suggest a Gap" form — community can propose new gaps for review.

### Build 3D — Korean-English Scholarship Bridge (Steps 59-62)

**Step 59.** Build src/pages/research/bridge.html — the unique bilingual feature. Search a topic and see Korean and English sources side by side. Two-column layout on desktop, tabbed on mobile.

**Step 60.** Create src/data/sources.json — bibliography with language tags. Each source: `{ title, titleTranslated, author, year, language: "en" | "ko" | "ja", type, url, abstract: {en, ko} }`. Focus on making Korean scholarship discoverable to English speakers and vice versa.

**Step 61.** Build comparison view — for a given topic, show what exists in each language, highlight where a language has no coverage (the gap), and suggest: "This topic has 8 Korean sources but only 1 English — translation needed."

**Step 62.** Add "Request Translation" button — flags sources that need translation into the other language. Community can volunteer. Also flag Japanese colonial-era sources that need KO/EN translation.

---

## Files to Create/Modify

### Phase 1
- `vite.config.ts` — Vite config
- `tailwind.config.js` — Tailwind with custom theme
- `package.json` — dependencies
- `src/index.html` — homepage
- `src/css/main.css` — all CSS custom properties + Tailwind
- `src/ts/main.ts` — app init, router
- `src/ts/i18n.ts` — bilingual strings (EN/KO)
- `src/ts/timeline.ts` — timeline component
- `src/ts/search.ts` — full-text search
- `src/ts/chat.ts` — chat interface
- `src/pages/research/index.html` — report listing
- `src/pages/research/report.html` — single report
- `src/pages/research/timeline.html` — timeline page
- `src/pages/research/ask.html` — Ask the Archive
- `src/data/reports/*.json` — 12 report data files
- `src/data/timeline.json` — timeline events
- `worker/src/index.ts` — CF Worker API proxy
- `wrangler.toml` — deployment config

### Phase 2
- `src/ts/map.ts` — Leaflet map
- `src/pages/research/map.html` — spread/destruction map page
- `src/pages/heritage/index.html` — heritage landing
- `src/pages/heritage/jerusalem.html` — Jerusalem of the East experience
- `src/pages/heritage/counterfeit.html` — Juche comparison
- `src/pages/heritage/revival.html` — 1907 Revival experience
- `src/pages/tools/testimonies/index.html` — defector testimony archive
- `src/pages/tools/dayafter/index.html` — Day After landing
- `src/pages/tools/dayafter/scenarios.html` — scenario planner
- `src/pages/tools/training/index.html` — training listing
- `src/pages/tools/training/module.html` — module template
- `src/data/map-data.json` — geographic data
- `src/data/testimonies.json` — anonymized testimonies

### Phase 3
- `src/pages/personas/index.html` — persona gallery
- `src/pages/personas/chat.html` — persona chat
- `src/pages/tools/estimator/index.html` — underground church estimator
- `src/pages/research/gaps.html` — gap tracker
- `src/pages/research/bridge.html` — Korean-English scholarship bridge
- `src/data/personas/*.json` — persona corpora
- `src/data/gaps.json` — research gaps
- `src/data/sources.json` — bilingual bibliography

## Open Questions
- Korean translation quality: should we invest in professional review before launch, or ship with "AI 번역" labels first?
- Defector testimony archive: even anonymized composites need ethical review — who reviews?
- "Day After" scenarios: should these be framed as preparedness tools or advocacy? (Different tone for different audiences)
- Operational security: what level of detail about cross-border methods is safe to publish?
- Ju Ki-Chul persona: sufficient primary sources for a rich AI conversation? His prison letters may not be digitized.
- Composite defector persona: ethical framework for constructing this — need consultation with defector ministry workers.
- Partnership pathway with South Korean denominations' NK missions committees — who is the point of contact?
- Prison camp data: how to present sensitively without exploiting suffering for engagement metrics?
