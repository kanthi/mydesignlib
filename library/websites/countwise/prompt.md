# Rebuild prompt — Countwise (`countwise`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/countwise/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Espresso-and-orange CFO platform with decode headline effect, glass dashboard cards over gilded ornament, and romantic data paintings.

## Title
Countwise — Every Venture Deserves a Chief Financial Officer

## Description meta
Countwise is a fictional CFO platform for founders: cash clarity, advice before you ask, built by finance people. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --org:#EE6A24; --org2:#F5823F; --esp:#3A1512; --esp2:#2A0E0C; --cream:#F7EFE4;
  --mut:#C9A795; --gold:#C9963C; --grot:'Space Grotesk',sans-serif; --serif:'Newsreader',serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .nav “Primary”
  - a: Countwise → #top
  - a: Platform ⌄ → #platform
  - a: Pricing → #pricing
  - a: Resources → #resources
  - a: Blog → #faq
  - a: Talk to us → #final
  - button: MENU
- a: Platform → #platform
- a: Pricing → #pricing
- a: Resources → #resources
- a: Blog → #faq
- main #top
  - section .wrap.hero
    - p: YOU BUILT THE VENTURE. WE'LL WATCH THE NUMBERS.
    - h1: Every venture deserves a Chief Financial Officer
    - p: Most founders make six-figure decisions without a finance team behind them. Countwise gives you one — always watching your numbers, always ready to advise.
    - button: Discover the Core →
  - section #platform .band
    - h3: Outstanding Invoices
    - h3: Tax Reserve Status
    - h3: Revenue Growth
    - p: $0
    - p: +18.6% vs forecast
  - section #resources .wrap.mani
    - h2: You built the venture. We'll watch the numbers.
    - p: Countwise connects to your accounts, learns your cash rhythm, and tells you what's coming — before it's a problem.
    - h3: Real-time cash clarity
    - p: No dashboards to decode, no monthly reports that are already outdated. Countwise shows you exactly where you stand, today.
    - h3: Advice before you ask
    - p: Countwise flags risk, opportunity, and blind spots the way a real CFO would — without waiting for a quarterly review.
    - p: CASH FLOW ALERT Q3 Tax Provision
    - p: $487,200
    - p: Under-reserved by an estimated based on current revenue.
    - h3: Built by finance people
    - p: Countwise models are trained with actual CFOs and accountants — not just built on spreadsheets. It's not a chatbot guessing at your numbers.
    - p: COUNTWISE AI View recommendation
  - section #pricing .wrap.pricing
    - p: PRICING — FICTIONAL SAMPLE
    - h2: One plan per stage.
    - h3: SEED
    - p: $149/mo
    - ul
      - li: Cash clarity dashboard
      - li: Monthly CFO memo
      - li: Invoice watch
      - li: Email support
    - button: Start lean →
    - h3: GROWTH
    - p: $449/mo
    - ul
      - li: Everything in Seed
      - li: Real-time alerts
      - li: Tax reserve autopilot
      - li: Quarterly strategy call
    - button: Discover the Core →
    - h3: SCALE
    - p: Custom
    - ul
      - li: Dedicated fractional CFO
      - li: Board-ready reporting
      - li: Multi-entity support
      - li: Slack line to finance team
    - button: Talk to us →
    - p: “It's like hiring a CFO who never sleeps — and never bills by the hour.”
    - summary: Do you replace my accountant?
    - p: No — Countwise sits above your bookkeeping. We read the same numbers your accountant closes, then turn them into decisions, forecasts, and warnings.
    - summary: How fast is onboarding?
    - p: Connect your accounts and the cash rhythm maps itself within days. Your first CFO memo lands in week one of this fictional sample.
    - summary: Is my financial data safe?
    - p: Read-only connections, encrypted vaults, and human review gates on every outbound move. Sample template — no real data touches this page.
  - section #final .wrap.final
    - h2: Give every decision a finance team.
    - button: Discover the Core →
- footer .wrap
  - a: BACK TO TOP ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
