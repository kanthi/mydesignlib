# DESIGN — Serein

## Overview
- Audience: people who want a four-step morning for skin, and will not keep a drawer of twelve bottles.
- Single CTA: Explore collection — the outline pill. It opens Collection 01. The same verb returns at the close. Mail is hello@serein.example.
- Emotion: a dark room, one face, one flower, type that barely raises its voice.
- Create this feeling through:
  - The page ground is `surface-field`. Cream type sits on the photograph. No second theme, no light marketing page below the hero.
  - The only filled action is the pill on hover (`text-cream` fill, `surface-field` label). At rest the pill is a hairline.
  - Cormorant Garamond for the wordmark, the headline, and ritual names. The second line of the headline is italic.
  - Hanken Grotesk for nav, the left stack, the pill, and body. Small, tracked, quiet.
  - One photograph carries the hero. Lower sections are rules and rows, not a grid of cards.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Quiet collection
- Signature element: a full-bleed face with a soft daisy at the left and a leaf shadow on the cheek, a four-line stack, an italic second phrase, and a bottom bar of outline pill, circle, hairline, and “Collection 01 — 2026”.

## Plan gate
- Subject is a morning skin house. The face, the flower, and the collection bar do not transfer onto a generic startup page.
- The brief asks for this near-black field and cream serif. The pill is an outline, not a terracotta fill. No acid green. No purple.

## Colors (semantic)
- surface-field: `#0C0A09` — page ground, scrim, footer, hover label on the pill. Not a card color on a light page.
- surface-raise: `#161311` — expanded ritual and journal panels only.
- text-cream: `#F4EFE6` — headlines, nav, pill stroke, wordmark.
- text-muted: `#C9BFB2` — stack, aside, meta, collection label. Not for the headline.
- line: `rgba(244, 239, 230, 0.35)` — hairline, pill stroke, circle stroke, row rules.
- line-strong: `rgba(244, 239, 230, 0.7)` — focus and the active ritual rule.
- status-danger: `#C45A4A` — form errors only. This page has no form.

## Typography
- Display: Cormorant Garamond 500. Wordmark 13px, tracking 0.32em, uppercase. Headline `clamp(3.1rem, 5.5vw, 5.35rem)`, leading 0.92, tracking -0.02em. Second phrase italic 500, same size.
- Ritual names: Cormorant Garamond 500, `clamp(1.8rem, 3vw, 2.6rem)`, leading 1.
- Body: Hanken Grotesk 400, 17px / 1.6, measure 36rem.
- Label: Hanken Grotesk 500, 11px, tracking 0.18em, uppercase. Nav is 14px, tracking 0.01em, sentence case, weight 400.
- Numbers (01, 2026) use tabular figures.

## Space
- Hero inset: 28px 40px 26px on expanded. The wordmark, stack, headline, and pill share one left edge.
- section-y: `clamp(4.5rem, 9vw, 7rem)`
- wrap: `min(1120px, calc(100% - 80px))` on expanded; 20px margin on compact.
- Gap steps: 8, 12, 16, 24, 40.

## Layout and responsiveness
### Compact (< 760px)
- Hero stays `100svh`. Nav links hide. The circle opens a full-screen list. The left stack sits under the header, the headline under it, the aside under the headline (left aligned, not over the mouth). The bottom bar wraps: pill and circle, then the collection label. Touch targets are at least 44px.
### Medium (760–1023px)
- Nav links return. Aside stays at the lower right if the face has room; otherwise it stacks under the headline. Ritual rows stay one line of name plus a second line of detail.
### Expanded (≥ 1024px)
- Hero is a single screen: header, stack at mid-left, headline lower left, aside lower right, bar along the bottom. Ritual rows are one horizontal rule each. Still life is one wide photograph. Journal is a list, not a row of cards.

## Shape & elevation
- Radius: 0 on rows and panels. Pill and circles use `radius-pill`.
- No drop shadows. Depth is the photograph and the hairline.

## Components
### Pill
- Rest: transparent, 1px `line`, label `text-cream`, Hanken label, height 44px, padding 0 22px.
- Hover / active: fill `text-cream`, label `surface-field`.
- Focus: 2px `line-strong` offset 3px.
- One pill per band. The close repeats the same label.
### Circle
- 44px, 1px `line`, transparent. Hover fills `text-cream` and inverts the icon.
- Header circle opens the note (mail + the four lines). Hero circle moves to the collection.
### Nav
- Sentence case, cream, gap 28px. Hover: opacity 0.65. Current section: a 1px underline in `text-cream`.
### Ritual row
- Anatomy: tabular number, serif name, one muted line, a trailing “Open”.
- Hairline `line` between rows. Hover or open: name turns italic, rule becomes `line-strong`, panel `surface-raise` shows two sentences.
- Not three equal cards. Four rows, full width.
### Journal row
- Date, serif title, one sentence. Same rule language as rituals. Not a card grid.

## Motion
- Content is visible without animation.
- Inside `prefers-reduced-motion: no-preference` only: the hero photograph drifts (scale 1.04 over 18s), the pill and circles color over 200ms, an open row reveals its panel over 240ms, Lenis smooths wheel scroll.
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`. Do not fade the headline or the pill in from opacity 0.

## Iconography
- Inline SVG, 1px stroke, currentColor. The header circle holds a small plus. The hero circle holds a down stroke. No emoji. No mixed filled icons.

## Content
- Sentence case in prose. The pill and the stack are uppercase through CSS.
- Headline is “Care for a quieter morning.” The second phrase is the italic.
- Stack words: Quiet, Light, Leaf, Skin.
- Fictional house only. Contact hello@serein.example. Footer says Sample template.

## Ban list
- The default UI grotesque as display. Purple gradients. Acid green buttons. Three equal cards. A light generic page under a dark hero. The reference product name, the designer handle, and marketplace URLs. Words painted into photographs. A giant wordmark across the face.

## Accessibility
- Cream on the field and on the darkened left of the photograph. A left and bottom scrim keeps the headline readable if the crop shifts.
- Visible focus on the pill, circles, nav, and rows.
- Tap targets ≥ 44px on compact.
- Reduced motion leaves the photograph still and the rows open without a height animation.
