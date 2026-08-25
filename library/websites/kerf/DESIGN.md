# DESIGN — Kerf

## Overview
- Audience: founder-led revenue leads who lose *why* a deal moved when a rep leaves.
- Single CTA: Book a walkthrough
- Emotion: a night room where the reasoning is still on the table
- Create this feeling through:
  - Warm night field (`surface-page`), never cool slate or purple mesh
  - Editorial display (`font-display`) for the thesis; grotesque body; mono only for the live notes
  - One brass tick (`signal-live`) on live lines and the kerf mark — never as a page wash
  - Light filled CTA (`action-primary`) on dark; one per view
  - Centered manifesto spine; product proof is the share chart, not a 3-card grid

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Night editorial manifesto
- Signature element: corner-typed agent notes + dotted rules + giant fading wordmark

## Plan gate
- Subject: revenue intelligence that keeps human judgment as a groove (the kerf after the cut)
- Layout: island nav → thesis hero with floating notes → long manifesto → practice (chart + vault) → FAQ → giant wordmark
- Uniqueness: generic dark AI SaaS would use acid green, Inter, and three feature cards. This page is warm night, Newsreader + Sora, brass live ticks, and a manifesto-first spine. The mark is a vertical groove, not a spark/orb.
- Default-cluster: not cream+serif+terracotta; not near-black+acid green; not broadsheet hairlines.

## Colors (semantic)
- surface-page: #121110 — night paper
- surface-raised: #1C1B19 — island, cards
- surface-ink: #0B0B0A — chart well, footer field
- text-primary: #F2EDE4 — warm silver
- text-secondary: #A39E94 — lead, manifesto body
- text-faint: #6E6A62 — notes, axes, footer meta
- border-default: rgba(242, 237, 228, 0.12)
- action-primary: #F2EDE4 — filled light CTA
- action-ink: #161513 — label on the light CTA
- signal-live: #C4A574 — brass; live ticks and mark only
- status-danger: #C45A3A — errors only
- Usage:
  - Brass never fills a section or button.
  - Accent of the page is *type + air*, not color.
  - Do not introduce indigo, acid green, or a mesh gradient.

## Typography
- Display: Newsreader — H1/H2/wordmark
- Body: Sora
- Label / live notes: IBM Plex Mono
- Scale: display clamp(2.75rem, 8vw, 5rem) / 3xl clamp(2rem, 4vw, 3rem) / xl 1.25rem / lg 1.0625rem / base 1rem / sm 0.8125rem / xs 0.6875rem
- Rules: H1 leading 1.02, tracking −0.02em, `text-wrap: balance`. Manifesto measure 58–62ch, leading 1.7. Notes 11.5px uppercase tracking 0.08em. Numbers `tabular-nums`.

## Space
- section-y: clamp(5rem, 12vw, 8.5rem)
- wrap: min(1080px, 100% - 2.5rem)
- manifesto wrap: min(720px, 100% - 2.5rem)
- gap: 8 / 12 / 16 / 24 / 40 / 72

## Layout and responsiveness
### Compact (< ~720px)
- Single column; page pad 1.15rem; island collapses to mark + CTA + menu
- Hero notes stack under the title (do not overlap type)
- Practice cards stack; chart keeps 13 months but drops every other label
### Medium (~720–1040px)
- Island shows 3 links; notes sit in the side gutters at reduced size
- Practice pair becomes 1-then-1
### Expanded (≥ ~1040px)
- Floating island: mark + wordmark, 4 links, Log in + Book a walkthrough
- Notes pinned to the hero corners
- Practice pair 2-col; FAQ 2-col (label / list)

## Shape & elevation
- Island / cards: `radius-card` 22px. Buttons / chips: `radius-pill`. Chart well: 18px.
- One soft night elevation on the island only (`0 12px 40px rgba(0,0,0,0.35)`). Cards: 1px `border-default`, no stacked shadows.
- Dotted rules are 1px circles at 6px pitch, `text-faint` at 45%.

## Components
### Buttons
- Primary: `action-primary` + `action-ink`, `radius-pill`, min-height 42px, Sora 560
- States: hover lift 1px + 4% brighter; focus 2px `signal-live` ring + 2px offset; active scale 0.97; disabled 40%
- Secondary: ghost on `border-default`; used for Log in only
### Nav
- Island over the hero. Compact: drawer under island. Active link = `text-primary`.
### Cards / feature blocks
- Practice plates: raised surface + kicker + editorial H2 + 3 facts + one mock (chart or vault list)
- Do not add a third equal card
### Notes
- Mono, faint, type-on once. Left = work done. Right = decisions kept.
### Inputs
- FAQ rows are buttons. Focus ring same as primary. Open state: `border-default` hairline under the answer.

## Motion
- Purpose: the field turns, notes type, title lifts off as you scroll
- Shapes field: concentric polygons, spin-cw / spin-ccw 90–340s; beams dash on `beam-life`
- Notes: CSS `note-type` clip-path, `calc(var(--n) * 26ms)` steps, staggered delays
- Title: `rise-in` 760ms (opacity + blur 6px + translateY 16px), 90ms stagger
- Sticky hero `--hx` fades title/notes as the chapter scrolls
- Island docks in from above; chart stroke draws when in view
- reduced-motion: no spin, no type, no sticky track; notes fully visible

## Iconography
- Inline 18px stroke 1.5, `currentColor`. Mark is two vertical 1.5px bars, 5px gap (the kerf).
- No emoji. No mixed filled/outline in one region.

## Content
- Sentence case. CTA = verb + outcome (`Book a walkthrough`).
- No lorem. No “superintelligence” as a slogan. No real CRM / model / vendor names.
- Fictional only: Kerf, Kerf Yield, @kerf.example

## Ban list
- Inter/Roboto as display, purple/indigo mesh, acid-green terminal, 3 equal cards, real trademarks, scraped media, ISO/SOC badge clones, Octolane / 11x / Claude / Codex named in UI

## Accessibility
- Contrast: silver on night ≥ 7:1 for primary, ≥ 4.5:1 for secondary
- Visible focus; tap targets ≥44px on compact
- Reduced motion honored
