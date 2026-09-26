# Rebuild prompt — Miel (`miel`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Restaurant
- Folder: `library/websites/miel/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Warm artisanal neighborhood bakery and morning viennoiserie atelier website with tactile editorial typography, hand-drawn pastry doodles, taped founder notes, and interactive oven reserves.

## Title
Miel — Artisanal Neighborhood Bakery & Morning Atelier

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-cream: #FBF6EE;
  --bg-surface: #FFFFFF;
  --bg-card: #FFFDF9;
  --color-crust: #C85A32;
  --color-crust-soft: #F9EBE5;
  --color-butter: #FCD561;
  --color-butter-light: #FEF6D8;
  --color-espresso: #281D17;
  --color-muted: #7A6F68;
  --color-border: #EFE4D6;
  --radius-sm: 8px;
  --radius-md: 18px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  --font-display: 'Oswald', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-hand: 'Caveat', cursive;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - nav .nav-left
    - a: About → #about
    - a: Menu → #menu
  - a: miel ATELIER → #
  - a: Journal → #story
  - a: Contact → #visit
  - button: Morning Bag 0
- main
  - section .hero-section
    - h1: A Neighborhood Bakery With A Soft Spot
    - p: We bake the familiar with a little more joy — entirely by hand, in small batches, every single morning before dawn.
    - a: Explore Today's Bake → #menu
    - a: Our Philosophy → #story
  - section #story .story-section
    - h2: Meet The Baker Behind The Counter
    - h3: "I wanted Miel to feel like the bakery you grew up with — only a little more playful."
    - p: That means knowing the dough by touch, learning every regular's morning order, and refusing to rush the parts that make a crust shatter into golden memory. We mill stoneground grain every Tuesday and let sourdough rest for 48 hours in cold cellar stone.
  - section #about .pillars-section
    - h2: Freshly Made With Care For Everyday
    - h3: Made Fresh Daily
    - p: All goods are baked fresh every morning from 4:30 AM so every bite tastes at its absolute golden prime.
    - h3: Quality Ingredients
    - p: We choose organic heritage flour, churned Normandy butter, wildflower honey, and French sea salt.
    - h3: Made To Share
    - p: Every loaf and pastry is shaped with community in mind — designed to be broken around warm breakfast tables.
  - section .hero-bread-banner
    - h2: Golden Braided Honey Challah & Seeded Sourdough
    - p: Slow-fermented for 36 hours and brushed with raw clover honey syrup straight out of the hearth.
  - section .numbers-section
    - h2: The Numbers Behind Every Loaf We Bake
  - section #menu .menu-section
    - h2: Today's Oven Schedule
    - button: All Bakes
    - button: Viennoiserie
    - button: Sourdough & Loaves
    - button: Sweet Bakes
    - h3: Classic Butter Croissant
    - p: 72 folded layers of cultured Charentes-Poitou butter, delivering an airy honeycomb crumb and crisp shatter.
    - button: Add to Bag
    - h3: Country Sesame Sourdough
    - p: Stoneground organic wheat, open crumb, blistering mahogany crust rolled in toasted sesame seeds.
    - button: Add to Bag
    - h3: Cardamom & Brown Sugar Swirl
    - p: Crushed green cardamom pods folded into enriched brioche dough with caramelized raw cane sugar.
    - button: Add to Bag
    - h3: Double Dark Pain au Chocolat
    - p: Flaky laminated viennoiserie pastry enclosing twin batons of 70% Valrhona dark chocolate.
    - button: Add to Bag
    - h3: Heritage Baltic Rye Loaf
    - p: Dense, aromatic dark rye with malted caraway and whole soaked sunflower kernels. Keeps fresh for a week.
    - button: Add to Bag
    - h3: Honey Almond Bostock
    - p: Thick brioche toast soaked in orange blossom syrup, topped with rich frangipane and toasted almonds.
    - button: Add to Bag
- h3: Your Morning Bag
- button: ×
- p: Your bag is currently empty. Pick fresh morning pastries from the oven menu!
- button: Reserve For Morning Pickup
- footer #visit .site-footer
  - p: A neighborhood bakery crafting honest loaves, buttery viennoiserie, and community joy since 2018.
  - h4: Navigation
  - ul .footer-links
    - li: About Atelier
    - li: Daily Counter
    - li: Baking Journal
    - li: Morning Orders
  - h4: Bakery Counter
  - ul .footer-links
    - li: 384 Elmwood Lane
    - li: Cinnamon District
    - li: hello@mielbakery.com
    - li: (555) 342-9182
  - h4: Opening Hours
  - p: Tuesday – Friday: 07:00 AM – 03:00 PM
  - p: Saturday – Sunday: 08:00 AM – 04:00 PM
  - p: Closed Mondays for stone milling

## Images in the page
- `assets/doodle-croissant.svg`
- `assets/doodle-bread.svg`
- `images/baker-portrait.jpg — Artisan baker at Miel Bakery`
- `assets/stamp-bakery.svg`
- `images/baker-hands.jpg — Baker shaping sourdough`
- `images/pastries-swirl.jpg — Golden cinnamon swirls`
- `images/bakery-interior.jpg — Warm bakery atmosphere`
- `images/bread-braided.jpg — Signature braided bread loaf on linen`
- `images/croissant-golden.jpg — Artisan Croissant`
- `images/bread-braided.jpg — Artisan Bread Loaf`
- `images/pastries-swirl.jpg — Cardamom Bun`
- `images/pastry-coffee.jpg — Pain au Chocolat`
- `images/baker-hands.jpg — Heritage Rye Loaf`
- `images/bakery-interior.jpg — Almond Bostock`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/doodle-bread.svg`
- `assets/doodle-croissant.svg`
- `assets/logo.svg`
- `assets/stamp-bakery.svg`
- `images/baker-hands.jpg`
- `images/baker-portrait.jpg`
- `images/bakery-interior.jpg`
- `images/bread-braided.jpg`
- `images/croissant-golden.jpg`
- `images/pastries-swirl.jpg`
- `images/pastry-coffee.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
