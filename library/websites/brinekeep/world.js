/**
 * Brinekeep — original construction study.
 * Techniques (not assets) from Meng To's open skills:
 * threejs-towers, threejs-weather, pointer-trail-emitter, falling-leaves.
 */
import * as THREE from "three";

const TAU = Math.PI * 2;
const BUILD_S = 4.5;
const KEEP_H = 9.2;

const STAGES = [
  { local: "REIDY", en: "READY", y: 0.12 },
  { local: "STEIN", en: "GRANITE", y: 2.45 },
  { local: "TIMMER", en: "TIMBER", y: 5.35 },
  { local: "KOPARR", en: "COPPER", y: 6.9 },
  { local: "LJÓS", en: "LANTERN", y: KEEP_H },
];

const TIMES = {
  morning: { sky: 0xb7c4c8, fog: 0x9aadae, fogFar: 86, sun: 0xffe4c4, sunI: 1.15, hemi: 0.55, sunPos: [18, 10, 8] },
  noon: { sky: 0xc5d0d2, fog: 0xa8b6b6, fogFar: 110, sun: 0xfff4e0, sunI: 1.55, hemi: 0.7, sunPos: [8, 26, 4] },
  sunset: { sky: 0xc98a62, fog: 0x8a6a58, fogFar: 70, sun: 0xff7a3a, sunI: 1.35, hemi: 0.35, sunPos: [-16, 6, 10] },
  night: { sky: 0x0d1418, fog: 0x101820, fogFar: 48, sun: 0x6a7a9a, sunI: 0.12, hemi: 0.12, sunPos: [-6, 18, -10] },
};

export function mountKeep(canvas, fx, ui) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.localClippingEnabled = true;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 180);
  const camHome = new THREE.Vector3(12.4, 5.6, 15.2);
  camera.position.copy(camHome);
  camera.lookAt(0, 4.1, 0);

  const CLIP = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
  const hemi = new THREE.HemisphereLight(0xdde8ea, 0x3a3428, 0.6);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d0, 1.2);
  sun.position.set(12, 18, 8);
  scene.add(sun);
  const bolt = new THREE.DirectionalLight(0xe8eeff, 0);
  scene.add(bolt);
  const lanternLight = new THREE.PointLight(0xffc56a, 0, 14, 1.6);
  lanternLight.position.set(0, 7.1, 0);
  scene.add(lanternLight);

  const state = {
    playing: !reduced,
    t: reduced ? 1 : 0,
    time: "morning",
    weather: "clear",
    orbit: 0,
    pitch: 0,
    zoom: 1,
    drag: false,
    px: 0,
    py: 0,
    lx: 0,
    ly: 0,
    snowPack: 0,
    blizT: 0,
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
  const keep = new THREE.Group();
  const scaffold = new THREE.Group();
  scene.add(keep, scaffold);

  let cap, ground, sea, stars, spray, snow;
  const scratch = {
    m: new THREE.Matrix4(),
    q: new THREE.Quaternion(),
    e: new THREE.Euler(),
    v: new THREE.Vector3(),
  };

  function mat(key, opts) {
    const m = new THREE.MeshStandardMaterial({
      roughness: 0.86,
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

  function box(group, cx, cy, cz, sx, sy, sz, material, ry = 0) {
    const g = new THREE.BoxGeometry(sx, sy, sz);
    rewriteBoxUV(g, sx, sy, sz);
    const mesh = new THREE.Mesh(g, material);
    mesh.position.set(cx, cy, cz);
    mesh.rotation.y = ry;
    group.add(mesh);
    return mesh;
  }

  function prismN(group, y0, y1, r0, r1, n, material) {
    const g = new THREE.CylinderGeometry(r1, r0, y1 - y0, n, 1, false);
    const mesh = new THREE.Mesh(g, material);
    mesh.position.y = (y0 + y1) / 2;
    group.add(mesh);
    return mesh;
  }

  function ring(group, y, rIn, rOut, material, segs = 24) {
    const g = new THREE.RingGeometry(rIn, rOut, segs);
    g.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(g, material);
    mesh.position.y = y;
    group.add(mesh);
    return mesh;
  }

  function buildArchitecture() {
    keep.clear();
    scaffold.clear();

    prismN(keep, 0, 2.25, 3.35, 2.85, 8, mats.granite);
    ring(keep, 2.26, 2.35, 2.95, mats.granite, 8);
    prismN(keep, 2.26, 5.7, 2.38, 2.28, 24, mats.granite);

    for (let i = 0; i < 3; i++) {
      const y = 2.7 + i * 0.95;
      const tube = new THREE.Mesh(
        new THREE.TorusGeometry(2.36, 0.045, 8, 32),
        mats.copper
      );
      tube.rotation.x = Math.PI / 2;
      tube.position.y = y;
      keep.add(tube);
    }

    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU + 0.4;
      box(keep, Math.cos(a) * 2.32, 4.05, Math.sin(a) * 2.32, 0.72, 0.95, 0.12, mats.glass, -a + Math.PI / 2);
    }

    ring(keep, 5.72, 2.1, 2.85, mats.timber, 16);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      box(keep, Math.cos(a) * 2.62, 5.95, Math.sin(a) * 2.62, 0.12, 0.48, 0.12, mats.timber, -a);
    }

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + 0.2;
      const x = Math.cos(a) * 3.55;
      const z = Math.sin(a) * 3.55;
      const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 20), mats.copper);
      pan.position.set(x, 3.72, z);
      keep.add(pan);
      const brine = new THREE.Mesh(new THREE.CircleGeometry(0.36, 20), mats.brine);
      brine.rotation.x = -Math.PI / 2;
      brine.position.set(x, 3.78, z);
      keep.add(brine);
    }

    prismN(keep, 5.72, 7.55, 1.42, 1.32, 8, mats.copper);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + Math.PI / 8;
      box(keep, Math.cos(a) * 1.3, 6.65, Math.sin(a) * 1.3, 0.55, 0.85, 0.05, mats.glass, -a + Math.PI / 2);
    }
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.62, 1.35, 8), mats.copper);
    roof.position.y = 8.22;
    keep.add(roof);
    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), mats.copper);
    finial.position.y = 8.98;
    keep.add(finial);

    cap = new THREE.Mesh(new THREE.CylinderGeometry(2.9, 2.9, 0.08, 16), mats.cap);
    scene.add(cap);

    buildScaffold();
  }

  function buildScaffold() {
    const pine = mats.pine;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      const x = Math.cos(a) * 3.95;
      const z = Math.sin(a) * 3.95;
      box(scaffold, x, 3.55, z, 0.08, 7.1, 0.08, pine);
      for (let k = 1; k < 6; k++) {
        const y = k * 1.55;
        const n = (i + 1) % 8;
        const a2 = (n / 8) * TAU;
        const x2 = Math.cos(a2) * 3.95;
        const z2 = Math.sin(a2) * 3.95;
        const dx = x2 - x;
        const dz = z2 - z;
        const len = Math.hypot(dx, dz);
        const bar = new THREE.Mesh(new THREE.BoxGeometry(len, 0.07, 0.07), pine);
        rewriteBoxUV(bar.geometry, len, 0.07, 0.07);
        bar.position.set((x + x2) / 2, y, (z + z2) / 2);
        bar.rotation.y = -Math.atan2(dz, dx);
        scaffold.add(bar);
      }
    }
  }

  function makeGround() {
    ground = new THREE.Mesh(new THREE.CircleGeometry(42, 48), mats.ground);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);
    sea = new THREE.Mesh(new THREE.CircleGeometry(70, 48), mats.sea);
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = -0.18;
    scene.add(sea);
    /* no foreground props — they fight the type */
  }

  function makeStars() {
    const n = 900;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU;
      const e = 0.18 + Math.random() * 0.72;
      pos[i * 3] = Math.cos(a) * Math.cos(e) * 70;
      pos[i * 3 + 1] = Math.sin(e) * 48 + 8;
      pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 70;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    stars = new THREE.Points(
      g,
      new THREE.PointsMaterial({ color: 0xe8eef4, size: 0.09, sizeAttenuation: true, transparent: true, opacity: 0 })
    );
    scene.add(stars);
  }

  function makeWeather() {
    spray = particleField(1400, 0xb8c8c8, 0.045);
    snow = particleField(1100, 0xeef2f6, 0.07);
    scene.add(spray.pts, snow.pts);
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
        opacity: 0.72,
        depthWrite: false,
      })
    );
    pts.frustumCulled = false;
    return { pts, pos: attr.array, n, geo: g };
  }

  function scatter(pos, i) {
    pos[i * 3] = (Math.random() - 0.5) * 18;
    pos[i * 3 + 1] = Math.random() * 28;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  function anchorWeather() {
    const az = Math.atan2(camera.position.x, camera.position.z);
    const fx = -Math.sin(az);
    const fz = -Math.cos(az);
    [spray, snow].forEach((w) => {
      w.pts.position.set(camera.position.x + fx * 18, 0, camera.position.z + fz * 18);
      w.pts.rotation.y = az;
    });
  }

  function heightAt(u) {
    const ease = u * u * (3 - 2 * u);
    let from = 0;
    let to = KEEP_H;
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
    for (let s = 0; s < STAGES.length; s++) if (y + 0.04 >= STAGES[s].y) i = s;
    return i;
  }

  function capRadius(y) {
    if (y < 2.3) return 3.1;
    if (y < 5.7) return 2.35;
    if (y < 7.6) return 1.36;
    return Math.max(0.2, 1.5 - (y - 7.6) * 0.9);
  }

  function applyClip() {
    const y = heightAt(state.t);
    CLIP.constant = y;
    if (cap) {
      cap.position.y = y;
      const r = capRadius(y);
      cap.scale.set(r / 2.9, 1, r / 2.9);
      cap.visible = y > 0.2 && y < KEEP_H - 0.05;
    }
    const scaf = Math.min(1, (y + 1.4) / 7.1);
    scaffold.scale.set(1, scaf, 1);
    scaffold.visible = y < KEEP_H - 0.2;
    const i = stageIndex(y);
    if (i !== state.lastStage) {
      state.lastStage = i;
      ui.stageLocal.textContent = STAGES[i].local;
      ui.stageEn.textContent = STAGES[i].en;
    }
    ui.percent.textContent = String(Math.round(state.t * 100));
  }

  function applyTime() {
    const T = TIMES[state.time];
    scene.background = new THREE.Color(T.sky);
    scene.fog = new THREE.Fog(T.fog, 18, T.fogFar);
    sun.color.setHex(T.sun);
    sun.intensity = T.sunI;
    sun.position.set(...T.sunPos);
    hemi.intensity = T.hemi;
    lanternLight.intensity = state.time === "night" ? 3.4 : 0;
    if (mats.glass) mats.glass.emissiveIntensity = state.time === "night" ? 0.55 : 0.02;
    if (stars) stars.material.opacity = state.time === "night" ? 0.9 : 0;
    ui.syncTime(state.time);
  }

  function weatherDensity() {
    if (state.weather === "spray") return { rain: 0.55, snow: 0, speed: 1, slant: 2.2 };
    if (state.weather === "storm") return { rain: 1, snow: 0, speed: 1.42, slant: 4.4 };
    if (state.weather === "snow") {
      const b = blizzardAt(state.blizT);
      return { rain: 0, snow: 0.35 + b * 0.65, speed: 0.42 + b * 0.5, slant: 0.4 + b * 3.2 };
    }
    return { rain: 0, snow: 0, speed: 1, slant: 0 };
  }

  function blizzardAt(t) {
    const cyc = [12, 6, 15, 8];
    const tot = cyc.reduce((a, b) => a + b, 0);
    let u = t % tot;
    if (u < 0) u += tot;
    if (u < cyc[0]) return 0;
    u -= cyc[0];
    if (u < cyc[1]) return smooth(u / cyc[1]);
    u -= cyc[1];
    if (u < cyc[2]) return 1;
    u -= cyc[2];
    return 1 - smooth(u / cyc[3]);
  }

  function stepWeather(dt) {
    const w = weatherDensity();
    spray.geo.setDrawRange(0, Math.round(spray.n * w.rain));
    snow.geo.setDrawRange(0, Math.round(snow.n * w.snow));
    const fall = 9 * w.speed;
    stepField(spray, dt, fall, w.slant);
    stepField(snow, dt, fall * 0.45, w.slant);
    const targetPack = state.weather === "snow" ? 0.85 : 0;
    state.snowPack += (targetPack - state.snowPack) * (targetPack > state.snowPack ? dt / 18 : dt / 10);
    if (mats.ground) {
      mats.ground.color.setRGB(0.45 + state.snowPack * 0.4, 0.46 + state.snowPack * 0.4, 0.42 + state.snowPack * 0.45);
      mats.ground.roughness = 0.92 - state.snowPack * 0.25;
    }
    if (state.weather === "snow") state.blizT += dt;
    else state.blizT = 0;
    if (state.weather === "storm" && Math.random() < dt * 0.08) strike();
    stepBolt(dt);
    if (scene.fog) {
      const far = TIMES[state.time].fogFar * (state.weather === "storm" ? 0.38 : state.weather === "spray" ? 0.62 : 1);
      scene.fog.far = far;
    }
  }

  function stepField(field, dt, fall, slant) {
    const p = field.pos;
    for (let i = 0; i < field.n; i++) {
      const i3 = i * 3;
      p[i3 + 1] -= fall * dt;
      p[i3] += slant * dt * 0.35;
      if (p[i3 + 1] < 0) {
        p[i3] = (Math.random() - 0.5) * 18;
        p[i3 + 1] = 18 + Math.random() * 10;
        p[i3 + 2] = (Math.random() - 0.5) * 40;
      }
    }
    field.pts.geometry.attributes.position.needsUpdate = true;
  }

  function strike() {
    const near = Math.random();
    const s = 0.42 + near * 0.58;
    state.pulses = [{ t: 0, a: s }];
    let tt = 0;
    for (let i = 0, n = 1 + ((Math.random() * 2.6) | 0); i < n; i++) {
      tt += 0.05 + Math.random() * 0.14;
      state.pulses.push({ t: tt, a: s * (0.3 + Math.random() * 0.65) });
    }
    state.pulseAge = 0;
    const a = Math.random() * TAU;
    bolt.position.set(Math.cos(a) * 20, 18, Math.sin(a) * 20);
    if (ui.flash) {
      ui.flash.style.opacity = "0.14";
      setTimeout(() => {
        ui.flash.style.opacity = "0";
      }, 80);
    }
  }

  function stepBolt(dt) {
    state.pulseAge += dt;
    let v = 0;
    for (const p of state.pulses) {
      if (state.pulseAge >= p.t) v += p.a * Math.exp(-(state.pulseAge - p.t) / 0.085);
    }
    bolt.intensity = v * 3.2;
  }

  const trail = makeTrail(fx, finePointer, reduced);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    fx.width = w;
    fx.height = h;
    trail.resize(w, h);
  }

  function onPointer(e) {
    const r = canvas.getBoundingClientRect();
    state.px = ((e.clientX - r.left) / r.width) * 2 - 1;
    state.py = -(((e.clientY - r.top) / r.height) * 2 - 1);
    if (state.drag) {
      state.orbit += (e.clientX - state.lx) * 0.005;
      state.pitch = clamp(state.pitch + (e.clientY - state.ly) * 0.003, -0.35, 0.45);
    }
    state.lx = e.clientX;
    state.ly = e.clientY;
    trail.move(e.clientX - r.left, e.clientY - r.top);
  }

  canvas.addEventListener("pointerdown", (e) => {
    state.drag = true;
    state.lx = e.clientX;
    state.ly = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointerup", () => {
    state.drag = false;
  });
  canvas.addEventListener("pointermove", onPointer);
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      state.zoom = clamp(state.zoom * (e.deltaY > 0 ? 1.06 : 0.94), 0.5, 2);
    },
    { passive: false }
  );
  canvas.addEventListener("dblclick", () => {
    state.orbit = 0;
    state.pitch = 0;
    state.zoom = 1;
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      state.playing = !state.playing;
      ui.syncPlay(state.playing);
    }
    if (e.key === "r" || e.key === "R") rebuild();
    if (e.key === "t" || e.key === "T") cycleTime();
    if (e.key === "w" || e.key === "W") cycleWeather();
    if (e.key === "c" || e.key === "C") {
      state.orbit = 0;
      state.pitch = 0;
      state.zoom = 1;
    }
  });

  function rebuild() {
    state.t = 0;
    state.playing = !reduced;
    ui.syncPlay(state.playing);
  }

  function cycleTime() {
    const keys = Object.keys(TIMES);
    state.time = keys[(keys.indexOf(state.time) + 1) % keys.length];
    applyTime();
  }

  function cycleWeather() {
    const keys = ["clear", "spray", "storm", "snow"];
    state.weather = keys[(keys.indexOf(state.weather) + 1) % keys.length];
    ui.syncWeather(state.weather);
  }

  ui.onTime = (name) => {
    state.time = name;
    applyTime();
  };
  ui.onWeather = (name) => {
    state.weather = name;
    if (name !== "snow") state.blizT = 0;
    ui.syncWeather(name);
  };
  ui.onPlay = () => {
    state.playing = !state.playing;
    ui.syncPlay(state.playing);
  };
  ui.onRebuild = rebuild;

  document.addEventListener("visibilitychange", () => {
    state.hidden = document.hidden;
  });
  window.addEventListener("resize", resize);

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(1 / 30, (now - last) / 1000);
    last = now;
    if (!state.hidden) {
      if (state.playing && !reduced) {
        state.t += dt / BUILD_S;
        if (state.t >= 1) {
          state.t = 1;
          state.playing = false;
          ui.syncPlay(false);
        }
      }
      applyClip();
      if (!reduced) stepWeather(dt);
      anchorWeather();
      const leanX = finePointer && !state.drag ? state.px * 0.1 : 0;
      const leanY = finePointer && !state.drag ? state.py * 0.06 : 0;
      const az = state.orbit + leanX;
      const el = 0.32 + state.pitch + leanY;
      const dist = 18.2 * state.zoom;
      camera.position.set(
        Math.sin(az) * Math.cos(el) * dist,
        4.2 + Math.sin(el) * dist * 0.55,
        Math.cos(az) * Math.cos(el) * dist
      );
      camera.lookAt(0, 4.05, 0);
      if (sea && !reduced) sea.position.y = -0.18 + Math.sin(now * 0.0011) * 0.03;
      trail.tick(dt);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(frame);
  }

  const preview = /(?:\?|&)preview=1\b/.test(location.search);
  if (preview) {
    state.t = 0.72;
    state.playing = false;
  }

  mat("granite", { color: 0x8d9698, roughness: 0.92 });
  mat("copper", { color: 0xc56a3a, roughness: 0.42, metalness: 0.72 });
  mat("timber", { color: 0xb9a078, roughness: 0.88 });
  mat("pine", { color: 0xcbb892, roughness: 0.9, clip: false });
  mat("glass", { color: 0x1a2428, roughness: 0.15, metalness: 0.2, emissive: 0xe0b25a, emissiveIntensity: 0.02 });
  mat("brine", { color: 0x6a8a88, roughness: 0.18, metalness: 0.35 });
  mat("cap", { color: 0x8a8680, roughness: 1, clip: false });
  mat("ground", { color: 0x6e6a5e, roughness: 0.95, clip: false });
  mat("sea", { color: 0x3a5554, roughness: 0.28, metalness: 0.25, transparent: true, opacity: 0.92, clip: false });
  buildArchitecture();
  makeGround();
  makeStars();
  makeWeather();
  applyTime();
  applyClip();
  ui.syncPlay(state.playing);
  ui.syncWeather(state.weather);
  resize();
  renderer.render(scene, camera);

  Promise.all([load("tex-granite.jpg"), load("tex-copper.jpg"), load("tex-pine.jpg")]).then(
    ([granite, copper, pine]) => {
      if (granite) {
        granite.repeat.set(2.2, 2.2);
        mats.granite.map = granite;
        mats.granite.needsUpdate = true;
      }
      if (copper) {
        copper.repeat.set(1.6, 1.6);
        mats.copper.map = copper;
        mats.copper.needsUpdate = true;
      }
      if (pine) {
        pine.repeat.set(1.4, 3.2);
        mats.timber.map = pine;
        mats.pine.map = pine;
        mats.timber.needsUpdate = true;
        mats.pine.needsUpdate = true;
      }
    }
  );

  requestAnimationFrame(frame);
  return Promise.resolve({ rebuild, cycleTime, cycleWeather, state });
}

function rewriteBoxUV(geo, sx, sy, sz) {
  const uv = geo.attributes.uv;
  if (!uv) return;
  const dims = [
    [sz, sy],
    [sz, sy],
    [sx, sz],
    [sx, sz],
    [sx, sy],
    [sx, sy],
  ];
  for (let f = 0; f < 6; f++) {
    const du = dims[f][0];
    const dv = dims[f][1];
    for (let i = 0; i < 4; i++) {
      const idx = (f * 4 + i) * 2;
      uv.array[idx] *= du;
      uv.array[idx + 1] *= dv;
    }
  }
  uv.needsUpdate = true;
}

function makeTrail(canvas, fine, reduced) {
  const ctx = canvas.getContext("2d");
  const N = fine ? 190 : 0;
  const motes = Array.from({ length: N }, () => ({ x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 1, r: 1, phi: 0 }));
  let i = 0;
  const E = { x: 0, y: 0, lx: 0, ly: 0, acc: 0, idle: 0, w: 1, h: 1, ready: false };
  const STEP = 14;

  function spawn(x, y, ang) {
    const slot = i;
    i = (i + 1) % Math.max(1, N);
    const m = motes[slot];
    if (!m) return;
    m.x = x + (Math.random() - 0.5) * 10;
    m.y = y + (Math.random() - 0.5) * 10;
    m.vx = -Math.cos(ang) * 18 + (Math.random() - 0.5) * 22;
    m.vy = -Math.sin(ang) * 18 + (Math.random() - 0.5) * 22 - 8;
    m.life = 0;
    m.max = 1.4 + Math.random() * 1.3;
    m.r = 1.1 + Math.random() * 1.8;
    m.phi = Math.random() * TAU;
  }

  return {
    resize(w, h) {
      E.w = w;
      E.h = h;
    },
    move(x, y) {
      if (!fine || reduced || !N) return;
      if (!E.ready) {
        E.x = E.lx = x;
        E.y = E.ly = y;
        E.ready = true;
        return;
      }
      E.lx = E.x;
      E.ly = E.y;
      E.x += (x - E.x) * 0.35;
      E.y += (y - E.y) * 0.35;
      const dx = E.x - E.lx;
      const dy = E.y - E.ly;
      const moved = Math.hypot(dx, dy);
      const ang = Math.atan2(dy, dx);
      E.acc += moved;
      let guard = 0;
      while (E.acc >= STEP && guard++ < 14) {
        E.acc -= STEP;
        const t = moved > 1e-6 ? Math.min(1, (guard * STEP) / moved) : 0;
        spawn(E.lx + dx * t, E.ly + dy * t, ang);
      }
    },
    tick(dt) {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!fine || !N) return;
      if (reduced) {
        ctx.fillStyle = "rgba(232,226,212,0.18)";
        for (let k = 0; k < 12; k++) {
          ctx.beginPath();
          ctx.arc(canvas.width * 0.62 + k * 9, canvas.height * 0.38 + Math.sin(k) * 8, 1.6, 0, TAU);
          ctx.fill();
        }
        return;
      }
      E.idle += dt;
      if (E.ready && E.idle > 0.42) {
        E.idle = 0;
        spawn(E.x, E.y, -Math.PI / 2);
      }
      for (const m of motes) {
        if (m.life >= m.max) continue;
        m.life += dt;
        const u = m.life / m.max;
        m.vx *= 1 - 0.5 * dt;
        m.vy *= 1 - 0.5 * dt;
        m.vy -= 22 * dt;
        m.x += (m.vx + Math.sin(m.life * 1.3 + m.phi) * 12) * dt;
        m.y += (m.vy + Math.cos(m.life * 1.1 + 1.7 * m.phi) * 8) * dt;
        const a = u < 0.12 ? u / 0.12 : 1 - (u - 0.22) / 0.78;
        ctx.fillStyle = `rgba(232,226,212,${Math.max(0, a) * 0.72})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * (1 + 0.4 * u), 0, TAU);
        ctx.fill();
      }
    },
  };
}

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}
function smooth(t) {
  return t * t * (3 - 2 * t);
}
