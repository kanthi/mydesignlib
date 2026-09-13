# DESIGN — Helikon

## Overview
- Audience: Founders and brand leads who want historic weight, not generated gloss
- Single job: Present a complete identity (board, type, color, voice, applications)
- Emotion: Antique resolve — a studio that treats machines as tools
- Create this feeling through:
  - Crimson fields + antique gold + forest + ember (never purple SaaS)
  - Greek meander as a structural frame, not a sticker
  - Condensed all-caps wordmark with ®, inscriptional serif for theses
  - Steel-engraving plates and oil-history paintings as original art
  - Human-first manifesto copy; no “unleash / seamless / next-gen”

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Classical field notes
- Signature element: Meander-framed crimson/gold boards + condensed HELIKON lockup

## Colors (semantic)
- `surface-crimson` `#B42328` — primary fields, wordmark on parchment
- `surface-gold` `#C9A03A` — secondary fields, meander on gold boards
- `surface-ochre` `#A88B32` — manifesto panel (darker gold)
- `surface-forest` `#2E5A3C` — third field, book cloth
- `surface-ember` `#C86A22` — fourth palette tile only
- `surface-parchment` `#E8E2D4` — page, repeating wordmark field
- `surface-smoke` `#1C1B18` — dark engraving field
- `text-primary` `#1A1612` — ink on parchment
- `text-on-field` `#F4EFE3` — type on crimson / forest / smoke
- `text-muted` `#6A6154` — labels, meta
- Usage:
  - One dominant field per cell. Ember never becomes a full page.
  - Gold type on crimson, crimson type on parchment, ink on gold.
  - Do not put muted grey-on-grey body on dark fields.

## Typography
- Wordmark: Oswald 600–700 — all caps, tracking `0.04em`, ® as superior
- Display: Cinzel 500–700 — theses, section titles
- Mono / utility: IBM Plex Mono 400–500 — labels, hex, “potential type”
- Body: Source Serif 4 400–600 — manifesto, rules
- Scale: display `clamp(2.4rem, 5vw, 3.6rem)` / 3xl `2.25rem` / xl `1.35rem` / base `1.05rem` / sm `0.82rem` / xs `0.68rem`
- Rules: theses `0.08–0.14em` tracking, uppercase; body measure ≤ 48ch, leading 1.6

## Space
- `section-y` `clamp(3.5rem, 7vw, 5.5rem)`
- `wrap` `min(1180px, 100% - 2.5rem)`
- Board gap `6px` (tight mosaic, not card deck)
- Scale: 4 / 8 / 12 / 16 / 24 / 40

## Layout and responsiveness
### Compact (< ~720px)
- Single column; board cells stack; page margin 1.15rem
- Nav collapses; primary CTA last
- Meander thins to 10px; lockup scales down
### Medium (~720–1100px)
- Board 2 columns; manifesto and type stay readable
### Expanded (≥ ~1100px)
- 3×3 board at full width; system sections 2-col

## Shape & elevation
- Radius `0` on board cells (editorial mosaic)
- Soft radius `4px` only on system cards and buttons
- Shadow: one soft lift on the whole board, none on inner cells

## Components
### Buttons
- Primary: `surface-crimson` + `text-on-field` + radius 4px + Oswald/label
- States: hover darken 6%; focus 2px gold ring; active `scale(0.97)`; disabled 40%
- Secondary: 1px ink/gold hairline; never for the only CTA
### Nav
- Sticky parchment; wordmark left; links muted; kit CTA right
- Compact: hamburger 44px; panel stacks
### Board cells
- Full-bleed field + meander inset (top+bottom or all sides)
- Lockup bottom-left on color fields
- No equal-card chrome inside the mosaic
### Books / apps
- Cloth covers in gold / forest / crimson; art or X-mark; wordmark 12mm from trim

## Motion
- Purpose: hover on CTAs, board fade-in once
- `220ms` / `cubic-bezier(0.22, 1, 0.36, 1)`
- Reveal: opacity + `translateY(12px)`
- Reduced motion: opacity only or off

## Iconography
- No emoji. Meander + ® are the marks.
- Optional inline SVG spear/shield at 20px, 1.5 stroke, `currentColor`

## Content
- Sentence case in body; theses uppercase
- CTAs: “View the board”, “Request the kit”
- Fictional studio only. No Ajax, no designer handles, no real client marks

## Ban list
- Ajax / yahyavision / real studio names
- Inter, Roboto, purple gradients, 16px-radius cards
- Three equal feature cards as the only pattern
- Stretching the wordmark; rainbow meander
- Scraped classical paintings or marketplace Spartan stock

## Accessibility
- Gold-on-crimson and cream-on-crimson meet large-text contrast
- Visible focus; tap targets ≥44px
- Reduced motion honored
