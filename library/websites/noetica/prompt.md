# Rebuild prompt — Noetica (`noetica`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/noetica/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ember-orange AI-agent platform with glowing visor visage, think-automate-deliver triad, and proof-led pricing.

## Title
Noetica — AI Agents That Think, Automate & Deliver

## Description meta
Noetica is a fictional AI agent platform: think, automate, deliver. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --ember:#C23A0C; --ember2:#A82F08; --cream:#FBF3E8; --ink:#1c0d06;
  --grot:'Space Grotesk',sans-serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .nav “Primary”
  - a: Noetica → #top
  - a: SOLUTIONS → #platform
  - a: FEATURES → #platform
  - a: PRICING → #pricing
  - a: CUSTOMERS → #customers
  - a: BOOK DEMO → #pricing
  - button: MENU
- a: SOLUTIONS → #platform
- a: FEATURES → #platform
- a: PRICING → #pricing
- a: CUSTOMERS → #customers
- main #top
  - section .wrap.hero
    - h1: AI Agents ThatThink, Automate& Deliver
    - a: Book a Demo → #pricing
    - a: Learn More → → #platform
    - a: → AI Workflow → #platform
    - a: → Smart AI Agents → #customers
    - a: → Book Demo → #pricing
  - section #platform .wrap.block
    - p: 01 — THE TRIAD
    - h2: One mind, three disciplines.
    - p: Every Noetica agent reasons before it acts, automates what it proves, and delivers with a receipt.
    - p: / THINK
    - h3: Reason first
    - p: Plans decompose into verifiable steps. Nothing executes without a rationale the audit log can replay.
    - p: / AUTOMATE
    - h3: Prove, then repeat
    - p: Successful runs compile into supervised workflows — automation earned, never assumed.
    - p: / DELIVER
    - h3: Receipts attached
    - p: Every outcome ships with inputs, diffs, and cost — so delivery is the start of trust.
  - section #workflow .wrap.block
    - p: 02 — AI WORKFLOW
    - h2: From prompt to proof.
    - p: STEP 01
    - h3: Describe
    - p: State the outcome in plain language. No schemas, no flowcharts.
    - p: STEP 02
    - h3: Watch it plan
    - p: The agent drafts steps you can inspect, edit, and approve.
    - p: STEP 03
    - h3: Supervise
    - p: Set autonomy per step — hands-on where it matters, hands-off elsewhere.
    - p: STEP 04
    - h3: Collect proof
    - p: Receipts, diffs, and costs land in your ledger automatically.
    - p: “Our ops team stopped babysitting scripts. Noetica agents file their own homework — with citations.”
  - section #pricing .wrap.block
    - p: 03 — PRICING
    - h2: Start thinking.
    - p: Fictional sample prices. Every tier includes the audit ledger and unlimited plans.
    - h3: SCOUT
    - p: $0 / forever
    - ul
      - li: 1k steps / mo
      - li: Community tools
      - li: 7-day ledger
    - button: Start free
    - h3: OPERATOR
    - p: $79 / mo
    - ul
      - li: 100k steps / mo
      - li: All 38 integrations
      - li: Supervised workflows
      - li: 1-year ledger
    - button: Book a Demo
    - h3: FLEET
    - p: Custom
    - ul
      - li: Unlimited steps
      - li: Private regions
      - li: SSO, DPA, reviews
    - button: Talk to us
    - summary: How is this different from a chatbot?
    - p: Noetica agents plan multi-step work, use your tools, and prove what they did. Chat answers questions; agents finish jobs.
    - summary: What can I connect?
    - p: Thirty-eight fictional sample integrations across docs, data, comms, and code — plus a generic API wrapper for the rest.
    - summary: Who owns my data?
    - p: You do. Runs execute in your region, ledgers export anywhere, and this sample page touches no real data at all.
  - section .wrap.final
    - p: READY TO DELEGATE
    - h2: Put thinking on autopilot.
    - a: Book a Demo → #top
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
