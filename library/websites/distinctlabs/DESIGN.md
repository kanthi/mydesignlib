# DESIGN — DistinctLabs

## Overview
- Audience: Robot-cell engineers buying actuators and housings, not hobby kits.
- Single CTA: Get a quote
- Emotion: Bench-precise — a white grid, a dark viewer, a cyan commit.
- Create this feeling through:
  - Split hero: copy on paper, part on ink
  - Three-bar mark kept (slight D-gap remix)
  - IBM Plex Sans + Mono, cyan `#4DB8E8` only on the primary action
  - Quote UI as product-as-proof, not three feature cards

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Industrial product — paper and ink
- Signature element: Three-bar mark + split quote viewer

## Colors (semantic)
- surface-page: `#F4F5F7`
- surface-paper: `#FFFFFF`
- surface-ink: `#0E1013`
- text-primary: `#111317`
- text-on-ink: `#F3F4F6`
- text-secondary: `#5C636C`
- action-primary: `#4DB8E8` — cyan. Buttons and links only.
- action-ink: `#0E1013`
- border-default: `#E2E5EA`
- status-warn: `#E6B800`
- status-fail: `#D64545`
- status-pass: `#2FA36B`
- Usage: one cyan object per cluster. Never a cyan page wash.

## Typography
- Display / UI: IBM Plex Sans 400–600, tracking `-0.02em` on H1
- Spec: IBM Plex Mono 400, tabular numbers
- Scale: display clamp 2.4–3.6rem / 3xl 1.8rem / base 1.02 / sm 0.82 / xs 0.72
- H1: sentence case, tight leading 1.05, measure ≤ 16ch

## Space
- wrap: min(1180px, 100% - 2.5rem)
- section-y: clamp(3.5rem, 7vw, 5.5rem)
- Grid: 40px faint lines on paper
- Radius: 0 on the page, 8px on the viewer chrome and inputs

## Layout and responsiveness
### Compact
- Hero stacks (copy then viewer). Quote form full width. Nav drawer.
### Expanded
- Hero 1fr / 1.05fr. Quote 1.1fr viewer / 0.9fr config. Specs 2-col.

## Shape & elevation
- No drop shadows on cards. 1px `border-default`.
- Viewer: ink field, 1px grid, part centered.

## Components
### Buttons
- Primary: cyan fill, ink type, 8px radius, height 44px
- Ghost: 1px border
- Hover: translateY(-1px); active 0.97; focus 2px cyan ring
### Nav
- Wordmark + three bars. Links IBM Plex 500 0.78rem. Cyan “Get a quote”
### Quote
- Drop zone, 3D still + DFM overlay, alloy chips, qty table, warn list
### Mark
- Three vertical bars, equal stroke, middle bar inset 1px (the remix). Never as a hamburger.

## Motion
- 220ms; DFM overlay opacity only; reduced-motion: no translate

## Content
- DistinctLabs. `cells@distinctlabs.example`
- Actuators, housings, joints — not Digital Metal, not castings.

## Ban list
- Inter display, purple, emoji, real robot OEMs, scraped Digital Metal parts, three equal SaaS cards as the page

## Accessibility
- Cyan only with ink text
- Tap ≥ 44px
