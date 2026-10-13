/* =====================================================================
   DUNES · procedural pixel-dithered sand dune backdrop (raw WebGL1)
   ---------------------------------------------------------------------
   Usage:  <div class="dunes" data-dunes data-shape="valley" data-seed="1">
             <canvas aria-hidden="true"></canvas>
           </div>
   data-shape : "valley"  tall dunes rising at both sides (hero)
                "rolling" lower dunes across the whole band (CTA)
   data-seed  : any number, changes the dune layout
   Settings   : window.FLOWSTACK_CONFIG.backdrop (js/config.js)
   Nothing here is a photo: shapes, lighting, ripples and the colour
   dither are all computed per pixel in the fragment shader below.
   ===================================================================== */
(function () {
  'use strict';
  var DEF = {
    enabled: true, pixelSize: 2, levels: 5, ditherMode: 'blue', speckle: 0.11,
    drift: 0.018, parallax: 1, rippleScale: 1, fps: 30, fadeBottom: 0.18,
    themes: {}, fallback: {}
  };
  var CFG = Object.assign({}, DEF, (window.FLOWSTACK_CONFIG || {}).backdrop || {});
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var coarse = window.matchMedia('(pointer: coarse)');

  var VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

  var FRAG = [
    'precision highp float;',
    'uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;uniform float uSeed;',
    'uniform float uShape;uniform float uLevels;uniform float uMode;uniform float uSpeckle;',
    'uniform float uRipple;uniform float uFade;',
    'uniform vec3 cDeep,cShade,cMid,cLit,cHi,cHaze,cTint;',
    'float h1(float n){return fract(sin(n)*43758.5453);}',
    'float h2(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
    'float n1(float x){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h1(i+uSeed*13.1),h1(i+1.+uSeed*13.1),f);}',
    'float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    ' return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}',
    'float bayer2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}',
    'float bayer4(vec2 a){return bayer2(.5*a)*.25+bayer2(a);}',
    'float bayer8(vec2 a){return bayer4(.5*a)*.25+bayer2(a);}',
    'float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n2(p);p*=2.03;a*=.5;}return s;}',
    /* 5-stop sand ramp: 0 deep shadow .. 1 highlight */
    'vec3 ramp(float t){t=clamp(t,0.,1.);',
    ' if(t<.25)return mix(cDeep,cShade,t/.25);',
    ' if(t<.5)return mix(cShade,cMid,(t-.25)/.25);',
    ' if(t<.75)return mix(cMid,cLit,(t-.5)/.25);',
    ' return mix(cLit,cHi,(t-.75)/.25);}',
    /* asymmetric ripple profile: sharp lit crest, slow fall into shadow */
    'float ripple(float ph){float f=fract(ph);return smoothstep(0.,.18,f)*(1.-smoothstep(.18,1.,f));}',
    /* One dune seen from the side. dir=+1 means the valley/centre is to the right.
       sil: skyline. A sharp ridge runs from the peak (pu,pv) down to a tip (ut,vt);
       the outer side of that ridge is the shadowed slip face, the inner side is the
       sun-lit windward face. Returns lum (0..1), mask (is this dune here) and shade. */
    'vec3 dune(float u,float v,float pu,float pv,float len,float drop,float steep,',
    '          float ut,float vt,float bOut,float dir,float grain,float rip,float vEnd,out float sil){',
    ' float d=(u-pu)*dir; float r=.03;',
    ' float xr=(sqrt(d*d+r*r)-r)/len;',
    ' sil=pv+(d>0.?drop*pow(xr,1.15)+max(xr-1.,0.)*max(xr-1.,0.)*2.5:steep*(sqrt(d*d+r*r)-r))+.004*sin(u*37.+uSeed);',
    ' float e=1.-smoothstep(vEnd-.10,vEnd,sil);',
    ' if(v<sil||e<=0.)return vec3(0.);',
    ' float dt=(ut-pu)*dir;',
    ' float t=clamp((v-pv)/(vt-pv),0.,1.);',
    ' float dr=dt*pow(t,.8)+.006*sin(v*60.+uSeed);',
    ' float bv=mix(bOut,vt,clamp(d/dt,0.,1.))+.015*sin(u*41.+uSeed);',
    ' float ow=.004+.16*clamp((v-vt)/.22,0.,1.);',
    ' float outer=1.-smoothstep(dr-ow,dr+ow,d); float sh=step(d,dr)*step(v,bv);',
    ' float below=v-sil;',
    ' float lit=.97-.42*smoothstep(0.,.16,below)-.05*smoothstep(.0,.04,dr-d)*(1.-sh)+.06*(grain-.5)+.08*(rip-.45)*smoothstep(.06,.2,below);',
    ' float shade=.10+.20*smoothstep(0.,.25,dr-d)+.12*smoothstep(bv-.12,bv,v)+.05*(grain-.5)+.05*(rip-.45);',
    ' float lum=mix(lit,shade,sh);',
    ' float fade=(1.-smoothstep(.20,.34,below)*(1.-sh))*(1.-outer*smoothstep(bv,bv+.03,v));',
    ' return vec3(lum,e*fade,sh);}',
    'void main(){',
    ' vec2 fc=gl_FragCoord.xy;',
    ' float u=fc.x/uRes.x; float v=(uRes.y-fc.y)/(uRes.x*.371);',
    ' float T=uTime; vec2 m=uMouse; float roll=uShape;',
    ' float tintAmt=0.,haze=0.,crest=0.;',
    ' vec2 g=vec2(u,v*.371);',
    ' float grain=fbm(g*95.+uSeed);',
    /* ---------- floor: perspective wind ripples ---------- */
    ' float hz=mix(.22,.10,roll); float z=1./max(v-hz,.04);',
    ' vec2 gp=vec2((u-.5+m.x*.02)*z*2.2,z*1.7)*uRipple;',
    ' float warp=fbm(gp*.28+uSeed)*4.5+sin(gp.x*.8+gp.y*.3)*1.2;',
    ' float rp=ripple(gp.y*2.1+gp.x*1.1+warp-T*.06);',
    ' float rpF=ripple(gp.y*4.6-gp.x*.5+warp*1.6-T*.09);',
    ' float lum=.46+.36*(rp-.42)+.08*(rpF-.4)+.08*(grain-.5);',
    ' tintAmt=.35*(1.-rp);',
    ' float rpS=mix(.45,rp,smoothstep(hz+.04,hz+.16,v));',
    /* low crest band crossing the floor (the bright horizontal streak) */
    ' float tM=mix(.50,.30,roll)+.06*sin(u*3.4+uSeed*1.7+m.x*.05)+.025*sin(u*9.+uSeed)+mix(.22,.05,roll)*smoothstep(.55,1.,u);',
    ' float dm=v-tM;',
    ' float bandM=smoothstep(-.015,.0,dm)*(1.-smoothstep(.0,.10,dm));',
    ' float behindM=(1.-smoothstep(-.10,0.,dm))*step(0.,v-mix(.30,.18,roll));',
    ' lum=mix(lum,.30+.10*grain+.10*(rp-.4),behindM*.75);',
    ' lum=mix(lum,.93+.05*grain,bandM*.9);',
    /* ---------- far range: low hazy dunes in the valley ---------- */
    ' float uf=u+m.x*.006+T*.0015;',
    ' float tF=mix(.325,.17,roll)+.018*sin(uf*9.+uSeed)+.02*(n1(uf*6.)-.5)+.012*sin(uf*23.+uSeed*2.);',
    ' float rF=tF+.02+.012*sin(uf*17.+uSeed);',
    ' float kF=mix(smoothstep(.10,.30,u)*(1.-smoothstep(.72,.92,u)),1.,roll);',
    ' if(v>tF&&v<tM){ float lf=v<rF?.82:.42+.12*grain+.06*(rp-.4); float k=(1.-smoothstep(tM-.06,tM,v))*kF;',
    '   lum=mix(lum,lf,k); haze=k*.30; tintAmt*=1.-k; }',
    ' float top=tF;',
    /* ---------- side dunes ---------- */
    ' float uS=u+m.x*.012; float sil;',
    ' float pL=mix(.083,.16,roll)+.003*sin(T*.07), pR=mix(.985,.80,roll)-.003*sin(T*.06);',
    ' vec3 DL=dune(uS,v,pL,mix(.0,.10,roll),mix(.37,.30,roll),mix(.34,.12,roll),1.1,',
    '             pL+mix(.085,.06,roll),mix(.19,.16,roll),mix(.36,.26,roll),1.,grain,rpS,tF+.07,sil);',
        ' float silL=sil;',
    ' vec3 DR=dune(uS,v,pR,mix(.0,.08,roll),mix(.34,.32,roll),mix(.34,.12,roll),1.3,',
    '             pR-mix(.165,.07,roll),mix(.27,.15,roll),mix(.50,.26,roll),-1.,grain,rpS,tF+.07,sil);',
    ' float silR=sil;',
    ' top=min(top,min(silL,silR));',
    ' if(DR.y>0.){ lum=mix(lum,DR.x,DR.y); haze*=1.-DR.y; tintAmt=mix(tintAmt,DR.z,DR.y); }',
    ' if(DL.y>0.){ lum=mix(lum,DL.x,DL.y); haze*=1.-DL.y; tintAmt=mix(tintAmt,DL.z,DL.y); }',
    ' float inside=v-top;',
    ' lum+=.20*(1.-smoothstep(0.,.008,inside));',
    ' vec3 col=ramp(lum);',
    ' col=mix(col,cHaze,haze);',
    ' col=mix(col,cTint,tintAmt*.30*smoothstep(.4,.8,grain));',
    /* ---------- alpha: sky is transparent, dithered silhouette + bottom fade ---------- */
    ' float edge=smoothstep(-.003,.004,inside);',
    ' float vb=1.-fc.y/uRes.y; float fade=uFade>0.?1.-smoothstep(1.-uFade,1.,vb):1.;',
    ' float a=edge*fade;',
    /* ---------- dither ---------- */
    ' vec3 th;',
    ' if(uMode<.5){', /* blue-ish: interleaved gradient noise, decorrelated per channel */
    '   th=vec3(fract(52.9829189*fract(dot(fc,vec2(.06711056,.00583715)))),',
    '           fract(52.9829189*fract(dot(fc+vec2(17.,31.),vec2(.06711056,.00583715)))),',
    '           fract(52.9829189*fract(dot(fc+vec2(59.,7.),vec2(.06711056,.00583715)))));',
    ' } else if(uMode<1.5){', /* bayer 8x8 ordered */
    '   float bb=bayer8(fc);',
    '   th=vec3(bb,fract(bb+.37),fract(bb+.71));',
    ' } else { th=vec3(h2(fc),h2(fc+11.3),h2(fc+27.1)); }',
    ' vec3 sp=vec3(h2(fc*1.31+3.),h2(fc*0.77+9.),h2(fc*1.97+1.))-.5;',
    ' col+=sp*uSpeckle;',
    ' float L=max(uLevels-1.,1.);',
    ' col=floor(col*L+th)/L;',
    ' float at=h2(fc+71.7);',
    ' a=step(at+.0001,a);',
    ' gl_FragColor=vec4(clamp(col,0.,1.)*a,a);',
    '}'
  ].join('\n');

  function hex(h) {
    h = (h || '#000').replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(h, 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }
  function themeName() { return document.documentElement.getAttribute('data-theme') || 'default'; }
  function palette() { var t = CFG.themes || {}; return t[themeName()] || t['default'] || {}; }

  function useFallback(el) {
    el.classList.add('dunes--static');
    var shape = el.getAttribute('data-shape') || 'valley';
    function apply() {
      var fb = CFG.fallback || {};
      var src = fb[themeName()] || fb['default'];
      if (src) el.style.backgroundImage = 'url("' + (shape === 'rolling' ? src.replace(/\.png$/, '-rolling.png') : src) + '")';
    }
    apply();
    if (!el._fbObs) {
      el._fbObs = new MutationObserver(apply);
      el._fbObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
  }
  function Dunes(el) {
    this.el = el;
    this.canvas = el.querySelector('canvas') || el.appendChild(document.createElement('canvas'));
    this.canvas.setAttribute('aria-hidden', 'true');
    this.seed = parseFloat(el.getAttribute('data-seed') || '1');
    this.shape = (el.getAttribute('data-shape') || 'valley') === 'rolling' ? 1 : 0;
    this.mouse = [0, 0]; this.target = [0, 0];
    this.visible = true; this.t0 = performance.now(); this.last = 0;
    if (!CFG.enabled || !this.init()) { useFallback(el); this.dead = true; return; }
    el.classList.add('dunes--live');
    this.bind();
  }
  Dunes.prototype.init = function () {
    var gl;
    try { gl = this.canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, preserveDrawingBuffer: true }); } catch (e) { gl = null; }
    if (!gl) return false;
    function sh(type, src) {
      var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn('[dunes] shader:', gl.getShaderInfoLog(s)); return null; }
      return s;
    }
    var vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return false;
    var pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return false;
    gl.useProgram(pr);
    var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    this.gl = gl; this.pr = pr; this.u = {};
    var names = ['uRes', 'uTime', 'uMouse', 'uSeed', 'uShape', 'uLevels', 'uMode', 'uSpeckle', 'uRipple', 'uFade',
      'cDeep', 'cShade', 'cMid', 'cLit', 'cHi', 'cHaze', 'cTint'];
    for (var i = 0; i < names.length; i++) this.u[names[i]] = gl.getUniformLocation(pr, names[i]);
    this.applyStatic();
    return true;
  };
  Dunes.prototype.applyStatic = function () {
    var gl = this.gl, u = this.u, p = palette();
    var mode = { blue: 0, bayer: 1, white: 2 }[CFG.ditherMode]; if (mode == null) mode = 0;
    gl.uniform1f(u.uSeed, this.seed); gl.uniform1f(u.uShape, this.shape);
    gl.uniform1f(u.uLevels, p.levels != null ? p.levels : CFG.levels); gl.uniform1f(u.uMode, mode);
    gl.uniform1f(u.uSpeckle, p.speckle != null ? p.speckle : CFG.speckle); gl.uniform1f(u.uRipple, CFG.rippleScale);
    gl.uniform1f(u.uFade, CFG.fadeBottom);
    var keys = { cDeep: 'deep', cShade: 'shade', cMid: 'mid', cLit: 'lit', cHi: 'hi', cHaze: 'haze', cTint: 'tint' };
    for (var k in keys) gl.uniform3fv(u[k], hex(p[keys[k]]));
  };
  Dunes.prototype.resize = function () {
    var r = this.el.getBoundingClientRect(), ps = Math.max(1, CFG.pixelSize || 2);
    var w = Math.max(2, Math.round(r.width / ps)), h = Math.max(2, Math.round(r.height / ps));
    if (w !== this.canvas.width || h !== this.canvas.height) {
      this.canvas.width = w; this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }
    this.draw(true);
  };
  Dunes.prototype.draw = function (force) {
    if (this.dead) return;
    var gl = this.gl, motion = !reduce.matches;
    var t = motion ? (performance.now() - this.t0) / 1000 * (CFG.drift / 0.018) : 0;
    this.mouse[0] += (this.target[0] - this.mouse[0]) * 0.06;
    this.mouse[1] += (this.target[1] - this.mouse[1]) * 0.06;
    gl.uniform2f(this.u.uRes, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.u.uTime, t);
    gl.uniform2f(this.u.uMouse, this.mouse[0], this.mouse[1]);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  Dunes.prototype.bind = function () {
    var self = this;
    this.resize();
    if ('ResizeObserver' in window) new ResizeObserver(function () { self.resize(); }).observe(this.el);
    else window.addEventListener('resize', function () { self.resize(); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { self.visible = e[0].isIntersecting; }).observe(this.el);
    window.addEventListener('pointermove', function (e) {
      if (coarse.matches || reduce.matches || !CFG.parallax) return;
      self.target[0] = (e.clientX / innerWidth * 2 - 1) * CFG.parallax;
      self.target[1] = (e.clientY / innerHeight * 2 - 1) * CFG.parallax;
    }, { passive: true });
    new MutationObserver(function () { self.applyStatic(); self.draw(true); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    reduce.addEventListener && reduce.addEventListener('change', function () { self.draw(true); });
    function loop(now) {
      requestAnimationFrame(loop);
      if (!self.visible || document.hidden || reduce.matches || (!CFG.drift && !CFG.parallax)) return;
      if (now - self.last < 1000 / (CFG.fps || 30)) return;
      self.last = now; self.draw();
    }
    requestAnimationFrame(loop);
    this.canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); self.dead = true; useFallback(self.el); });
  };
  /* expose for README tooling: render a still to PNG -> FlowstackDunes.list[0].canvas.toDataURL() */
  function boot() {
    var list = [].slice.call(document.querySelectorAll('[data-dunes]')).map(function (el) { return new Dunes(el); });
    window.FlowstackDunes = { list: list, config: CFG };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
