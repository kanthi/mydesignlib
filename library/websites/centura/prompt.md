# Rebuild prompt — Centura (`centura`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/centura/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Airy cloud-themed fintech and scalable capital infrastructure featuring azure sky gradients, billowy cumulus atmosphere, floating frosted glass telemetry widgets with cobalt radial arc dials, interactive treasury yield simulator, and 4-pillar financial control matrix.

## Title
Centura — Build and Growth with Scalable Tools

## Description meta
Centura empowers fast-growing businesses and individuals with intelligent treasury infrastructure, automated financial controls, and scalable banking tools.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --sky-top: #4287DE;
  --sky-mid: #68A7EC;
  --sky-light: #C0DBF8;
  --bg-white: #FFFFFF;
  --bg-light: #F7F9FC;
  --text-primary: #121826;
  --text-secondary: #4E596E;
  --text-muted: #8894A8;
  --accent-blue: #0055FE;
  --accent-blue-light: #EBF3FF;
  --accent-green: #10B981;
  --border-subtle: rgba(18, 24, 38, 0.08);
  --border-card: rgba(255, 255, 255, 0.85);
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-pill: 9999px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --shadow-card: 0 20px 50px rgba(0, 50, 120, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-hover: 0 28px 70px rgba(0, 50, 120, 0.12), 0 8px 20px rgba(0, 0, 0, 0.04);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero-sky-section
  - nav .top-nav-island
    - ul .nav-links
      - li: Home
      - li: About us
      - li: Pricing
      - li: Contact
      - li: Pages ▾
    - a: Get Started → #calculator
  - h1: Build and Growth with Scalable Tools
  - p: Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
  - a: Get Started → #calculator
  - a: Learn More → #about
- section #about .about-manifest-section
  - h2: We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals.
- section #features .features-grid-section
  - h3: Intuitive user interface
  - p: User-friendly design for effortless navigation, instant reconciliations, and frictionless usability.
  - h3: Automated processes
  - p: Streamlined workflows to increase team efficiency, eliminate manual spreadsheets, and automate payroll.
  - h3: Secure transactions
  - p: Bank-grade cryptographic encryption guaranteeing every transaction is authenticated and protected.
  - h3: Advanced security features
  - p: Custom spending limits, instant card freezing, and automated compliance auditing for every department.
- section #calculator .calculator-section
  - h3: Simulate your corporate yield
  - p: Model your annualized treasury returns with automated high-yield sweeping across diversified institutional vaults.
- footer .site-footer
  - a: Home → #
  - a: About us → #about
  - a: Features → #features
  - a: Treasury → #calculator
  - a: Support → mailto:concierge@centura.example

## Fields
Keep these controls, including ids and placeholders.
- input[range] #balanceSlider

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
