# Rebuild prompt — Kallisto (`kallisto`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/kallisto/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Frontier reasoning AI engine: warm parchment ground, golden-hour meadow landscape, frosted glassmorphism prompt card, and live chain-of-thought telemetry.

## Title
Kallisto — The Reasoning Model Built for What Matters

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #FAF8F5;
  --color-surface-white: #FFFFFF;
  --color-surface-subtle: #F2EFE9;
  --color-surface-card: #FFFFFF;
  --color-ink-primary: #141517;
  --color-ink-secondary: #585C63;
  --color-ink-muted: #8E929A;
  --color-accent-amber: #D97706;
  --color-accent-amber-light: #FEF3C7;
  --color-accent-green: #15803D;
  --color-border: rgba(20, 21, 23, 0.08);
  --color-border-hover: rgba(20, 21, 23, 0.16);
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-btn: 9999px;
  --radius-card: 16px;
  --radius-hero: 24px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 12px 28px rgba(0, 0, 0, 0.06);
  --shadow-prompt: 0 20px 48px rgba(0, 0, 0, 0.14);
  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .site-nav
  - a: kallisto → #
  - ul .nav-links
    - li: Reasoning Engine
    - li: Benchmarks
    - li: API & Docs
    - li: Pricing
  - button: Log In
  - button: Join Now
- main
  - section .hero-section
    - h1: The reasoning model built for what matters.
    - p: Kallisto is an AI model that works through problems carefully before producing an answer. Connect via API, build in minutes, and ship intelligence you can actually trust.
    - button: Join the waitlist ↗
    - button: Attach
    - button: Select style
    - button: Analyze my contract
    - button: Summarize this log
    - button: Review my code
  - section #reasoning .reasoning-section
    - h2: Deep deliberation before token generation.
    - p: Unlike standard LLMs that generate token-by-token approximations, Kallisto allocates compute at inference time to formulate, stress-test, and verify deductive hypotheses.
    - h4: Synthesized Proof & Patch Recommendation:
    - p: The race condition occurs because the read lock release is not atomic with respect to the state transition buffer. Replacing the optimistic read with an acquire-release CAS loop guarantees safety across all shard partitions with zero lock contention.
  - section #benchmarks .benchmarks-section
    - h2: Leading the frontier in formal reasoning.
    - p: Tested against the most demanding mathematical, code verification, and scientific benchmarks.
  - section #api .api-section
    - h2: Ship reasoning intelligence in 3 lines of code.
    - p: Compatible with OpenAI SDKs. Stream reasoning tokens directly into your interface.
  - section #pricing .pricing-section
    - h2: Transparent Token Pricing
    - p: Pay only for the exact compute your reasoning workflows consume.
    - p: For prototyping reasoning workflows and evaluating model accuracy.
    - ul .tier-features
      - li: 100,000 free reasoning tokens
      - li: Standard rate limits (60 RPM)
      - li: Full streaming API access
    - button: Start Building
    - p: For startups and engineering teams deploying reasoning at scale.
    - ul .tier-features
      - li: $0.008 / 1k reasoning tokens
      - li: High-throughput Tier 4 clusters
      - li: Configurable reasoning effort knobs
      - li: SOC 2 Type II compliant VPC
    - button: Get API Keys
    - p: Custom private deployments on AWS, Azure, or on-premises GPU nodes.
    - ul .tier-features
      - li: Guaranteed dedicated H100 pods
      - li: Zero data retention & custom weights
      - li: Dedicated solutions architect
    - button: Contact Sales
  - section .final-cta-section
    - h2: Build on the reasoning engine built for what matters.
    - p: Get your API key today and experience deliberate machine reasoning.
    - button: Join the waitlist ↗
- footer .site-footer
  - h4: kallisto
  - p: The frontier reasoning AI model that thinks before answering. Engineered for developers who demand verified truth.
  - h5: PRODUCT
  - ul
    - li: Reasoning Engine
    - li: Benchmark Leaderboard
    - li: API Reference
    - li: Token Economics
  - h5: RESEARCH
  - ul
    - li: Deliberative Planning Paper
    - li: Self-Correction Invariants
    - li: Safety & Alignment
  - h5: COMPANY
  - ul
    - li: About Us
    - li: Careers
    - li: team@kallisto.example
- h3: Get Early Developer Access
- p: Join 10,000+ engineers and research teams building on Kallisto-R1.
- form
  - label: Work Email
  - label: Use Case
  - option: Code Verification & Security Auditing
  - option: Quantitative Analysis & Math Modeling
  - option: Complex Legal & Contract Analysis
  - option: Autonomous Agent Orchestration
  - button: Claim Your Invite

## Fields
Keep these controls, including ids and placeholders.
- textarea #heroPromptInput placeholder='Ask anything..'
- input[email] placeholder='you@company.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/golden-meadow.jpg`
- `assets/sunset-meadow.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
