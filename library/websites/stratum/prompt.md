# Rebuild prompt — Stratum (`stratum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/stratum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Institutional tokenized capital markets infrastructure linking fund originators, distribution routing engines, and qualified institutional allocators. Features Swiss-architectural linework, interactive capital flow simulator, liquidity ledger, and live yield curve.

## Title
Stratum — Infrastructure for Tokenized Asset Distribution

## Description meta
One compliant institutional stack that connects fund managers, distributors, and qualified allocators. Tokenize funds, distribute liquidity across networks, and deliver real-time cryptographic auditability.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #FAF9F5;
  --surface: #FFFFFF;
  --surface-subtle: #F3F1EB;
  --surface-elevated: #FFFFFF;
  --ink-primary: #0E1311;
  --ink-secondary: #48504B;
  --ink-muted: #78827C;
  --border: #E4E0D5;
  --border-strong: #121815;
  --emerald: #00C368;
  --emerald-dark: #00A656;
  --emerald-light: #E7F9F0;
  --emerald-glow: rgba(0, 195, 104, 0.35);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition-smooth: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --shadow-sm: 0 2px 6px rgba(14, 19, 17, 0.04);
  --shadow-md: 0 8px 24px rgba(14, 19, 17, 0.06);
  --shadow-lg: 0 16px 40px rgba(14, 19, 17, 0.08);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: STRATUM → ./
  - ul .nav-links
    - li: Architecture
    - li: Solutions
    - li: Developers
    - li: Compliance
  - a: Speak with us → #contact
- section .hero
  - h1: Infrastructure for tokenized asset distribution
  - p: One compliant stack that connects fund managers, distributors and investors. Tokenise a fund, distribute it across the network, and give investors a live view of what they hold.
  - a: Book a demo → → #contact
  - a: Explore Architecture → #architecture
  - button: 1. Fund
  - button: 2. Route
  - button: 3. Settle
- section #architecture .section
  - h2: Engineered in three synchronized strata
  - p: Legacy fund structures isolate issuance from secondary liquidity. Stratum harmonizes the complete institutional capital lifecycle through modular protocol tiers.
  - h3: Asset Ingestion & Token Minting
  - p: Converts audited private funds, money market reserves, and real-world cash flows into permissioned, yield-accruing digital securities with cryptographic NAV oracles.
  - ul .card-features
    - li: Automated NAV feed from licensed auditors
    - li: ERC-3643 compliant permissioned minting
    - li: Real-time balance sheet proof via zk-SNARKs
  - h3: Compliance & Distribution Engine
  - p: Enforces continuous transfer restrictions, accreditation claims, sanctions filtering, and automated tax withholding at the smart-contract layer before any transaction settles.
  - ul .card-features
    - li: Automated ONCHAINID cryptographic checks
    - li: Multi-jurisdictional investor gating rules
    - li: Zero-friction API for institutional distributors
  - h3: Investor Custody & Real-Time Reporting
  - p: Empowers qualified allocators with live portfolio telemetry, sub-second atomic Delivery-versus-Payment (DvP), and automated continuous dividend streaming.
  - ul .card-features
    - li: T+0 atomic DvP settlement against USDC/EURC
    - li: Enterprise MPC custody integration (Fireblocks/Copper)
    - li: Real-time cap table audit & 1099/K-1 tax exports
- section #solutions .section
  - h2: Tokenize any institutional yield structure
  - p: Configure yield distribution intervals, investor access tiers, and secondary clearing parameters in real-time.
  - button: Deploy Test Rail
- section #developers .section
  - h2: Integrate tokenized fund rails in under 40 lines of code
  - p: Full REST, TypeScript, and Solidity interfaces. Mint tokens, query real-time cap tables, and automate compliance webhooks with enterprise SLAs.
  - button: TypeScript
  - button: cURL API
  - button: Solidity
  - button: Copy
- section #compliance .section
  - h2: Built for institutional custody & sovereign regulation
  - p: Every component in the Stratum stack undergoes rigorous third-party auditing, formal mathematical verification, and continuous regulatory validation.
  - h4: MPC Key Custody
  - p: Hardware-isolated Multi-Party Computation with strict quorums and zero single points of compromise.
  - h4: ERC-3643 Standard
  - p: Battle-tested permissioned token architecture with automated identity claims and jurisdictional gating.
  - h4: SOC 2 Type II
  - p: Annual independent SOC 2 Type II certification and continuous ISO 27001 compliance monitoring.
  - h4: Formal Verification
  - p: Smart contracts mathematically proven against reentrancy, overflow, and state desynchronization.
- section .section
  - h2: Trusted by leading asset managers
  - p: Discover how institutional issuers accelerate time-to-market and broaden distribution using Stratum's three-tier stack.
- section .section
  - h2: Institutional Architecture Answers
  - p: Key details regarding custody compatibility, legal structuring, and network integration.
  - button: How does Stratum maintain compliance with global securities regulators?
  - button: Can we connect our existing qualified custodian (e.g. Fireblocks, Copper, Anchorage)?
  - button: Which settlement currencies and blockchains are supported?
  - button: How does continuous dividend and yield distribution function?
- section #contact .cta-banner-wrapper
  - h2: Deploy tokenized fund rails in under 30 days
  - p: Schedule an architectural review with our capital markets infrastructure team to review token models, compliance standards, and custody integrations.
  - form .cta-form
    - button: Request Briefing →
- footer .site-footer
  - p: Institutional-grade software infrastructure for compliant tokenized capital markets and programmable asset distribution.
  - ul .footer-links
    - li: Stratum 01: Ingestion
    - li: Stratum 02: Routing
    - li: Stratum 03: Settlement
    - li: ERC-3643 Standard
    - li: Zero-Knowledge Proofs
  - ul .footer-links
    - li: Money Market Funds
    - li: Private Credit
    - li: Commercial Real Estate
    - li: Sovereign Treasuries
    - li: Secondary Liquidity
  - ul .footer-links
    - li: Contact Institutional Sales
    - li: inquiries@stratum.example
    - li: SOC 2 Type II Reports
    - li: Security Whitepaper
    - li: Privacy & Disclosures
  - a: desk@stratum.example → mailto:desk@stratum.example

## Fields
Keep these controls, including ids and placeholders.
- input[range] #volumeSlider
- input[email] placeholder='institutional.email@fund.example'

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
