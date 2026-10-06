# Parley

## Overview
Parley keeps a talk as notes, a summary, and the next step while people are still in the room. One light field, one landscape, one product window. Lower bands reuse the same tokens. They are not a second theme.

Create this feeling through:
- Ground is `surface-page`. Type is `ink`. The only filled dark surfaces are the ink pill and the founders card (`card-ink`).
- Display is Source Serif 4. UI is IBM Plex Sans. No other family.
- The mark is two thin rings, centers offset in both axes, stroke only. Not a figure-eight.
- The hero is `100vh`. At 1600×1000 the sky holds nav and headline, the hills hold the window, the grass holds six text wordmarks.
- Motion is only a nav underline, a 180ms button fill, and a slow ken burns — and only under `prefers-reduced-motion: no-preference`. Nothing starts hidden.

## Source of truth
This file plus `:root` in `index.html`. If they drift, these decisions win and the CSS is corrected.

## Color
Do not add hues. Alphas of `ink` and `surface-page` are allowed for scrims and shadows.

- `surface-page` `#F7F7F5` — page ground, cream badge, method band, footer, mobile list is `card` instead. Not a second gray.
- `ink` `#141414` — headlines, hero sub, nav, ink buttons, focus ring. Not for the wordmarks on the grass (the grass is dark).
- `muted` `#5E675F` — kickers, card sentences, step copy, footer links, the five bars. Not the hero sub: on the blue side of the sky it fails.
- `line` `#E4E4E0` — card borders, window rules, the one method rule, footer rule, white-pill edge.
- `card` `#FFFFFF` — window, light audience cards, white pill, close band, mobile link list.
- `card-ink` `#111111` — founders card only. Never the page ground.
- `on-ink` `#F7F7F5` — labels on ink buttons, all type on the founders card, the six wordmarks and their caption.

No violet and no second accent. The photograph supplies the green.

## Type
- Display: Source Serif 4, optical size on, weight 500–700. Hero headline `clamp(2.4rem, 4.4vw, 3.55rem)`, weight 600, line-height 1.05, tracking `-0.03em`. Audience headline `clamp(2.1rem, 4vw, 3.35rem)`.
- The single word “list” is real italic at the same weight.
- UI: IBM Plex Sans 400 body, 500 nav and buttons, 600 current sidebar row. Nav 0.92rem. Buttons 0.9rem. Body 1rem / 1.5.
- Wordmark “Parley”: Source Serif 4, 600, 1.35rem, tracking `-0.03em`.
- Step names, card titles, “Meeting reports”, “42 min”, and “180 rooms”: Source Serif 4, 600.
- `figure{margin:0}` — the hero photo must not inherit the browser figure gap.

## Space
- Hero padding `78px 40px 20px` on wide screens so the absolute nav (about 64px tall) clears the badge.
- Wide measure `min(1080px, calc(100% - 80px))`. Under 800px, 16px page padding.
- Steps: 8, 12, 16, 28, 40.
- Audience band 92px vertical. Steps 88px. Close 96px.

## Layout
### Wide, including a 1600×1000 window
Hero is `height: 100vh`, `overflow: hidden`, `position: relative`. In-flow grid rows: copy, `minmax(12px, 0.85fr)`, window, `minmax(10px, 0.45fr)`, wordmarks. Absolute layers (photo, top scrim, nav) are not grid items.

All of this stays on the first screen, in this order:
- Transparent nav on the sky. Ring mark and “Parley”. Links Product, Use, Notes, Security, Pricing. Text “Sign in”. Ink pill “Start free” to `mailto:hello@parley.example`.
- Centered cream badge “A meeting · Kept by 20 desks”. Serif headline “Record talks. Stay on track.” Sub “Notes, a summary, and the next step, taken while the room is still talking.” Ink pill “Get started” and white pill “Book a call”, both mailto.
- `assets/hills.jpg`, cover, `object-position: center 40%`. A soft top scrim of `surface-page` alphas. No heavy bottom veil — the grass is already dark.
- White window in the lower half, on the hills, about 880px wide so grass shows at the sides. Title “Parley”. Sidebar Home (current), Talks, Schedule, Notes. Main “Meeting reports”, “42 min”, the label “average”, five quiet bars. Top right of the window: “Ione Pell”.
- On the grass, along the bottom: caption “Kept by a hundred rooms”, then Wick, Orla, Nave, Pell, Sable, Quill.

### Under 800px
Links hide. A Menu button opens a `card` list (Close when open). Headline steps down with the clamp. Window remains; sidebar becomes a wrapping row. Wordmarks wrap. Cards stack and the founders card stays `card-ink`. Hero switches to `height: auto; min-height: 100vh` and drops the flexible rows so the window is not clipped.

### Below the fold
- `#use`, fill `card`. Kicker “For the people in the room”. Headline “A talk becomes a list you can run.” with “list” italic. Three cards, left aligned, not centered icon tiles.
- `#method`. One horizontal rule, then 01 Listen, 02 Mark, 03 Send. Not picture cards.
- `#pricing` close band, fill `card`. Same headline again and the “Get started” pill.
- `#security` footer on `surface-page`. Wordmark, links, `hello@parley.example`, “Sample template”, and one sentence that notes stay with the desks that were in the room.

Anchors: Product `#product` (the hero), Use `#use`, Notes `#method`, Security `#security`, Pricing `#pricing`.

## Shape
- Pills and badge: full radius. Window radius 14px. Cards 18px.
- Shadow only on the window: `0 18px 50px rgba(20, 20, 20, 0.16)`. Cards are flat, separated by `line`.
- Focus: 2px solid `ink`, offset 3px. Do not leave the default violet ring.

## Components
### Mark
Inline SVG. Two circles, `fill: none`, stroke about 1.3, viewBox 32. Second center sits down and to the right. Reuse in nav, window title, and footer.

### Nav
No bar fill. It is absolute in the hero, not fixed over the white bands (ink links would fail on white, and a filled bar would no longer be transparent). Underline is a 1px `scaleX` from the left, 180ms, hover and focus-visible, motion query only.

### Buttons
Rest: ink pill is fill `ink` / label `on-ink`; white pill is fill `card` / label `ink` / 1px `line`. Both keep a 1px border in the box (transparent on the ink pill) so hover does not shift layout. Hover swaps fills. Transition only `background-color`, `color`, and `border-color`, 180ms ease, and only when motion is allowed. Never `transition: all`.

### Menu
Under 800px, Product through Sign in move into the list. Start free stays in the bar, pushed to the end with the Menu button.

### Window
HTML, not an image. Title row: mark, “Parley”, and at the right a 28px initials ring “IP” plus “Ione Pell”. No portrait. Sidebar is text. Bars are five `muted` verticals, widths 7px, heights uneven, no axis and no legend.

### Cards
Desks and Studios: `card` fill, `ink` title, `muted` sentence and two short lines. Founders: `card-ink` fill, every line `on-ink`, the stat “180 rooms”, and an underlined “Read the note” to `#method`. No icons.

### Steps
`ol` with `border-top: 1px solid line` and three columns. Each item is a tabular number, a serif name, and one sentence. Under 800px the columns stack; the rule language stays; they do not become filled cards.

### Wordmarks
Source Serif 4, 600, color `on-ink`, a short text-shadow of `ink` so a light blade of grass cannot knock them out. No SVG logos.

## Motion
The painted page is the resting state.

Inside `prefers-reduced-motion: no-preference` only:
- Nav underline, `transform` 180ms ease.
- Button fill, 180ms ease.
- Hero `img` ken burns, scale 1 → 1.06, 36s, ease-in-out, alternate. Parent `overflow: hidden`. `object-position` stays `center 40%`.

Reduced motion: no animation and no timed transition. Hover may still swap a fill or show an instant underline.

## Voice
Rooms, desks, talks, lists. Concrete and short. The six names are fictional wordmarks, not a claimed customer list. The only address is `hello@parley.example`.

## Do not
- No second family, no violet, no gradient type, no icon-in-a-circle row.
- No `transition: all`. No entrance fade. No opacity-zero copy.
- No real company names, product names, or a designer credit.
- No image in place of the window. No sticky nav on the white bands.
