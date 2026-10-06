# Rebuild prompt — Lendflow (`lendflow`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/lendflow/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-conversion lead pipeline & broker management CRM platform template with deep green silk wave hero backdrop, live opportunity metrics, and interactive loan qualification ledger.

## Title
Lendflow — Predictable Loan Pipeline for Finance & Mortgage Brokers

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --lime: #84CC16;
  --lime-light: #A3E635;
  --green-dark: #0D3321;
  --green-hover: #14442C;
  --text-main: #111827;
  --text-muted: #6B7280;
  --border-gray: #E5E7EB;
  --bg-white: #FFFFFF;
  --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Lendflow → #
  - ul .nav-menu
    - li: Products
    - li: Services NEW
    - li: Solutions ▾
    - li: Pricing
    - li: Contact
  - a: Sign in → #login
  - a: Request a demo → #demo
- main .hero-container
  - h1: Stop Relying on Referrals. Start Receiving Consistent Loan Enquiries.
  - p: Predictable pipeline for Australian finance & mortgage brokers. Automate inbound qualification and close high-value deals with confidence.
  - a: Book a demo → #book
  - a: See it in action → #action
  - button: + Invite Leads
  - table #leadsTable .leads-table
    - th: Lead Type
    - th: Lead Name
    - th: Location
    - th: Loan Amount
    - th: Status
    - th: Time
    - td: Business Finance
    - td: JB James Brown james@alignui.com
    - td: Melbourne
    - td: $500,000
    - td: ● Active
    - td: 2 mins ago
    - td: Mortgage
    - td: SW Sophia Williams sophia@alignui.com
    - td: Sydney
    - td: $120,000
    - td: ● Active
    - td: Just Now
    - td: Car Loan
    - td: AT Arthur Taylor arthur@alignui.com
    - td: Gold Coast
    - td: $340,000
    - td: ● Pending
    - td: 30 mins ago
    - td: Business Finance
    - td: EW Emma Wright emma@alignui.com
    - td: Perth
    - td: $670,000
    - td: ● Active
    - td: 2 hrs ago
- section .logos-footer-strip

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
