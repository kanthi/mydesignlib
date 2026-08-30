document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('passModal');
  const openBtns = document.querySelectorAll('.open-pass-modal');
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

  // Audio Waveform Canvas Animation
  const canvas = document.getElementById('audioCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let step = 0;

  function drawWaveform() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    step += 0.05;

    const bars = 64;
    const barWidth = canvas.width / bars - 4;
    const cy = canvas.height / 2;

    for (let i = 0; i < bars; i++) {
      const height = Math.abs(Math.sin(step + i * 0.2) * Math.cos(step * 0.5 + i * 0.1)) * (canvas.height * 0.7) + 10;
      const x = i * (barWidth + 4) + 2;
      const y = cy - height / 2;

      const gradient = ctx.createLinearGradient(0, y, 0, y + height);
      gradient.addColorStop(0, '#ff2a8d');
      gradient.addColorStop(1, '#00f0ff');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, height);
    }

    requestAnimationFrame(drawWaveform);
  }

  drawWaveform();
});
