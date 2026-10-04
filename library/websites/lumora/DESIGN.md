# Lumora AI — Design System (`lumora`)

## Overview & Emotional Intent
Lumora AI is a creative AI agent platform template. It blends deep midnight indigo cards (`#0c0b22`) with glowing lavender-purple ambient backdrops (`#6861c2`), architectural chamfered conduit borders, and frosted glassmorphism prompt consoles.

Create this feeling through:
- Radiant gradient ambient background with high-contrast floating cards (dark hero card, bright white features pod, dark value card).
- Chamfered circuit lines and diagonal conduit borders framing the hero container.
- Glassmorphism browser windows with macOS window controls, live typewriter prompt simulation, model selector pills, and sparkle generate buttons.
- Multi-device perspective switcher: seamlessly view both desktop architecture and the 3-phone mobile showcase.

## Color Tokens
```css
:root {
  --bg-ambient: radial-gradient(circle at 50% 30%, #5850b8 0%, #352f78 60%, #1f1b4e 100%);
  --bg-dark-card: #0c0b22;
  --bg-dark-surface: #141334;
  --bg-white-card: #ffffff;
  --bg-light-surface: #f8f9fe;

  --text-dark: #0f172a;
  --text-dark-muted: #64748b;
  --text-light: #ffffff;
  --text-light-muted: #a5b4fc;
  --text-dim: #6b7280;

  --primary-purple: #6366f1;
  --primary-indigo: #4f46e5;
  --primary-violet: #7c3aed;
  --accent-cyan: #38bdf8;
  --accent-sparkle: #e0e7ff;

  --border-glass: rgba(255, 255, 255, 0.16);
  --border-glass-subtle: rgba(255, 255, 255, 0.08);
  --border-light-card: rgba(0, 0, 0, 0.06);

  --shadow-card: 0 40px 100px -20px rgba(12, 11, 34, 0.5), 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  --shadow-glass: 0 20px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
```

## Typography Scale
- **Primary Font**: `'Plus Jakarta Sans', system-ui, sans-serif`
- **Monospace Code/Prompt**: `'JetBrains Mono', monospace`

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.35rem;    /* 21.6px */
  --text-2xl: 1.85rem;   /* 29.6px */
  --text-3xl: 2.5rem;    /* 40px */
  --text-hero: clamp(2.5rem, 5.5vw, 4.4rem);
}
```

## Section Architecture
1. **Header & Floating Chamfered Hero Card**:
   - Logo: Lumora AI glowing diamond spark orb + bold wordmark.
   - Chamfered circuit lines framing the inner card.
   - Centered headline with embedded 3D glass app icon: *"Ignite Your Ideas with [Icon] Lumora"*.
   - Interactive prompt console with typewriter input, model picker (`Lumora 3.5 Core`), and generate response state.
2. **Device Showcase Switcher**:
   - Interactive toggle: Desktop Experience vs. 3-Phone Mobile Showcase.
3. **Features Module (White Card)**:
   - Pod 1: Idea Generator with interactive suggestion chips.
   - Pod 2: Voice-to-Text with animated audio waveform visualizer and live transcription feed.
4. **Why Lumora (Dark Pillars Card)**:
   - 3 value cards with frosted glass treatments and glowing icon badges:
     - 01: Understands Your Intent
     - 02: Instantaneous Execution
     - 03: Seamless Adaptive Workflows
5. **Interactive Try Lumora Sandbox & FAQ**:
   - Functional generation test area and accordion questions.

## Bans & Anti-Patterns
- No generic flat boxes; all containers must have subtle ambient inner highlights and glassmorphism.
- No placeholder lorem ipsum; all prompt cards and suggestions use realistic marketing scenarios.
- Must honor `prefers-reduced-motion`.
