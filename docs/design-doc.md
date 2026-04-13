# SeonMun 선문 (宣門) — Design Document

## Problem Statement
The North Korea missions web landscape is fragmented into silos: persecution advocacy sites (Open Doors, VOM), human rights databases (NKDB, HRNK), geopolitical analysis (38 North, NK News), missions databases (Joshua Project), and Korean church resources — all operating in isolation. None integrate the field. None use AI. Very few are bilingual (EN/KO). None bridge the 242 years of Korean Christian history in the North with contemporary defector ministry, underground church research, or "Day After" preparedness. The Korean-English scholarship divide means South Korean research (5-10x larger than English-language work) remains invisible to the global church. This platform can be the first to connect North Korea's extraordinary Christian story — from "Jerusalem of the East" to the world's worst persecutor — to today's defector ministry and reunification preparation through bilingual, AI-powered tools.

## North Korea's Unique Story

North Korea is the extreme case in the Asia quartet:
- **China (XuanYan):** Persecution + rapid growth. ~5-7% Christian.
- **Japan (Sendō):** Full freedom + persistent stagnation. ~1.5% Christian.
- **Vietnam (TruyềnĐạo):** Controlled accommodation + steady growth. ~8-10% Christian.
- **North Korea (SeonMun):** Total suppression + unknown survival. Estimates range from 0 to 500,000.

North Korea has four features found nowhere else:

1. **"Jerusalem of the East" became the capital of atheism.** Pyongyang had 100+ churches, multiple Christian universities (Soongsil, Chosun Christian College), hospitals, and was the center of Korean Protestantism. The 1907 Pyongyang Revival was one of the most significant revival events in world Christianity. Today the city has 4 show churches and an estimated 50,000-70,000 Christians in political prison camps.

2. **Kim Il-sung built a counterfeit Christianity.** His mother Kang Pan-suk was a devout Presbyterian deaconess. His grandfather was a church elder. He grew up singing hymns and attending Sunday school. He then deliberately modeled Juche ideology on the Christianity he knew: Trinity (three Kims) → Ten Commandments (Ten Principles) → confession (self-criticism sessions) → pilgrimage (Mansu Hill) → eternal life (Kim Il-sung remains "Eternal President" 30+ years after death) → sacred birth narrative (Kim Jong-il's birth story parallels the Nativity).

3. **The underground church is a black box.** Unlike every other country in this series, researchers CANNOT verify what happens inside North Korea. Estimates of Christians range from essentially zero to 500,000. The fundamental access problem makes this mission field unique — you literally cannot go and see. All information comes from defector testimony, satellite imagery, and inference.

4. **"Day After" planning is the strategic frontier.** What happens if North Korea suddenly opens — through collapse, reform, or reunification? Lessons from German reunification (1990) and Eastern Europe suggest the church must prepare NOW. But almost no public tools or resources exist for this planning.

## The Juche Barrier

If Japan's defining puzzle is "why does Christianity stall despite full freedom?" and Vietnam's is "how does Christianity grow despite the ancestor worship barrier?", North Korea's is "can faith survive total suppression?" For 75+ years, the Kim regime has not just persecuted Christianity — it has replaced it with a counterfeit religion. Every element of Christian practice has a Juche parallel. This is not atheism; it is theological substitution. The question for the underground church is whether genuine faith can survive inside a system designed to mimic and replace it.

## Target Users

| User | Need | Primary Path |
|------|------|-------------|
| South Korean churches with NK missions focus | Research, "Day After" planning, defector ministry resources | /research, /tools → Day After, training |
| Defector ministry workers | Training resources, testimony context, cultural bridge tools | /tools → training, testimony archive |
| North Korean defectors (in South Korea) | Heritage connection, faith resources in Korean | /heritage, /research |
| Scholars (Korean and English) | Bilingual bibliography, scholarship bridge, gap tracker | /research → comparator, gaps |
| Persecution advocacy organizations | Consolidated data, historical context, interactive tools | /research → reports, timeline, map |
| Missionaries/aid workers near NK border | Cultural intelligence, security awareness, history | /research → reports |
| Western churches | Understanding NK Christianity, prayer resources | /research, /heritage |
| "Day After" planners | Scenario tools, lessons from reunification parallels | /tools → Day After planner |
| Funders / partners | Platform innovation capability | /about, all tools |

## User Journeys

**South Korean Pastor Preparing for Reunification:**
His denomination has a North Korea missions committee, but their planning documents are in Korean and haven't been updated since 2018. He finds SeonMun through a seminary colleague. Uses the "Day After" Scenario Planner in Korean — runs three scenarios (gradual opening, sudden collapse, Chinese-brokered reform). Downloads preparedness checklists for each. Shares the English version with a partner church in Texas. First time both churches have the same planning framework in their own languages.

**North Korean Defector in Seoul:**
Arrived 3 years ago. Became a Christian at Hanawon through a church volunteer. Still processing what Juche did to her understanding of worship, authority, and trust. Finds SeonMun through her church's defector support group. Explores the "Jerusalem of the East" Heritage Experience — sees what Pyongyang looked like when it had churches on every corner. Learns about Ju Ki-Chul for the first time — a Korean pastor who died resisting an occupying power, like the suffering she witnessed. Speaks with the Ju Ki-Chul AI persona in Korean. Feels, for the first time, that her faith has roots in her homeland.

**Scholar at SOAS London:**
Doctoral candidate studying North Korean religious policy. Reads everything in English but knows the Korean scholarship is richer. Finds SeonMun's Korean-English Scholarship Bridge — searches a topic and sees Korean and English sources side by side with AI-translated abstracts. Discovers three Korean dissertations directly relevant to her thesis that she didn't know existed. Uses the Research Gap Tracker to identify her dissertation's contribution to the field.

**American Church Small Group:**
Doing a 6-week study on the persecuted church. Uses SeonMun's training modules to understand North Korea's Christian story. Week 3: they have an AI conversation with Robert Jermain Thomas and are stunned by the General Sherman story. Week 5: they learn about Juche as counterfeit Christianity and understand persecution at a new level. Week 6: they connect with a defector ministry organization through the platform's resource links.

## What This Product IS
- A research platform with interactive tools
- Bilingual by default (EN/KO toggle on every page)
- AI-powered (search, conversations, translation, scholarship bridging)
- Connected to the South Korean church ecosystem and defector ministry networks
- The fourth in a quartet proving AI can serve missions
- The sister to XuanYan 宣研 (China), Sendō 宣道 (Japan), and TruyềnĐạo 傳道 (Vietnam), sharing architecture but not aesthetic

## What This Product IS NOT
- A donation funnel (no payment, no paywall)
- A news site (NK News and Daily NK do that)
- A human rights database (NKDB does that)
- A geopolitical analysis platform (38 North does that)
- A replacement for Open Doors, VOM Korea, or NKDB — it's complementary, integrative
- A social network or forum
- A marketing site (it's a tool, not a brochure)
- A clone of XuanYan, Sendō, or TruyềnĐạo — North Korea needs its own stories, its own aesthetic, its own partnerships

## Key Design Rationale

**Dark mode default (coal black):** The Underground Ember aesthetic starts with deep coal black — not pure black (#000) but a warm-dark tone (#0C0A08) that feels like unlit coal. The warmth distinguishes it from Sendō's neutral charcoal and XuanYan's cool navy. It signals the darkness of 75 years of suppression while carrying the promise that something burns underneath.

**Ember orange primary accent (#C45B22):** The color of glowing coals — deep, warm orange that feels like it's generating its own light from within. Not bright or cheerful, but alive. Distinctly different from XuanYan's gold, Sendō's vermillion, and TruyềnĐạo's oxblood cinnabar. References the underground church — faith that burns beneath the surface, never fully extinguished.

**Ash grey secondary (#8A7E76):** The color of cold ash — what remains after fire. Used for secondary text, borders, and structural elements. References both the concrete architecture of Pyongyang and the aftermath of persecution. Provides visual rest between ember accents.

**Ember glow effect on interactions:** Instead of TruyềnĐạo's mother-of-pearl shimmer, SeonMun gets an ember glow — a warm radial gradient/box-shadow that pulses subtly on hover, like coals breathing when air passes over them. Unique to SeonMun.

**Crack light motif:** Thin lines of ember orange on dark surfaces, suggesting light breaking through concrete or stone. Used as section dividers and decorative borders. References both Pyongyang's brutalist architecture and the underground church breaking through suppression.

**Noto Serif KR for headings:** The Korean-specific serif font, consistent with the sister projects' use of locale-specific Noto Serif variants (SC for China, JP for Japan). Handles Hangul beautifully at display sizes.

**Noto Sans KR for body text:** Clean, modern Korean sans-serif from Google. Handles both Hangul and Latin characters well. The Korean equivalent of Be Vietnam Pro (designed for its language's specific needs).

**Three fonts max:** Noto Serif KR (display), Noto Sans KR (body), JetBrains Mono (data). No more.

**Sharp containers, soft interactions:** Same principle as the sisters — cards and panels have sharp corners (editorial), buttons and toggles have 4px radius (approachable).

## Differentiation from Sister Projects

| Dimension | XuanYan (China) | Sendō (Japan) | TruyềnĐạo (Vietnam) | SeonMun (North Korea) |
|-----------|-----------------|---------------|---------------------|----------------------|
| Color base | Dark navy (#0B1222) | Sumi charcoal (#0A0908) | Lacquer black (#12090B) | Coal black (#0C0A08) |
| Primary accent | Gold (#D4A44C) | Vermillion (#C8323C) | Oxblood cinnabar (#9B2335) | Ember orange (#C45B22) |
| Secondary accent | — | Washi cream (#F4EAD5) | Gold leaf (#C9A84C) | Ash grey (#8A7E76) |
| Texture | Chinese ink-wash (水墨) | Japanese sumi-e (墨絵) | Vietnamese lacquer (sơn mài) | Underground ember (잔불) |
| Heading font | Noto Serif SC | Noto Serif JP | Noto Serif | Noto Serif KR |
| Body font | Inter | Inter | Be Vietnam Pro | Noto Sans KR |
| Visual motif | None specific | Torii gate, enso circle | Lacquer panel, mother-of-pearl shimmer | Crack light, ember glow |
| Tone | Scholarly observatory | Editorial contemplative | Gallery warmth | Grounded urgency |
| Unique feature | House church research | Hidden Christian heritage | Martyrs + Script story | "Day After" planner + testimony archive |
| Diaspora partner | Chinese student networks | JCFN | Vietnamese Christian Fellowship | South Korean churches + defector ministries |
| Persecution framing | Active, contemporary (Xi era) | Historical (1597-1873) | Historical + ongoing (minorities) | Total, ongoing (world's worst) |
| Map narrative | Watch Christianity spread despite hostility | Watch Christianity stall despite openness | Watch Christianity grow through accommodation | Watch Christianity be destroyed — then ask what survived |
| Language gap | Bilingual (CN ↔ EN) | Bilingual (JP ↔ EN) | Trilingual (VI ↔ FR ↔ EN) | Bilingual (KO ↔ EN) + Japanese colonial |
