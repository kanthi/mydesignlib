# Rebuild prompt — Sovren Systems (`sovren`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/sovren/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Web3 & AI studio — GSAP scroll reveals, Three.js field, Lenis smooth scroll, preloader, services, process, partners, contact. Reduced-motion aware.

## Title
Sovren Systems — Emerging systems of the future

## Description meta
Web3 & AI engineering studio. Sample powered by free GSAP, Three.js, and Lenis.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #070708;
  --panel: #121316;
  --ink: #eef0f4;
  --muted: #8b919c;
  --line: #2a2c32;
  --red: #e23d3d;
  --green: #3dd68c;
  --font: Inter, system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- p: Please stand by
- header .topbar
  - a: Sovren Systems → #top
  - button: Ambient · Sound off
  - a: Menu → #work
  - a: + Connect → #contact
- section #top .hero
  - h1: Emerging systems of the future
- section #about
  - p: Manifesto
  - h2: Sovren Systems
  - p: The internet was meant to be decentralized — and it should stay this way. We shape governance and financial systems that empower network economies and protect users’ agency.
- section #work
  - p: Services · 02
  - h2: What we build
  - article .svc.reveal
    - h3: Technics
    - ul
      - li: Smart contracts
      - li: User interfaces
      - li: Interoperability solutions
      - li: AI agent tooling
      - li: AI agent workflows
  - article .svc.reveal
    - h3: Consultancy
    - ul
      - li: Tokenomics
      - li: Governance systems
      - li: Treasury management
      - li: Liquidity strategies
      - li: Protocol architecture
- section #process
  - p: Process · 03
  - h2: How we work
  - article .step.reveal
    - h3: Listen
    - p: We begin by mapping goals, constraints, and trust assumptions until the right architecture emerges.
  - article .step.reveal
    - h3: Build
    - p: Minimal surface area, production-grade engineering — nothing on-chain that has not earned its place.
  - article .step.reveal
    - h3: Sustain
    - p: We stay with the system — auditing, maintaining, and evolving it as the network around it changes.
- section #network
  - p: Network of trust · 04
  - h2: Partners
  - p: We empower emerging organizations with decentralized infrastructure for a borderless, permissionless society.
  - article .partner.reveal
  - article .partner.reveal
  - article .partner.reveal
  - article .partner.reveal
  - article .partner.reveal
- section #contact .contact
  - p: Contact
  - h2: Get in touch
  - p: A few sentences is enough — we’ll take it from there.
  - form .reveal
    - label: Alias
    - label: Email
    - label: Message
    - button: Submit
- p: Motion stack (free/open CDN): gsap, three.js, lenis. Reduced motion is respected. Fictional studio sample — not affiliated with the original SOTD site.
- footer
  - a: hello@sovren.example → mailto:hello@sovren.example

## Fields
Keep these controls, including ids and placeholders.
- input[text] name=alias placeholder='Your alias'
- input[email] name=email placeholder='you@domain.com'
- textarea name=message placeholder='Tell us what you’re building'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
