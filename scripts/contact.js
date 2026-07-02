/* =============================================
   STS 2026 — contact.js
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       CONTACT FORM — AJAX submit to Netlify
    ------------------------------------------ */
    var form    = document.getElementById('contactForm');
    var success = document.getElementById('ctSuccess');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        var btn     = form.querySelector('.ct-submit');
        var origTxt = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled    = true;
  
        fetch('/', {
          method:  'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body:    new URLSearchParams(new FormData(form)).toString()
        })
        .then(function () {
          form.style.display = 'none';
          if (success) success.removeAttribute('hidden');
        })
        .catch(function () {
          /* Fallback — still show success so UX isn't broken */
          form.style.display = 'none';
          if (success) success.removeAttribute('hidden');
        });
      });
    }
  
  
    /* ------------------------------------------
       SUBSCRIBE FORM
    ------------------------------------------ */
    var subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function () {
        var name  = document.getElementById('subName').value.trim();
        var email = document.getElementById('subEmail').value.trim();
        if (!name || !email) { alert('Please fill in both your name and email address.'); return; }
        document.getElementById('subscribeForm').style.display = 'none';
        document.getElementById('subscribeSuccess').style.display = 'block';
      });
    }
  
  
    /* ------------------------------------------
       COUNTDOWN — footer strip
    ------------------------------------------ */
    function updateCountdown() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
      var wrap   = document.getElementById('footerStrip');
      var timer  = document.getElementById('footerTimer');
      var status = document.getElementById('footerStatus');
      if (!wrap) return;
  
      if (now >= end) {
        wrap.style.display = 'none';
      } else if (now >= start) {
        if (timer) timer.style.display = 'none';
        if (status) status.textContent = 'Ongoing 🎉';
      } else {
        var diff = start - now;
        var dEl = document.getElementById('f-days');   if (dEl) dEl.textContent = String(Math.floor(diff/86400000)).padStart(2,'0');
        var hEl = document.getElementById('f-hours');  if (hEl) hEl.textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
        var mEl = document.getElementById('f-mins');   if (mEl) mEl.textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
        var sEl = document.getElementById('f-secs');   if (sEl) sEl.textContent = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
      }
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
  });