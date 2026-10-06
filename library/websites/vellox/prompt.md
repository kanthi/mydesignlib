# Rebuild prompt — Vellox (`vellox`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/vellox/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-velocity B2B revenue and sales execution platform: dual-dashboard preview cards with segmented coral delivery status tracker, 5-month stacked KPI revenue bar chart, frosted waitlist invitation badge, high-contrast warm butter-yellow 4-stat panel ($4.2M pipeline, 99.4% precision, 42% cycle reduction), interactive one-click revenue action workspace, and 16-tool enterprise integration grid.

## Title
Vellox — Boost Your Sales Team's Performance

## Description meta
Keep your pipeline flowing with smart automation, insights, and effortless deal tracking. Close more deals faster with Vellox.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --canvas: #FFFFFF;
  --canvas-subtle: #F9FAFB;
  --canvas-warm: #FEFCE8;
  --accent-yellow: #FEF08A;
  --accent-yellow-deep: #FDE047;
  --accent-teal: #0C4A42;
  --accent-teal-hover: #08332D;
  --accent-coral: #FF6442;
  --accent-coral-soft: #FFEDEA;
  --accent-green-1: #22C55E;
  --accent-green-2: #86EFAC;
  --accent-green-3: #BBF7D0;
  --accent-green-4: #DCFCE7;
  --ink: #111827;
  --ink-secondary: #4B5563;
  --ink-muted: #9CA3AF;
  --border: #E5E7EB;
  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: Vellox → #
  - nav .nav-links
    - a: Company → #company
    - a: Features → #features
    - a: Reviews → #reviews
    - a: Contacts → #contacts
  - a: Log In → #login
  - button: Create Free Account
- main
  - section .hero-section
    - h1: Boost Your Sales Team's Performance
    - p: Keep your pipeline flowing with smart automation, actionable revenue insights, and effortless deal tracking.
    - form .hero-form
      - button: Book a Demo
    - h3: Delivery status
    - p: Saturday, 29th April, 2025
    - h3: Key performance indicator
    - p: Tracks delivery timelines and operational efficiency
  - section .proof-section
  - section .yellow-showcase-section
    - h2: Close more deals with Vellox
    - p: Easily track and manage your sales pipeline with real-time updates and unified operational flow.
  - section .action-mockup-section
    - h2: Unlock the full potential of your sales team
    - p: Easily track and manage your sales pipeline with real-time updates, visual deal stages, and smart forecasting to keep revenue predictable.
    - button: Get Started for Free
    - a: Learn More › → #features
  - section .integrations-section
    - h2: Connect your entire revenue stack
    - p: Vellox integrates seamlessly with 50+ enterprise communication and billing tools.
- footer .site-footer
  - a: Company → #company
  - a: Features → #features
  - a: Privacy Policy → #privacy
  - a: Terms of Service → #terms

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your work email'

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
