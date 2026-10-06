# Rebuild prompt — Strobe (`strobe`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/strobe/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Brutalist motion-driven brand and digital agency website template: monumental kinetic typography hero, live client ticker marquee, interactive WebGL and 3D portfolio grid, capabilities breakdown, founder manifesto, verbatim client testimonials, and bold closing CTA.

## Title
STROBE — Moving Brands Forward

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #08090C;
  --bg-surface: #12141A;
  --bg-elevated: #1A1E26;
  --accent-lime: #CCFF00;
  --accent-pink: #FF3366;
  --accent-cyan: #00F0FF;
  --text-white: #FFFFFF;
  --text-muted: #7E8794;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 14px;
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: STROBE. → #hero
  - ul .nav-links
    - li: WORK
    - li: SERVICES
    - li: ABOUT US
    - li: MOTION INDEX
  - button: REACH OUT >
- main
  - section #hero .hero-section
    - h1: Moving Brands Forward
    - p: Strobe builds motion-driven brand systems, unifying branding, web, and motion into a single evolving execution.
    - button: REACH OUT >
  - section #work .section-work
    - h2: Selected Work
    - article .work-card
      - h3: Sidehit Boombox
      - p: The engine behind irresistible games.
    - article .work-card
      - h3: Lorikeet 3D
      - p: Spatial WebGL & e-commerce identity.
    - article .work-card
      - h3: Hypercell AI
      - p: Autonomous cloud infrastructure rebrand.
    - article .work-card
      - h3: Vektor Mobility
      - p: Kinetic telemetry & automotive dashboard.
  - section #services .section-capabilities
    - h2: Capabilities
    - h3: Brand Systems
    - p: Visual identities built natively for screens. Motion language, logo behavior, typography systems, and art direction.
    - h3: Motion Design
    - p: High-octane product animations, broadcast packages, and 3D kinetic visuals that command attention in seconds.
    - h3: Interactive Web
    - p: Bespoke digital experiences built on clean headless architectures, WebGL shaders, and smooth GSAP choreography.
    - h3: Design Systems
    - p: Modular UI kits, token hierarchies, and cross-platform component libraries that scale your engineering velocity.
  - section #about .section-about
    - h2: We Don't Chase Awards. We Build Unfair Advantage.
    - p: Strobe was founded in 2020 after spending years inside top digital agencies. Our ambition has always been to bring movement to traditionally static brand systems, natively aligned with today’s fast-moving digital landscape.
    - p: Our work blends art direction, motion, and web development with an unrelenting focus on conversion and market dominance.
    - p: "Working with Strobe felt like bringing in an elite special forces design squad. They took our static enterprise product and turned it into an kinetic powerhouse that doubled our demo conversion within 30 days."
  - section #cta .section-monolith-cta
    - h2: Let's Cut The BS & Talk To Us >
    - button: START A PROJECT >
- button: ×
- h3: REACH OUT
- form
  - button: SEND INQUIRY >
- footer .site-footer

## Images in the page
- `assets/project-sidehit.svg — Sidehit Boombox project mockup`
- `assets/project-lorikeet.svg — Lorikeet 3D project mockup`
- `assets/project-hypercell.svg — Hypercell AI project mockup`
- `assets/project-sidehit.svg — Vektor Mobility project mockup`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='YOUR NAME'
- input[email] placeholder='WORK EMAIL'
- input[text] placeholder='COMPANY / PROJECT URL'
- textarea placeholder='TELL US ABOUT THE SCOPE & TIMELINE'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/project-hypercell.svg`
- `assets/project-lorikeet.svg`
- `assets/project-sidehit.svg`
- `assets/strobe-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
