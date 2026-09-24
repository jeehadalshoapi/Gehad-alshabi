/* ==========================================================
   jeemdev — main.js
   Renders the whole page from data/content.js, in either
   language, and drives the motion layer. No dependencies.
   ========================================================== */
(function () {
  'use strict';

  var C = window.CONTENT || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================
     LANGUAGE
     ====================================================== */

  var LANGS = ['en', 'ar'];
  var lang = 'en';

  /* translate: accepts a plain string or {en, ar} */
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'object' && !Array.isArray(v)) {
      return v[lang] != null ? v[lang] : (v.en != null ? v.en : '');
    }
    return v;
  }

  /* UI chrome strings */
  var UI = {
    nav:        { en: ['About', 'Skills', 'Experience', 'Projects', 'Documents', 'Contact'],
                  ar: ['نبذة عني', 'المهارات', 'الخبرات', 'المشاريع', 'المستندات', 'تواصل معي'] },
    sections:   { en: ['About me', 'Skills & stack', 'Experience', 'Projects', 'CV & documents', 'Get in touch'],
                  ar: ['نبذة عني', 'المهارات والأدوات', 'الخبرات العملية', 'المشاريع', 'السيرة الذاتية والمستندات', 'تواصل معي'] },
    hi:         { en: 'Hi, my name is',   ar: 'مرحباً، أنا' },
    available:  { en: 'Available for hire', ar: 'متاح للعمل' },
    seeWork:    { en: 'See my work',      ar: 'شاهد أعمالي' },
    downloadCv: { en: 'Download CV',      ar: 'حمّل السيرة الذاتية' },
    cv:         { en: 'CV',               ar: 'السيرة' },
    scroll:     { en: 'scroll',           ar: 'مرّر' },
    education:  { en: 'Education & certifications', ar: 'التعليم والشهادات' },
    all:        { en: 'All',              ar: 'الكل' },
    readMore:   { en: 'Read more',        ar: 'اقرأ المزيد' },
    showLess:   { en: 'Show less',        ar: 'عرض أقل' },
    featured:   { en: 'featured',         ar: 'مميّز' },
    docsLead:   { en: 'Everything an employer might ask for, in one place. Preview in the browser or download.',
                  ar: 'كل ما قد يطلبه صاحب العمل في مكان واحد. اعرضه في المتصفح أو حمّله.' },
    preview:    { en: 'Preview',          ar: 'معاينة' },
    download:   { en: 'Download',         ar: 'تحميل' },
    newTab:     { en: 'New tab',          ar: 'تبويب جديد' },
    missing:    { en: 'file not found — add it to assets/docs/', ar: 'الملف غير موجود — أضفه إلى assets/docs/' },
    contactLead:{ en: 'Have a role, a project, or a question? My inbox is open.',
                  ar: 'لديك وظيفة أو مشروع أو سؤال؟ صندوق بريدي مفتوح.' },
    fName:      { en: 'Your name',        ar: 'الاسم' },
    fEmail:     { en: 'Your email',       ar: 'البريد الإلكتروني' },
    fSubject:   { en: 'Subject',          ar: 'الموضوع' },
    fMessage:   { en: 'Message',          ar: 'الرسالة' },
    send:       { en: 'Send message',     ar: 'إرسال الرسالة' },
    sending:    { en: 'Sending…',         ar: 'جارٍ الإرسال…' },
    sent:       { en: 'Message sent. I will get back to you soon.', ar: 'تم إرسال الرسالة. سأعود إليك قريباً.' },
    mailing:    { en: 'Opening your mail app…', ar: 'جارٍ فتح تطبيق البريد…' },
    invalid:    { en: 'Please fill the required fields correctly.', ar: 'يرجى تعبئة الحقول المطلوبة بشكل صحيح.' },
    failed:     { en: 'Could not send. Email me directly at ',      ar: 'تعذّر الإرسال. راسلني مباشرة على ' },
    builtBy:    { en: 'Built from scratch by', ar: 'صُمّم وبُني بالكامل بواسطة' },
    noFw:       { en: 'Plain HTML, CSS & JavaScript. No frameworks.', ar: 'HTML وCSS وJavaScript فقط. بدون أطر عمل.' },
    switchTo:   { en: 'العربية',          ar: 'English' },
    switchAria: { en: 'التبديل إلى العربية', ar: 'Switch to English' },
    fbTitle:    { en: "Mail app didn't open? Use one of these instead:",
                  ar: 'لم يفتح تطبيق البريد؟ استخدم أحد هذه الخيارات:' },
    fbGmail:    { en: 'Open in Gmail',      ar: 'افتح في Gmail' },
    fbWhats:    { en: 'Send on WhatsApp',   ar: 'أرسل عبر واتساب' },
    fbCopy:     { en: 'Copy message',       ar: 'نسخ الرسالة' },
    fbCopied:   { en: 'Copied ✓',           ar: 'تم النسخ ✓' },
    fbAddr:     { en: 'Or email me directly at', ar: 'أو راسلني مباشرة على' },
    theme_auto: { en: 'Theme: follows your device — click for light',
                  ar: 'المظهر: حسب جهازك — اضغط للفاتح' },
    theme_light:{ en: 'Theme: light — click for dark',
                  ar: 'المظهر: فاتح — اضغط للداكن' },
    theme_dark: { en: 'Theme: dark — click to follow your device',
                  ar: 'المظهر: داكن — اضغط ليتبع جهازك' },
  };
  var u = function (k) { var e = UI[k]; return e ? (e[lang] != null ? e[lang] : e.en) : ''; };

  function detectLang() {
    var saved;
    try { saved = localStorage.getItem('jeemdev-lang'); } catch (e) {}
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var q = (location.search.match(/[?&]lang=(\w+)/) || [])[1];
    if (q && LANGS.indexOf(q) !== -1) return q;
    return /^ar\b/i.test(navigator.language || '') ? 'ar' : 'en';
  }

  function applyLang(next, animate) {
    lang = next;
    try { localStorage.setItem('jeemdev-lang', next); } catch (e) {}

    var html = document.documentElement;
    html.setAttribute('lang', next);
    html.setAttribute('dir', next === 'ar' ? 'rtl' : 'ltr');

    document.title = t((C.seo || {}).title) || '';
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t((C.seo || {}).description) || '');

    var btn = $('#lang-toggle');
    if (btn) { btn.textContent = u('switchTo'); btn.setAttribute('aria-label', u('switchAria')); }
    var thb = $('#theme-toggle');
    if (thb) { thb.setAttribute('title', u('theme_' + theme)); thb.setAttribute('aria-label', u('theme_' + theme)); }

    renderAll();

    if (animate) {
      // page has already been read — show everything immediately instead of re-animating
      $$('.reveal').forEach(function (el) { el.classList.add('in'); });
      $$('[data-count]').forEach(function (el) {
        el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
        el.dataset.done = '1';
      });
    }
    initReveal();
  }

  /* ======================================================
     THEME  —  auto (follows the device) / light / dark
     ====================================================== */

  var THEMES = ['auto', 'light', 'dark'];
  var theme = 'auto';
  var THEME_ICON = {
    auto:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v3M12 19.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1.5 12h3M19.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    dark:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
  };

  function applyTheme(next) {
    theme = THEMES.indexOf(next) !== -1 ? next : 'auto';
    try { localStorage.setItem('jeemdev-theme', theme); } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);

    var btn = $('#theme-toggle');
    if (btn) {
      btn.innerHTML = THEME_ICON[theme];
      btn.setAttribute('title', u('theme_' + theme));
      btn.setAttribute('aria-label', u('theme_' + theme));
    }
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isLight() ? '#f2f6fb' : '#05070c');

    if (typeof onThemeChange === 'function') onThemeChange();
  }

  function isLight() {
    if (theme === 'light') return true;
    if (theme === 'dark') return false;
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }

  function detectTheme() {
    try {
      var saved = localStorage.getItem('jeemdev-theme');
      if (saved && THEMES.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return 'auto';
  }

  /* the canvas repaints itself when the palette flips */
  var onThemeChange = null;

  /* ---------- inline icon set ---------- */
  var ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.6 4.7 18.6 5 18.6 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21h5.2V9H2.4v12Zm7.6 0h5.2v-6.3c0-1.7.6-2.8 2.1-2.8 1.4 0 2 1 2 2.8V21H24v-7c0-3.9-2.1-5.7-4.9-5.7-2.2 0-3.2 1.2-3.8 2.1V9H10c.1 1.5 0 12 0 12Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 7 9 6 9-6"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.4 8.5L23.4 22h-6.8l-5.3-7-6.1 7H2l8-9.1L1.3 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4l12.3 16.1Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
    'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="m8.2 13.3-1.4 8L12 19l5.2 2.3-1.4-8"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><circle cx="8.5" cy="11" r="2.5"/><path d="M4.5 17c.8-1.6 2.3-2.4 4-2.4s3.2.8 4 2.4M15 9h5M15 13h5"/></svg>'
  };
  var icon = function (n) { return ICONS[n] || ICONS.folder; };

  /* ======================================================
     RENDER
     ====================================================== */

  function renderChrome() {
    var navs = $$('#nav-links a');
    u('nav') && UI.nav[lang].forEach(function (label, i) { if (navs[i]) navs[i].textContent = label; });

    $$('.section__title').forEach(function (h, i) {
      var span = $('.section__title-text', h);
      if (span) span.textContent = UI.sections[lang][i] || span.textContent;
    });

    var setText = function (sel, val) { var el = $(sel); if (el) el.textContent = val; };
    setText('.hero__hi', u('hi'));
    setText('#cta-work', u('seeWork'));
    setText('#cta-cv', u('downloadCv'));
    setText('#nav-cv', u('cv'));
    setText('#docs-lead', u('docsLead'));
    setText('#contact-lead', u('contactLead'));
    setText('#edu-title', u('education'));
    setText('#f-name-l', u('fName'));
    setText('#f-email-l', u('fEmail'));
    setText('#f-subject-l', u('fSubject'));
    setText('#f-message-l', u('fMessage'));
    setText('#send-btn', u('send'));
    setText('#doc-modal-dl', u('download'));
    setText('#doc-modal-tab', u('newTab'));
    setText('#footer-by', u('builtBy'));
    setText('#footer-note', u('noFw'));

    var scroll = $('.hero__scroll');
    if (scroll) scroll.lastChild.nodeValue = u('scroll');
  }

  function renderHero() {
    var id = C.identity || {}, ct = C.contact || {};
    var nameEl = $('#hero-name');
    if (nameEl) nameEl.textContent = t(id.name);
    var tl = $('#hero-tagline'); if (tl) tl.textContent = t(id.tagline);
    var loc = $('#hero-loc'); if (loc) loc.textContent = t(id.location);
    var av = $('#hero-avail');
    if (av) { av.hidden = !id.available; av.textContent = u('available'); }

    var stats = $('#hero-stats');
    if (stats) {
      stats.innerHTML = (C.stats || []).map(function (s) {
        return '<li><b data-count="' + Number(s.value || 0) + '" data-suffix="' + esc(s.suffix || '') + '">0</b>' +
               '<span>' + esc(t(s.label)) + '</span></li>';
      }).join('');
    }

    var soc = $('#hero-social');
    if (soc) {
      soc.innerHTML = (ct.links || []).map(function (l) {
        var lb = esc(t(l.label));
        return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener" aria-label="' +
               lb + '" title="' + lb + '">' + icon(l.icon) + '</a></li>';
      }).join('');
    }
  }

  function renderAbout() {
    var a = C.about || {}, id = C.identity || {};
    var body = $('#about-body');
    if (body) body.innerHTML = (a.body || []).map(function (p) { return '<p>' + esc(t(p)) + '</p>'; }).join('');

    var photo = $('#about-photo');
    if (photo && !photo.dataset.filled) {
      photo.dataset.filled = '1';
      if (id.avatar) {
        var img = new Image();
        img.alt = t(id.name) || 'photo';
        img.src = id.avatar;
        img.onerror = function () { photo.innerHTML = '<span class="ph">&lt;/&gt;</span>'; };
        photo.appendChild(img);
      } else {
        photo.innerHTML = '<span class="ph">&lt;/&gt;</span>';
      }
    }

    var facts = $('#about-facts');
    if (facts) {
      facts.innerHTML = (a.facts || []).map(function (f) {
        return '<li><b>' + esc(t(f.k)) + '</b><span>' + esc(t(f.v)) + '</span></li>';
      }).join('');
    }
  }

  function renderSkills() {
    var g = $('#skills-grid'); if (!g) return;
    g.innerHTML = (C.skills || []).map(function (grp) {
      var chips = (grp.items || []).map(function (s) {
        return '<span class="skill-chip">' + esc(t(s)) + '</span>';
      }).join('');
      return '<div class="skill-card reveal"><h3>' + esc(t(grp.group)) + '</h3>' +
             '<div class="skill-chips">' + chips + '</div></div>';
    }).join('');
  }

  function renderExperience() {
    var tm = $('#timeline');
    if (tm) {
      tm.innerHTML = (C.experience || []).map(function (e) {
        var pts = (e.points || []).map(function (p) { return '<li>' + esc(t(p)) + '</li>'; }).join('');
        var tags = (e.tags || []).map(function (x) { return '<span class="tag">' + esc(t(x)) + '</span>'; }).join('');
        var meta = [t(e.period), t(e.location)].filter(Boolean).map(esc).join('  ·  ');
        return '<article class="tl-item reveal">' +
          '<div class="tl-head"><h3>' + esc(t(e.role)) + '</h3><span class="at">' + esc(t(e.company)) + '</span></div>' +
          '<p class="tl-meta">' + meta + '</p>' +
          (pts ? '<ul>' + pts + '</ul>' : '') +
          (tags ? '<div class="tags">' + tags + '</div>' : '') +
          '</article>';
      }).join('');
    }
    var ed = $('#edu');
    if (ed) {
      ed.innerHTML = (C.education || []).map(function (e) {
        var note = t(e.note);
        return '<div class="edu-card reveal"><h4>' + esc(t(e.degree)) + '</h4>' +
          '<div class="inst">' + esc(t(e.institution)) + '</div>' +
          '<div class="yr">' + esc(t(e.period)) + '</div>' +
          (note ? '<div class="note">' + esc(note) + '</div>' : '') + '</div>';
      }).join('');
    }
  }

  function renderProjects() {
    var grid = $('#projects-grid'); if (!grid) return;
    var list = C.projects || [];

    grid.innerHTML = list.map(function (p, i) {
      var pts = p.points || (p.blurb ? [p.blurb] : []);
      var body = pts.map(function (x) { return '<li>' + esc(t(x)) + '</li>'; }).join('');
      var tags = (p.tags || []).map(function (x) { return '<span class="tag">' + esc(t(x)) + '</span>'; }).join('');
      var links = (p.links || []).filter(function (l) { return l.url && l.url !== '#'; })
        .map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + ' ↗</a>'; }).join('');
      var thumb = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(t(p.title)) + '" loading="lazy" onerror="this.remove()">'
        : '<span class="ph">&lt;/&gt;</span>';
      var sub = t(p.subtitle);
      var long = pts.length > 1;   // collapse to the first bullet until expanded
      return '<article class="proj reveal" data-tags="' + esc((p.tags || []).join('|')) + '" data-i="' + i + '">' +
        '<div class="proj__thumb">' + thumb + (p.featured ? '<span class="star">' + u('featured') + '</span>' : '') + '</div>' +
        '<div class="proj__body"><h3>' + esc(t(p.title)) + '</h3>' +
        (sub ? '<p class="proj__sub">' + esc(sub) + '</p>' : '') +
        '<ul class="proj__points' + (long ? ' clamp' : '') + '">' + body + '</ul>' +
        (long ? '<button class="more" type="button">' + u('readMore') + '</button>' : '') +
        (tags ? '<div class="tags">' + tags + '</div>' : '') +
        (links ? '<div class="proj__links">' + links + '</div>' : '') +
        '</div></article>';
    }).join('');

    // filter chips from the union of all tags
    var all = [];
    list.forEach(function (p) {
      (p.tags || []).forEach(function (x) { if (all.indexOf(x) === -1) all.push(x); });
    });
    var f = $('#filters');
    if (f && all.length) {
      f.innerHTML = '<button class="chip active" data-f="*">' + u('all') + '</button>' +
        all.map(function (x) { return '<button class="chip" data-f="' + esc(x) + '">' + esc(t(x)) + '</button>'; }).join('');
    }
  }

  function renderDocs() {
    var g = $('#docs-grid'); if (!g) return;
    var docs = C.documents || [];
    var visible = docs.filter(function (d) { return !d.lang || d.lang === lang; });

    g.innerHTML = visible.map(function (d) {
      var isPdf = (d.type || '').toLowerCase() === 'pdf';
      var primary = d.primary || d.primaryFor === lang;
      var actions =
        (isPdf ? '<button class="btn btn--sm btn--primary" data-view="' + esc(d.file) +
                 '" data-title="' + esc(t(d.title)) + '">' + u('preview') + '</button>' : '') +
        '<a class="btn btn--sm btn--outline" href="' + esc(d.file) + '" download>' + u('download') + '</a>';
      return '<article class="doc reveal' + (primary ? ' doc--primary' : '') + '" data-file="' + esc(d.file) + '">' +
        '<div class="doc__icon">' + icon(d.icon || 'file-text') + '</div>' +
        '<h3 dir="auto">' + esc(t(d.title)) + '</h3>' +
        '<p dir="auto">' + esc(t(d.desc)) + '</p>' +
        '<div class="doc__actions">' + actions + '</div>' +
        '<span class="doc__missing" hidden>' + u('missing') + '</span>' +
        '</article>';
    }).join('');

    // flag any listed document whose file is not actually on the server
    if (location.protocol !== 'file:') {
      $$('.doc', g).forEach(function (card) {
        var file = card.getAttribute('data-file'); if (!file) return;
        fetch(file, { method: 'HEAD' })
          .then(function (r) { if (!r.ok) throw 0; })
          .catch(function () {
            var m = $('.doc__missing', card); if (m) m.hidden = false;
            $$('.doc__actions .btn', card).forEach(function (b) {
              b.style.opacity = '.4'; b.style.pointerEvents = 'none';
            });
          });
      });
    }
  }

  function renderContact() {
    var ct = C.contact || {};
    var box = $('#contact-alt'); if (!box) return;
    var items = [];
    if (ct.email) items.push({ icon: 'mail', label: ct.email, url: 'mailto:' + ct.email });
    if (ct.phone) items.push({ icon: 'phone', label: ct.phone, url: 'tel:' + ct.phone.replace(/\s+/g, '') });
    (ct.links || []).forEach(function (l) {
      if (l.icon !== 'mail') items.push({ icon: l.icon, label: t(l.label), url: l.url });
    });
    box.innerHTML = items.map(function (i) {
      return '<a href="' + esc(i.url) + '" target="_blank" rel="noopener" dir="ltr">' + icon(i.icon) + esc(i.label) + '</a>';
    }).join('');
  }

  /* navbar CV button points at the CV matching the current language */
  function renderCvShortcut() {
    var docs = C.documents || [];
    var pick = docs.filter(function (d) { return d.primaryFor === lang || d.primary; })[0] || docs[0];
    var link = $('#nav-cv');
    var heroCv = $('#cta-cv');
    if (!link || !pick) return;
    link.setAttribute('href', pick.file);
    link.setAttribute('download', '');
    if (heroCv) heroCv.setAttribute('href', pick.file);

    if (location.protocol === 'file:') return;
    fetch(pick.file, { method: 'HEAD' })
      .then(function (r) { if (!r.ok) throw 0; })
      .catch(function () {
        link.setAttribute('href', '#documents');
        link.removeAttribute('download');
        if (heroCv) heroCv.setAttribute('href', '#documents');
      });
  }

  function renderAll() {
    try {
      renderChrome(); renderHero(); renderAbout(); renderSkills();
      renderExperience(); renderProjects(); renderDocs();
      renderContact(); renderCvShortcut();
      restartTyping();
    } catch (err) {
      console.error('[jeemdev] render error — check data/content.js', err);
    }
  }

  /* ======================================================
     MOTION
     ====================================================== */

  function initCanvas() {
    var cv = $('#bg-canvas'); if (!cv || reduced) return;
    var ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) { cv.style.display = 'none'; return; }   // canvas unavailable — skip quietly
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var pts = [], w = 0, h = 0, raf = 0;
    var mouse = { x: -9999, y: -9999 };

    // particle colours follow the active theme
    var col = {};
    function palette() {
      col = isLight()
        ? { hot: 'rgba(0,120,150,.9)',  idle: 'rgba(40,90,140,.4)',  web: 'rgba(90,60,200,' }
        : { hot: 'rgba(0,240,255,.85)', idle: 'rgba(120,180,255,.35)', web: 'rgba(123,92,255,' };
    }
    palette();
    onThemeChange = palette;
    window.matchMedia('(prefers-color-scheme: light)').addEventListener
      && window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
        palette();
        var meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', isLight() ? '#f2f6fb' : '#05070c');
      });

    function size() {
      w = cv.width = Math.floor(innerWidth * dpr);
      h = cv.height = Math.floor(innerHeight * dpr);
      cv.style.width = innerWidth + 'px';
      cv.style.height = innerHeight + 'px';
      var target = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
      pts = [];
      for (var i = 0; i < target; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - .5) * .28 * dpr, vy: (Math.random() - .5) * .28 * dpr,
          r: (Math.random() * 1.5 + .6) * dpr
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      var link = 132 * dpr, mr = 170 * dpr;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        var dmx = p.x - mouse.x, dmy = p.y - mouse.y;
        var dm = Math.sqrt(dmx * dmx + dmy * dmy);
        var near = dm < mr;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = near ? col.hot : col.idle;
        ctx.fill();

        if (near) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = col.hot.replace(/[\d.]+\)$/, (0.5 * (1 - dm / mr)).toFixed(3) + ')');
          ctx.lineWidth = dpr; ctx.stroke();
        }

        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = col.web + (0.14 * (1 - d / link)) + ')';
            ctx.lineWidth = dpr * .7; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    size(); frame();
    addEventListener('resize', size, { passive: true });
    addEventListener('mousemove', function (e) { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    addEventListener('mouseout', function () { mouse.x = mouse.y = -9999; });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); } else { raf = requestAnimationFrame(frame); }
    });
  }

  /* typing roles — restartable so it follows a language switch */
  var typeToken = 0;
  function restartTyping() {
    var el = $('#typed'); if (!el) return;
    var roles = ((C.identity || {}).roles || []).map(t).filter(Boolean);
    if (!roles.length) return;

    typeToken++;
    var mine = typeToken;
    if (reduced) { el.textContent = roles[0]; return; }

    var i = 0, ch = 0, del = false;
    el.textContent = '';
    (function tick() {
      if (mine !== typeToken) return;      // a newer run took over
      var word = roles[i % roles.length];
      ch += del ? -1 : 1;
      el.textContent = word.slice(0, ch);
      var wait = del ? 40 : 85;
      if (!del && ch === word.length) { wait = 1700; del = true; }
      else if (del && ch === 0) { del = false; i++; wait = 320; }
      setTimeout(tick, wait);
    })();
  }

  /* scroll reveal + counters */
  var revealIO = null;
  function initReveal() {
    if (revealIO) revealIO.disconnect();
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        $$('[data-count]', en.target).forEach(countUp);
        if (en.target.hasAttribute('data-count')) countUp(en.target);
        revealIO.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    $$('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 70 + 'ms';
      revealIO.observe(el);
    });
  }

  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var end = Number(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduced) { el.textContent = end + suffix; return; }
    var dur = 1300, t0 = performance.now();
    (function step(now) {
      var p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* nav: sticky, active link, burger, language toggle */
  function initNav() {
    var nav = $('#nav'), burger = $('#burger'), links = $('#nav-links');
    var bar = $('#scroll-bar'), top = $('#to-top');

    function onScroll() {
      var y = scrollY;
      if (nav) nav.classList.toggle('stuck', y > 40);
      if (top) top.classList.toggle('show', y > 600);
      if (bar) {
        var max = document.documentElement.scrollHeight - innerHeight;
        bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      }
    }
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (burger && links) {
      burger.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
      });
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          links.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    var toggle = $('#lang-toggle');
    if (toggle) toggle.addEventListener('click', function () {
      applyLang(lang === 'en' ? 'ar' : 'en', true);
    });

    var th = $('#theme-toggle');
    if (th) th.addEventListener('click', function () {
      applyTheme(THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]);
    });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        $$('#nav-links a').forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* delegated clicks: project filters, read-more, document preview */
  function initDelegates() {
    document.addEventListener('click', function (ev) {
      var chip = ev.target.closest('#filters .chip');
      if (chip) {
        $$('#filters .chip').forEach(function (c) { c.classList.toggle('active', c === chip); });
        var want = chip.getAttribute('data-f');
        $$('#projects-grid .proj').forEach(function (card) {
          var tags = (card.getAttribute('data-tags') || '').split('|');
          card.classList.toggle('hide', want !== '*' && tags.indexOf(want) === -1);
        });
        return;
      }

      var more = ev.target.closest('.more');
      if (more) {
        var p = more.previousElementSibling;
        var open = p.classList.toggle('clamp') === false;
        more.textContent = open ? u('showLess') : u('readMore');
        return;
      }

      var view = ev.target.closest('[data-view]');
      if (view) openDoc(view.getAttribute('data-view'), view.getAttribute('data-title'));
    });
  }

  /* custom cursor + magnetic buttons + 3D card tilt */
  function initPointer() {
    if (reduced || window.matchMedia('(pointer:coarse)').matches) return;
    var cur = $('#cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring');
    if (!cur) return;
    var mx = 0, my = 0, rx = 0, ry = 0;

    addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (dot) dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
    }, { passive: true });

    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      if (ring) ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)' +
        (cur.classList.contains('is-hot') ? ' scale(1.7)' : '');
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', function (e) {
      cur.classList.toggle('is-hot', !!e.target.closest('a,button,input,textarea,.proj,.doc,.skill-card'));
    });

    document.addEventListener('mousemove', function (e) {
      var b = e.target.closest('[data-magnet]');
      $$('[data-magnet]').forEach(function (o) { if (o !== b) o.style.transform = ''; });
      if (!b) return;
      var r = b.getBoundingClientRect();
      b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.22 + 'px,' +
                                         (e.clientY - r.top - r.height / 2) * 0.3 + 'px)';
    }, { passive: true });

    document.addEventListener('mousemove', function (e) {
      var card = e.target.closest('.proj,.doc');
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - .5;
      var py = (e.clientY - r.top) / r.height - .5;
      card.style.transform = 'perspective(900px) rotateX(' + (-py * 5).toFixed(2) +
                             'deg) rotateY(' + (px * 6).toFixed(2) + 'deg) translateY(-6px)';
    }, { passive: true });
    document.addEventListener('mouseout', function (e) {
      var card = e.target.closest('.proj,.doc');
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    }, { passive: true });
  }

  /* document viewer modal */
  var modal = null;
  function openDoc(file, title) {
    modal = modal || $('#doc-modal');
    if (!modal) return;
    $('#doc-modal-title').textContent = title || file;
    $('#doc-modal-frame').src = file;
    $('#doc-modal-dl').href = file;
    $('#doc-modal-tab').href = file;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDoc() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    $('#doc-modal-frame').src = '';
    document.body.style.overflow = '';
  }
  function initModal() {
    modal = $('#doc-modal'); if (!modal) return;
    modal.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeDoc(); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDoc(); });
  }

  /* Always-available routes out, for when mailto does nothing */
  function showFallback(su, bd, plain) {
    var box = $('#form-fallback'); if (!box) return;
    var addr = (C.contact || {}).email || '';
    var phone = ((C.contact || {}).phone || '').replace(/[^0-9]/g, '');

    var gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' +
                encodeURIComponent(addr) + '&su=' + su + '&body=' + bd;
    var wa = phone ? 'https://wa.me/' + phone + '?text=' + bd : '';

    box.innerHTML =
      '<p class="fb__title">' + u('fbTitle') + '</p>' +
      '<div class="fb__row">' +
        '<a class="btn btn--sm btn--outline" href="' + esc(gmail) + '" target="_blank" rel="noopener">' + u('fbGmail') + '</a>' +
        (wa ? '<a class="btn btn--sm btn--outline" href="' + esc(wa) + '" target="_blank" rel="noopener">' + u('fbWhats') + '</a>' : '') +
        '<button class="btn btn--sm btn--ghost" type="button" id="fb-copy">' + u('fbCopy') + '</button>' +
      '</div>' +
      '<p class="fb__addr">' + u('fbAddr') + ' <a href="mailto:' + esc(addr) + '" dir="ltr">' + esc(addr) + '</a></p>';
    box.hidden = false;

    $('#fb-copy').addEventListener('click', function () {
      var btn = this;
      copyText(plain).then(function () {
        btn.textContent = u('fbCopied');
        setTimeout(function () { btn.textContent = u('fbCopy'); }, 2200);
      });
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(legacyCopy);
    }
    return legacyCopy();

    function legacyCopy() {
      return new Promise(function (resolve) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        ta.remove();
        resolve();
      });
    }
  }

  /* contact form */
  function initForm() {
    var form = $('#contact-form'); if (!form) return;
    var status = $('#form-status');
    var endpoint = (C.contact || {}).formEndpoint || '';
    var mailto = (C.contact || {}).email || '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';
      var fb = $('#form-fallback'); if (fb) fb.hidden = true;

      var ok = true;
      $$('.field', form).forEach(function (f) {
        var input = $('input,textarea', f);
        if (!input || !input.required) return;
        var bad = !input.value.trim() ||
          (input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value));
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) { status.className = 'form-status err'; status.textContent = u('invalid'); return; }

      var data = new FormData(form);

      if (!endpoint) {
        // No backend configured. Try the visitor's mail client, but never rely
        // on it: plenty of devices have none, and the click would do nothing.
        var nm = data.get('name'), em = data.get('email');
        var subjectRaw = data.get('subject') || ('Portfolio — ' + nm);
        var bodyRaw = data.get('message') + '\n\n— ' + nm + ' <' + em + '>';
        var su = encodeURIComponent(subjectRaw), bd = encodeURIComponent(bodyRaw);

        // open through a throwaway anchor so a missing handler cannot blank the page
        try {
          var a = document.createElement('a');
          a.href = 'mailto:' + mailto + '?subject=' + su + '&body=' + bd;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          setTimeout(function () { a.remove(); }, 0);
        } catch (err) {}

        status.className = 'form-status ok';
        status.textContent = u('mailing');
        showFallback(su, bd, subjectRaw + '\n\n' + bodyRaw);
        return;
      }

      var btn = $('#send-btn');
      btn.disabled = true; btn.textContent = u('sending');
      fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad status'); })
        .then(function () {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = u('sent');
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = u('failed') + mailto;
        })
        .then(function () { btn.disabled = false; btn.textContent = u('send'); });
    });
  }

  /* loader */
  function initLoader() {
    var el = $('#loader'); if (!el) return;
    var bar = $('.loader__bar span', el), pct = $('.loader__pct', el);
    var v = 0;
    var timer = setInterval(function () {
      v = Math.min(100, v + Math.random() * 18 + 6);
      bar.style.width = v + '%';
      pct.textContent = Math.floor(v) + '%';
      if (v >= 100) {
        clearInterval(timer);
        setTimeout(function () { el.classList.add('done'); }, 260);
        setTimeout(function () { el.remove(); }, 1100);
      }
    }, 130);
  }

  /* easter egg: type "jeem" anywhere */
  function initEgg() {
    var buf = '';
    addEventListener('keydown', function (e) {
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-4);
      if (buf === 'jeem') {
        document.documentElement.animate(
          [{ filter: 'hue-rotate(0deg)' }, { filter: 'hue-rotate(360deg)' }],
          { duration: 1600, iterations: 1 }
        );
      }
    });
  }

  /* ======================================================
     BOOT
     ====================================================== */
  function boot() {
    applyTheme(detectTheme());
    applyLang(detectLang(), false);

    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

    // each feature is independent: one failing must never take the rest down
    [initLoader, initCanvas, initNav, initDelegates,
     initPointer, initModal, initForm, initEgg].forEach(function (fn) {
      try { fn(); } catch (err) { console.error('[jeemdev] ' + fn.name + ' failed', err); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
