# Rebuild prompt — Filigran (`filigran`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/filigran/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Banknote-grade mathematical guilloche rosette crypto yield platform with interactive compound interest calculator slider, parabolic APY growth curve, and emerald green filigrane moiré textures.

## Title
Filigran — Crypto Pains? Try crypto Gains. Gain 7.5% APY.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-cream: #F7F5EE;
  --green-dark: #07221C;
  --green-deep: #051A15;
  --green-emerald: #0A352B;
  --teal-cyan: #2DD4BF;
  --text-white: #FFFFFF;
  --text-dark: #121E1B;
  --text-muted: #6B7B76;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero-wrapper
  - nav .top-nav
    - a: filigran → #
    - ul .nav-links
      - li: Filigran App
      - li: Pricing
      - li: Security
      - li: About us
    - a: Sign up → #signup
  - h1: Crypto Pains? Try crypto Gains.
  - p: Crypto doesn't have to feel like gambling. Play long term. Gain 7.5%* APY and earn the highest yield across chains.
  - form .hero-email-box
    - button: Sign up
  - button: Start Earning
- section .section-easiest
  - h2: The easiest way to earn yield.
  - p: Filigran finds the best crypto lending deals across markets, automatically rebalancing your portfolio to hedge risks and optimize yields effortlessly.
- section .section-download
  - h2: Download Filigran. Start stacking.
  - a:  Get the App → #download

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your e-mail'
- input[range] #apySlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
