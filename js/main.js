/* ══════════════════════════════════════════════
   Dr. Ramarao Maharaj Primary School
   Shared JavaScript — main.js
   ══════════════════════════════════════════════ */

/* ── Mobile nav toggle ── */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ── Close nav when a link is clicked on mobile ── */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  /* ── Mark active nav link based on current page ── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });
});
