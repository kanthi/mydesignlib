# Rebuild prompt — Bravik & Co (`bravik`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/bravik/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-conviction tech design studio portfolio with generative chromatic tartan systems, resonant wave harmonics, parametric helical spring physics, and monospace typographic authority.

## Title
Bravik — Design Studio for Companies That Want to Be Taken Seriously

## Description meta
We're a design studio for companies that want to be taken seriously. We work across brand, digital products, and websites to turn ideas into clear, distinctive experiences.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-obsidian: #0D0F12;
  --color-graphite: #15181D;
  --color-graphite-elevated: #1D2128;
  --color-olive: #737567;
  --color-olive-dark: #585A4D;
  --color-cobalt: #1E3A8A;
  --color-cyan-glow: #06B6D4;
  --color-solar-gold: #FBBF24;
  --color-magenta-glow: #F43F5E;
  --color-text-primary: #F3F4F6;
  --color-text-secondary: #9CA3AF;
  --color-text-muted: #64748B;
  --color-border: rgba(255, 255, 255, 0.12);
  --color-border-subtle: rgba(255, 255, 255, 0.06);
  --font-mono: 'Space Mono', monospace;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --max-width: 1360px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Bravik & Co → #hero
  - nav “Primary Navigation”
    - ul .nav-links
      - li: Work
      - li: Philosophy
      - li: Capabilities
      - li: Contact
  - button: Contact
- main
  - section #hero .hero-section
    - button: HELLO@BRAVIK.STUDIO CLICK TO COPY
    - a: → SELECTED WORK → #work
    - a: TWITTER / X → https://x.com
    - a: LINKEDIN → https://linkedin.com
    - a: GITHUB → https://github.com
  - section #work .works-section
    - a: START A PROJECT → → #contact
  - section #philosophy .philosophy-section
    - h2: Our Practice
    - h3: Design as proof for deep technical conviction.
    - h4: Mathematical Systems, Not Moodboards
    - p: We do not assemble random visual trends. Every identity system is governed by parametric mathematical rules, harmonic wave physics, and typographic hierarchy designed to scale across dev tools, CLI interfaces, and web applications.
    - h4: Anti-Slop Aesthetics
    - p: No rounded gradient cards with meaningless sparkle emojis. No generic AI illustrations. We design bespoke visual tokens, custom chromatic grids, and tactile physical metaphors that position your startup as the undisputed category authority.
    - h4: Production-Grade Frontends
    - p: We do not leave you stranded with static Figma frames. We deliver clean, vanilla, high-performance static code with bespoke WebGL/Canvas micro-interactions and smooth scroll orchestration ready for deployment.
  - section #capabilities .capabilities-section
    - h4: Brand Architecture
    - ul
      - li: Category Positioning
      - li: Naming & Semantic Lockups
      - li: Generative Visual Systems
      - li: Comprehensive Brand Manuals
    - h4: Flagship Web
    - ul
      - li: High-Performance Marketing
      - li: GSAP & Canvas Motion
      - li: Interactive 3D Specimens
      - li: Responsive Craft & Micro-Feel
    - h4: Product Design
    - ul
      - li: Core Application UX/UI
      - li: Design Token Architectures
      - li: Developer Experience & CLI
      - li: Design-to-Code Engineering
    - h4: Technical Artifacts
    - ul
      - li: Mathematical Diagrams
      - li: Investor & Keynote Decks
      - li: Interactive Calculators
      - li: Physical Swag & Print Craft
  - section #contact .inquiry-section
    - button: HELLO@BRAVIK.STUDIO COPY EMAIL
    - a: OPEN MAIL CLIENT ↗ → mailto:hello@bravik.studio
- footer .site-footer
  - a: TOP ↑ → #hero

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
