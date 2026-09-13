# Prompt Specification — ApexOps (`apexops-agy`)

> Master prompt derived from Viktor Oddy's reference (`autonomous-ops`), adapted for ApexOps.

```text
Recreate this page as a single self-contained index.html file — pixel-faithful to the Falcon AI Operations Overview triptych. No frameworks, no external CSS/JS/fonts/images. System fonts only. Light color scheme. All sizing on desktop uses CSS container query units (cqw/cqh) against a size container.

1. Triptych Architecture:
- Desktop: 3-column container-scaled grid (.cards scaled via --cards-scale min(1, calc(60cqh / var(--cards-height))))
- Mobile: Vertical stacked flow under 768px.
- Warm light palette: #f0f0f0 background, #ffffff surfaces, #fffaf6 panels, #ff6900 safety orange, #4d8c35 green.

2. Three Signature Operations Cards:
- Card 1: Instant Visibility (06 AM - 06 PM timeline, 24 staggered bars with active 100% orange bar, $4.7M active flow chip).
- Card 2: Autonomous Workflows (AI assistant header, prompt box with multi-app sync instructions, gradient Automate button, sparkle canvas, cursor pointer).
- Card 3: Faster Decisions (Time saved metric with 128 Hrs ↑ 18%, 2D Canvas with converging Bezier ribbons, confidence tags).
```
