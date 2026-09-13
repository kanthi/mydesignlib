# Aetheris Design System

Design system for **Aetheris** — an elite creative studio crafting AI-native brands, spatial interfaces, and immersive digital worlds.

---

## 1. Overview

- **Audience:** Visionary founders, AI labs, web3 protocols, and tech innovators seeking worldbuilding-level digital presence.
- **Tone:** Atmospheric, cinematic, authoritative, neo-noir, luminous minimalism.
- **Primary Action:** "Book a meeting" (discovery call) & "Start a project" (intake).
- **Observable Rules:**
  - True full-bleed atmospheric landscape with subtle rolling mist and wind motion.
  - Crisp high-contrast typography: white display text over deep atmospheric noir backgrounds.
  - Pill geometry for interactive actions (`border-radius: 9999px`).
  - Subtle frosted glass cards with hairline borders (`1px solid rgba(255, 255, 255, 0.08)`).
  - Strict absence of generic SaaS rainbow gradients or cartoon illustrations.

---

## 2. Color System & Semantic Roles

| Token | Value | Intent & Usage |
|---|---|---|
| `--surface-page` | `#08090a` | Deepest ambient void background |
| `--surface-panel` | `#101215` | Section background for content blocks |
| `--surface-card` | `rgba(255, 255, 255, 0.025)` | Glass cards, interactive containers |
| `--surface-card-hover` | `rgba(255, 255, 255, 0.055)` | Hover state for clickable work/service items |
| `--surface-glass` | `rgba(16, 18, 22, 0.65)` | Backdrop-filtered navigation and sticky headers |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card borders and dividers |
| `--border-hover` | `rgba(255, 255, 255, 0.2)` | Interactive focus and hover borders |
| `--text-primary` | `#ffffff` | Primary display headlines, metrics, buttons |
| `--text-secondary` | `#9ca3af` | Paragraphs, descriptions, secondary navigation |
| `--text-muted` | `#6b7280` | Metric labels, metadata, footer notes |
| `--action-primary` | `#ffffff` | Primary CTA fill (pill with dark `#08090a` text) |
| `--action-primary-hover` | `#e5e7eb` | Subtle dim on hover |
| `--action-secondary` | `rgba(255, 255, 255, 0.08)` | Outlined glass pill button |

**Color Bans:**
- No purple/cyan neon AI gradients.
- No saturated primary blues or generic SaaS accent fills.
- Accents are rendered purely through luminous white light, atmospheric fog, and cinematic clarity.

---

## 3. Typography & Spacing

### Typography
- **Primary Font:** `'Plus Jakarta Sans'`, `'Inter'`, -apple-system, sans-serif.
- **Display Hero:** `clamp(32px, 5vw, 64px)`, `line-height: 1.1`, `font-weight: 600`, `letter-spacing: -0.03em`.
- **Section Heading:** `clamp(28px, 4vw, 44px)`, `line-height: 1.15`, `font-weight: 600`, `letter-spacing: -0.025em`.
- **Metrics Numbers:** `clamp(36px, 4vw, 52px)`, `font-weight: 700`, `letter-spacing: -0.02em`.
- **Body Regular:** `16px`, `line-height: 1.6`, `color: var(--text-secondary)`.
- **Labels / Meta:** `12px`, `text-transform: uppercase`, `letter-spacing: 0.08em`, `font-weight: 500`.

### Spacing & Geometry
- **Container Max-Width:** `1240px` (with `24px` gutter on mobile, `48px` on desktop).
- **Section Padding:** `clamp(80px, 12vh, 140px) 0`.
- **Border Radii:**
  - Buttons & Badges: `9999px` (full pill).
  - Cards: `16px`.
  - Inner badges & media: `10px`.

---

## 4. Layout & Responsive Grid

- **Desktop (≥ 1024px):**
  - Hero: Viewport height `100vh`, fixed top navigation, vertically and horizontally centered hero statement, bottom pinned 4-column metric bar.
  - Work Grid: 3-column asymmetric showcase with dynamic preview frames.
  - Services: 2x2 modular matrix with interactive hover disclosure.
  - Pricing: 3-column comparative model with featured tier prominence.
- **Tablet (768px - 1023px):**
  - Metrics: 2x2 grid.
  - Work: 2-column or stacked cards.
- **Mobile (< 768px):**
  - Hero: Min-height auto with compact vertical rhythm.
  - Metrics: 2-column compact stats.
  - Single-column flow for all cards with full-touch targets (min 44px).

---

## 5. Components

1. **Header / Navigation:**
   - Left: Radiant 8-point starburst icon + `Aetheris` wordmark.
   - Center: Floating pill nav (`About`, `Work`, `Services`, `Pricing`, `Philosophy`).
   - Right: Glass pill CTA (`Start a project`).
2. **Hero:**
   - Ambient looping atmospheric video background with fallback image.
   - Floating misty particles overlay.
   - Display headline: "Design studio crafting AI, brands & digital worlds".
   - Subhead: "Helping visionary teams shape memorable brands, smarter products, and meaningful digital experiences."
   - Action: "Book a meeting" (white pill button).
   - Bottom 4 metrics:
     - `230+` / `Product Launches`
     - `$3.29B` / `Capital Raised`
     - `15X ROI` / `Product Growth`
     - `72K+` / `Investments`
3. **Selected Works:**
   - 3 flagship studio case studies with interactive tags, client outcomes, and live preview modal triggers.
4. **Studio Capabilities & Services:**
   - 4 deep disciplines detailing AI Brand Systems, Spatial UI, Digital Worldbuilding, and Autonomous Design Ops.
5. **Manifesto / Philosophy:**
   - Editorial high-impact typographic statement on the future of synthetic spatial design.
6. **Engagement Models (Pricing):**
   - 3 structured studio tiers (Design Sprint, Studio Retainer, Dedicated World Team) with clear deliverables.
7. **Interactive Booking Modal:**
   - Lightbox modal allowing visitors to select a date/time and book a 30-min strategy session.
8. **Footer:**
   - Ambient branding watermark, contact links, copyright, and directory breadcrumb.
