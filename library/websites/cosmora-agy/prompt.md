# Prompt Specification — Cosmora (`cosmora-agy`)

> Master prompt derived from Viktor Oddy's reference (`space-planet`), adapted for Cosmora.

```text
Build a single, self-contained HTML file: a full-viewport space-themed hero section for a site called "Cosmora". No build step, no frameworks, no external JS. All CSS in one <style> block in <head>, all JS in one <script> block before </body>. It must be pixel-faithful to the spec below and fully mobile responsive.

1. CONCEPT
A cinematic hero. A looping video of a single planet fills the whole viewport as the background. Centred over it: eyebrow "PLANET", a huge serif planet name, a short cyan rule, a paragraph, and a glossy white pill button. Flanking the button, cropped by the left and right screen edges, sit two transparent planet cut-outs with serif labels.

Three planets exist: EARTH, VENUS, MARS. Exactly one is "featured" (its clip is the background, its name is the headline). The other two occupy the left and right slots. Clicking a side planet makes it featured; the two slots then re-fill with the other two. Earth is featured on load. The rotation is fully reversible.

2. ASSETS — exact URLs
Background clips:
- EARTH: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_3ffb4889-c520-432d-8458-038009eb40df.mp4
- VENUS: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_b211cd74-013b-4dd3-bfd0-64491d8696fa.mp4
- MARS:  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202422_51eae59a-2459-4c84-907c-cc5edfe5fea7.mp4

Posters / Stills:
- EARTH: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_508c64b8-a31e-4290-bdfc-1187df70e0a6.png
- VENUS: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_cf55d1d8-7b59-4a64-80da-d72052ae974e.png
- MARS:  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202133_0ba6de7c-285d-43dc-b7ab-8c54c73707cb.png

Transparent cut-outs (2048x2048 PNG with alpha):
- EARTH: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202005_3346cc4d-ec3b-44ab-825c-b18e49f5021a.png
- VENUS: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202012_640b239a-d08a-4200-adb2-741bbe129ac8.png
- MARS:  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260827_202018_3d559490-f613-4ed7-a3bb-3b7e9fc90fb8.png

3. DESIGN SYSTEM & SCALING
- Custom scaling unit --u: max(min(.72px, calc(100vh / 700)), min(calc(100vw / 1353), calc(100vh / 1163)))
- Fonts: Prata (Serif Headline & Labels) + Hanken Grotesk (Body) + Poppins (Wordmark)
- Dynamic rotation state machine revealing preloaded <img> cutouts
- Clean CSS-driven entrance animation sequence with automatic post-transition cleanup
```
