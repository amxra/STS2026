/* =============================================
   STS 2026 — deal-room.js
   Deal Room page specific JS only.
   Shared behaviour lives in main.js.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       COUNTRIES DATA
    ------------------------------------------ */
    var COUNTRIES = [
      {name:'Afghanistan',code:'+93'},{name:'Algeria',code:'+213'},{name:'Angola',code:'+244'},
      {name:'Argentina',code:'+54'},{name:'Australia',code:'+61'},{name:'Austria',code:'+43'},
      {name:'Azerbaijan',code:'+994'},{name:'Bangladesh',code:'+880'},{name:'Belgium',code:'+32'},
      {name:'Benin',code:'+229'},{name:'Bolivia',code:'+591'},{name:'Brazil',code:'+55'},
      {name:'Burkina Faso',code:'+226'},{name:'Burundi',code:'+257'},{name:'Cameroon',code:'+237'},
      {name:'Canada',code:'+1'},{name:'Chad',code:'+235'},{name:'Chile',code:'+56'},
      {name:'China',code:'+86'},{name:'Colombia',code:'+57'},{name:'Congo',code:'+242'},
      {name:'DR Congo',code:'+243'},{name:"Côte d'Ivoire",code:'+225'},{name:'Denmark',code:'+45'},
      {name:'Djibouti',code:'+253'},{name:'Ecuador',code:'+593'},{name:'Egypt',code:'+20'},
      {name:'Ethiopia',code:'+251'},{name:'Finland',code:'+358'},{name:'France',code:'+33'},
      {name:'Gabon',code:'+241'},{name:'Gambia',code:'+220'},{name:'Germany',code:'+49'},
      {name:'Ghana',code:'+233'},{name:'Greece',code:'+30'},{name:'Guinea',code:'+224'},
      {name:'India',code:'+91'},{name:'Indonesia',code:'+62'},{name:'Ireland',code:'+353'},
      {name:'Israel',code:'+972'},{name:'Italy',code:'+39'},{name:'Japan',code:'+81'},
      {name:'Jordan',code:'+962'},{name:'Kenya',code:'+254'},{name:'Kuwait',code:'+965'},
      {name:'Lebanon',code:'+961'},{name:'Liberia',code:'+231'},{name:'Libya',code:'+218'},
      {name:'Madagascar',code:'+261'},{name:'Malawi',code:'+265'},{name:'Malaysia',code:'+60'},
      {name:'Mali',code:'+223'},{name:'Mauritania',code:'+222'},{name:'Mauritius',code:'+230'},
      {name:'Mexico',code:'+52'},{name:'Morocco',code:'+212'},{name:'Mozambique',code:'+258'},
      {name:'Namibia',code:'+264'},{name:'Netherlands',code:'+31'},{name:'New Zealand',code:'+64'},
      {name:'Niger',code:'+227'},{name:'Nigeria',code:'+234'},{name:'Norway',code:'+47'},
      {name:'Oman',code:'+968'},{name:'Pakistan',code:'+92'},{name:'Philippines',code:'+63'},
      {name:'Poland',code:'+48'},{name:'Portugal',code:'+351'},{name:'Qatar',code:'+974'},
      {name:'Romania',code:'+40'},{name:'Rwanda',code:'+250'},{name:'Saudi Arabia',code:'+966'},
      {name:'Senegal',code:'+221'},{name:'Sierra Leone',code:'+232'},{name:'Singapore',code:'+65'},
      {name:'Somalia',code:'+252'},{name:'South Africa',code:'+27'},{name:'South Korea',code:'+82'},
      {name:'South Sudan',code:'+211'},{name:'Spain',code:'+34'},{name:'Sudan',code:'+249'},
      {name:'Sweden',code:'+46'},{name:'Switzerland',code:'+41'},{name:'Tanzania',code:'+255'},
      {name:'Togo',code:'+228'},{name:'Tunisia',code:'+216'},{name:'Turkey',code:'+90'},
      {name:'Uganda',code:'+256'},{name:'United Arab Emirates',code:'+971'},
      {name:'United Kingdom',code:'+44'},{name:'United States',code:'+1'},
      {name:'Uruguay',code:'+598'},{name:'Zambia',code:'+260'},{name:'Zimbabwe',code:'+263'}
    ];
  
    var sorted  = COUNTRIES.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
    var nigeria = sorted.find(function(c){ return c.name === 'Nigeria'; });
  
    function populateCountry(id) {
      var el = document.getElementById(id); if (!el) return;
      sorted.forEach(function(c) {
        var o = document.createElement('option'); o.value = c.name; o.textContent = c.name; el.appendChild(o);
      });
      el.value = 'Nigeria';
    }
  
    function populateDial(id) {
      var el = document.getElementById(id); if (!el) return;
      var nig = document.createElement('option'); nig.value = nigeria.code; nig.textContent = 'Nigeria ' + nigeria.code; el.appendChild(nig);
      sorted.forEach(function(c) {
        if (c.name === 'Nigeria') return;
        var o = document.createElement('option'); o.value = c.code; o.textContent = c.name + ' ' + c.code; el.appendChild(o);
      });
    }
  
    ['inv-country','inv-opCountry','gr-country','ln-country'].forEach(populateCountry);
    ['inv-dialCode','gr-dialCode','ln-dialCode'].forEach(populateDial);
  
    ['gr-yearFounded','ln-yearEstablished'].forEach(function(id) {
      var el = document.getElementById(id); if (!el) return;
      for (var y = new Date().getFullYear(); y >= 1990; y--) {
        var o = document.createElement('option'); o.value = y; o.textContent = y; el.appendChild(o);
      }
    });
  
  
    /* ------------------------------------------
       TAB SWITCHING
    ------------------------------------------ */
    document.querySelectorAll('.dr-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = btn.getAttribute('data-tab');
        document.querySelectorAll('.dr-tab').forEach(function(t){ t.classList.remove('active'); });
        document.querySelectorAll('.dr-panel').forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById('panel-' + tab);
        if (panel) panel.classList.add('active');
      });
    });
  
    document.querySelectorAll('.dr-sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var subtab = btn.getAttribute('data-subtab');
        document.querySelectorAll('.dr-sub-tab').forEach(function(t){ t.classList.remove('active'); });
        document.querySelectorAll('.dr-sub-panel').forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById('panel-' + subtab);
        if (panel) panel.classList.add('active');
      });
    });
  
  
    /* ------------------------------------------
       CHECKBOX & RADIO STATES
    ------------------------------------------ */
    document.querySelectorAll('.dr-check-item input[type="checkbox"]').forEach(function(cb) {
      cb.addEventListener('change', function() { cb.closest('.dr-check-item').classList.toggle('selected', cb.checked); });
    });
  
    document.querySelectorAll('.dr-radio-item input[type="radio"]').forEach(function(rb) {
      rb.addEventListener('change', function() {
        document.querySelectorAll('input[name="' + rb.name + '"]').forEach(function(r){ r.closest('.dr-radio-item').classList.remove('selected'); });
        rb.closest('.dr-radio-item').classList.add('selected');
      });
    });
  
  
    /* ------------------------------------------
       WORD COUNTS
    ------------------------------------------ */
    [['inv-thesis','inv-thesis-count'],['gr-description','gr-desc-count'],['gr-impact','gr-impact-count']].forEach(function(pair) {
      var ta = document.getElementById(pair[0]); var wc = document.getElementById(pair[1]);
      if (!ta || !wc) return;
      ta.addEventListener('input', function() {
        var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        wc.textContent = words + ' / 300 words';
        wc.classList.toggle('over', words > 300);
      });
    });
  
  
    /* ------------------------------------------
       FILE NAME DISPLAY
    ------------------------------------------ */
    window.showFileNames = function(inputId, displayId) {
      var input = document.getElementById(inputId); var display = document.getElementById(displayId);
      if (!input || !display) return;
      display.textContent = input.files.length ? 'Selected: ' + Array.from(input.files).map(function(f){ return f.name; }).join(', ') : '';
    };
  
  
    /* ------------------------------------------
       FORM VALIDATION & SUBMIT
    ------------------------------------------ */
    function validateRequired(ids) {
      var valid = true;
      ids.forEach(function(id) {
        var el = document.getElementById(id); if (!el) return;
        var field = el.closest('.dr-field');
        if (!el.value.trim()) { valid = false; if (field) field.classList.add('error'); }
        else { if (field) field.classList.remove('error'); }
      });
      return valid;
    }
  
    var investorBtn = document.getElementById('investorSubmitBtn');
    if (investorBtn) {
      investorBtn.addEventListener('click', function() {
        if (!validateRequired(['inv-firstName','inv-lastName','inv-email','inv-phone','inv-country','inv-state','inv-orgName','inv-orgType','inv-role'])) { alert('Please fill in all required fields.'); return; }
        document.getElementById('investorForm').style.display = 'none';
        document.getElementById('investorSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    var grantsBtn = document.getElementById('grantsSubmitBtn');
    if (grantsBtn) {
      grantsBtn.addEventListener('click', function() {
        if (!validateRequired(['gr-firstName','gr-lastName','gr-email','gr-phone','gr-country','gr-state','gr-projectName','gr-stage','gr-amount','gr-duration','gr-description','gr-impact'])) { alert('Please fill in all required fields.'); return; }
        document.getElementById('grantsForm').style.display = 'none';
        document.getElementById('grantsSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    var loansBtn = document.getElementById('loansSubmitBtn');
    if (loansBtn) {
      loansBtn.addEventListener('click', function() {
        if (!validateRequired(['ln-firstName','ln-lastName','ln-email','ln-phone','ln-country','ln-state','ln-bizName','ln-yearEstablished','ln-regStatus','ln-bizSize','ln-sector','ln-amount','ln-tenure','ln-purpose'])) { alert('Please fill in all required fields.'); return; }
        document.getElementById('loansForm').style.display = 'none';
        document.getElementById('loansSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
       SCROLL REVEAL — form sections
    ------------------------------------------ */
    function initFormReveal() {
      var sections = document.querySelectorAll('.dr-form-section');
      if (!('IntersectionObserver' in window) || !sections.length) { sections.forEach(function(s){ s.classList.add('visible'); }); return; }
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(sections).indexOf(entry.target);
            setTimeout(function(){ entry.target.classList.add('visible'); }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      sections.forEach(function(s){ observer.observe(s); });
    }
    initFormReveal();
    document.querySelectorAll('.dr-tab, .dr-sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() { setTimeout(initFormReveal, 50); });
    });
  
  
    /* ------------------------------------------
       COUNTDOWNS — hero + footer strips
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