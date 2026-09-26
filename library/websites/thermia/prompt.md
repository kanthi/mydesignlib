# Rebuild prompt — Thermia (`thermia`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/thermia/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Deep-blue clean-energy site for a fictional HTGR reactor company: SVG reactor hero with core glow, temperature bar chart race, industry grid, and Energy-as-a-Service close.

## Title
Thermia — Clean Heat and Electricity for Industry

## Description meta
Thermia is a fictional advanced clean-energy company: high-temperature reactors for industry. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{--ink:#0D1117;--paper:#F5F3EE;--card:#fff;--line:#E2DED4;--mut:#5c6470;--ember:#E8591B;--deep:#123A5C;
  --grot:'Space Grotesk',sans-serif;--mono:'IBM Plex Mono',monospace}
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .nav “Primary”
    - a: Thermia → #top
    - a: Technology → #tech
    - a: Solutions → #apps
    - a: Industries → #ind
    - a: Team → #team
    - a: Investors → #contact
    - button: Get in Touch
    - button: MENU
  - a: Technology → #tech
  - a: Solutions → #apps
  - a: Industries → #ind
  - a: Team → #team
  - a: Investors → #contact
- main #top
  - section .wrap.hero
    - p: PROVEN ADVANCED CLEAN TECHNOLOGY
    - h1: Poweringthe World
    - p: Clean heat and electricity for a world of industrial applications — from one compact, modernized reactor design.
    - button: Discover Our Story
    - a: Explore Technology → #tech
  - section .wrap
    - h2: One therm equals serious heat. We deliver millions.
    - p: Our name reflects the mission: industrial heat at temperatures conventional plants can't touch — clean, reliable, and priced for the real economy. All figures on this page are fictional sample specifications.
  - section #tech .wrap.block
    - p: 01 — TECHNOLOGY
    - h2: Modernized, proven, intelligent.
    - p: A modernized high-temperature design, run by AI-assisted digital twins that cut cost, accelerate delivery, and minimize human error.
    - p: / HEAT
    - h3: Process heat
    - p: Chemicals to steelmaking and district heating — the widest range in the class.
    - p: / HEAT + POWER
    - h3: Co-generation
    - p: Heat and electricity for remote operations and heavy facilities.
    - p: / H₂
    - h3: Hydrogen
    - p: Efficient H₂ for ammonia, e-fuels, and sustainable aviation.
    - p: / POWER
    - h3: Electricity
    - p: 24/7 clean power for data centers, microgrids, and communities.
    - p: MAX OPERATING TEMPERATURE · SAMPLE DATA
  - section #ind .wrap.block
    - p: 02 — INDUSTRIES
    - h2: Where the heat goes.
    - h3: Oil & Gas
    - p: Carbon-free process heat for refining operations.
    - h3: Chemical
    - p: Full 300–850 °C range coverage for plants.
    - h3: Transportation
    - p: Energy for aviation, shipping, and e-fuels.
    - h3: Steelmaking
    - p: Deep decarbonization for emissions-heavy melts.
    - h3: Mining
    - p: Heat and power for remote critical minerals.
    - h3: Data Centers
    - p: On-site 24/7 power plus cooling heat reuse.
    - h3: Communities
    - p: Electricity, heating, and e-fuels per district.
    - h3: Desalination
    - p: Steady energy for large-scale freshwater.
  - section #team .wrap.block
    - p: 03 — TEAM
    - h2: Operators, engineers, owners.
    - p: Fictional sample team. Thermia brings together fictional experts across engineering, projects, and finance.
    - p: “Industrial heat is the invisible half of the energy transition. Thermia makes it visible — and clean.”
  - section #contact .wrap
    - p: ENERGY AS A SERVICE
    - h2: We own the plant. You take the heat.
    - p: Off-take, operate, or partner — financing built for heavy industry.
    - button: Contact Our Team
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
