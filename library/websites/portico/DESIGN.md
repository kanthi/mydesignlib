# DESIGN — Portico

## Overview
- Audience: B2B founders and ops leads from first €10M RFPs through enterprise security review.
- Single CTA: Calculate your ROI (hero + calculator); Book a consult repeats in the close.
- Emotion: the certificate is a sales door, not a paperwork pile.
- Create this feeling through:
  - Ice wash (`surface-wash`) only on hero and close — never a full-site mesh
  - One royal accent (`action-primary`) on Sign in, calculator submit, and “with ISO” marks
  - ARR stage rail as the argument: a trigger chip at every revenue gate
  - Tabular metrics and a live ROI panel as product-as-proof
  - Sora display + IBM Plex body — institutional, not Inter

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Ice-wash compliance sales
- Signature element: revenue-stage trigger rail + live compliance ROI calculator

## Plan gate
- Layout: centered thesis hero → 3 proof metrics → ARR trigger rail → without/with impact → calculator → program steps → FAQ → wash close
- Uniqueness: the page argues *when* ISO 27001 becomes a deal-blocker, then prices the stall. That pair is not a generic SaaS feature grid.
- Default-cluster: light SaaS is the brief (reference). Differentiated by the rail + calculator, Sora/Plex, royal `#1B5CFF` not indigo-purple.

## Colors (semantic)
- surface-page: `#F5F8FC`
- surface-paper: `#FFFFFF`
- surface-wash: `#E4F1FF` → `#F7FBFF` (hero/close field only)
- text-primary / ink: `#0E1520`
- text-secondary / muted: `#5C6673`
- text-faint: `#8B95A3`
- border-default / line: `#E3EAF2`
- action-primary: `#1B5CFF` — filled CTAs, active controls, “with” checks
- on-action: `#FFFFFF`
- action-soft: `#E8F0FF`
- status-good: `#1B8A5C` — optional positive deltas only
- status-danger: `#C63B3B` — “without” marks and errors only
- Usage:
  - Accent never as a full-bleed background.
  - Danger never decorative.
  - Wash is atmosphere behind type and cards, not a second brand color.

## Typography
- Display: Sora — H1, H2, wordmark
- Body: IBM Plex Sans
- Label/utility: IBM Plex Mono — metrics, slider values, stage labels
- Scale: display `clamp(2.35rem, 5.4vw, 3.65rem)` / 3xl `clamp(1.65rem, 3vw, 2.25rem)` / xl `1.25rem` / base `1rem` / sm `0.875rem` / xs `0.72rem`
- Rules: display leading 1.08, tracking −0.038em, `text-wrap: balance`. Body 1.55, measure ≤ 46ch. Metrics `tabular-nums`.

## Space
- section-y: `clamp(4.25rem, 9vw, 6.75rem)`
- wrap: `min(1120px, 100% - 2.5rem)`
- gap scale: 4 / 8 / 12 / 16 / 24 / 32 / 48
- Hero copy block sits in air; stats are a separate row, not crammed under the H1

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hamburger; CTAs stack (primary last); rail becomes a vertical list; calculator form above chart; FAQ full width
### Medium (~720–1100px)
- Stats in a row; rail 3+3; impact two-up if space; calculator still stacked if < 960px
### Expanded (≥ ~1100px)
- Nav inline; 6-column rail; impact 2-up; calculator form | chart

## Shape & elevation
- Cards: 20px. Nested wells: 14px. Inputs: 12px. Buttons: pill.
- One soft elevation on calculator and impact cards (`0 18px 50px rgba(14,21,32,.08)`). Rail is hairline, not shadowed.
- Nested radius: outer ≈ inner + padding gap.

## Components
### Buttons
- Primary: `action-primary` + `on-action`, pill, min-height 44px, Sora 600
- States: hover darken + 1px lift; focus 2px `action-primary` ring offset 2px; active scale 0.97; disabled 0.4 opacity
- Secondary: ghost ink on wash; never for the close primary
- One filled primary per view
### Nav
- Logo left, links center, Sign in right (`action-primary` pill)
- Compact: menu button 44px; drawer with same links + Sign in last
### Rail (signature)
- Six equal stage columns; header = ARR gate in mono; one trigger chip per live stage
- Chips: paper, 12px radius, 1px `line`, 14px icon + 2-line label
- Do not turn this into three equal marketing cards
### Calculator
- Left: labeled sliders + market checkboxes; submit `Calculate ROI`
- Right: three KPI tiles + SVG line (with Portico vs without)
- Live-update on input; results use mono + tabular-nums
### Inputs
- Height 44px; focus 2px `action-primary`; error text `status-danger` under field
### FAQ
- Native `<details>`; plus/minus from `open`; hairline dividers, no card chrome

## Motion
- Purpose: reveal the rail and calculator once; slider chart is data, not decoration
- Duration 220–280ms, `--ease`; translateY ≤ 16px
- Hover lift ≤ 2px on cards, 1px on buttons
- Reduced-motion: opacity only or off; no chart tween

## Iconography
- Inline SVG, 1.6px stroke, 16/18px in chips, 20px in impact rows
- `currentColor`; no emoji; no mixed fill/outline in one row

## Content
- Sentence case. Buttons start with a verb (`Calculate your ROI`, `Book a consult`)
- Specific numbers; no lorem; no “seamless / unleash / elevate / next-gen”
- Fictional brand only. Standards (ISO 27001, GDPR) are product coverage, not client logos
- No real vendor marks in the footer

## Ban list
- Inter/Roboto as display; purple/indigo mesh; emoji icons; 3 equal feature cards as the only proof
- Dual hero CTAs; stock smiling teams; real vendor or marketplace marks
- Accent as page background; `transition: all`

## Accessibility
- Contrast: ink on paper and wash; white on `action-primary`
- Visible focus; tap targets ≥ 44px on compact
- Reduced motion honored; skip link; accordion uses `<details>`
