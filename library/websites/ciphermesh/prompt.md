# Rebuild prompt — CipherMesh (`ciphermesh`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/ciphermesh/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI-powered zero-trust cybersecurity platform with technical blueprint framing, electric cobalt halftone topography, and isometric defense schematics.

## Title
CipherMesh — AI-Powered Zero-Trust Cybersecurity Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Silkscreen:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #FFFFFF;
  --surface-subtle: #F8FAFC;
  --surface-card: #FFFFFF;
  --surface-dark: #0B0F17;
  --surface-dark-card: #121824;
  --text-primary: #0A0F1D;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --border-default: #E2E8F0;
  --border-subtle: rgba(226, 232, 240, 0.7);
  --border-focus: #2563EB;
  --action-primary: #2563EB;
  --action-hover: #1D4ED8;
  --accent-dither: #3B82F6;
  --accent-light: #EFF6FF;
  --accent-border: #BFDBFE;
  --font-headline: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-pixel: 'Silkscreen', monospace;
  --gutter-width: 44px;
  --container-max: 1220px;
  --dur: 200ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .top-navbar
  - a: CipherMesh → #hero
  - ul .nav-links
    - li: Platform
    - li: Features
    - li: Architecture
    - li: Customers
    - li: Docs
  - a: GET STARTED → → #cta
- section #hero .hero-section.section-boundary
  - h1: AI secure access to your data, anywhere, anytime
  - p: Enable remote teams with continuous zero-trust identity verification, instant threat isolation, and hardware-grade cryptographic protection across every device.
  - a: GET STARTED → → #cta
  - a: VIEW DOCS → #docs
- section .social-proof-bar.section-boundary
- section #features .features-section.section-boundary
  - h2: Built For Modern Enterprise Protection
  - p: We create intelligent cybersecurity solutions that help businesses secure access across hybrid cloud infrastructure and remote perimeters.
  - h3: Zero-Trust Access
  - p: Secure every login and microservice connection with ephemeral keys.
  - h3: Real-Time Monitoring
  - p: Detect threats instantly across telemetry feeds, 24/7 autonomous triage.
  - h3: Data Protection
  - p: Keep sensitive payloads encrypted in transit and resting in isolated enclaves.
- section #platform .module-split-section.section-boundary
  - h2: Security Built For Modern Enterprises
  - p: We deliver intelligent cybersecurity solutions designed to protect teams, credentials, and high-throughput data streams.
  - a: LEARN MORE → → #cta
  - h3: Real-Time Monitoring
  - p: Sensitive business data protected with intelligent cybersecurity solutions designed for modern digital operations.
- section #architecture .module-split-section.section-boundary
  - h2: Advanced Security Features For Modern Enterprises
  - p: Protect your business with intelligent cybersecurity solutions designed to secure access across distributed cloud environments.
  - p: Block suspicious logins before they compromise business systems and lateral movement perimeters.
  - a: LEARN MORE → → #cta
  - h3: Prevent Unauthorized Access
  - a: → → #cta
- section .metric-split-section.section-boundary
  - h3: Real-Time Threat Detection
  - p: connected systems instantly.
  - button: AI Monitoring
  - button: Threat Analysis
  - button: Risk Prevention
  - a: → → #cta
- section .pipeline-section.section-boundary
  - h2: Smart Security In Three Simple Steps
  - p: Protect your business with intelligent cybersecurity infrastructure designed to detect and isolate threats continuously.
- section #testimonials .testimonials-section.section-boundary
  - h2: Trusted By Modern Enterprises Worldwide
  - p: Businesses rely on our intelligent cybersecurity solutions to protect sensitive systems and maintain continuous compliance.
  - h4: Alex Smith
  - h4: Andreas Mitchell
  - p: "Reduced our incident resolution time from 42 minutes to 8 seconds with autonomous triage."
  - p: "The platform helped our teams secure access across every device without slowing developer productivity or requiring heavy agents."
- section #cta .bottom-cta-section.section-boundary
  - h2: Secure your business with intelligent cybersecurity solutions
  - button: START SECURING NOW →
  - button: START FREE TRIAL
  - p: Protect digital operations with intelligent security infrastructure built for zero-trust enterprise resilience.
- footer .blueprint-footer
  - ul .footer-links-list
    - li: Projects
    - li: Contact
    - li: Features
  - ul .footer-links-list
    - li: About Us
    - li: Careers
    - li: Contact
  - ul .footer-links-list
    - li: How it works
    - li: Use case
    - li: Discover
  - ul .footer-links-list
    - li: Growth
    - li: Process
    - li: Support
  - a: 𝕏 → #
  - a: @ → #
  - a: in → #
  - p: security@ciphermesh.example
  - p: +1 (415) 890-2048

## Images in the page
- `assets/hero_topo.png — Halftone Dither Mountain Topography`
- `assets/portrait_alex.png — Security Analyst`
- `assets/portrait_andreas.png — DevOps Lead`
- `assets/isometric_shield.svg — Isometric Halftone Security Shield`
- `assets/isometric_radar.svg — Isometric Halftone Radar Scanner`
- `assets/isometric_firewall.svg — Isometric Halftone Firewall Barrier`
- `assets/isometric_loop.svg — Isometric Infinity Loop Data Integrity`
- `assets/portrait_alex.png — Alex Smith Halftone Dither Portrait`
- `assets/portrait_andreas.png — Andreas Mitchell Halftone Dither Portrait`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero_topo.png`
- `assets/isometric_firewall.svg`
- `assets/isometric_loop.svg`
- `assets/isometric_radar.svg`
- `assets/isometric_shield.svg`
- `assets/portrait_alex.png`
- `assets/portrait_andreas.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
