/* =============================================
   STS 2026 — past-events.js
   Past Events page specific JS only.
   Shared behaviour lives in main.js.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       CARD STAGGER ANIMATION
    ------------------------------------------ */
    var cards = document.querySelectorAll('.pe-card');
    if ('IntersectionObserver' in window && cards.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(cards).indexOf(entry.target);
            setTimeout(function () {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  
      cards.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s, border-color 0.25s';
        observer.observe(card);
      });
    }
  
  
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
       COUNTDOWNS — hero + footer strips
    ------------------------------------------ */
    var strips = [
      { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
      { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
    ];
  
    function updateCountdowns() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
  
      strips.forEach(function (s) {
        var wrap   = document.getElementById(s.wrap);
        var timer  = document.getElementById(s.timer);
        var status = document.getElementById(s.status);
        if (!wrap) return;
  
        if (now >= end) {
          wrap.style.display = 'none';
        } else if (now >= start) {
          if (timer) timer.style.display = 'none';
          if (status) status.textContent = 'Ongoing 🎉';
        } else {
          var diff = start - now;
          var dEl = document.getElementById(s.days);   if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
          var hEl = document.getElementById(s.hours);  if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
          var mEl = document.getElementById(s.mins);   if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
          var sEl = document.getElementById(s.secs);   if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
        }
      });
    }
  
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  
  });