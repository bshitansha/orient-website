// ==========================================================
// country-redesign.js  (UPDATED - replaces the earlier version)
// New layout for these countries only:
//   South Korea, UK, Australia, USA, Japan,
//   Denmark, Germany, Malta, Dubai, Finland
// It reads the text from countries-data.js, so no new content is added.
// Any other country (Canada, New Zealand, Cyprus, Europe...) keeps the old layout.
// ==========================================================
(function () {
  const root = document.getElementById('country-root');
  if (!root || typeof COUNTRIES === 'undefined') return;

  // Which country is in the address? e.g. country.html?c=denmark
  const slug = new URLSearchParams(window.location.search).get('c');

  // ---------- SETTINGS FOR EACH COUNTRY ----------
  // flag      : the flag file in your images folder
  // showVisas : true  -> show the "We assist with" visa cards
  //             false -> skip it (Dubai & Finland pages on your live site
  //                      are a numbered list of reasons, not visa types)
  // To switch a country OFF, delete its line.
  const SETTINGS = {
    'south-korea': { flag: 'images/south-korea.svg', showVisas: true  },
    'uk':          { flag: 'images/uk.svg',          showVisas: true  },
    'australia':   { flag: 'images/australia.svg',   showVisas: true  },
    'usa':         { flag: 'images/usa.svg',         showVisas: true  },
    'japan':       { flag: 'images/japan.svg',       showVisas: true  },
    'denmark':     { flag: 'images/denmark.svg',     showVisas: true  },
    'germany':     { flag: 'images/germany.svg',     showVisas: true  },
    'malta':       { flag: 'images/malta.svg',       showVisas: true  },
    'dubai':       { flag: 'images/uae.svg',         showVisas: false },
    'finland':     { flag: 'images/finland.svg',     showVisas: false,
                     // closing line copied from your live Finland page (screenshot)
                     summary: 'Quality education + scholarships + safety + innovation + beautiful environment.' }
  };

  const s = SETTINGS[slug];
  if (!s || !COUNTRIES[slug]) return;

  const c = COUNTRIES[slug];
  const WHATSAPP = 'https://wa.me/9779767259997';

  // Make text safe before putting it into the page
  const esc = (t) => String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const CHECK = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // Page title + description for the browser tab / Google
  document.title = c.pageTitle + ' | Orient Consultancy Pvt. Ltd.';
  const meta = document.querySelector('meta[name="description"]');
  if (meta && c.metaDescription) meta.setAttribute('content', c.metaDescription);

  // ---------- "We assist with" (only when showVisas is true) ----------
  let visaSection = '';
  if (s.showVisas && c.visas && c.visas.length) {
    const visaCards = c.visas.map((v) =>
      '<article class="cd-visa">' +
        '<span class="cd-visa-code">' + esc(v.code) + '</span>' +
        '<h3>' + esc(v.label) + '</h3>' +
        '<p>' + esc(v.forWho) + '</p>' +
      '</article>'
    ).join('');

    visaSection =
      '<section class="cd-wrap cd-section" aria-labelledby="assist-heading">' +
        '<p class="cd-kicker">Orient Consultancy Nepal</p>' +
        '<h2 id="assist-heading">' + esc(c.visaIntro || 'We assist with:') + '</h2>' +
        '<div class="cd-visa-grid' + (c.visas.length === 1 ? ' is-single' : '') + '">' + visaCards + '</div>' +
      '</section>';
  }

  // ---------- "Why study in ..." ----------
  // Short points (Korea, UK, Denmark...)  -> tick list
  // Points with a description (Dubai, Finland) -> numbered cards
  const hasText = c.why.some((w) => w.text);

  let whySection;
  if (hasText) {
    const reasonCards = c.why.map((w, i) =>
      '<li class="cd-reason">' +
        '<span class="cd-reason-num">' + (i + 1) + '</span>' +
        '<div><h3>' + esc(w.title) + '</h3>' + (w.text ? '<p>' + esc(w.text) + '</p>' : '') + '</div>' +
      '</li>'
    ).join('');

    whySection =
      '<section class="cd-why cd-why-numbered" aria-labelledby="why-heading">' +
        '<div class="cd-wrap">' +
          '<p class="cd-kicker">Reasons to go</p>' +
          '<h2 id="why-heading">' + esc(c.whyTitle) + '</h2>' +
          '<ol class="cd-reason-grid">' + reasonCards + '</ol>' +
        '</div>' +
      '</section>';
  } else {
    const whyCards = c.why.map((w) =>
      '<li><span class="cd-tick">' + CHECK + '</span><span>' + esc(w.title) + '</span></li>'
    ).join('');

    whySection =
      '<section class="cd-why" aria-labelledby="why-heading">' +
        '<div class="cd-wrap">' +
          '<p class="cd-kicker">Reasons to go</p>' +
          '<h2 id="why-heading">' + esc(c.whyTitle) + '</h2>' +
          '<ul class="cd-why-grid">' + whyCards + '</ul>' +
        '</div>' +
      '</section>';
  }

  // ---------- Closing text / summary ----------
  let closingSection = '';
  if (c.closing) {
    closingSection =
      '<section class="cd-wrap cd-section" aria-label="How we help">' +
        '<blockquote class="cd-closing"><p>' + esc(c.closing) + '</p></blockquote>' +
      '</section>';
  } else if (s.summary) {
    closingSection =
      '<section class="cd-wrap cd-section" aria-label="Summary">' +
        '<blockquote class="cd-closing">' +
          '<p><strong>Summary:</strong> ' + esc(c.whyTitle) + '</p>' +
          '<p class="cd-closing-arrow">&rarr; ' + esc(s.summary) + '</p>' +
        '</blockquote>' +
      '</section>';
  }

  root.innerHTML = '' +
    // ---------- HERO ----------
    '<section class="cd-hero" aria-labelledby="page-title">' +
      '<div class="cd-wrap cd-hero-grid">' +
        '<div class="cd-hero-text">' +
          '<nav class="cd-breadcrumb" aria-label="Breadcrumb">' +
            '<a href="index.html">Home</a><span aria-hidden="true">/</span>' +
            '<span>Study destination</span><span aria-hidden="true">/</span>' +
            '<span aria-current="page">' + esc(c.name) + '</span>' +
          '</nav>' +
          '<h1 id="page-title">' + esc(c.pageTitle) + '</h1>' +
          '<p class="cd-hero-intro">' + esc(c.intro) + '</p>' +
          '<div class="cd-hero-buttons">' +
            '<a class="cd-btn cd-btn-orange" href="contact.html">Book Free Counseling</a>' +
            '<a class="cd-btn cd-btn-outline" href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp Us</a>' +
          '</div>' +
        '</div>' +
        '<figure class="cd-flag-frame">' +
          '<img src="' + s.flag + '" alt="Flag of ' + esc(c.name) + '" width="620" height="414">' +
        '</figure>' +
      '</div>' +
    '</section>' +

    visaSection +
    whySection +
    closingSection +

    // ---------- CTA ----------
    '<section class="cd-wrap cd-cta-wrap" aria-labelledby="cta-heading">' +
      '<div class="cd-cta">' +
        '<div>' +
          '<h2 id="cta-heading">Ready to study in ' + esc(c.name) + '?</h2>' +
          '<p>Book a counseling session with our team in Kathmandu.</p>' +
        '</div>' +
        '<div class="cd-cta-buttons">' +
          '<a class="cd-btn cd-btn-white" href="contact.html">Book Free Counseling</a>' +
          '<a class="cd-btn cd-btn-outline" href="tel:015338541">Call 01-5338541</a>' +
        '</div>' +
      '</div>' +
    '</section>';
})();
