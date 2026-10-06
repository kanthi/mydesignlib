# Rebuild prompt — Svensa Sauna (`svensa`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/svensa/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Architectural Nordic sauna cabin sanctuary website featuring deep mocha espresso split layout, illuminated cedar timber cabin display, concrete steps with ambient LED riser strip, and interactive model carousel.

## Title
Svensa Sauna — Architectural Sauna Cabins Crafted for Modern Living

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-brown: #332119;
  --bg-brown-dark: #261710;
  --bg-brown-light: #442E23;
  --text-white: #FFFFFF;
  --text-cream: #EDE2DB;
  --text-muted: #A38F85;
  --amber-warm: #FFAE42;
  --amber-glow: rgba(255, 174, 66, 0.4);
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Svensa Sauna → #
- nav .nav-bar
  - ul .nav-links
    - li: Products
    - li: Collections
    - li: Custom Builds
    - li: Projects
    - li: About
    - li: Contact
  - a: (Get a Quote) → #quote
- h1: Architectural Sauna Cabins Crafted for Modern Living.
- p: Experience the perfect balance of Scandinavian craftsmanship, premium materials, and wellness-focused design. Every Svensa Sauna cabin is built to transform homes, spas, and retreats into spaces of calm, comfort, and lasting luxury.
- a: (Explore Collection) → #collection
- section #products .specs-section
  - h2: Engineered to elevate mind, body, and habitat.
  - h3: Thermo-Aspen Cedar
  - p: Thermally modified Nordic timber offering exceptional dimensional stability, natural resistance to moisture, and a subtle organic aroma.
  - h3: Cilindro Thermal Core
  - p: High stone-capacity stainless steel column heater delivering gentle, radiant löyly humidity with precision digital thermal controls.
  - h3: Acoustic Glazing
  - p: 8mm tempered Low-E bronze glass providing panoramic vistas while sealing in radiant thermal waves with zero heat leakage.
- footer .site-footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
