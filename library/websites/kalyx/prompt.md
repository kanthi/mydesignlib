# Rebuild prompt — Kalyx (`kalyx`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/kalyx/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modular ZK-rollup Layer 2 infrastructure landing page with architectural corner bracket framing, carbon void aesthetics, interactive Web3 rollup console, recursive STARK proving pipeline telemetry, and developer deployment CLI.

## Title
Kalyx Network — The Next Evolution of Modular Scalability

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #090a0f;
  --bg-surface: #0f111a;
  --bg-card: #141622;
  --bg-card-hover: #191c2c;
  --border: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.15);
  --coral: #ff5733;
  --coral-light: #ff7556;
  --coral-glow: rgba(255, 87, 51, 0.35);
  --coral-subtle: rgba(255, 87, 51, 0.12);
  --emerald: #10b981;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav .nav-links
    - a: Architecture → #features
    - a: Dashboard → #console
    - a: Ecosystem → #ecosystem
    - a: Builders → #testimonials
    - a: FAQ → #faq
  - a: ← Library → ../../
  - button: Launch App →
- section .hero
  - h1: The Next Evolution of Modular Scalability
  - p: An ultra-fast, zero-knowledge Layer 2 network designed to scale EVM execution with sub-cent gas fees, instantaneous settlement, and uncompromising Ethereum security.
  - button: Launch App →
  - button: View Developer Docs
  - h3: Welcome to Kalyx Dashboard
  - p: Manage your rollup assets, verify cryptographic proofs, and experience instantaneous execution.
  - button: Bridge Assets
  - button: Deposit from L1
  - button: Simulate Rollup Batch Proof →
- section #features .section-pad
  - h2: Layer 2, Reimagined for Performance
  - p: A fast, secure Layer 2 flow — from instant deployment to zero-knowledge state finality.
  - h3: Deploy Unchanged
  - p: Deploy existing Solidity smart contracts, Hardhat setups, and Foundry tests with 100% bytecode compatibility.
  - h3: Sub-Millisecond Execution
  - p: Multi-threaded state access lists execute non-conflicting transactions concurrently for 65,000 TPS peak speed.
  - h3: Recursive ZK Proving
  - p: Compact STARK-to-SNARK folding generates cryptographic validity proofs in under 320ms with minimal memory footprint.
  - h3: Modular DA Sampling
  - p: Flexible plug-and-play data availability guarantees transaction records with 1/100th the storage expense of legacy rollups.
  - h3: L1 Ethereum Finality
  - p: State roots are anchored permanently to Ethereum mainnet. No 7-day challenge periods; immediate cryptographic settlement.
  - h3: Real-Time Analytics
  - p: Enterprise-grade Prometheus metrics, automated invariant assertion, and instantaneous sequencer health monitoring.
- section #testimonials .section-pad
  - h2: What Builders Are Saying
  - p: Discover how teams are scaling global applications on Kalyx infrastructure.
  - p: “Deploying our orderbook DEX to Kalyx took under 20 minutes. Gas costs plummeted by 99.4%, and sub-second confirmation feels like Web2 speed.”
  - p: “Launching DAOs on Kalyx is completely frictionless. Community votes happen in real time with near-zero friction. We haven’t had a single re-org.”
  - p: “The recursive ZK-STARK proving pipeline is a masterpiece of cryptography. State compression happens in 300ms without draining server memory.”
- section #faq .section-pad
  - h2: Technical Inquiries
- h3: Ready to deploy on next-gen Layer 2?
- p: Experience high-speed composability and zero gas volatility today.
- footer
  - p: Modular ZK-Rollup infrastructure engineered for high-throughput EVM scaling and instantaneous cryptographic finality.
  - h4: Protocol
  - ul
    - li: Architecture
    - li: Dashboard
    - li: Ecosystem
    - li: Builders
  - h4: Developers
  - ul
    - li: Documentation
    - li: ZK Explorer
    - li: Bridge RPC
    - li: Design Library

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
