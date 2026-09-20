# Sonant — Design System & Spec

> Enterprise Generative Audio & Neural Voice Infrastructure.

---

## 1. Brand Identity & Product Concept

- **Brand Name**: Sonant
- **Descriptor**: Generative Audio & Neural Voice Platform
- **Value Proposition**: "Your Voice. Any Language. Infinite Scale."
- **Visual Aesthetic**: Pristine studio light theme (`#f8fafc`), fluid multi-chromatic 3D audio ribbon wave (fuchsia, violet, cyan, coral), interactive prompt bar with real-time waveform synthesis, and technical monospace telemetry.

---

## 2. Color Palette & Gradients

- **Studio Canvas**: `#f8fafc` (pure cloud white)
- **Border Subtle**: `rgba(0, 0, 0, 0.08)`
- **Ribbon Wave Gradients**:
  - Voice Cloning: `linear-gradient(135deg, #f43f5e 0%, #d946ef 50%, #8b5cf6 100%)`
  - Voice Agents: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)`
  - Audio Dubbing: `linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%)`
- **Text Primary**: `#09090b` (deep carbon)
- **Text Muted**: `#64748b`

---

## 3. Typography

- **Headings & Display**: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif (heavy contrast, optical kerning)
- **Body**: 'Plus Jakarta Sans', sans-serif
- **Telemetry & Labels**: 'JetBrains Mono', monospace

---

## 4. Key Interactive Components

1. **Interactive Real-Time Waveform Canvas**:
   - HTML5 Canvas rendering fluid ribbon waves that react to cursor movement and keystrokes in the prompt bar.
2. **Interactive Audio Prompt Bar**:
   - Realistic voice synthesis prompt input with live audio visualizer equalizer bars.
   - Quick-action presets ("Clone voice from 1-min sample", "Translate keynote to Japanese", "Generate hyper-real sound effect").
3. **Modality Rail Switcher**:
   - Interactive sidebar letting users select between:
     - Voice Cloning
     - Voice Agents
     - Speech to Text
     - Neural Dubbing
     - Sound Effects
   - Switching tabs smoothly re-tunes the ribbon wave colors and demo audio specs.
4. **Interactive Audio Preview Player**:
   - Listen to ultra-low latency voice samples across 32 languages (English, German, Japanese, Spanish, French) with real-time audio playback simulation using Web Audio API synthesis!
5. **Developer API Code Terminal**:
   - Python & Node.js SDK snippets showing 80ms TTFB (time to first byte) audio stream generation.
