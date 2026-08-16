/* ============================================================
   Portfolio interactions: theme toggle + animated terminal
   ============================================================ */

(function () {
  // ----- Theme toggle -----
  var toggle = document.querySelector('[data-theme-toggle]');
  var root = document.documentElement;
  var dark = matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');

  function syncToggle() {
    if (!toggle) return;
    var isDark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode');
    toggle.innerHTML = isDark
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener('click', function () {
      dark = !dark;
      root.setAttribute('data-theme', dark ? 'dark' : 'light');
      syncToggle();
    });
  }

  // ----- Animated terminal -----
  var out = document.getElementById('terminal-output');
  if (!out) return;

  var lines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'oreoluwa — IT & cybersecurity learner' },
    { type: 'cmd', text: 'cat posture.txt' },
    { type: 'out', text: '> 6 labs in progress  ·  Windows + Linux  ·  Python/Bash' },
    { type: 'cmd', text: 'git log --oneline -n 1' },
    { type: 'ok', text: 'latest commit: documented home-network hardening lab' },
    { type: 'cmd', text: './next-step --cert Security+' },
    { type: 'caret' }
  ];

  function span(cls, text) {
    return '<span class="' + cls + '">' + text + '</span>';
  }

  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    var html = '';
    lines.forEach(function (l) {
      if (l.type === 'cmd') html += span('prompt', '$ ') + l.text + '<br>';
      else if (l.type === 'out') html += l.text + '<br>';
      else if (l.type === 'ok') html += span('ok', '✓ ') + l.text + '<br>';
      else if (l.type === 'caret') html += span('caret', '');
    });
    out.innerHTML = html;
    return;
  }

  var i = 0;
  var typed = '';

  function render() {
    var html = '';
    for (var k = 0; k <= i; k++) {
      var l = lines[k];
      if (l.type === 'cmd') html += span('prompt', '$ ') + l.text + '<br>';
      else if (l.type === 'out') html += l.text + '<br>';
      else if (l.type === 'ok') html += span('ok', '✓ ') + l.text + '<br>';
      else if (l.type === 'caret') html += span('caret', '');
    }
    out.innerHTML = html;
  }

  function next() {
    if (i >= lines.length) {
      out.innerHTML += span('caret', '');
      return;
    }
    render();
    i++;
    setTimeout(next, 650);
  }

  // Start once the terminal is in view
  var started = false;
  function maybeStart() {
    if (started) return;
    var rect = out.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      started = true;
      next();
    }
  }
  window.addEventListener('scroll', maybeStart, { passive: true });
  maybeStart();
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
