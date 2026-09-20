# DESIGN — Ashlar

## Overview
- Audience: civic clients and developers commissioning a hall, shell, or courtyard; architects considering the studio.
- Single CTA: Join our team (closing verb: Let’s talk)
- Emotion: a night-lit civic hall already occupying the salt
- Create this feeling through:
  - One oversized project word (`font-display`, `text-hero`) spanning the hero photograph
  - Orange ticket chips (`action-primary`, `radius-ticket`) — never as a full-bleed fill
  - Spec bar of Type / Budget / Area / Occupancy under the hero, not a SaaS badge row
  - Photography of glass, parametric ribbons, and timber spirals; paper stays stone-white

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Civic glass editorial
- Signature element: oversized project word on photography + orange ticket chips

## Colors (semantic)
- surface-page / paper: #F6F4F0 — page, not a warm-cream flood
- surface-raised: #FFFFFF — cards, nav frost
- surface-ink / night: #141311 — services plate and Let’s talk footer only
- text-primary / ink: #161514
- text-secondary / mute: #6A6762
- text-on-photo: #F7F4EE
- text-on-accent: #FFFFFF
- border-default / line: #E4E0D8
- action-primary / ember: #FF6A1A — tickets, Join chips, one pricing fill
- action-primary-deep: #E05510 — hover fill
- Usage:
  - Ember is ticket and chip only. Never a section background.
  - Night is the services inset and the Let’s talk plate — nowhere else.
  - Paper is the page; raised white is for cards sitting on paper.

## Typography
- Display: Syne — wordmark, H1/H2, Let’s talk, project names (700/800)
- Body: Instrument Sans — nav, copy, specs, pricing
- Scale: hero clamp(4.5rem, 18vw, 14rem) / 3xl clamp(2.1rem, 4.4vw, 3.4rem) / 2xl clamp(1.5rem, 2.4vw, 2rem) / xl 1.25rem / base 1.05rem / sm 0.84rem / xs 0.72rem
- Rules: display leading 0.82, tracking −0.04em; body 1.58 / 62ch; labels 0.14em uppercase Instrument Sans 600

## Space
- section-y: clamp(4.75rem, 10vw, 7.75rem)
- wrap: min(1180px, 100% − 2.5rem)
- gap: 8 / 12 / 16 / 24 / 32 / 48 / 72

## Layout and responsiveness
### Compact (< ~720px)
- Single column; nav in a drawer; hero word scales down, spec bar 2×2; achievements stack; projects 1-up; pricing stacks; team 2×2; Let’s talk wraps
### Medium (~720–1060px)
- Achievements 2-up; projects 2-up; pricing side-by-side; team 4-up
### Expanded (≥ ~1060px)
- Floating frost nav over the hero photo
- Hero: full-bleed rounded plate, word spanning the frame, CTAs bottom-left, glass stat bottom-right, spec bar on the photo
- Achievements: copy row then 7/5 photo split
- Projects: 4-up with Join chip opposite the title
- Services: night plate, accordion left, featured photo right
- Footer: giant Let’s talk, then a thin link row

## Shape & elevation
- Photos / cards: `radius-frame` 22px
- Tickets: `radius-ticket` 8px (rectangular, not pills)
- Buttons / nav / Join chips: `radius-pill` 999px
- Shadow: one soft lift on hover (`0 16px 40px` ink @ 10%) — not on idle cards
- No 16px radius as a default

## Components
### Buttons
- Primary: `action-primary` fill + `text-on-accent` + `radius-pill` + trailing ember disc with arrow; hover `action-primary-deep`; focus 2px ink ring offset 3px; active scale 0.98; disabled 40%
- Ghost: frost on photo (`rgba(255,255,255,0.14)` + blur); hover 0.24; one primary per view
### Nav
- Wordmark + folded-stone mark left; pill links + Search; Join our team is the only verb
- Compact: hamburger ≥44px opens a paper drawer
### Ticket
- Ember plate, white `label` type, optional stripe marks on the right; overlays photography only
### Spec bar
- Four columns on the hero: Type / Budget / Area / Occupancy — hairline dividers, `text-on-photo`
### Glass stat
- Frost card on the hero photo: kicker + value. Not a metric dump.
### Project cards
- Photo 4:3, name + place + budget in `sm`; hover lift 4px; never three equal SaaS cards
### Service accordion
- Number (`label`) + title; one open at a time; featured photo stays
### Pricing
- Two plans only (Atelier / Chamber); night fill on Atelier; yearly/monthly toggle; not three tiers
### Team
- Circle crop, name, role in `label`; four people; no social icon row

## Motion
- Purpose: the hall arrives, then sections lock — not decoration
- Lenis smooth scroll; GSAP: hero word 0.9s, reveals 240–300ms opacity + translateY 16px, project stagger 60ms
- Hover lift ≤4px; no bounce
- reduced-motion: Lenis off, opacity only

## Iconography
- Inline SVG, 1.75 stroke, 16/20px
- Arrow-up-right on Join and Let’s talk only
- No emoji; no mixed fill/outline in one region

## Content
- Sentence case except tickets and Let’s talk (all caps)
- Buttons start with a verb: Join our team, Open a drawing
- Specific loads, spans, and places — no “innovative / timeless / seamless”
- Fictional brand only. Never Archvip, Forma, or designer handles.
- Email: studio@ashlar.example

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons, centered-everything only
- 3 equal cards, real trademarks, scraped buildings
- Ember as a section flood; Inter; “Forma” as a project name

## Accessibility
- Text on ember and night meets contrast
- Visible focus 2px ink; tap ≥44px
- Reduced motion honored
- Alt text names the building, not “image”
