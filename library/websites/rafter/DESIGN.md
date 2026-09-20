# DESIGN — Rafter

## Overview
- Audience: homeowners commissioning a kitchen, bath, or whole-home renovation — people with a Pinterest board who now need a licensed crew and a date.
- Single CTA: Get a quote
- Emotion: the room already finished — you could sit down tonight
- Create this feeling through:
  - Full-bleed living-room photography as the first surface; type floats on it
  - Floating frosted pill nav (`radius-pill`, `surface-glass`) over the photo
  - One timber CTA (`action-primary` #3D2A1F) — never a page wash
  - Warm ink (`text-primary`) on paper (`surface-page`); teal lives only in photos
  - Stats as large Fraunces numerals, not icon cards

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Trust-first interiors editorial
- Signature element: Full-bleed interior hero with floating pill nav

## Colors (semantic)
- surface-page / paper: #F7F3EC — page, about, FAQ
- surface-raised: #FFFBF6 — cards sitting on paper
- surface-ink: #1C1712 — footer and final quote band only
- surface-glass: rgba(247, 243, 236, 0.78) — pill nav over photography
- text-primary / ink: #1C1712
- text-secondary / muted: #6A5C50
- text-on-photo: #F7F3EC
- text-on-ink: #F7F3EC
- border-default / line: #E2D6C8
- action-primary / timber: #3D2A1F — primary buttons only
- action-primary-hover: #2C1D15
- status-danger: #9B3A2A — form errors only
- Usage:
  - Timber is the CTA and the wordmark rafter mark. Never a full-bleed fill except the quote band (which uses `surface-ink`, not timber).
  - Teal from the hero sofa is photography, not a token.
  - Paper stays paper; do not tint sections terracotta.

## Typography
- Display: Fraunces — H1/H2/wordmark/stat numerals (opsz 144 on display, 36 on H2)
- Body: Karla — nav, body, labels, buttons
- Scale:
  - display: clamp(2.6rem, 5.6vw, 4.35rem) / 500 / 1.08 / -0.02em
  - 3xl: clamp(2rem, 3.2vw, 2.85rem) / 500 / 1.12
  - 2xl: clamp(1.5rem, 2.2vw, 1.9rem)
  - xl: 1.25rem
  - lg: 1.0625rem
  - base: 1rem / 400 / 1.62
  - sm: 0.875rem
  - xs: 0.72rem / 0.14em tracking (kickers)
- Rules: H1 measure ≤ 16ch, `text-wrap: balance`. Body ≤ 62ch. Stats use display at 3xl, tabular-ish lining figures.

## Space
- section-y: clamp(4.5rem, 9vw, 7.5rem)
- wrap: min(1160px, 100% - 2.5rem)
- gap: 8 / 12 / 16 / 24 / 32 / 48 / 72

## Layout and responsiveness
### Compact (< ~720px)
- Single column; 20px page margin; hamburger in the glass pill; hero copy stacks over sofa; gallery 1-up; stats 2-up
### Medium (~720–1023px)
- Gallery 2-up; about photo cluster still stacked; services 2-up
### Expanded (≥ ~1024px)
- Sticky floating bar: wordmark left, glass pill links centre, Get a quote right
- Hero is viewport-tall photography; copy centred in the upper-middle; partner strip on the photo’s bottom edge
- About: overlapping photo cluster left, copy + stats right
- Gallery: 3-up, mixed ratios (tall / square / tall)

## Shape & elevation
- radius-pill: 999px — nav, primary buttons, review chip
- radius: 12px — photos, cards, quote form (softer than kit, not 16px-everywhere)
- radius-sm: 8px — inputs, chips
- Shadow: one soft photo lift `0 18px 40px` ink @ 10% on the about cluster only

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-photo` label, `radius-pill`, Karla 600, arrow
- States: hover `action-primary-hover` + translateY(-1px); focus 2px ink ring offset 3px; active scale(0.97); disabled 40%
- Ghost on photo: 1px `text-on-photo` at 55%, hover fill white @ 12%
- Ghost on paper: 1px `border-default`, ink label; hover `surface-raised`
- One primary per view
### Nav
- Desktop: glass pill, Karla sm, current = timber underline 1px
- Compact: drawer from the pill; Get a quote pinned
### Cards
- Project tiles: photo + caption on hover (name + room), no equal-icon trio
- Service: kicker number, title, 2-line note — 4 items because four trades
- Testimonial: quote in Fraunces italic, name + town in Karla sm
### Inputs
- 48px, paper fill, 1px `border-default`, `radius-sm`; focus 1px ink; error `status-danger` text under field

## Motion
- Purpose: scroll reveal of sections + hover on tiles
- duration 240ms; ease cubic-bezier(0.22, 1, 0.36, 1)
- reveal: opacity + translateY 16px
- reduced-motion: opacity only; no parallax; before/after snaps

## Iconography
- Inline SVG, 1.6px stroke, 18–20px, currentColor
- No emoji. Partner row is wordmarks in Karla, not fake logos.

## Content
- Sentence case. CTAs: Get a quote / See the work / Walk the house
- Specific numbers: 640 projects, licensed 2009, kitchens from $48k
- Desk: hello@rafter.example · Ashmere
- Fictional millwork partners only

## Ban list
- Remodix, eamin_ux, WhiteFrame, Grabui, Framer, Webflow
- Inter/Roboto display; purple gradients; emoji icons
- Dual equal hero CTAs; three equal icon cards as the only pattern
- Teal as a UI fill; timber as a page wash
- Real contractor brands, scraped reference photos

## Accessibility
- White type on hero sits on a bottom-to-mid ink gradient (not a flat overlay)
- Visible 2px ink focus; tap targets ≥44px
- Reduced motion honored

## Plan gate
- Subject: licensed renovation crew
- Uniqueness: photography-first pill-nav hero + overlapping job-site about — not a SaaS shell
- Default-cluster: warm paper + serif + brown CTA is briefed; teal stays in photos
