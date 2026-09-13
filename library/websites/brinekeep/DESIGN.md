# DESIGN — Brinekeep

## Overview
- Audience: a design-curious visitor who will sit with a construction study, then request a berth.
- Single CTA: Request a berth
- Emotion: cold Atlantic patience — work that only finishes when the weather allows
- Create this feeling through:
  - Cool salt paper (`surface-page`) against tide ink (`text-primary`); never warm cream as the field
  - One living object: a keep that *builds*, not a fade-in hero render
  - Verdigris (`action-primary`) only on the primary verb and the copper that is already in the model
  - Mono labels (`label`) for stages, weather, and percentages — a field notebook, not a SaaS badge row

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Atlantic construction prospectus
- Signature element: a downward-facing clip plane — the tide line of finished work — with timber scaffolding always one course ahead

## Colors (semantic)
- surface-page / paper: #E6E1D4 — salt-crust field; cool, not cream
- surface-ink / night: #12181C — the study frame around the canvas
- text-primary / ink: #161D22
- text-on-ink: #E8E2D4
- text-secondary / muted: #5C6870
- border-default / line: #C4BDAA
- action-primary / verdigris: #1F6F68 — primary CTA and live copper note only
- copper: #C56A3A — material in the keep, never a full-bleed background
- lantern: #E0B25A — night emissive only
- fog: #7A8B94
- status-danger: #8C2F2A — unused unless a control errors
- Usage rules:
  - Verdigris is the only action fill. Copper is a metal, not a button.
  - Night frame (`surface-ink`) owns the 3D study; paper owns the chapters below.
  - Lantern yellow never appears in type.

## Typography
- Display: Newsreader — H1/H2/wordmark
- Body: Source Serif 4
- Label/utility: IBM Plex Mono
- Scale: display clamp(3.2rem, 8vw, 6.4rem) / 3xl 2.6rem / 2xl 2rem / xl 1.4rem / lg 1.15rem / base 1.05rem / sm 0.82rem / xs 0.68rem
- Rules: display tracking −0.03em, measure 38–62ch, labels uppercase 0.14em tracking

## Space
- section-y: clamp(4.5rem, 10vw, 8rem)
- wrap: min(1180px, 100% − 2.5rem)
- gap: 4 / 8 / 12 / 16 / 24 / 40

## Layout and responsiveness
### Compact (< ~720px)
- Single column; canvas is a 72vh study under a short masthead
- Controls become a thumb strip; type moves into the sky of the canvas
- Hide the custom trail; keep tumble flakes as a still
### Medium (~720–1100px)
- Overlay type sits in the four corners of the frame; keep stays centred
### Expanded (≥ ~1100px)
- Print frame: keep locked in the optical centre; quote left; percent right; stage on the baseline

## Shape & elevation
- Radius 0 on the study frame and type rules
- Pills only on the primary CTA
- No drop shadows on cards; one hairline rule

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-ink`, `radius-pill`, `label` type
- States: hover lightens 8%; focus 2px ink ring; disabled 40% opacity
- Ghost: hairline `border-default`, ink text
### Nav
- Compact: wordmark + one CTA; menu lists chapters
- Expanded: wordmark left, chapter anchors, CTA right
### Cards / plates
- Full-bleed still with a caption rule; never a 3-equal-card row as the only pattern
### Controls
- Time / weather / rebuild are mono chips; pressed state inverts to ink

## Motion
- Build: 4.5s ease between stage heights
- Pointer lean ≤ 6°; trail emits by distance
- Reduced-motion: completed keep, designed still weather, no RAF orbit

## Iconography
- 1.5px stroke SVG only. No emoji.

## Content
- Sentence case in body; labels in small caps / mono
- Fictional: Brinekeep, Skerry Holm, hello@brinekeep.example
- No “seamless / unleash / next-gen”

## Ban list
- Inter as display, purple gradients, 3-card SaaS grid, glassmorphism, Asian temple/pagoda silhouette, flying eaves, Japanese captions, real place names as clients

## Accessibility
- Contrast of ink on paper and on-ink on night
- Visible focus; 44px hit on compact controls
- Reduced motion honored; keyboard: Space play, R rebuild, T time, W weather, C centre

## Plan gate
- Subject: North Atlantic salt-works keep
- Uniqueness: cylindrical keep + copper pans + tide-line clip — would not transfer to a SaaS or a Kyoto walk
- Default-cluster: avoided cream+terracotta by using cool salt paper and verdigris as the only action
