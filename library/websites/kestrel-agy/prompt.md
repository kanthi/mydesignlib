# Prompt Specification — Kestrel (`kestrel-agy`)

> Master prompt derived from Viktor Oddy's reference (`real-time-alerts`), adapted for Kestrel.

```text
Build a single, self-contained index.html file — no build step, no external requests except one video URL, no frameworks, no dependencies. Everything (CSS, JS, SVG) is inline. The file is a pixel-locked recreation of a designed login page, reconstructed from a 1464×949 reference frame.

1. Media Asset:
- Peregrine falcon high-speed dive looping video:
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_052122_e77a27e6-17f1-4794-889b-3ceaa0e9e8cb.mp4
  Poster: ./preview.jpg

2. Layout:
- Left Panel (57.1% width): Peregrine falcon diving loop, frosted signal badge ("Built for fast-moving teams"), masked headline lines: "Find Signal to Action" / "Instantly".
- Right Panel: Frosted glass login card with Welcome Back header, email/password inputs, pill action button with SVG arrow, OR divider rules, and Google Sign-in action.

3. WAAPI Entrance Choreography:
- Pre-paint guard in <head> with fallback timer.
- 12-stage staggered cubic-bezier entrance animation revealing surface depth, brand promise, and interactive inputs.
- Document-flow mobile reflow (<700px) with iOS zoom-safe input sizing.
```
