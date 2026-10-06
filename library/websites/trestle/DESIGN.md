# DESIGN — Trestle

## Overview
- Audience: a small team that already has tools on the desk and wants the next page, not another suite.
- Single CTA: “Start free” → `mailto:hello@trestle.example`. Header “Get started” and pricing use the same mailbox. “Book a desk” uses subject `Book a desk`.
- Emotion: a quiet night desk, ruled and exact.
- Create this feeling through:
  - `surface-page` full bleed; no second theme, no purple, no glow other than a white top-center wash.
  - Hairline `border-default` rails inset by `inset-x`. Radius is always `radius-none`.
  - One icy control: `action-ice` on “Get started” and focus only. Never a full-bleed wash.
  - Display is Geist at `text-display`, tracking `-0.055em`, two colors (`text-primary` then `text-quiet`).
  - Signature frame: 13px dot grid, hollow corner squares, dashed badge with corner studs.

## Source of truth
- This file + CSS `:root` in `index.html`. If they diverge, prefer the code and fix this file.

## Aesthetic commitment
- Name: Ruled night desk.
- Signature: the hero frame — dot grid, top glow, edge vignette, hollow 6px corner squares, dashed introduction badge with fading side rules.
- Uniqueness: not a generic centered SaaS hero. The memorable device is the registration frame plus the ruled trust/hatch/table rail. Zero radius is required by the brief (not a free broadsheet default).

## Colors (semantic)
- `surface-page`: #1A1B1E — page, frame, panels, footer. Not a raised card fill.
- `surface-secondary`: #38393D — “Book a desk” only.
- `text-primary`: #DCDCDF — headline line 1, titles.
- `text-nav`: #D6D7DA — header links.
- `text-secondary`: #C6C7CB — badge, lede, row sentences.
- `text-quiet`: #8E8F94 — headline line 2.
- `text-logo`: #8D8E92 — trust line and fictional wordmarks.
- `text-on-action`: #141518 — type on white and on `action-ice`.
- `text-on-secondary`: #E8E8EA — type on `surface-secondary`.
- `border-default`: #2A2B2F — rails, rules, hatch strokes.
- `border-badge`: #3A3C42 — dashed badge.
- `border-strong`: #5A5B60 — secondary button edge.
- `action-primary`: #FFFFFF — “Start free” only (hero and pricing).
- `action-ice`: #C9E6F2 — “Get started” and focus outline. Not a background, not a link color.
- `mark`: #E7E7E4 — header cluster only.
- Usage: ice is one header button plus focus. White is the verb button. Do not tint the page blue. Do not invent status reds or purples.

## Typography
- Display and body: Geist, then Helvetica Neue, sans-serif. Never Inter.
- Wordmark: 28px / 600 / tracking -0.04em / `text-primary`. No TM.
- Nav and buttons: 15px / 500.
- Badge: 13px / 500 / uppercase / tracking 0.08em / `text-secondary`.
- `text-display`: clamp(2.5rem, 5vw, 5rem) / 500 / line-height 0.98 / tracking -0.055em. About 80px at 1600px wide.
- Lede: 20px / 400 / line-height 1.45 / `text-secondary` / measure 720px.
- Row title: 22px / 500 / `text-primary`. Row sentence: 16px / 400 / `text-secondary`.
- Price name: 20px / 500. Price figure: 48px / 500 / tracking -0.04em. “/mo”: 18px / `text-quiet`.
- Logo wordmarks: 20px / 500 / `text-logo`. Trust: 15px / 400 / `text-logo`.
- Footer: 14px / 400 / `text-secondary`.

## Space
- `inset-x`: 64px expanded, 16px compact. Header padding uses the same inset.
- Header height: 82px. Hero frame min-height: 640px expanded. Logo row: 75px. Hatch band: 20px.
- Stack in the frame: badge, 28px, headline, 20px, lede, 28px, buttons. Gap between buttons: 12px.
- Table row padding: 28px 32px. Pricing panel padding: 32px. Button padding inline: 18px.
- Do not add outer page max-width; the rail is the measure.

## Layout and responsiveness
### Compact (≤720px)
- Single column. `inset-x` becomes 16px. Header links hide behind a square “Menu” control; the list drops under the header as stacked rules, not a floating pill.
- Frame min-height drops to auto; content stays centered with 48px block padding. Headline uses the clamp. Badge side rules hide; badge may wrap.
- CTAs row-wrap; each stays ≥44px tall. Logo row scrolls sideways inside the rail (no wrap onto a second ruled line). Table becomes index+title, sentence under. Pricing panels stack; the second gets a top rule instead of a left rule.
### Medium (721–1023px)
- Same rail and header as expanded if the four links fit; otherwise the compact menu. Frame stays one column. Pricing stays two columns until 720px.
### Expanded (≥1024px)
- Header is a three-zone row: mark + wordmark, centered links, ice button. Frame, logo row, hatch, table, pricing, and footer share one vertical rail. A 1600×1000 view must include the header, the badge, both headline lines, and both frame buttons.

## Shape & elevation
- `radius-none`: 0 on every control, badge, panel, and input. No pills, no softened menus.
- Shadow: none. Depth is the dot grid, a white radial glow at the top center of the frame, and a vignette toward the frame edges.
- Hollow corner marks: 6×6, 1px `text-quiet` stroke, centered on each frame corner.
- Badge studs: 3×3 solid `mark` squares, centered on the dashed box corners.

## Components
### Buttons
- Ice (`action-ice`, `text-on-action`, height 40px desktop / 44px compact): “Get started” only. Hover: #D7F0F8. Focus: 2px `action-ice` outline, offset 2px. No arrow.
- Primary (`action-primary`, `text-on-action`, height 44px): “Start free” plus a 14px right arrow. Hover: #E6E6E4.
- Secondary (`surface-secondary`, `border-strong`, `text-on-secondary`, height 44px): “Book a desk” plus the same arrow. Hover: #45464B.
- No disabled control in this page. No destructive button. Never `transition: all`. Color hover only, `dur` 160ms.
### Nav
- Expanded: inline links, `text-nav`, gap 28px. Hover and current: `text-primary`. Focus: ice outline.
- Compact: “Menu” / “Close” square button, `border-strong` edge, `text-primary`. Panel is `surface-page` with `border-default` rules.
### Hero frame
- Vertical borders only. Dot grid: white at 7% opacity, 13px. Content centered. Not a card.
### Trust row
- Full border, 75px, same inset. First cell 220px, two lines, right rule. Then Calder, Hempstead, Marlow, Pell, Ostler: one stroke icon + wordmark each, split by 1px rules. A short right-edge fade into `surface-page` is allowed; names stay readable.
### Hatch
- 20px band, side borders, repeating -45° `border-default` lines. Same motif returns on the footer. Not a section background.
### Method table
- Three ruled rows, not cards: index (`text-quiet`), title, one sentence. Rows: The brief, The draft, The handoff.
### Pricing
- Two square-corner panels, equal columns, shared borders. “Bench” $0. “Room” $24/mo. Each has one primary “Start free”. No checklists, no third tier.
### Footer
- `surface-page`, hatch, then “Trestle · Sample template · hello@trestle.example”.

## Motion
- Purpose: hover color and menu open only. No entrance choreography.
- `dur`: 160ms. `ease`: cubic-bezier(0.22, 1, 0.36, 1).
- `prefers-reduced-motion`: no transition and no animation.

## Iconography
- Inline SVG only. Header mark: original 3×3 mix of small filled squares and circles in `mark`. Not a letter, knot, or known logo.
- Arrows and company marks: 1.5px stroke, square caps, `currentColor`. Sizes 14 (arrow) and 18 (logo).
- No emoji, no icon font, no filled/outline mix inside one row.

## Content
- Sentence case. Buttons are verbs. Badge is the one uppercase line: “INTRODUCING TRESTLE 2, A QUIETER WAY TO WORK”.
- Fictional only. Do not use the reference product name, its partner wordmarks, or real product trademarks.
- Contact is hello@trestle.example. Footer includes the words “Sample template”.

## Ban list
- Inter, Roboto, purple, gradient text, emoji icons, radius above 0, pills, `transition: all`.
- Three equal icon cards, scraped media, stock photos, trademark lockups, TM on the wordmark.
- Ice or white as a page fill. Colored glow. Box shadows on panels.

## Accessibility
- `text-primary` and `text-secondary` on `surface-page` stay above 4.5:1. `text-quiet` is for the large second line and short indexes.
- Focus visible: 2px `action-ice` outline, offset 2px, on links, buttons, and summary controls.
- Touch height ≥44px for menu, frame CTAs, and compact header actions.
- Menu button exposes `aria-expanded` and `aria-controls`. Reduced motion is honored.
