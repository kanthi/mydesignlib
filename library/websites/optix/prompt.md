# Rebuild prompt — Optix (`optix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/optix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-performance WebGPU shader infrastructure and optical rendering engine designed for AI agents. Features interactive 3D optical glass prism with real-time chromatic dispersion, live shader node graph, real-time optics controller dock, and sub-millisecond WGSL compilation benchmarks.

## Title
Optix — The WebGPU library, designed for agents

## Description meta
High-performance WebGPU shader infrastructure, optical glass caustics, and hardware-accelerated rendering designed for autonomous AI agents.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-serif: "Newsreader", Georgia, serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --bg-studio: #F5F5F3;
  --bg-card: #FFFFFF;
  --bg-panel-dark: #141416;
  --bg-panel-dark-subtle: #1C1C1F;
  --ink-primary: #0A0A0B;
  --ink-secondary: #4A4A52;
  --ink-muted: #71717A;
  --ink-inverse: #F4F4F5;
  --border-hairline: rgba(10, 10, 12, 0.08);
  --border-panel: rgba(255, 255, 255, 0.1);
  --border-active: #0A0A0B;
  --accent-beam: #FFFFFF;
  --accent-dispersion-red: #EF4444;
  --accent-dispersion-green: #10B981;
  --accent-dispersion-blue: #3B82F6;
  --accent-dispersion-violet: #8B5CF6;
  --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-floating: 0 16px 36px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);
  --shadow-node: 0 8px 24px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.08);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-navbar
  - a: optix → #
  - ul .nav-tabs
    - li: Light Pipeline
    - li: Docs
    - li: Shaders
    - li: Examples
    - li: Benchmarks
  - button: ⎘ Copy changes
- section .hero-stage
  - h1: optix
  - p: The WebGPU library, designed for agents.
  - button: Copy
  - button: Reset
- section #pipeline .architecture-section
  - h2: Built for autonomous agent workflows.
  - p: Traditional WebGL wrappers require complex state binding and garbage collection pauses. Optix gives AI agents declarative, zero-copy control over GPU memory pools.
  - h3: Zero-Copy Ring Buffer Streaming
  - p: Agents stream neural weights and procedural geometry directly to the GPU without main-thread serialization bottlenecks.
  - h3: Sub-Millisecond WGSL Compilation
  - p: Agents generate custom shader code on the fly. Optix validates AST and compiles pipelines in under 1.8 milliseconds.
  - h3: Graceful WebGL2 Fallback
  - p: When running in headless agent environments or mobile viewports without WebGPU, Optix switches to an optimized WebGL2 hybrid pipeline.
  - h3: Exposed as Model Context Protocol (MCP) Tools
  - p: Every shader parameter, render pass, and geometry buffer is automatically registered as a structured tool schema for Claude, OpenAI, and Gemini agents.
- footer #docs .site-footer
  - a: optix → #
  - ul .footer-links
    - li: GitHub
    - li: NPM
    - li: WGSL Spec
    - li: Discord
    - li: Telemetry

## Fields
Keep these controls, including ids and placeholders.
- input[range] #miniRoughness
- input[range] #iorSlider
- input[range] #dispSlider
- input[range] #angleSlider
- input[range] #roughSlider

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
