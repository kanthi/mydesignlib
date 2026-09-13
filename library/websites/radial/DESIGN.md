# Design System: Radial (Spatial Context & Field Intelligence)

## 1. Overview & Emotional Tone
Radial is a spatial context and continuous intelligence platform for engineering, product, and operations teams. The aesthetic merges **high-craft Swiss modernist typography** with **aerospace orbital telemetry and cartographic precision**.

**Emotional Tone:**
- Quiet authority, observational clarity, scientific precision, zero gimmickry.
- Warm, tactile canvas (linen/ecru) grounding cold technical diagrams.
- Tension between deep obsidian-pine solids and razor-sharp persimmon signals.

---

## 2. Color System & Semantic Tokens

### Canvas & Backgrounds
- `--color-canvas`: `#F0EFEA` (warm linen / ecru paper; primary surface)
- `--color-canvas-subtle`: `#E8E6DC` (secondary containers, tickers, input backgrounds)
- `--color-canvas-inset`: `#DFDCD1` (borders, recessed slots, divider rules)
- `--color-surface-white`: `#FFFFFF` (elevated cards, floating contextual popups)
- `--color-surface-dark`: `#11231D` (gravitational field disc, dark pill buttons, contrast CTA band)
- `--color-surface-dark-elevated`: `#19332B` (hover state on dark surfaces, inner disc rings)

### Text & Ink
- `--color-text-primary`: `#11221C` (headline ink, primary typography, maximum contrast)
- `--color-text-secondary`: `#42534B` (body text, navigational links, descriptions)
- `--color-text-muted`: `#78877F` (eyebrow labels, timestamps, metadata, unit labels)
- `--color-text-inverse`: `#F0EFEA` (text on dark pine backgrounds)

### Accents & Telemetry Signals
- `--color-accent-persimmon`: `#EB5A36` (focal highlight, period badge, active state, alert vectors)
- `--color-accent-persimmon-subtle`: `rgba(235, 90, 54, 0.12)` (badges, glow rings, pill fills)
- `--color-accent-radar-lime`: `#9EC255` (active orbital satellite node, live ping pulse, healthy status)
- `--color-accent-radar-lime-glow`: `rgba(158, 194, 85, 0.28)` (pulsing radar halo ring)

### Hairlines & Geometry
- `--color-field-ring`: `rgba(17, 35, 29, 0.12)` (precision orbital arcs, coordinate lines)
- `--color-field-ring-active`: `rgba(17, 35, 29, 0.28)` (highlighted orbit)
- `--color-border-subtle`: `rgba(17, 35, 29, 0.08)` (card borders, row dividers)

---

## 3. Typography Hierarchy

Fonts loaded via Google Fonts:
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif (weights: 400, 500, 600, 700, 800)
- **Body & Editorial:** `Plus Jakarta Sans`, sans-serif (weights: 400, 500)
- **Telemetry & Monospace:** `JetBrains Mono`, monospace (weights: 400, 500)

### Type Scale
- **Display XL (Hero headline):** `clamp(3.5rem, 8vw, 7.5rem)`, leading `0.92`, tracking `-0.035em`, weight `700`
- **Display L (Section titles):** `clamp(2.4rem, 4.5vw, 4.2rem)`, leading `1.04`, tracking `-0.025em`, weight `600`
- **Heading M (Bento / Feature headers):** `1.75rem (28px)`, leading `1.2`, tracking `-0.015em`, weight `600`
- **Heading S (Cards / Dispatches):** `1.25rem (20px)`, leading `1.35`, tracking `-0.01em`, weight `600`
- **Body L (Hero subhead):** `clamp(1.1rem, 1.6vw, 1.35rem)`, leading `1.5`, tracking `-0.01em`, weight `400`
- **Body M (Standard paragraphs):** `1rem (16px)`, leading `1.6`, tracking `0`, weight `400`
- **Body S (Captions, footnotes):** `0.875rem (14px)`, leading `1.5`, tracking `0`, weight `400`
- **Eyebrow / Monospace Tag:** `0.75rem (12px)`, leading `1`, tracking `0.18em`, uppercase, `JetBrains Mono`, weight `500`

---

## 4. Spacing, Geometry & Radii

### Spacing Scale
- `space-xs`: `4px`
- `space-sm`: `8px`
- `space-md`: `16px`
- `space-lg`: `24px`
- `space-xl`: `36px`
- `space-2xl`: `64px`
- `space-3xl`: `96px`
- `space-4xl`: `140px`

### Radii
- Pill Buttons / Badges: `9999px` (fully rounded capsule)
- Feature Cards / Bento: `16px` or `20px` (smooth modernist curves)
- Inset Panels / Controls: `10px`
- Gravitational Disc: `50%` (perfect circle)

---

## 5. Component Anatomy & States

### 1. Primary Action Button (`.btn-primary`)
- Height: `48px`, padding: `0 28px`
- Background: `var(--color-surface-dark)`, color: `var(--color-text-inverse)`
- Border-radius: `9999px`
- Typography: `Plus Jakarta Sans`, 500 weight, `15px`
- Hover state: background shifts to `var(--color-surface-dark-elevated)`, subtle `scale(1.02)`, shadow `0 6px 20px rgba(17,35,29,0.18)`
- Icon: trailing diagonal arrow `↗` (`transform: translate(2px, -2px)` on hover)

### 2. Secondary Video Button (`.btn-secondary`)
- Height: `48px`, padding: `0 26px`
- Background: `transparent`, border: `1px solid var(--color-text-primary)`
- Color: `var(--color-text-primary)`
- Icon: leading solid play triangle `▶`
- Hover state: background `rgba(17,35,29,0.05)`, border-color `var(--color-text-primary)`

### 3. Gravitational Field Visual (`.field-orbital-stage`)
- Center: Floating dark disc (`width: 220px; height: 220px`), background `#11231D`
- Inner ring: `1px solid rgba(240, 239, 234, 0.25)` with text `FIELD` set on curve or subtle tangent
- Concentric rings: 5 SVG orbital ellipses (`r = 160px, 260px, 380px, 520px, 680px`) with `0.75px` stroke
- Active satellite node: Lime disc (`#9EC255`, 14px) with animated ping ring expanding and fading
- Interactive hover: Nodes reveal floating glass telemetry tooltip with live data telemetry

### 4. Architectural Pillar Ticker (`.ticker-strip`)
- Background: `var(--color-canvas-subtle)`
- Border top/bottom: `1px solid var(--color-canvas-inset)`
- Content: 4 tracked items separated by persimmon slashes `/` (`color: var(--color-accent-persimmon)`)
- Monospace metadata: `JetBrains Mono`, `12px`, letter-spacing `0.15em`

---

## 6. Layout & Responsive Logic

- Container max-width: `1360px` with responsive padding `clamp(20px, 5vw, 64px)`
- Desktop (>= 1024px): 12-column bento grids, side-by-side hero text and orbital field engine.
- Tablet (768px - 1023px): 8-column layout, hero stacks with orbital visual centered below text.
- Mobile (< 768px): Single column, full-width touch targets, orbital canvas scales cleanly to viewport width.

---

## 7. Concrete Bans & Rules
- **NO generic purple/indigo gradients.**
- **NO artificial dark-mode flip that ruins the ecru linen paper feel.**
- **NO lorem ipsum text.** All copy is substantive, technical, and benefit-driven.
- **NO proprietary brand names** (never mention the reference brand).
