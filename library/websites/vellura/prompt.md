# Rebuild prompt — Vellura (`vellura`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/vellura/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern Scandinavian and Japandi interior & decor brand: editorial serif typography, floating rotating circular badges, interactive 'Shop the Look' room hotspots, curated Best Sellers collection with instant bag drawer, room concept gallery, and dark travertine newsletter banner.

## Title
Vellura — Modern Living, Brighter Spaces

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #f8f6f0;
  --surface-card: #ffffff;
  --surface-warm: #f2eee5;
  --surface-travertine: #e9e4d9;
  --surface-dark: #191816;
  --text-primary: #1c1917;
  --text-secondary: #78716c;
  --text-muted: #a8a29e;
  --action-primary: #1c1917;
  --action-primary-hover: #292524;
  --accent-brass: #b89058;
  --accent-amber: #d97706;
  --border-default: rgba(28, 25, 23, 0.08);
  --border-focus: rgba(28, 25, 23, 0.25);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 2px 6px rgba(28, 25, 23, 0.04);
  --shadow-card: 0 10px 30px -4px rgba(28, 25, 23, 0.06), 0 0 0 1px rgba(28, 25, 23, 0.04);
  --shadow-elevated: 0 20px 40px -8px rgba(28, 25, 23, 0.1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: Vellura → #
  - ul .nav-menu
    - li: Home
    - li: Collections
    - li: Inspiration
    - li: About us
  - button: 0
  - a: Contact us → #newsletter
- section .hero-section
  - h1: Modern Living, Brighter Spaces
  - p: Discover timeless furniture and decor crafted for a more beautiful everyday life.
  - a: Shop Collection → #collection
- section #collection .section-collection
  - h2: Best Sellers
  - a: View all → #inspiration
- section #story .story-section
  - h2: Thoughtful Design for a Better Tomorrow
  - p: We create modern furniture and lighting that brings warmth, comfort, and harmony to your home. Every curve, joint, and surface is calibrated for tactile calm.
  - a: Learn more → #inspiration
- section #inspiration .inspiration-section
  - h2: Styled for Real Life
  - a: Explore more → #collection
  - button: All Rooms
  - button: Living Room
  - button: Bedroom
  - button: Dining
  - button: Workspace
- section #newsletter .newsletter-section
  - h2: Join a More Beautiful Home
  - p: Get special offers, new arrivals, and architectural inspiration straight to your inbox.
  - form .newsletter-form
- footer .site-footer
  - p: Modern living for a brighter tomorrow. Thoughtfully crafted furniture and ambient lighting.
  - a: IG → #
  - a: PI → #
  - a: X → #
  - h4: Shop
  - ul .footer-link-list
    - li: All Products
    - li: Lighting
    - li: Furniture
    - li: Decor
  - h4: Company
  - ul .footer-link-list
    - li: About us
    - li: Our mission
    - li: Careers
    - li: Blog
  - h4: Support
  - ul .footer-link-list
    - li: FAQ
    - li: Shipping
    - li: Returns
    - li: Contact
  - a: Terms → #
  - a: Privacy → #
  - a: Cookies → #

## Images in the page
- `assets/hero.webp — Serene Scandinavian Japandi living room with cream sofa and circular wood table`
- `assets/prod-lamp.webp — Luma Table Lamp with soft glowing shade`
- `assets/prod-chair.webp — Nori Lounge Chair in textured cream fabric`
- `assets/prod-pendant.webp — Eira Pendant Light spun brass`
- `assets/prod-table.webp — Kova Side Table in natural solid oak`
- `assets/story.webp — Vellura craftsmanship architectural interior`
- `assets/room-living.webp — Living room styling`
- `assets/room-bedroom.webp — Bedroom styling`
- `assets/room-dining.webp — Dining room styling`
- `assets/room-workspace.webp — Workspace styling`
- `assets/newsletter.webp — Warm ambient interior lighting`

## Fields
Keep these controls, including ids and placeholders.
- input[email] #subscriberEmail placeholder='Your email address'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero.webp`
- `assets/newsletter.webp`
- `assets/prod-chair.webp`
- `assets/prod-lamp.webp`
- `assets/prod-pendant.webp`
- `assets/prod-table.webp`
- `assets/room-bedroom.webp`
- `assets/room-dining.webp`
- `assets/room-living.webp`
- `assets/room-workspace.webp`
- `assets/story.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
