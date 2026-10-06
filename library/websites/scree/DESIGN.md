# DESIGN — Scree

## Overview
- Audience: a person who runs one small shop and wants a quiet count of visits and sales.
- Single CTA: "Try it free" mailto hello@scree.example.
- Emotion: a paper-quiet board, not a growth dashboard.
- Create this feeling through:
  - The page is only `surface-page`. Ink is `text-primary`. The first headline line is `text-display-quiet`.
  - One black pill (`action-primary`, `radius-pill`). No second accent and no header rule.
  - The product board is the only elevated surface (`surface-board`, `radius-board`, `shadow-board`).
  - Geist, tracking −0.055em, line-height 1, two-tone headline.
  - Two lichen cliffs sit in front of the board and are cut by the hero’s left, right, and foot.

## Source of truth
- This file plus `:root` in `index.html`. If they diverge, prefer the code and report the conflict.

## Aesthetic commitment
- Name: Warm paper analytics.
- Signature: lichen boulders cropping a shop analytics board. Not a generic SaaS gradient hero.

## Colors (semantic)
- `surface-page` #F1EFEA — ground for the hero, sections, and footer. Not a second wash.
- `text-primary` #111111 — ink, wordmark, second headline line, pill fill, arrow.
- `text-muted` #6F6C67 — nav, eyebrows, method numbers, footer.
- `text-display-quiet` #BDBAB4 — first headline line only. Never body copy.
- `text-sub` #A8A59F — hero subtext only. Not small UI labels (too faint at 11px).
- `surface-board` #FFFFFF — the product card only.
- `surface-sidebar` linear-gradient(#9A9A97, #6F6F6C) — sidebar only; type on it is white.
- `action-primary` #111111 — the pill only. Hover is opacity 0.88, not a new hue.
- `action-on-primary` #FFFFFF — pill label and the icon well.
- `border-hairline` #D9D5CC — method rule, pricing split, table lines. Not a header border.
- `chart-search` #C8C4BC — pale 1px lines, Search 46%.
- `chart-window` #111111 — dense black lines, Window 31%.
- `chart-direct` #8A8780 — medium 1px lines, Direct 23%.
- `on-sidebar` #FFFFFF — sidebar type and the H mark ring.

Do not introduce purple #6366F1, indigo, acid green, or a terracotta accent. Do not paint the page white or near-black.

## Typography
- Family: "Geist", "Helvetica Neue", sans-serif. Not Inter.
- Wordmark: 700, lowercase "scree", tracking −0.08em, no icon, no period.
- Display: 72px, weight 600, line-height 1, tracking −0.055em. Quiet line, then ink line.
- Eyebrow: 13px, weight 500, uppercase, tracking 0.14em, `text-muted`.
- Hero sub: 17px, weight 400, `text-sub`, measure 540px, centered.
- Nav: 13px, weight 500, uppercase, tracking 0.08em.
- Section title: 32px, weight 600, tracking −0.04em, `text-primary`.
- Body: 17px / 1.5. Product UI: 11–13px. Big number: 40px / 600.

## Space
- Header 82px, padding-inline 48px (20px under 700px).
- Hero height 1000px from 1100px wide up, so a 1600×1000 frame shows headline, board top, and rocks.
- `section-y` 88px expanded, 56px compact. Wrap 1080px. Board 780px.
- Gaps: 4, 8, 12, 16, 24, 48.

## Layout and responsiveness
### Compact (<700px)
- One column, 20px margin. Headline clamps down and stacks.
- Links, English, and the pill move behind a Menu button (min 44px). Wordmark stays.
- Board: horizontal scroll with a 640px inner board. Under 560px, drop the sidebar and stack shop row, big number, stats, and chart.
- Rocks 34vw. Controls min-height 44px.
### Medium (700–1099px)
- Menu if the centered links do not fit. Board width min(780px, 100% − 48px), still cropped by the hero.
- Method stays stacked rows. Pricing stacks on the same rule.
### Expanded (≥1100px)
- Header is one row, no border: wordmark, centered links, English, pill.
- Copy is centered. Board is centered and runs under a 160px bottom fade.
- Method is three numbered rows on one hairline. Pricing is two offers, one pill.

## Shape and elevation
- `radius-board` 8px. `radius-pill` 999px. `radius-control` 6px for search and chips.
- `shadow-board`: 0 28px 70px rgba(17, 17, 17, 0.14). No other shadows.
- Fade: 160px, transparent to `surface-page`, above the board, below the rocks.
- Hero `overflow: hidden` cuts the rocks flat on the bottom edge.

## Components
### Wordmark
- "scree" links to #top. Color `text-primary`. No mark beside it.

### Primary pill
- Label exactly "Try it free". Destination mailto:hello@scree.example.
- Fill `action-primary`, type `action-on-primary`, height 36px (44px under 700px).
- Left well: white circle, black arrow pointing right.
- Hover: opacity 0.88 in 160ms. Focus-visible: 2px `text-primary` outline, offset 3px. Active: translateY(1px).

### Nav
- Features #features, How it works #method, Pricing #pricing, Customers #customers.
- Color `text-muted`; hover `text-primary`. Same focus ring.
- Compact: button "Menu", `aria-expanded`, controls `#site-nav`.

### Language
- 16px globe stroke plus "English". Button does not leave the page. Pressed state reveals "This sample is in English."

### Product board (#features)
- Sidebar 180px. Circle "H", then "Scree" and "Hollis Bakehouse". Search field. Overview (badge 2, current), Visitors, Sales, Goals with This week, This month, Campaigns, and Autumn loaf, Letter, Window card, then Reports.
- Main: avatar HB, plain text hollis.example, shop name, Live switch, chips "This month" and "28 Sep – 1 Oct".
- 9,640 "Visitors this month". Pills "↗ 14%" and "+1,180 visitors". "vs last month 8,460".
- $3,280 Sales, 214 Orders, 2.4% Visitors who buy.
- Chart "Where your visitors come from": barcode of equal-height 1–2px lines in three zones, Search 46% / Window 31% / Direct 23%.
- Table Mon 28 Sep through Thu 1 Oct; rows New visitors, Orders, Sales. Thursday is the heavy day.
- Live is a button. It toggles `aria-pressed` and the dot. Default pressed.

### Method rows
- One `border-hairline`. Rows 01 Hear the visit, 02 Count the sale, 03 Read the week. Number, title, one sentence. Not cards.

### Pricing
- Counter $0, one shop. Bakery $18/mo, goals and the week letter. One pill for the pair. No per-plan buttons.

### Quote
- No portrait. "The Thursday loaf sells out. Scree shows the morning that causes it." Then Hollis Bakehouse.

### Footer
- Scree · Sample template · hello@scree.example, then the four links at small size.

### Boulders
- `assets/boulder-left.png` enters from the left edge and the foot. `assets/boulder-right.png` enters from the right edge and the foot.
- Expanded: left 1127×702 at left −201px, bottom −360px; right 688×702 at right −92px, bottom −755px. Z-index above the board and the fade. Decorative, empty alt.

## Motion
- Board settles once: 280ms, cubic-bezier(0.22, 1, 0.36, 1), opacity and translateY(12px).
- Pill hover 160ms opacity. No other motion.
- `prefers-reduced-motion: reduce` removes animation and transition.
- Never `transition: all`.

## Iconography
- Inline SVG only: one globe, one arrow. Stroke about 1.5. No emoji, no icon font.

## Content
- Sentence case. The only CTA verb is "Try it free".
- Shop inside the specimen is Hollis Bakehouse. hollis.example is text, not a link.
- Contact is only hello@scree.example. No reference product names, the reference shop, designer names, or real logos.

## Ban list
- Inter, Roboto, or a purple gradient. Three equal feature cards. Emoji icons.
- Real company marks. A header border. A second shadow. A second CTA verb.
- `transition: all`. Scraped photography.

## Accessibility
- Ink on `surface-page` and white on the pill meet body contrast. Sidebar white on the given gray is the specified specimen; do not recolor it.
- `:focus-visible` outline 2px solid `text-primary`, offset 3px, including the pill.
- Touch targets at least 44px under 700px.
- Menu uses `aria-expanded`. Live uses `aria-pressed`. Rocks are `aria-hidden`.
