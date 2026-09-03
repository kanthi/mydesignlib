# Prompt Specification — Valeur (`valeur-agy`)

> Master prompt derived from Viktor Oddy's reference (`aurex-finance`), adapted for Valeur.

```text
Build a single full-screen hero section for a DeFi / private-banking landing page called VALEUR // ÍNDEX. Use React 18 + TypeScript + Vite + Tailwind CSS, with lucide-react for icons. The entire page is ONE component rendering ONE <section> that fills the viewport — no scrolling, no other sections.

0. STACK & PROJECT SETUP
- Vite + React 18 + TypeScript + Tailwind CSS 3
- Icons: lucide-react (Wallet, Menu, X, Activity)
- Fonts: Space Grotesk (Display Wordmark and H1) + Manrope (UI font)
- Self-contained static build runnable directly from index.html

1. VISUAL IDENTITY & MATERIALITY
- Dark aesthetic: base background #000 (pure black)
- Fixed fullscreen background video of bioluminescent deep-sea organisms:
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4
  Poster: ./assets/poster.jpg
- Accent color: Ice Blue (#AFDDFF, hover #c8e8ff)
- No dark overlay or gradient scrim over the video — text sits directly on it

2. GRID LINES & INTERSECTIONS
- 4 vertical lines: 12.6%, 37.5%, 61.9%, 86.2%
- 2 horizontal lines: 32.7%, 71.4%
- 8 intersecting 10x10px plus marks centered on the crossings with -translate-x-1/2 -translate-y-1/2

3. TOP NAVIGATION
- Left: Wordmark "VALEUR // ÍNDEX" with rotating 45° diamond glyph
- Center: "01. ECOSYSTEM", "02. LIQUIDITY_POOLS", "03. VALEUR_INDEX", "04. GOVERNANCE"
- Right: Wallet icon + "0x71a4...f4e2" + "[ CONNECTED ]" + "PRIME_MEMBER" chip
- Mobile: Hamburger toggle opening full-screen slide-down menu with staggered row reveals

4. MAIN HEADLINE
- Positioned absolutely top-[140px] (sm: top-[160px], md: top-[178px]), left-5 (md: left-[35px])
- Copy: "Liquid Assets. Luminous Returns."

5. CENTRAL NODES & ELBOW CONNECTOR LINES
- 3 square nodes with 1px white/80 border at:
  - top-[27%] left-[60%] (CORE_ENTITY)
  - top-[58%] left-[32%] (LUMINOUS_INSIGHT)
  - top-[63%] left-[50%] (CONNECTIVITY)
- 3 corresponding text labels with title + description
- 6 SVG connector lines with horizontal and diagonal elbow runs landing on the node corners

6. BOTTOM ROW
- Left: CTA Button in Ice Blue (#AFDDFF) with black star glyph and text "EXPLORE PRIVATE BANKING"
- Right: Frosted telemetry card:
  - Badge: "NOT A BANK — AN ECOSYSTEM" with green pulsing status dot
  - Copy: "Valeur manages algorithmic yield indexing through decentralized vault routing, guaranteeing private-tier execution."
  - Metrics: TVL $1.42B | APY 14.8% | LATENCY 4.2ms
- Interactive deposit and allocation modal with tier verification
```
