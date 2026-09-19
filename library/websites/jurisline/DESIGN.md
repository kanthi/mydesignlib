# Jurisline — Design System Specification

**Brand:** Jurisline (`jurisline`)  
**Type:** Website Template  
**Category:** SaaS  
**Reference Origin:** Fictional rebrand of legal tech AI infrastructure reference (`Lawtté`). Re-engineered as an enterprise-grade autonomous client operations engine for high-stakes litigation, personal injury, and corporate law practices.  
**Aesthetic Core:** High-contrast editorial authority meets surgical precision legal ops. Warm porcelain canvas, deep dark forest slate ground, razor-sharp hairline borders, luminous chartreuse accents, and high-fidelity interactive dashboard architecture.

---

## 1. Overview & Brand Proposition

- **Core Problem:** Law firms lose 38% of qualified high-value prospective clients to missed calls, slow response times, and manual conflict checks.
- **Strategic Solution:** Jurisline provides sub-second latency conversational AI voice intake, instant conflict clearance against firm CRMs (Clio, Filevine, Smokeball), and automated retainer generation.
- **Emotional Signature:** Authoritative, discreet, prestigious, uncompromisingly reliable.
  - *Create this feeling through:*
    - Editorial serif typography (`Newsreader`) paired with crisp interface sans (`Plus Jakarta Sans`).
    - Sophisticated duality: warm ivory/porcelain top hero transitioning into deep dark forest substrate (`#16241e`).
    - Ultra-clean data density, real SVG line graphs with dual comparison curves, interactive audio waveform inspection, and live ROI calculators.

---

## 2. Color System & Semantic Tokens

| Token | Value | Role | Guidelines |
|---|---|---|---|
| `--color-canvas-light` | `#FAF9F5` | Primary Light Substrate | Warm ivory/porcelain canvas for header & hero |
| `--color-surface-light` | `#FFFFFF` | Card & Window Surface | Clean white cards, dashboard container, metric panels |
| `--color-canvas-dark` | `#16241E` | Deep Forest Ground | Deep pine/forest slate for narrative, features & footer |
| `--color-surface-dark` | `#1D2F27` | Dark Elevated Surface | Container cards, interactive simulator, pricing boxes |
| `--color-surface-dark-alt` | `#23382F` | Hover & Active Dark | Subtle elevation for interactive components |
| `--color-ink-primary` | `#151C18` | Dark High-Contrast Text | Headings, key stats, primary body on light |
| `--color-ink-secondary`| `#5C645F` | Subdued Light Text | Subheadings, table headers, supporting annotations |
| `--color-ink-light` | `#F3F5F2` | Light Primary Text | Headings and primary copy on dark forest ground |
| `--color-ink-muted` | `#9EB0A4` | Subdued Dark Text | Descriptions and metadata on dark forest ground |
| `--color-accent-lime` | `#D2EB36` | Signal & Telemetry Accent | High-intent badges, upward growth arrows, audio play states |
| `--color-accent-forest`| `#1D2D27` | Primary Action Substrate | Dark buttons, hero CTA, pill containers |
| `--color-border-light` | `rgba(0, 0, 0, 0.08)` | Hairline Divider Light | Card borders, dashboard window borders, dividers |
| `--color-border-dark` | `rgba(255, 255, 255, 0.1)`| Hairline Divider Dark | Grid cells, code panels, feature dividers |
| `--color-badge-green` | `#E8F7EE` | Positive Status Fill | "Successful", "Cleared", "+18%" |
| `--color-badge-green-txt`| `#15803D`| Positive Status Text | High-retention markers |
| `--color-badge-red` | `#FEECEB` | Missed / Flag Fill | "Conflict Detected", "Unsuccessful" |
| `--color-badge-red-txt`| `#DC2626` | Missed / Flag Text | Alert markers |

---

## 3. Typographic Hierarchy

- **Display Serif:** `Newsreader` (Google Fonts), optical size 16-72pt, weights 400, 500, 600, Italic.
  - Used for hero headlines, section master titles, pull quotes, and hero KPI metrics (`60%`).
- **Interface & Body Sans:** `Plus Jakarta Sans` (Google Fonts), weights 400, 500, 600, 700.
  - Used for navigation, dashboard UI, table data, buttons, microcopy, and body paragraphs.
- **Monospace Telemetry:** `JetBrains Mono` or system monospace.
  - Used for keyboard shortcuts (`⌘K`), call durations (`3:19`), timestamps, and conflict check response times (`340ms`).

---

## 4. Key Component Anatomy & Interaction States

1. **Top Navigation Bar:**
   - Sticky blur backdrop (`rgba(250, 249, 245, 0.88)` with `backdrop-filter: blur(12px)`).
   - Brand mark: Interlocking geometric J & balance scale SVG icon + `Jurisline`.
   - Links with subtle hover underlines and clean spacing.
   - Action buttons: "Sign in" (ghost text), "Book a demo" (dark pill with arrow).

2. **Hero Dashboard Browser Window:**
   - Chrome bar with macOS 3-dot traffic lights (`#ff5f56`, `#ffbd2e`, `#27c93f`), secure lock URL pill (`https://app.jurisline.ai/overview`), right tool icons.
   - Left Sidebar: Organization switcher ("Vance & Sterling LLP"), ⌘K quick action search bar, navigation tree with active pill state and count badges, bottom partner identity.
   - KPI Strip: 4 responsive metric cards with micro sparklines.
   - Central Interactive Chart: SVG dual-curve intake volume with 7D / 30D / 90D range toggle, hover crosshairs, and previous period dotted comparison.
   - Side Outcome & Pipeline Bars: Percentage progress gauges with rounded endpoints.
   - Recent Activity Log: Tabbed call records with playable waveform preview, status tags, and time indicators.

3. **Interactive Live Audio Call Simulator:**
   - Multi-scenario selector: "Catastrophic Personal Injury", "Commercial Lease Breach", "Estate & Trust Dispute".
   - Waveform audio visualizer (live animated frequency bars responding to playback).
   - Real-time animated transcript highlighting speaker bubbles (Client vs Jurisline Voice Agent).
   - Live AI Case Extraction Card auto-populating facts, conflict clearance status, and retainer agreement draft.

4. **Interactive Firm ROI & Lead Recovery Calculator:**
   - Dual range sliders: Monthly Inbound Calls (50 - 500) and Average Matter Retainer ($3,000 - $50,000).
   - Dynamic real-time calculation of recovered leads, additional revenue generated, and billable hours saved.

5. **Practice Area Tabs & Comparison Matrix:**
   - Personal Injury, Commercial Litigation, Estate Planning, Family Law.
   - Side-by-side comparison: Legacy Answering Services vs Jurisline Autonomous Ops.

---

## 5. Responsive Behavior & Accessibility

- **Breakpoints:**
  - Expanded (≥1100px): Full two-column hero layout with floating metrics, full dashboard sidebar + chart + analytics columns.
  - Medium (768px - 1099px): Dashboard layout stacks side panels beneath main chart, mobile nav toggle.
  - Compact (<768px): Single-column stacked layout, scrollable dashboard viewports, compact KPI grids, responsive audio simulator.
- **Accessibility & Motion:**
  - `prefers-reduced-motion: reduce` stops all floating drifts and graph animations.
  - Strict semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - High contrast ratio (WCAG AA compliant across both light and dark ground sections).

---

## 6. Privacy & Analytics Compliance

- `robots.txt`: Disallow: /
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
- Google Analytics gtag: `G-Z97ZD3EVSF`
- Static vanilla delivery, relative asset paths, Caddy HTTP verified.
