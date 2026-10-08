// ==========================================================
// contact.js - form validation + WhatsApp message for contact.html
//
// When the student presses "Send my details":
//   1. every field is checked,
//   2. WhatsApp opens with ALL their details already typed
//      in a message to Orient Consultancy,
//   3. the student only has to press "Send" inside WhatsApp.
//
// Note: a website cannot press "Send" for the student. Only the
// student's own WhatsApp can send the message. (Fully automatic
// sending needs a backend - see the notes at the bottom.)
// ==========================================================
(function () {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('ct-success');
  if (!form || !success) return;

  // Orient Consultancy's WhatsApp number: country code + number, digits only.
  // Change it here and nowhere else.
  const WHATSAPP_NUMBER = '9779767259997';

  const fields = {
    name: document.getElementById('ct-name'),
    phone: document.getElementById('ct-phone'),
    email: document.getElementById('ct-email')
  };

  // ---------- helpers ----------
  // Show (or clear) an error message under a field
  function setError(key, message) {
    const box = document.getElementById('ct-' + key + '-error');
    const wrapper = box.closest('.ct-field');
    box.textContent = message;
    wrapper.classList.toggle('has-error', Boolean(message));
    const input = fields[key];
    if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  // Each check returns an error message, or "" when the value is fine
  const checks = {
    name: () => {
      const v = fields.name.value.trim();
      if (!v) return 'Please enter your full name.';
      if (v.length < 2) return 'Your name looks too short.';
      return '';
    },
    phone: () => {
      const v = fields.phone.value.trim();
      if (!v) return 'Please enter your phone or WhatsApp number.';
      const digits = v.replace(/\D/g, '');
      if (!/^[0-9+\-\s()]+$/.test(v) || digits.length < 7 || digits.length > 15) {
        return 'Enter a valid number, for example 98XXXXXXXX.';
      }
      return '';
    },
    email: () => {
      const v = fields.email.value.trim();
      if (!v) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email, for example you@example.com.';
      return '';
    },
    destination: () => {
      return form.querySelector('input[name="destination"]:checked')
        ? '' : 'Please choose a destination (or "Not sure yet").';
    }
  };

  // Check one field and show its error
  function validate(key) {
    const message = checks[key]();
    setError(key, message);
    return !message;
  }

  // Check while typing, but only after the person has left the field once
  ['name', 'phone', 'email'].forEach((key) => {
    fields[key].addEventListener('blur', () => validate(key));
    fields[key].addEventListener('input', () => {
      if (fields[key].closest('.ct-field').classList.contains('has-error')) validate(key);
    });
  });
  form.querySelectorAll('input[name="destination"]').forEach((radio) => {
    radio.addEventListener('change', () => validate('destination'));
  });

  // Build the WhatsApp message. *text* makes the label bold inside WhatsApp.
  function buildMessage(data) {
    let text =
      '*New enquiry from the Orient Consultancy website*\n\n' +
      '*Name:* ' + data.name + '\n' +
      '*Phone:* ' + data.phone + '\n' +
      '*Email:* ' + data.email + '\n' +
      '*Preferred destination:* ' + data.destination;
    if (data.message) text += '\n*Message:* ' + data.message;
    return text;
  }

  // ---------- submit ----------
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Run every check (do not stop at the first error)
    const results = ['name', 'phone', 'email', 'destination'].map((key) => ({ key, ok: validate(key) }));
    const firstBad = results.find((r) => !r.ok);
    if (firstBad) {
      // Move the cursor to the first field that needs fixing
      const target = fields[firstBad.key] || form.querySelector('input[name="destination"]');
      target.focus();
      return;
    }

    const data = {
      name: fields.name.value.trim(),
      phone: fields.phone.value.trim(),
      email: fields.email.value.trim(),
      destination: form.querySelector('input[name="destination"]:checked').value,
      message: document.getElementById('ct-message').value.trim()
    };

    // The link that opens WhatsApp with everything already typed in
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildMessage(data));

    // Keep the same link on the button, in case the browser blocks the pop-up
    document.getElementById('ct-whatsapp-send').href = url;

    // Open WhatsApp now (this runs right after the click, so browsers allow it)
    window.open(url, '_blank', 'noopener');

    document.getElementById('ct-success-name').textContent = data.name.split(' ')[0];
    form.hidden = true;
    success.hidden = false;
    success.focus();   // helps screen readers announce the message
  });

  // "Fill the form again" button
  document.getElementById('ct-reset').addEventListener('click', () => {
    form.reset();
    ['name', 'phone', 'email', 'destination'].forEach((key) => setError(key, ''));
    success.hidden = true;
    form.hidden = false;
    fields.name.focus();
  });
})();

/* ----------------------------------------------------------
   LATER (optional): fully automatic delivery, no tap needed.
   - Email copy of every enquiry: Formspree or EmailJS (free plans).
   - Real automatic WhatsApp: WhatsApp Business Cloud API, which
     needs a small backend (for example a Vercel serverless
     function) and a Meta business account. Not possible from
     plain HTML/CSS/JS alone.
   ---------------------------------------------------------- */