# Rebuild prompt — Draften (`draften`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/draften/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Minimalist AI document workspace template featuring stark monochrome typography, isometric 3D wireframe canvas, interactive document synthesis editor, and multi-format integration support.

## Title
Draften — Every Document. One Intelligent Workspace.

## Description meta
Draften helps individuals and teams write, organize, edit, summarize, and manage documents with AI that understands your workflow.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-bg: #FFFFFF;
  --color-surface-subtle: #F6F7F9;
  --color-surface-card: #FAFAFC;
  --color-border: #E8EAED;
  --color-border-subtle: #F0F2F5;
  --color-text-main: #111318;
  --color-text-muted: #5F6573;
  --color-text-dim: #98A0B0;
  --color-black: #0E1015;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .container
  - nav .top-nav
    - a: Draften → #
    - ul .nav-menu
      - li: Features
      - li: Solutions
      - li: Templates
      - li: Pricing
      - li: Resources
    - a: Sign In → #signin
- main
  - section .hero-section.container
    - h1: Every Document. One Intelligent Workspace.
    - p: Draften helps individuals and teams write, organize, edit, summarize, and manage documents with AI that understands your workflow.
    - a: Start Writing Free → #editor
    - a: Watch Demo → #demo
  - section #editor .workspace-section
    - h2: An editor tuned for structured thought
    - p: Test Draften's instant comprehension capabilities. Select an action below to see intelligent analysis execute in real time.
    - button: Summarize
    - button: Audit Structure
    - button: Extract Tasks
    - ul .outline-list
      - li: 1. Executive Overview
      - li: 2. Market Fragmentation
      - li: 3. Cross-Format Latency
      - li: 4. Core Deliverables
    - h3: Executive Overview: Universal File Fabric
    - p: Modern knowledge organizations waste an estimated 6.8 hours per employee weekly wrestling with incompatible document formats, fragmented comments, and out-of-sync revisions.
    - p: Consolidates 25+ disjointed document sources into a live verifiable semantic tree. Cross-references citations and eliminates version collisions automatically.
  - section #features .bento-section.container
    - h2: Everything you need to write with velocity
    - p: Engineered to strip away mechanical formatting overhead so you can focus on clarity.
    - h3: Native Format Conversion
    - p: Seamlessly ingest Notion pages, PDFs, Markdown, DOCX, and Google Docs without losing nested layout structures or typography.
    - h3: Semantic Context Tree
    - p: Draften builds an internal relational graph of every project artifact, enabling accurate answers with zero hallucinations.
    - h3: Privacy-First Architecture
    - p: Your documents never train global models. Zero retention guarantees and end-to-end client-side cryptographic hashing.
- footer .container
  - a: Privacy → #privacy
  - a: Terms → #terms
  - a: Security → #security
  - a: System Status → #status

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
