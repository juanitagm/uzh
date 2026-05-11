# BRIEF.md — UZH Guest Lecture Presentation
## Full Build Specification for Claude Code
## "I didn't learn AI. I learned how to think with AI."

---

## PROJECT OVERVIEW

Interactive web-based presentation for a 1.5-hour guest lecture at the University of Zurich (MA course: Strategische Kommunikation). Speaker: Juanita Terrapon, founder of JUVAII (AI Marketing & Automation Consultancy).

**Date:** 12 May 2026, 14:00–15:45
**Audience:** ~30 MA students in Strategic Communication
**Delivery:** Projected from speaker's PC via browser. Speaker controls pace.
**Deployment:** GitHub Pages (juanitaterrapon.github.io/uzh or similar)

---

## TECHNICAL REQUIREMENTS

- **Framework:** Single-page React app (Vite or plain HTML+JS — whatever deploys cleanest to GitHub Pages)
- **No backend.** Static files only.
- **Keyboard navigation:** Arrow keys (← →) and spacebar to advance/go back
- **No visible navigation UI in production.** The speaker controls everything. No nav strip, no screen counter visible to audience.
- **Fullscreen optimized:** Designed for 16:9 projector display (1920×1080). Must look good fullscreen in Chrome.
- **Responsive is NOT a priority.** Projector is the primary display. Phones only need to access the poll system (see below).
- **Transitions:** Smooth fade or slide transitions between screens (~300ms). Not jarring, not slow.
- **Poll system:** Built-in. See POLL SYSTEM section below.

---

## FOLDER STRUCTURE

```
juvaii-uzh-presentation/
├── BRIEF.md              ← this file
├── src/
│   ├── App.jsx           ← main app
│   ├── screens/          ← one file per screen or screen group
│   ├── components/       ← shared components (transitions, poll, etc.)
│   └── styles/           ← design tokens, global styles
├── public/
│   └── assets/
│       ├── logos/         ← all brand logos
│       ├── photos/        ← speaker photos, training photos
│       ├── ibudi/         ← IBUDI project images (store photos, AI outputs, rejected/accepted)
│       ├── ich/           ← ICH screenshots (review app, Excel, architecture)
│       └── meta/          ← behind-the-scenes visuals
├── index.html
├── package.json
└── README.md
```

---

## DESIGN SYSTEM

### Colors
```css
--dark:       #0c1a20    /* primary background */
--dark-teal:  #1a2f38    /* secondary background */
--teal:       #2a4a56    /* cards, containers */
--coral:      #e8562a    /* primary accent, CTAs, highlights */
--coral-glow: #ff6b3d    /* hover/active states */
--cream:      #f5f0eb    /* primary text */
--white:      #ffffff    /* high emphasis text */
--muted:      #5a7a8a    /* secondary text, labels */
--dim:        #1e3540    /* borders, subtle backgrounds */
--green:      #3dcc6e    /* human/governance indicators */
--yellow:     #e8b62a    /* warnings, secondary accent */
--red:        #cc4444    /* rejected/negative indicators */
```

### Typography
Three font families, each with a distinct role:

```
Serif:  'Playfair Display' — Headlines, dramatic statements, quotes, numbers
        Weights: 400, 700, 900. Italic used for emphasis.
        
Mono:   'Space Mono' — Labels, categories, technical markers, metadata
        Weights: 400, 700. Always uppercase with letter-spacing: 2-4px.

Sans:   'DM Sans' — Body text, descriptions, UI elements
        Weights: 300, 400, 500, 700.
```

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;700&display=swap
```

### Typography Scale (for projector readability)
- **Hero text:** 56-80px (Playfair, one line statements)
- **Section titles:** 36-48px (Playfair)
- **Subsection titles:** 24-28px (Playfair)
- **Body text:** 14-16px (DM Sans)
- **Labels/metadata:** 10-11px (Space Mono, uppercase, letter-spaced)
- **Numbers/metrics:** 56-96px (Playfair, 900 weight)

### Layout Principles
- **Asymmetric layouts preferred.** Not everything centered. Mix left-aligned content with right-aligned numbers. Use the full width.
- **Full-bleed dramatic screens** for quotes and transitions (pure black background, centered text, nothing else).
- **Dense information screens** use cards, columns, and visual hierarchy to organize without walls of text.
- **Generous padding:** 48-56px on sides, 40-48px top/bottom per screen.
- **Border-left accents** on cards (3-4px solid color) to create visual anchoring.
- **Pill/tag components** for technical labels (rounded, small, colored background).

### Visual Personality
This is NOT a documentation site. NOT a corporate deck. It's a **stage experience** — editorial, cinematic, bold. Think: magazine layout meets keynote. Every screen should feel intentional and designed. Typography does the heavy lifting. When there's no image, the text itself must be visually striking through scale, weight, and color contrast.

---

## POLL SYSTEM

### Requirements
- Students scan a QR code displayed on Screen 0 to connect
- Polls appear on their phones at specific screens
- Results display in real time on the projector
- 3 polls total in the presentation

### Implementation Options (pick the simplest)
**Option A: WebSocket-based (recommended)**
- Simple Node.js WebSocket server on a free service (e.g., Render, Railway)
- Students connect via phone URL (shown as QR code)
- Results pushed to presenter's view in real time

**Option B: Firebase Realtime Database**
- No server needed
- Students submit via simple form page
- Presenter view reads from Firebase in real time

**Option C: Simple peer-to-peer with a hosted poll page**
- Minimal external dependency
- Poll page hosted alongside the presentation

### Poll Specifications

**Poll 1 (Screen 1):** 
- Question: "How confident are you that AI will positively impact your career?"
- Type: Scale 1-5 (1 = Terrified, 5 = Excited)
- Display: Animated bar chart, bars grow as votes come in
- Results stored for callback in Poll 3

**Poll 2 (Screen — after L2):**
- Question: "What is the biggest barrier to AI adoption in companies?"
- Type: Free text input
- Display: Word cloud that builds in real time

**Poll 3 (Screen — Act 3):**
- Same question as Poll 1, repeated
- Display: Side-by-side comparison of Poll 1 vs Poll 3 results

### QR Code
- Auto-generated QR pointing to the poll URL
- Displayed prominently on Screen 0 (arrival/holding screen)
- Accessible URL text also shown below QR for manual entry

---

## SCREEN-BY-SCREEN SPECIFICATION

Total screens: ~30. Grouped by act/level.

---

### ACT 1 — THE MIRROR (5 screens)

#### SCREEN 0 — ARRIVAL / HOLDING
- **Background:** --dark
- **Center:** Large QR code (auto-generated) with subtle coral border/glow
- **Below QR:** "Scan to join" in Playfair, ~52px, weight 900
- **Below that:** "AI & KOMMUNIKATION — 12.05.2026" in Space Mono, 12px, --muted
- **Top left:** JUVAII logo (small)
- **Top right:** UZH logo (small)
- **Behavior:** Static. Speaker waits here while students settle and scan.
- **Assets:** `logos/juvaii.svg`, `logos/uzh.png`

#### SCREEN 1 — OPENING POLL
- **Background:** --dark
- **Top left label:** "LIVE POLL" in Space Mono, --coral, letter-spaced
- **Question:** "How confident are you that AI will positively impact your career?" in Playfair, 36px, --cream. The word "positively" in coral italic.
- **Below:** Animated bar chart. 5 bars labeled: Terrified, 2, 3, 4, Excited. Bars grow as votes arrive. Active/tallest bar in coral gradient, others in --dim.
- **Bottom note:** "Results update in real time" in DM Sans italic, --muted

#### SCREEN 2 — THE PROVOCATION
- **Background:** Pure black (#000000)
- **Center, vertical:** Two text blocks:
  - "In November 2023, I had 15 years of experience." — Playfair, 44px, weight 400, --cream
  - "And nobody wanted to hire me." — Playfair, 52px, weight 900, italic, --coral
- **Nothing else on screen.** This is a film title card. Let the words breathe.
- **Transition in:** Text fades in with slight delay between lines (first line, then 800ms pause, then second line appears)

#### SCREEN 3 — THE ORIGIN (Timeline)
- **Background:** --dark
- **Top left:** "THE ORIGIN" label in Space Mono, --coral
- **Below label:** "Not a straight line. *A pivot.*" in Playfair, 28px. "A pivot" in coral italic.
- **Main element:** Horizontal interactive timeline with 5 nodes:
  1. 🇦🇷 Buenos Aires → Graphic Designer (2006)
  2. 🇨🇭 Switzerland → Digital Marketing · 8 years · 6 markets (2015)
  3. 🔄 Restructured → Applications · Silence (2023)
  4. 🚀 JUVAII → No investors · No team · No clients (Dec 2023) **← HIGHLIGHTED: coral border, subtle coral bg**
  5. 🎓 Today → 60+ trained · ICH · UZH · 5 countries (2026)
- Nodes connected by horizontal lines (coral for the 2023→JUVAII transition, --dim for others)
- **Bottom center:** "I stopped asking for permission. **I started building.**" — Playfair, 20px italic. Bold part in coral.
- **Assets:** `photos/juanita-training.jpg` (optional, for the "Today" node)

#### SCREEN 4 — THE ESCALATION (Red Thread)
- **Background:** --dark
- **Center:** "THE ESCALATION" label in Space Mono, --coral
- **Main element:** Four stacked level cards, ascending order (L1 at bottom, L4 at top):
  - L4: "AI as my strategy" — Tunon + This Lecture
  - L3: "AI as my brain" — ICH Geneva
  - L2: "AI as my voice" — Webloyalty + dacadoo
  - L1: "AI as my hands" — IBUDI / Supermarkets
- L1 is ACTIVE (coral background, white text). Others are dimmed (25% opacity).
- Level numbers in Space Mono, 32px. Level names in Playfair.
- **Behavior:** This visual returns between levels. Each time, the completed levels fill (--teal bg) and the next one lights up coral. Build this as a reusable component.
- **Speaker note:** "Four real projects. Each one a different level of working with AI. We start at the bottom. We end here."

---

### LEVEL 1 — "AI AS MY HANDS" — IBUDI / SUPERMARKETS (4-5 screens)

#### L1-A — CONTEXT
- **Background:** --dark
- **Layout:** Asymmetric. Left side: title + description. Right side: big numbers.
- **Left:**
  - "LEVEL 01" in Space Mono, 11px, --coral
  - "AI as my *hands*" in Playfair, 48px. "hands" in coral italic.
  - Description paragraph: "Managing 40+ retail pages across France with a custom GPT model that generates localized, brand-compliant content at scale." — DM Sans, 14px, --muted, max-width 320px
  - Brand logos row: Carrefour, Super U, E.Leclerc, Intermarché — small, in Space Mono tags
- **Right:**
  - "40+" in Playfair, 64px, weight 900, --coral. Below: "pages" in Space Mono, 10px
  - "300K" in Playfair, 64px, weight 900, --cream. Below: "users/month" in Space Mono, 10px
- **Assets:** `logos/carrefour.png`, `logos/superu.png`, `logos/eleclerc.png`, `logos/intermarche.png`

#### L1-B — WORKFLOW
- **Background:** --dark
- **Top:** "HOW IT WORKS" in Space Mono, --coral
- **Main:** 4-step horizontal flow with arrows between:
  1. "Store sends photo" — show actual store photo placeholder
  2. "IBUDIGPT analyzes" — coral background (this is the AI step)
  3. "Generates V1 V2 V3" — show post variant placeholders
  4. "Sora AI visuals" — show Sora output placeholder
- Each step is a card with an image placeholder on top and text below.
- Arrows between in coral, Space Mono "→"
- **Below flow:** Brief explanation: "A store sends a photo of a product or promotion. The custom GPT analyzes the context — product, offer, store objective — and generates multiple post variants. Visual assets are created with Sora AI, adapted to audience profiles." — DM Sans, 13px, --muted
- **Assets:** `ibudi/store-input.jpg`, `ibudi/gpt-output.png`, `ibudi/sora-visual-1.jpg`

#### L1-C — REJECTED VS. ACCEPTED
- **Background:** --dark-teal
- **Title:** "Rejected vs. *Accepted*" in Playfair, 36px. "Accepted" in coral italic.
- **Label:** "AUDIENCE VALIDATION" in Space Mono, --coral
- **Layout:** Two columns with vertical divider.
  - Left column: "✗ LOW ENGAGEMENT" label in Space Mono, --red. 2-3 image placeholders with metrics overlay (reach, likes).
  - Right column: "✓ HIGH ENGAGEMENT" label in Space Mono, --coral-glow. 2-3 image placeholders with metrics overlay.
- **Bottom center:** "AI generates. Humans validate. *Can you tell why?*" — Playfair, 20px. Last part in coral.
- **Assets:** `ibudi/rejected-1.jpg`, `ibudi/rejected-2.jpg`, `ibudi/rejected-3.jpg`, `ibudi/accepted-1.jpg`, `ibudi/accepted-2.jpg`, `ibudi/accepted-3.jpg`
- **Interactive moment:** Speaker pauses here and asks the audience to react.

#### L1-D — LEVEL 1 CLOSING
- **Background:** --dark
- **Center:** Escalation visual returns. L1 is now filled (--teal). L2 lights up (--coral).
- **Text below:** "This is what most people think AI is. Content generation. Fast, useful, scalable. *But it's the floor, not the ceiling.*" — Playfair, 20px. Last sentence in coral italic.

---

### LEVEL 2 — "AI AS MY VOICE" — WEBLOYALTY + DACADOO (5-6 screens)

#### L2-A — THE NARRATIVE BEAT
- **Background:** --dark
- **Layout:** Asymmetric. Left: level title. Right: the narrative quote.
- **Left:**
  - "LEVEL 02" in Space Mono, --coral
  - "AI as my *voice*" in Playfair, 48px. "voice" in coral italic.
- **Right:**
  - "My former employer hired me back. *As the expert.*" — Playfair, 22px italic. "As the expert" in coral, weight 700.
- **Below:** Training photo placeholder (wide, ~400px, rounded corners)
- **Assets:** `photos/juanita-training.jpg`

#### L2-B — TWO PROJECTS
- **Background:** --dark
- **Layout:** Two cards side by side, unequal treatment (dacadoo gets more emphasis)
- **Left card (Webloyalty):** Border 1px --dim. Rounded.
  - "WEBLOYALTY" in DM Sans, 16px, weight 700
  - "LONDON · JAN 2026" in Space Mono, 10px, --muted
  - Details: "6h workshop · Marketing team · Awareness → Alignment → Intent" — DM Sans, 12px, --muted
  - Logo placeholder
- **Right card (dacadoo):** Border 2px --coral. Coral bg at 8% opacity.
  - "DACADOO" in DM Sans, 16px, weight 700, --coral
  - "ZÜRICH · 2025–2026" in Space Mono, 10px, --muted
  - Details: "5 lunch sessions (company-wide) + 8h deep training per team (Marketing & Sales) · C-level to operational · Digital-native and non-digital profiles · Legal pre-approved" — DM Sans, 12px, --muted
  - Logo placeholder
- **Assets:** `logos/webloyalty.png`, `logos/dacadoo.png`

#### L2-C — DACADOO IMPACT
- **Background:** --dark-teal
- **Label:** "IMMEDIATE IMPACT — DACADOO" in Space Mono, --coral
- **Three impact cards** stacked vertically, each with left coral border (4px):
  1. 🤖 "Marketing team built their own GPT Assistants — right after the training" — DM Sans, 16-18px, --cream
  2. 🎨 "Adopted AI image generation using techniques from the program" — DM Sans, 16px
  3. 👤 "Head of Marketing reorganized the team and appointed an AI lead — immediately" — DM Sans, 16px
- **Bottom quote:** "They didn't need me anymore. **That's how you know it worked.**" — Playfair, 22px italic. Bold part in coral.

#### L2-D — PEDAGOGICAL MODEL
- **Background:** --dark
- **Label:** "THE METHOD" in Space Mono, --coral
- **Title:** "Not 'how to write prompts.' *A behavioral system.*" — Playfair, 28px
- **Main:** 4-step model visualized as connected horizontal blocks:
  - Structure → Iterate → Refine → **Validate** (HUMAN CONTROL)
  - Last step highlighted: coral border, green "HUMAN CONTROL" tag
- **Below:** "AI proposes. Humans decide. Always. And I went through legal review before delivering any of this. In a corporate setting, AI adoption without compliance alignment doesn't happen." — DM Sans, 14px, --cream
- **Note:** The legal pre-approval detail matters for this audience (strategic communication students need to understand governance)

#### L2-E — POLL #2
- **Background:** --dark
- **Label:** "LIVE POLL" in Space Mono, --coral
- **Question:** "What is the biggest barrier to AI adoption in companies?" — Playfair, 32px
- **Center:** Word cloud area (builds in real time from phone inputs)
- **Speaker behavior:** React to what emerges, connect to training experience

#### L2-F — LEVEL 2 CLOSING
- Escalation returns. L1-L2 filled. L3 lights up.
- **Text:** "The real value isn't using AI. It's enabling others to use it within a system that's governed, repeatable, and safe. *Now let me show you what happens when you push further.*" — Last sentence in coral.

---

### LEVEL 3 — "AI AS MY BRAIN" — ICH GENEVA / CLIMAX (7 screens)

**This is the most important section. It gets the most screens, the most visual density, and the most time. The audience must feel the scale and sophistication of this project.**

#### L3-A — THE CLIENT
- **Background:** Pure black (#000000)
- **Layout:** Left: level title + description. Right: role card.
- **Left:**
  - "LEVEL 03 — THE CLIMAX" in Space Mono, --coral
  - "AI as my *brain*" in Playfair, 56px. "brain" in coral italic.
  - "ICH sets the global standards for how medicines are developed, tested, and approved. Their decisions affect every pharmaceutical company and every patient on the planet." — DM Sans, 16px, --cream, 420px max-width
  - Member tags: FDA · EMA · PMDA · Swissmedic · Health Canada — in Space Mono pill tags
- **Right:** Card with coral-tinted background
  - "MY ROLE" label
  - "AI Consultant. Not a governance expert. Not a lawyer. Not a pharma specialist." — DM Sans, 14px
  - "I designed the system. The client owned the domain." — Playfair, 14px italic, --coral
- **Assets:** `logos/ich.png`

#### L3-B — THE PROBLEM
- **Background:** --dark
- **Layout:** Two columns. Left: document hierarchy. Right: issues + deadline.
- **Left:**
  - "THE PROBLEM" label
  - "6 governance documents. Evolved independently *over years.*" — Playfair, 32px
  - Hierarchy visualization: 5 stacked bars of decreasing width, each with colored left border indicating authority level:
    1. Articles of Association — SUPREME AUTHORITY (coral)
    2. Internal Rules — GOVERNANCE FRAMEWORK (coral-glow)
    3. Working Group Handbook — OPERATIONAL (yellow)
    4. Coordinators' Handbook — OPERATIONAL (yellow)
    5. SOPs & Process Docs — EXECUTION (muted)
- **Right:**
  - "ISSUES FOUND" label in Space Mono, --red
  - 4 issue cards with icon + title + 1-line description:
    - ⚠ Terminology drift — Same concept, different words across documents
    - ⛔ Authority conflicts — Lower docs contradicting higher-level rules
    - 🔄 Structural overlap — Duplicated provisions with subtle differences
    - ❓ Undefined terms — Operative terms triggering actions but never defined
  - Deadline card (coral tinted): "June 2026 — Rio Meeting. Management Committee review."

#### L3-C — THE ARCHITECTURE
- **Background:** --dark
- **Label:** "THE SYSTEM I BUILT" in Space Mono, --coral
- **Main:** Three-column layout showing the dual-Claude system:
  - **Left column: Claude.ai** — coral border, 2px. Title + 5 function rows:
    1. 🧠 Strategy & prompt engineering
    2. 📄 Document cross-analysis
    3. ✓ Independent quality audits
    4. 📧 Stakeholder communications
    5. 🔒 Schema design (frozen v1.3)
  - **Center: Control flow** — "NEVER OVERLAP" text + ⇄ icon in circle + "HUMAN GATE" green tag + "Type CONFIRM before any write"
  - **Right column: Claude Code** — dim border. Title + 5 function rows:
    1. ⚙ Python/openpyxl scripts
    2. 📊 Cell-level Excel edits
    3. 📝 Tracked-change Word docs
    4. 📁 File generation & versioning
    5. 🏗 Automated report building
- **Bottom row: 3 custom tool cards** with colored top border:
  - **ICH Review App** (coral) — Browser-based HTML app for domain expert. Accept/Modify decisions. Reusable across data tabs.
  - **Master Mapping Register** (yellow) — Multi-sheet Excel: 59 clusters, 6 docs, validation metadata, decision codes, audit trails.
  - **Schema-Locked Pipeline** (green) — Frozen JSON schema v1.3. Every finding: evidence, authority-level, AOA anchor, severity rating.

#### L3-D — THE METHODOLOGY (5 Phases)
- **Background:** --dark-teal
- **Label:** "5-PHASE METHODOLOGY" in Space Mono, --coral
- **Title:** "AI does the analysis. *Humans make the decisions.*" — Playfair, 28px
- **Main:** 5 horizontal phase rows, each with:
  - Phase number (coral square, left)
  - Phase name + duration
  - Two columns: AI role vs Human role (coral label vs green label)
  - Phases:
    1. Onboarding (Week 1) — AI: Process design, schema dev / Human: Scope, timeline, intake
    2. Terminology Mapping (Weeks 2-4) — AI: 59 clusters, cross-doc analysis, evidence / Human: Validation of each finding
    3. Consistency Review (Weeks 4-8) — AI: Conflict detection, authority checks / Human: Governance decisions
    4. IRE Recommendations (Weeks 8-14) — AI: Insert/Remove/Edit table with proposed text / Human: Accept, modify, or reject each
    5. Martyr Drafts (Weeks 14-20) — AI: Tracked-change Word documents / Human: Final review before committee

#### L3-E — GOVERNANCE SAFEGUARDS
- **Background:** --dark
- **Label:** "GOVERNANCE SAFEGUARDS" in Space Mono, --green
- **Title:** "In a regulated environment, *trust is architecture.*" — Playfair, 28px
- **Layout:** 5 cards in a grid (3+2 or flexible wrap), each with:
  - Left colored border (4px)
  - Icon + title + 2-3 line description
  - Cards:
    1. 🛑 Pre-flight Gate (coral) — Mandatory confirmation report before ANY file edit. Human types CONFIRM before writes execute.
    2. 🔍 Independent Audit (yellow) — Every Claude Code output audited by Claude.ai before acceptance. No self-validation.
    3. 🔒 Scope Lock (green) — Only specified rows/columns touched. Zero tolerance for opportunistic edits.
    4. 📋 Dual Versioning (muted) — Internal v1/v2 for working files. External V1/V2 for stakeholders. Never conflated.
    5. 📒 Decisions Log (coral) — D-001 through D-065+. Every governance decision captured with codes for audit trail.

#### L3-F — DEMO
- **Background:** Pure black
- **Label:** "LIVE WALKTHROUGH" in Space Mono, --coral
- **Center:** Large video/demo placeholder (600×340, --dim bg, rounded, --teal border)
  - Play icon centered
  - Description: "Pre-recorded demo — 2-3 min"
  - Subtitle: "Review App in action → Expert reviewing findings → Excel register → Schema validation"
- **Below:** "You narrate live over the recording" — Playfair italic, 18px
- **Implementation:** Embed a video element. Speaker provides MP4 file.
- **Assets:** `ich/demo-video.mp4` (to be added later)

#### L3-G — THE NUMBERS
- **Background:** --dark
- **Main metrics** displayed in large Playfair type, centered, wrapped:
  - 6 governance documents (~500+ pages)
  - 59 governance clusters
  - 100+ findings validated
  - 65+ decision codes logged
  - 5 project phases
  - 5 months (Jan–May 2026, still running)
- **Dramatic focal point:** "0" in Playfair, 96px, --coral. Next to it: "domain expertise required from me" — DM Sans, 18px
- **Below:** EasyGenerator amplifier in a card with coral left border: "And that wasn't my only project with ICH. I also evaluated and deployed their AI e-learning platform globally — tutorials, videos, AI-generated voiceovers — for staff teams across the world."
- **Bottom quote:** "No consulting team could have done this in this timeline. **And if they could, they wouldn't have maintained the consistency.**" — Playfair, 20px italic

#### L3-H — LEVEL 3 CLOSING
- Escalation returns. L1-L3 filled. L4 lights up.
- **Text:** "AI doesn't replace expertise. It lets you architect solutions in domains you don't own. *That's not automation. That's consulting.*" — Last sentence in coral.

---

### LEVEL 4 — "AI AS MY STRATEGY" — TUNON + META-REVEAL (3-4 screens)

#### L4-A — THE CONTRAST
- **Background:** --dark
- **Layout:** Asymmetric. Left: level title. Right: course details.
- **Left:**
  - "LEVEL 04" in Space Mono, --coral
  - "AI as my *strategy*" in Playfair, 48px. "strategy" in coral italic.
- **Right:** Course details in Space Mono: "ÉCOLE TUNON · GENEVA / 20H · 12 STUDENTS · 6 SESSIONS"
- **Center:** Before/After transformation:
  - BEFORE (--muted, dimmed): "What should we post?"
  - Arrow (Playfair, 48px, coral) →
  - AFTER (--coral label, --cream text): "What are we trying to achieve, for whom, and how do we structure it?"
- **Below:** "AI allowed throughout. The test was defending decisions under questioning. Same principle as ICH — the AI generates, but YOU must justify." — DM Sans, 13px
- **Assets:** `logos/tunon.png`

#### L4-B — THE BEFORE/AFTER DETAIL
- **Background:** --dark
- **Title:** "4 full campaign strategies created. All built with AI. *All defended without it.*" — Playfair, 24px
- **Content:** Show the validation principle across all projects as a consistent thread:
  - IBUDI: AI generates content → Audience validates (rejected vs accepted)
  - dacadoo: AI assists → Legal pre-approves → Teams adopt independently
  - ICH: AI analyzes → Human CONFIRM gate → Independent audit
  - Tunon: AI allowed → Student must defend decisions under questioning
- Visualized as 4 rows with the same structure: AI step (coral) → Human validation (green)
- **Message:** This isn't accidental. It's a methodology. AI proposes. Humans decide. Every time.

#### L4-C — THE META-REVEAL
- **Background:** Pure black
- **Label:** "THE META-REVEAL" in Space Mono, --coral
- **Layout:** Two elements side by side:
  - Left: "What you experienced" → "This presentation" (--dim bg, --teal border)
  - Center: "built with →" in Space Mono, --coral
  - Right: "Behind the scenes" → "Claude + Architecture" (coral-tinted bg, coral border)
- **Below:** "This presentation you've been experiencing for the last hour? I built it this week. With Claude. The structure, the polls, the design, the narrative — all of it. Not to impress you. To show you that the tools are accessible to everyone in this room right now. *What makes the difference is the thinking behind them.*" — Playfair, 24px. Last sentence in coral, italic, weight 700.
- **Assets:** `meta/behind-the-scenes.png` (designed visual showing the process — not a raw screenshot)

#### L4-D — LEVEL 4 CLOSING
- **Background:** --dark
- **Full escalation** returns. All 4 levels lit/completed.
- **Text:** "The highest level isn't using AI. It's knowing when NOT to use it — *and when to let it build the whole stage.*" — Playfair, 22px italic. Last part in coral.

---

### ACT 3 — THE BRIDGE (4 screens)

#### A3-A — POLL CALLBACK
- **Background:** --dark
- **Title:** "Has anything shifted?" — Playfair, 28px
- **Display:** Original Poll 1 results shown again
- **Speaker reads the room before launching Poll 3**

#### A3-B — POLL #3
- Same question as Poll 1 repeated
- **Display:** Side-by-side comparison. Left: "START OF LECTURE" results. Right: "NOW" results.
- Before/after visual should make any shift obvious.

#### A3-C — THE BRIDGE (Career Implications)
- **Background:** --dark
- **Label:** "THE BRIDGE" in Space Mono, --coral
- **Title:** "What this means for *you*" — Playfair, 40px. "you" in coral italic.
- **4 points,** each with coral arrow (→) + text:
  1. "Strategic communication + AI fluency = the profile companies can't find"
  2. "No CS degree needed — the strategic thinking you're building at UZH is the foundation"
  3. "Roles that didn't exist 2 years ago are waiting for people like you"
  4. "The opportunity: designing HOW organizations use AI"
- **Speaker tone:** Concrete, not inspirational.

#### A3-D — THE CLOSE
- **Background:** Pure black
- **Center:**
  - "I didn't learn AI." — Playfair, 40px, weight 400, --cream
  - "I learned how to think with AI." — Playfair, 48px, weight 900, italic, --coral
- **Below (with spacing):**
  - Speaker photo (circular, 64px) + "Juanita Terrapon" (Playfair, 18px) + "JUVAII" (Space Mono, 11px, --coral)
- **Bottom:** Two buttons/tags:
  - LinkedIn QR code
  - "juvaii.com/uzh" (coral bg)
- **This screen stays up during Q&A.**
- **Assets:** `photos/juanita-headshot.jpg`, `logos/juvaii.svg`

---

## ASSET LIST — COMPLETE

### Logos (place in `public/assets/logos/`)
```
juvaii.svg (or .png, hi-res)
uzh.png
carrefour.png
superu.png
eleclerc.png
intermarche.png
dacadoo.png
webloyalty.png
tunon.png
ich.png
```

### Photos (place in `public/assets/photos/`)
```
juanita-headshot.jpg       — high-res headshot for close screen
juanita-training.jpg       — classroom/training session photo
```

### IBUDI assets (place in `public/assets/ibudi/`)
```
store-input.jpg            — a real store photo (the input to the GPT)
gpt-output.png             — screenshot of GPT post variants
sora-visual-1.jpg          — Sora-generated visual example
rejected-1.jpg             — AI image rejected by audience (with metrics)
rejected-2.jpg             — AI image rejected by audience
rejected-3.jpg             — AI image rejected by audience  
accepted-1.jpg             — AI image with high engagement (with metrics)
accepted-2.jpg             — AI image with high engagement
accepted-3.jpg             — AI image with high engagement
```

### ICH assets (place in `public/assets/ich/`)
```
demo-video.mp4             — pre-recorded walkthrough, 2-3 min
```
*Note: Architecture diagrams and system visuals will be built in code, not as images.*

### Meta assets (place in `public/assets/meta/`)
```
behind-the-scenes.png      — designed visual showing how the presentation was built with Claude
```

### NICE TO HAVE (not blocking)
```
photos/webloyalty-london.jpg    — photo from London session
photos/dacadoo-training.jpg     — photo from dacadoo session
photos/juanita-early.jpg        — early career photo for timeline
photos/linkedin-analytics.png   — +1,300% growth screenshot
```

---

## DEPLOYMENT

### GitHub Pages
1. Build the production bundle
2. Push to a GitHub repo (e.g., `juanitaterrapon/uzh`)
3. Enable GitHub Pages in repo settings (source: main branch, /docs or root)
4. URL: `juanitaterrapon.github.io/uzh`

### Pre-deployment checks
- [ ] All screens navigate correctly with keyboard (← → and spacebar)
- [ ] Fullscreen mode works in Chrome (F11)
- [ ] Fonts load correctly
- [ ] Placeholders replaced with real assets
- [ ] Poll system functional (QR code → phone → results on screen)
- [ ] Video plays smoothly in L3-F
- [ ] No visible navigation UI in production mode
- [ ] Transitions smooth at 300ms

---

## TIMELINE

| Day | What |
|-----|------|
| **Thu** | Claude Code builds core app: navigation, design system, all screen shells. Poll system prototype. |
| **Fri** | Content integration: text finalized in all screens. Asset placeholders ready. Poll system working. |
| **Sat** | Assets swapped in. ICH demo video integrated. Polish: transitions, typography fine-tuning, responsive fixes for projector. |
| **Sun** | Deploy to GitHub Pages. Full run-through. Bug fixes. |
| **Mon** | Practice run. Final adjustments. |

---

## IMPORTANT NOTES FOR CLAUDE CODE

1. **Read this entire brief before writing any code.** The design system, screen specifications, and visual personality must be understood holistically before implementation.
2. **Build screen by screen, test as you go.** Don't try to build all 30 screens at once.
3. **The escalation component is reused 5 times** (between each level). Build it as a parameterized component that takes `activeLevel` as a prop.
4. **Typography is the primary design element.** When there's no image, the text must carry the screen through scale, weight, and color contrast. Never use generic sizing.
5. **Black screens (#000000) are intentional** for dramatic moments. They are NOT the same as --dark (#0c1a20).
6. **Poll system can be built last.** Get the presentation screens working first, polls second.
7. **Assets will be added progressively.** Build with gray placeholder boxes that have the correct dimensions and filenames, so swapping is trivial.
8. **The speaker will ask questions during the build.** Juanita may want to adjust text, reorder screens, or add details. Be ready to iterate.
