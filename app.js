(function () {
  'use strict';
  var EL = window.EL, PU = window.PRIMARY_USE;
  var GROUPS = ['alkali', 'alkaline', 'transition', 'posttrans', 'metalloid', 'nonmetal', 'halogen', 'noble', 'lanthanide', 'actinide'];

  var T = {
    en: {
      appName: 'Periodic Explorer', searchPh: 'Name, symbol, number or use…', all: 'All',
      groups: ['Alkali metals', 'Alkaline earth metals', 'Transition metals', 'Post-transition metals', 'Metalloids', 'Nonmetals', 'Halogens', 'Noble gases', 'Lanthanides', 'Actinides'],
      chips: ['Alkali', 'Alkaline earth', 'Transition', 'Post-transition', 'Metalloids', 'Nonmetals', 'Halogens', 'Noble gases', 'Lanthanides', 'Actinides'],
      allElements: 'All elements', hint: 'Swipe the table or tap the map to jump around.',
      topUse: 'Top economic use', alsoUsed: 'Also used for', share: 'Share', group: 'Group', period: 'Period',
      elements: 'elements', sectors: 'Sectors', sectorsSub: 'Browse elements by the industry that makes them valuable.',
      poster: 'Wall poster', posterSub: 'A4 landscape, big bold text and strong group colors. Print it and hang it.',
      language: 'Language', download: 'Download PDF', print: 'Print', paper: 'Paper',
      printNote: 'Print at 100% (actual size) on A4 landscape for the best result.',
      navTable: 'Table', navSectors: 'Sectors', navSearch: 'Search', navPoster: 'Poster',
      modes: ['All', 'Name', 'Symbol', 'Number', 'Use'], tryTitle: 'Try', recent: 'Recent',
      none: 'No elements found for', copied: 'Copied to clipboard', back: 'Back', clear: 'Clear search',
      tapHint: 'Tap an element to see its top use.', pTitle: 'PERIODIC TABLE OF THE ELEMENTS',
      suggest: ['Batteries', 'Steel', 'Magnets', 'Fertilizers', 'Semiconductors', 'Nuclear']
    },
    tr: {
      appName: 'Periodic Explorer', searchPh: 'Ad, sembol, numara veya kullanım…', all: 'Tümü',
      groups: ['Alkali metaller', 'Toprak alkali metaller', 'Geçiş metalleri', 'Zayıf metaller', 'Yarı metaller', 'Ametaller', 'Halojenler', 'Soy gazlar', 'Lantanitler', 'Aktinidler'],
      chips: ['Alkali', 'Toprak alkali', 'Geçiş', 'Zayıf metal', 'Yarı metal', 'Ametal', 'Halojen', 'Soy gaz', 'Lantanit', 'Aktinit'],
      allElements: 'Tüm elementler', hint: 'Tabloyu kaydır ya da haritaya dokunup atla.',
      topUse: 'En önemli ekonomik kullanım', alsoUsed: 'Diğer kullanımlar', share: 'Paylaş', group: 'Grup', period: 'Periyot',
      elements: 'element', sectors: 'Sektörler', sectorsSub: 'Elementleri değer kazandıkları sektöre göre keşfet.',
      poster: 'Duvar posteri', posterSub: 'A4 yatay, büyük kalın yazılar ve net grup renkleri. Yazdır, as.',
      language: 'Dil', download: 'PDF indir', print: 'Yazdır', paper: 'Kağıt',
      printNote: 'En iyi sonuç için A4 yatay, %100 (gerçek boyut) yazdır.',
      navTable: 'Tablo', navSectors: 'Sektörler', navSearch: 'Ara', navPoster: 'Poster',
      modes: ['Tümü', 'Ad', 'Sembol', 'Numara', 'Kullanım'], tryTitle: 'Dene', recent: 'Son aramalar',
      none: 'Sonuç bulunamadı:', copied: 'Panoya kopyalandı', back: 'Geri', clear: 'Aramayı temizle',
      tapHint: 'En önemli kullanımı görmek için bir elemente dokun.', pTitle: 'ELEMENTLERİN PERİYODİK TABLOSU',
      suggest: ['Piller', 'Çelik', 'Mıknatıs', 'Gübre', 'Yarı iletken', 'Nükleer']
    },
    es: {
      appName: 'Periodic Explorer', searchPh: 'Nombre, símbolo, número o uso…', all: 'Todos',
      groups: ['Metales alcalinos', 'Metales alcalinotérreos', 'Metales de transición', 'Metales postransicionales', 'Metaloides', 'No metales', 'Halógenos', 'Gases nobles', 'Lantánidos', 'Actínidos'],
      chips: ['Alcalinos', 'Alcalinotérreos', 'Transición', 'Postransicionales', 'Metaloides', 'No metales', 'Halógenos', 'Gases nobles', 'Lantánidos', 'Actínidos'],
      allElements: 'Todos los elementos', hint: 'Desliza la tabla o toca el mapa para moverte.',
      topUse: 'Principal uso económico', alsoUsed: 'También se usa en', share: 'Compartir', group: 'Grupo', period: 'Periodo',
      elements: 'elementos', sectors: 'Sectores', sectorsSub: 'Explora los elementos por la industria que los hace valiosos.',
      poster: 'Póster de pared', posterSub: 'A4 horizontal, texto grande y en negrita y colores de grupo bien definidos. Imprímelo y cuélgalo.',
      language: 'Idioma', download: 'Descargar PDF', print: 'Imprimir', paper: 'Papel',
      printNote: 'Para el mejor resultado, imprime en A4 horizontal al 100 % (tamaño real).',
      navTable: 'Tabla', navSectors: 'Sectores', navSearch: 'Buscar', navPoster: 'Póster',
      modes: ['Todo', 'Nombre', 'Símbolo', 'Número', 'Uso'], tryTitle: 'Prueba', recent: 'Recientes',
      none: 'No se encontraron elementos para', copied: 'Copiado al portapapeles', back: 'Atrás', clear: 'Borrar búsqueda',
      tapHint: 'Toca un elemento para ver su principal uso.', pTitle: 'TABLA PERIÓDICA DE LOS ELEMENTOS',
      enNote: 'Por ahora, la descripción detallada está solo en inglés.',
      suggest: ['Baterías', 'Acero', 'Imanes', 'Fertilizantes', 'Semiconductores', 'Nuclear']
    }
  };

  var SECTORS = [
    { id: 'agri', e: '🌾', en: 'Agriculture', tr: 'Tarım', es: 'Agricultura', s: 'N P K H I' },
    { id: 'steel', e: '🔩', en: 'Steel & Alloys', tr: 'Çelik ve Alaşımlar', es: 'Acero y aleaciones', s: 'Fe C Mn Cr Ni V Mo Nb' },
    { id: 'battery', e: '🔋', en: 'Batteries & EVs', tr: 'Piller ve Elektrikli Araçlar', es: 'Baterías y vehículos eléctricos', s: 'Li Co Pb Nd Dy' },
    { id: 'chips', e: '💻', en: 'Chips & Electronics', tr: 'Çip ve Elektronik', es: 'Chips y electrónica', s: 'Si Ga Ge In Ta As' },
    { id: 'medicine', e: '🏥', en: 'Medicine', tr: 'Tıp', es: 'Medicina', s: 'He Tc Lu Gd' },
    { id: 'nuclear', e: '☢️', en: 'Nuclear & Space', tr: 'Nükleer ve Uzay', es: 'Nuclear y espacio', s: 'U Th Pu Be Hf Re' },
    { id: 'magnets', e: '🧲', en: 'Magnets', tr: 'Mıknatıslar', es: 'Imanes', s: 'Nd Pr Sm Dy Sr' },
    { id: 'solar', e: '☀️', en: 'Solar', tr: 'Güneş Enerjisi', es: 'Energía solar', s: 'Ag Te Cd' }
  ];

  var ICON = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    clear: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    table: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    bars: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>',
    print: '<svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/></svg>',
    share: '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 8l5-5 5 5M5 21h14"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>'
  };

  var LANGS = ['en', 'tr', 'es'];
  var lang = detectLang();
  function detectLang() {
    try { var saved = localStorage.getItem('pe_lang'); if (saved && LANGS.indexOf(saved) >= 0) return saved; } catch (e) { }
    var cand = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < cand.length; i++) { var c = String(cand[i]).toLowerCase().slice(0, 2); if (LANGS.indexOf(c) >= 0) return c; }
    return 'en';
  }
  var state = { group: 'all', sel: null, q: '', mode: 'all' };
  var $view = document.getElementById('view');
  var $nav = document.getElementById('nav');
  var cleanup = null;

  function t(k) { return T[lang][k]; }
  function h(tag, attrs) {
    var e = document.createElement(tag);
    for (var k in (attrs || {})) {
      var v = attrs[k];
      if (k === 'class') e.className = v;
      else if (k === 'style') e.style.cssText = v;
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v);
    }
    for (var i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { add(e, x); }); return; }
    e.appendChild(c.nodeType ? c : document.createTextNode(c));
  }
  function icon(name) { var s = document.createElement('span'); s.style.display = 'flex'; s.innerHTML = ICON[name]; return s; }
  var ES = window.ES || {};
  function nm(e) { return lang === 'tr' ? e.tr : (lang === 'es' && ES[e.sym] ? ES[e.sym].n : e.en); }
  function uses(e) { return lang === 'tr' ? e.ut : (lang === 'es' && ES[e.sym] ? ES[e.sym].u : e.ue); }
  function sname(s) { return lang === 'tr' ? s.tr : (lang === 'es' ? s.es : s.en); }
  function allUses(e) {
    var lists = [uses(e), e.ue, e.ut]; if (ES[e.sym]) lists.push(ES[e.sym].u);
    return lists;
  }
  function gname(g) { return T[lang].groups[GROUPS.indexOf(g)]; }
  function bySym(s) { return EL.filter(function (e) { return e.sym === s; })[0]; }
  function period(e) { return e.row <= 7 ? e.row : (e.row === 8 ? 6 : 7); }
  function groupNo(e) { return e.row <= 7 ? e.col : null; }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

  function norm(s) { return normMap(s).n; }
  function normMap(s) {
    var n = '', map = [];
    for (var i = 0; i < s.length; i++) {
      var c = s[i].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');
      for (var j = 0; j < c.length; j++) { n += c[j]; map.push(i); }
    }
    return { n: n, map: map };
  }
  function highlight(text, q) {
    var variants = qvariants(q), nm_ = normMap(text);
    for (var i = 0; i < variants.length; i++) {
      var idx = nm_.n.indexOf(variants[i]);
      if (idx >= 0) {
        var a = nm_.map[idx], b = nm_.map[idx + variants[i].length - 1] + 1;
        return [text.slice(0, a), h('mark', {}, text.slice(a, b)), text.slice(b)];
      }
    }
    return [text];
  }
  function qvariants(q) {
    var nq = norm(q.trim()), v = [nq];
    if (nq.length > 3 && nq.slice(-1) === 'y') v.push(nq.slice(0, -1) + 'ie');
    if (nq.length > 3 && nq.slice(-1) === 's') v.push(nq.slice(0, -1));
    return v;
  }

  function search(q, mode) {
    q = q.trim();
    if (!q) return [];
    var variants = qvariants(q), digits = /^\d+$/.test(q), out = [];
    EL.forEach(function (e) {
      var score = 0, useHit = null;
      if (digits) {
        if (String(e.n) === q) score = 100; else if (String(e.n).indexOf(q) === 0 && (mode === 'all' || mode === 'number')) score = 60;
        if (mode !== 'all' && mode !== 'number') score = 0;
      } else {
        if (mode === 'all' || mode === 'symbol') {
          var sy = norm(e.sym);
          if (sy === variants[0]) score = Math.max(score, 95);
          else if (mode === 'symbol' && sy.indexOf(variants[0]) === 0) score = Math.max(score, 70);
        }
        if (mode === 'all' || mode === 'name') {
          [e.en, e.tr, ES[e.sym] ? ES[e.sym].n : e.en].forEach(function (name) {
            var nn = norm(name);
            variants.forEach(function (v) {
              var i = nn.indexOf(v);
              if (i === 0) score = Math.max(score, 90); else if (i > 0) score = Math.max(score, 60);
            });
          });
        }
        if (mode === 'all' || mode === 'use') {
          var lists = allUses(e);
          lists.forEach(function (list) {
            list.forEach(function (u, ui) {
              var nu = norm(u);
              variants.forEach(function (v) {
                if (nu.indexOf(v) >= 0) {
                  var sc = ui === 0 ? 56 : 50;
                  if (sc > score || !useHit) { if (!useHit || sc > (useHit.sc || 0)) useHit = { text: u, sc: sc }; }
                  score = Math.max(score, sc);
                }
              });
            });
          });
        }
      }
      if (score > 0) out.push({ e: e, score: score, use: useHit });
    });
    out.sort(function (a, b) { return b.score - a.score || a.e.n - b.e.n; });
    return out;
  }

  /* ---------- shared bits ---------- */
  var LANG_NAMES = { en: 'English', tr: 'Türkçe', es: 'Español' };
  function langToggle() {
    var wrap = h('div', { class: 'langmenu' });
    var list = null;
    function close() { if (list) { list.remove(); list = null; btn.setAttribute('aria-expanded', 'false'); } }
    function open() {
      list = h('div', { class: 'langlist', role: 'listbox', 'aria-label': 'Language' }, LANGS.map(function (code) {
        return h('button', { class: lang === code ? 'on' : '', role: 'option', 'aria-selected': lang === code ? 'true' : 'false',
          onclick: function () { lang = code; save('pe_lang', code); document.documentElement.lang = code; route(); } },
          h('span', {}, LANG_NAMES[code]), lang === code ? '✓' : null);
      }));
      wrap.appendChild(list); btn.setAttribute('aria-expanded', 'true');
      setTimeout(function () { document.addEventListener('click', close, { once: true }); }, 0);
    }
    var btn = h('button', { class: 'langbtn', 'aria-haspopup': 'listbox', 'aria-expanded': 'false', 'aria-label': 'Language: ' + LANG_NAMES[lang],
      onclick: function (ev) { ev.stopPropagation(); if (list) close(); else open(); } },
      h('span', { class: 'globe' }), lang.toUpperCase());
    btn.firstChild.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>';
    wrap.appendChild(btn);
    return wrap;
  }
  function topBar() {
    return h('div', { class: 'top' },
      h('div', { class: 'brand' }, h('div', { class: 'logo' }, h('i'), h('i'), h('i'), h('i')), h('b', {}, t('appName'))),
      langToggle());
  }
  function toast(msg) {
    var el = h('div', { class: 'toast', role: 'status' }, msg);
    document.getElementById('app').appendChild(el);
    setTimeout(function () { el.remove(); }, 1800);
  }
  function elRow(e, opts) {
    opts = opts || {};
    var line2 = opts.use ? highlight(opts.use, opts.q) : [uses(e)[0]];
    var name = opts.q ? highlight(nm(e), opts.q) : [nm(e)];
    return h('a', { class: 'row', href: '#/el/' + e.n, onclick: function () { if (opts.q) rememberSearch(opts.q); } },
      h('div', { class: 'tile g-' + e.g }, h('span', { class: 'n' }, String(e.n)), h('span', { class: 's' }, e.sym)),
      h('div', { class: 'mid' }, h('b', {}, name), h('span', {}, line2)),
      h('div', { class: 'em emoji' }, e.e));
  }
  function rememberSearch(q) {
    q = q.trim(); if (!q) return;
    var r = recents().filter(function (x) { return x !== q; }); r.unshift(q);
    save('pe_recent', JSON.stringify(r.slice(0, 5)));
  }
  function recents() { try { return JSON.parse(localStorage.getItem('pe_recent') || '[]'); } catch (e) { return []; } }

  /* ---------- table ---------- */
  function viewTable() {
    var cells = {}, minis = [], chipEls = {};
    var countEl = h('b', { class: 'n' }), gnEl = h('div', { class: 'gn' });
    var peek = h('a', { class: 'peek', href: '#', style: 'display:none' });

    var chips = h('div', { class: 'chips', role: 'tablist' });
    ['all'].concat(GROUPS).forEach(function (g, i) {
      var label = g === 'all' ? t('all') : t('chips')[i - 1];
      var c = h('button', { class: 'chip', role: 'tab', onclick: function () { state.group = g; applyFilter(true); } }, h('span', { class: 'dot g-' + g }), label);
      chipEls[g] = c; chips.appendChild(c);
    });

    var mapGrid = h('div', { class: 'mapgrid' });
    var frame = h('div', { class: 'frame', 'aria-hidden': 'true' });
    var map = h('div', { class: 'map', role: 'img', 'aria-label': 'Overview', onclick: mapTap }, mapGrid, frame);
    var ov = h('div', { class: 'overview' }, map, h('div', { class: 'ovtext' }, countEl, gnEl, h('div', { class: 'hint' }, t('hint'))));

    var grid = h('div', { class: 'tgrid' });
    var sc = h('div', { class: 'tscroll' }, grid);
    var wrap = h('div', { class: 'tablewrap' }, sc, h('div', { class: 'fade' }));

    // headers
    grid.appendChild(h('div', { class: 'th corner', style: 'grid-column:1;grid-row:1' }));
    for (var c = 1; c <= 18; c++) grid.appendChild(h('div', { class: 'th', style: 'grid-column:' + (c + 1) + ';grid-row:1' }, String(c)));
    for (var p = 1; p <= 7; p++) grid.appendChild(h('div', { class: 'tp', style: 'grid-column:1;grid-row:' + (p + 1) }, String(p)));
    function gridRow(r) { return r <= 7 ? r + 1 : r + 2; }

    var order = [];
    EL.forEach(function (e) {
      var cell = h('div', { class: 'cell g-' + e.g, style: 'grid-column:' + (e.col + 1) + ';grid-row:' + gridRow(e.row), role: 'button', tabindex: '0', 'aria-label': nm(e) + ', ' + e.sym + ', ' + e.n,
        onclick: function () { select(e.n); }, onkeydown: function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(e.n); } } },
        h('span', { class: 'num' }, String(e.n)), h('span', { class: 'emo emoji' }, e.e), h('span', { class: 'sy' }, e.sym));
      cells[e.n] = cell; grid.appendChild(cell);
      var m = h('div', { class: 'mc g-' + e.g, style: 'grid-column:' + e.col + ';grid-row:' + (e.row <= 7 ? e.row : e.row + 1) });
      mapGrid.appendChild(m); minis.push({ el: m, g: e.g });
    });
    [[3, 6, 'lanthanide', '57–71'], [3, 7, 'actinide', '89–103']].forEach(function (x) {
      grid.appendChild(h('div', { class: 'cell ph g-' + x[2], style: 'grid-column:' + (x[0] + 1) + ';grid-row:' + (x[1] + 1) }, h('span', { class: 'sy' }, x[3])));
      var m = h('div', { class: 'mc g-' + x[2], style: 'grid-column:' + x[0] + ';grid-row:' + x[1] });
      mapGrid.appendChild(m); minis.push({ el: m, g: x[2] });
    });

    function applyFilter(scrollTo) {
      var g = state.group, count = 0;
      EL.forEach(function (e) {
        var dim = g !== 'all' && e.g !== g;
        cells[e.n].classList.toggle('dim', dim);
        if (!dim) count++;
      });
      minis.forEach(function (m) { m.el.classList.toggle('dim', g !== 'all' && m.g !== g); });
      Object.keys(chipEls).forEach(function (k) {
        var on = k === g, c = chipEls[k];
        c.className = 'chip' + (on ? ' on g-' + k : ''); c.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      countEl.textContent = String(count);
      gnEl.textContent = g === 'all' ? t('allElements') : gname(g);
      if (scrollTo && g !== 'all') {
        var first = EL.filter(function (e) { return e.g === g; })[0];
        var cell = cells[first.n];
        sc.scrollTo({ left: Math.max(0, cell.offsetLeft - 40), top: Math.max(0, cell.offsetTop - 40), behavior: 'smooth' });
      }
    }
    function select(n) {
      if (state.sel === n) { location.hash = '#/el/' + n; return; }
      if (state.sel && cells[state.sel]) cells[state.sel].classList.remove('sel');
      state.sel = n; cells[n].classList.add('sel');
      showPeek();
    }
    function showPeek() {
      if (!state.sel) { peek.style.display = 'none'; return; }
      var e = EL[state.sel - 1];
      peek.style.display = 'flex'; peek.setAttribute('href', '#/el/' + e.n);
      peek.textContent = '';
      peek.appendChild(h('div', { class: 'big emoji g-' + e.g }, e.e));
      peek.appendChild(h('div', { class: 'tx' },
        h('div', { class: 'nm' }, h('b', {}, nm(e)), h('span', {}, e.sym + ' · ' + e.n)),
        h('div', { class: 'lab' }, t('topUse')), h('div', { class: 'use' }, uses(e)[0])));
      peek.appendChild(h('span', { style: 'display:flex;flex:none' }, icon('back')));
      peek.lastChild.firstChild.style.transform = 'scaleX(-1)';
    }
    function updateFrame() {
      var gw = mapGrid.offsetWidth, gh = mapGrid.offsetHeight;
      var sw = sc.scrollWidth, shh = sc.scrollHeight, cw = sc.clientWidth, ch = Math.min(sc.clientHeight, shh);
      var fw = Math.min(gw, gw * cw / sw), fh = Math.min(gh, gh * ch / shh);
      frame.style.width = fw + 'px'; frame.style.height = fh + 'px';
      frame.style.left = (2 + gw * sc.scrollLeft / sw) + 'px'; frame.style.top = (2 + gh * sc.scrollTop / shh) + 'px';
    }
    function mapTap(ev) {
      var r = mapGrid.getBoundingClientRect();
      var fx = (ev.clientX - r.left) / r.width, fy = (ev.clientY - r.top) / r.height;
      sc.scrollTo({ left: fx * sc.scrollWidth - sc.clientWidth / 2, top: fy * sc.scrollHeight - sc.clientHeight / 2, behavior: 'smooth' });
    }
    sc.addEventListener('scroll', updateFrame, { passive: true });
    window.addEventListener('resize', updateFrame);
    cleanup = function () { window.removeEventListener('resize', updateFrame); };

    var searchLink = h('a', { class: 'searchbar', href: '#/search' }, icon('search'), h('span', {}, t('searchPh')));
    searchLink.firstChild.firstChild.style.cssText = 'width:22px;height:22px;fill:none;stroke:#15171C;stroke-width:2;stroke-linecap:round';
    $view.append(topBar(), searchLink, chips, ov, wrap, peek);
    applyFilter(false); showPeek();
    requestAnimationFrame(function () {
      updateFrame();
      if (state.sel) { var c = cells[state.sel]; sc.scrollTo({ left: Math.max(0, c.offsetLeft - 120), top: Math.max(0, c.offsetTop - 80) }); }
    });
  }

  /* ---------- detail ---------- */
  function viewDetail(n) {
    var e = EL[n - 1];
    if (!e) { location.hash = '#/'; return; }
    var pu = PU[String(e.n)] || {};
    var us = uses(e), gno = groupNo(e);
    var meta = (gno ? t('group') + ' ' + gno + ' · ' : '') + t('period') + ' ' + period(e) + ' · ' + e.m + ' u';
    var hero = h('div', { class: 'hero g-' + e.g },
      h('div', { class: 'halo' }),
      h('div', { class: 'bar' },
        h('button', { 'aria-label': t('back'), onclick: function () { history.length > 1 ? history.back() : (location.hash = '#/'); } }, icon('back')),
        h('div', { class: 'cat' }, gname(e.g)), h('span', { style: 'width:48px' })),
      h('div', { class: 'hn' }, String(e.n)), h('div', { class: 'hs' }, e.sym), h('div', { class: 'he emoji' }, e.e),
      h('div', { class: 'ht' }, h('b', {}, nm(e)), h('span', {}, meta)));
    hero.querySelector('.bar button svg').style.cssText = 'width:24px;height:24px;fill:none;stroke:#15171C;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round';
    var also = us.slice(1);
    var body = h('div', { class: 'scroll' }, hero,
      h('div', { class: 'sec' }, h('div', { class: 'label' }, t('topUse')), h('h2', {}, us[0]),
        (lang === 'es' ? h('p', { style: 'font-size:13px;color:var(--mute);margin-top:6px' }, t('enNote')) : null),
        h('p', {}, lang === 'tr' ? e.dt : e.de),
        (pu[(lang === 'tr' ? 'tr' : 'en') + '_text'] ? h('p', {}, pu[(lang === 'tr' ? 'tr' : 'en') + '_text']) : null)),
      also.length ? h('div', { class: 'sec' }, h('div', { class: 'label' }, t('alsoUsed')), h('div', { class: 'wrap' }, also.map(function (u) { return h('div', { class: 'pill2' }, u); }))) : null,
      h('div', { style: 'height:16px' }));
    function stepBtn(x, dir) {
      if (!x) return h('span', { style: 'width:64px;flex:none' });
      return h('a', { class: 'step', href: '#/el/' + x.n, 'aria-label': (dir < 0 ? '←' : '→') + ' ' + nm(x), replace: '1' }, h('small', {}, String(x.n)), x.sym);
    }
    var shareBtn = h('button', { class: 'btn', onclick: function () { share(e); } }, icon('share'), t('share'));
    var actions = h('div', { class: 'actions' }, stepBtn(EL[n - 2], -1), shareBtn, stepBtn(EL[n], 1));
    $view.append(body, actions);
    // stepping between elements shouldn't grow history
    Array.prototype.forEach.call(actions.querySelectorAll('a.step'), function (a) {
      a.addEventListener('click', function (ev) { ev.preventDefault(); location.replace(a.getAttribute('href')); });
    });
  }
  function share(e) {
    var text = nm(e) + ' (' + e.sym + ') — ' + t('topUse') + ': ' + uses(e)[0];
    var url = location.href;
    if (navigator.share) { navigator.share({ title: 'Periodic Explorer', text: text, url: url }).catch(function () { }); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text + ' ' + url).then(function () { toast(t('copied')); }, function () { toast(text); });
    else toast(text);
  }

  /* ---------- search ---------- */
  function viewSearch() {
    var results = h('div', {}), input;
    var modes = ['all', 'name', 'symbol', 'number', 'use'];
    var modeRow = h('div', { class: 'chips' });
    function drawModes() {
      modeRow.textContent = '';
      modes.forEach(function (m, i) { modeRow.appendChild(h('button', { class: 'seg' + (state.mode === m ? ' on' : ''), onclick: function () { state.mode = m; drawModes(); draw(); } }, t('modes')[i])); });
    }
    function draw() {
      results.textContent = '';
      var q = state.q.trim();
      if (!q) {
        var rc = recents();
        if (rc.length) results.appendChild(h('div', { class: 'sec', style: 'padding-top:18px' }, h('div', { class: 'label' }, t('recent')), h('div', { class: 'wrap' }, rc.map(function (r) { return h('button', { class: 'seg', onclick: function () { state.q = r; input.value = r; draw(); } }, r); }))));
        results.appendChild(h('div', { class: 'sec', style: 'padding-top:18px' }, h('div', { class: 'label' }, t('tryTitle')), h('div', { class: 'wrap' }, t('suggest').map(function (r) { return h('button', { class: 'seg', onclick: function () { state.q = r; input.value = r; draw(); } }, r); }))));
        return;
      }
      var res = search(q, state.mode);
      if (!res.length) { results.appendChild(h('div', { class: 'empty' }, t('none') + ' “' + q + '”.')); return; }
      results.appendChild(h('div', { class: 'rhead' }, h('b', {}, res.length + ' ' + t('elements'))));
      results.appendChild(h('div', { class: 'rlist' }, res.map(function (r) { return elRow(r.e, { q: q, use: r.use ? r.use.text : null }); })));
    }
    input = h('input', { type: 'search', value: state.q, placeholder: t('searchPh'), 'aria-label': t('searchPh'), autocomplete: 'off', autocapitalize: 'none', spellcheck: 'false', enterkeyhint: 'search',
      oninput: function () { state.q = input.value; draw(); } });
    var clear = h('button', { class: 'clear', 'aria-label': t('clear'), onclick: function () { state.q = ''; input.value = ''; draw(); input.focus(); } }, icon('clear'));
    clear.querySelector('svg').style.cssText = 'width:20px;height:20px;fill:none;stroke:#5B6068;stroke-width:2.2;stroke-linecap:round';
    var back = h('button', { class: 'back', 'aria-label': t('back'), onclick: function () { history.length > 1 ? history.back() : (location.hash = '#/'); } }, icon('back'));
    back.querySelector('svg').style.cssText = 'width:24px;height:24px;fill:none;stroke:#15171C;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round';
    $view.append(h('div', { class: 'sbar' }, back, h('div', { class: 'field' }, input, clear)), modeRow, h('div', { class: 'scroll' }, results));
    drawModes(); draw();
    if (!state.q) setTimeout(function () { input.focus(); }, 50);
  }

  /* ---------- sectors ---------- */
  function sectorEls(s) { return s.s.split(' ').map(bySym); }
  function viewSectors() {
    var grid = h('div', { class: 'sgrid' }, SECTORS.map(function (s) {
      var els = sectorEls(s), shown = els.slice(0, 6);
      return h('a', { class: 'scard', href: '#/sector/' + s.id },
        h('div', { class: 't' }, h('span', { class: 'e emoji' }, s.e), h('span', {}, els.length + ' ' + t('elements'))),
        h('b', {}, sname(s)),
        h('div', { class: 'cs' }, shown.map(function (e) { return h('span', { class: 'sc g-' + e.g }, e.sym); }), els.length > 6 ? h('span', { class: 'more' }, '+' + (els.length - 6)) : null));
    }));
    $view.append(h('div', { class: 'scroll' }, h('div', { class: 'pagehead' }, h('div', { class: 'page-h' }, h('h1', {}, t('sectors')), h('p', {}, t('sectorsSub'))), langToggle()), grid));
  }
  function viewSector(id) {
    var s = SECTORS.filter(function (x) { return x.id === id; })[0];
    if (!s) { location.hash = '#/sectors'; return; }
    var back = h('button', { 'aria-label': t('back'), onclick: function () { location.hash = '#/sectors'; } }, icon('back'));
    back.querySelector('svg').style.cssText = 'width:24px;height:24px;fill:none;stroke:#15171C;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round';
    $view.append(h('div', { class: 'backrow' }, back, h('b', {}, (s.e + ' ' + (sname(s))))),
      h('div', { class: 'scroll' }, h('div', { class: 'rhead' }, h('b', {}, sectorEls(s).length + ' ' + t('elements'))), h('div', { class: 'rlist' }, sectorEls(s).map(function (e) { return elRow(e); }))));
  }

  /* ---------- poster ---------- */
  function viewPoster() {
    var pl = lang;
    var files = { en: 'posters/periodic-table-A4-EN.pdf', tr: 'posters/periyodik-tablo-A4-TR.pdf', es: 'posters/tabla-periodica-A4-ES.pdf' };
    var optsEl = h('div', { class: 'opts' });
    var dl = h('a', { class: 'btn', download: '', href: files[pl] }, icon('download'), t('download'));
    var pr = h('button', { class: 'btn ghost', 'aria-label': t('print'), onclick: function () { window.open(files[pl], '_blank'); } }, icon('print'));
    function drawOpts() {
      optsEl.textContent = '';
      [['en', 'English'], ['tr', 'Türkçe'], ['es', 'Español']].forEach(function (x) {
        optsEl.appendChild(h('button', { class: pl === x[0] ? 'on' : '', onclick: function () { pl = x[0]; dl.setAttribute('href', files[pl]); drawOpts(); } }, x[1]));
      });
    }
    var pg = h('div', { class: 'pgrid' });
    EL.forEach(function (e) { pg.appendChild(h('div', { class: 'pc g-' + e.g, style: 'grid-column:' + e.col + ';grid-row:' + (e.row <= 7 ? e.row : e.row + 1) })); });
    [[3, 6, 'lanthanide'], [3, 7, 'actinide']].forEach(function (x) { pg.appendChild(h('div', { class: 'pc g-' + x[2], style: 'grid-column:' + x[0] + ';grid-row:' + x[1] })); });
    drawOpts();
    $view.append(h('div', { class: 'scroll' },
      h('div', { class: 'page-h' }, h('h1', {}, t('poster')), h('p', {}, t('posterSub'))),
      h('div', { class: 'paper' }, h('div', { class: 'pt' }, t('pTitle')), pg),
      h('div', { class: 'sec' }, h('div', { class: 'label', style: 'margin-bottom:8px' }, t('language')), optsEl),
      h('div', { class: 'note' }, t('printNote')),
      h('div', { class: 'actions', style: 'padding:18px 20px 20px' }, dl, pr)));
  }

  /* ---------- router ---------- */
  function renderNav(active) {
    $nav.textContent = '';
    [['#/', 'table', 'navTable', 'table'], ['#/sectors', 'bars', 'navSectors', 'sectors'], ['#/search', 'search', 'navSearch', 'search'], ['#/poster', 'print', 'navPoster', 'poster']].forEach(function (x) {
      $nav.appendChild(h('a', { href: x[0], class: active === x[3] ? 'on' : '', 'aria-current': active === x[3] ? 'page' : null }, h('span', { class: 'pill' }, icon(x[1])), t(x[2])));
    });
  }
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    $view.textContent = '';
    var hash = location.hash || '#/', m;
    document.documentElement.lang = lang;
    if ((m = hash.match(/^#\/el\/(\d+)/))) { renderNav('table'); viewDetail(parseInt(m[1], 10)); }
    else if (hash.indexOf('#/search') === 0) { renderNav('search'); viewSearch(); }
    else if ((m = hash.match(/^#\/sector\/(\w+)/))) { renderNav('sectors'); viewSector(m[1]); }
    else if (hash.indexOf('#/sectors') === 0) { renderNav('sectors'); viewSectors(); }
    else if (hash.indexOf('#/poster') === 0) { renderNav('poster'); viewPoster(); }
    else { renderNav('table'); viewTable(); }
  }
  window.addEventListener('hashchange', route);
  route();
  if ('serviceWorker' in navigator) window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }); });
})();
