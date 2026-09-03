# Prompt Specification — Novalis (`novalis-agy`)

> Master prompt derived from Viktor Oddy's reference (`planetary-pulse`), adapted for Novalis.

```text
Build a single-screen, non-scrolling hero landing page called "Novalis — Signals from the Deep Green". It is a full-bleed looping background video with a real-time refractive "liquid glass" card floating over it, plus a slide-in fullscreen menu. Vanilla HTML/CSS/JS only — no frameworks, no build step, no Three.js, no WebGL, no canvas 3D. The glass effect is done entirely with an SVG filter plus a 2D canvas that re-draws the video every frame.

1. Video Asset:
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260816_125506_3a597378-ec85-4ebd-bd22-03b45508ac62.mp4
Poster: ./assets/poster.jpg

2. Liquid Glass Refraction Shader:
- SVG filter with feTurbulence fractal noise, boosted alpha blur edge mask, and 3-stage chromatic dispersion displacement (scales 65, 56, 47 for R, G, B channels).
- 2D Canvas redraw loop positioning the duplicate video at exact inverted viewport offset.

3. Components:
- Vertical rules with plus markers (+).
- Top navbar with hamburger button and "Book a call" action.
- Left column headline, subcopy, and chamfered "Start listening" button with dual cut corners.
- Right column liquid glass card with "Latest findings", canopy pulse analysis, and vector biosensor waveform.
- Fullscreen slide-in navigation drawer with staggered link reveals.
```
