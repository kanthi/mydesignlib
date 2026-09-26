# Rebuild prompt — Arcopolis (`arcopolis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Real Estate
- Folder: `library/websites/arcopolis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cinematic 3D WebGL architectural masterplanning experience — procedural topological terrain, luminous spline light ribbons, rotating monolith core, interactive audio synthesizer, and 5-chapter kinetic narrative journey.

## Title
Arcopolis — We Build the Future of Architecture & Masterplanning

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canvas: #02040a;
  --bg-surface-glass: rgba(6, 11, 25, 0.75);
  --bg-surface-elevated: rgba(10, 18, 38, 0.88);
  --bg-card: rgba(8, 14, 30, 0.7);
  --cyan-laser: #00f0ff;
  --cyan-glow: rgba(0, 240, 255, 0.45);
  --cyan-faint: rgba(0, 240, 255, 0.12);
  --blue-electric: #38bdf8;
  --blue-sapphire: #2563eb;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-standard: rgba(255, 255, 255, 0.14);
  --border-cyan: rgba(0, 240, 255, 0.45);
  --text-heading: #f8fafc;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-cyan: #00f0ff;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Space Grotesk', var(--font-sans);
  --font-mono: 'JetBrains Mono', monospace;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --shadow-hud: 0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px rgba(0, 240, 255, 0.3);
  --shadow-glow: 0 0 25px rgba(0, 240, 255, 0.4);
  --container-max: 1280px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Arcopolis → #
  - ul .nav-items
    - li: Future
    - li: Innovation
    - li: Collaboration
    - li: Purpose
    - li: Masterplan
    - li: Portfolio
  - button: Login
  - button: :: Menu
- nav .chapter-nav-left “Chapter progression”
  - button: Future
  - button: Innovation
  - button: Collaboration
  - button: Purpose
  - button: Masterplan
- main .narrative-scroll-wrapper
  - section #chapter-0 .chapter-section
    - h1: We build the future of architecture
    - p: For over 40 years, Arcopolis has pioneered carbon-negative masterplanned communities, iconic high-altitude mega-structures, and sustainable urban living.
    - a: Explore Projects → #portfolio
    - button: Free Orbit 3D
  - section #chapter-1 .chapter-section
    - h2: Reimagining the contours of light
    - p: Our dynamic infrastructure networks weave seamlessly across rugged natural topographies, channeling renewable energy along illuminated conduits.
    - button: Next: Collaboration ▾
  - section #chapter-2 .chapter-section
    - h2: We work with a network of visionaries
    - p: Architects, bio-engineers, urban planners, and digital sculptors converging to build living structural ecosystems for generations to come.
    - button: Next: Purpose ▾
  - section #chapter-3 .chapter-section
    - h2: Shaping spaces with bold purpose
    - p: Every arc and luminous canopy is mathematically optimized for natural climate moderation, solar capture, and human wellness.
    - button: View Masterplan ▾
  - section #chapter-4 .chapter-section
    - h2: And define tomorrow's landscape
    - p: A planetary network of connected autonomous masterplans transforming real estate into self-healing, intelligent urban habitats.
    - a: Inspect Portfolio Database ▾ → #portfolio
  - section #portfolio .content-deepdive-section
    - h2: Pioneering Next-Gen Developments
    - p: Iconic mixed-use mega-structures engineered for radical sustainability and biometric harmony.
    - h3: The Lumina Monolith
    - p: A 420-meter vertical forest biophilic residence generating 100% of its thermal and electrical power on-site.
    - h3: Neo-Arcadia Waterfront
    - p: A climate-resilient floating coastal district integrating artificial coral reefs and wave energy conduits.
    - h3: Stratacore Innovation Hub
    - p: A subterranean quantum computing and advanced aerospace engineering center sheltered within monolithic basalt strata.
    - h3: Elysian Central Valley
    - p: A 5,000-acre zero-emission mixed-use masterplan linking autonomous high-speed transit with alpine conservation corridors.
    - h2: Build with Arcopolis
    - p: Connect with our principal architects and masterplanning engineers to conceptualize your next development.
    - form .cta-form-row
      - button: Transmit Brief
- footer .bottom-hud
  - button: Sound Off
  - a: Consult Principal
- button: ×
- h2: Architect Consultation
- p: Speak directly with our spatial engineering and urban sustainability partners.
- form
  - button: Transmit Consultation Request

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter corporate email...'
- input[text] placeholder='Full Name'
- input[email] placeholder='Corporate Email'
- input[text] placeholder='Development Location (e.g. Zurich / Tokyo)'
- textarea placeholder='Brief project scope...'

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
