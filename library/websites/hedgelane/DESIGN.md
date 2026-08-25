# DESIGN — Hedgelane

## Overview
- Audience: Homeowners in mill towns who want a kept hedge, lawn, and beds without hiring a “landscape architect” theater.
- Single CTA: Get a free quote
- Emotion: Capable neighbor with shears — the yard looks tended, not staged.
- Create this feeling through:
  - Forest `surface-hero` split against lime `action-primary` on one word in the headline
  - Khaki/sage crew photography with 12px inner radius, never full-bleed lifestyle haze
  - Comparison table with one inverted `surface-hero` column (us vs typical crew)
  - Soft `surface-page` sage paper; dark buttons on light, lime buttons on dark

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Organic service — split-panel horticulture
- Signature element: Dark-green hero slab + lime “Bloom” (or equivalent) word + floating white pill nav

## Colors (semantic)
- surface-page: `#EEF2E6` — page paper. Use for bands between white sections.
- surface-hero: `#16351F` — hedge-shadow green. Hero, footer, inverted table column, dark buttons.
- surface-raised: `#FFFFFF` — cards, nav pill, about/comparison on white.
- text-primary: `#14281A` — ink on paper.
- text-on-dark: `#F3F6EE` — copy on `surface-hero`.
- text-secondary: `#5A6B5C` — supporting copy, table muted cells.
- action-primary: `#C8DC4A` — lime. Primary CTA on dark, highlight word, numbered discs. Never a full-bleed background.
- action-ink: `#16351F` — text on lime.
- border-default: `#D5DFC8` — table and card edges.
- status-danger: `#B23B2A` — form errors only.
- Usage: one lime object per view (CTA *or* highlight word *or* disc). Do not tint the page lime.

## Typography
- Display: Sora — H1/H2/wordmark. Weight 600. Tracking `-0.03em`. `text-wrap: balance`.
- Body: Figtree — paragraphs, nav, forms. Weight 400–500. Leading `1.6`.
- Label: Figtree 600, 0.75–0.8125rem, slight tracking on kickers only (`0.06em`).
- Scale: display `clamp(2.5rem, 5.5vw, 3.75rem)` / 3xl `clamp(2rem, 3.5vw, 2.75rem)` / xl 1.25rem / base 1.0625rem / sm 0.875rem / xs 0.75rem
- Measure: body ≤ 38rem; hero subhead ≤ 28rem.

## Space
- wrap: `min(1120px, 100% - 2.5rem)`
- section-y: `clamp(4.25rem, 9vw, 6.75rem)`
- gap scale: 8 / 12 / 16 / 24 / 40 / 64
- Hero inner padding ≥ 40px; card padding 20–24px

## Layout and responsiveness
### Compact (< 720px)
- Single column. Pill nav collapses to logo + quote + menu.
- Hero stacks: copy then photo. Trust chips under photo.
- Services stack. Comparison table scrolls horizontally if needed (min-width 640px inside overflow).
- Primary CTA full width at ends of sections.
### Medium (720–1023px)
- Hero still stacked or 1fr/1.1fr if space. About: image | copy.
- Services 3-col only if ≥ 900px, else 1.
### Expanded (≥ 1024px)
- Hero 1.05fr copy / 1fr photo, 24px rounded frame.
- Nav: white pill overlapping the green slab, phone at right.
- About 0.9fr / 1.1fr. Services 3-col. Comparison 3-col grid.

## Shape & elevation
- Frame radius 24px (hero slab). Nested photo 12px. Pills 999px. Table 20px.
- Concentric: outer 24, inner 12 when gap ~12.
- Shadow: one soft lift `0 18px 40px rgba(20,40,25,0.10)` on photos only — not on every card.
- 1px black @ 8% outline on photos.

## Components
### Buttons
- Primary on dark: bg `action-primary`, color `action-ink`, radius `radius-pill`, Figtree 600
- Primary on light: bg `surface-hero`, color `text-on-dark`
- Ghost: transparent + 1px `border-default` (on dark: white 25%)
- States: hover darken 6% / translateY(-1px); focus-visible 2px lime ring offset 2px; active scale(0.97); disabled opacity 0.45
- One primary per cluster
### Nav
- Desktop: white pill, links Figtree 500, lime “Call us” chip
- Compact: hamburger 44px; drawer `surface-hero`
### Cards / services
- Photo 4:3, 16px radius, title + 2-line blurb, lime disc icon
- Do not use 3 equal cards as the only pattern — pair with comparison + numbered about
### Comparison
- Header row sticky optional. Middle column `surface-hero` + `text-on-dark`. Check/dash as SVG, not emoji
### Form
- Height 48px inputs, labels above, error in `status-danger` under field

## Motion
- Purpose: reveal sections on scroll; hover on buttons
- 240ms `cubic-bezier(0.22, 1, 0.36, 1)`; translateY ≤ 16px
- reduced-motion: opacity only / off

## Iconography
- Inline SVG, 1.75 stroke, 20px. CurrentColor. No emoji.

## Content
- Sentence case. Buttons: “Get a free quote”, “See our work”
- No lorem; no “seamless/unleash”; fictional `@hedgelane.example`
- Fictional review marks (Plotmark, Yard Guild) — never Google/Guru/real insurers

## Ban list
- Inter/Roboto display, purple gradients, emoji icons, real trademarks, scraped crew photos, full-page lime, 3 cards as the whole site

## Accessibility
- Contrast on lime: always `action-ink` text
- Focus visible; tap ≥ 44px
- Reduced motion honored
