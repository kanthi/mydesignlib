# Rebuild prompt — Vitrina (`vitrina`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/vitrina/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Art marketplace marketing site — hero portrait carousel, scroll-driven album fans, scatter tiles, icon constellation, community avatar arcs. GSAP + Lenis.

## Title
Vitrina — Where art meets market

## Description meta
Fictional art marketplace sample. Hero portrait carousel, scatter album tiles, icon row, community arcs — scroll-driven motion with GSAP + Lenis.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #eceef2;
  --shell: #f7f8fa;
  --card: #ffffff;
  --ink: #111118;
  --muted: #8b8f9a;
  --soft: #c4c7d0;
  --line: rgba(17, 17, 24, 0.08);
  --accent: #ff6b4a;
  --accent-soft: #f2d6cf;
  --pill: #ffffff;
  --shadow: 0 24px 60px rgba(20, 24, 40, 0.08);
  --shadow-lg: 0 40px 100px rgba(20, 24, 40, 0.12);
  --radius: 28px;
  --radius-sm: 16px;
  --font: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: VITRINA → #top
  - nav .nav-links “Primary”
    - a: Get Started → #get-started
    - a: Create strategy → #strategy
    - a: Pricing → #pricing
    - a: Contact → #contact
    - a: Solution → #solution
    - a: Commerce → #commerce
- section #top .hero
  - p: Class by Mira Solen
  - h1: Gatewayto
  - button: Watch
- section #get-started .trusted
  - h3: Trusted
- section #commerce .showcase
  - p: Commerce
  - h2: Showcase, Sell, & acquire ours
  - p: List editions, drop collections, and place works in front of collectors who already care about craft.
- section #strategy .masterpiece
  - h2: A place to display your masterpiece.
  - p: Artists can display · 12,480
- section #solution .connect
  - p: Whether you’re an artist looking to sell your work / or a buyer seeking unique pieces — Vitrina connects you to a world of craft.
- section #pricing .market
  - article .market-card
    - h3: Where art meets market
    - p: Allowing artists to showcase their work and buyers to find unique, inspiring pieces — without the noise of a generic marketplace.
- section .vision
  - p: Platform
  - h2: Our vision for any art technology.
  - p: Every piece of art tells a story. Vitrina lets artists stage personal journeys — and collectors follow the ones that move them.
  - a: Read more → → #contact
  - button: Business
  - button: Personal
  - button: + Create
  - figure
  - figure
  - figure
  - figure
  - figure
  - figure
- section #contact .community
  - h2: You will find yourself among us
  - p: Dive into a dynamic community where artists and buyers merge without friction.
- section #cta .cta
  - h2: Open your vitrine. Let the right people find the work.
  - p: Sample template for an art commerce marketing site — fictional brand, original assets.
  - a: Start free → → mailto:hello@vitrina.example
- footer .footer

## Images in the page
- `hero-1.jpg — Fashion portrait on coral`
- `hero-2.jpg — Editorial portrait with clear frames`
- `hero-3.jpg — Editorial portrait in plum light`
- `album-7.jpg`
- `album-1.jpg`
- `album-5.jpg`
- `album-4.jpg`
- `album-2.jpg`
- `album-3.jpg`
- `album-6.jpg`
- `album-1.jpg — Featured drop`
- `album-2.jpg — Staff collection`
- `album-3.jpg — Field ride`
- `album-4.jpg — Yellow mark`
- `album-1.jpg — Violet vessel`
- `album-5.jpg — Duo edition`
- `album-6.jpg — Cloud study`
- `avatars/01.jpg`
- `avatars/02.jpg`
- `avatars/03.jpg`
- `avatars/04.jpg`
- `avatars/05.jpg`
- `avatars/06.jpg`
- `avatars/07.jpg`
- `avatars/08.jpg`
- `avatars/09.jpg`
- `avatars/10.jpg`
- `avatars/11.jpg`
- `avatars/12.jpg`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `album-1.jpg`
- `album-2.jpg`
- `album-3.jpg`
- `album-4.jpg`
- `album-5.jpg`
- `album-6.jpg`
- `album-7.jpg`
- `albums-sheet.jpg`
- `avatars-sheet.jpg`
- `avatars/01.jpg`
- `avatars/02.jpg`
- `avatars/03.jpg`
- `avatars/04.jpg`
- `avatars/05.jpg`
- `avatars/06.jpg`
- `avatars/07.jpg`
- `avatars/08.jpg`
- `avatars/09.jpg`
- `avatars/10.jpg`
- `avatars/11.jpg`
- `avatars/12.jpg`
- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
