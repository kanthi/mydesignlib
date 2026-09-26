# Rebuild prompt — Mentara (`mentara`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Education
- Folder: `library/brands/mentara/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cognitive micro-learning brand identity system — interlocking neural synapse mark, dual-mode 16:9 slide deck and 15-slide exhibition wall, electric lime kinetic palette, tactile mobile lesson specimen, and 3-step logo stress test suite.

## Title
Mentara — Brand Guidelines & Identity System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-lime: #D4FF00;
  --color-lime-glow: rgba(212, 255, 0, 0.25);
  --color-sage: #7C8D76;
  --color-sage-light: #A8B8A2;
  --color-obsidian: #111311;
  --color-obsidian-card: #161916;
  --color-obsidian-surface: #1C201C;
  --color-mist: #B6BFB2;
  --color-white: #FFFFFF;
  --color-border: rgba(182, 191, 178, 0.16);
  --color-border-lime: rgba(212, 255, 0, 0.4);
  --font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-bar
  - a: Mentara BRAND IDENTITY 1.0 → #
  - button: Presentation Deck
  - button: 15-Slide Wall
  - button: ←
  - button: →
- main .main-wrap
  - section #section-deck .deck-viewer-section
    - h2: BRAND OVERVIEW
    - p: Daily micro-learning for high-velocity minds
    - p: Mentara is a daily cognitive knowledge experience — a small, powerful dose of mental models and practical skills designed to boost personal and technical growth effortlessly. Engineered like a daily mental vitamin, it delivers quick, meaningful insights that construct compounding expertise and durable confidence over time.
    - h2: BRAND VISION
    - p: Democratizing ambient knowledge
    - p: To make learning effortless, enjoyable, and an ambient habit of everyday execution — empowering people to grow through small, consistent doses of structured insight that inspire continuous self-improvement and lasting personal transformation.
    - h2: CORE VALUES
    - p: The 5 foundational pillars governing all brand output
    - h2: BRAND POSITIONING
    - p: Defining the high-agency market whitespace
    - p: Mentara sits intentionally between traditional e-learning platforms (which suffer from fatigue and low completion rates) and shallow motivational feeds. By combining the pedagogical rigor of skill-building with the effortless habit loop of daily micro-growth, Mentara establishes itself as the go-to brand for fast-paced, high-agency operators.
    - h2: TARGET AUDIENCE
    - p: Engineered for builders, engineers, and lifelong operators
    - p: Mentara is made for modern, ambitious knowledge workers who crave continuous growth but lack time for 30-hour course marathons. From young technical specialists and designers to founders and engineering leads, our audience seeks quick, meaningful insights that fit naturally into daily routines — individuals who value steady compounding over overwhelming bootcamps.
    - h2: TONE OF VOICE
    - p: Calibrated semantic spectrum governing verbal and visual rhythm
    - h2: BRAND LOGOMARK
    - p: The core symbol: two interlocking neural squircle loops rotated in dynamic forward momentum.
    - h2: BRAND LOGOTYPE
    - p: Customized geometric grotesque with optical kerning and subtle softened terminals.
    - h2: LOGO CLEAR SPACE
    - p: Blueprint isolation boundary matrix based on 1X module unit
    - h2: COLOR PALETTE
    - p: High-contrast tactical hierarchy engineered for digital surfaces
    - h2: COLOR EXPLANATION
    - p: Psychological intent and functional assignment for each token
  - section #section-grid .exhibition-grid-section
    - h2: Complete 15-Slide Brand Identity Deck
    - p: Click any slide below to inspect it in the presenter.
  - section .stress-test-section
    - h2: 3-Step Logo Stress Test & Application Specimens
    - p: Diagnostic verification proving the Mentara mark under adverse environmental conditions per the Logo Design & Branding Standard.
    - button: Obsidian
    - button: Moss Sage
    - button: Pure White
    - button: Lime Fill

## Images in the page
- `assets/logo-clearspace.svg — Clear Space Diagram`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #blur-slider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/aurora-flare.svg`
- `assets/logo-clearspace.svg`
- `assets/logo-mark-black.svg`
- `assets/logo-mark-dark.svg`
- `assets/logo-mark-on-lime.svg`
- `assets/logo-mark-sage.svg`
- `assets/logo-mark.svg`
- `assets/logo-primary-dark.svg`
- `assets/logo-primary.svg`
- `assets/specimen-mobile.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
