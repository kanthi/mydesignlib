document.addEventListener('DOMContentLoaded', () => {
  // Modal toggle
  const modal = document.getElementById('callModal');
  const openBtns = document.querySelectorAll('.open-call-modal');
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

  // Terminal Typing & Interactive Commands
  const termBody = document.getElementById('termOutput');
  const termInput = document.getElementById('termInput');

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim().toLowerCase();
        termInput.value = '';
        appendTerminalLine(`> aegis ${cmd}`);

        if (cmd === 'status') {
          appendTerminalLine('[OK] Air-gap network integrity: 100%');
          appendTerminalLine('[OK] Autonomous agent cluster active: 1,024 nodes');
        } else if (cmd === 'scan') {
          appendTerminalLine('[INFO] Scanning vector memory buffers...');
          appendTerminalLine('[INFO] Zero vulnerabilities detected across 48 micro-services.');
        } else if (cmd === 'help') {
          appendTerminalLine('Available commands: status, scan, clear, help');
        } else if (cmd === 'clear') {
          termBody.innerHTML = '';
        } else {
          appendTerminalLine(`[ERR] Command unknown: '${cmd}'. Type 'help' for options.`);
        }
      }
    });
  }

  function appendTerminalLine(text) {
    const line = document.createElement('div');
    line.textContent = text;
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }
});
