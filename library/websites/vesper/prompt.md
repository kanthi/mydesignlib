# Rebuild prompt — Vesper (`vesper`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/vesper/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-density single-viewport landing page for operational AI infrastructure: pure black background, liquid-metal pill navigation, bottom-centered hero, live agent telemetry metrics.

## Title
Vesper.ai — Operational AI Infrastructure

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&family=Instrument+Serif:ital@1&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #000000;
  --text: #ffffff;
  --muted: #9a9a9a;
  --stat: #d8d8d8;
  --border: rgba(255, 255, 255, 0.16);
  --border-soft: rgba(255, 255, 255, 0.12);
  --logo: 15.5px;
  --logo-mark: 22px;
  --nav: 14px;
  --nav-h: 40px;
  --btn: 13.5px;
  --btn-h: 40px;
  --hero-btn-h: 42px;
  --h1: 48px;
  --lede: 15.5px;
  --badge: 12.5px;
  --stat-size: 13.5px;
  --header-y: 22px;
  --header-x: 40px;
  --stats-x: 72px;
  --stats-y: 36px;
  --hero-gap: 85px;
  --copy-max: 860px;
  --lede-max: 470px;
  }

  :root {
  --logo: 17px;
  --logo-mark: 24px;
  --nav: 15px;
  --nav-h: 44px;
  --btn: 15px;
  --btn-h: 44px;
  --hero-btn-h: 48px;
  --h1: 64px;
  --lede: 18px;
  --badge: 13.5px;
  --stat-size: 15px;
  --header-y: 28px;
  --header-x: 64px;
  --stats-x: 96px;
  --stats-y: 44px;
  --copy-max: 980px;
  --lede-max: 540px;
  }

  :root {
  --logo: 18px;
  --logo-mark: 26px;
  --nav: 16px;
  --nav-h: 48px;
  --btn: 16px;
  --btn-h: 48px;
  --hero-btn-h: 52px;
  --h1: 76px;
  --lede: 20px;
  --badge: 14.5px;
  --stat-size: 16px;
  --header-y: 32px;
  --header-x: 80px;
  --stats-x: 120px;
  --stats-y: 52px;
  --copy-max: 1120px;
  --lede-max: 620px;
  }

  :root {
  --h1: 88px;
  --lede: 22px;
  --header-x: 120px;
  --stats-x: 160px;
  --copy-max: 1280px;
  --lede-max: 680px;
  }

  :root {
  --h1: 54px;
  --lede: 16px;
  --header-x: 48px;
  --stats-x: 80px;
  --copy-max: 900px;
  }

  :root {
  --logo: 15px;
  --nav: 13px;
  --nav-h: 36px;
  --btn: 13px;
  --btn-h: 38px;
  --hero-btn-h: 40px;
  --h1: 42px;
  --lede: 15px;
  --badge: 12px;
  --stat-size: 12.5px;
  --header-y: 16px;
  --header-x: 28px;
  --stats-x: 36px;
  --stats-y: 28px;
  --hero-gap: 64px;
  --copy-max: 760px;
  --lede-max: 440px;
  }

  :root {
  --header-y: 14px;
  --stats-y: 24px;
  --hero-gap: 48px;
  --h1: 40px;
  }

  :root {
  --h1: 34px;
  --lede: 14px;
  --hero-gap: 32px;
  --stats-y: 18px;
  --nav-h: 30px;
  --btn-h: 34px;
  --hero-btn-h: 36px;
  }

  :root {
  --logo: 16px;
  --btn: 15px;
  --btn-h: 46px;
  --hero-btn-h: 48px;
  --h1: 36px;
  --lede: 16.5px;
  --badge: 13.5px;
  --stat-size: 15px;
  --header-y: 16px;
  --header-x: 18px;
  --stats-x: 20px;
  --stats-y: 28px;
  --hero-gap: 36px;
  --copy-max: 100%;
  --lede-max: 100%;
  }

  :root {
  --h1: 34px;
  --lede: 16px;
  --header-x: 16px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Vesper.ai → #top
  - nav #site-nav “Primary”
    - a: Benefits → #benefits
    - a: How It Works → #how-it-works
    - a: FAQs → #faqs
    - a: Pricing → #pricing
  - a: Start for Free → #start
- main #top .hero
  - h1: Train AI agents on your workflows in minutes.
  - p: Deploy adaptive AI agents that learn, execute, and scale operational tasks across your business.
  - a: Start for Free → #start
  - a: See it in action → #demo
- footer .stats

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
