/* Toggle de modo claro/oscuro — mejora progresiva.
   Sin JS, el modo lo decide `prefers-color-scheme` (ver style.css)
   y este botón queda oculto (regla `.js .theme-toggle`). */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  var root = document.documentElement;

  function effective() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function paint(theme) {
    var next = theme === 'dark' ? 'claro' : 'oscuro';
    btn.setAttribute('aria-label', 'Activar el modo ' + next);
    var label = btn.querySelector('[data-label]');
    if (label) label.textContent = 'Modo ' + next;
  }

  paint(effective());

  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('md-theme', next); } catch (e) {}
    paint(next);
  });
})();
