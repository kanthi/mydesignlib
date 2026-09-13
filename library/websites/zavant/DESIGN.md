# DESIGN — Zavant

## Overview
- Audience: High-growth founders, tech scale-ups, venture-backed teams, and premium brands seeking digital transformation from first impression to client conversion.
- Single CTA: Book a Design Sprint (`Book a Sprint`). Secondary: `Explore Our Works`.
- Emotion: High-tempo modern agency clarity, tangible craft, and decisive commercial confidence — feeling that every pixel directly drives conversion and brand authority.
- Create this feeling through:
  - Crisp alabaster canvas (`#F8F9FA`) balanced against deep obsidian frames (`#0E1015`) and high-impact electric warm orange (`#FF4800`) and acid-lime (`#B8FF24`) accents.
  - Multi-layered card depth stage in the hero exhibiting live SaaS metrics, client details, sprint vouchers, and pro-tier checklists in realistic 3D z-space.
  - Interactive services accordion featuring instantaneous preview shifts (mockups, tags, deliverables) on hover and click.
  - Bold, outcome-driven proof metrics (`80% Higher Brand Recognition`, `75% Inbound Pipeline Boost`, `70% Faster Cycles`).

## Source of truth
- This file + CSS `:root` in `index.html`. Code values override; report discrepancies.

## Aesthetic commitment
- Name: High-Fidelity Modernist Agency / Dimensional UI Depth Deck.
- Signature element: **The Multi-Layer Depth Deck** — Layered, semi-translucent cards (financial charts, client management cards, sprint vouchers, and pricing modules) arranged with subtle tilt and layered shadow elevations.

## Colors (semantic)
- `surface-page`: `#F8F9FA` (Clean alabaster ground)
- `surface-card`: `#FFFFFF` (Pure elevated card surface)
- `surface-tint`: `#F1F3F5` (Subtle container fill)
- `surface-dark`: `#0E1015` (Deep obsidian dark cards and footer)
- `border-default`: `rgba(14, 16, 21, 0.09)` (Hairline dividers)
- `border-subtle`: `rgba(14, 16, 21, 0.05)` (Soft card edges)
- `text-primary`: `#0E1015` (Jet black ink)
- `text-secondary`: `#555E68` (Balanced charcoal for body text)
- `text-faint`: `#8A94A0` (Metadata, numbers, and tags)
- `action-primary`: `#FF4800` (Electric Warm Orange — primary CTAs & highlight pills)
- `action-primary-hover`: `#E03E00` (Deeper orange on hover)
- `accent-lime`: `#B8FF24` (Acid lime highlight tag & live indicators)
- `accent-cyan`: `#00D2FF` (Telemetry cyan glow)
- `accent-lavender`: `#8A70D6` (Sprint discount violet)

### Usage rules:
- Orange (`#FF4800`) is reserved for primary CTAs and focused eye-catchers.
- Lime (`#B8FF24`) indicates live states, badges, and high-energy tags.
- Backgrounds remain predominantly light, airy, and structured with generous whitespace.

## Typography
- Primary & Display: `Plus Jakarta Sans`, -apple-system, BlinkMacSystemFont, sans-serif
- Monospace / Data: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
- Scale:
  - Hero Title: `clamp(2.75rem, 6.2vw, 5.0rem)` (leading: 1.05, tracking: -0.035em)
  - Section Display: `clamp(2.0rem, 4vw, 3.25rem)` (leading: 1.15, tracking: -0.025em)
  - Card Heading: `1.25rem` to `1.6rem` (leading: 1.3)
  - Body: `1.0rem` to `1.125rem` (leading: 1.6)
  - Small / Meta: `0.75rem` to `0.875rem` (leading: 1.4, tracking: 0.04em)

## Space & Layout
- Container max-width: `1240px` with `clamp(1.25rem, 4vw, 2.5rem)` side gutters.
- Section vertical padding: `clamp(4.5rem, 8vw, 7.5rem)`.
- Base rhythm: 4px / 8px scale (`4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`, `120`).

## Interactive Features
1. **Interactive Services Deck**: Hovering or clicking each service row (Branding, Web Design, Mobile Products, Systems, AI Products) dynamically updates the floating specimen card with mockups and deliverables.
2. **Interactive Pricing Switcher**: Toggle between Monthly Retainer and Project Sprints with instant pricing update and feature badges.
3. **Modal Project Inquiries**: One-click modal form with client budget selection and instant feedback state.
