# Prompt Specification — Veloce (`veloce-agy`)

> Master prompt derived from Viktor Oddy's reference (`animated-cards`), adapted for Veloce.

```text
Create a high-performance, interactive 3D horizontal cylinder carousel showing premium animated bank cards.

Core Features & Interactions:
- Use React (useState, useEffect, useRef), Tailwind CSS, and standard requestAnimationFrame for a smooth 60fps render loop. No external animation libraries needed.
- Continuous circular scroll/carousel, updating a continuous progress variable.
- Interactive 3D parallax tilt to the cards that smoothly responds to mouse cursor movement (mousemove), using inertia damping.
- Real volumetric 3D thickness (achieved by stacking multiple parallel div layers close together).
- Carousel math pushes cards to the sides (using smoothstep interpolation) and hides them gracefully using perspective formulas as they move off-screen.
- Each card has front and back faces: front has an autoplaying video background, metallic contact chip (SVG), and embedded logo; back face blurs the video background, has a dark magnetic stripe, and features cardholder name, number, and CVV in JetBrains Mono.
- Pure black background (#000000), CSS perspective 1350px, and transformStyle: preserve-3d.
```
