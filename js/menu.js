/* Uptown menu + demo order drawer. Requires js/menu-data.js (MENU, DRINKS, FLAG_LABEL). */
(function () {
  const $ = id => document.getElementById(id);
  const money = n => '$' + n.toFixed(2);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const GRAT = window.LOC.gratuity;          // e.g. 0.20
  const PICKUP = window.LOC.address;

  /* ---------------- Menu ---------------- */
  let menuTab = 'breakfast', menuFilter = 'all';
  const FILTERS = [['all', 'All'], ['good', 'Good Cat'], ['bad', 'Bad Cat'], ['v', 'Vegan'], ['vg', 'Vegetarian'], ['gf', 'Gluten free']];
  const index = {};

  const passes = (item, sec) => {
    if (menuFilter === 'all') return true;
    if (menuFilter === 'good' || menuFilter === 'bad') return sec.cat === menuFilter;
    if (menuFilter === 'vg') return item[3].includes('vg') || item[3].includes('v');
    return item[3].includes(menuFilter);
  };

  function renderMenu() {
    $('menuTabs').innerHTML = Object.entries(MENU).map(([k, v]) =>
      `<button class="tab" role="tab" data-tab="${k}" aria-selected="${k === menuTab}">${v.label}</button>`).join('');
    $('menuChips').innerHTML = FILTERS.map(([k, l]) =>
      `<button class="chip" data-filter="${k}" aria-pressed="${k === menuFilter}">${l}</button>`).join('');
    const html = MENU[menuTab].sections.map(sec => {
      const items = sec.items.filter(i => passes(i, sec));
      if (!items.length) return '';
      const tag = sec.cat ? `<span class="tag ${sec.cat}">${sec.cat === 'good' ? 'Light' : 'Hearty'}</span>` : '';
      const rows = items.map(i => {
        const id = menuTab + '-' + slug(i[0]);
        index[id] = { name: i[0], price: i[1] };
        const flags = i[3].map(f => `<span class="flag">${FLAG_LABEL[f]}</span>`).join('');
        return `<li class="item"><div class="item-main"><div class="item-top"><h4>${esc(i[0])}${flags}</h4><span class="leader"></span><span class="price">${money(i[1])}</span></div>${i[2] ? `<p>${esc(i[2])}</p>` : ''}</div><button class="add" data-add="${id}" aria-label="Add ${esc(i[0])} to order">+</button></li>`;
      }).join('');
      return `<section class="menu-sec"><h3>${esc(sec.name)}${tag}</h3><ul>${rows}</ul></section>`;
    }).join('');
    $('menuBody').innerHTML = html ? `<div class="menu-cols">${html}</div>` : '<p class="empty">Nothing matches that filter in this section.</p>';
  }
  $('menuTabs').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) { menuTab = b.dataset.tab; renderMenu(); } });
  $('menuChips').addEventListener('click', e => { const b = e.target.closest('[data-filter]'); if (b) { menuFilter = b.dataset.filter; renderMenu(); } });
  $('menuBody').addEventListener('click', e => { const b = e.target.closest('[data-add]'); if (b) { add(b.dataset.add); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); } });
  window.jumpMenu = which => { menuFilter = which; renderMenu(); $('menu').scrollIntoView({ behavior: 'smooth' }); };

  /* ---------------- Drinks ---------------- */
  let drinkTab = 'coffee';
  function renderDrinks() {
    $('drinkTabs').innerHTML = Object.entries(DRINKS).map(([k, v]) =>
      `<button class="tab" role="tab" data-dtab="${k}" aria-selected="${k === drinkTab}">${v.label}</button>`).join('');
    $('drinkBody').innerHTML = '<div class="menu-cols">' + DRINKS[drinkTab].sections.map(sec => {
      const rows = sec.items.map(i => `<li class="item"><div class="item-main"><div class="item-top"><h4>${esc(i[0])}</h4><span class="leader"></span><span class="price">${money(i[1])}</span></div>${i[2] ? `<p>${esc(i[2])}</p>` : ''}</div></li>`).join('');
      return `<section class="menu-sec"><h3>${esc(sec.name)}</h3><ul>${rows}</ul></section>`;
    }).join('') + '</div>';
  }
  $('drinkTabs').addEventListener('click', e => { const b = e.target.closest('[data-dtab]'); if (b) { drinkTab = b.dataset.dtab; renderDrinks(); } });

  /* ---------------- Demo order drawer (no payment wired) ---------------- */
  let cart = {};
  const totals = () => { let sub = 0; for (const [id, q] of Object.entries(cart)) sub += index[id].price * q; return { sub, grat: sub * GRAT, total: sub * (1 + GRAT) }; };
  function add(id) { cart[id] = (cart[id] || 0) + 1; update(); }
  window.qty = (id, d) => { cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; update(); };
  function update() {
    const n = Object.values(cart).reduce((a, b) => a + b, 0);
    document.querySelectorAll('.cart-badge').forEach(c => { c.textContent = n; c.classList.toggle('on', n > 0); });
    renderCart();
  }
  function renderCart(done) {
    const body = $('cartBody'), foot = $('cartFoot');
    if (done) {
      body.innerHTML = `<div class="done"><h3>Order received</h3><p>Thanks${done.name ? ', ' + esc(done.name) : ''}! We'll text you when it's ready for pickup at ${esc(PICKUP)}.</p><p class="demo-tag">Demo only — no order was placed and no payment was taken.</p></div>`;
      foot.innerHTML = '<button class="btn-solid" onclick="closeCart()">Close</button>';
      return;
    }
    const ids = Object.keys(cart);
    if (!ids.length) {
      body.innerHTML = '<p class="empty">Your order is empty.<br>Tap <strong>+</strong> on any menu item.</p>';
      foot.innerHTML = '<a class="btn-solid" href="#menu" onclick="closeCart()" style="width:100%">Browse the menu</a>';
      return;
    }
    body.innerHTML = ids.map(id => `<div class="cart-line"><div class="nm">${esc(index[id].name)}<div class="pr">${money(index[id].price)}</div></div><div class="qty"><button onclick="qty('${id}',-1)" aria-label="Remove one">−</button><span>${cart[id]}</span><button onclick="qty('${id}',1)" aria-label="Add one">+</button></div></div>`).join('');
    const t = totals();
    foot.innerHTML = `<div class="totals"><div><span>Subtotal</span><span>${money(t.sub)}</span></div><div><span>${Math.round(GRAT * 100)}% auto-gratuity</span><span>${money(t.grat)}</span></div><div class="grand"><span>Total</span><span>${money(t.total)}</span></div></div><input id="custName" type="text" placeholder="Name for pickup" aria-label="Name for pickup"><button class="btn-solid" onclick="placeOrder()">Place order (demo)</button><p class="demo-tag">Demo — no payment taken</p>`;
  }
  window.placeOrder = () => { const name = ($('custName').value || '').trim(); cart = {}; update(); renderCart({ name }); };
  window.openCart = () => { renderCart(); $('scrim').classList.add('open'); $('drawer').classList.add('open'); document.body.style.overflow = 'hidden'; };
  window.closeCart = () => { $('drawer').classList.remove('open'); $('scrim').classList.remove('open'); document.body.style.overflow = ''; };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeCart(); });
  document.querySelectorAll('[data-open-cart]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); window.openCart(); }));

  renderMenu(); renderDrinks(); update();
})();
