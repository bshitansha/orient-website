// ==========================================================
// script.js - shared by EVERY page (header + small helpers)
// Safe on any page: if something is missing, it just skips it.
// ==========================================================
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  const desktop = window.matchMedia('(min-width: 768px)');

  // 1. Header gets a soft shadow once you scroll
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. Hamburger button (phone / tablet)
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  }

  // 3. "Study destination" dropdown + "Other European Countries" side menu
  function closeDropdowns(except) {
    document.querySelectorAll('.has-dropdown.open, .has-sub.open').forEach((li) => {
      if (except && li.contains(except)) return;
      li.classList.remove('open');
      const btn = li.querySelector(':scope > .dropdown-toggle, :scope > .sub-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }
  document.querySelectorAll('.dropdown-toggle, .sub-toggle').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const li = btn.parentElement;
      const willOpen = !li.classList.contains('open');
      closeDropdowns(li);                       // close the others
      li.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  // Click outside or press Esc = close everything
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-nav') && !event.target.closest('.nav-toggle')) {
      closeDropdowns();
      if (!desktop.matches) setMenu(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeDropdowns(); setMenu(false); }
  });
  // Going back to a wide window: reset the mobile menu
  desktop.addEventListener('change', () => { setMenu(false); closeDropdowns(); });

  // 4. Desktop only: sliding highlight behind the menu items
  const list = document.querySelector('.main-nav > ul');
  if (list) {
    const bar = document.createElement('span');
    bar.className = 'nav-indicator';
    list.prepend(bar);
    list.querySelectorAll(':scope > li').forEach((li) => {
      li.addEventListener('mouseenter', () => {
        if (!desktop.matches) return;
        bar.style.width = li.offsetWidth + 'px';
        bar.style.transform = 'translateX(' + li.offsetLeft + 'px)';
        bar.style.opacity = '1';
      });
    });
    list.addEventListener('mouseleave', () => { bar.style.opacity = '0'; });
  }

  // 5. Flag pictures: your flags are in images/ (not images/flags/).
  //    If a flag is not found, try the other folder, then hide it.
  document.addEventListener('error', (event) => {
    const img = event.target;
    if (!img || img.tagName !== 'IMG' || !img.matches('.dd-flag, .hm-flag')) return;
    const src = img.getAttribute('src');
    const fixed = src.replace('/flags/', '/').replace('new-zealand', 'newzealand');
    if (!img.dataset.retry && fixed !== src) {
      img.dataset.retry = '1';
      img.src = fixed;
    } else {
      img.style.visibility = 'hidden';
    }
  }, true);
})();


/*mobile animations*/

// ==========================================================
// MOBILE SCROLL ANIMATIONS (phones only, under 768px)
// Cards and sections fade + rise as you scroll down to them.
// Skipped automatically if the phone has "reduce motion" on.
// ==========================================================
(function () {
  const phone = window.matchMedia('(max-width: 767px)');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!phone.matches || calm.matches || !('IntersectionObserver' in window)) return;

  const items = document.querySelectorAll([
    // home page
    '.hm-step', '.hm-dest', '.hm-service', '.hm-why-text', '.hm-why-list li', '.hm-faq details', '.hm-cta',
    // about page
    '.ab-facts > div', '.ab-story-text', '.ab-route', '.ab-strength', '.ab-orient-intro',
    '.ab-letters li', '.ab-team-head', '.ab-person', '.ab-cta',
    // services page
    '.svc-card', '.svc-cta',
    // contact page
    '.ct-form-card', '.ct-details', '.ct-map-card'
  ].join(','));

  const io = new IntersectionObserver((entries) => {
    let n = 0;                                   // small delay between cards that appear together
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.setProperty('--m-delay', Math.min(n++ * 0.09, 0.45) + 's');
      el.classList.add('m-in');
      io.unobserve(el);
      // when the animation is finished, give the element back to its normal CSS (hover, press, etc.)
      setTimeout(() => {
        el.classList.remove('m-reveal', 'm-in');
        el.style.removeProperty('--m-delay');
      }, 1300);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });

  items.forEach((el) => {
    el.classList.add('m-reveal');
    io.observe(el);
  });
})();
