// ==========================================================
// country.js - builds a country page from countries-data.js
// The address decides which country is shown:
//   country.html?c=south-korea   ->  COUNTRIES["south-korea"]
// With no country in the address, the page shows a destination picker.
// REQUIRED: countries-data.js must be loaded BEFORE this file (see country.html).
// ==========================================================
(function () {
  const root = document.getElementById('country-root');
  if (!root) return;

  // If the data file did not load, say so instead of showing a blank page
  if (typeof COUNTRIES === 'undefined') {
    root.innerHTML = '<p class="cn-message">The file <strong>countries-data.js</strong> could not be loaded. ' +
      'Check that it is in the same folder as country.html and spelled exactly like that.</p>';
    return;
  }

  const WHATSAPP = 'https://wa.me/9779767259997';
   const countryUrl = (k) => (k === 'south-korea' ? 'korea' : k);
  function getSlug() {
    const q = new URLSearchParams(window.location.search).get('c');
    if (q) return q;
    const seg = window.location.pathname.replace(/\/+$/, '').split('/').pop().replace(/\.html$/, '');
    const key = seg === 'korea' ? 'south-korea' : seg;
    return COUNTRIES[key] ? key : null;
  }
  const slug = getSlug();
  const country = COUNTRIES[slug];

  // ---------- small helpers ----------
  // Make text safe before putting it into the page
  const esc = (t) => String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const CHECK = '<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const PLANE = '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15.5v-1.7l-8-5V3.5a1.5 1.5 0 00-3 0v5.3l-8 5v1.7l8-2.4v4.6l-2 1.5V22l3.5-1 3.5 1v-1.8l-2-1.5v-4.6l8 2.4z" fill="currentColor"/></svg>';

  // A flag image. If images/flags/x.svg is missing it tries a few other names, then hides itself.
  function flag(c, size, cls) {
    const a = c.flag;
    const b = a.replace('/flags/', '/');
    const d = b.replace('new-zealand', 'newzealand');
    const tries = [b, d].filter((x, i, all) => x !== a && all.indexOf(x) === i);
    return '<img class="cn-flag ' + cls + '" src="' + esc(a) + '" data-tries="' + esc(tries.join('|')) + '" alt="" width="' + size + '" height="' + Math.round(size * 0.7) + '">';
  }
  document.addEventListener('error', (event) => {
    const img = event.target;
    if (!img || img.tagName !== 'IMG' || !img.classList.contains('cn-flag')) return;
    const next = (img.dataset.tries || '').split('|').filter(Boolean);
    if (next.length) {
      img.dataset.tries = next.slice(1).join('|');
      img.src = next[0];
    } else {
      img.style.visibility = 'hidden';
    }
  }, true);

  const list = (items, cls) =>
    '<ul class="' + cls + '">' + items.map((i) => '<li>' + CHECK + '<span>' + esc(i) + '</span></li>').join('') + '</ul>';

  const studyName = (c) => c.short || c.name;

  function ctaBand(c) {
    return '' +
      '<section class="cn-wrap cn-cta-wrap" aria-labelledby="cta-heading">' +
        '<div class="cn-cta">' +
          '<div class="cn-cta-top">' +
            '<div>' +
              '<p class="cn-kicker cn-kicker-light">Your next step starts here</p>' +
              '<h2 id="cta-heading">Ready To Study In ' + esc(c.name) + '?</h2>' +
              '<p>Book a counseling session and get a personalized study plan for your preferred destination.</p>' +
            '</div>' +
            '<div class="cn-cta-buttons">' +
              '<a class="btn btn-white" href="contact.html">Book Free Counseling</a>' +
              '<a class="btn btn-ghost" href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp Us</a>' +
            '</div>' +
          '</div>' +
          '<ul class="cn-cta-contact">' +
            '<li><a href="tel:015338541">☎ 01-5338541</a></li>' +
            '<li><a href="mailto:orientconsultancynepal@gmail.com">✉ orientconsultancynepal@gmail.com</a></li>' +
            '<li>⚲ PK Campus, Bagbazar-28, Kathmandu</li>' +
          '</ul>' +
        '</div>' +
      '</section>';
  }

  function otherDestinations(currentKey) {
    return COUNTRY_ORDER.filter((k) => k !== currentKey && COUNTRIES[k]).map((k) => {
      const c = COUNTRIES[k];
      return '<a class="cn-dest" href="country.html?c=' + k + '">' + flag(c, 22, 'cn-dest-flag') + '<span>' + esc(c.name) + '</span></a>';
    }).join('');
  }

  // ---------- 1. No country chosen, or an unknown one: destination picker ----------
  if (!country) {
    const unknown = Boolean(slug);
    document.title = 'Study Destinations | Orient Consultancy Pvt. Ltd.';
    root.innerHTML = '' +
      '<section class="cn-hero cn-hero-short" aria-labelledby="page-title">' +
        '<div class="cn-hero-inner">' +
          '<p class="cn-kicker cn-kicker-light">Study destination</p>' +
          '<h1 id="page-title">' + (unknown ? 'We could not find that destination' : 'Where do you want to study?') + '</h1>' +
          '<p class="cn-hero-sub">Choose a country to see intakes, visa types, reasons to study there and how we help.</p>' +
        '</div>' +
      '</section>' +
      '<section class="cn-wrap cn-picker" aria-label="All destinations">' +
        COUNTRY_ORDER.filter((k) => COUNTRIES[k]).map((k) => {
          const c = COUNTRIES[k];
          return '<a class="cn-pick-card" href="country.html?c=' + k + '">' +
            flag(c, 44, 'cn-pick-flag') +
            '<h2>' + esc(c.name) + '</h2>' +
            '<p>' + esc(c.tagline) + '</p>' +
            '<span class="cn-pick-meta">Intakes: ' + esc(c.intakes) + '</span>' +
          '</a>';
        }).join('') +
      '</section>' +
      ctaBand({ name: 'Abroad' }).replace('Study In Abroad', 'Study Abroad');
    return;
  }

  // ---------- 2. A real country page ----------
  const c = country;
  const nm = studyName(c);
  document.title = c.pageTitle + ' | Orient Consultancy Pvt. Ltd.';
  const meta = document.querySelector('meta[name="description"]');
  if (meta && c.metaDescription) meta.setAttribute('content', c.metaDescription);

  // Hero: title + boarding-pass ticket (Kathmandu -> the destination)
  const facts = [
    ['Intakes', c.intakes],
    ['Visa', c.visaTypes],
    ['Study language', c.language],
    ['Currency', c.currency],
    ['Capital', c.capital]
  ];
  const hero = '' +
    '<section class="cn-hero" aria-labelledby="page-title">' +
      '<div class="cn-hero-inner">' +
        '<nav class="cn-breadcrumb" aria-label="Breadcrumb">' +
          '<a href="index.html">Home</a><span aria-hidden="true">/</span>' +
          '<a href="country.html">Study destination</a><span aria-hidden="true">/</span>' +
          '<span aria-current="page">' + esc(c.name) + '</span>' +
        '</nav>' +
        '<p class="cn-kicker cn-kicker-light">' + esc(c.pageTitle) + '</p>' +
        '<h1 id="page-title"><span>Study in</span> ' + esc(nm.replace(/^the /, '')) + '</h1>' +
        '<p class="cn-hero-sub">' + esc(c.tagline) + '</p>' +

        '<div class="cn-ticket-wrap">' +
          '<div class="cn-ticket">' +
            '<div class="cn-ticket-main">' +
              '<div class="cn-route" aria-label="Route from Kathmandu to ' + esc(c.gateway.city) + '">' +
                '<div><strong>KTM</strong><span>Kathmandu</span></div>' +
                '<div class="cn-route-line" aria-hidden="true"><i></i>' + PLANE + '<i></i></div>' +
                '<div class="cn-route-to"><strong>' + esc(c.gateway.code) + '</strong><span>' + esc(c.gateway.city) + '</span></div>' +
              '</div>' +
              '<dl class="cn-facts">' +
                facts.map((f) => '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>').join('') +
              '</dl>' +
            '</div>' +
            '<div class="cn-ticket-stub">' +
              flag(c, 64, 'cn-stub-flag') +
              '<p>Your pass to ' + esc(c.name) + '</p>' +
              '<a class="btn btn-accent" href="contact.html">Book counseling ' + ARROW + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  // Sticky section menu
  const navItems = [
    ['overview', 'Overview'],
    ['visa', 'Visa'],
    ['why', 'Why ' + c.name],
    ['help', 'How we help'],
    ['faq', 'FAQ'],
    ['destinations', 'Other destinations']
  ];
  const sectionNav = '' +
    '<nav class="cn-subnav" aria-label="On this page"><ul class="cn-wrap">' +
      navItems.map((n) => '<li><a href="#' + n[0] + '">' + esc(n[1]) + '</a></li>').join('') +
    '</ul></nav>';

  // Overview
  const overview = '' +
    '<section class="cn-wrap cn-overview" id="overview" aria-labelledby="overview-heading">' +
      '<div class="cn-overview-text">' +
        '<p class="cn-kicker">Overview</p>' +
        '<h2 id="overview-heading">Study in ' + esc(nm) + ' with Orient Consultancy</h2>' +
        '<p class="cn-lead">' + esc(c.intro) + '</p>' +
        (c.closing ? '<p>' + esc(c.closing) + '</p>' : '') +
      '</div>' +
      '<aside class="cn-talk" aria-labelledby="talk-heading">' +
        '<h3 id="talk-heading">Talk to a counselor</h3>' +
        '<p>Tell us your course, budget and intake. We will suggest what fits.</p>' +
        '<a class="btn btn-accent" href="contact.html">Book Free Counseling</a>' +
        '<a class="cn-talk-link" href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp 976-7259997</a>' +
        '<a class="cn-talk-link" href="tel:015338541">Call 01-5338541</a>' +
      '</aside>' +
    '</section>';

  // Visa
  const visaCards = c.visas.map((v) => {
    const hasDetail = (v.highlights && v.highlights.length) || (v.documents && v.documents.length);
    return '' +
      '<article class="cn-visa' + (hasDetail ? ' cn-visa-wide' : '') + '">' +
        '<header>' +
          '<p class="cn-visa-code">' + esc(v.code) + '</p>' +
          '<h3>' + esc(v.label) + '</h3>' +
        '</header>' +
        '<p class="cn-visa-for">' + esc(v.forWho) + '</p>' +
        (v.about ? '<p class="cn-visa-about">' + esc(v.about) + '</p>' : '') +
        (hasDetail ?
          '<div class="cn-visa-lists">' +
            (v.highlights && v.highlights.length ? '<div><h4>What it covers</h4>' + list(v.highlights, 'cn-checks') + '</div>' : '') +
            (v.documents && v.documents.length ? '<div><h4>Documents usually needed</h4>' + list(v.documents, 'cn-checks') + '</div>' : '') +
          '</div>' : '') +
      '</article>';
  }).join('');

  const visa = '' +
    '<section class="cn-visa-section" id="visa" aria-labelledby="visa-heading">' +
      '<div class="cn-wrap">' +
        '<p class="cn-kicker">Visa guidance</p>' +
        '<h2 id="visa-heading">' + esc(c.visaIntro || 'We assist with:') + '</h2>' +
        '<div class="cn-visa-grid' + (c.visas.length === 1 ? ' is-single' : '') + '">' + visaCards + '</div>' +
        (c.visaNote ? '<p class="cn-note">' + esc(c.visaNote) + '</p>' : '') +
      '</div>' +
    '</section>';

  // Why
  const whyHasText = c.why.some((w) => w.text);
  const why = '' +
    '<section class="cn-wrap cn-why" id="why" aria-labelledby="why-heading">' +
      '<p class="cn-kicker">Reasons to go</p>' +
      '<h2 id="why-heading">' + esc(c.whyTitle) + '</h2>' +
      '<ul class="cn-why-grid' + (whyHasText ? ' has-text' : '') + '">' +
        c.why.map((w) => '<li><span class="cn-tick" aria-hidden="true">' + CHECK + '</span><div><h3>' + esc(w.title) + '</h3>' + (w.text ? '<p>' + esc(w.text) + '</p>' : '') + '</div></li>').join('') +
      '</ul>' +
    '</section>';

  // How we help
  const help = '' +
    '<section class="cn-help" id="help" aria-labelledby="help-heading">' +
      '<div class="cn-wrap cn-help-grid">' +
        '<div class="cn-help-intro">' +
          '<p class="cn-kicker cn-kicker-light">How Orient helps</p>' +
          '<h2 id="help-heading">From first call to your flight</h2>' +
          '<p>One team supports you through every stage of your ' + esc(c.name) + ' application.</p>' +
        '</div>' +
        '<ol class="cn-steps">' +
          c.steps.map((s) => '<li><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>').join('') +
        '</ol>' +
      '</div>' +
    '</section>';

  // FAQ (native <details>: opens and closes without any JavaScript)
  const faq = '' +
    '<section class="cn-wrap cn-faq" id="faq" aria-labelledby="faq-heading">' +
      '<p class="cn-kicker">Questions students ask</p>' +
      '<h2 id="faq-heading">' + esc(c.name) + ' FAQ</h2>' +
      '<div class="cn-faq-list">' +
        COMMON_FAQ.map((f) => '<details><summary>' + esc(f.q.replace('{name}', nm)) + '</summary><p>' + esc(f.a) + '</p></details>').join('') +
      '</div>' +
    '</section>';

  // Other destinations
  const others = '' +
    '<section class="cn-wrap cn-others" id="destinations" aria-labelledby="others-heading">' +
      '<h2 id="others-heading">Explore other destinations</h2>' +
      '<div class="cn-dest-list">' + otherDestinations(slug) + '</div>' +
    '</section>';

  root.innerHTML = hero + sectionNav + overview + visa + why + help + faq + others + ctaBand(c);

  // Highlight the menu item of the section you are reading
  const links = root.querySelectorAll('.cn-subnav a');
  const sections = navItems.map((n) => document.getElementById(n[0])).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          if (l.getAttribute('href') === '#' + entry.target.id) l.setAttribute('aria-current', 'true');
          else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach((s) => spy.observe(s));
  }
})();
