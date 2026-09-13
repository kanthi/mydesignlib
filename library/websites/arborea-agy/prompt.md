# Prompt Specification — Arborea (`arborea-agy`)

> Master prompt derived from Viktor Oddy's reference (`junglemind`), adapted for Arborea.

```text
Build a single, standalone, production-ready HTML file (all CSS in one <style> in <head>, all JS in one <script> before </body>). No frameworks, no build step, no external assets except the Google Font and the video URLs given below. Name it index.html.

It is ONE full-viewport hero section for an AI company called "Arborea". Match every value below exactly.

═══════════════════════════════════════
1. DOCUMENT HEAD
═══════════════════════════════════════
- <html lang="en">, <meta charset="UTF-8">, <meta name="viewport" content="width=device-width, initial-scale=1">
- <title>Arborea — The Thinking Engine Shaped For What Counts</title>
- Google Font: Syne (weights 500, 600, 700, 800) + Plus Jakarta Sans (300, 400, 500, 600, 700)
- html, body: height 100%, background #eaf0eb, color #111111, -webkit-font-smoothing: antialiased

═══════════════════════════════════════
2. DESIGN TOKENS (:root)
═══════════════════════════════════════
--ink: #111111
--muted: #4e5952
--card: rgba(255, 255, 255, 0.48)
--shell: 1120px
--ease: cubic-bezier(0.16, 1, 0.3, 1)

═══════════════════════════════════════
3. BACKGROUND VIDEO — NO OVERLAY
═══════════════════════════════════════
Structure: <section class="hero"> > <div class="hero__bg"> > <video>
Video element attributes: autoplay muted loop playsinline preload="auto"
poster: ./assets/poster.jpg
<source type="video/mp4">:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260831_232706_43757be4-2250-4f09-8cd7-23aebbf147ad.mp4

═══════════════════════════════════════
4. HERO SHELL & NAVIGATION
═══════════════════════════════════════
- Nav: Brand (diamond glyph + Arborea), Links (API & Docs, Architecture, Benchmarks, Research), Button (Request Access), Mobile Hamburger Toggle
- Center Stage:
  - Badge: "Now Arborea 3.0 Cognitive Runtime is live"
  - Headline: "The thinking engine shaped for what counts."
  - Subcopy: "Arborea is an AI system that reasons through every problem carefully before answering. Plug into the API, launch in minutes, and ship reasoning you can really rely on."
  - Frosted Glass Prompt Console: Textarea + Attachment icon + Voice mic icon + Send icon + Real-time simulated cognitive trace drawer
- Full-screen mobile drawer with staggered entrance transitions
- Staggered page-load entrance choreography (.rise with --i * 70ms)
```
