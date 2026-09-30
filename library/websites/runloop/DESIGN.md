# Design System Specification: Runloop

## 1. Product Overview & Architecture
- **Origin Reference:** AI agent production runtime, routing mesh, and observability control plane
- **Brand Identity:** **RUNLOOP** (`runloop™`)
- **Category:** `Developer` (Type: `website`)
- **Positioning:** Deterministic production gateway for multi-agent systems, tool execution, model fallback routing, and sub-millisecond trace observability.
- **Tagline:** *"Every agent. One control plane."*

---

## 2. Chromatic System & Tokens
- **Canvas Technical Off-White:** `#F9F9F6` (Warm paper substrate)
- **Elevated Panel White:** `#FFFFFF` (Surface contrast container)
- **Deep Signal Black:** `#0D0E10` (High-contrast typography and borders)
- **International Orange:** `#FF4B00` (High-energy accent, routing packets, primary CTA)
- **Soft Border Tint:** `#E6E6DF` (1px mathematical grid lines)
- **Gutter Text:** `#82837C` (Technical sidebar numbering `01`, `02`, `03`)
- **Latency Indicator Green:** `#10B981` (Healthy operational beacons)

---

## 3. Typography & Dual-Display System
- **Hero Display:** `Plus Jakarta Sans` / `Pixelify Sans` with interactive live toggle (Clean Sans vs Bitmapped 8-Bit Pixel hybrid matching reference).
- **Body & Editorial:** `Inter`, 400 Regular / 500 Medium.
- **Code & Telemetry Metrics:** `JetBrains Mono`, 500 Medium with tabular lining figures.

---

## 4. Key Interactive Components
1. **Numbered Gutter Rail (`01`, `02`, `03`, `04`):** Fixed or sticky left margin indicating section telemetry.
2. **Typography Mode Switcher:** Instant live toggle between Clean Sans-Serif and Pixel Bitmapped headline styles.
3. **Interactive Agent Routing Mesh (Section 03):** Dynamic SVG/Canvas grid displaying live routing node hops (`ROUTER` $\to$ `RETRIEVE` $\to$ `TOOL CALL` $\to$ `VERIFY` $\to$ `SYNTHESIZE`) with animated data pulses and real-time latency readouts.
4. **Agent Trace Inspector Drawer:** Clickable node inspector revealing live simulated JSON request/response telemetry, memory consumption, and token counts.
5. **Multi-SDK Code Tabs:** Code samples in TypeScript, Python, and cURL with 1-click clipboard copy.
6. **Command Palette (`Cmd + K`):** Quick jump search overlay for developers.
