# DESIGN — Vettora

## Overview
- Audience: In-house SEO leads and agency operators who buy editorial placements, not “guest-post packages”
- Single CTA: Start building links
- Emotion: Confident trading floor — the inventory is already on the table
- Create this feeling through:
  - Electric violet bloom as a *stage*, never a full-page mesh
  - Live publisher ledger (DA / DR / traffic / TAT / price) as the hero proof
  - Dark marketplace grid with tabular metrics
  - One overlapping V-monogram, repeated giant in the footer
  - Pill nav and pill CTAs only; cards stay 16–20px, not 16px-everywhere chrome

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Electric violet marketplace
- Signature element: Live publisher ledger floating on a violet bloom, plus an oversized faded wordmark footer

## Colors (semantic)
- surface-page: `#FFFFFF` — default marketing field
- surface-soft: `#F4F4F8` — testimonials / FAQ well
- surface-dark: `#111114` — marketplace trading floor only
- surface-card: `#FFFFFF`
- text-primary / ink: `#121218`
- text-secondary / muted: `#5E5E6C`
- text-on-dark: `#F5F4FA`
- text-on-violet: `#FFFFFF`
- border-default / line: `#E6E4EE`
- action-primary / accent: `#6E4DFF` — primary buttons, Order pills, active filters
- action-primary-hover: `#5B3CF0`
- hero-bloom-a: `#B9A6FF`
- hero-bloom-b: `#7A5BFF`
- hero-bloom-c: `#6244F0`
- status-success: `#1F9D5A` — dofollow / live only, never decorative fills
- status-danger: `#E24B4B` — errors only
- Usage rules:
  - Accent is for actions and the hero stage, not body text or full-bleed inner sections
  - Green/red only on metrics and link-type chips
  - Dark surface is one band (marketplace), not a second theme

## Typography
- Display: Sora — H1/H2/wordmark
- Body: Outfit — UI, nav, cards, FAQ
- Label/utility: Outfit 500–600, uppercase tracking on kicker pills; IBM Plex Mono for prices/DA/DR
- Scale:
  - display: `clamp(2.6rem, 6.2vw, 4.35rem)` / 700 / 1.05 / -0.04em
  - 3xl: `clamp(2.1rem, 4vw, 3.15rem)` / 700 / 1.1
  - 2xl: `clamp(1.7rem, 2.6vw, 2.2rem)` / 650
  - xl: 1.35rem / 600
  - lg: 1.125rem
  - base: 1rem / 400 / 1.55
  - sm: 0.875rem
  - xs: 0.75rem
- Rules: H1 measure ~16ch; body ~42ch; tabular-nums on every metric; `text-wrap: balance` on display

## Space
- section-y: `clamp(4.25rem, 9vw, 6.75rem)`
- wrap: `min(1120px, 100% - 2.5rem)`
- hero wrap slightly wider: `min(1180px, 100% - 2rem)`
- gap scale: 4 / 8 / 12 / 16 / 24 / 32 / 48

## Layout and responsiveness
### Compact (< ~640px)
- Single column; page margin 1.1rem; hamburger nav; stack CTAs (primary last); ledger becomes stacked publisher cards; marketplace 1-col
### Medium (~640–1023px)
- 2-col marketplace; guarantees 2×2; FAQ 1-col; process stacks under copy
### Expanded (≥ ~1024px)
- max 1120–1180; pill nav; 3-col marketplace; 4-up guarantees; FAQ 2-col; process split

## Shape & elevation
- radius-card: 18px; radius-row: 14px; radius-pill: 999px; radius-input: 12px
- Nested cards: outer 18, inner 12 (concentric)
- One soft elevation on floating product: `0 24px 60px rgba(40, 20, 90, 0.22)`
- No drop shadow on every card — borders do structure on paper; shadow only on hero ledger + featured quote

## Components
### Buttons
- Primary: `action-primary` fill, white label, `radius-pill`, Outfit 600 sm; one per view above the fold
- States: hover → `action-primary-hover` + translateY(-1px); focus → 3px accent ring; active scale 0.97; disabled 0.4 opacity
- Secondary: white / translucent white on violet; ghost on paper (`border-default`)
- Order pill: compact primary; Cart is ghost with plus

### Nav
- Frosted white pill on the bloom; logo left, links center, Log in text + dark Get started
- Compact: logo + Get started + menu button; drawer from top

### Ledger / cards
- Hero ledger = product-as-proof, not a screenshot. Columns: site, DA, DR, traffic, country, TAT, link type, price, action
- Marketplace cards: live/niche chips, domain, DA/DR/traffic, dofollow + language + geo, price, Cart / Order
- Never replace the ledger with three equal feature cards

### Accordion / FAQ
- Rounded 16px rows, number prefix, chevron; only one service row open at a time; FAQ may be multi-open
- Focusable buttons, `aria-expanded`

### Inputs
- Height 44px; 12px radius; 1px line; focus 2px accent ring

## Motion
- Purpose: stage the ledger, reveal bands, accordion height
- duration 220–280ms; ease `cubic-bezier(0.22, 1, 0.36, 1)`
- reveal: opacity + translateY 16px; hover lift ≤3px
- Lenis smooth scroll + GSAP ScrollTrigger on bands
- reduced-motion: opacity only, no Lenis, no hover translate

## Iconography
- Inline SVG, 1.6px stroke, 16/18/20 sizes, `currentColor`
- No emoji; no mixed fill/outline in one row
- Fav/heart on ledger is outline until toggled fill

## Content
- Sentence case headlines; buttons start with a verb
- Specific numbers (DA 83, 6 days TAT, $30) over “powerful outreach”
- Fictional publishers, agencies, and tool names only
- Contact `@vettora.example`

## Ban list
- Inter / Roboto as display; Tailwind indigo `#6366F1` as the brand
- Real SEO tools (Ahrefs, Semrush, Moz, HubSpot, Majestic, Zapier)
- Real publisher domains from the reference
- Three equal cards as the only proof; emoji icons; lorem; “seamless / unleash / elevate”

## Accessibility
- White text on bloom ≥ 4.5:1; ink on paper
- Visible focus; tap targets ≥44px on compact
- Reduced motion honored; accordion keyboardable
