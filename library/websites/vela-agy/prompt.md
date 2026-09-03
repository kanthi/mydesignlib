# Prompt Specification — Vela (`vela-agy`)

> Master prompt derived from Viktor Oddy's reference (`vela-ul`), adapted for Vela.

```text
Build a single, fully self-contained index.html — one file, no build step, no external requests of any kind (no CDN, no webfonts, no images, no video, no data: URIs). All visuals must be pure CSS gradients plus inline SVG. Inline all CSS in one <style> in <head> and the one script in a <script> at the end of <body>.

It is a dark, cinematic hero page for a fictional real-time data platform called "Vela", built as a FIXED 1690×950 design canvas. The canvas is uniformly scaled to FIT the viewport at 700px and wider — the composition is preserved verbatim, never re-flowed — and only below 700px does it reflow into a single stacked column.

1. Layout & Architecture:
- 1690×950 fixed design canvas with CSS transform scale(var(--canvas-scale))
- Background: #16120c obsidian panel
- Orange brand mark with inverted triangle cutouts

2. Three Feature Cards:
- Card 1: Planetary-scale streaming (interactive planet limb curve with glow, globe SVG, region pills)
- Card 2: Real-time observability (dashed orbit with satellites, bioluminescent sphere, live scrambling telemetry for latency, error rate %, and requests k req/s)
- Card 3: Adaptive model operations (collapsing/expanding status-band with clip-path transition, status rows with telemetry pulses)

3. Responsive:
- Uniform containment scaling above 700px.
- Single stacked column reflow on mobile viewports (<700px).
```
