/* =============================================
   STS 2026 — partners.js
   Partners page specific JS only.
   Shared behaviour lives in main.js.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       COUNTRIES
    ------------------------------------------ */
    var COUNTRIES = [
      {name:'Afghanistan',code:'+93'},{name:'Algeria',code:'+213'},{name:'Angola',code:'+244'},
      {name:'Argentina',code:'+54'},{name:'Australia',code:'+61'},{name:'Austria',code:'+43'},
      {name:'Bangladesh',code:'+880'},{name:'Belgium',code:'+32'},{name:'Benin',code:'+229'},
      {name:'Brazil',code:'+55'},{name:'Burkina Faso',code:'+226'},{name:'Cameroon',code:'+237'},
      {name:'Canada',code:'+1'},{name:'Chad',code:'+235'},{name:'China',code:'+86'},
      {name:'Colombia',code:'+57'},{name:'Congo',code:'+242'},{name:'DR Congo',code:'+243'},
      {name:'Denmark',code:'+45'},{name:'Egypt',code:'+20'},{name:'Ethiopia',code:'+251'},
      {name:'France',code:'+33'},{name:'Germany',code:'+49'},{name:'Ghana',code:'+233'},
      {name:'Greece',code:'+30'},{name:'Guinea',code:'+224'},{name:'India',code:'+91'},
      {name:'Indonesia',code:'+62'},{name:'Ireland',code:'+353'},{name:'Israel',code:'+972'},
      {name:'Italy',code:'+39'},{name:'Japan',code:'+81'},{name:'Jordan',code:'+962'},
      {name:'Kenya',code:'+254'},{name:'Kuwait',code:'+965'},{name:'Lebanon',code:'+961'},
      {name:'Liberia',code:'+231'},{name:'Madagascar',code:'+261'},{name:'Malawi',code:'+265'},
      {name:'Malaysia',code:'+60'},{name:'Mali',code:'+223'},{name:'Mauritius',code:'+230'},
      {name:'Mexico',code:'+52'},{name:'Morocco',code:'+212'},{name:'Mozambique',code:'+258'},
      {name:'Namibia',code:'+264'},{name:'Netherlands',code:'+31'},{name:'New Zealand',code:'+64'},
      {name:'Niger',code:'+227'},{name:'Nigeria',code:'+234'},{name:'Norway',code:'+47'},
      {name:'Pakistan',code:'+92'},{name:'Philippines',code:'+63'},{name:'Poland',code:'+48'},
      {name:'Portugal',code:'+351'},{name:'Qatar',code:'+974'},{name:'Rwanda',code:'+250'},
      {name:'Saudi Arabia',code:'+966'},{name:'Senegal',code:'+221'},{name:'Sierra Leone',code:'+232'},
      {name:'Singapore',code:'+65'},{name:'Somalia',code:'+252'},{name:'South Africa',code:'+27'},
      {name:'South Korea',code:'+82'},{name:'South Sudan',code:'+211'},{name:'Spain',code:'+34'},
      {name:'Sudan',code:'+249'},{name:'Sweden',code:'+46'},{name:'Switzerland',code:'+41'},
      {name:'Tanzania',code:'+255'},{name:'Togo',code:'+228'},{name:'Tunisia',code:'+216'},
      {name:'Turkey',code:'+90'},{name:'Uganda',code:'+256'},{name:'United Arab Emirates',code:'+971'},
      {name:'United Kingdom',code:'+44'},{name:'United States',code:'+1'},
      {name:'Zambia',code:'+260'},{name:'Zimbabwe',code:'+263'}
    ];
  
    var sorted  = COUNTRIES.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
    var nigeria = sorted.find(function(c){ return c.name === 'Nigeria'; });
  
    var countryEl = document.getElementById('pt-country');
    if (countryEl) {
      sorted.forEach(function(c) { var o = document.createElement('option'); o.value = c.name; o.textContent = c.name; countryEl.appendChild(o); });
    }
  
    var dialEl = document.getElementById('pt-dialCode');
    if (dialEl) {
      var nig = document.createElement('option'); nig.value = nigeria.code; nig.textContent = 'Nigeria ' + nigeria.code; dialEl.appendChild(nig);
      sorted.forEach(function(c) {
        if (c.name === 'Nigeria') return;
        var o = document.createElement('option'); o.value = c.code; o.textContent = c.name + ' ' + c.code; dialEl.appendChild(o);
      });
    }
  
  
    /* ------------------------------------------
       PARTNER FORM SUBMIT
    ------------------------------------------ */
    var submitBtn = document.getElementById('pt-submitBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', function() {
        var fields = ['pt-firstName','pt-lastName','pt-email','pt-phone','pt-org','pt-role','pt-address','pt-city','pt-country','pt-region'];
        var valid = true;
        fields.forEach(function(id) {
          var el = document.getElementById(id); if (!el) return;
          var field = el.closest('.pt-field');
          if (!el.value.trim()) { valid = false; if (field) field.classList.add('error'); }
          else { if (field) field.classList.remove('error'); }
        });
        if (!dialEl || !dialEl.value) { valid = false; if (dialEl) dialEl.style.borderColor = '#d0392b'; }
        else { if (dialEl) dialEl.style.borderColor = ''; }
        if (!valid) { alert('Please fill in all fields before submitting.'); return; }
        document.getElementById('partnerForm').style.display = 'none';
        document.getElementById('partnerSuccess').style.display = 'block';
      });
    }
  
  
    /* ------------------------------------------
       SUBSCRIBE
    ------------------------------------------ */
    var subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function() {
        var name  = document.getElementById('subName').value.trim();
        var email = document.getElementById('subEmail').value.trim();
        if (!name || !email) { alert('Please fill in both your name and email address.'); return; }
        document.getElementById('subscribeForm').style.display = 'none';
        document.getElementById('subscribeSuccess').style.display = 'block';
      });
    }
  
  
    /* ------------------------------------------
       LOGO CARD STAGGER
    ------------------------------------------ */
    var cards = document.querySelectorAll('.pt-logo-card');
    if ('IntersectionObserver' in window && cards.length) {
      var cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(cards).indexOf(entry.target);
            setTimeout(function(){ entry.target.classList.add('visible'); }, idx * 50);
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
      cards.forEach(function(card){ cardObserver.observe(card); });
    } else {
      cards.forEach(function(card){ card.classList.add('visible'); });
    }
  
  
    /* ------------------------------------------
       WHY ITEMS STAGGER
    ------------------------------------------ */
    var whyItems = document.querySelectorAll('.pt-why-item');
    if ('IntersectionObserver' in window && whyItems.length) {
      var whyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(whyItems).indexOf(entry.target);
            setTimeout(function(){ entry.target.classList.add('visible'); }, idx * 100);
            whyObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      whyItems.forEach(function(item){ whyObserver.observe(item); });
    } else {
      whyItems.forEach(function(item){ item.classList.add('visible'); });
    }
  
  
    /* ------------------------------------------
       COUNTDOWNS
    ------------------------------------------ */
    var strips = [
      { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
      { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
    ];
  
    function updateCountdowns() {
      var now = new Date(); var start = new Date('2026-10-15T00:00:00'); var end = new Date('2026-10-17T23:59:59');
      strips.forEach(function(s) {
        var wrap = document.getElementById(s.wrap); if (!wrap) return;
        var timer = document.getElementById(s.timer); var status = document.getElementById(s.status);
        if (now >= end) { wrap.style.display = 'none'; }
        else if (now >= start) { if (timer) timer.style.display = 'none'; if (status) status.textContent = 'Ongoing 🎉'; }
        else {
          var diff = start - now;
          var dEl = document.getElementById(s.days);   if (dEl) dEl.textContent = String(Math.floor(diff/86400000)).padStart(2,'0');
          var hEl = document.getElementById(s.hours);  if (hEl) hEl.textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
          var mEl = document.getElementById(s.mins);   if (mEl) mEl.textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
          var sEl = document.getElementById(s.secs);   if (sEl) sEl.textContent = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
        }
      });
    }
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  
  });