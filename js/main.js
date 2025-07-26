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

window.addEventListener('load', () => {
  document.querySelector('.loader').style.display = 'none';
});

fetch('hero-desc-paragraphs.html')
  .catch(() => {
    heroDesc.innerHTML = "Classic Brand: Crafting Timeless Style";
  });

// main.js
// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('visible', window.scrollY > 300);
  });

  // Smooth scroll to top on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  });
}

window.addEventListener('scroll', () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / scrollableHeight) * 100;
  document.getElementById('scroll-progress').style.width = `${progress}%`;
});

window.addEventListener('load', () => {
  document.querySelector('.loader').style.display = 'none';
});
