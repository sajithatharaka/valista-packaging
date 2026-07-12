// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Sticky header shadow
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  });
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
if (menuToggle && mobilePanel) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('open');
    document.body.classList.toggle('mobile-menu-open', isOpen);
  });
  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.classList.remove('open');
      document.body.classList.remove('mobile-menu-open');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Highlight current day in hours table
const today = new Date().getDay();
const row = document.querySelector('.hours-table tr[data-day="' + today + '"]');
if (row) row.classList.add('today');

// Duplicate marquee content for seamless loop
const track = document.getElementById('marqueeTrack');
if (track) track.innerHTML += track.innerHTML;

// Cookie consent banner
const cookieBanner = document.getElementById('cookieConsent');
const cookieAccept = document.getElementById('cookieAccept');
if (cookieBanner && cookieAccept) {
  if (!localStorage.getItem('vp_cookie_consent')) {
    cookieBanner.hidden = false;
    document.body.classList.add('cookie-banner-open');
  }
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('vp_cookie_consent', 'accepted');
    cookieBanner.hidden = true;
    document.body.classList.remove('cookie-banner-open');
  });
}
