# Rebuild prompt — VigilixQ (`vigilix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/vigilix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cybersecurity protection template with blueprint grid, isometric shield diagram, detection stats, dark service accordion, and simple plan pricing.

## Title
Vigilix — Protect Your Business From Cyber Threats

## Description meta
Vigilix is a fictional cybersecurity template: proactive protection, threat detection, and simple plans. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --paper:#FBFAF7; --ink:#131110; --mut:#6f6a66; --line:#e5e0d9;
  --acc:#F4500A; --acc-d:#c93a00;
  --dark:#150C08; --dark2:#1E110B; --darkline:rgba(255,255,255,.12);
  --mono:'JetBrains Mono',monospace; --disp:'Archivo',sans-serif; --body:'Space Grotesk',sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .panel.nav.dotgrid “Primary”
    - a: VigilixQ. → #top
    - a: Home → #top
    - a: Solution → #stats
    - a: Industries → #services
    - a: About → #about
    - a: Get in Touch → #pricing
    - button: ☰
  - a: Home → #top
  - a: Solution → #stats
  - a: Industries → #services
  - a: About → #about
- main #top
  - section .wrap.hero
    - p: Managed security · SOC · Compliance
    - h1: PROTECT YOUR BUSINESS FROM CYBER THREATS
    - p: Protect your business and sensitive data with proactive cybersecurity solutions that detect and prevent threats before they can cause harm.
    - a: Get Started → → #pricing
  - section #stats .wrap.stats
    - h2: KEEPING BUSINESSES SAFE IN A DIGITAL WORLD
    - p: From identifying vulnerabilities to responding to threats, we provide reliable security solutions designed around your business needs.
    - h3: Detection speed
    - p: Threats spotted in under a few seconds.
    - h3: 24/7
    - p: Continuous threat monitoring.
    - h3: $500M
    - p: Breach losses prevented for our clients.
    - p: “THEIR PLATFORM CUT OUR INCIDENT RESPONSE TIME BY 90 PERCENT AND GAVE OUR TEAM VISIBILITY WE NEVER HAD BEFORE.”
    - h3: CISO, MERIDIAN CARE
  - section #services .darksec
    - h2: COMPLETE CYBERSECURITY PROTECTION FOR YOUR BUSINESS
    - h4: Threat Detection // 01
    - p: Real-time monitoring across endpoints, network, and cloud. Behavioral models flag anomalies in seconds, not days.
    - h4: Cloud Security // 02
    - p: Protect your cloud infrastructure, applications, and sensitive data from cyber attacks by implementing strong security measures and best practices.
    - h4: Vulnerability Testing // 03
    - p: Scheduled pentests and continuous scanning with prioritized fixes your engineers will actually ship.
    - h4: Incident Response // 04
    - p: A named response squad on call 24/7 with a 60-second triage SLA and full forensic reports.
    - h4: Compliance & Audit // 05
    - p: SOC 2, HIPAA, and PCI evidence collected automatically. Audits go from months to days.
  - section #about .wrap.approach
    - h2: A STRONGER APPROACH TO CYBERSECURITY
    - h3: Proactive Protection
    - p: Identify potential threats early and strengthen your defenses before security risks become costly problems.
    - a: Learn More → → #pricing
    - h3: Fast Response
    - p: Detect, investigate, and respond to security incidents quickly to minimize potential business impact.
    - a: Learn More → → #pricing
    - p: We combine proactive protection, smart technology, and expert response to keep your business secure against evolving threats.
    - a: Browse More → #pricing
  - section #pricing .pricing
    - p: Pricing
    - h2: SIMPLE PLANS, STRONGER SECURITY
    - p: Choose the right level of protection for your team and stay secure as you grow.
    - p: Save 15% with annual billing on yearly
    - a: Get Started → #top
    - ul .feat
      - li: Basic Threat Monitoring
      - li: Email Support
      - li: Endpoint Protection
      - li: Network Security
      - li: Vulnerability Management
      - li: Incident Response
      - li: Priority Email Support
- footer
  - a: VigilixQ. → #top
  - p: Every week we share the latest threat intelligence, security updates, and industry insights.
  - a: ◉ → #top
  - a: f → #top
  - a: in → #top
  - a: 𝕏 → #top
  - p: FOLLOW US ON — sample template
  - ul .flink
    - li: Home
    - li: About Us
    - li: Services
    - li: Projects
    - li: Contact
  - p: CONTACT — SAMPLE ONLY
  - p: hello@vigilix.example +1 (555) 014-2900 Austin, TX
  - a: Back to Top ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
