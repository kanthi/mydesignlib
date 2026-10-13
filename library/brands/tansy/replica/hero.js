(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupMenus() {
    var items = document.querySelectorAll("[data-menu]");
    function closeAll() {
      items.forEach(function (item) {
        item.classList.remove("is-open");
        var btn = item.querySelector("button");
        var panel = item.querySelector(".panel");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (panel) panel.hidden = true;
      });
    }
    items.forEach(function (item) {
      var btn = item.querySelector("button");
      var panel = item.querySelector(".panel");
      if (!btn || !panel) return;
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        var open = item.classList.contains("is-open");
        closeAll();
        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
          panel.hidden = false;
        }
      });
    });
    document.addEventListener("click", closeAll);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeAll();
    });
  }

  function setupWord() {
    var wrap = document.querySelector("[data-word]");
    if (!wrap) return;
    var label = wrap.querySelector(".hero-word");
    var canvas = wrap.querySelector(".hero-canvas");
    if (!label || !canvas) return;
    var ctx = canvas.getContext("2d");
    var particles = [];
    var pointer = null;
    var bounds = { l: 0, t: 0, r: 0, b: 0 };
    var introDone = false;
    var startTime = 0;
    var dpr = 1;
    var lastW = 0;
    var lastH = 0;
    var resizeTimer = 0;
    var lastStamp = 0;
    var step = 3;

    function sample(keepHome) {
      var rect = wrap.getBoundingClientRect();
      var w = Math.max(1, rect.width);
      var h = Math.max(1, rect.height);
      if (particles.length && Math.abs(w - lastW) < 1 && Math.abs(h - lastH) < 1) return;
      lastW = w;
      lastH = h;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      var wordRect = label.getBoundingClientRect();
      var fontSize = parseFloat(getComputedStyle(label).fontSize) || 120;
      var off = document.createElement("canvas");
      off.width = canvas.width;
      off.height = canvas.height;
      var octx = off.getContext("2d", { willReadFrequently: true });
      octx.scale(dpr, dpr);
      octx.fillStyle = "#FEF3BB";
      octx.font = "800 " + fontSize + "px Nunito, sans-serif";
      octx.textBaseline = "alphabetic";
      var text = "Tansy";
      var tracking = -0.045 * fontSize;
      var chars = text.split("");
      var widths = chars.map(function (ch) { return octx.measureText(ch).width; });
      var total = widths.reduce(function (sum, n) { return sum + n; }, 0) + tracking * (chars.length - 1);
      var probe = octx.measureText(text);
      var ascent = probe.actualBoundingBoxAscent || fontSize * 0.78;
      var descent = probe.actualBoundingBoxDescent || fontSize * 0.22;
      var cx = wordRect.left - rect.left + wordRect.width / 2;
      var cy = wordRect.top - rect.top + wordRect.height / 2;
      var baseline = cy + (ascent - descent) / 2;
      var x0 = cx - total / 2;
      var x = x0;
      chars.forEach(function (ch, i) {
        octx.fillText(ch, x, baseline);
        x += widths[i] + tracking;
      });
      bounds = { l: x0, r: x0 + total, t: baseline - ascent, b: baseline + descent };

      var img = octx.getImageData(0, 0, off.width, off.height);
      step = Math.max(2, Math.round(3 * dpr));
      var next = [];
      var data = img.data;
      var span = off.width;
      for (var y = 0; y < off.height; y += step) {
        for (var px = 0; px < off.width; px += step) {
          if (data[(y * span + px) * 4 + 3] > 150) {
            next.push({ tx: px / dpr, ty: y / dpr, x: 0, y: 0, vx: 0, vy: 0, sx: 0, sy: 0 });
          }
        }
      }
      next.forEach(function (p) {
        if (keepHome) {
          p.x = p.tx;
          p.y = p.ty;
          return;
        }
        var ang = Math.random() * Math.PI * 2;
        var dist = 36 + Math.random() * 150;
        p.sx = p.tx + Math.cos(ang) * dist;
        p.sy = p.ty + Math.sin(ang) * dist * 0.62;
        p.x = p.sx;
        p.y = p.sy;
      });
      particles = next;
      if (!particles.length) {
        label.style.color = "#FEF3BB";
        return;
      }
      if (!keepHome) {
        introDone = false;
        startTime = performance.now();
      }
    }

    function frame(now) {
      var dt = Math.min(0.032, lastStamp ? (now - lastStamp) / 1000 : 0.016);
      lastStamp = now;
      if (!introDone) {
        var intro = Math.min(1, (now - startTime) / 900);
        var ease = 1 - Math.pow(1 - intro, 3);
        if (intro >= 1) introDone = true;
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x = p.sx + (p.tx - p.sx) * ease;
          p.y = p.sy + (p.ty - p.sy) * ease;
          p.vx = 0;
          p.vy = 0;
        }
      } else {
        var k = 28;
        var damp = 9;
        for (var j = 0; j < particles.length; j++) {
          var q = particles[j];
          var goalX = q.tx;
          var goalY = q.ty;
          if (pointer) {
            var ox = q.tx - pointer.x;
            var oy = q.ty - pointer.y;
            var dist = Math.hypot(ox, oy);
            if (dist < 100 && dist > 0.01) {
              var falloff = 1 - dist / 100;
              var mag = falloff * falloff * 54;
              goalX += (ox / dist) * mag;
              goalY += (oy / dist) * mag;
            }
          }
          q.vx += (-k * (q.x - goalX) - damp * q.vx) * dt;
          q.vy += (-k * (q.y - goalY) - damp * q.vy) * dt;
          q.x += q.vx * dt;
          q.y += q.vy * dt;
        }
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FEF3BB";
      var radius = step * 0.95;
      for (var n = 0; n < particles.length; n++) {
        var dot = particles[n];
        ctx.beginPath();
        ctx.arc(dot.x * dpr, dot.y * dpr, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }

    window.addEventListener("pointermove", function (event) {
      var r = canvas.getBoundingClientRect();
      var x = event.clientX - r.left;
      var y = event.clientY - r.top;
      if (x < bounds.l || x > bounds.r || y < bounds.t || y > bounds.b) {
        pointer = null;
        return;
      }
      pointer = { x: x, y: y };
    });
    window.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "touch") pointer = null;
    });

    sample(false);
    if (!particles.length) return;
    requestAnimationFrame(frame);
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { sample(introDone); }, 150);
      });
      ro.observe(wrap);
    }
  }

  setupMenus();
  if (reduce) return;
  var start = function () { setupWord(); };
  if (document.fonts && document.fonts.load) {
    document.fonts.ready.then(function () {
      document.fonts.load("800 180px Nunito").then(start).catch(start);
    });
  } else {
    start();
  }
})();
