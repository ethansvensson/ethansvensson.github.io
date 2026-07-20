(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function getStored() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  function store(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* ignore — falls back to session-only toggle */
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  var current = getStored() || 'dark';
  applyTheme(current);

  if (btn) {
    btn.addEventListener('click', function () {
      current = current === 'dark' ? 'light' : 'dark';
      applyTheme(current);
      store(current);
    });
  }

  // keep theme in sync if changed in another open tab
  window.addEventListener('storage', function (e) {
    if (e.key === 'theme' && e.newValue) {
      current = e.newValue;
      applyTheme(current);
    }
  });
})();
