# DESIGN — Kindling

## Overview
- Audience: a founder who wants a studio that ships sites, apps, and campaigns — not decks.
- Single CTA: Start a project
- Emotion: heat in motion — work already moving before you finish the sentence
- Create this feeling through:
  - One full-bleed motion-blur photograph as the hero field (`heat`)
  - Display type that occupies the optical centre, cream fading into `action-primary`
  - Service chips, not a 3-card row, as the hero’s proof
  - Paper below (`surface-page`) so the heat is a chapter, not a theme

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Heat-motion agency
- Signature element: motion-blurred figure on a burnt-orange field, with a live city clock in the corner

## Colors (semantic)
- surface-page / paper: #F7F5F2
- surface-ink / night: #141210
- heat: #C2410C — photography grade, not a fill
- text-primary / ink: #171513
- text-on-heat: #F6EFE6
- text-secondary / muted: #6B6560
- border-default / line: #E4DFD8
- action-primary / ember: #E24A1A — CTA, badge, split type
- Usage:
  - Ember is the only button fill and the last words of the headline.
  - Heat lives in photographs. Do not paint whole sections orange.
  - Night is for the services chapter only.

## Typography
- Display: Sora — H1/H2/wordmark
- Body: Figtree
- Label: IBM Plex Mono
- Scale: display clamp(3.4rem, 8vw, 6.6rem) / 3xl clamp(2rem, 4vw, 2.8rem) / xl 1.25rem / base 1.05rem / sm 0.82rem / xs 0.68rem
- Rules: display tracking −0.04em, tight leading 0.92 on H1; body 1.55

## Space
- section-y: clamp(4.5rem, 9vw, 7.5rem)
- wrap: min(1120px, 100% − 2.4rem)
- hero: min 100svh, inset 1rem on expanded

## Layout and responsiveness
### Compact (< ~720px)
- Hero stacks; chips wrap; stats stack; work cards full-bleed
### Medium (~720–1100px)
- Hero type left-of-centre; stats in a row
### Expanded (≥ ~1100px)
- Hero as a framed plate; location top-left; chips bottom-right; client rail flush under the plate

## Shape & elevation
- Hero plate: 12px
- Chips: pill
- Work cards: 16px, one soft shadow
- Night service rows: hairline only

## Components
### Buttons
- Primary: `action-primary`, on-heat text, `radius-pill`
- Hover: brighten 8%; focus: 2px ink ring
- Ghost chip: translucent on-heat fill + hairline
### Nav
- Wordmark centre on hero; hamburger; Start a project as the only verb
### Work cards
- Dark plate, photo right, title + tags — not three equal icon features
### Service rows
- Title + short note; photo pair on Branding only; expand is optional CSS

## Motion
- Clock ticks; client rail scrolls slowly
- Reduced-motion: freeze clock to a static time; stop the rail

## Iconography
- 1.5px stroke. No emoji.

## Content
- Direct, short, slightly impatient
- Fictional: Kindling, Port Silt / New York clock as atmosphere, hello@kindling.example
- Cases: Northspin, Vaultnote, Loomcast — invented

## Ban list
- Hyper Frame, ProFast, SecureX, Virtualex, RotaShow, Velocity9
- Inter as display, purple SaaS, 3 icon cards as the only pattern

## Accessibility
- Cream on heat contrast; do not set small type on the brightest photo
- Focus visible; 44px compact hits
- Reduced motion honored

## Plan gate
- Subject: digital studio
- Uniqueness: motion-blur heat plate + live clock + chip cloud — not a transferable SaaS shell
- Default-cluster: orange is photographic, not terracotta-on-cream editorial
