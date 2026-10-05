# Pactum Design System & Specification

## Brand Identity & Vision
- **Fictional Brand:** Pactum (derived from Latin *pactum* — covenant, agreement, binding proposal).
- **Tagline:** Close more clients with AI proposals.
- **Mission:** High-conversion AI proposal generator for agencies and freelancers to turn incoming client briefs into beautifully branded, structured, signed deals in minutes.
- **Reference:** Figma high-fidelity artboard by `@zahragr8r` ("Closent").

## Color Architecture
- **Canvas / Surface:**
  - Background Neutral: `#fafbfe` / `#f8fafc` (crisp modern SaaS canvas)
  - Surface Pure White: `#ffffff`
  - Subtle Grid / Dotted Line: `rgba(15, 23, 42, 0.04)`
  - Surface Muted / Inset: `#f1f5f9`
- **Primary Brand Ink:**
  - Ink 900: `#0f172a` (deep slate for titles, high-contrast display text)
  - Ink 700: `#334155` (headings, active nav, strong copy)
  - Ink 500: `#64748b` (body copy, descriptions, secondary labels)
  - Ink 400: `#94a3b8` (placeholders, muted meta text, subtle captions)
- **Primary Accent (Electric Royal Blue):**
  - Blue 600 (Primary): `#2563eb`
  - Blue 700 (Hover / Focus): `#1d4ed8`
  - Blue 50 (Soft tint / badges): `#eff6ff`
  - Blue 100 (Border active): `#dbeafe`
- **Status / Semantic Colors:**
  - Success / Approved: `#10b981` (badge `#ecfdf5`, border `#a7f3d0`)
  - Warning / Sent: `#0284c7` (badge `#f0f9ff`, border `#bae6fd`)
  - Draft / Neutral: `#64748b` (badge `#f1f5f9`, border `#e2e8f0`)
  - Danger / Rejected: `#f43f5e` (badge `#fff1f2`, border `#fecdd3`)
  - Highlight / Attention: `#f59e0b` (badge `#fffbeb`, border `#fde68a`)

## Typography Hierarchy
- **Primary Family:** Plus Jakarta Sans, Inter, system-ui, -apple-system, sans-serif
- **Scale:**
  - Display Hero H1: `52px` (mobile `36px`), line-height `1.1`, weight `700`, letter-spacing `-0.035em`
  - Section Headings H2: `36px` (mobile `28px`), line-height `1.2`, weight `700`, letter-spacing `-0.025em`
  - Sub-headings H3: `20px`, line-height `1.3`, weight `600`, letter-spacing `-0.015em`
  - Body Large: `18px`, line-height `1.6`, weight `400`
  - Body Regular: `15px`, line-height `1.5`, weight `400`
  - UI Labels / Badges: `12px` - `13px`, line-height `1.2`, weight `600`, letter-spacing `0.04em` (uppercase kickers)

## Elevation, Radii & Grid
- **Border Radii:**
  - Small (pills, badges, micro tags): `6px` - `9999px`
  - Medium (inputs, buttons, table rows): `8px` - `10px`
  - Large (cards, bento items): `16px` - `20px`
  - Container / Banner: `24px`
- **Shadows:**
  - Card Subtle: `0 1px 3px rgba(15, 23, 42, 0.05), 0 8px 24px -4px rgba(15, 23, 42, 0.04)`
  - Floating UI / Dashboard: `0 20px 40px -15px rgba(37, 99, 235, 0.12), 0 0 1px 1px rgba(226, 232, 240, 0.8)`
  - Button Glow: `0 4px 14px rgba(37, 99, 235, 0.25)`

## Key UI Components
1. **Interactive Hero Dashboard**: High-fidelity pure HTML/CSS mockup with responsive layout, real interactive chart bars with tooltips, dynamic status pills, proposal records table, and active proposal generation triggers.
2. **Interactive 3-Step Bento**:
   - Card 1: Visual interactive step progression.
   - Card 2: Interactive AI prompt selector with real-time prompt pills.
   - Card 3: Orbiting ecosystem nodes with SVG connectors.
3. **Features Bento**: 3 clean conversion-oriented automation cards.
4. **Integration Arc**: 9 real SVG tool integrations in glowing glass tiles.
5. **Pricing Matrix**: 3 agency-tier cards with annual/monthly discount toggle.
6. **FAQ Accordion**: 6 collapsible items with animated SVG chevron indicators.
7. **Bottom CTA**: Architectural curved royal blue card with glowing CTAs.
