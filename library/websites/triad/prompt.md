# Rebuild prompt — Triad Studio (`triad`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/triad/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI creative studio — three cinematic chapters for content infrastructure, production, and video.

## Title
Triad Studio — AI-powered creative for modern brands

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --ink: #0f172a;
  --muted: #64748b;
  --font: "Segoe UI", system-ui, -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section #home .chapter.ch-content
  - header .topnav
    - a: Triad → #
    - nav .nav-links
      - a: About → #about
      - a: Services → #services
      - a: Works → #works
    - a: Contact Us → #contact
  - h1: AI-Powered Content Infrastructure for Brands.
  - p: Content pipelines for ads, motion design, product storytelling, and social media campaigns.
  - a: Book a Call → → #contact
  - a: ▶ Watch Video → #video
- section #services .chapter.ch-production
  - header .topnav
    - a: Triad → #
    - nav .nav-links
      - a: About → #about
      - a: Services → #services
      - a: Works → #works
    - a: Contact Us → #contact
  - h1: Creative Production, Reengineered with AI
  - p: Produce studio-quality videos, motion graphics, and branded content through automated creative workflows and rapid iteration.
  - a: Book a Call → → #contact
  - a: ▶ → #video
- section #video .chapter.ch-video
  - header .topnav
    - a: ✦ Triad Studio → #
    - nav .nav-links
      - a: About → #about
      - a: Services → #services
      - a: Works → #works
    - a: Contact Us → #contact
  - h1: AI-Powered Video Production for Modern Brands
  - p: We create ads, product videos, motion graphics, and UGC content at a fraction of traditional cost and turnaround time.
  - a: Book a Call → → #contact
  - a: ▶ → #contact
- section #about .light
  - p: About Triad
  - h2: Three systems. One creative engine.
  - p: Triad Studio helps brands ship content infrastructure, production workflows, and video at the speed of their campaigns — without sacrificing craft.
  - article .card
    - h3: Content infrastructure
    - p: Pipelines that feed ads, social, and product storytelling from a single source of truth.
  - article .card
    - h3: Production systems
    - p: AI-assisted iteration from concept boards to delivery-ready masters.
  - article .card
    - h3: Video at scale
    - p: Ads, product films, motion, and UGC variants without starting from zero every time.
- section #works .light
  - p: Works
  - h2: Selected outcomes
  - article .card
    - h3: Launch film system
    - p: Hero + 12 cutdowns for a DTC launch in under two weeks.
  - article .card
    - h3: Always-on social kit
    - p: Modular templates that keep weekly output consistent across markets.
  - article .card
    - h3: Product story stack
    - p: 3D, live action, and motion unified under one brand system.
  - h2: Let’s build your next content system
  - p: Book a call — we’ll map pipelines, production, and video to your roadmap.
  - a: Book a Call → → mailto:hello@triad.studio
- footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero-content.jpg`
- `hero-production.jpg`
- `hero-video.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
