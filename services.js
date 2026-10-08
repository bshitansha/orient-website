// ==========================================================
// services.js - one small extra for services.html
// As you scroll, the service nearest the top of the screen is
// highlighted in the "Our services" list (aria-current="true").
// Clicking a link scrolls to that service (CSS handles the smooth scroll).
// Nothing breaks if this file fails to load.
// ==========================================================
(function () {
  const cards = document.querySelectorAll('.svc-card');
  const links = document.querySelectorAll('.svc-index a');
  if (!cards.length || !links.length || !('IntersectionObserver' in window)) return;

  function highlight(id) {
    links.forEach((link) => {
      const active = link.getAttribute('href') === '#' + id;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  // Only watch a band near the top of the screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) highlight(entry.target.id);
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  cards.forEach((card) => observer.observe(card));
  highlight(cards[0].id);   // first service is highlighted on load
})();