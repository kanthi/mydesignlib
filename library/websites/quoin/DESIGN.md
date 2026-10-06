# DESIGN — Quoin

## Overview
- Audience: teams who serve a model for voice and still pictures and watch the slow tail.
- Single CTA: “Open a desk” → `mailto:desk@quoin.example`.
- Emotion: a printer’s chase at night — metal, paper, and a ledger that does not flatter the tail.
- Create this feeling through:
  - Dyed grounds (`surface-field`, `surface-navy`) with a vertical thread, never a white SaaS page.
  - Stationery is square (`radius-sheet` 0). The olive instrument is the only soft rectangle (`radius-instrument`).
  - One metal (`metal`) for the sun medallion. One foil (`action-foil`) for nicks, the diamond, and focus.
  - Display is a high-contrast Didone, uppercase, tight leading. Labels are a small tracked sans.
  - The three route tiles appear once, on the cream sheet, because that sheet is a row of routes.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Engraved chase.
- Signature element: a silver engraved sun medallion — a face in a ring of rays — centered on the black opening plate. The field is an olive pinstripe with a crescent in each corner. The cream sheet below carries three navy routes, each with its own coin.

## Colors (semantic)
- surface-field: `#3A3D34` — charcoal olive page (hero, ledger, close).
- surface-navy: `#263044` — navy page (routes, setting).
- surface-panel: `#141613` — inset plate behind the seal and the cropped word.
- surface-card: `#06101E` — route tiles and the live-desk tile.
- surface-paper: `#E3DDD0` — cream sheets. Not a full-bleed page.
- surface-chart: `#504228` — the latency instrument only.
- action-foil: `#C4A56A` — nicks, diamond, focus, active mode. Never a full-bleed ground.
- chart-bar: `#D0A34B` — tail bars on the histogram only.
- metal: `#E8E4DA` — seal highlights and type on dark grounds.
- text-on-paper: `#161616` — headlines on paper.
- text-muted: `#8A847A` — captions. On paper, use `#5E584E`.
- text-quiet: `#2C4368` — cropped word inside a navy tile. Never body copy.
- Usage: foil is a nick or a 2px focus, not a button fill. The black pill is `surface-panel` with metal type. Chart bars that are not the tail stay `#8A7A52`.

## Typography
- Display: Bodoni Moda (optical size auto), weight 500. Headlines and the wordmark.
- Body: Public Sans, 400/500/600.
- Scale:
  - display-hero: `clamp(1.85rem, 3.2vw, 3.05rem)` / leading 0.92 / tracking 0.01em / uppercase
  - display-sheet: `clamp(2.4rem, 4.4vw, 4rem)` / leading 0.9 / uppercase
  - body: `1rem` / leading 1.55
  - caption: `0.78rem` / leading 1.45
  - label: `0.68rem` / tracking 0.18em / uppercase / weight 500
- Rules: headlines `text-wrap: balance`. Measure of captions ≤ 28ch. Numbers on the ledger use tabular figures.

## Space
- section-y: `clamp(4.5rem, 9vw, 7rem)`
- wrap: `min(1120px, calc(100% - 2.5rem))`
- sheet inset: `clamp(1.5rem, 4vw, 3.25rem)`
- gap: 8 / 14 / 22 / 36

## Layout and responsiveness
### Compact (< 760px)
- Single column. Hero stacks: headline, seal, caption, all left-aligned inside the plate.
- Nav links hide behind a Menu button (44px). The primary pill stays visible.
- Route tiles and setting rows stack. The chart returns to normal flow (no overlap).
### Medium (760–1040px)
- Hero keeps the three-column plate if the viewport is ≥ 900px wide; otherwise it stacks.
- Route rail sits above the three tiles. Ledger stacks; chart does not overlap the paper.
### Expanded (≥ 1040px)
- Hero plate is a wide inset on the pinstripe, three columns: headline, sun medallion, caption.
- The next band is the routes sheet: a narrow rail plus three tiles. Ledger chart overlaps the seam by about 12% and covers the lower right of the paper.

## Shape & elevation
- radius-sheet: 0. radius-instrument: 8px. radius-pill: 2px (the black control is a short slab, not a capsule).
- No drop shadow on sheets. The seal uses a 1px dark contact shadow. The chart sits in front by stacking, not by a large shadow.

## Components
### Buttons
- Primary: `.pill` — fill `surface-panel`, type `metal`, height 44px, radius `radius-pill`, label style. One marketing instance per view (nav, and again at the close).
- States: hover fills `#000`; active `scale(0.98)`; focus-visible is 2px `action-foil` offset 3px. Disabled is not used.
- Mode: `.pill` and `.pill-ghost` in the ledger group. The pressed mode is the solid pill (`aria-pressed`). Ghost is transparent with a 1px ink rule.
- Do not invent a second marketing verb.

### Nav
- Wordmark left, links center, primary pill right. Bar is transparent on `surface-field`.
- Compact: links drop into a field-colored panel under the bar. Escape and a second Menu press close it.

### Plates and sheets
- Opening plate: `surface-panel` on the pinstripe field, inset on all sides, four silver crescents, faint ring watermarks, sun medallion centered between a stacked headline and one caption.
- Sheet: `surface-paper`, inner hairline at 12px (`rgba(22,22,22,.14)`), foil nick on each corner overflowing ~6px.
- Route tiles: three, equal, on the cream sheet directly under the opening. Titles are Desk, Room, Ledger. Each has a CSS sunburst and one coin (bird, hound, wave) and one sentence. No icons-as-emoji. No fourth tile.

### Ledger
- Paper column: eyebrow, display headline, one sentence, mode group.
- Plate: cropped word, sun medallion top-right, chart overlapping.
- Chart: eyebrow, tabular time-to-first-token, percentile notes, 24 bars (tail in `chart-bar`), three markers (p50, SLO, p99), then slowest turns and last hour. Bars are decorative; the number is the data (`aria-live`).

### Setting rows
- Three columns of a ruled ledger (index, verb, sentence), not cards. A single attributed line underneath.

## Motion
- Purpose: the plate arrives; bars grow from the baseline once.
- 700–800ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`. Translate ≤ 12px.
- Only under `prefers-reduced-motion: no-preference`. Reduced motion shows the final state with transitions off.
- Hover on a route tile brightens its rule to foil. No bounce.

## Iconography
- The sun medallion and the three coins are original engravings (no lettering). Foil nicks and the diamond are inline SVG in `action-foil`.
- Seal: the sun medallion on the opening plate, again small on the ledger plate and at the close. Not a wedge.
- Coins: bird for the desk, hound for the room, wave for the ledger. Each sits on a conic sunburst.
- Crescent: one silver moon, at the four corners of the opening and the four corners of the black plate. Diamond is the small foil mark beside a rule.

## Content
- Sentence case in prose. Headlines are uppercase by the display style.
- Buttons: “Open a desk”, “Voice”, “Picture”, “Menu”.
- Fictional brand. Contact `desk@quoin.example`. Footer says “Sample template”.
- No lorem. No claim that a server received the note; the CTA is a mailto.

## Ban list
- The default UI grotesque as display. Purple gradients. Emoji icons.
- A second row of three equal cards. Capsule buttons. Soft shadow on every sheet.
- The reference product name, its companion name, designer handles, studio credits, a sun-faced rider, and the reference slogan.
- Real trademarks. Scraped media.

## Accessibility
- Metal on panel and ink on paper both clear. Foil is not used as small text on paper except the diamond (graphic).
- Visible focus. Touch targets ≥ 44px.
- Reduced motion honored. Mode group exposes `aria-pressed`. Chart plot is `aria-hidden`.
