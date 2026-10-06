# Rebuild prompt — Aegix (`aegix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/aegix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI cyber defense landing page featuring an interactive multi-ring radar mesh with spotlight target tracking, real-time threat telemetry, 3D biometric fingerprint authentication tile, interactive SOC operations command center preview, and rotating 3D half-globe mesh.

## Title
Aegix — Autonomous AI Agent Cyber Defense

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #08090E;
  --bg-card: #0F1117;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --accent-purple: #8B5CF6;
  --accent-violet: #6366F1;
  --accent-glow: #A855F7;
  --text-main: #FFFFFF;
  --text-muted: #8E929E;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: Aegix → #
  - ul .nav-menu
    - li: Company
    - li: Services
    - li: Reviews
    - li: Contact
  - a: Request A Free Trial → #trial
- section .hero-section
  - h1: Stay Protected with Aegix AI Agent
  - p: We monitor, detect & respond in real time keeping your systems secure without slowing down team velocity.
  - button: Request A Free Trial
  - button: See How It Works
- section #services .services-row
  - h3: Firewall Protection
  - p: Next-gen dynamic boundary firewalls and per-device zero-trust security for distributed teams.
  - h3: Data Encryption
  - p: Protect sensitive telemetry and keys at rest, in transit, and in compute with post-quantum cryptography.
  - h3: Secure Cloud Solutions
  - p: Automated posture management across AWS, GCP, Azure, and private Kubernetes clusters.
  - h3: Phishing Protection
  - p: Deep natural language analysis detecting impersonation, weaponized links, and credential harvests.
- section #trust .trust-section
  - h2: Why trust us with your security
  - h4: Advanced Protection Tools
  - p: Next-gen perimeter defenses, generative AI threat attribution, and sub-second automated isolation.
  - h4: Scalable Solutions
  - p: Modular micro-agents tailored for early-stage engineering teams up to multinational defense contractors.
  - h4: Seamless Integration
  - p: Deploys as a lightweight daemon, eBPF kernel hook, or single-line reverse proxy with zero disruption.
- section .soc-banner
  - button: Watch Our Live Defense Demo
- section .blog-section
  - h2: Latest news and insights
  - h3: Protecting your digital future with Aegix autonomous agents
  - h3: The role of real-time AI in modern cyber counter-defense
  - h3: Cloud security simplified: The Aegix zero-configuration approach
- section #faq .faq-section
  - h2: Frequently asked questions
  - p: Get answers to common architecture and deployment questions.
- section #trial .bottom-cta-section
  - h2: Start Your 14-Day Free Trial with Aegix
  - p: Try Aegix free for 14 days and experience powerful AI-driven protection for your business.
  - button: Start Protecting Your Presence
- footer .site-footer
  - p: Autonomous AI cyber defense, real-time edge telemetry, and zero-trust verification for modern engineering teams.
  - h5: Info
  - ul
    - li: About Us
    - li: Features
    - li: Careers
    - li: Pricing
  - h5: Resources
  - ul
    - li: Blog & Articles
    - li: Case Studies
    - li: Contact Us
    - li: Integrations
  - h5: Company
  - ul
    - li: Privacy Policy
    - li: Terms & Conditions
    - li: Security Whitepaper
    - li: Changelog

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
