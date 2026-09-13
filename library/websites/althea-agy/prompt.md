# Prompt Specification — Althea (`althea-agy`)

> Master technical and architectural prompt that recreates the mindful wellness website and its signature "Balance Switch" interaction.

```text
Build a standalone modern wellness & psychotherapy landing page that recreates this reference EXACTLY. Do not invent unrelated sections or generic filler. Match the serene atmospheric mint-sage color palette, high-contrast serif typography, and the signature interactive "Balance Switch" dual-state canvas.

STACK
- Vite + React 18 + TypeScript + Tailwind CSS 3
- Lucide React icons: ArrowRight, Sparkles, CheckCircle2, Shield, Heart, Compass, Feather, Activity, Menu, X
- Google Fonts: Cormorant Garamond (Serif Display) + Plus Jakarta Sans (UI Body)
- Path alias @ -> src
- Self-contained static build runnable directly from index.html

BRAND & IDENTITY
- Rebrand: Althea (id: "althea-agy")
- Tagline: "A Path That Shapes Your Future."
- Subhead: "We offer therapy and coaching to help you navigate life's challenges with confidence and care. Together, we'll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace."
- Palette:
  - Atmospheric Sage Gradient: #506a5a -> #3b5245 -> #1f2923
  - Pure White Canvas: #fafbfa / #ffffff (active balanced state)
  - Sage Accents: #608070, #4d6958

CORE SECTIONS & SIGNATURE INTERACTION
1. Navigation:
   - Wordmark: "• althea path"
   - Links: ABOUT, SERVICES, BALANCE, STORIES, SANCTUARY
   - Right: "BOOK A SESSION •" pill button (dynamically transitions style between dark and white states)
2. Hero Stage:
   - Contemplative woman portrait on right blended into atmospheric mint-sage mist
   - Fine orbiting aura wireframe contour rings
   - Towering serif title: "A Path That Shapes Your Future."
   - Context paragraph + "START YOUR JOURNEY •" CTA
3. The Signature "Balance Switch" Mindset Chamber:
   - Interactive center toggle pill labeled "BALANCE"
   - State A (Off / Foggy State):
     - Background: Deep atmospheric sage green (#506a5a) with subtle concentric aura rings
     - Headline: "If only finding balance were as simple as flipping a switch."
     - Subtitle: "You're closer than you think. And every step you take makes it clearer."
   - State B (On / Clarity State):
     - Smooth instant transition to crystalline optical white canvas (#fafbfa)
     - Headline: "There may not be a single switch, but there are clear steps forward."
     - Subtitle: "Every path is different. These are the ways we help people move forward with confidence."
     - Three interactive guided steps: Step 01 Ground the System, Step 02 Name the Pattern, Step 03 Chart Your Rhythm
4. Practice Specializations (Bento):
   - Individual Psychotherapy, Somatic Grounding & Nervous System, Executive & Creative Burnout, Relational & Attachment Depth
5. Interactive Clinical Triage Explorer:
   - Interactive selector for Burnout, Anxiety, Life Transition, Relational Friction with tailored clinical guidance
6. Patient Stories:
   - Ethereal testimonial cards with verified patient outcomes
7. Interactive Discovery Session Modal:
   - Confidential booking scheduler with format selector (Telehealth vs In-Person Sanctuary)
```
