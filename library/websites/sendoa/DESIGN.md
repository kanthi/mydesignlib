# Sendoa — Design System Specification

## Brand Identity & Vision
**Sendoa** is an AI-orchestrated CRM and intelligent outreach engine designed for high-velocity sales organizations. It marries high-contrast editorial elegance with rigorous real-time telemetry.

The visual thesis contrasts a tactile, warm sand/parchment architectural canvas (`#EDE8DF`) with monolithic obsidian command centers (`#121316`), pierced by high-energy vermilion outreach accents (`#FF5520`) and emerald conversion indicators (`#10B981`).

---

## Color Palette

| Token | Value | Role |
|---|---|---|
| `--color-canvas-sand` | `#EDE8DF` | Primary ambient page background |
| `--color-canvas-sand-light` | `#F5F1EB` | Secondary warm card backgrounds & inputs |
| `--color-canvas-sand-border` | `#DDD7CE` | Subtle borders on light canvas |
| `--color-obsidian` | `#121316` | Monolithic card & container surfaces |
| `--color-obsidian-card` | `#18191E` | Elevated telemetry cards & interactive modules |
| `--color-obsidian-subtle` | `#22242B` | Hover states, pill containers, input fields |
| `--color-border-dark` | `rgba(255, 255, 255, 0.08)` | Hairline dividers and glass strokes on dark surfaces |
| `--color-orange` | `#FF5520` | Primary action CTA, indicator nodes, active states |
| `--color-orange-glow` | `rgba(255, 85, 32, 0.25)` | Pulsing glows & wiring energy |
| `--color-emerald` | `#10B981` | Growth metrics, positive trend badges, telemetry indicators |
| `--color-emerald-deep` | `#08281D` | Deep mineral marble backdrop base |
| `--color-text-dark` | `#141518` | Display headlines and body on light canvas |
| `--color-text-dark-muted` | `#6E717B` | Secondary copy and metadata on light canvas |
| `--color-text-light` | `#F9FAFB` | Primary headlines and high-contrast labels on dark cards |
| `--color-text-light-muted` | `#9497A1` | Secondary labels, descriptions, and chart axes on dark cards |

---

## Typography

- **Display Serif**: `Newsreader`, `serif`
  - High editorial prestige, delicate serifs, generous optical kerning.
  - Used for hero headlines, section statements, and the oversized manifesto quote.
- **Interface Sans**: `Plus Jakarta Sans`, `sans-serif`
  - Crisp, geometric clarity, balanced x-height for dashboard controls, navigation, and badges.
- **Tabular Mono**: `JetBrains Mono`, `monospace`
  - Currency metrics, pipeline counts, percentages, and telemetry counters.

---

## Structural Architecture & Sections

1. **Top Island Header & Hero Island**:
   - Encapsulated within a full-bleed padded obsidian container (`border-radius: 32px`).
   - Clean top navigation with status badge, link hierarchy, and subtle rounded border buttons.
   - Social proof eyebrow featuring stacked avatar cluster and "Used by 1,000+ sales teams".
   - Hero Headline in large Newsreader serif with vermilion CTA button.
   - SVG Interactive Wiring Tree routing downward into three live telemetry pods:
     1. Lead Acquisition Gauge (circular SVG sweep with 679 active leads & velocity ratios).
     2. Pipeline Performance (elevated center card with monthly multi-column graph & benchmarks).
     3. Revenue & Deal Flow (conversion progress metrics and real-time transaction ticker).
2. **Social Proof Marquee**:
   - Monochrome partner badges (Calendly, GitHub, Basecamp, Attentive, Gumroad, Stripe, Linear) on warm sand canvas.
3. **Productivity & Capabilities Suite**:
   - 4-pill interactive switcher: `Outreach`, `Automation`, `Analytics`, `Integrations`.
   - Dynamic split card with interactive KPI chips (`Insights`, `Engagement`, `Performance`, `Satisfaction`) and floating "Weekly Interactions" overlay chart.
4. **Deep Mineral Marble Analytics Section**:
   - Deep emerald layered card with contoured glow and floating multi-layer dashboard (8,458 sales, $10,850 revenue, export action).
   - Three branched outcome prediction nodes (`Predict Deal Outcomes`, `Optimize Sales Strategy`, `Increase Conversion Rates`).
5. **Sales Automation Process (How It Works)**:
   - Monolithic obsidian card with 3 circular orange icon steps:
     1. Connect & Integrate
     2. Automate Outreach
     3. Smart Lead Routing
6. **Editorial Manifesto & Proof Numerals**:
   - Oversized Newsreader statement with dimmed secondary cadence.
   - Two-column split: Customer quote with vermilion accent rule vs. colossal typography (`40+` and `94%`).
7. **Obsidian Footer**:
   - Newsletter discount signup, social matrix with diagonal glyphs, product/company/support links, and copyright lockup.

---

## Motion & Micro-Interactions

- **Smooth Scroll & Viewport Triggers**: Subtle reveal animations using IntersectionObserver.
- **Wiring Tree Glow**: Glowing SVG connector lines with animated dash-offsets showing outbound signal flow.
- **Telemetry Charts**: Hover tooltips and reactive metric adjustments on tab toggle.
- **Tab Switching**: Smooth fade and state update between Outreach, Automation, Analytics, and Integrations.
- **Respects `prefers-reduced-motion`**: Instant transitions for users requesting reduced motion.
