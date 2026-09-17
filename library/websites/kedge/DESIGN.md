# DESIGN — Kedge

## Overview
- Audience: CROs, revenue ops, and finance leads at growth-stage and enterprise companies whose numbers live in six tools.
- Single CTA: Request a demo
- Emotion: Warm authority — sunset heat over alpine stillness.
- Create this feeling through:
  - A full-bleed **sunset plasma** hero (tangerine → hot coral → magenta), never a purple mesh
  - One coral action color on paper; alpine dusk photography only on About / Contact bands
  - Display type large, tight tracking, two-line theses; body in a quiet geometric sans
  - Product proof as an HTML dashboard (bars, KPIs, forecast meter) — not a screenshot of a real app
  - Floating glass nav over media; quiet stone canvas below

## Source of truth
- This file + CSS `:root` in `styles.css`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Sunset enterprise / alpine ops
- Signature element: Molten orange-red plasma field behind a left-aligned revenue thesis, then a coral-tabbed dashboard on warm stone.

## Colors (semantic)
- surface-page / paper: `#F5F5F4` — page canvas
- surface-raised: `#FFFFFF` — cards, form, dashboard
- text-primary / ink: `#141414`
- text-secondary / muted: `#6A6A68`
- border-default / line: `#E4E4E0`
- action-primary / ember: `#FF3B1A` — CTAs, active tab, chart peak, mark
- action-primary-hover: `#E02E12`
- status-up: `#1F8A4C` — metric deltas only
- Usage rules:
  - Ember is the only saturated color in chrome (buttons, mark, active underline, one chart bar).
  - Ember is never a full-page fill except the generated plasma hero.
  - Status green never appears as a marketing accent.
  - Alpine photos are graded cool/dusk; do not tint them orange.

## Typography
- Display: Sora — H1/H2/wordmark
- Body: Figtree
- Label/utility: Sora (medium)
- Scale: display `clamp(2.6rem, 5.4vw, 4.25rem)` / 3xl `clamp(2rem, 3.4vw, 2.85rem)` / 2xl 2rem / xl 1.5rem / lg 1.2rem / base 1.05rem / sm 0.9rem / xs 0.75rem
- Rules: H1 `weight 700`, leading 1.08, tracking `-0.04em`, `text-wrap: balance`. Body leading 1.6, measure ~42ch on heroes, ~58ch in articles. Labels 0.72rem, tracking 0.02em, sentence case.

## Space
- section-y: `clamp(4.5rem, 9vw, 7rem)`
- wrap: `min(1120px, 100% - 2.5rem)`
- gap scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Hero inner padding ≥ 5rem top (clear glass nav)

## Layout and responsiveness
### Compact (< ~640px)
- Single column; page margin 1.25rem; hamburger; stack CTAs (primary last); dashboard full width; journal 1-col; contact form above proof cards
### Medium (~640–1023px)
- Nav links hidden if they wrap; 2-col journal; form 2-col fields; stats 2×2
### Expanded (≥ ~1024px)
- Glass nav with links + one outline CTA; stats 4-up; feature split 48/52; about split copy | photo; contact form | rail

## Shape & elevation
- radius-sm 8px, radius 12px, radius-lg 16px, radius-pill 999px
- Nav capsule: radius 14px
- Mark tile: 8px
- Shadow: one soft product elevation `0 18px 50px rgba(20,20,20,0.08)` on dashboard/form only — not on every card
- Nested cards: outer 16px, inner 12px (concentric)

## Components
### Buttons
- Primary: `action-primary` fill, white label, radius 8px, height 44px, Sora 14px/600; hover darken; focus 2px ink ring offset 2px; active scale 0.97; disabled 40% opacity
- Nav CTA: white fill on plasma; ink text; same radius
- Ghost: 1px white/40 on plasma; 1px line on paper
- One primary per view
### Nav
- Logo + 4 links (About, Features, Pricing, Journal) + Request a demo
- Compact: icon button 44px opens drawer
- Active link: ember
### Cards / feature blocks
- Tab row + one split pane (mock | copy). Never 3 equal icon cards as the only pattern
- Journal: 2-col image 16:9, title, dek, avatar + name + date
### Inputs
- Height 48px; label above 12px ink; radius 8px; border line; focus ember ring
- Error: 1px `#C2301A` + helper under field

## Motion
- Purpose: tab/accordion state, not decoration
- duration 220ms; ease `cubic-bezier(0.22, 1, 0.36, 1)`
- reveal: opacity + translateY 12px once
- reduced-motion: opacity only or off

## Iconography
- Inline SVG, 1.5px stroke, 20px default, currentColor
- No emoji; no mixed fill/outline in one row

## Content
- Sentence case; CTAs start with a verb: **Request a demo** everywhere (nav, hero, about, contact)
- No lorem; no “unleash / seamless / next-gen”
- Fictional brand only: Kedge, kedge.example, Kedge Systems, Inc.

## Ban list
- Inter/Roboto as display; purple/indigo gradients; emoji icons; 3 equal cards only; real trademarks (Anchor, ALEIO, Framer); scraped media; Orbiq coral `#f95738` copy; San Francisco Mission address from the reference

## Accessibility
- Contrast: white on ember; ink on paper; white on dusk photos with scrim
- Visible focus; tap ≥44px
- Reduced motion honored
- Form labels always visible (not placeholder-only)
