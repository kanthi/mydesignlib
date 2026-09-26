# Rebuild prompt — Numina (`numina`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/numina/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Open-source frontier AGI foundation — Three.js WebGL fisheye lens shader parallax, dynamic neural topology canvas, multi-plane floating Python runtime code, and architectural HUD bracket cards.

## Title
Numina Foundation — Open-Source Frontier Intelligence

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-surface-dark: #080B10;
  --color-surface-paper: #F9F8F6;
  --color-surface-card: rgba(11, 16, 24, 0.88);
  --color-text-light: #F4F6F8;
  --color-text-dark: #121417;
  --color-text-muted-dark: #8A94A6;
  --color-text-muted-light: #667085;
  --color-accent-amber: #FF6B4A;
  --color-accent-blue: #718698;
  --color-border-bracket: rgba(255, 255, 255, 0.4);
  --font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-pill: 9999px;
  --radius-sm: 8px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: N NUMINA FOUNDATION → #
  - ul .nav-links
    - li: Home
    - li: About
    - li: Summits
    - li: Grants
    - li: Research
  - button: Apply for Grant
- section #hero .hero-section
  - h1: We empower the development of open-source artificial intelligence that is aligned with humanity and never controlled by a single entity.
  - a: Our Mission [ + → ] → #topology
- section #topology .topology-section
  - h2: Where AI learns to feel, and you shape what it becomes.
- section .collective-section
  - h2: We are a growing collective of researchers, engineers, and thinkers exploring the frontier of artificial intelligence, in the open, for everyone.
  - a: Join the collective [ + → ] → #events
  - ul .collective-roles-list
    - li: RESEARCHERS
    - li: BUILDERS
    - li: FOUNDERS
    - li: ENGINEERS
    - li: COMMUNITY ARCHITECTS
    - li: SYSTEMS THEORISTS
- section .code-scrub-section
  - h2: Decentralized consensus across autonomous reasoning graphs.
  - p: Numina coordinates open multi-agent pipelines with cryptographic verification, ensuring no private monopoly controls the weights or inference verification.
  - a: Explore Architecture Docs [ + → ] → #events
- section #events .events
  - h2: Open Intelligence Summit
  - p: A space for builders, founders, and researchers to discuss the future of open-source AI and humanity-aligned foundation models.
  - a: LEARN MORE [ + → ] → #research
  - h3: Open AGI Architecture
  - p: Bringing together researchers, developers, and communities united by the shared conviction that frontier intelligence must remain open, audited, and accessible to everyone.
  - button: REGISTER ATTENDANCE [ + → ]
- section #research .research-section
  - h2: Research releases, announcements, and milestones from Numina
  - a: See all the articles [ + ] → #events
  - h3: Numina Foundation Commits $50 Million to Advance Open Source AGI
  - p: One of the largest dedicated grant pools supporting developers, research labs, and open architectures without equity lock-in.
  - a: Read Announcement [ + ] → #
  - h3: Decentralized Verifiable Compute: Proof-of-Inference Protocol
  - p: A peer-reviewed benchmark framework for certifying that open model weights were executed faithfully without tampering.
  - a: Download Whitepaper [ + ] → #
  - h3: Numina Sparks: Community Fellowship & Lab Grants Worldwide
  - p: Direct compute stipends and GPU cluster access for independent researchers exploring neurosymbolic alignment.
  - a: Apply for Cohort [ + ] → #
- footer .site-footer
  - p: A neutral, transparent steward of open-source artificial intelligence. Uniting builders, researchers, and global communities to steward open AGI.
  - ul .footer-links-list
    - li: Overview [ + ]
    - li: About [ + ]
    - li: Summits [ + ]
    - li: Grants [ + ]
  - ul .footer-links-list
    - li: Publications [ + ]
    - li: Benchmarks [ + ]
    - li: Compute Grants [ + ]
    - li: Governance [ + ]
  - ul .footer-links-list
    - li: X / Twitter [ + ]
    - li: GitHub [ + ]
    - li: Discord [ + ]
    - li: Research Forum [ + ]
- button: ✕
- h3: Apply to the Numina Fellowship
- p: Numina awards non-dilutive compute grants and research stipends up to $250,000 for teams building open foundation models.
- form
  - button: Submit Research Proposal [ → ]

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Principal Researcher or Team Name'
- input[email] placeholder='Institutional or Contact Email'
- textarea placeholder='Research Proposal Summary & Compute Requirements'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/mountain.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
