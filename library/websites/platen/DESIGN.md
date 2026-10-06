# DESIGN — Platen

## Overview
- Audience: people who ship interface kits and want the specimens, not a pitch deck.
- Single CTA: Open the kit — mailto hello@platen.example, below the reel. The first screen has no button.
- Emotion: a black room, one glass card in the light, the neighbors waiting.
- Create this feeling through:
  - The page is `surface-field`. Nothing cream or purple behind the reel.
  - The center card is full height. Neighbors peek, slightly dimmer, same radius.
  - Instrument Sans only. Weights 500 and 650. No second family.
  - Green light lives on one card. The heart rim is the only other glow.
  - Motion is the reel sliding. Content is visible before it moves.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Glass reel
- Signature element: a square black stage, “Crafted by humans” above a sliding stack of glass cards, a white pill wordmark below.

## Plan gate
- Subject is a hand-built interface kit. The reel does not transfer onto a generic startup page.
- Not a light SaaS hero. Not three equal cards. The green edge is one specimen, not an acid page wash.

## Colors (semantic)
- surface-field: `#000000` — page, stage, footer.
- surface-frost: a pale blue-lilac glass fill — the type, parts, and check cards.
- surface-cream: `#F4F1EA` — the notes card only.
- surface-ink: `#141416` — the mode card and the heart card.
- text-on-dark: `#FFFFFF` — headline, wordmark, type on ink cards.
- text-on-light: `#1C1C1E` — type on frost and cream.
- text-muted: `#8E8E93` — secondary lines on frost.
- edge-green: `#3DFF8A` — the paint card rim and its number. Not a button fill.
- status-amber: `#E2A23A` — processing dots only.
- status-danger: `#C45A4A` — unused. No form.

## Typography
- Display and body: Instrument Sans.
- Headline: 650, `clamp(1.7rem, 2.5vw, 2.2rem)`, tracking -0.03em, centered.
- Card title: 600, `clamp(1.45rem, 2vw, 1.85rem)`, tracking -0.03em, leading 1.15.
- Label: 500, 11px, tracking 0.08em.
- The big paint figure: 650, `clamp(4.5rem, 8vw, 6.5rem)`, tabular nums.

## Space
- Stage is `100vh`, padding 28px 0 26px. Headline, reel, wordmark are the three rows.
- Card radius 28px. Gap between cards 22px. Card width `min(440px, 74vw)`.
- Below the fold, section-y `clamp(4rem, 8vw, 6rem)`, wrap `min(1080px, calc(100% - 48px))`.

## Layout and responsiveness
### Compact (< 760px)
- One card nearly full width. Neighbors barely peek. Headline and wordmark stay. The set below stacks.
### Expanded (≥ 760px)
- Three cards in view: center full, left and right cut off by the viewport. No arrows on the first screen.

## Shape & elevation
- Cards 28px. Pills and the wordmark mark are full pills. No drop shadow on the page. The green card and the heart card carry their own inner glow.

## Components
### Reel card
- Shared: radius 28px, padding 32px 30px, height 100% of the reel.
- Frost, cream, ink, and green are variants. Do not mix a fifth fill.
- Click a neighbor to bring it center. Keys Left and Right do the same.
### Paint figure
- Cycles 0.2s First paint, 0.4s Largest paint, 0.1s Idle time while that card is centered.
### Language tabs
- A black pill. One label underlined. Click moves the underline.
### Mode switch
- A moon and a blue pill. Click flips that card between ink and frost.
### Wordmark
- White stadium mark plus “platen” in 650, lowercase. Links to the set.

## Motion
- Visible without animation.
- Inside `prefers-reduced-motion: no-preference`: the track slides 700ms, the paint number swaps, a sheen moves across the glass letter, the reel advances every 2.4s unless hovered or focused.
- Ease `cubic-bezier(0.22, 1, 0.36, 1)`.

## Iconography
- Inline SVG, 1.5px stroke, currentColor. The glass letter is a clipped glyph, not a logo file.

## Content
- Headline: Crafted by humans.
- Do not name the reference kit. Contact hello@platen.example. Footer: Sample template.

## Ban list
- The default UI grotesque. Purple page washes. Three equal marketing cards. Real kit names, studio names, and marketplace URLs. Words painted into photographs. Acid green as a page fill.

## Accessibility
- The reel is a region with a live polite count. Buttons and tabs are real buttons.
- Focus visible in white on black, ink on frost.
- Reduced motion: no autoplay, the centered card stays put.
