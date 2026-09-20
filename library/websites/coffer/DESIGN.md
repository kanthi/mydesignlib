# DESIGN — Coffer

## Overview
- Audience: people who want a physical card and rails that clear before the receipt prints — not a lecture on “digital banking.”
- Single CTA: Get started
- Emotion: the money is already in the box
- Create this feeling through:
  - A lime wash (`surface-lime` fading into `surface-page`) as the **hero field only**
  - Forest ink (`text-primary`) for type and the only filled button
  - One physical HTML/CSS card with an invented PAN, name, and expiry sitting in the wash
  - Tabular stats `70k / 56 / 24/7` stacked in the wash — never a three-equal-card row
  - Lexend at tight display tracking; no Inter, no purple

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Lime vault (wash-and-card)
- Signature element: lime wash + physical debit card in the hero
- Subject vernacular: a coffer is a locked box. Lime is fresh funds. The card is the object of trust.
- Uniqueness: the PAN-accurate card in a lime field with stacked throughput stats would not transplant to a generic SaaS. Default-cluster (black + acid green) is adjacent but **briefed** — lime is a wash, not a black-site accent.

## Colors (semantic)
- surface-page: `#FAFBF7` — site paper. Warm enough to sit under lime; not cream-editorial `#F4F1EA`.
- surface-paper: `#FFFFFF` — cards, nav pill, inputs.
- surface-lime: `#B8F06E` — hero wash, lime tiles, card face tint. **Never** a full-site fill after the hero.
- surface-forest: `#0F3D24` — primary button, dark bento, footer.
- text-primary / ink: `#0F3D24`
- text-secondary / muted: `#4A6B58`
- text-on-forest: `#EAF8C8`
- text-on-lime: `#0F3D24`
- border-default / line: `#D7E6CC`
- action-primary: `#0F3D24` — the only filled CTA
- on-action: `#F3FFD4`
- status-danger: `#B42318` — form errors only
- Usage:
  1. Lime is atmosphere and product chrome (card, 70k tile). Ink does the talking.
  2. Never a lime filled button on the lime wash (contrast dies).
  3. Do not add a second accent. No purple, no gold except the EMV chip.

## Typography
- Display + body: Lexend
- Card digits / stats: Lexend with `tabular-nums`
- Scale:
  - display: `clamp(2.6rem, 5.6vw, 4.15rem)` / 700 / 1.05 / −0.04em
  - 3xl: `clamp(1.85rem, 3.2vw, 2.55rem)` / 700 / 1.12 / −0.03em
  - xl: `1.25rem` / 600
  - base: `1.0125rem` / 400 / 1.6
  - sm: `0.875rem` / 500
  - xs: `0.72rem` / 600 / 0.12em uppercase labels
- Rules: H1 measure ≤ 16ch. Body ≤ 42ch. `text-wrap: balance` on display. Sentence case.

## Space
- section-y: `clamp(4.25rem, 9vw, 7rem)`
- wrap: `min(1180px, 100% - 2.5rem)`
- gap scale: 8 / 12 / 16 / 24 / 40 / 64
- Hero wash extends ~88vh then bleeds to paper. Logo strip sits on paper, not in the wash.

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hamburger; stats above the card; CTAs full-width; bento stacks; portrait full-bleed; blog cards scroll-snap
### Medium (~720–1080px)
- Hero: stats left, card right; bento 2-col; mission stacks under 900px
### Expanded (≥ ~1080px)
- Nav inline (wordmark · pill links · Contact). Hero 12-col: stats 4, spacer, card 5. Bento 6/6 then 4/4/4.

## Shape & elevation
- radius-card: 22px · radius-tile: 18px · radius-pill: 999px · radius-phone: 36px
- Wash: 0 shadow. Card: `0 28px 60px rgba(15,61,36,.16)`. Paper tiles: 1px `line` only.
- Pills and CTAs are the only fully round objects. Do not round every box 16px.

## Components
### Buttons
- Primary: `action-primary` fill + `on-action` type, `radius-pill`, min-height 48px, Lexend 600, arrow disc on the right
- Hover: translateY(−1px); active scale 0.98; focus 2px lime ring on forest, 2px forest ring on paper
- Disabled: 0.4 opacity, no hover
- Ghost: 1px `line` on paper; used for secondary only (View all)
- One primary per view
### Nav
- Wordmark left (three vault slats + Coffer). Center pill with Home as lime-dot active. Contact is a compact primary.
- Compact: menu button; drawer with the same links + Get started
### Plastic card
- HTML/CSS only. Invented PAN `4821 7603 9914 2258`, name Mira Solenne, exp 08/29. Gold chip + contactless. No image_gen for numbers.
### Mission portrait
- Original generated photograph on lime cyclorama, rounded `radius-card`. Calendar badge is SVG, not emoji.
### Bento
- Five product surfaces (physical card, ledger chart, app hexes, phone, transfers). Unequal. Never three equal icon cards as the only pattern.
### Inputs
- Height 48px, 12px radius, paper fill. Placeholder “Join the future”. Error: `status-danger` 12px text under the field.
### FAQ
- Hairline rows. One open at a time. Plus rotates 45°.

## Motion
- Purpose: the card is a physical object; stats count into place.
- Card float: 8px / 7s ease-in-out (off under reduced-motion)
- Reveal: opacity + translateY 16px / 280ms `--ease`
- Hover lift ≤ 3px. No bounce, no elastic, no dual load-stagger-plus-scroll fighting
- reduced-motion: opacity only; kill float and Lenis

## Iconography
- Inline SVG, 1.6px stroke, 18/20, currentColor. One set.
- No emoji. Floating hero orbs are white discs with forest glyphs (wallet, chart, refresh, bell).

## Content
- Sentence case. CTA verb: **Get started**. Email: `hello@coffer.example`
- Specific numbers: 70k txn/s, 56 countries, 24/7 desk, card in two days, 41,000 accounts
- Banned words: elevate, unleash, seamless, next-gen, empower (as a headline)
- Fictional partners only: Northvale Mutual, Harborline, Lumen Clearing, Bramble Trust, Wick & Quill, Fenway Reserve, Oakmint, Solstice Rail
- Sample template in the footer. No real banks, no Banki, no Pentaclay.

## Ban list
- Inter / Roboto / Open Sans as display
- Purple / indigo gradients, `#6366F1`
- Real bank names or marks (Union, Eurasian, Triodos, ASN, Axis, OCBC, Citizens, Bank of America)
- Banki, Pentaclay, Framer marketplace URLs
- Scraped portrait of the reference woman
- Lorem, Acme, three equal feature cards as the page
- Lime filled CTA sitting on the lime wash

## Accessibility
- Ink on lime and pale-lime on forest both meet contrast
- Visible `:focus-visible`; tap ≥ 44px on compact
- Card PAN announced via `aria-label`
- Reduced motion honored
