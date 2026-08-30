document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('skyModal');
  const openBtns = document.querySelectorAll('.open-sky-modal');
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

  // Simulated Telemetry Dynamic Counter
  const tpsVal = document.getElementById('tpsCounter');
  if (tpsVal) {
    setInterval(() => {
      const base = 482500;
      const variation = Math.floor(Math.random() * 5000) - 2500;
      tpsVal.textContent = (base + variation).toLocaleString() + ' req/s';
    }, 1500);
  }
});
