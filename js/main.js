document.addEventListener('DOMContentLoaded', function () {
    // Navbar hamburger toggle for mobile
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
    }
  
    // Background music setup
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
      // Try to autoplay (may be blocked by browser policy)
      bgMusic.play().catch(() => {
        // Autoplay was prevented; will retry on user interaction
      });
  
      // Play music on first user interaction (browser policy workaround)
      function enableMusic() {
        if (bgMusic.paused) {
          bgMusic.play();
        }
        document.removeEventListener('click', enableMusic);
      }
      document.addEventListener('click', enableMusic);
  
      // Mute/unmute button
      const musicToggleBtn = document.getElementById('toggle-music');
      if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', function () {
          bgMusic.muted = !bgMusic.muted;
          this.textContent = bgMusic.muted ? '🔈' : '🔊';
        });
      }
    }
  
    // Theme (mode) toggle button
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        // Optionally switch icon
        this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
      });
    }
  });