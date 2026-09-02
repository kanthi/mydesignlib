document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.modal-close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Slider Controls
  const sliderLambda = document.getElementById('sliderLambda');
  const sliderIndex = document.getElementById('sliderIndex');
  const valLambda = document.getElementById('valLambda');
  const valIndex = document.getElementById('valIndex');

  let wavelength = 540;
  let refracIndex = 1.52;

  if (sliderLambda) {
    sliderLambda.addEventListener('input', (e) => {
      wavelength = parseInt(e.target.value, 10);
      if (valLambda) valLambda.textContent = `${wavelength} nm`;
    });
  }

  if (sliderIndex) {
    sliderIndex.addEventListener('input', (e) => {
      refracIndex = parseFloat(e.target.value);
      if (valIndex) valIndex.textContent = `${refracIndex.toFixed(2)}`;
    });
  }

  // Prism Canvas Simulator
  const canvas = document.getElementById('prismCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;
  let isHovered = false;

  canvas.addEventListener('mouseenter', () => { isHovered = true; });
  canvas.addEventListener('mouseleave', () => { isHovered = false; });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function wavelengthToColor(wl) {
    if (wl < 440) return '#8a2be2';
    if (wl < 490) return '#00bfff';
    if (wl < 550) return '#00ff88';
    if (wl < 590) return '#ffd700';
    if (wl < 640) return '#ff9900';
    return '#ff3366';
  }

  function drawPrism() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 10;

    // Incoming light ray
    const rayStartX = 40;
    const rayStartY = isHovered ? Math.max(30, Math.min(canvas.height - 30, mouseY)) : cy - 50;

    const incidentColor = wavelengthToColor(wavelength);

    ctx.beginPath();
    ctx.moveTo(rayStartX, rayStartY);
    ctx.lineTo(cx - 50, cy);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = incidentColor;
    ctx.shadowBlur = 14;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Center Glass Prism Geometry
    ctx.beginPath();
    ctx.moveTo(cx, cy - 90);
    ctx.lineTo(cx + 70, cy + 65);
    ctx.lineTo(cx - 70, cy + 65);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Internal Refraction path
    ctx.beginPath();
    ctx.moveTo(cx - 50, cy);
    ctx.lineTo(cx + 35, cy + 10);
    ctx.strokeStyle = incidentColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Refracted Rainbow Beams
    const spectralColors = ['#ff3366', '#ff9900', '#ffd700', '#00ff88', '#00bfff', '#8a2be2'];
    const count = spectralColors.length;
    const dispersionSpread = (refracIndex - 1.0) * 45;

    for (let i = 0; i < count; i++) {
      const offset = (i - count / 2) * (dispersionSpread / (count / 2));
      const targetX = canvas.width - 40;
      const targetY = (cy + 10) + offset + Math.sin(Date.now() * 0.003 + i) * 3;

      ctx.beginPath();
      ctx.moveTo(cx + 35, cy + 10);
      ctx.quadraticCurveTo(cx + 120, (cy + 10) + offset * 0.4, targetX, targetY);
      ctx.strokeStyle = spectralColors[i];
      ctx.lineWidth = 2.5;
      ctx.shadowColor = spectralColors[i];
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Glow particles at beam target
      ctx.beginPath();
      ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
      ctx.fillStyle = spectralColors[i];
      ctx.shadowColor = spectralColors[i];
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(drawPrism);
  }

  drawPrism();
});
