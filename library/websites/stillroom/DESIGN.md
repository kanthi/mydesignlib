# DESIGN — Stillroom

## Overview
- Audience: leads of studios under thirty people who lose who can touch a project, and what changed.
- Single CTA: Open a room
- Emotion: a quiet workroom with the week on the wall.
- Create this feeling through:
  - Cool paper (`surface-page`) and ink type, not a warm cream field.
  - Lacquer (`accent-lacquer`) only on the active rule, the mark, and the painted bough. Never as a button fill or a page wash.
  - One charcoal product card (`surface-panel`) floating on the painting. No second shadow language.
  - Fraunces for the thesis and section titles. Outfit for UI, buttons, and the card.
  - Reasons are three text columns under the painting. The active one sits on a pale card with a lacquer underline. Not three picture cards.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Stillroom ledger
- Signature element: a crimson bough wash with a charcoal card that swaps between permissions, the audit, and the week.

## Plan gate
- Subject is a studio work room. The painting stage does not transfer onto a generic startup page.
- Not the cream + serif + terracotta cluster: paper is cool, the button is ink, lacquer is a dye note.
- Not near-black + acid green. Not a hairline broadsheet.

## Colors (semantic)
- surface-page: `#F7F6F4` — page ground.
- surface-active: `#F3F0EC` — the selected reason only.
- text-primary: `#1C1917` — headlines, buttons, card titles.
- text-secondary: `#6B6560` — support copy. Not for headlines.
- border-default: `#E6E2DC` — rules and quiet cards.
- action-primary: `#1C1917` — the one filled action. Hover `#000000`. Label on it is `#F7F6F4`.
- accent-lacquer: `#B4232C` — active underline, focus ring, mark. Not a background, not a link color for body copy.
- surface-panel: `#2C2A28` — the floating product card and the picture band.
- surface-panel-raised: `#3A3734` — rows and chips inside the panel.
- text-on-panel: `#F3EFEA` — primary type on the panel.
- text-on-panel-muted: `#B7B0A8` — meta on the panel.
- status-live: `#8EAE6A` — audit spine and “open” dots only.
- status-danger: `#8E2F2A` — form errors only.

## Typography
- Display: Fraunces — hero, section titles, wordmark. opsz, weight 560, leading 0.98, tracking -0.02em.
- Body: Outfit — 17px / 1.6, measure 38rem.
- Label: Outfit 500, 13px, tracking 0.04em. Sentence case, not all-caps, except the short kicker “Studio room”.
- Scale: the centered hero is one line, `clamp(2.5rem, 3.6vw, 3.15rem)`, so the painting and the columns share the first screen. Section titles use 3xl `clamp(2.2rem, 4vw, 3.15rem)`. xl 1.35rem / base 1.0625rem / sm 0.9375rem / xs 0.8125rem.
- Prices and day numbers use `font-variant-numeric: tabular-nums`.

## Space
- section-y: `clamp(4.75rem, 10vw, 7.5rem)`
- wrap: `min(1120px, calc(100% - 2.5rem))`
- Gap steps: 8, 12, 16, 24, 40, 64.
- The product card is the dense region. Marketing sections keep section-y.

## Layout and responsiveness
### Compact (< 720px)
- Single column. Page margin 20px. Nav links hide behind a menu button. The headline stays centered. The primary button in the menu is full width.
- The week grid inside the stage becomes a short list. Reason columns stack. Pricing stacks with House after Room.
### Medium (720–1023px)
- Headline stays centered. Stage keeps a wide ratio. Reason row is three columns if the titles fit, else stacked.
### Expanded (≥ 1024px)
- Hero is one centered serif line above a wide painting. Not a two-column thesis.
- Stage is full wrap width, about 548px tall. The permissions card stays near 400px and centered on the wash. The week card, when chosen, spans the stage.
- Three reason columns sit under the painting. The active one is a pale card with a lacquer underline. The other two stay plain.
- Picture band is a split: copy left, spotlight board right.

## Shape & elevation
- Product card radius 22px. Reason and price cards 16px. Chips 8px. Buttons pill.
- One shadow, on the floating card only: `0 28px 60px rgba(28, 25, 23, 0.18)`.
- No shadow on reason rows, price cards, or the nav.

## Components
### Buttons
- Primary: fill `action-primary`, label on `#F7F6F4`, radius pill, min height 44px, Outfit 500. One primary per view region.
- States: hover darkens to black and lifts 1px. Focus is a 2px `accent-lacquer` ring, offset 3px. Disabled is 40% opacity and does not submit.
- Ghost: transparent, ink text, 1px `border-default`. Hover fills `surface-active`. Never used to confirm a destructive act.
- There is no destructive button on this page.

### Nav
- Wordmark left, links center, primary right. Height 72px. Sticky. A 1px line appears after 8px of scroll.
- Compact: menu button `aria-expanded`, panel lists the same links plus the primary. Focus stays visible.

### Stage
- Painting is `assets/canopy.jpg`, object-fit cover, radius 28px. Mist, a dark temple roof on the left, red blossoms from the upper right.
- The permissions card is centered on the wash. Each row is a circular photo, a name, a role, and a gray access pill. Hovering a row shows a white Edit control. Edit switches that person’s access between full and limited. The middle row starts limited.
- The card crossfades when a reason is selected. Auto-advance pauses on hover or focus, and does not run under reduced motion.
- Permissions, audit, and week are HTML, not images.

### Reason row
- Three buttons, not cards with pictures. Active: `surface-active` plus a 2px lacquer rule under the copy.
- Icons are 20px stroke SVGs, one set, 1.5px stroke. No emoji.

### Picture board
- One spotlight panel on `surface-panel`. Not three equal tiles.

### Inputs
- In the “Open a room” dialog. Height 44px, label above, 16px radius. Error text uses `status-danger` under the field. Focus ring matches buttons.

### Pricing
- Two offers. House uses `surface-panel` and is the emphasized offer. Room stays on paper. No third equal tier.

## Motion
- Purpose: the card swap is the product. Scroll reveals are secondary.
- Duration 240ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`. Reveals move at most 16px.
- Petals drift only inside the stage. Reduced motion: no petals, no auto-advance, no Lenis, no GSAP from-tweens. Content stays visible.

## Iconography
- Inline SVG, 1.5px stroke, round caps, 20px in the reason row and 16px inside the panel.
- One style. Unfamiliar controls have labels (“Edit”, “Add a project”).

## Content
- Sentence case. Buttons start with a verb: “Open a room”, “See the week”.
- No lorem. No claim that a server received the form. Submit composes `mailto:rooms@stillroom.example`.
- Fictional studios only: Drewe Atelier, North glass, Harbor type.
- Do not name the source product, its people, or social handles.

## Ban list
- Inter, Roboto, purple gradients, emoji icons, three equal picture cards as the only pattern.
- Real trademarks and names taken from the source.
- Lacquer as a full-bleed background. Cream + terracotta as the system.
- Scraped photography. Ban notes do not appear in the page copy.

## Accessibility
- Ink on paper and bone on charcoal both clear WCAG AA for body text.
- Visible focus. Tap targets at least 44px.
- Stage reasons are buttons with `aria-pressed`. The dialog is a `dialog` with a name.
- Reduced motion is honored.
