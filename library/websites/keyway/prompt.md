# Rebuild prompt — Keyway (`keyway`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/keyway/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Model Context Protocol (MCP) security gateway and zero-trust proxy: interactive SVG circuit packet pulse conduit between agents and tool servers, telemetry log stream, real-time YAML policy simulator, ecosystem compatibility matrix, and microsecond latency benchmarks.

## Title
Keyway — Model Context Protocol Gateway & Zero-Trust Proxy

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #fafafa;
  --surface-card: #ffffff;
  --surface-elevated: #f8fafc;
  --surface-subtle: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --action-primary: #0f172a;
  --action-primary-hover: #1e293b;
  --signal-indigo: #4f46e5;
  --signal-indigo-light: #e0e7ff;
  --signal-indigo-glow: rgba(79, 70, 229, 0.15);
  --signal-emerald: #10b981;
  --signal-emerald-light: #ecfdf5;
  --signal-emerald-glow: rgba(16, 185, 129, 0.2);
  --signal-crimson: #ef4444;
  --signal-crimson-light: #fef2f2;
  --signal-amber: #f59e0b;
  --border-default: rgba(15, 23, 42, 0.08);
  --border-focus: rgba(79, 70, 229, 0.35);
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
  --shadow-card: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(15, 23, 42, 0.06);
  --shadow-glow: 0 12px 32px -4px rgba(79, 70, 229, 0.12), 0 0 0 1px rgba(79, 70, 229, 0.2);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: Keyway → #
  - ul .nav-links
    - li: Gateway Conduit
    - li: Security Pillars
    - li: Policy Simulator
    - li: Ecosystem
    - li: Latency
    - li: Pricing
  - a: Documentation → #simulator
  - a: Deploy Gateway → #pricing
- section .hero-section
  - h1: Every agent. Every tool. One door.
  - p: Policy, security, and zero-trust authorization proxy for your MCP ecosystem. Less sprawl. Better agents. Zero surprises.
  - a: Deploy Gateway Free → #pricing
  - a: Watch Conduit in Action → #schematic
  - button: Strict Defense
  - button: Audit Only
  - button: Permissive
  - button: Fire Test Call Pulse
- section .container
- section #security .container
  - h2: Built for the agentic tool sprawl reality
  - p: AI models with direct database access, third-party APIs, and terminal execution are catastrophic liabilities without strict perimeter controls.
  - h3: Zero-Trust Tool Gating
  - p: Granular schema enforcement. Ensure an agent can only query permitted tables and invoke approved methods. Block arbitrary destructive mutations like DROP TABLE or unhedged deletes.
  - h3: Automated PII & Secret Masking
  - p: Real-time regex and NER redaction. Credit card PANs, JWT tokens, AWS access keys, and customer emails are masked inline before reaching model context or log sinks.
  - h3: Cryptographic Audit & Replay
  - p: Every MCP JSON-RPC call and response payload is SHA-256 hashed and signed. Create an immutable proof chain for SOC 2 Type II, HIPAA, and enterprise AI compliance reviews.
- section #simulator .container
  - h2: Test rules against simulated MCP calls
  - button: 1. Block Destructive SQL
  - button: 2. Mask Stripe Customer PII
  - button: 3. GitHub Branch Protection
  - button: Re-run Rule Simulation →
- section #ecosystem .container.ecosystem-section
  - h2: Works with every client & server in the MCP spec
  - p: Zero SDK lock-in. Drop Keyway between your agents and tools with a single environment variable change.
- section #benchmarks .container
  - h2: Engineered for microsecond agent latency
  - p: Written in zero-alloc Go and Rust with epoll event loops. Keyway parses and validates JSON-RPC streams in streaming memory, adding sub-2ms overhead while performing full schema policy audits.
- section #pricing .container.pricing-section
  - h2: Start free. Scale to mission-critical.
  - p: Deploy Keyway as a local CLI proxy or scale to an airgapped private cloud gateway.
  - h3: Developer
  - p: For individual AI engineers building and testing MCP tools locally.
  - ul .price-features
    - li: ✓ Local CLI proxy & terminal dashboard
    - li: ✓ Up to 5 connected MCP tool servers
    - li: ✓ Standard regex PII & token redactor
    - li: ✓ Community Discord support
  - a: Install CLI Free → #simulator
  - h3: Team Cloud
  - p: For engineering teams deploying autonomous agent swarms in staging & prod.
  - ul .price-features
    - li: ✓ Unlimited MCP client & tool connections
    - li: ✓ Centralized YAML Policy Registry
    - li: ✓ Real-time PII & Credential Guard
    - li: ✓ 30-day immutable cryptographic audit log
    - li: ✓ Team RBAC & Slack alert webhooks
  - a: Deploy Team Gateway → #
  - h3: Enterprise Airgap
  - p: For regulated enterprises requiring dedicated VPC and strict data sovereignty.
  - ul .price-features
    - li: ✓ On-premise / Airgapped Kubernetes Helm
    - li: ✓ SOC 2 Type II, HIPAA, & ISO 27001 bundle
    - li: ✓ Custom eBPF packet filter acceleration
    - li: ✓ Dedicated Security Architect & 99.99% SLA
    - li: ✓ SAML SSO & Okta SCIM provisioning
  - a: Schedule Security Review → #
- section .container.faq-section
  - h2: Everything you need to know
- section .container
  - h2: Lock down your MCP ecosystem today
  - p: Take control of tool sprawl, prevent data leaks, and give your AI agents safe, authorized access to production systems.
  - a: Deploy Gateway Free → #pricing
  - a: Read the Documentation → #simulator
- footer .site-footer
  - ul .footer-links
    - li: Conduit
    - li: Architecture
    - li: Simulator
    - li: Pricing

## Fields
Keep these controls, including ids and placeholders.
- input[text] #ecoSearch placeholder='Search MCP clients, tools, or integrations...'

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
