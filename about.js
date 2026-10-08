// ==========================================================
// about.js - one small extra for about.html
// The big ORIENT letters stay hollow. A letter turns orange only
// while the mouse is on its row (CSS does that) or while a finger
// is pressing on it (this file does that for touch screens).
// Nothing breaks if this file fails to load.
// ==========================================================
(function () {
  const rows = document.querySelectorAll('.ab-letters li');
  if (!rows.length) return;

  rows.forEach((row) => {
    let timer;

    const turnOn = () => row.classList.add('is-touch');
    const turnOff = () => {
      clearTimeout(timer);
      row.classList.remove('is-touch');
    };

    // Finger or pen pressed on the row (the mouse is handled by CSS :hover).
    // The short delay stops a flash of orange while someone is just scrolling.
    row.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      timer = setTimeout(turnOn, 80);
    });

    // Finger lifted, moved away, or the browser started scrolling
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((name) => {
      row.addEventListener(name, turnOff);
    });
  });
})();