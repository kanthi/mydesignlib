# Rebuild prompt — Claret (`claret`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/claret/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Luxury handbag ecommerce — bold red editorial hero, category showcase, polaroid craft details, customer gallery, bestseller grid, stacked testimonials, giant wordmark footer.

## Title
Claret — Carry confidence. Wear elegance.

## Description meta
Fictional luxury handbag brand. Red editorial hero, category showcase, polaroid craft details, product grid, testimonials, VIP footer.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Syne:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --red: #d42020;
  --red-deep: #b81414;
  --ink: #121212;
  --muted: #7a7a7a;
  --soft: #b8b8b8;
  --cream: #faf8f5;
  --blush: #f7ebe8;
  --white: #ffffff;
  --font: Syne, system-ui, sans-serif;
  --serif: "Cormorant Garamond", Georgia, serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 220ms;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  --section-y: clamp(3rem, 7vw, 5rem);
  --wrap-pad: clamp(1.25rem, 4vw, 2.5rem);
  --text-display: clamp(2.6rem, 6.5vw, 4.4rem);
  --radius-sharp: 2px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: Claret → #top
  - nav .nav-links “Primary”
    - a: Shop → #categories
    - a: Craft → #details
    - a: Best Sellers → #bestsellers
    - a: Stories → #stories
  - a: Contact → #contact
  - a: Contact → #contact
- section #top .hero
  - h1: Carry Confidence Wear Elegance
  - figure
  - figure
  - ul .hero-features
    - li: Premium vegan leather
    - li: Free shipping
    - li: 30-day returns
- section #craft .craft
  - h2: Every stitch, zipper, and handle is built with precision.
  - a: Contact us ↗ → #contact
- section #categories .categories
  - ul .cat-list “Bag categories”
    - li: Classic Tote Bag
    - li: Crossbody Bag
    - li: Shoulder Bag
  - figure
  - figure
- section #details .details
  - figure .polaroid
  - figure .polaroid
  - figure .polaroid
  - figure .polaroid
  - figure .polaroid
- section #gallery .gallery
  - figure
  - figure
  - figure
- section #bestsellers .bestsellers
  - h2: Loved by Thousands. Chosen every day.
  - p: Explore our most-loved handcrafted bags — designed for timeless elegance, durability, and everyday function.
  - a: Shop best sellers → → #bestsellers
  - article .bs-card.reveal
    - h3: Everyday Tote Bag
    - p: Perfect for work, shopping, and daily essentials with a spacious, organized interior.
  - article .bs-card.reveal
    - h3: Luxury Crossbody Bag
    - p: Handcrafted from premium vegan leather with adjustable straps and polished hardware.
  - article .bs-card.reveal
    - h3: Classic Shoulder Bag
    - p: Timeless silhouette designed for effortless style and all-day comfortable wear.
  - article .bs-card.reveal
    - h3: Saddle Satchel Bag
    - p: Rich textured finish with water-resistant lining and secure magnetic closure.
  - article .bs-card.reveal
    - h3: Orbit Handle Bag
    - p: Sculptural cutout handle with a modern crescent form for evening or day.
  - article .bs-card.reveal
    - h3: Soft Cloud Mini
    - p: Pliable silhouette that holds shape — a daily companion with quiet luxury.
- section #stories .testimonials
  - h2: Loved by Thousands, trusted for Elegance.
  - p: Discover how our handcrafted bags elevate everyday styles with timeless design and unmatched durability.
  - article .t-card
    - p: The Classic Tote is my absolute favorite for daily work and travel. The premium vegan leather feel and spacious interior organize all my essentials effortlessly.
  - article .t-card
    - p: I brought the Luxury Crossbody on a weekend getaway. The stitching, gold hardware accents, and craftsmanship are truly top tier for the price.
- section #contact .faq
  - h3: Still have questions about Claret?
  - p: Our care team is available to help with sizing, care, and orders.
  - a: Contact Care → → mailto:hello@claret.example
- footer .footer
  - h4: Categories
  - a: Classic Totes → #categories
  - a: Luxury Crossbody → #categories
  - a: Evening Clutches → #categories
  - a: Travel Duffles → #bestsellers
  - h4: Our Brand
  - a: Our Heritage → #craft
  - a: Artisan Materials → #details
  - a: Sustainability → #details
  - a: Press & Awards → #stories
  - h4: Customer Care
  - a: Privacy Policy → #contact
  - a: Terms of Service → #contact
  - a: Shipping & Returns → #contact
  - h4: Join the Claret VIP Club
  - p: Receive early access to new collections, seasonal offers, and private sales.
  - form .vip-form
    - button: Subscribe →
  - a: Fb → #
  - a: In → #
  - a: X → #
  - a: Ig → #

## Images in the page
- `bag-brown.jpg — Brown structured shoulder bag`
- `bag-green.jpg — Olive architectural tote`
- `lifestyle.jpg — Claret bag in everyday wear`
- `bag-camel.jpg — Classic tote`
- `bag-mini.jpg — Crossbody`
- `bag-burgundy.jpg — Shoulder bag`
- `bag-red.jpg`
- `bag-terra.jpg`
- `detail-1.jpg — Vegan leather texture`
- `detail-2.jpg — Handcrafted stitching`
- `detail-3.jpg — Spacious interior`
- `detail-4.jpg — Water-resistant finish`
- `detail-5.jpg — Premium metal hardware`
- `bag-burgundy.jpg — Customer wear burgundy bag`
- `bag-green.jpg — Customer wear olive tote`
- `bag-terra.jpg — Customer wear terracotta bag`
- `bag-brown.jpg`
- `bag-terra.jpg — Everyday tote bag`
- `bag-mini.jpg — Luxury crossbody bag`
- `bag-brown.jpg — Classic shoulder bag`
- `bag-green.jpg — Saddle satchel bag`
- `bag-burgundy.jpg — Orbit handle bag`
- `bag-camel.jpg — Soft cloud mini`
- `bag-mini.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your email address'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `bag-brown.jpg`
- `bag-burgundy.jpg`
- `bag-camel.jpg`
- `bag-green.jpg`
- `bag-mini.jpg`
- `bag-red.jpg`
- `bag-terra.jpg`
- `detail-1.jpg`
- `detail-2.jpg`
- `detail-3.jpg`
- `detail-4.jpg`
- `detail-5.jpg`
- `details-sheet.jpg`
- `index.html`
- `lifestyle.jpg`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
