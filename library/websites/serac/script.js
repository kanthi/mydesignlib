/**
 * SERAC — Alpine Telemetry & Piste Engineering
 * Procedural WebGL Fog Reveal Shader & Atmospheric Telemetry Engine
 * 
 * Recreates the volumetric alpine whiteout transition entirely in GLSL shader code
 * between State 01 (Descent) and State 02 (Groomed) with continuous noise billowing,
 * cursor mist dissipation, and synchronized telemetry HUD.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFogShader();
  initAltitudeWidget();
  initGearInteractions();
});

/* ==========================================================================
   Header Scroll Detection
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   WebGL Fog Reveal Shader Engine
   ========================================================================== */
function initFogShader() {
  const canvas = document.getElementById('heroShaderCanvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false })
          || canvas.getContext('experimental-webgl');

  if (!gl) {
    console.warn('WebGL not supported, using fallback canvas');
    initFallbackCanvas(canvas);
    return;
  }

  // --- GLSL Shaders ---
  const vertexShaderSource = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision highp float;
    varying vec2 v_uv;

    uniform sampler2D u_tex1;
    uniform sampler2D u_tex2;
    uniform float u_progress;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_imageResolution;
    uniform vec2 u_mouse;
    uniform float u_mouse_active;

    // Simplex Noise & Fractal Brownian Motion (FBM)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    float fbm(vec2 p) {
      float total = 0.0;
      float amp = 0.5;
      for (int i = 0; i < 4; i++) {
        total += snoise(p) * amp;
        p = p * 2.08 + vec2(1.7, 9.2);
        amp *= 0.5;
      }
      return total;
    }

    void main() {
      // Cover UV mapping preserving image aspect ratio
      vec2 screenUV = v_uv;
      float screenAspect = u_resolution.x / u_resolution.y;
      float imageAspect = u_imageResolution.x / u_imageResolution.y;
      vec2 coverUV = screenUV;

      if (screenAspect > imageAspect) {
        float scale = screenAspect / imageAspect;
        coverUV.y = (screenUV.y - 0.5) / scale + 0.5;
      } else {
        float scale = imageAspect / screenAspect;
        coverUV.x = (screenUV.x - 0.5) / scale + 0.5;
      }

      // Atmospheric continuous wind drift
      vec2 drift = vec2(u_time * 0.035, -u_time * 0.015);
      float n1 = fbm(coverUV * 3.2 + drift);
      float n2 = fbm(coverUV * 6.0 - drift * 0.7);
      float turbulentNoise = n1 * 0.65 + n2 * 0.35;

      // Volumetric Fog Envelope:
      // u_progress: 0.0 = State 01 clear; 0.5 = complete whiteout; 1.0 = State 02 clear
      float fogEnvelope = sin(clamp(u_progress, 0.0, 1.0) * 3.14159265);
      float fogDensity = smoothstep(0.02, 0.45, fogEnvelope);

      // Angled fog sweep front
      float sweep = (1.0 - coverUV.y) * 0.6 + coverUV.x * 0.15;
      float wave = sweep + turbulentNoise * 0.28;

      // Sample base photos
      vec4 texColor1 = texture2D(u_tex1, coverUV);
      vec4 texColor2 = texture2D(u_tex2, coverUV);

      // Blend between images through the fog midpoint
      vec4 scene = mix(texColor1, texColor2, smoothstep(0.35, 0.65, u_progress));

      // Desaturate under encroaching fog bank (Annimate Fog signature)
      float luminance = dot(scene.rgb, vec3(0.299, 0.587, 0.114));
      vec3 desaturated = mix(scene.rgb, vec3(luminance), fogDensity * 0.85);

      // Luminous alpine fog color with atmospheric blue-white gradient
      vec3 fogBase = mix(vec3(0.96, 0.98, 1.0), vec3(0.88, 0.92, 0.97), coverUV.y * 0.6);
      vec3 fogCloud = fogBase + vec3(turbulentNoise * 0.07);

      // Interactive mouse wake: moving the cursor sweeps fog away
      vec2 mouseCoord = u_mouse;
      float mouseDist = distance(screenUV, mouseCoord);
      float mouseRepel = smoothstep(0.05, 0.22, mouseDist);

      // Final composite fog factor
      float finalFog = clamp(fogDensity * (0.35 + 0.65 * (turbulentNoise + 0.5)), 0.0, 1.0);
      finalFog *= mix(1.0, mouseRepel, u_mouse_active * 0.75);

      vec3 finalColor = mix(desaturated, fogCloud, finalFog);

      // Fine alpine film grain
      float grain = fract(sin(dot(screenUV + fract(u_time * 0.08), vec2(12.9898, 78.233))) * 43758.5453);
      finalColor += (grain - 0.5) * 0.018;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  function createShader(gl, type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return;
  }

  // Full-screen quad
  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1
  ]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  // Uniform locations
  const uProgressLoc = gl.getUniformLocation(program, 'u_progress');
  const uTimeLoc = gl.getUniformLocation(program, 'u_time');
  const uResLoc = gl.getUniformLocation(program, 'u_resolution');
  const uImgResLoc = gl.getUniformLocation(program, 'u_imageResolution');
  const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
  const uMouseActLoc = gl.getUniformLocation(program, 'u_mouse_active');
  const uTex1Loc = gl.getUniformLocation(program, 'u_tex1');
  const uTex2Loc = gl.getUniformLocation(program, 'u_tex2');

  function loadTexture(url, unit) {
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Placeholder pixel while loading
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([200, 215, 230, 255]));

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = () => {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };
    return texture;
  }

  loadTexture('assets/state_descent.jpg', 0);
  loadTexture('assets/state_groomed.jpg', 1);

  // Resize handling
  let width = 0;
  let height = 0;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    gl.viewport(0, 0, width, height);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // Scrubber & HUD Elements
  const scrubberTrack = document.getElementById('scrubberTrack');
  const scrubberThumb = document.getElementById('scrubberThumb');
  const labelDescent = document.getElementById('labelDescent');
  const labelGroomed = document.getElementById('labelGroomed');
  
  const sceneMeta = document.querySelector('.hero-scene-meta');
  const sceneTitle = document.getElementById('sceneTitle');
  const sceneSubtitle = document.getElementById('sceneSubtitle');
  const badgeLocation = document.getElementById('badgeLocation');
  
  const metricAlt = document.getElementById('metricAlt');
  const metricTemp = document.getElementById('metricTemp');
  const metricWind = document.getElementById('metricWind');
  const metricSnow = document.getElementById('metricSnow');
  const metricFog = document.getElementById('metricFog');
  
  const btnAutoPlay = document.getElementById('btnAutoPlay');
  const btnInteractive = document.getElementById('btnInteractive');

  // Animation State
  let currentProgress = 0.0;
  let targetProgress = 0.0;
  let isDragging = false;
  let isAutoCycle = true;
  let autoCycleDirection = 1;
  let autoCycleSpeed = 0.0035;

  let mousePos = { x: 0.5, y: 0.5 };
  let mouseActive = 0.0;
  let lastMouseMove = 0;

  // Scene metadata
  const meta01 = {
    title: 'Descent',
    subtitle: 'Zermatt, 3,883 m',
    location: 'MATTERHORN GLACIER // COULOIR 04',
    alt: '3,883',
    temp: '-14.2°C',
    wind: '48 km/h',
    snow: 'Powder / 185 cm'
  };

  const meta02 = {
    title: 'Groomed',
    subtitle: 'Piste 7, 06:40',
    location: 'TIEFORMATTEN // CORDUROY SECTOR',
    alt: '2,940',
    temp: '-8.6°C',
    wind: '18 km/h',
    snow: 'Corduroy / 420 kg/m³'
  };

  function updateHUD(prog) {
    const isDescent = prog < 0.5;
    
    // Atmospheric Fog Index peaks at midpoint
    const fogDensity = Math.round(15 + Math.sin(prog * Math.PI) * 82);
    if (metricFog) metricFog.textContent = `${fogDensity}%`;

    // Dissolve headline when fog envelope is thick
    if (sceneMeta) {
      if (fogDensity > 60) {
        sceneMeta.classList.add('dissolving');
      } else {
        sceneMeta.classList.remove('dissolving');
      }
    }

    if (isDescent) {
      if (sceneTitle && sceneTitle.textContent !== meta01.title) {
        sceneTitle.textContent = meta01.title;
        sceneSubtitle.textContent = meta01.subtitle;
        if (badgeLocation) badgeLocation.textContent = meta01.location;
        if (metricAlt) metricAlt.textContent = meta01.alt;
        if (metricTemp) metricTemp.textContent = meta01.temp;
        if (metricWind) metricWind.textContent = meta01.wind;
        if (metricSnow) metricSnow.textContent = meta01.snow;
      }
      if (labelDescent) labelDescent.classList.add('active');
      if (labelGroomed) labelGroomed.classList.remove('active');
    } else {
      if (sceneTitle && sceneTitle.textContent !== meta02.title) {
        sceneTitle.textContent = meta02.title;
        sceneSubtitle.textContent = meta02.subtitle;
        if (badgeLocation) badgeLocation.textContent = meta02.location;
        if (metricAlt) metricAlt.textContent = meta02.alt;
        if (metricTemp) metricTemp.textContent = meta02.temp;
        if (metricWind) metricWind.textContent = meta02.wind;
        if (metricSnow) metricSnow.textContent = meta02.snow;
      }
      if (labelDescent) labelDescent.classList.remove('active');
      if (labelGroomed) labelGroomed.classList.add('active');
    }

    if (scrubberThumb) {
      scrubberThumb.style.top = `${prog * 100}%`;
    }
  }

  // Calculate progress from clientY on vertical rail
  function calculateScrub(clientY) {
    if (!scrubberTrack) return;
    const rect = scrubberTrack.getBoundingClientRect();
    const offsetY = clientY - rect.top;
    const prog = Math.max(0, Math.min(1, offsetY / rect.height));
    targetProgress = prog;
    isAutoCycle = false;
    updateControls();
  }

  if (scrubberTrack) {
    scrubberTrack.addEventListener('mousedown', (e) => {
      isDragging = true;
      calculateScrub(e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      calculateScrub(e.clientY);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch support
    scrubberTrack.addEventListener('touchstart', (e) => {
      isDragging = true;
      calculateScrub(e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      calculateScrub(e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // Label clicks
  if (labelDescent) {
    labelDescent.addEventListener('click', () => {
      targetProgress = 0.0;
      isAutoCycle = false;
      updateControls();
    });
  }
  if (labelGroomed) {
    labelGroomed.addEventListener('click', () => {
      targetProgress = 1.0;
      isAutoCycle = false;
      updateControls();
    });
  }

  // Mousewheel scrubbing within hero
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('wheel', (e) => {
      // Only scrub if near top of page
      if (window.scrollY < 50) {
        if (Math.abs(e.deltaY) > 8) {
          isAutoCycle = false;
          updateControls();
          targetProgress = Math.max(0, Math.min(1, targetProgress + e.deltaY * 0.0015));
        }
      }
    }, { passive: true });
  }

  // Track mouse coordinates for shader fog dissipation
  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX / window.innerWidth;
    mousePos.y = 1.0 - (e.clientY / window.innerHeight); // Flip Y for WebGL
    mouseActive = 1.0;
    lastMouseMove = performance.now();
  }, { passive: true });

  // Mode Buttons
  function updateControls() {
    if (btnAutoPlay && btnInteractive) {
      if (isAutoCycle) {
        btnAutoPlay.classList.add('active');
        btnInteractive.classList.remove('active');
      } else {
        btnAutoPlay.classList.remove('active');
        btnInteractive.classList.add('active');
      }
    }
  }

  if (btnAutoPlay) {
    btnAutoPlay.addEventListener('click', () => {
      isAutoCycle = true;
      updateControls();
    });
  }
  if (btnInteractive) {
    btnInteractive.addEventListener('click', () => {
      isAutoCycle = false;
      updateControls();
    });
  }

  // --- Render Loop ---
  let startTime = performance.now();

  function render(time) {
    const elapsed = (time - startTime) * 0.001;

    // Fade out mouse dissipation after 1.5s of no movement
    if (performance.now() - lastMouseMove > 1500) {
      mouseActive = Math.max(0, mouseActive - 0.02);
    }

    // Auto-cycle logic: ping-pong smoothly with pause at ends
    if (isAutoCycle) {
      targetProgress += autoCycleDirection * autoCycleSpeed;
      if (targetProgress >= 1.0) {
        targetProgress = 1.0;
        autoCycleDirection = -1;
      } else if (targetProgress <= 0.0) {
        targetProgress = 0.0;
        autoCycleDirection = 1;
      }
    }

    // Smooth lerp to targetProgress
    currentProgress += (targetProgress - currentProgress) * 0.08;
    updateHUD(currentProgress);

    // Uniforms
    gl.useProgram(program);
    gl.uniform1f(uProgressLoc, currentProgress);
    gl.uniform1f(uTimeLoc, elapsed);
    gl.uniform2f(uResLoc, width, height);
    gl.uniform2f(uImgResLoc, 1720, 1080);
    gl.uniform2f(uMouseLoc, mousePos.x, mousePos.y);
    gl.uniform1f(uMouseActLoc, mouseActive);
    gl.uniform1i(uTex1Loc, 0);
    gl.uniform1i(uTex2Loc, 1);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* Fallback 2D Canvas if WebGL is unavailable */
function initFallbackCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const img1 = new Image();
  const img2 = new Image();
  img1.src = 'assets/state_descent.jpg';
  img2.src = 'assets/state_groomed.jpg';

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  let p = 0;
  function draw() {
    p = (p + 0.005) % 1;
    ctx.clearRect(0, 0, w, h);
    if (img1.complete) ctx.drawImage(img1, 0, 0, w, h);
    ctx.fillStyle = `rgba(255,255,255,${Math.sin(p * Math.PI)})`;
    ctx.fillRect(0, 0, w, h);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ==========================================================================
   Altitude Atmospheric Sensing Simulator
   ========================================================================== */
function initAltitudeWidget() {
  const slider = document.getElementById('altitudeSlider');
  const readoutAlt = document.getElementById('readoutAlt');
  const readoutTemp = document.getElementById('readoutTemp');
  const readoutPressure = document.getElementById('readoutPressure');
  const readoutOxygen = document.getElementById('readoutOxygen');

  if (!slider) return;

  function updateAtmosphericValues(altMeters) {
    if (readoutAlt) readoutAlt.textContent = `${altMeters.toLocaleString()} m`;

    // Standard atmospheric lapse rate: -6.5°C per 1,000m
    const baseTemp = 1.5; // at 1,600m
    const lapse = ((altMeters - 1600) / 1000) * 6.5;
    const currentTemp = (baseTemp - lapse).toFixed(1);
    if (readoutTemp) readoutTemp.textContent = `${currentTemp}°C`;

    // Barometric pressure formula approximation
    const pressure = Math.round(1013 * Math.exp(-altMeters / 8400));
    if (readoutPressure) readoutPressure.textContent = `${pressure} hPa`;

    // Effective Oxygen availability %
    const oxygen = Math.round((pressure / 1013) * 100);
    if (readoutOxygen) readoutOxygen.textContent = `${oxygen}%`;
  }

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    updateAtmosphericValues(val);
  });

  updateAtmosphericValues(parseInt(slider.value, 10));
}

/* ==========================================================================
   Gear System Interactions
   ========================================================================== */
function initGearInteractions() {
  const gearBtns = document.querySelectorAll('.gear-btn');
  gearBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = btn.textContent;
      btn.textContent = 'SPEC ACQUIRED';
      btn.style.backgroundColor = 'var(--accent-cyan)';
      btn.style.color = '#000';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        btn.style.color = '';
      }, 2000);
    });
  });
}
