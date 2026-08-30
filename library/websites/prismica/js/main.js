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

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function drawPrism() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 20;

    // Incoming light ray from top-left
    const rayStartX = 50;
    const rayStartY = 80;

    ctx.beginPath();
    ctx.moveTo(rayStartX, rayStartY);
    ctx.lineTo(cx - 40, cy - 20);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw Glass Prism Pyramid
    ctx.beginPath();
    ctx.moveTo(cx, cy - 90);
    ctx.lineTo(cx + 80, cy + 60);
    ctx.lineTo(cx - 80, cy + 60);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Refracted Rainbow Spectral Beams on the Right
    const colors = ['#ff3366', '#ff9900', '#ffea00', '#33cc66', '#0099ff', '#8a2be2'];
    const count = colors.length;

    for (let i = 0; i < count; i++) {
      const spreadY = (cy - 30) + (i - count / 2) * (18 + Math.sin(Date.now() * 0.002 + i) * 3);
      const targetX = canvas.width - 60;
      const targetY = (cy - 20) + (i - count / 2) * (35 + (mouseX / canvas.width) * 20);

      ctx.beginPath();
      ctx.moveTo(cx + 40, cy - 10);
      ctx.quadraticCurveTo(cx + 140, spreadY, targetX, targetY);
      ctx.strokeStyle = colors[i];
      ctx.lineWidth = 3;
      ctx.shadowColor = colors[i];
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Glow particles at endpoint
      ctx.beginPath();
      ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors[i];
      ctx.fill();
    }

    requestAnimationFrame(drawPrism);
  }

  drawPrism();
});
