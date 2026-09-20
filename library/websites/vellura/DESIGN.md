# DESIGN — Vellura (Modern Interior & Architectural Decor)

## Overview
- **Audience**: Architecture aficionados, interior designers, and discerning homeowners seeking timeless, warm-minimalist furniture and lighting.
- **Single CTA**: `Shop Collection` (secondary: `Explore Inspiration` / `View Lookbook`).
- **Emotion**: Serene Scandinavian-Japandi warmth, quiet luxury, tactile organic comfort, timeless elegance.
- **Create this feeling through**:
  - Soft travertine and bone-white canvas (`#f7f5f0`) with subtle warm architectural contrast.
  - High-refinement editorial serif typography (`Cormorant Garamond`) paired with geometric grotesque clarity (`Plus Jakarta Sans`).
  - Warm natural light photography: textured boucle, light natural oak, matte ceramic, and spun brass.
  - Tactile micro-interactions: rotating circular badges, interactive "Shop the Look" room hotspots, floating product cards, and instant cart drawer feedback.

## Source of truth
- This file + CSS `:root` in `index.html`.

## Aesthetic commitment
- **Name**: Warm Architectural Japandi / Quiet Luxury
- **Signature element**: Floating circular rotating emblem badge with central arrow CTA + interactive "Shop the Look" ambient room hotspots.

## Colors (semantic)
- `surface-page`: `#f7f5f0` — Soft warm linen/travertine backdrop
- `surface-card`: `#ffffff` — Crisp elevated alabaster card
- `surface-warm`: `#efece4` — Subtle travertine container tint
- `surface-dark`: `#1c1917` — Deep rich carbon charcoal (newsletter card & footer)
- `text-primary`: `#1c1917` — Midnight charcoal ink for high-contrast headlines
- `text-secondary`: `#78716c` — High-legibility warm slate for editorial descriptions
- `text-muted`: `#a8a29e` — Soft stone for metadata, prices, and subtle accents
- `text-inverted`: `#fafaf9` — Off-white for dark mode callout cards
- `action-primary`: `#1c1917` — Jet carbon button pill
- `action-primary-hover`: `#292524` — Hover dark tone
- `accent-brass`: `#c29b38` — Warm metallic accent
- `accent-amber`: `#d97706` — Warm glow indicators
- `border-default`: `rgba(28, 25, 23, 0.08)` — Hairline border lines

## Typography
- **Display**: `Cormorant Garamond`, serif (Weights: 500, 600, 700) — Hero headlines, section titles, editorial quotes
- **Body & UI**: `Plus Jakarta Sans`, sans-serif (Weights: 400, 500, 600, 700) — Navigation, buttons, product titles, spec labels
- **Scale**:
  - Hero display: `clamp(2.75rem, 5.2vw, 4.5rem)` (leading: 1.06, tracking: -0.02em)
  - Section title: `clamp(2.0rem, 3.5vw, 2.75rem)` (leading: 1.15, tracking: -0.02em)
  - Card title: `1.15rem` (leading: 1.3)
  - Body: `1.0rem` (leading: 1.65)
  - Price / Tag: `0.85rem` (font-weight: 600)

## Layout & Structure
1. **Header & Navigation**:
   - Translucent frosted glass navbar with custom `Vellura` brandmark, links (`Home`, `Collections`, `Inspiration`, `About us`), search toggle, bag counter with badge, and `Contact us` button.
2. **Hero Stage**:
   - Split composition matching reference:
     - Left: Big editorial headline `Modern Living, Brighter Spaces`, subhead, `Shop Collection ->` pill button, and 3 social proof metrics (`10K+ Happy Customers`, `500+ Exclusive Designs`, `4.8 Average Rating`).
     - Right: Large rounded serene living room photograph with interactive circular rotating badge (`A Brighter Home • Modern Living •`) and clickable product tags.
3. **Best Sellers Collection**:
   - Header with `OUR COLLECTION` eyebrow, `Best Sellers` title, and `View all ->` link.
   - 4 curated product cards:
     - `Luma Table Lamp` ($149.00)
     - `Nori Lounge Chair` ($320.00)
     - `Eira Pendant Light` ($199.00)
     - `Kova Side Table` ($129.00)
   - Interactive hover zoom, quick-add to shopping bag, and live cart drawer notification.
4. **Editorial Story / Brand Craft Section**:
   - Travertine container with eyebrow `ABOUT VELLURA`, title `Thoughtful Design for a Better Tomorrow`, description, `Learn more ->` button, and right-side architectural visual with floating `Design Lives Better` circular crest.
5. **Inspiration by Room ("Styled for Real Life")**:
   - Eyebrow `INSPIRATION`, title `Styled for Real Life`, `Explore more ->` link.
   - Room filter tabs: `Living Room`, `Bedroom`, `Dining`, `Workspace`.
   - Grid of room photography with interactive "Shop the Look" hotspots revealing product names and prices on click.
6. **Newsletter / VIP Club Callout**:
   - Dark carbon card `Join a More Beautiful Home`, input with submit button, and ambient lamp backdrop.
7. **Footer**:
   - Brandmark `Vellura`, category navigation (`Shop`, `Company`, `Support`), copyright, privacy links.
