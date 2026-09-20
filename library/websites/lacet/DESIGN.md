# DESIGN — Lacet

## Overview
- Audience: growth marketers, creator studios, and brand teams who ship campaigns across channels and need branded, measurable short links — not another URL dump.
- Single CTA: `Create a link` (repeated as `Start generating`). Secondary: `See pricing`.
- Emotion: Night-ops control room — a current of cyan energy tying every destination into one lace.
- Create this feeling through:
  - Near-black page (`surface-page` `#070B12`) with one cyan current (`action-primary` `#2EE6C6`) used as beam, numeral chips, and primary fill — never as a full-bleed wash except the hero floor glow.
  - Hero is product-as-proof: an HTML/CSS/SVG **link-generate flow** (Website / Image / vCard → energy beam through the Lacet mark → JPG / PNG / SVG / Download). Not a screenshot.
  - Sticky left rail on the product spine (How it works → Use cases → Link types → Integrations) with numbered 01–04 steps, not three equal cards.
  - Syne display, all-caps section theses; IBM Plex Sans for body and UI; IBM Plex Mono for metrics.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Dark teal current / night-ops link studio
- Signature element: **The generate beam** — two cyan lightning filaments meeting at the hatched Lacet mark, with a teal floor bloom under the hero headline.

## Colors (semantic)
- `surface-page`: `#070B12` — full-site field
- `surface-raised`: `#0C131C` — nav, cards, pricing Pro
- `surface-card`: `#111A26` — inset product panels
- `surface-paper`: `#F4F8FB` — Starter pricing card only
- `text-primary`: `#F3F7FB` — display + body on dark
- `text-secondary`: `#8B9AAB` — supporting copy
- `text-faint`: `#5C6B7A` — meta, rails, captions
- `text-on-paper`: `#0C131C` — ink on Starter card
- `text-on-accent`: `#06241E` — labels on cyan chips/buttons
- `border-default`: `rgba(46, 230, 198, 0.14)`
- `border-subtle`: `rgba(243, 247, 251, 0.08)`
- `action-primary`: `#2EE6C6` — CTAs, beam, active rail, numeral chips
- `action-primary-hover`: `#5AF0D4`
- `glow-teal`: `rgba(46, 230, 198, 0.38)` — hero floor + beam halo only
- `status-danger`: `#E24B4B` — errors only
- Usage rules:
  - Accent is the current: beam, one primary button per view, 01–04 chips, active rail dot. Do not tint whole sections cyan.
  - Hero floor glow sits *under* the headline, never over type.
  - Paper surface exists only on the Starter price card (light island in the dark).

## Typography
- Display: **Syne** 700–800 — H1/H2/wordmark. Never Inter.
- Body: **IBM Plex Sans** 400–600 — nav, copy, cards, buttons
- Mono: **IBM Plex Mono** 500 — prices, stats, step indices
- Scale:
  - display: `clamp(2.6rem, 6.4vw, 4.6rem)` / 800 / 0.98 / -0.04em
  - 3xl: `clamp(2.0rem, 4.2vw, 3.2rem)` / 700 / 1.06 / -0.03em
  - 2xl: `clamp(1.5rem, 2.4vw, 2.0rem)` / 700
  - xl: 1.25rem / 600
  - lg: 1.0625rem
  - base: 1rem / 400 / 1.62
  - sm: 0.875rem
  - xs: 0.75rem / 0.12em tracking on rail labels
- Rules: H1 measure ≤14ch, all-caps allowed on display theses; body ≤42ch; `text-wrap: balance` on display; tabular-nums on prices/stats.

## Space
- `section-y`: `clamp(4.5rem, 10vw, 7.25rem)`
- `wrap`: `min(1120px, 100% - 2.5rem)`
- `hero-wrap`: `min(1180px, 100% - 2rem)`
- Gap scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 72

## Layout and responsiveness
### Compact (< ~640px)
- Single column; 1.1rem page margin; hamburger; hide sticky rail (use in-flow pills); flow diagram stacks inputs → mark → outputs; CTAs full-width, primary last.
### Medium (~640–1023px)
- 2-col steps and use cases; rail collapses to a horizontal chip row; pricing two-up if width ≥720.
### Expanded (≥ ~1024px)
- Sticky left rail (~180px) + content; flow diagram is a 3-stage horizontal graph; stats 4-up; pricing two cards on glow band; integrations orbital centered.

## Shape & elevation
- `radius-card`: 18px; `radius-panel`: 14px; `radius-chip`: 10px; `radius-pill`: 999px
- Nested: outer 18, inner 12
- Elevation: one cyan bloom under hero + pricing band (`0 0 120px glow-teal`). Cards use 1px `border-subtle`, not drop shadows everywhere.
- Flow nodes: 10px radius, 1px `border-default`, raised surface.

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-accent`, `radius-pill`, IBM Plex Sans 600 sm, height 44–48px. One per view above the fold.
- States: hover → `action-primary-hover` + translateY(-1px); focus → 3px cyan ring; active scale 0.98; disabled 0.4.
- Secondary / Contact: ghost, 1px `border-default`, `text-primary`; hover fill `rgba(46,230,198,0.08)`.
- On paper cards: primary inverts to `surface-page` fill + `text-primary`.

### Nav
- Transparent over page; logo left (mark + “Lacet”); links center; cart-less; Contact ghost right.
- Compact: logo + Create a link + menu. Drawer from top, 44px hits.

### Flow diagram (signature)
- Left cluster: Website, Image, vCard nodes feeding a beam.
- Center: hatched Lacet mark in a square frame, caption `LINK GENERATE`.
- Right cluster: Download hub splitting to JPG / PNG / SVG.
- Beam: SVG stroke `#2EE6C6`, animated dash + blur halo. Reduced-motion: static glow, no dash.

### Sticky rail
- Four items with cyan dots; active item `action-primary` label; click scrolls to section. Not a second site nav.

### Cards / steps
- How-it-works: 2×2, numeral chip on accent, title + 2–3 lines. Not a 3-card feature row.
- Use cases: 3 rows + one product panel (Link Assistant mock, HTML).
- Link types: 2 wide panels with small orbital diagrams (HTML/SVG).
- Stats: 4 metric tiles with a tiny node + arrow, chained visually.
- Pricing: Starter paper / Pro raised; feature lists with cyan ticks; custom strip below.
- Testimonials: 2×2 quotes with generated portraits; one rating tile.

### Inputs
- Height 44px; 10px radius; 1px `border-subtle`; focus 2px `action-primary`.

## Motion
- Purpose: the beam *is* the product metaphor; scroll reveals stage the spine.
- duration 220–280ms; ease `cubic-bezier(0.22, 1, 0.36, 1)`
- reveal: opacity + translateY ≤16px; hover lift ≤3px
- Beam dash 2.4s linear infinite; glow pulse 3.2s. Lenis + GSAP ScrollTrigger on bands.
- reduced-motion: opacity only, freeze beam dash, no Lenis.

## Iconography
- Inline SVG, 1.5px stroke, 16/18/20, `currentColor`
- No emoji; no mixed fill/outline in one row
- Wordmark mark: hatched L (two offset bars + stitch), cyan

## Content
- Sentence case in body; display theses may be all-caps
- Buttons start with a verb (`Create a link`, `Start generating`, `See pricing`)
- Specific: 48M clicks routed, 12.4k workspaces, 99.98% resolve, 140ms median
- Fictional partners only: Halcy, Noxen, Pinion, Ordia, Kestrel
- Email `hello@lacet.example` — never real trademarks

## Ban list
- Inter / Roboto / Open Sans as display; purple / `#6366F1`
- lenkrio, Linkly, ehsanshares, Framer/Webflow URLs, real SaaS logos
- Three equal feature cards as the only pattern; emoji icons; lorem
- “seamless / unleash / elevate / next-gen”; LOTR “rule them all” headline
- Screenshot of the reference as the hero visual

## Accessibility
- Cyan on `#070B12` for large type/icons only; body copy stays `text-primary` / `text-secondary`
- Visible focus; compact hits ≥44px
- Reduced motion honored; rail is a list of in-page links
