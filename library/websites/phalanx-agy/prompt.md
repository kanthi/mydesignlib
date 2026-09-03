# Prompt Specification — Phalanx (`phalanx-agy`)

> Master prompt derived from Viktor Oddy's reference (`cyber-layer`), adapted for Phalanx.

```text
Build a single self-contained index.html that recreates this cybersecurity landing page pixel-faithfully. Fixed fullscreen black stage, left-locked typography, right-side looping video atmosphere, one-shot entrance choreography, and a mobile burger overlay. No frameworks. No scroll. No cards. No purple. No rounded pills.

## Document Shell & Fonts
- Space Grotesk ('SG') for Display and Buttons
- JetBrains Mono ('JB') for Navigation, Subcopy, and Metrics
- Responsive canvas scaling via --s: min(100vw / 1505, 100vh / 700)

## Video Atmosphere & Color-Grade
- Looping video:
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_132544_b6ef0174-ed95-45ad-9a2f-ccb8acfbdce8.mp4
  Poster: ./assets/poster.jpg
- Multi-pass SVG color-grade filters (#grade and #grade2)
- Video sync script ensuring primary and secondary layers stay in lockstep

## Layout & Components
- Header: Inward 4-chevron crosshair logo mark, JetBrains Mono navigation, Signal Crimson CTA button.
- Hero: Two masked headline lines: "Security built into" / "every system layer." Subcopy and action trigger.
- Stats: 300+ Clients, 99% Satisfaction, $5M+ Protected Assets with gradient vertical dividers.
- Fullscreen mobile drawer with red scaleX top rule and accordion navigation.
```
