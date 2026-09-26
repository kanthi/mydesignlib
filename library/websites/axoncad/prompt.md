# Rebuild prompt — AxonCAD (`axoncad`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/axoncad/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Browser-native AI parametric CAD & geometry engine — interactive 3D solid workbench, WebGPU viewport, Git-for-CAD assemblies, and auto-dimensioned 2D blueprints.

## Title
AxonCAD | Browser-Native AI Parametric CAD & Solid Geometry Engine

## Description meta
Turn mechanical engineering intent into exact parametric B-Rep solids, auto-dimensioned 2D drawings, and Git-collaborative assemblies directly in your browser with WebGPU.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canvas: #070709;
  --bg-workbench: #0d0e12;
  --bg-surface: #12141a;
  --bg-surface-elevated: #181b22;
  --bg-surface-hover: #1f232c;
  --bg-surface-active: #262b36;
  --bg-glass: rgba(18, 20, 26, 0.85);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-standard: rgba(255, 255, 255, 0.14);
  --border-focus: rgba(0, 240, 255, 0.5);
  --border-cyan: #00f0ff;
  --border-blue: #3b82f6;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-faint: #475569;
  --text-cyan: #00f0ff;
  --text-emerald: #10b981;
  --text-amber: #f59e0b;
  --cyan-primary: #00f0ff;
  --cyan-glow: rgba(0, 240, 255, 0.28);
  --blue-primary: #3b82f6;
  --blue-glow: rgba(59, 130, 246, 0.28);
  --emerald-status: #10b981;
  --emerald-glow: rgba(16, 185, 129, 0.2);
  --amber-warning: #f59e0b;
  --rose-alert: #f43f5e;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", monospace;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-full: 9999px;
  --container-max: 1280px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: AXONCAD → #
  - ul .nav-links
    - li: Design Engine
    - li: Feature Board
    - li: Git for CAD
    - li: 2D Blueprint
    - li: Pricing
  - button: Launch Workbench
- main
  - section .hero-section
    - h1: Next-Generation CAD. Engineered for the AI Age.
    - p: Turn mechanical intent into exact parametric B-Rep solids, auto-dimensioned 2D engineering blueprints, and Git-collaborative assemblies — 100% directly in your browser.
    - button: Generate Solid
    - button: EXPORT STEP
    - button: Shaded
    - button: Wireframe
    - button: FEA Stress
    - button: Reset View
    - label: Material Alloy
    - option: Al 6061-T6 (2.70 g/cm³)
    - option: Ti-6Al-4V Grade 5 (4.43 g/cm³)
    - option: Carbon PEEK 450CA30 (1.41 g/cm³)
    - option: 316L Stainless (8.00 g/cm³)
  - section #feature-board .section
    - h2: Everything, Pinned Down.
    - p: A complete mechanical engineering stack running entirely on client hardware. No remote server queues, no cloud streaming lag.
    - h3: AI Design Engine
    - h2: Natural Language Modeling
    - p: Describe your engineering intent in plain speech. The Design Engine instantly maps out and compiles robust, parametric B-Rep models directly ready for manufacture.
    - h3: Core Kernel
    - h2: Browser Native
    - p: A full-fledged, high-speed geometry kernel running directly on the client. Blazing fast, WASM-powered.
    - h3: Parametric
    - h2: Live Tweaks
    - p: Fine-tune holes, radii, and features on the fly with instantaneous engine updates.
    - h3: Branches
    - h2: Git for CAD
    - p: Branch, fork, and merge assembly designs with full parametric version logs and volumetric visual diffs.
    - h3: Teams
    - h2: Live Editing
    - p: Co-design assemblies with teammates simultaneously. Instantly push updates and solve spatial conflicts in the cloud.
  - section #git-cad .section
    - h2: GitHub for Mechanical Hardware.
    - p: Stop emailing `.step` files with names like `bracket_v3_final_rev2_FINAL.step`. AxonCAD brings declarative branching, parametric geometric diffs, and concurrent multi-user editing to CAD.
    - ul
      - li: ✦ Visual Volumetric Diffs: Highlight mass addition in green, material removal in amber, and clash interference in crimson.
      - li: ✦ Non-Destructive Merge: Branch experimental lightweight truss topologies and merge back with automated constraint resolution.
      - li: ✦ Live Co-Design Presence: See team cursor tags, active parameter adjustments, and spatial clearances in real time.
    - button: Request Team Collaboration Demo
  - section #drawings .section
    - h2: From 3D Solid to 2D Engineering Drawing in 5 Seconds.
    - p: AI auto-generates ASME Y14.5 and ISO compliant manufacturing blueprints with complete orthographic projections, automated dimensions, and GD&T title blocks.
    - button: Export DXF
    - button: Export PDF
  - section #pricing .section
    - h2: Built for Individual Builders to Global Enterprises.
    - p: Start free with full browser CAD capabilities. Upgrade when you need team collaboration, high-compute AI generation, and headless API automation.
    - ul .pricing-features
      - li: ✓ Full WebGPU browser CAD workbench
      - li: ✓ 50 AI Natural Language generations/mo
      - li: ✓ Unlimited STEP, STL, & OBJ exports
      - li: ✓ Client-side parametric solving
      - li: ✓ Community forum support
    - button: Start Free
    - ul .pricing-features
      - li: ✓ 500 AI compute credits/mo
      - li: ✓ AI auto-dimensioned 2D engineering blueprints
      - li: ✓ Unlimited Git branches & version history
      - li: ✓ Real-time FEA stress & weight optimization
      - li: ✓ Priority WASM SIMD compute worker
      - li: ✓ Priority email & Discord support
    - button: Upgrade to Pro
    - ul .pricing-features
      - li: ✓ Unlimited shared team compute credits
      - li: ✓ Dedicated WebGPU server clusters
      - li: ✓ Headless REST/Python API SLA access
      - li: ✓ Custom on-premise / private cloud deploy
      - li: ✓ SAML SSO, audit logs & RBAC permissions
      - li: ✓ Dedicated solutions engineer
    - button: Contact Sales
  - section .section
    - h2: From Intent to Production-Ready Solids in Seconds.
    - p: Join thousands of mechanical engineers, robotics builders, and industrial designers creating the next generation of physical hardware with AxonCAD.
    - button: Launch Free Browser Workbench
    - button: Book Enterprise Demo
- footer
  - a: AXONCAD → #
  - p: Browser-native AI parametric CAD platform. Engineered with WebGPU acceleration and client-side boundary representation geometry kernels.
  - h4: Product
  - ul
    - li: Design Engine
    - li: Feature Board
    - li: Git for CAD
    - li: 2D Blueprint Studio
    - li: Pricing & Tiers
  - h4: Developers
  - ul
    - li: Documentation
    - li: Python SDK
    - li: REST API Reference
    - li: B-Rep Specifications
    - li: Community Discord
  - h4: Company
  - ul
    - li: Enterprise Solutions
    - li: Security & Compliance
    - li: Careers
    - li: Contact Sales
- button: ✕
- h3: Launch AxonCAD Workbench
- p: Experience instant sub-millisecond parametric CAD directly in your browser. No download, no license key required.
- form
  - label: Work Email
  - label: Primary Application
  - option: Robotics & Mechanical Assemblies
  - option: Aerospace & Structural Nodes
  - option: Consumer Electronics & Tooling
  - option: Additive Manufacturing & 3D Printing
  - button: Open Browser Workbench Now
- h3: AxonCAD Enterprise & API Access
- p: Deploy dedicated WebGPU clusters, custom headless geometry APIs, and enterprise CAD governance.
- form
  - label: Full Name
  - label: Work Email
  - label: Organization & Team Size
  - button: Submit Enterprise Request
- h3: Success!
- p: Initializing environment and compiling WASM geometry kernel...
- button: Close

## Fields
Keep these controls, including ids and placeholders.
- input[text] #prompt-input placeholder='Describe a mechanical part: e.g. NEMA 23 stepper mount with M4 counterbores...'
- input[range] #slider-radius
- input[range] #slider-height
- input[range] #slider-holes
- input[range] #slider-fillet
- select #material-select
- input[email] placeholder='engineer@organization.com'
- select
- input[text] placeholder='Dr. Evelyn Wright'
- input[email] placeholder='evelyn@aerospace-sys.com'
- input[text] placeholder='Acme Dynamics • 50+ Engineers'

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
