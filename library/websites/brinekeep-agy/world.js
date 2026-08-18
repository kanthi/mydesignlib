/**
 * Brinekeep AGY — Charminar 3D Architectural Study.
 * Procedural Three.js reconstruction of the iconic 1591 CE Charminar monument:
 * four soaring minarets, grand pointed cardinal arches, multi-tiered arcaded galleries,
 * dynamic clipping plane build, solar time-of-day engine, and monsoon weather systems.
 */
import * as THREE from "./three.module.js";

const TAU = Math.PI * 2;
const BUILD_S = 5.0;
const MONUMENT_H = 13.5;

const STAGES = [
  { local: "BUNYAAD", en: "GRANITE PLINTH & BASIN", y: 0.8 },
  { local: "CHAUDISHA", en: "FOUR CARDINAL ARCHES", y: 4.8 },
  { local: "JHAROKHA", en: "DOUBLE BALCONY LOGGIAS", y: 7.8 },
  { local: "MEHRAAB", en: "FOUR FLUTED MINARETS", y: 11.2 },
  { local: "GUMBAD", en: "DOMES & GOLD FINIALS", y: MONUMENT_H },
];

const TIMES = {
  dawn: {
    sky: 0xa8b6c4,
    fog: 0x93a2b0,
    fogFar: 100,
    sun: 0xffdfb0,
    sunI: 1.25,
    hemi: 0.65,
    sunPos: [24, 14, 12],
  },
  noon: {
    sky: 0xbcd0de,
    fog: 0xa8bcc8,
    fogFar: 130,
    sun: 0xfffaee,
    sunI: 1.65,
    hemi: 0.8,
    sunPos: [8, 34, 8],
  },
  sunset: {
    sky: 0xc86a38,
    fog: 0x8a4524,
    fogFar: 80,
    sun: 0xf55218,
    sunI: 1.5,
    hemi: 0.45,
    sunPos: [-24, 8, 16],
  },
  night: {
    sky: 0x080e14,
    fog: 0x0c151e,
    fogFar: 55,
    sun: 0x4a5d78,
    sunI: 0.18,
    hemi: 0.15,
    sunPos: [-10, 22, -14],
  },
};

export function mountKeepAGY(canvas, fx, ui) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.localClippingEnabled = true;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 240);
  const camHome = new THREE.Vector3(16.5, 8.5, 19.5);
  camera.position.copy(camHome);
  camera.lookAt(0, 5.5, 0);

  const CLIP = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
  const hemi = new THREE.HemisphereLight(0xffeed8, 0x3d3022, 0.7);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xffecd0, 1.4);
  sun.position.set(18, 26, 12);
  sun.castShadow = true;
  scene.add(sun);

  const bolt = new THREE.DirectionalLight(0xeef4ff, 0);
  scene.add(bolt);

  // Four Minaret Floodlights & Pinnacle Amber Light
  const archLight = new THREE.PointLight(0xff9933, 0, 16, 1.8);
  archLight.position.set(0, 3.5, 0);
  scene.add(archLight);

  const urlParams = new URLSearchParams(window.location.search);
  const initialT = urlParams.has("t") ? parseFloat(urlParams.get("t")) : reduced ? 1 : 0;

  const state = {
    playing: !reduced && !urlParams.has("t"),
    t: initialT,
    time: urlParams.get("time") || "sunset",
    weather: urlParams.get("weather") || "clear",
    orbit: 0,
    pitch: 0,
    zoom: 1,
    drag: false,
    px: 0,
    py: 0,
    lx: 0,
    ly: 0,
    pulses: [],
    pulseAge: 0,
    lastStage: -1,
    hidden: false,
  };

  const loader = new THREE.TextureLoader();
  const load = (src) =>
    new Promise((res) => {
      loader.load(
        src,
        (tex) => {
          tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = 4;
          res(tex);
        },
        undefined,
        () => res(null)
      );
    });

  const mats = {};
  const monument = new THREE.Group();
  const scaffold = new THREE.Group();
  scene.add(monument, scaffold);

  let cap, ground, sea, stars, rainField, emberField, hazeField;

  function mat(key, opts) {
    const m = new THREE.MeshStandardMaterial({
      roughness: 0.84,
      metalness: 0.04,
      ...opts,
    });
    if (opts.clip !== false) {
      m.clippingPlanes = [CLIP];
      m.clipShadows = true;
    }
    mats[key] = m;
    return m;
  }

  function rewriteBoxUV(geo, sx, sy, sz) {
    const uv = geo.attributes.uv;
    const pos = geo.attributes.position;
    if (!uv || !pos) return;
    const arr = uv.array;
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] *= Math.max(sx, sz);
      arr[i + 1] *= sy;
    }
    uv.needsUpdate = true;
  }

  function box(group, cx, cy, cz, sx, sy, sz, material, ry = 0) {
    const g = new THREE.BoxGeometry(sx, sy, sz);
    rewriteBoxUV(g, sx, sy, sz);
    const mesh = new THREE.Mesh(g, material);
    mesh.position.set(cx, cy, cz);
    mesh.rotation.y = ry;
    group.add(mesh);
    return mesh;
  }

  function cylinder(group, y0, y1, r0, r1, n, material) {
    const g = new THREE.CylinderGeometry(r1, r0, y1 - y0, n, 1, false);
    const mesh = new THREE.Mesh(g, material);
    mesh.position.y = (y0 + y1) / 2;
    group.add(mesh);
    return mesh;
  }

  // Build the complete 3D Charminar Architectural Structure
  function buildArchitecture() {
    monument.clear();
    scaffold.clear();

    const granite = mats.granite;
    const sandstone = mats.sandstone;
    const stucco = mats.stucco;
    const brass = mats.brass;
    const teak = mats.teak;

    // --- 1. Base Plinth & Water Basin ---
    box(monument, 0, 0.25, 0, 11.2, 0.5, 11.2, granite);
    box(monument, 0, 0.65, 0, 9.8, 0.3, 9.8, granite);

    // Central ornamental octagonal fountain basin
    cylinder(monument, 0.8, 1.1, 1.4, 1.4, 8, granite);

    // --- 2. Main Square Central Body & 4 Cardinal Grand Arches ---
    const cornerOffsets = [
      [-3.3, -3.3],
      [3.3, -3.3],
      [3.3, 3.3],
      [-3.3, 3.3],
    ];

    // Four Massive Corner Pier Towers (supporting the arches)
    cornerOffsets.forEach(([cx, cz]) => {
      box(monument, cx, 2.8, cz, 1.8, 4.0, 1.8, sandstone);
    });

    // Four Grand Pointed Cardinal Arch Openings (North, South, East, West)
    // Connecting lintels above the grand arches
    box(monument, 0, 4.8, -3.3, 4.8, 0.6, 1.8, sandstone); // North
    box(monument, 0, 4.8, 3.3, 4.8, 0.6, 1.8, sandstone);  // South
    box(monument, -3.3, 4.8, 0, 1.8, 0.6, 4.8, sandstone); // West
    box(monument, 3.3, 4.8, 0, 1.8, 0.6, 4.8, sandstone);  // East

    // Spandrels & Relief Panels on each Arch Face
    const archFaces = [
      { pos: [0, 3.6, -3.3], rot: 0 },
      { pos: [0, 3.6, 3.3], rot: Math.PI },
      { pos: [-3.3, 3.6, 0], rot: Math.PI / 2 },
      { pos: [3.3, 3.6, 0], rot: -Math.PI / 2 },
    ];
    archFaces.forEach(({ pos, rot }) => {
      // Decorative stucco medallions & spandrel accents
      box(monument, pos[0] - Math.cos(rot) * 1.8, pos[1] + 0.6, pos[2] - Math.sin(rot) * 1.8, 0.35, 0.35, 0.08, brass, rot);
      box(monument, pos[0] + Math.cos(rot) * 1.8, pos[1] + 0.6, pos[2] + Math.sin(rot) * 1.8, 0.35, 0.35, 0.08, brass, rot);
    });

    // --- 3. First Projecting Gallery (Chhajja Cornice) ---
    box(monument, 0, 5.15, 0, 8.8, 0.18, 8.8, sandstone);

    // --- 4. Double Arcaded Upper Galleries (Jharokha Floor) ---
    // Gallery Wall with Arcaded Windows
    box(monument, 0, 6.4, 0, 7.8, 2.3, 7.8, stucco);

    // 5 Decorative Arched Loggia Bays on each of the 4 facades
    for (let f = 0; f < 4; f++) {
      const rot = (f / 4) * TAU;
      for (let bay = -2; bay <= 2; bay++) {
        const offset = bay * 1.3;
        const x = Math.cos(rot) * 3.95 - Math.sin(rot) * offset;
        const z = Math.sin(rot) * 3.95 + Math.cos(rot) * offset;
        // Jharokha arched balcony frame
        box(monument, x, 6.4, z, 0.15, 1.4, 0.15, sandstone, rot);
        // Small stone lattice balcony shelf
        box(monument, x * 1.04, 5.6, z * 1.04, 0.8, 0.25, 0.25, sandstone, rot);
      }
    }

    // --- 5. Main Roof Terrace Cornice & Parapet with Merlons ---
    box(monument, 0, 7.6, 0, 8.4, 0.22, 8.4, sandstone);

    // Parapet Merlons / Kanguras around the roof
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * TAU;
      const x = Math.cos(a) * 4.15;
      const z = Math.sin(a) * 4.15;
      box(monument, x, 7.85, z, 0.22, 0.35, 0.12, stucco, -a);
    }

    // Central Dome on the Roof
    const centralDome = new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 12, 0, TAU, 0, Math.PI / 2.2), stucco);
    centralDome.position.y = 7.7;
    monument.add(centralDome);

    // --- 6. Four Soaring Fluted Minarets (The Signature of Charminar) ---
    const minaretRadius = 0.65;
    const minaretOffsets = [
      [-3.8, -3.8],
      [3.8, -3.8],
      [3.8, 3.8],
      [-3.8, 3.8],
    ];

    minaretOffsets.forEach(([mx, mz]) => {
      // Tier 1 Minaret Base (Ground to Lower Gallery)
      cylinder(monument, 0.8, 5.2, minaretRadius * 1.15, minaretRadius * 1.05, 24, sandstone);
      
      // Balcony 1 (Projecting corbelled stone gallery with railings)
      cylinder(monument, 5.2, 5.45, minaretRadius * 1.6, minaretRadius * 1.6, 16, sandstone);
      cylinder(monument, 5.45, 5.75, minaretRadius * 1.6, minaretRadius * 1.6, 16, mats.voidGlass);

      // Tier 2 Minaret Shaft (Fluted shaft with carved bands)
      cylinder(monument, 5.75, 7.6, minaretRadius * 1.0, minaretRadius * 0.95, 24, stucco);

      // Balcony 2
      cylinder(monument, 7.6, 7.85, minaretRadius * 1.5, minaretRadius * 1.5, 16, sandstone);
      cylinder(monument, 7.85, 8.15, minaretRadius * 1.5, minaretRadius * 1.5, 16, mats.voidGlass);

      // Tier 3 Minaret Upper Shaft
      cylinder(monument, 8.15, 10.2, minaretRadius * 0.9, minaretRadius * 0.82, 24, stucco);

      // Balcony 3 (Upper crow's nest gallery)
      cylinder(monument, 10.2, 10.45, minaretRadius * 1.45, minaretRadius * 1.45, 16, sandstone);
      cylinder(monument, 10.45, 10.75, minaretRadius * 1.45, minaretRadius * 1.45, 16, mats.voidGlass);

      // Tier 4 Minaret Top Drum
      cylinder(monument, 10.75, 11.6, minaretRadius * 0.78, minaretRadius * 0.72, 16, stucco);

      // Bulbous Onion Dome (Gumbad) on each Minaret
      const gumbad = new THREE.Mesh(new THREE.SphereGeometry(minaretRadius * 1.15, 16, 12, 0, TAU, 0, Math.PI / 1.8), stucco);
      gumbad.position.set(mx, 12.0, mz);
      monument.add(gumbad);

      // Petal Calyx & Brass Finial (Kalasa Needle)
      cylinder(monument, 12.35, MONUMENT_H, minaretRadius * 0.25, 0.02, 12, brass);
    });

    // Position each minaret at its corner
    minaretOffsets.forEach(([mx, mz], idx) => {
      // Small ornate brass spire cap
      const spire = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), brass);
      spire.position.set(mx, MONUMENT_H, mz);
      monument.add(spire);
    });

    // Dynamic Construction Slice Cap
    cap = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.12, 10.5), mats.sliceCap);
    scene.add(cap);

    buildScaffold();
  }

  // 3D Teak & Bamboo Scaffolding Lattice
  function buildScaffold() {
    const teak = mats.teak;
    const scaffoldCoords = [
      [-4.8, -4.8], [4.8, -4.8], [4.8, 4.8], [-4.8, 4.8],
      [0, -4.8], [4.8, 0], [0, 4.8], [-4.8, 0],
    ];

    scaffoldCoords.forEach(([sx, sz]) => {
      box(scaffold, sx, 6.2, sz, 0.08, 12.4, 0.08, teak);
    });

    // Horizontal bamboo tying beams
    for (let k = 1; k < 8; k++) {
      const y = k * 1.65;
      for (let i = 0; i < scaffoldCoords.length; i++) {
        const next = (i + 1) % scaffoldCoords.length;
        const [x1, z1] = scaffoldCoords[i];
        const [x2, z2] = scaffoldCoords[next];
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        const bar = new THREE.Mesh(new THREE.BoxGeometry(len, 0.07, 0.07), teak);
        rewriteBoxUV(bar.geometry, len, 0.07, 0.07);
        bar.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
        bar.rotation.y = -Math.atan2(dz, dx);
        scaffold.add(bar);
      }
    }
  }

  function makeGroundAndPlaza() {
    ground = new THREE.Mesh(new THREE.CircleGeometry(52, 48), mats.ground);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    sea = new THREE.Mesh(new THREE.CircleGeometry(90, 48), mats.sea);
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = -0.18;
    scene.add(sea);
  }

  function makeStars() {
    const n = 1200;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU;
      const e = 0.15 + Math.random() * 0.75;
      pos[i * 3] = Math.cos(a) * Math.cos(e) * 85;
      pos[i * 3 + 1] = Math.sin(e) * 60 + 8;
      pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 85;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    stars = new THREE.Points(
      g,
      new THREE.PointsMaterial({ color: 0xffeedd, size: 0.12, sizeAttenuation: true, transparent: true, opacity: 0 })
    );
    scene.add(stars);
  }

  function makeWeather() {
    rainField = particleField(1600, 0x8ab0c8, 0.055);
    emberField = particleField(750, 0xffaa28, 0.095);
    hazeField = particleField(900, 0xd4ad82, 0.13);
    scene.add(rainField.pts, emberField.pts, hazeField.pts);
  }

  function particleField(n, color, size) {
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) scatter(pos, i);
    const g = new THREE.BufferGeometry();
    const attr = new THREE.Float32BufferAttribute(pos, 3);
    attr.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute("position", attr);
    const pts = new THREE.Points(
      g,
      new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.82,
        depthWrite: false,
      })
    );
    pts.frustumCulled = false;
    return { pts, pos: attr.array, n, geo: g };
  }

  function scatter(pos, i) {
    pos[i * 3] = (Math.random() - 0.5) * 28;
    pos[i * 3 + 1] = Math.random() * 34;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 46;
  }

  function heightAt(u) {
    const ease = u * u * (3 - 2 * u);
    let from = 0;
    let to = MONUMENT_H;
    let a = 0;
    let b = 1;
    for (let i = 0; i < STAGES.length - 1; i++) {
      const t0 = i / (STAGES.length - 1);
      const t1 = (i + 1) / (STAGES.length - 1);
      if (ease >= t0 && ease <= t1) {
        from = STAGES[i].y;
        to = STAGES[i + 1].y;
        a = t0;
        b = t1;
        break;
      }
    }
    const k = (ease - a) / Math.max(1e-6, b - a);
    const s = k * k * (3 - 2 * k);
    return from + (to - from) * s;
  }

  function stageIndex(y) {
    let i = 0;
    for (let s = 0; s < STAGES.length; s++) {
      if (y + 0.06 >= STAGES[s].y) i = s;
    }
    return i;
  }

  function applyClip() {
    const y = heightAt(state.t);
    CLIP.constant = y;
    if (cap) {
      cap.position.y = y;
      const s = y < 5.2 ? 1.0 : y < 7.8 ? 0.85 : 0.65;
      cap.scale.set(s, 1, s);
      cap.visible = y > 0.3 && y < MONUMENT_H - 0.1;
    }
    const scaf = Math.min(1, (y + 1.8) / 11.5);
    scaffold.scale.set(1, scaf, 1);
    scaffold.visible = y < MONUMENT_H - 0.3;

    const i = stageIndex(y);
    if (i !== state.lastStage) {
      state.lastStage = i;
      if (ui.stageLocal) ui.stageLocal.textContent = STAGES[i].local;
      if (ui.stageEn) ui.stageEn.textContent = STAGES[i].en;
    }
    if (ui.percent) ui.percent.textContent = String(Math.round(state.t * 100));
  }

  function applyTime() {
    const T = TIMES[state.time];
    scene.background = new THREE.Color(T.sky);
    scene.fog = new THREE.Fog(T.fog, 22, T.fogFar);
    sun.color.setHex(T.sun);
    sun.intensity = T.sunI;
    sun.position.set(...T.sunPos);
    hemi.intensity = T.hemi;

    archLight.intensity = state.time === "night" ? 4.5 : state.time === "sunset" ? 2.4 : 0;
    if (stars) stars.material.opacity = state.time === "night" ? 0.94 : 0;
    if (ui.syncTime) ui.syncTime(state.time);
  }

  function stepWeather(dt) {
    const isStorm = state.weather === "storm";
    const isEmber = state.weather === "embers" || state.time === "night";
    const isHaze = state.weather === "haze";

    rainField.geo.setDrawRange(0, isStorm ? rainField.n : 0);
    emberField.geo.setDrawRange(0, isEmber ? emberField.n : 0);
    hazeField.geo.setDrawRange(0, isHaze ? hazeField.n : 0);

    if (isStorm) stepField(rainField, dt, 15, 3.5);
    if (isEmber) stepEmberField(emberField, dt);
    if (isHaze) stepHazeField(hazeField, dt);

    if (isStorm && Math.random() < dt * 0.1) strike();
    stepBolt(dt);
  }

  function stepField(field, dt, fall, slant) {
    const p = field.pos;
    for (let i = 0; i < field.n; i++) {
      const i3 = i * 3;
      p[i3 + 1] -= fall * dt;
      p[i3] += slant * dt * 0.4;
      if (p[i3 + 1] < 0) {
        p[i3] = (Math.random() - 0.5) * 28;
        p[i3 + 1] = 24 + Math.random() * 8;
        p[i3 + 2] = (Math.random() - 0.5) * 46;
      }
    }
    field.pts.geometry.attributes.position.needsUpdate = true;
  }

  function stepEmberField(field, dt) {
    const p = field.pos;
    for (let i = 0; i < field.n; i++) {
      const i3 = i * 3;
      p[i3 + 1] += 2.4 * dt;
      p[i3] += Math.sin(Date.now() * 0.002 + i) * 0.8 * dt;
      if (p[i3 + 1] > 28) {
        p[i3] = (Math.random() - 0.5) * 8;
        p[i3 + 1] = 10.5 + Math.random() * 3;
        p[i3 + 2] = (Math.random() - 0.5) * 8;
      }
    }
    field.pts.geometry.attributes.position.needsUpdate = true;
  }

  function stepHazeField(field, dt) {
    const p = field.pos;
    for (let i = 0; i < field.n; i++) {
      const i3 = i * 3;
      p[i3] += 1.9 * dt;
      p[i3 + 1] += Math.cos(Date.now() * 0.001 + i) * 0.4 * dt;
      if (p[i3] > 20) {
        p[i3] = -20;
        p[i3 + 1] = Math.random() * 18;
        p[i3 + 2] = (Math.random() - 0.5) * 40;
      }
    }
    field.pts.geometry.attributes.position.needsUpdate = true;
  }

  function strike() {
    const near = Math.random();
    const s = 0.5 + near * 0.5;
    state.pulses = [{ t: 0, a: s }];
    let tt = 0;
    for (let i = 0; i < 2; i++) {
      tt += 0.06 + Math.random() * 0.12;
      state.pulses.push({ t: tt, a: s * (0.4 + Math.random() * 0.6) });
    }
    state.pulseAge = 0;
    const a = Math.random() * TAU;
    bolt.position.set(Math.cos(a) * 24, 22, Math.sin(a) * 24);
  }

  function stepBolt(dt) {
    if (!state.pulses.length) {
      bolt.intensity = 0;
      return;
    }
    state.pulseAge += dt;
    let b = 0;
    for (const p of state.pulses) {
      const d = state.pulseAge - p.t;
      if (d >= 0 && d < 0.09) {
        const u = d / 0.09;
        b = Math.max(b, p.a * (1 - u * u));
      }
    }
    bolt.intensity = b * 5.0;
    if (state.pulseAge > 0.45) state.pulses = [];
  }

  // Pointer Trail 2D Canvas Overlay
  const trailPts = [];
  const fxCtx = fx ? fx.getContext("2d") : null;

  function pushTrail(x, y) {
    if (!fxCtx) return;
    trailPts.push({ x, y, age: 0, max: 0.65, size: 4 + Math.random() * 4 });
  }

  function drawTrail(dt) {
    if (!fxCtx || !fx) return;
    fxCtx.clearRect(0, 0, fx.width, fx.height);
    for (let i = trailPts.length - 1; i >= 0; i--) {
      const pt = trailPts[i];
      pt.age += dt;
      if (pt.age >= pt.max) {
        trailPts.splice(i, 1);
        continue;
      }
      const u = pt.age / pt.max;
      const alpha = (1 - u) * 0.75;
      fxCtx.fillStyle = `rgba(224, 122, 42, ${alpha})`;
      fxCtx.beginPath();
      fxCtx.arc(pt.x, pt.y, pt.size * (1 - u * 0.5), 0, TAU);
      fxCtx.fill();
    }
  }

  // Initialize Materials and Assets
  async function init() {
    const [texGranite, texPine, texCopper] = await Promise.all([
      load("tex-granite.jpg"),
      load("tex-pine.jpg"),
      load("tex-copper.jpg"),
    ]);

    // Charminar Granite / Dressed Deccan Stone Plinth
    mat("granite", {
      color: 0x8a8476,
      map: texGranite,
      roughness: 0.88,
      metalness: 0.05,
    });

    // Yellow Sandstone & Deccan Ashlar Masonry
    mat("sandstone", {
      color: 0xded2b8,
      map: texGranite,
      roughness: 0.82,
      metalness: 0.04,
    });

    // Polished Stucco / Lime Plaster with Saffron Undertone
    mat("stucco", {
      color: 0xf4ecd8,
      roughness: 0.72,
      metalness: 0.02,
    });

    // Ornate Cast Brass & Gold Finials
    mat("brass", {
      color: 0xd49b38,
      map: texCopper,
      roughness: 0.32,
      metalness: 0.85,
    });

    // Teak & Bamboo Scaffolding
    mat("teak", {
      color: 0x7c5a36,
      map: texPine,
      roughness: 0.92,
      metalness: 0.02,
      clip: false,
    });

    mat("voidGlass", {
      color: 0x181e26,
      roughness: 0.15,
      metalness: 0.85,
    });

    mat("sliceCap", {
      color: 0xd96b27,
      roughness: 0.35,
      metalness: 0.4,
      clip: false,
    });

    mat("ground", {
      color: 0x948872,
      roughness: 0.95,
      clip: false,
    });

    mat("sea", {
      color: 0x2d485a,
      roughness: 0.28,
      metalness: 0.3,
      clip: false,
    });

    buildArchitecture();
    makeGroundAndPlaza();
    makeStars();
    makeWeather();
    applyTime();
    applyClip();

    resize();
    animate(0);
  }

  function resize() {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    if (fx) {
      fx.width = w;
      fx.height = h;
    }
  }
  window.addEventListener("resize", resize);

  // Mouse Orbit and Drag Parallax
  canvas.addEventListener("pointerdown", (e) => {
    state.drag = true;
    state.lx = e.clientX;
    state.ly = e.clientY;
  });

  window.addEventListener("pointermove", (e) => {
    pushTrail(e.clientX, e.clientY);
    if (state.drag) {
      const dx = e.clientX - state.lx;
      const dy = e.clientY - state.ly;
      state.orbit -= dx * 0.006;
      state.pitch = Math.max(-0.6, Math.min(0.8, state.pitch - dy * 0.005));
      state.lx = e.clientX;
      state.ly = e.clientY;
    } else {
      const w2 = window.innerWidth / 2;
      const h2 = window.innerHeight / 2;
      state.px = (e.clientX - w2) / w2;
      state.py = (e.clientY - h2) / h2;
    }
  });

  window.addEventListener("pointerup", () => {
    state.drag = false;
  });

  // Main Render Animation Loop
  let lastT = 0;
  function animate(now) {
    requestAnimationFrame(animate);
    const sec = now * 0.001;
    const dt = Math.min(0.1, sec - (lastT || sec));
    lastT = sec;

    if (state.playing) {
      state.t += dt / BUILD_S;
      if (state.t > 1) {
        state.t = 1;
        state.playing = false;
        if (ui.playBtn) ui.playBtn.textContent = "REPLAY";
      }
      applyClip();
    }

    // Camera Orbit Matrix around Charminar
    const radius = 25 * state.zoom;
    const orb = state.orbit + state.px * 0.25;
    const pit = state.pitch + state.py * 0.15;
    camera.position.x = Math.sin(orb) * Math.cos(pit) * radius;
    camera.position.z = Math.cos(orb) * Math.cos(pit) * radius;
    camera.position.y = Math.max(2.2, 6.5 + Math.sin(pit) * radius * 0.7);
    camera.lookAt(0, 5.5, 0);

    stepWeather(dt);
    drawTrail(dt);

    renderer.render(scene, camera);
  }

  init();

  return {
    rebuild: () => {
      state.t = 0;
      state.playing = true;
      if (ui.playBtn) ui.playBtn.textContent = "PAUSE";
      applyClip();
    },
    togglePlay: () => {
      state.playing = !state.playing;
      if (ui.playBtn) ui.playBtn.textContent = state.playing ? "PAUSE" : "BUILD";
    },
    setTime: (timeKey) => {
      if (TIMES[timeKey]) {
        state.time = timeKey;
        applyTime();
      }
    },
    setWeather: (weatherKey) => {
      state.weather = weatherKey;
    },
  };
}
