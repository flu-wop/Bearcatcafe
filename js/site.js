/* Bearcat Cafe — shared behavior for location pages */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];

  /* Sticky header compacts on scroll */
  const hdr = $('.site-header');
  const onScroll = () => hdr && hdr.classList.toggle('compact', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav */
  const toggle = $('.nav-toggle'), nav = $('.main-nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', e => { if (e.target.closest('a') && !e.target.closest('.dd-menu a[target]')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); } });
  }

  /* Locations dropdown */
  const dd = $('.dd-btn'), ddMenu = $('.dd-menu');
  if (dd) {
    const set = o => { ddMenu.classList.toggle('open', o); dd.setAttribute('aria-expanded', o); };
    dd.addEventListener('click', e => { e.stopPropagation(); set(!ddMenu.classList.contains('open')); });
    document.addEventListener('click', e => { if (!e.target.closest('.dd')) set(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { set(false); } });
  }

  /* Active nav link follows scroll */
  const links = $$('.main-nav a[href^="#"]');
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(es => es.forEach(e => {
    const a = map.get(e.target.id); if (!a) return;
    if (e.isIntersecting) { links.forEach(l => l.classList.remove('active')); a.classList.add('active'); }
  }), { rootMargin: '-35% 0px -60% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });

  /* Open / closed status. window.LOC.hours = { 0..6 (Sun..Sat): [openMin, closeMin] | null } */
  const L = window.LOC;
  const badge = $('#status');
  if (L && badge) {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = days.indexOf(get('weekday')), mins = (+get('hour') % 24) * 60 + +get('minute');
    const fmt = m => { const h = Math.floor(m / 60); return (h % 12 || 12) + (h >= 12 ? 'pm' : 'am'); };
    const today = L.hours[d];
    let text, open = false;
    if (today && mins >= today[0] && mins < today[1]) { open = true; text = 'Open now · until ' + fmt(today[1]); }
    else if (today && mins < today[0]) { text = 'Opens today at ' + fmt(today[0]); }
    else {
      let n = 1; while (n < 8 && !L.hours[(d + n) % 7]) n++;
      text = 'Closed · opens ' + (n === 1 ? 'tomorrow' : days[(d + n) % 7]) + ' ' + fmt(L.hours[(d + n) % 7][0]);
    }
    badge.classList.toggle('open', open);
    badge.innerHTML = '<i></i>' + text;
  }

  /* Hero video play/pause */
  const vid = $('.hero video'), vbtn = $('.hero-ctrl');
  if (vid && vbtn) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { vid.pause(); vbtn.textContent = '▶'; }
    vbtn.addEventListener('click', () => { if (vid.paused) { vid.play(); vbtn.textContent = '❚❚'; vbtn.setAttribute('aria-label', 'Pause background video'); } else { vid.pause(); vbtn.textContent = '▶'; vbtn.setAttribute('aria-label', 'Play background video'); } });
  }

  /* Gallery lightbox */
  const lb = $('.lightbox');
  if (lb) {
    const img = $('img', lb);
    $$('.gallery button').forEach(b => b.addEventListener('click', () => { img.src = b.dataset.full; img.alt = b.dataset.alt || ''; lb.classList.add('open'); }));
    lb.addEventListener('click', () => lb.classList.remove('open'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  /* Reviews rail arrows */
  const rail = $('.review-rail');
  $$('[data-rail]').forEach(b => b.addEventListener('click', () => rail.scrollBy({ left: +b.dataset.rail * (rail.firstElementChild.offsetWidth + 20), behavior: 'smooth' })));

  /* Reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
  $$('.reveal').forEach(el => io.observe(el));
})();
