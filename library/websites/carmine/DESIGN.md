# DESIGN — Carmine

## Overview
- Audience: people who already run a sales floor and want an agent that stays quiet.
- Primary CTA: “Get started” and “Sign up” both use `mailto:hello@carmine.example`. “Learn more” only goes to `#desk`.
- Emotion: a hushed second room beside a busy desk.
- Create this feeling through:
  - The first screen is full-bleed `--burgundy`, about `100vh` at 1600×1000, with cream type and no second hue.
  - Lora carries the headline and the cream lede. Albert Sans carries UI. The headline is left-aligned, not centered.
  - One solid pill per action. The two hero panels use 22px radius. Desk steps are numbered rows, never cards.
  - Hover fills run only inside `prefers-reduced-motion: no-preference`, for 180ms. Content is visible with no script.

## Source of truth
- This file and `:root` in `index.html`. If they diverge, change the page to match this file.

## Aesthetic commitment
- Name: Burgundy desk editorial.
- Signature: white desk chrome beside the black-and-white profile, with one paper card overlapping the photo’s lower left.

## Colors
- `--burgundy` `#3E0D1C` — first screen, footer, filled buttons on cream. Not body text on cream.
- `--burgundy-deep` `#2A0813` — hover fill for burgundy buttons. Not a page fill.
- `--cream` `#F3EEE6` — page below the fold, pills on burgundy, sidebar inside the chrome.
- `--ink` `#1A1214` — text on cream and on `--paper`.
- `--muted` `#8A7C76` — third avatar, and the caption “How the desk opens” at 1.2rem / 600 only. Contrast on cream is too low for smaller text.
- `--line` `rgba(243,238,230,.35)` — hairlines and the badge stroke on burgundy. Invisible on cream; do not use it there.
- `--paper` `#FFFFFF` — desk chrome and the overlapping card only.
- `--rule` `rgba(26,18,20,.16)` — hairlines on cream. Ink at low opacity, not a new hue.
- Quiet text on cream, when needed: `color-mix(in srgb, var(--ink) 70%, var(--cream))`.

## Typography
- Display: Lora 500 and 600. Italic 500 is the single italic phrase in the cream lede, and nowhere else.
- UI: Albert Sans 400, 500, 600.
- Wordmark: Lora 600.
- Hero headline: `clamp(2.05rem, 3.1vw, 3.2rem)`, weight 500, leading 1.05. One line at 1600px wide.
- Lede: `clamp(1.65rem, 2.35vw, 2.3rem)`, weight 500, leading 1.28, measure 36rem.
- Step title: 1.45rem, Lora 600, leading 1.2.
- Body: 1rem, Albert Sans 400, leading 1.5.
- UI label: 0.78rem, Albert Sans 500, tracking 0.04em.
- Hero subcopy: one line, Albert Sans 400, 1rem, cream.

## Space
- Stage inset: horizontal `max(20px, (100% - 1480px) / 2)`, vertical `clamp(12px, 1.6vh, 18px)`.
- Cream section padding: `clamp(4.25rem, 8vw, 6.5rem)` 0.
- Gaps: 8, 12, 16, 24, 48.
- Cream column: `min(1120px, calc(100% - 40px))`.

## Layout and responsiveness
### Expanded (≥ 861px), including a 1600×1000 window
- `.stage` is `height: 100vh` and a column: nav, copy, panels, trust strip. Panels are `flex: 1` and `min-height: 0`, so the burgundy block stays about one viewport and the panels take the free space.
- Copy is left. On one row: cream “Get started”, then “4.6 · from the floor” with three CSS circles.
- Panels: `minmax(0, 1.2fr)` and `minmax(0, 0.8fr)`, gap 14px, radius 22px.
- Cream split: two columns, aligned to the start. Left is a short line, then the scaled desk, then the caption. Right is the lede and the burgundy pill.

### Compact (≤ 860px)
- Stage height becomes `auto`. Stacking may run past one viewport; that is correct.
- Panels stack. The portrait box is `aspect-ratio: 4 / 5`. The image stays `object-fit: cover`.
- Nav links are `display: none` until the Menu button sets `.is-open`. “Sign up” stays in the bar.
- The split stacks in the same order: line, desk, caption, lede, pill.

## Shape and elevation
- Pills 999px. Panels and photo 22px. Overlap card 16px. Sidebar chip 8px.
- No shadow on rows or on the chrome. One shadow, only under the overlap card: `0 12px 28px rgba(26,18,20,.2)`.

## Components
### Mark
- Two offset tiles, 12px, 1.5px stroke. Upper tile at the top left, lower tile at the bottom right. Cream stroke on burgundy, burgundy stroke on cream. Not a cross and not a close glyph.

### Buttons
- Cream pill: background `--cream`, text `--burgundy`, Albert Sans 600, min-height 44px, padding 0 18px.
- Burgundy pill: background `--burgundy`, text `--cream`. “Learn more” and the closing “Get started”.
- Hover, only in `prefers-reduced-motion: no-preference`: cream pill fills `--paper`; burgundy pill fills `--burgundy-deep`. 180ms. Transition properties are `background-color` and `color` only.
- Focus, always: 2px outline, offset 3px. Cream outline on burgundy surfaces, burgundy outline on cream.
- No disabled state on this page.

### Nav
- Mark + Carmine, then Home, Features, Notes, Studies, Desk, then Sign up.
- Links: Albert Sans 500, cream. Compact menu panel uses `--burgundy-deep`.
- Menu button is hidden from 861px up. It toggles `aria-expanded` and the label Menu / Close.

### Badge
- “Carmine keeps a second room”. Unfilled pill, 1px `--line`, Albert Sans 500, 0.75rem.

### Desk chrome
- `--paper` field, `--cream` sidebar. Name “Carmine”. Items: Assistant (selected), Desk, Orders, People. Selected: `--paper` chip and `--burgundy` text.
- Stats, in this order: Orders 18,420 · Views 96,110 · Revenue $84,200.
- Sparkline: one SVG polyline, stroke `--burgundy`, width 1.5, no fill.
- Operator: “Nia Pell” and a CSS circle. No photograph in the chrome.
- The cream column repeats this same HTML, scaled with `transform: scale(0.62)` from the top left, clipped by the frame. It is not an image. Caption: “How the desk opens”.

### Portrait
- `figure { margin: 0 }`. Image fills the panel with `object-fit: cover`.
- Paper card, lower left, inside the radius: “Sell with a shorter list” and three one-line links.

### Trust strip
- “Trusted by a thousand desks”, then text-only wordmarks: Harl, Pinder, Moss, Quillan, Bex.

### Rows
- Desk: `01` Listen, `02` Sort, `03` Draft, `04` Hand off. Number, Lora title, one sentence. Hairline `--rule`. No fill, no icon tile.
- Notes and studies use the same hairline rows, not cards. Studies lead with the wordmark, not a number.

### Footer
- Background `--burgundy`, text `--cream`. Wordmark, the same five links, `hello@carmine.example`, and the line “Sample template”.

## Motion
- Hover fill only, 180ms, `ease`, and only when motion is allowed.
- `scroll-behavior: smooth` lives in that same motion query.
- No opacity-0 intro, no scroll reveal, no loop.
- Reduced motion: no transitions, no smooth scroll, hover does not change the fill.

## Iconography
- The mark, the sparkline, and three avatar circles. No emoji. No second icon style.

## Content
- Sentence case. Hero subcopy is one line. The lede has one italic phrase.
- Do not describe the edges or surface of the photograph.
- Contact is `hello@carmine.example` only.
- No funding claim. Names on the page: Carmine, Nia Pell, Ivo Ren, Sera Holt, Cal Dunn, Harl, Pinder, Moss, Quillan, Bex.

## Ban list
- No purple. No `transition: all`. No face other than Lora and Albert Sans.
- No three equal feature cards. No stock faces. No scraped media.
- Do not name outside products, marketplaces, or designer handles.

## Accessibility
- Cream on burgundy, and ink on paper, for body text.
- `--muted` stays off type smaller than the caption rule above.
- Buttons and compact nav links are at least 44px tall.
- Portrait alt names Nia Pell and does not narrate the frame.
- Menu button has `aria-expanded` and `aria-controls="site-nav"`.
