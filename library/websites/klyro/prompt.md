# Rebuild prompt — Klyro (`klyro`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/klyro/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Effortless personal finance & smart expense tracking mobile app template: frosted pill navigation, central interactive smartphone mockup with live portfolio balance and weekday spline curve switcher, floating category hashtag chips (#Coffee, #Groceries, #Subscriptions, #Transport, #Electricity), 5-avatar social review badge (+1.5K Reviews), typographic inline badges value statement, the problem breakdown, interactive feature tabs, and real-time annual savings calculator.

## Title
Klyro — Take Control Of Your Money, Effortlessly

## Description meta
Smartly track your expenses, manage your cashflow, and grow your savings with Klyro — the intelligent personal finance companion.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-outer: #ebeef2;
  --bg-canvas: #ffffff;
  --ink: #111827;
  --ink-secondary: #4b5563;
  --ink-muted: #9ca3af;
  --ink-faint: #e5e7eb;
  --accent-coral: #ff5e36;
  --accent-blue: #3b82f6;
  --accent-green: #10b981;
  --accent-red: #ef4444;
  --accent-amber: #f59e0b;
  --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 44px;
  --radius-full: 9999px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .nav-pill
  - a: Klyro → #
  - a: Home → #home
  - a: Features → #features
  - a: Pricing → #pricing
  - button: Start For Free
- section #home .hero-stage
  - h1: Take Control Of Your Money, Effortlessly
  - p: Track Expenses. Make Smarter Decisions.
- section #features .problem-section
  - h2: Struggling To Keep Track Of Your Spending?
  - h3: Fragmented Accounts
  - p: Checking 4 different banking apps and credit cards leaves you guessing your actual net disposable cashflow.
  - h3: Silent Subscription Leaks
  - p: Unused gym memberships and forgotten software trials silently siphon hundreds of dollars each month.
  - h3: Spreadsheet Burnout
  - p: Manual budgeting templates require hours of data entry that gets abandoned after the second week.
- section #pricing .calculator-section
  - h2: Calculate Your Annual Savings With Klyro
  - p: See how automated subscription audits and intelligent category alerts protect your wealth.
  - p: Directly retained in your high-yield savings vault
  - button: Claim Your Savings Free →
- footer .site-footer
  - p: © 2026 Klyro Technologies Inc. Take Control Of Your Money, Effortlessly. All rights reserved.

## Fields
Keep these controls, including ids and placeholders.
- input[range] #spendSlider
- input[range] #leakSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/user-1.jpg`
- `assets/user-2.jpg`
- `assets/user-3.jpg`
- `assets/user-4.jpg`
- `assets/user-5.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
