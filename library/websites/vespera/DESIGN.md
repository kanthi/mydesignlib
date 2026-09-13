# DESIGN — Vespera

## Overview
- Audience: ops and revenue leads who still close the week in a spreadsheet.
- Single CTA: Open a board
- Emotion: last light over a live board — the room is still watching
- Create this feeling through:
  - Dual-horizon bloom only inside the hero plate (`ice` left, `ember` right)
  - Glass metric boards as the proof, not a product screenshot photo
  - Display type large, tight, warm off-white — never pure white
  - Ember is the only filled button; ice never fills a control

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Twilight observatory
- Signature element: ice-to-ember horizon bloom with three overlapping glass boards

## Colors (semantic)
- surface-page: #07080C — page void
- surface-plate: #0C0E16 — feature plates, pricing, footer
- surface-glass: rgba(14, 18, 28, 0.72) — hero boards
- text-primary: #F3EFE6 — warm paper ink
- text-secondary: #9AA3B5 — body, nav idle
- text-faint: #6B7384 — labels, footnotes
- border-default: rgba(243, 239, 230, 0.10)
- ice: #3BA7FF — left bloom, chart cool, focus ring
- ember: #E8923A — right bloom, primary action, chart warm
- action-primary: #E8923A
- on-action: #1A1006
- status-danger: #E25A4A — errors only
- Usage:
  - Ice and ember bloom together only in the hero. Elsewhere they are hairlines, chart ink, or a 1px plate stroke.
  - Ember fills one primary button per view. Ice never fills a button.
  - Do not paint full-bleed ice or ember sections.

## Typography
- Display: Epilogue — H1/H2/wordmark
- Body: Source Sans 3
- Label/utility: IBM Plex Mono — metrics, badges, prices
- Scale: display clamp(2.6rem, 6.4vw, 4.6rem) / 3xl clamp(1.85rem, 3.4vw, 2.65rem) / xl 1.25rem / lg 1.0625rem / base 1rem / sm 0.875rem / xs 0.72rem
- Rules: display leading 1.02, tracking −0.038em, `text-wrap: balance`. Body leading 1.6, measure ≤ 38rem. Metrics use `tabular-nums`.

## Space
- section-y: clamp(4.5rem, 9vw, 7.25rem)
- wrap: 1120px + page-pad 1.25rem
- gap scale: 8 / 12 / 16 / 24 / 40 / 64
- Hero min-height ~88svh; cards sit in the lower third

## Layout and responsiveness
### Compact (< ~720px)
- Single column; page margin 1.15rem; hamburger; CTAs stack (primary last); boards stack and lose overlap
### Medium (~720–1100px)
- Pill nav may wrap under the wordmark; boards overlap with reduced offset
### Expanded (≥ ~1100px)
- Wordmark left, pill nav optical-centre, Log in right; three boards overlap with the middle card forward

## Shape & elevation
- Hero plate / page: 0 (full bleed). Feature plates: 20px. Inner glass: 14px. Nav + chips: pill. Buttons: 10px.
- One soft elevation on hero boards only (`0 24px 60px rgba(0,0,0,.45)`). Feature plates use gradient hairlines, not drop shadows.

## Components
### Buttons
- Primary: `action-primary` + `on-action`, radius 10px, Epilogue 600, min-height 44px, ember glow
- States: hover brighten + lift 2px; focus 2px `ice` ring; active scale 0.97; disabled 40% opacity
- Secondary: glass fill + `border-default`; never for the only CTA on a view
### Nav
- Desktop: floating bar over hero. Compact: wordmark + Log in + menu. Active link = `text-primary`
### Cards / feature plates
- Anatomy: gradient stroke (`ice`→`ember`), dotted field in one corner, media 56% height, title + one sentence
- Max four plates; never three equal icon cards
- Hero boards: glass, 18px, labelled metric + one chart
### Inputs
- Height 46px; label above; error = `status-danger` text under the field; focus = `ice` ring

## Motion
- Purpose: boards settle; plates lift 3px on hover
- 240ms, cubic-bezier(0.22, 1, 0.36, 1); reveal opacity + translateY 16px
- Chart stroke draws once on first view
- Reduced-motion: opacity only; no chart draw

## Iconography
- Inline SVG, 1.5px stroke, 16 / 20. CurrentColor. No emoji. No mixed fill/outline in one row.

## Content
- Sentence case. Buttons start with a verb (`Open a board`, `See plans`).
- Dusk vernacular: watch, board, room, first light, last lamp — not seamless / unleash / elevate.
- Fictional brand only. Contact `@vespera.example`.

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons, 3 equal cards as the only pattern
- Ice or ember as a full-bleed section fill
- Real trademarks (Sheets, Slack, Snowflake, Looker, Tableau)
- Dual-square lockup (reference mark)
- Scraped media, lorem, Acme/Nexus

## Accessibility
- Text on void and on ember meets contrast
- Visible `ice` focus; tap targets ≥44px on compact
- Reduced motion honored
