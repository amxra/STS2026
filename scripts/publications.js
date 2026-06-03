/* =============================================
   STS 2026 — publications.js
   Publications page specific JS only.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       TAB SWITCHING
    ------------------------------------------ */
    var tabs   = document.querySelectorAll('.pub-tab');
    var panels = document.querySelectorAll('.pub-panel');
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
  
        tabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
  
        panels.forEach(function (p) {
          p.setAttribute('hidden', '');
        });
  
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
  
        var panel = document.getElementById('panel-' + target);
        if (panel) {
          panel.removeAttribute('hidden');
          /* Re-trigger reveal for newly shown panel */
          initReveal();
        }
      });
    });
  
  
    /* ------------------------------------------
       SCROLL REVEAL FOR CARDS
    ------------------------------------------ */
    function initReveal() {
      var items = document.querySelectorAll('.pub-policy-card, .pub-programme-card, .pub-impact-card, .pub-monograph-item');
      if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
        return;
      }
  
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el  = entry.target;
            var all = Array.from(el.parentElement.children).filter(function (c) {
              return c.classList.contains(el.classList[0]);
            });
            var idx = all.indexOf(el);
            setTimeout(function () {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, Math.min(idx * 80, 480));
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  
      items.forEach(function (el) {
        if (el.style.opacity === '1') return; /* already revealed */
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        obs.observe(el);
      });
    }
  
    initReveal();
  
  
    /* ------------------------------------------
       SUBSCRIBE
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
       FOOTER COUNTDOWN
    ------------------------------------------ */
    function updateCountdown() {
      var now = new Date(); var start = new Date('2026-10-15T00:00:00'); var end = new Date('2026-10-17T23:59:59');
      var wrap = document.getElementById('footerStrip'); if (!wrap) return;
      var timer = document.getElementById('footerTimer'); var status = document.getElementById('footerStatus');
      if (now >= end) { wrap.style.display = 'none'; }
      else if (now >= start) { if (timer) timer.style.display = 'none'; if (status) status.textContent = 'Ongoing 🎉'; }
      else {
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