# Kindred — Design System Specification

## Brand Overview
**Kindred** is an umbrella technology collective crafting calm, intentional digital products for the rhythm of modern family life. Rooted in dignity, patience, and generational care, Kindred rejects hyper-engaging dopamine loops in favor of enduring, calm utility across parenting, eldercare coordination, and shared household routines.

## Visual Tone & Principles
- **Editorial & Restrained:** Grounded by authoritative yet warm display serif typography reminiscent of vintage bookcraft and thoughtful quarterly journals.
- **Airy & Unhurried:** Generous vertical rhythm (`80px`–`120px` section padding) and single wide-column reading paths.
- **Warm Tactility:** Linen background (`#f9f6f2`), deep plum ink typography (`#512731`), soft buttery yellow accent panels (`#f7eaa5`), and muted amethyst secondary notes (`#a48c94`).
- **Human Bookends:** Rounded candid photography tiles (8px radius) anchored at viewport margins to frame conversational headlines without cluttering the reading path.

---

## Design Tokens

### Color Palette
```css
:root {
  /* Core Canvas & Text */
  --color-neutral: #f9f6f2;                /* Warm linen canvas */
  --color-surface: var(--color-neutral);
  --color-primary: #512731;                /* Deep plum ink */
  --color-on-surface: var(--color-primary);

  /* Accents & Highlights */
  --color-secondary: #f7eaa5;              /* Soft butter yellow accent */
  --color-brand-gothic-amethyst: #a48c94;  /* Dusty mauve / amethyst */
  --color-rule: rgba(81, 39, 49, 0.16);   /* Subtle plum rule */
  --color-rule-solid: #512731;             /* Solid vertical accent rule */

  /* Elevation */
  --shadow-sm: 0 4px 14px rgba(81, 39, 49, 0.08);
  --shadow-md: 0 10px 28px rgba(81, 39, 49, 0.12);

  /* Radii */
  --radius-button: 5px;
  --radius-card: 8px;
  --radius-tile: 8px;

  /* Spacing Scale */
  --space-xs: 8px;
  --space-sm: 20px;
  --space-md: 46px;
  --space-lg: 80px;
  --space-xl: 110px;
}
```

### Typography Hierarchy
- **Display Serif (Headlines):** `Playfair Display`, `Cormorant Garamond`, Georgia, serif
  - `headline-lg`: `110px` / `1.15` line-height, 400 weight (Hero display)
  - `headline-md`: `72px` / `1.25` line-height, 400 weight (Section titles)
  - `headline-sm`: `47px` / `1.35` line-height, 400 weight (Careers banner & feature leads)
- **Geometric Sans (Body, Kickers & Navigation):** `DM Sans`, Inter, -apple-system, sans-serif
  - `headline-xs / kicker`: `18px`–`24px`, uppercase, `0.08em` tracking, 500 weight
  - `body-lg / lead`: `20px` / `1.6` line-height, 400 weight
  - `body-md`: `16px` / `1.6` line-height, 400 weight
  - `nav / button`: `16px` / `1.2`, 500 weight

---

## Component Architecture

1. **Global Header:**
   - Wordmark left in serif (`Playfair Display`, 24px) paired with subtle subscript pill.
   - Centered navigation links (`About`, `Collective Brands`, `Philosophy`, `Careers`) with plum underline hover transitions.
   - Far-right prominent text-link button: "View Open Roles →" with subtle plum border.

2. **Hero Display with Corner Photo Framing:**
   - Centered oversized two-line serif headline (`110px`) in plum ink.
   - Symmetrically anchored candid photo tiles at top-left and top-right margins with 8px radius and soft shadow, framing the headline without encroaching on text flow.

3. **Lead Copy Callout (Two-Column):**
   - Left column: 1px deep plum vertical rule with `20px` inset, containing 20px lead editorial copy and two link-style CTAs with hover arrow nudges ("Explore Brands", "Open Roles").
   - Right column: Portrait candid photography card with subtle plum caption.

4. **Philosophy & About Grid:**
   - Kicker overline tag in uppercase geometric sans.
   - Mid-size headline (`72px`) paired with two-column narrative and a soft butter yellow accent card (`#f7eaa5`) highlighting the Kindred Operating Manifesto.

5. **Collective Portfolio Brands Row:**
   - Curated showcase of Kindred's 4 core family technology initiatives:
     - **Hearth**: Household rhythm and shared family calendar.
     - **Nook**: Postpartum and early childhood milestone journaling.
     - **Tether**: Intergenerational care and elder wellbeing check-ins.
     - **Cradle**: Pediatric nutrition and holistic developmental tracking.
   - Interactive hover cards with plum arrow transitions and category badges.

6. **Careers Callout Banner:**
   - High-contrast highlight container in `--color-secondary` (`#f7eaa5`).
   - `46px` internal padding, `8px` rounded corners.
   - Serif `47px` headline paired with prominent action link.

7. **Footer:**
   - Clean, stacked editorial links, contact channel (`hello@kindredcare.co`), copyright 2026, and noindex/privacy notes.
