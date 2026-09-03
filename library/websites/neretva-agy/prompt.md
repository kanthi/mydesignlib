# Prompt Specification — Neretva (`neretva-agy`)

> Master prompt derived from Viktor Oddy's reference (`mostar-guide`), adapted for Neretva.

```text
Recreate "Mostar city" cinematic scroll page exactly as a single standalone page (index.html, vanilla — no frameworks, no build step).

1. Remote Assets:
- Display serif font: "Ogg Medium"
- Transparent-edge multi-layer scene photography (Sky, Back Four glow, Bazaar mid-back, Splitframe Left/Right, Bridge foreground, River close-up)
- Sight-card pin icons

2. DOM Tree & Structure:
- 3700px sticky cinematic scroll rig
- Header with Ogg wordmark, navigation links, language selector
- Hero Title: "MOSTAR" in 14rem Ogg Medium
- Splitframe opening animation parting the bridge stone banks
- Two story panels with historical facts and notes
- Infinite looping sights slider with 3 sets of cards, cubic-bezier transition, and keyboard navigation

3. JavaScript Lerp & Parallax Math:
- Continuous scroll distance interpolation with lerp
- Smoothstep and segmentInOut transitions for multi-stage visual choreography
- Mouse parallax coordinates driving subtle perspective tilt
```
