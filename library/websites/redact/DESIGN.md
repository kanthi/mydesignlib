# DESIGN — Redact

## Overview
- Audience: in-house counsel and security leads who inherit a stale audit PDF.
- Single CTA: Talk to counsel
- Emotion: a quiet desk that is already working
- Create this feeling through:
  - Cool paper field (`surface-page`), not cream; product cards float on `surface-paper`
  - One ink-orange accent (`action-primary`) on CTAs, chart stroke, and mark — never a mesh
  - Centered two-line thesis, then the desk as proof (HTML/CSS cards, not a screenshot)
  - One inverted plate (`surface-ink`) in the feature trio; dark band only for the last CTA
  - Scores use `font-mono` + `tabular-nums`

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Counsel-desk SaaS (soft clean, legal-adjacent)
- Signature element: the desk — three overlapping product cards (audit score, 80-day chart, activity feed) under a faint amber glow

## Colors (semantic)
- surface-page: #F4F4F1 — outer sheet
- surface-paper: #FFFFFF — cards, nav, feature plates
- surface-soft: #F7F7F4 — nested wells
- surface-ink: #171614 — inverted plate + final CTA + footer
- text-primary: #161513 — ink
- text-secondary: #6B6963 — lead, labels
- text-faint: #9A978F — timestamps, axes
- text-on-ink: #F4F4F1
- border-default: #E4E2DA
- action-primary: #E04E16 — ink-orange; one filled button per view
- action-soft: #FDE8DC — chip / chart fill
- status-good: #2F8A54 — deltas only
- status-warn: #C97816 — medium risk
- status-danger: #C43A22 — high risk / errors only
- Usage:
  - Accent fills the primary CTA, the mark disc, the chart stroke, and selected dots.
  - Do not use accent as a full-bleed background or a page gradient.
  - Green/red only on metric deltas and issue pills.

## Typography
- Display + body: Schibsted Grotesk (news grotesque — not Inter / Jakarta / Outfit)
- Label / scores: IBM Plex Mono
- Scale: display clamp(2.35rem, 5.2vw, 3.55rem) / 3xl clamp(1.7rem, 3vw, 2.35rem) / xl 1.25rem / lg 1.0625rem / base 0.975rem / sm 0.8125rem / xs 0.6875rem
- Rules: H1 leading 1.08, tracking −0.034em, `text-wrap: balance`. Lead ≤ 42ch, leading 1.55. Scores `tabular-nums`.

## Space
- section-y: clamp(4.25rem, 8vw, 6.5rem)
- wrap: min(1080px, 100% - 2.5rem)
- gap: 8 / 12 / 16 / 24 / 40 / 64
- Hero copy block has ≥ 2.25rem before the desk

## Layout and responsiveness
### Compact (< ~720px)
- Single column; page pad 1.15rem; hamburger; CTAs stack (primary last)
- Desk cards stack, no overlap; hide axis labels if cramped
### Medium (~720–1040px)
- Nav links visible; desk cards overlap with reduced offset
- Feature trio and proof pair become 1-then-2
### Expanded (≥ ~1040px)
- Quiet bar: mark + wordmark left, 4 links, Sign in + Talk to counsel
- Desk: score left, chart centre-forward, feed right, slight rotate
- Feature trio 3-col; proof pair 2-col; articles 3-col

## Shape & elevation
- Page sheet: 0. Cards / plates: `radius-card` 18px. Nested wells: 12px. Buttons / chips: `radius-pill`.
- One soft elevation on desk cards only (`0 22px 50px rgba(22,21,19,0.08)`). Feature plates: 1px `border-default`, no stack of shadows.

## Components
### Buttons
- Primary: `action-primary` + white label, `radius-pill`, min-height 44px, Grotesk 580
- States: hover darken to #C94412; focus 2px ink ring + 2px offset; active scale 0.97; disabled 40%
- Secondary: paper fill + `border-default`; never the only CTA above the fold
### Nav
- Desktop: links `text-secondary`, hover `text-primary`. Compact: drawer under bar
### Cards
- Desk cards: paper + hairline + one elevation; left-align chrome inside
- Feature plates: icon disc + title + one mock; middle plate inverted
- Do not treat three equal icon cards as the only proof — the desk carries the story
### Inputs
- If present: 44px height, label above, danger text under field

## Motion
- Purpose: desk settles once; cards lift 3px on hover
- 240ms, cubic-bezier(0.22, 1, 0.36, 1); reveal opacity + translateY ≤16px
- Chart stroke draws once on first view
- Reduced-motion: opacity only; no draw, no lift

## Iconography
- Inline SVG, 1.6px stroke, 16 / 18. `currentColor`. No emoji. No mixed fill/outline in one row.

## Content
- Sentence case. Buttons: Talk to counsel / See the desk.
- Desk vernacular: finding, file, vendor, jurisdiction, reviewer — not seamless / unleash / elevate.
- Fictional partners as wordmarks only. Contact hello@redact.example.

## Ban list
- Inter / Roboto as display; Syne / Sora / Epilogue / Instrument Sans
- Indigo `#6366F1`, purple mesh, 3 equal cards as the only pattern
- Real marks: Belief, Keith, Corio, Hippo, Cameo, Bitpanda, Blend, Cerebral, Framer
- Scraped media, chart screenshots, lorem, Acme/Nexus

## Accessibility
- Ink on paper and white on `action-primary` meet contrast
- Visible focus; tap targets ≥44px on compact
- Reduced motion honored; scores `tabular-nums`
