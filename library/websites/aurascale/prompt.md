# Rebuild prompt — AuraScale (`aurascale`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/aurascale/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-velocity revenue growth and funnel command center featuring a living 3D Earth turning in deep space with mint-cyan Rayleigh glow, night lights, centered Scale Smarter typography, partner marquee, branching workflow cards, and live pipeline funnel telemetry.

## Title
AuraScale — Scale Smarter, Not Harder

## Description meta
Drive your funnel forward with clever workflows, analytics, and seamless lead management — all in one immersive command center.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #020611;
  --card-bg: rgba(9, 16, 33, 0.72);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-border-hover: rgba(16, 185, 129, 0.35);
  --accent-mint: #10b981;
  --accent-mint-glow: rgba(16, 185, 129, 0.3);
  --accent-cyan: #00f2fe;
  --text-white: #ffffff;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: AuraScale → #
  - ul .nav-links
    - li: Features
    - li: Solutions
    - li: Plans
    - li: Learning
  - a: Sign Up → #cta
- section .hero-section
  - h1: Scale Smarter, Not Harder
  - p: Drive your funnel forward with clever workflows, analytics, and seamless lead management — all in one immersive command center.
  - a: Start Free Right Now → → #cta
  - a: Schedule a Consult → #pipeline
- section .partner-section
- section #features .features-section
  - h2: One platform to run the entire revenue engine
  - p: Stop stitching tools together. AuraScale unifies capture, automation, and insight into a single high-velocity interface.
  - h3: Clever workflows
  - p: Automate every hand-off with visual, branching pipelines that move deals forward automatically when buying signals trigger.
  - h3: Unified attribution
  - p: Know exactly which touchpoints convert high-ACV enterprise accounts with multi-touch revenue attribution.
  - h3: Lead enrichment
  - p: Real-time firmographic and intent telemetry injected directly into deals before your SDRs dial.
  - h3: Command center visibility
  - p: No more disconnected spreadsheets. Leadership monitors cohort churn, CAC payback, and pipeline coverage in one live view.
- section #pipeline .funnel-section
  - h3: See the whole funnel move in real time
- section #cta .cta-section
  - h2: Put your growth on a new trajectory
  - p: Launch in minutes. No credit card required. Cancel anytime. Join thousands of high-velocity teams compounding revenue on AuraScale.
  - a: Start Free Right Now → → #
- footer

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
