/* ─────────────────────────────────────────────
   Tamiron Afrika Adventures — main.js
───────────────────────────────────────────── */

// ── CUSTOM CURSOR ──────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top  = my - 5 + 'px';
});

function animateRing() {
  rx += (mx - rx - 18) * 0.18;
  ry += (my - ry - 18) * 0.18;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, input, select, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform   = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform   = 'scale(1)';
  });
});

// ── NAV SCROLL EFFECT ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HERO KEN BURNS ─────────────────────────
window.addEventListener('load', () => {
  document.getElementById('hero').classList.add('loaded');
});

// ── HAMBURGER / MOBILE NAV ─────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

function closeMobileNav() {
  mobileNav.classList.remove('open');
}

// ── ITINERARY TABS ─────────────────────────
function showDay(index) {
  document.querySelectorAll('.itin-day-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.itin-panel').forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
}

// ── SCROLL REVEAL ──────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── STAGGER DELAYS ─────────────────────────
document.querySelectorAll('.stats-strip .stat').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.12) + 's';
});

document.querySelectorAll('.dest-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.1) + 's';
});

// ── CONTACT FORM ───────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}