# DESIGN — Skein

## Overview
- Audience: people who run a floor (hire, pay, close) and need the route to stay readable after it grows.
- Single CTA: “Get started” → `mailto:hello@skein.example`. In-page: “Explore the floor” and “View the routes” → `#routes`.
- Emotion: dusk quiet, then a path you can point at.
- Create this feeling through:
  - Hero only uses `assets/bloom.jpg`. Everything below is `--surface-field`.
  - Cream type on a dark top veil. A paper instrument sits in the lower half.
  - One orange ring on the live node. No second accent and no tinted page wash.
  - EB Garamond for the promise. Karla for controls, rows, and sentences.
  - Routes are ruled rows, never equal cards.

## Source of truth
- This file, then `:root` in `index.html`. If they diverge, trust the CSS and fix this file.

## Aesthetic commitment
- Name: Dusk field with a paper instrument.
- Signature: the “Onboarding” window — five named nodes, thin curves, one orange ring, cursor label “good flow”.

## Colors
- `--surface-field` `#0C0C0E` — page under the hero, foot veil, close, footer. Not a card.
- `--surface-card` `#16161A` — compact nav panel only. Not the product window.
- `--text` `#F4F1EA` — headlines, nav, wordmarks on field or photo.
- `--muted` `#B7B2A8` — subcopy and meta on dark only. Never on `--paper`.
- `--line` `rgba(244,241,234,.28)` — pills, ghost border, route rules, footer rule. Dark surfaces only.
- `--paper` `#F7F6F3` — window, flow card, filled buttons.
- `--ink` `#141414` — text on paper, rail fill, bubble fill.
- `--muted-ink` `#5C5854` — small labels on paper. Never on the field.
- `--ring` `#E3944A` — live node ring only. Not a button, not a section.
- `--line-ink` `rgba(20,20,20,.14)` — node, field, and inspector edges on paper.

## Typography
- Display: EB Garamond 500 headlines, 600 wordmark. Italic 500 only for Dace, Yarrow, Kemp, Voss, Brindle.
- UI: Karla 400 body, 500 nav and labels, 700 filled buttons.
- Hero h1: `clamp(2rem, 3.7vw, 3.85rem)` / 1.04 / 500. Two lines at 1600px via a break after “work”.
- Section h2: `clamp(2rem, 3.2vw, 3.15rem)` / 1.12 / 500. Measure ≤ 16em.
- Route name: `2rem` / 1.1 / Garamond 600.
- Body: `1.05rem` / 1.55 / Karla 400.
- Label: `0.82rem` / 1.3 / Karla 500.
- Do not set headlines in Karla. Do not set buttons in Garamond.

## Space
- At 1600×1000 the hero is exactly `100vh` and does not scroll inside itself.
- Hero pad: `18px 36px 16px`. Rows: nav (~44px), copy (~250px), stage (rest), foot (~48px).
- The window is 448px tall, shrinks if the stage is shorter, and sits on the bottom of the stage so it lands in the lower half and clears the foot.
- Wrap: `min(1120px, calc(100% - 48px))`.
- Section pad: `104px 0`. Route row pad: `1.4rem 0`. Gaps: 8, 12, 16, 24, 48.

## Layout and responsiveness
### Expanded (≥800px)
- Nav: mark, links, then Login and Get started at the far end. One row, no wrap.
- Copy is centered. Window is centered, `min(1000px, 100%)` wide, and does not cover the foot.
- Foot is one row: “Powering routes across the floor” left; five wordmarks right.
- Why-split: 280px paper card, text column beside it, card vertically centered.
- Routes: number, name, sentence on one row. Hairline only.
### Compact (<800px)
- Hide Product, Use, Routes, Price, Notes until Menu. Login and Get started stay visible.
- Hero `height: auto; min-height: 100vh`. Photo still covers the whole hero.
- Window stacks: rail as a horizontal strip, canvas, then inspector.
- Why-split stacks, card first. Route sentence drops under the name. Still not a card.
- Foot stacks; wordmarks wrap.

## Shape and elevation
- Buttons and pills: radius `999px`. Window and flow card: `12px`. Nodes, inputs, bubble: `8–12px`.
- One shadow, window only: `0 30px 70px rgba(0,0,0,.38)`. Flow card has none.
- Route rows, rules, and the field have square corners.

## Components
### Mark
- Hexagon stroke plus a short route inside. Not a circle and not a letter.
### Buttons
- Paper: bg `--paper`, text `--ink`, Karla 700, min-height 44px, padding `0 18px`.
- Ghost: transparent, 1px `--line`, text `--text`, Karla 500. Login and Menu only.
- Hover is a color change: paper bg `#E4E0D6`; ghost bg `rgba(244,241,234,.10)`.
- Focus-visible: 2px solid `--text`, offset 3px.
- No second fill. No disabled state on this page.
### Nav
- Product `#onboarding`, Use `#why`, Routes `#routes`, Price `#price`, Notes `#notes`.
- Compact panel uses `--surface-card`, border `--line`, radius 12px. Button sets `aria-expanded`.
### Product window
- Paper figure titled “Onboarding”. Ink rail (Now, Hire, Pay, Close).
- Canvas order: Trigger, Check, Write, Wait, Send, joined by thin curves. Check wears `--ring`.
- Inspector title “Check” and two fields. Cursor label reads “good flow”.
- Built in HTML/CSS. Not an image.
### Flow card
- Small paper route with a bubble that reads “nice flow”.
### Route rows
- `01 Hire`, `02 Pay`, `03 Close`. One sentence each. No fill, no shadow.
### Close and footer
- Close repeats the hero headline and the mailto pill.
- Footer: mark, the same links, `hello@skein.example`, and the words “Sample template”.

## Motion
- Content is visible by default. No fade-in, no opacity 0, no load stagger.
- Only inside `prefers-reduced-motion: no-preference`:
  - Check’s ring pulses via `box-shadow` (~2.2s, ease-in-out). The label does not fade.
  - `.btn` transitions `background-color`, `color`, and `border-color` over 180ms.
- Never `transition: all`. Do not move buttons on hover.

## Iconography
- Inline SVG only: hex mark, star, cursor, curves. No emoji. No mixed icon sets.

## Content
- Sentence case. Button labels start with a verb.
- Talk about the floor, the route, the check, and the send. No hype, no filler names.
- The only address is `hello@skein.example`.
- Wordmarks, exact spelling: Dace, Yarrow, Kemp, Voss, Brindle.

## Photography
- `assets/bloom.jpg` on the hero, `object-fit: cover`, `object-position: center 55%`.
- Top veil: neutral dark, strong at the sky, gone before the lower half so the horizon stays.
- Bottom veil: darker only at the very bottom so the foot reads on the shrubs.
- Do not recolor the photo and do not add a purple or green overlay.

## Ban list
- Purple or violet chrome. Acid-green page fill. `transition: all`.
- Three equal cards, emoji, glass blur, traffic-light window dots.
- Real company names, marketplace credits, or copied marks.
- Headlines in a default neo-grotesque. Buttons in the display face.
- Copy or nodes that start hidden.

## Accessibility
- One h1. Section promises are h2. Inspector title is not a heading.
- Cream on field; ink on paper; `--muted-ink` for small type on paper.
- Focus-visible on links, buttons, and the two fields. Targets ≥44px.
- Photo is decorative (`alt=""`). The window is real text.
- Reduced motion: ring stays a solid 2px, buttons change color with no duration.
