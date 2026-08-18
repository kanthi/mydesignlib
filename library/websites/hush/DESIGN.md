# DESIGN — Hush

## Overview
- Audience: people who buy silence they can wear — commuters, writers, open rooms
- Single CTA: Buy Hush One
- Emotion: the room drops out; you stay
- Create this feeling through:
  - Full-bleed `field-*` that re-paints the hero with the active colorway
  - Giant floating product, no logo on the cups
  - Display type huge, tight, left-locked — never centered as a SaaS stack
  - White `action-primary` BUY pill is the only filled chrome on the field

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Colorway catalogue
- Signature element: field + product swap together (Sage / Wine / Sand)

## Uniqueness plan
- Subject: Hush One wireless ANC headphones (fictional)
- Layout: viewport color field · wordmark TL · centered pill nav · huge left headline · product center · circular prev/next · BUY BR
- Type: Darker Grotesque display + Public Sans body (not Inter / Syne / Sora)
- Palette: three mid-saturation fields only — no cream+terracotta, no black+acid, no broadsheet
- Check: this plan is a product catalogue, not a generic SaaS landing. Changed type + field-swap so it cannot be reused unchanged for software.

## Colors (semantic)
- field-sage: #647560 — default hero world (matches one-sage.jpg)
- field-wine: #744851
- field-sand: #816851
- text-on-field: #F7F4EE — headlines, wordmark, nav on the field
- text-on-field-muted: rgba(247, 244, 238, 0.68) — model line, idle nav
- surface-page: #F3EEE6 — below-fold paper
- surface-ink: #161412 — dark plates (specs, buy)
- text-primary: #161412 — ink on paper
- text-secondary: #6A645C — body on paper
- text-on-ink: #F3EEE6 — type on dark plates
- action-primary: #F7F4EE — BUY pill fill
- on-action: #161412 — BUY label
- border-on-field: rgba(247, 244, 238, 0.28)
- focus-ring: #F7F4EE on fields; #161412 on paper
- Usage:
  - Only one `field-*` is active. It fills the hero, not the whole page.
  - `action-primary` fills BUY and nothing else on the hero.
  - Do not gradient between colorways. Crossfade solids.

## Typography
- Display: Darker Grotesque 800 — hero H1, section titles
- Body: Public Sans 400/500
- Label: Public Sans 500, uppercase, tracking 0.16em
- Scale: display clamp(3.1rem, 7.4vw, 5.6rem) / 3xl clamp(2rem, 3.6vw, 2.85rem) / xl 1.25rem / lg 1.0625rem / base 1rem / sm 0.8125rem / xs 0.6875rem
- Rules: display leading 0.92, tracking −0.035em, `text-wrap: balance`. Body leading 1.6, measure ≤ 36rem.

## Space
- section-y: clamp(4.5rem, 9vw, 7.5rem)
- wrap: 1180px + page-pad clamp(1.2rem, 3.6vw, 2.75rem)
- gap: 8 / 12 / 16 / 24 / 40 / 64
- Hero: 100svh; chrome inset ~1.5–2rem

## Layout and responsiveness
### Compact (< ~720px)
- Wordmark + inline pill links (no drawer); headline above product
- Headline above product; product ~72vw
- Prev/next under the product; BUY full-width sticky in the hero
### Medium (~720–1100px)
- Pill nav stays; headline left, product slightly overlaps type
### Expanded (≥ ~1100px)
- Wordmark left, pill optical-centre, empty right
- Headline left third; product optical centre; arrows mid-right; BUY BR

## Shape & elevation
- Hero / page: 0. Nav + BUY: `radius-pill` 999px. Arrows: circle.
- Below-fold cards: 18px. Specs rows: 0.
- One product shadow: `0 28px 70px rgba(0,0,0,.22)`. No card-stack shadows.

## Components
### Buttons
- Primary: `action-primary` + `on-action`, pill, Public Sans 600 0.8rem, min 48×44, letter-space 0.08em
- States: hover scale 1.03; focus 2px `focus-ring`; active 0.97; disabled 40%
- Ghost on field: 1px `border-on-field`, circular 48px
### Nav
- Desktop: floating over field. Active = `text-on-field`. Idle = muted
- Compact: same links as a borderless row under the wordmark
### Colorway control
- Prev/next cycle Sage → Wine → Sand. Dots optional, same hit size
- Swap field CSS var + product `src` together (240ms opacity)
### Cards
- Design details: photo + one line. Never three equal icon cards as the only band
### Inputs
- Height 46px; label above; focus 2px ink ring

## Motion
- Colorway: field background 420ms, product opacity 280ms, `cubic-bezier(0.22, 1, 0.36, 1)`
- Product idle float 8s, 8px — off under reduced-motion
- Reveals: opacity + translateY 16px, 240ms
- Reduced-motion: instant field, no float, opacity-only reveals

## Iconography
- Inline SVG, 1.5px stroke, 18 / 20. CurrentColor. Chevrons only. No emoji.

## Content
- Sentence case except hero H1 (title case / period).
- Buttons: `Buy Hush One`, not Learn more.
- Quiet vernacular: room, hush, stay, colorway — not seamless / unleash / next-gen.
- Models: Hush One. Colorways: Sage, Wine, Sand. Contact hello@hush.example.

## Ban list
- AURA, Nike, swoosh, real headphone marks, designer handles, framer.com
- Inter/Roboto/Syne/Sora as display, purple gradients, emoji icons
- Logos on cups. Scraped media. Lorem.

## Accessibility
- White type on all three fields meets contrast
- Visible focus; tap targets ≥44px
- Colorway change announced (`aria-live`)
- Reduced motion honored
