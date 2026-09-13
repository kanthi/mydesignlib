// glass-card.js — Real-time 2D Canvas video projection & refraction sync
(function () {
  const video = document.getElementById('bg-video');
  const card = document.querySelector('[data-glass-card]');
  const container = document.getElementById('dup-video-container');
  const canvas = document.getElementById('dup-image');

  if (!video || !card || !container || !canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let lastW = 0, lastH = 0;

  function render() {
    requestAnimationFrame(render);

    if (video.readyState < 2 || !video.videoWidth || !video.videoHeight) {
      return;
    }

    const rect = card.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    // Position container at inverse offset of card relative to viewport
    container.style.left = `${-rect.left}px`;
    container.style.top = `${-rect.top}px`;
    container.style.width = `${vw}px`;
    container.style.height = `${vh}px`;

    // Resize canvas if viewport changed
    if (lastW !== vw || lastH !== vh) {
      canvas.width = vw;
      canvas.height = vh;
      lastW = vw;
      lastH = vh;
    }

    // Draw video frame matching object-fit: cover
    try {
      const cover = Math.max(vw / video.videoWidth, vh / video.videoHeight);
      const sw = vw / cover;
      const sh = vh / cover;
      const sx = (video.videoWidth - sw) / 2;
      const sy = (video.videoHeight - sh) / 2;
      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, vw, vh);
    } catch (e) {
      // Frame may not be decodable yet
    }
  }

  requestAnimationFrame(render);
})();
