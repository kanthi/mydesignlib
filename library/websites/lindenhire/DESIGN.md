# DESIGN — Lindenhire

## Overview
- Audience: people hunting a desk; desks posting a role
- Single CTA: Find a desk (primary) · Post a role (secondary, same verb pair everywhere)
- Emotion: shade and work — a hiring desk under linden trees
- Create this feeling through:
  - Full-bleed `surface-canopy` hero, not a white SaaS slab
  - Display numeral `4500+` in `moss` — the page’s loudest mark
  - Organic clover clip on photography (`radius-blob`)
  - Search as the hero instrument, not a second headline
  - Leaf-ash `surface-page` below so the canopy is a chapter

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Canopy hiring desk
- Signature element: clover-clipped outdoor portrait + moss `4500+` on forest green

## Plan gate
- Subject: hiring directory framed as a desk under trees
- Uniqueness: blob clip + moss numeral + tree-desk copy — not a transferable job-board shell
- Default-cluster: paper is cool leaf-ash (`#F3F5F1`), not cream+terracotta; moss is lime-olive, not acid; corners are mixed (blob + 18px cards), not broadsheet

## Colors (semantic)
- surface-canopy: `#12382B` — hero, footer, dark chrome
- surface-page / paper: `#F3F5F1` — light chapters
- surface-card: `#FFFFFF`
- surface-moss-soft: `#D6E8B0` — selected category only
- text-primary / ink: `#14241C`
- text-on-canopy: `#F3F7F1`
- text-secondary / muted: `#5A6B60`
- text-on-canopy-muted: `#B7C9BB`
- border-default / line: `#DDE3DA`
- action-primary / moss: `#B4D36A` — search submit, numeral, one accent per view
- action-ink: `#1B4D3A` — dark buttons on paper (Post a role, Browse)
- status-danger: `#9B2C2C` — form errors only
- Usage:
  - Moss never fills a full section; it is type, chips, and the search button.
  - Canopy is the only large dark field (hero + footer).
  - Do not use moss-soft except selected category + one featured role plate.

## Typography
- Display: Young Serif — H1, H2, the `4500+` numeral
- Body: Albert Sans — UI, nav, cards, body
- Scale: display clamp(2.6rem, 5.4vw, 4.15rem) / numeral clamp(3.4rem, 7vw, 5.4rem) / 3xl clamp(1.85rem, 3.2vw, 2.45rem) / xl 1.2rem / base 1.02rem / sm 0.84rem / xs 0.72rem
- Rules: H1 leading 1.05, tracking −0.02em; numeral tracking −0.03em, `tabular-nums`; body 1.58, measure ≤62ch; `text-wrap: balance` on H1/H2

## Space
- section-y: clamp(4.25rem, 8vw, 6.5rem)
- wrap: min(1140px, 100% − 2.4rem)
- gap: 8 / 12 / 16 / 24 / 40
- Hero inner padding: clamp(1.25rem, 3vw, 2rem)

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hero type then blob photo; search stacks (field / submit)
- Nav: hamburger overlay inside `.page`; 44px hits
- Category 2-col; role cards 1-col; testimonials 1-col
### Medium (~720–1100px)
- Hero still stacked if photo would crush type; categories 4-col
- Role cards 2-col
### Expanded (≥ ~1100px)
- Hero 12-col: copy 6 / photo 6, vertically centred
- Search one row; categories 4; roles 3; testimonials 3
- Employer rail under hero, sitting on paper

## Shape & elevation
- radius-card: 18px — tiles, role cards, quote plates
- radius-control: 12px — inputs, small chips
- radius-pill: 999px — primary buttons, badges
- radius-blob: clover path (see CSS) — photography only, never UI chrome
- radius-round: 50% — huddle photo only
- Shadow: one soft `0 18px 40px rgba(18,56,43,.08)` on hover-lifted cards, not at rest

## Components
### Buttons
- Primary on canopy: `action-primary` fill, ink text, `radius-pill`, min-height 48px
- Primary on paper: `action-ink` fill, `text-on-canopy`, `radius-pill`
- Ghost: hairline `border-default` or `text-on-canopy` at 35%
- States: hover darken 6% / lift 1px; active scale 0.97; focus 2px ring `moss` offset 3px; disabled 40% opacity, no hover
### Nav
- Wordmark (leaf mark + Lindenhire) left; links centre-right; Post a role pill + Sign in
- Compact: toggle + full-canopy panel; Escape closes; `aria-expanded`
### Search
- White field, 56px tall, `radius-pill`, magnifier 20px `currentColor`
- Submit is the only moss fill in the hero chrome
- Popular queries as text links under the bar
### Category tiles
- White card, 18px, centred 40px icon well, title + count
- Selected: `surface-moss-soft` fill, no extra shadow
- Never more than one selected
### Role cards
- Company mark (inline SVG, 36px), title, meta row (date · pay · city · type)
- One featured plate uses `surface-moss-soft` + Apply this desk
- Badges: New / Featured / Full desk / Remote / Shared — small pills, not emoji
### Inputs
- Label above or visually hidden with `aria-label`
- Error: 1px `status-danger` + sm text below

## Motion
- Purpose: hover/focus only; no scroll-theatre
- 220ms `cubic-bezier(0.22, 1, 0.36, 1)` on color, transform, box-shadow
- Card hover: translateY(−3px) + the one shadow
- Reduced-motion: no translate; color only

## Iconography
- Inline SVG, 1.6px stroke, 20/24px, `currentColor`
- No emoji. Stars for ratings: 5× 14px filled SVG, `moss` on canopy / `action-ink` on paper
- Leaf mark is the only filled brand glyph

## Content
- Sentence case. CTAs: Find a desk / Post a role — never Learn more
- Tone: calm, specific, slightly pastoral — desks, shade, grove — not “dream job”
- Fictional employers only: Alder & Finch, Bramble Court, Mirelo Studio, Pollen Yard, Hollow Quill, Cedarlane Labs
- Contact: hello@lindenhire.example · Footer: Sample template

## Ban list
- BestJob, JobFinder, Logoipsum, Novacore, Opti Tech, Quantum Edge, EnvisionX, Nexus Gen, Lumina Tech
- Inter/Roboto display; Syne, Sora, Epilogue
- Purple gradients; 5-star emoji; scraped photos; marketplace URLs

## Accessibility
- Canopy type ≥ `text-on-canopy`; moss numeral is large so lime-on-green is OK
- Visible focus; tap ≥44px; skip link
- Reduced motion honored
