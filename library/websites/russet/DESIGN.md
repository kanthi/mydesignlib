# DESIGN — Russet

## Overview
- Audience: households who want one plan, one metal card, and a desk that answers.
- Single CTA: Open Russet free (same verb at the footer: Join Russet).
- Emotion: a quieter month.
- Create this feeling through:
  - Page is warm cream; cocoa is a full-bleed band, never a gradient wash.
  - One accent word per headline in `text-display-soft`, same family, lighter than ink.
  - Soft elevation only on floating ledger cards and the question card.
  - The metal card is a photograph; every number, chart, and label is HTML.
  - Dotted fields sit behind the card and beside the questions, not on type.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer the CSS if they diverge.

## Aesthetic commitment
- Name: Cocoa ledger
- Signature element: a hand-held blank metal card over a dotted field, ledger widgets tucked under the wrist, and a chamfered tongue where the cocoa band meets the cream footer.
- Uniqueness: the brief is this warm cocoa collage. Type is a grotesque, not a serif-on-cream editorial default. The signature is the card-plus-widgets stage, not a centered slogan alone.

## Colors (semantic)
- surface-page: #FDF8F4 — page, footer, hero field
- surface-card: #FFFCFA — question card, status card
- surface-sand: #F3E7DE — transaction and map cards
- surface-cocoa: #864D30 — partner rail, quote, procedures, questions
- text-primary: #3C2F28 — ink on cream
- text-secondary: #6E5C52 — support copy on cream
- text-display-soft: #8E6F62 — the second beat of a headline only, display sizes
- text-on-cocoa: #FDF8F4 — type on cocoa
- text-on-cocoa-soft: #F6E6DA — support on cocoa
- border-default: #E6D5C8 — hairlines on cream
- border-on-cocoa: rgba(253,248,244,0.22)
- action-primary: #6B4634 — the one filled action
- action-primary-hover: #5A3A2C
- on-action: #FDF8F4
- status-danger: #9C3B2E — form errors only
- Usage: cocoa never tints the page background. Danger never styles stars, charts, or decoration. Stars and chart marks use cocoa.

## Typography
- Display: Familjen Grotesk — headlines, wordmark, giant footer, stats
- Body: Source Sans 3 — UI, paragraphs, nav
- Scale: display clamp(2.7rem, 5.4vw, 4.25rem) / 3xl clamp(2rem, 3.4vw, 2.85rem) / stat clamp(3rem, 5vw, 4.25rem) / xl 1.35rem / base 1.0625rem / sm 0.9375rem / xs 0.75rem
- Display: weight 500, leading 1.02, tracking -0.035em
- Body: leading 1.55, measure 38em on long copy
- Numbers: tabular-nums

## Space
- section-y: clamp(4.5rem, 8vw, 6.5rem)
- wrap: min(1120px, calc(100% - 2.5rem))
- wide: min(1180px, calc(100% - 2rem))
- gap: 8 / 12 / 16 / 24 / 40

## Layout and responsiveness
### Compact (< 720px)
- Single column. Nav keeps logo, Join, and Menu. Links move into a panel.
- Hero CTAs stack, primary last? No: primary stays first and full width.
- Hand sits in flow above a horizontal widget scroller.
- Partner rail scrolls sideways. Stats stack. Footer stacks. Tongue shortens.
### Medium (720–1023px)
- Widgets can stay a 2×2 grid. Quote stays one column. Partner rail scrolls.
### Expanded (≥ 1024px)
- Centered nav pill. Four widgets in one row under the card. Eight partner cells. Quote and ledger use the wide measure. Footer is two columns over the giant wordmark.

## Shape & elevation
- radius-card: 20px on ledger cards and the question card
- radius-control: 14px on tooltips and inputs
- radius-pill: 999px on nav, buttons, badges
- Tongue: cocoa band ends in a full-width tab with 36px chamfers; cream shows at the lower corners
- shadow-card: 0 18px 44px rgba(90, 52, 32, 0.12) — floating cards only

## Components
### Buttons
- Primary: bg `action-primary`, color `on-action`, radius `radius-pill`, label weight 600, min-height 44px
- States: hover `action-primary-hover`; focus-visible 2px ink offset 3px; disabled opacity 0.45
- Secondary: 1.5px `border-default`, transparent fill; hover border darkens to ink
- On cocoa, icon buttons use `border-on-cocoa` and cream focus
### Nav
- Desktop: logo left, pill center, account right. Home is the filled pill.
- Compact: Menu opens a cream panel; Escape and a second Menu press close it
### Ledger cards
- Sand or paper fill, radius-card, one shadow. Charts are inline SVG. Do not turn these into three equal marketing cards.
### Questions
- One white card on cocoa. One row open. Open control is a cocoa circle with a minus; closed is sand with a plus. Button is the full row target plus the circle.
### Quote
- One quote visible. Previous and next update the quote, the portrait, and the 01 / 05 counter. No autoplay.
### Join field
- Underline input, pill submit overlapping the line. Error uses `status-danger` and says what to type. Success says the sample sent nothing.

## Motion
- Purpose: enter the stage, then answer the control.
- duration: 220ms controls, 700ms reveals; ease cubic-bezier(0.22, 1, 0.36, 1)
- reveal: opacity + translateY 16px
- Lenis smooth scroll when motion is allowed
- reduced-motion: no Lenis, no transforms, accordion instant

## Iconography
- Inline SVG, 1.6 stroke, 18px default, 20px in nav pills
- No emoji. No trademark social marks. Footer channels are Notes, Wire, and Post.

## Content
- Sentence case. Buttons start with a verb.
- Fictional households, cities, and partners only. Contact is hello@russet.example.
- Sample forms say nothing was sent.

## Ban list
- Inter, Roboto, purple gradients, emoji icons, three equal feature cards as the page
- Real card networks, review-platform logos, bank logos, designer names, scraped photography
- Garbled text baked into images

## Accessibility
- Ink on cream and cream on cocoa for body copy
- Display-soft is for large type only
- Focus visible. Targets ≥ 44px. Reduced motion honored.
