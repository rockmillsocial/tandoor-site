/* Tandoor on-site ordering: cart, checkout, Clover iframe payment.
   Card data is entered into Clover-hosted iframes and tokenized by Clover;
   raw card numbers never touch this site or its servers. */
(function () {
'use strict';
var MENU_PRICES = {"Tomato Soup":799,"Lentil Soup":699,"Sweetcorn Soup (VEG.)":699,"Monchow Soup":699,"Chef Special Chicken Soup":899,"Chicken Monchow Soup":899,"Chef Special Lamb Soup":899,"Sweetcorn Soup (CHICKEN)":799,"Samosa":899,"Mixed Pakora":1299,"Masala Papad (2)":699,"Chilli Paneer":1599,"Samosa Chaat":1199,"Onion Pakora":1299,"Gobi Manchurian":1599,"Papad":399,"Soy Chaap Masala":1599,"Paneer Darbar":1699,"Baby Corn Darbar":1599,"Gobi 65":1499,"Corn Patta Chaat":1299,"Bombay Bhel":1299,"Pani Puri":1299,"Makhmali Paneer Angara":1799,"Harabhara Paneer Kebab":1799,"Paneer Manchurian":1599,"Chicken Chukka":1799,"Chicken 65":1599,"Chilli Chicken":1599,"Chicken Manchurian":1599,"Fish Manchurian":1599,"Lamb Chukka":1899,"Goat Ghee Roast":1899,"Shrimp 65":1599,"Chicken Darbar":1699,"Chicken Lollipop":1499,"Chicken Tikka":1799,"Malai Chicken (Mild)":1799,"Haryali Chicken (MEDIUM)":1799,"Tandoori Chicken":1799,"Lamb Chops":2599,"Assorted Kebabas":2099,"Tandoori Pompano":2299,"Tandoori Chicken Full":2999,"Tandoori Wings":1199,"Paneer Butter Masala":1899,"Paneer Tikka Masala":1899,"Matar Paneer":1799,"Kadai Corn Mushroom":1799,"Malai Koftha":1799,"Navratan Korma":1899,"Dal Makhni":1799,"Amritsari Chole Masala":1699,"Bhindi Do Pyaza":1799,"Aloo Gobi Masala":1799,"Tofu Tikka Masala":1799,"Mushroom Tikka Masala":1799,"Veg. Malabar":1799,"Dal Palak":1699,"Dal Tadka":1799,"Veg. Chettinad":1799,"Kaju Kasuri Methi":1899,"Palak Paneer":1899,"Amritsari Paneer Bhurji":1899,"Baingan Curry":1799,"Paneer Methi Malai":1899,"Veg. Jalfrezi":1899,"Tofu Chole Curry":1799,"Balti Paneer":1999,"Sham Savera":1899,"Mushroom Butter Masala":1899,"Chicken Korma":1899,"Butter Chicken":1899,"Chicken Tikka Masala":1999,"Chicken Malabar":1899,"Chicken RoganJosh":1999,"Chicken Saagwala":1999,"Chicken Vindalloo":1999,"Kadai Chicken":2099,"Lamb Saagwala":2099,"Lamb RoganJosh":1999,"Lamb Vindalloo":2099,"Lamb Jalfrezi":1999,"Lamb Tikka Masala":2099,"Shrimp Korma":1999,"Goat Curry":2099,"Goat Saagwala":2099,"Methi Malai Chicken":2099,"Mango Chicken Curry":1999,"Chicken Chettinad":1999,"Achari Chicken Curry":1999,"The Sweet Cashew Chicken Curry":2199,"Lamb Chettinad":2099,"Lamb Gongura":2099,"Lamb Korma":2099,"Fish Malabar":1899,"Chicken Gongura":1999,"Chef Special Chicken Curry":1999,"Plain Rice":499,"Jeera Rice":799,"Ghee Rice":799,"Masala Rice":799,"Veg. Biryani":1699,"Paneer Biryani":1799,"Vijaywada Boneless Chicken Biryani":1799,"Chicken Biryani with bone":1899,"Lamb Biryani":1999,"Goat Biryani":1999,"Chicken Tikka Biryani":1999,"Chicken Nuggets & Fries":699,"Mozzarella Sticks & Fries":699,"French Fries":699,"Plain Warm Milk":299,"Jr. Butter Chicken":1099,"Jr. Paneer Butter Masala":1099,"Gulab Jamun":599,"Rasmalai":599,"Carrot Halwa":699,"Mung Daal Halwo":599,"Vegan Lentil Soup":699,"Vegan Sweetcorn Soup":699,"Vegan Samosa":899,"Vegan Panipuri":1299,"Vegan Samosa Chaat":1199,"Vegan Bombay Bhel":1299,"Vegan Corn Patta Chaat":1299,"Vegan Onion Pakora":1299,"Vegan Mixed Pakora":1299,"Vegan Papad":399,"Vegan Masala Papad":699,"Vegan Kadai Corn Mushroom":1899,"Vegan Baingan Curry":1899,"Vegan Veg Jalfrezi":1999,"Vegan Amritsari Chole Masala":1699,"Vegan Bhindi Do Pyaza":1899,"Vegan Aloo Gobi Masala":1799,"Vegan Tofu Tikka Masala":1799,"Vegan Mushroom Tikka Masala":1799,"Vegan Veg. Malabar":1799,"Vegan Dal Palak":1699,"Vegan Dal Tadka":1799,"Vegan Veg Chettinad":1799,"Vegan Plain Roti":449,"Onion Kulcha":599,"Malabar Paratha (2Pc)":699,"Haryali Naan (Mint - Cilantro)":449,"Plain Naan (NO BUTTER)":399,"Butter Naan":499,"Garlic Butter Naan":549,"Chilli Garlic Naan":649,"Cheese Naan":699,"Bullet Naan (CHILLI)":599,"Chilli Cheese Naan":699,"Masala Naan":499,"Chilli Cheese Garlic Naan":699,"Peshwari Naan":699,"Assorted Bread Basket Naan":1499,"Plain Roti (NO BUTTER)":449,"Butter Roti Tandoori":499,"Cheese Garlic Naan":699,"Raita":299,"Onion, Lemon, Chilli":299,"Tikka Sauce":499,"Malai Sauce":499,"Masala Papad":699,"Pickle":199,"Mango Chutney":199,"Mint Chutney":299,"Tamarind Chutney":299,"Veg. Fried Rice":1699,"Paneer Fried Rice":1699,"Chicken Fried Rice":1799,"Shrimp Fried Rice":1799,"Street Style Veg. Fried Rice":1799,"Street Style Paneer Fried Rice":1799,"Street style Chicken Fried Rice":1899,"Street style Shrimp Fried Rice":1899,"Hakka Noodles VEG":1599,"Hakka Noodles Paneer":1599,"Hakka Noodles Chicken":1699,"Hakka Noodles Shrimp":1699,"Street Style Hakka Noodles VEG":1699,"Street Style Hakka Noodles PANEER":1699,"Street Style Hakka Noodles Chicken":1799,"Street Style Hakka Noodles Shrimp":1799,"Veg. Tikka Pasta":1599,"Paneer Tikka Pasta":1599,"Chef. Sp Veg Pasta":1699,"Chef Sp. Paneer Pasta":1699,"Butter Chicken Pasta":1699,"Chicken Tikka Pasta":1699,"Chef Sp. Chicken Pasta":1799,"Water":50,"Mango Lassi":549,"Buttermilk MASALA":499,"Rosemilk":499,"Redbull 12oz":399,"Ginger Masala Tea":499,"Madras Hot Coffee":499,"Fiji Water 500 Ml":399,"Fiji Water 1L":599,"Sweet Tea With Lemon":299,"Fountain Drink":300,"Unsweet Tea":299,"Half & Half Tea":299,"Frootie":300,"Lemonade":299,"Spellegrino Sparkling Water":399,"Orange Juice":300,"Corona Non Alcoholic":500,"Can Soda":300,"Rupee NON ALC":600,"Bottle Water":249};
var CLOVER_PK = 'ad2f8be87c9d3351c43532727f62abaf';
var TAX_RATE = 0.09;

/* ---------- modifiers: questions asked before a dish goes in the cart ----------
   Verified against the Clover modifier setup on 2026-09-24.
   Spice Level / No Mild / No Spicy, Sauce, Fountain Drink, Can Soda, Papad,
   Ghee Rice and Bowl Of Rice are REQUIRED pick-one. Add-on is OPTIONAL pick-one.
   Kids menu: no questions (per Simit). */
var MOD_QUESTIONS = {
  spice:    { title: 'How spicy?', required: true, multi: false,
              options: ['Very Mild', 'Mild', 'Medium', 'Spicy', '911 FIRE'] },
  nomild:   { title: 'How spicy?', required: true, multi: false,
              options: ['Medium', 'Spicy', '911 FIRE'] },
  nospicy:  { title: 'How spicy?', required: true, multi: false,
              options: ['Very Mild', 'Mild', 'Medium'] },
  addon:    { title: 'Add-on (optional, pick one)', required: false, multi: false,
              options: [['Add Veggies', 400], ['Add Tofu', 400], ['Add Amul Cheese', 400],
                         ['Extra Shot Of Garlic', 300], ['Add Paneer', 400], ['Add Extra Meat', 600]] },
  sauce:    { title: 'Pick a sauce', required: true, multi: false,
              options: ['Tikka Sauce', 'Malai Sauce', 'Mint & Tamarind Sauce'] },
  fountain: { title: 'Pick your fountain drink', required: true, multi: false,
              options: ['Coke', 'Sprite', 'Diet Coke', 'Fanta', 'Ginger Ale', 'Tonic Water', 'Club Soda'] },
  cansoda:  { title: 'Pick your soda', required: true, multi: false,
              options: ['Thums Up', 'Limca', 'Kashmira Jeera Soda', 'Coke', 'Diet Coke', 'Coke Zero',
                         'Pepsi', 'Sprite', 'Root Beer', 'Ginger Beer', 'Dr. Pepper', 'Fanta', 'Sosyo'] },
  papad:    { title: 'Roasted or fried?', required: true, multi: false, options: ['Roasted', 'Fried'] },
  gheerice: { title: 'With or without nuts?', required: true, multi: false,
              options: [['Without Nuts', 0], ['With Nuts', 100]] },
  bowlrice: { title: 'Pick your rice', required: true, multi: false,
              options: [['Basmati Rice', 300], ['Masala Rice', 400]] },
};

// Dish questions, verified against the Clover modifier setup on 2026-09-24.
// Key: website dish name -> question keys. Spice Level/No Mild/No Spicy and
// Sauce/Fountain/Can Soda/Papad/Ghee Rice/Bowl Of Rice are required pick-one;
// Add-on is optional pick-one. Kids menu: no questions (per Simit).
const DISH_MODS = {
  'Achari Chicken Curry': ['nomild','addon'],
  'Aloo Gobi Masala': ['spice','addon'],
  'Amritsari Chole Masala': ['spice','addon'],
  'Amritsari Paneer Bhurji': ['spice','addon'],
  'Baby Corn Darbar': ['spice'],
  'Baingan Curry': ['spice','addon'],
  'Balti Paneer': ['spice','addon'],
  'Bhindi Do Pyaza': ['spice','addon'],
  'Butter Chicken': ['spice','addon'],
  'Butter Chicken Pasta': ['spice'],
  'Can Soda': ['cansoda'],
  'Chef Sp. Chicken Pasta': ['spice'],
  'Chef Sp. Paneer Pasta': ['spice'],
  'Chef Special Chicken Curry': ['nomild','addon'],
  'Chef. Sp Veg Pasta': ['spice'],
  'Chicken 65': ['spice'],
  'Chicken Biryani with bone': ['spice'],
  'Chicken Chettinad': ['nomild'],
  'Chicken Chukka': ['nomild'],
  'Chicken Darbar': ['spice'],
  'Chicken Fried Rice': ['spice'],
  'Chicken Gongura': ['nomild','addon'],
  'Chicken Korma': ['spice','addon'],
  'Chicken Lollipop': ['spice'],
  'Chicken Malabar': ['spice','addon'],
  'Chicken Manchurian': ['spice'],
  'Chicken RoganJosh': ['spice','addon'],
  'Chicken Saagwala': ['spice','addon'],
  'Chicken Tikka': ['spice'],
  'Chicken Tikka Biryani': ['spice'],
  'Chicken Tikka Masala': ['spice','addon'],
  'Chicken Tikka Pasta': ['spice'],
  'Chicken Vindalloo': ['nomild','addon'],
  'Chilli Chicken': ['nomild'],
  'Chilli Paneer': ['nomild'],
  'Corn Patta Chaat': ['spice'],
  'Dal Makhni': ['spice','addon'],
  'Dal Palak': ['spice','addon'],
  'Dal Tadka': ['spice'],
  'Family Pack Hakka Noodles (58 Oz)': ['spice'],
  'Fish Malabar': ['spice','addon'],
  'Fish Manchurian': ['spice'],
  'Fountain Drink': ['fountain'],
  'Ghee Rice': ['gheerice'],
  'Goat Biryani': ['spice'],
  'Goat Curry': ['spice','addon'],
  'Goat Ghee Roast': ['nomild'],
  'Goat Saagwala': ['spice','addon'],
  'Gobi 65': ['spice'],
  'Gobi Manchurian': ['spice'],
  'Hakka Noodles Chicken': ['spice'],
  'Hakka Noodles Paneer': ['spice'],
  'Hakka Noodles Shrimp': ['spice'],
  'Hakka Noodles VEG': ['spice'],
  'Harabhara Paneer Kebab': ['spice'],
  'Jeera Rice': ['gheerice'],
  'Kadai Chicken': ['spice','addon'],
  'Kadai Corn Mushroom': ['spice','addon'],
  'Kaju Kasuri Methi': ['spice','addon'],
  'Lamb Biryani': ['spice'],
  'Lamb Chettinad': ['nomild'],
  'Lamb Chops': ['spice'],
  'Lamb Chukka': ['nomild'],
  'Lamb Gongura': ['nomild','addon'],
  'Lamb Jalfrezi': ['spice','addon'],
  'Lamb Korma': ['spice','addon'],
  'Lamb RoganJosh': ['spice','addon'],
  'Lamb Saagwala': ['spice','addon'],
  'Lamb Tikka Masala': ['spice','addon'],
  'Lamb Vindalloo': ['nomild','addon'],
  'Makhmali Paneer Angara': ['spice'],
  'Malai Koftha': ['spice','addon'],
  'Mango Chicken Curry': ['nospicy','addon'],
  'Masala Papad (2)': ['spice','papad'],
  'Matar Paneer': ['spice','addon'],
  'Methi Malai Chicken': ['spice','addon'],
  'Mushroom Butter Masala': ['spice','addon'],
  'Mushroom Tikka Masala': ['spice','addon'],
  'Navratan Korma': ['spice','addon'],
  'Palak Paneer': ['spice','addon'],
  'Paneer Biryani': ['spice'],
  'Paneer Butter Masala': ['spice','addon'],
  'Paneer Darbar': ['spice'],
  'Paneer Fried Rice': ['spice'],
  'Paneer Manchurian': ['spice'],
  'Paneer Methi Malai': ['spice','addon'],
  'Paneer Tikka Masala': ['spice','addon'],
  'Paneer Tikka Pasta': ['spice'],
  'Papad': ['papad'],
  'Samosa Chaat': ['spice'],
  'Sham Savera': ['spice','addon'],
  'Shrimp 65': ['spice'],
  'Shrimp Fried Rice': ['spice'],
  'Shrimp Korma': ['spice','addon'],
  'Soy Chaap Masala': ['spice'],
  'Street Style Hakka Noodles Chicken': ['spice'],
  'Street Style Hakka Noodles PANEER': ['spice'],
  'Street Style Hakka Noodles Shrimp': ['spice'],
  'Street Style Hakka Noodles VEG': ['spice'],
  'Street Style Paneer Fried Rice': ['spice'],
  'Street Style Veg. Fried Rice': ['spice'],
  'Street style Chicken Fried Rice': ['spice'],
  'Street style Shrimp Fried Rice': ['spice'],
  'Tandoori Chicken': ['spice'],
  'Tandoori Chicken Full': ['spice'],
  'Tandoori Pompano': ['spice'],
  'Tofu Chole Curry': ['spice','addon'],
  'Tofu Tikka Masala': ['spice','addon'],
  'Veg. Biryani': ['spice'],
  'Veg. Chettinad': ['nomild','addon'],
  'Veg. Fried Rice': ['spice'],
  'Veg. Jalfrezi': ['spice','addon'],
  'Veg. Malabar': ['spice','addon'],
  'Veg. Tikka Pasta': ['spice'],
  'Vegan Aloo Gobi Masala': ['spice'],
  'Vegan Amritsari Chole Masala': ['spice','addon'],
  'Vegan Baingan Curry': ['spice'],
  'Vegan Bhindi Do Pyaza': ['spice'],
  'Vegan Dal Palak': ['spice'],
  'Vegan Dal Tadka': ['spice'],
  'Vegan Kadai Corn Mushroom': ['spice'],
  'Vegan Masala Papad': ['spice'],
  'Vegan Mushroom Tikka Masala': ['spice'],
  'Vegan Samosa Chaat': ['spice'],
  'Vegan Tofu Tikka Masala': ['spice'],
  'Vegan Veg Chettinad': ['spice'],
  'Vegan Veg Jalfrezi': ['spice'],
  'Vegan Veg. Malabar': ['spice'],
  'Vijaywada Boneless Chicken Biryani': ['spice'],
};
// dishes with questions: 129

function questionsFor(name) {
  var ids = DISH_MODS[name] || [];
  return ids.map(function (id) {
    if (!MOD_QUESTIONS[id]) return null;
    var q = { id: id, title: MOD_QUESTIONS[id].title, required: MOD_QUESTIONS[id].required,
              multi: MOD_QUESTIONS[id].multi, options: MOD_QUESTIONS[id].options };
    return q;
  }).filter(Boolean);
}

function modPrice(qid, optName) {
  var q = MOD_QUESTIONS[qid];
  if (!q) return null;
  for (var i = 0; i < q.options.length; i++) {
    var o = q.options[i];
    if (typeof o === 'string') { if (o === optName) return 0; }
    else if (o[0] === optName) return o[1];
  }
  return null;
}

function money(cents) { return '$' + (cents / 100).toFixed(2); }
function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }

/* ---------- cart state: { key: { name, qty, mods: [{g, o}] } } ---------- */
var cart = {};
try { cart = JSON.parse(localStorage.getItem('tandoor_cart') || '{}'); } catch (e) { cart = {}; }
// Migrate legacy carts shaped {name: qty}.
Object.keys(cart).forEach(function (k) {
  if (typeof cart[k] === 'number') {
    var q = cart[k];
    delete cart[k];
    if (MENU_PRICES[k] && q >= 1) cart[cartKey(k, [])] = { name: k, qty: Math.min(20, q), mods: [] };
  } else if (cart[k] && typeof cart[k] === 'object') {
    if (!MENU_PRICES[cart[k].name]) delete cart[k];
    if (!Array.isArray(cart[k].mods)) cart[k].mods = [];
  } else {
    delete cart[k];
  }
});
function cartKey(name, mods) {
  return JSON.stringify([name, mods.map(function (m) { return [m.g, m.o]; })]);
}
function lineUnit(entry) {
  var u = MENU_PRICES[entry.name] || 0;
  (entry.mods || []).forEach(function (m) { u += modPrice(m.g, m.o) || 0; });
  return u;
}
function addToCart(name, mods) {
  var key = cartKey(name, mods);
  if (cart[key]) cart[key].qty = Math.min(20, cart[key].qty + 1);
  else cart[key] = { name: name, qty: 1, mods: mods };
  save(); renderCartBtn();
}
function save() { try { localStorage.setItem('tandoor_cart', JSON.stringify(cart)); } catch (e) {} }
function cartCount() { return Object.keys(cart).reduce(function (a, k) { return a + cart[k].qty; }, 0); }
function cartSubtotal() { return Object.keys(cart).reduce(function (a, k) { return a + lineUnit(cart[k]) * cart[k].qty; }, 0); }

/* ---------- drawer UI ---------- */
var drawer, scrim, cartBtn, body, foot, headTitle;
function buildChrome() {
  cartBtn = document.createElement('button');
  cartBtn.id = 't-cart-btn';
  cartBtn.type = 'button';
  cartBtn.innerHTML = 'View Order <span class="t-count">0</span>';
  cartBtn.addEventListener('click', function () { openDrawer('cart'); });
  document.body.appendChild(cartBtn);

  scrim = document.createElement('div');
  scrim.id = 't-scrim';
  scrim.addEventListener('click', closeDrawer);
  document.body.appendChild(scrim);

  drawer = document.createElement('div');
  drawer.id = 't-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Your order');
  drawer.innerHTML =
    '<div class="t-d-head"><h2 id="t-d-title">Your Order</h2>' +
    '<button class="t-d-close" type="button" aria-label="Close">&times;</button></div>' +
    '<div class="t-d-body" id="t-d-body"></div>' +
    '<div class="t-d-foot" id="t-d-foot"></div>';
  drawer.querySelector('.t-d-close').addEventListener('click', closeDrawer);
  document.body.appendChild(drawer);
  body = drawer.querySelector('#t-d-body');
  foot = drawer.querySelector('#t-d-foot');
  headTitle = drawer.querySelector('#t-d-title');
  renderCartBtn();
}
function renderCartBtn() {
  var n = cartCount();
  cartBtn.querySelector('.t-count').textContent = n;
  cartBtn.classList.toggle('hidden', n === 0 && !drawer.classList.contains('open'));
}
function openDrawer(view) {
  drawer.classList.add('open');
  scrim.classList.add('open');
  document.body.style.overflow = 'hidden';
  showView(view || 'cart');
  renderCartBtn();
}
function closeDrawer() {
  drawer.classList.remove('open');
  scrim.classList.remove('open');
  document.body.style.overflow = '';
  renderCartBtn();
}

function showView(view) {
  if (view === 'cart') renderCartView();
  else if (view === 'checkout') renderCheckoutView();
}

/* ---------- cart view ---------- */
function renderCartView() {
  headTitle.textContent = 'Your Order';
  var keys = Object.keys(cart);
  if (!keys.length) {
    body.innerHTML = '<div class="t-empty"><h3>Your cart is empty</h3><p>Add something tasty from the menu below.</p></div>';
    foot.innerHTML = '';
    return;
  }
  var html = '';
  keys.forEach(function (k) {
    var e = cart[k], unit = lineUnit(e);
    var modHtml = (e.mods && e.mods.length)
      ? '<div class="t-lmods">' + esc(e.mods.map(function (m) { return m.o; }).join(' \u2022 ')) + '</div>' : '';
    html += '<div class="t-line" data-key="' + esc(k) + '">' +
      '<div style="flex:1"><div class="t-lname">' + esc(e.name) + '</div>' + modHtml +
      '<div class="t-lprice">' + money(unit) + ' each</div></div>' +
      '<div class="t-qty"><button type="button" data-act="dec" aria-label="Less">&minus;</button>' +
      '<span>' + e.qty + '</span>' +
      '<button type="button" data-act="inc" aria-label="More">+</button></div>' +
      '<div class="t-lsum">' + money(unit * e.qty) + '</div></div>';
  });
  body.innerHTML = html;
  body.querySelectorAll('.t-line').forEach(function (row) {
    var k = row.getAttribute('data-key');
    row.querySelector('[data-act="inc"]').addEventListener('click', function () {
      cart[k].qty = Math.min(20, cart[k].qty + 1); save(); renderCartView(); renderCartBtn();
    });
    row.querySelector('[data-act="dec"]').addEventListener('click', function () {
      cart[k].qty--; if (cart[k].qty <= 0) delete cart[k]; save(); renderCartView(); renderCartBtn();
    });
  });
  var sub = cartSubtotal(), tax = Math.round(sub * TAX_RATE);
  foot.innerHTML =
    '<div class="t-totals">' +
    '<div class="t-row"><span>Subtotal</span><span>' + money(sub) + '</span></div>' +
    '<div class="t-row"><span>Tax (9%)</span><span>' + money(tax) + '</span></div>' +
    '<div class="t-row grand"><span>Total</span><span>' + money(sub + tax) + '</span></div></div>' +
    '<button class="t-btn" type="button" id="t-to-checkout">Checkout</button>';
  foot.querySelector('#t-to-checkout').addEventListener('click', function () { showView('checkout'); });
}

/* ---------- checkout view ---------- */
var clover = null, cloverEls = null, cloverReady = false;
function ensureClover() {
  if (cloverReady || typeof Clover === 'undefined') return;
  try {
    clover = new Clover(CLOVER_PK);
    var elements = clover.elements();
    var style = { input: { 'font-size': '16px', 'font-family': 'inherit', color: '#201a16' } };
    cloverEls = {
      number: elements.create('CARD_NUMBER', style),
      date: elements.create('CARD_DATE', style),
      cvv: elements.create('CARD_CVV', style),
      postal: elements.create('CARD_POSTAL_CODE', style)
    };
    cloverReady = true;
  } catch (e) { cloverReady = false; }
}
function mountClover() {
  ensureClover();
  if (!cloverReady) return false;
  try {
    cloverEls.number.mount('#t-cc-number');
    cloverEls.date.mount('#t-cc-date');
    cloverEls.cvv.mount('#t-cc-cvv');
    cloverEls.postal.mount('#t-cc-postal');
    return true;
  } catch (e) { return true; } // already mounted
}

function renderCheckoutView() {
  headTitle.textContent = 'Checkout';
  var sub = cartSubtotal(), tax = Math.round(sub * TAX_RATE), total = sub + tax;
  body.innerHTML =
    '<div id="t-err"></div>' +
    '<div class="t-field"><label for="t-name">Name <span class="t-star" aria-hidden="true">*</span></label><input id="t-name" autocomplete="name" placeholder="Your name"></div>' +
    '<div class="t-field"><label for="t-phone">Phone <span class="t-star" aria-hidden="true">*</span></label><input id="t-phone" inputmode="tel" autocomplete="tel" placeholder="(803) 555-0100"></div>' +
    '<div class="t-field"><label for="t-email">Email <span style="font-weight:400;color:var(--muted)">(receipt)</span> <span class="t-star" aria-hidden="true">*</span></label><input id="t-email" inputmode="email" autocomplete="email" placeholder="you@example.com"></div>' +
    '<div class="t-fulfill"><label class="sel" style="cursor:default"><input type="radio" checked disabled>Pickup</label>' +
    '<span style="font-size:.85rem;color:var(--muted)">Pickup only &mdash; for delivery, find us on DoorDash, Uber Eats, or Grubhub.</span></div>' +
    '<div class="t-field"><label for="t-note">Note for the kitchen <span style="font-weight:400;color:var(--muted)">(optional)</span></label><textarea id="t-note" placeholder="e.g. extra spicy, no onions"></textarea></div>' +
    '<div class="t-field"><label>Card number <span class="t-star" aria-hidden="true">*</span></label><div class="t-iframe-box" id="t-cc-number"></div></div>' +
    '<div style="display:flex;gap:10px">' +
    '<div class="t-field" style="flex:1"><label>Expiry <span class="t-star" aria-hidden="true">*</span></label><div class="t-iframe-box" id="t-cc-date"></div></div>' +
    '<div class="t-field" style="flex:1"><label>Security code <span class="t-star" aria-hidden="true">*</span></label><div class="t-iframe-box" id="t-cc-cvv"></div></div></div>' +
    '<div class="t-field"><label>ZIP code <span class="t-star" aria-hidden="true">*</span></label><div class="t-iframe-box" id="t-cc-postal"></div></div>' +
    '<div style="font-size:.8rem;color:var(--muted);margin-top:2px"><span class="t-star" aria-hidden="true">*</span> Required</div>';
  foot.innerHTML =
    '<div class="t-totals">' +
    '<div class="t-row"><span>Subtotal</span><span>' + money(sub) + '</span></div>' +
    '<div class="t-row"><span>Tax (9%)</span><span>' + money(tax) + '</span></div>' +
    '<div class="t-row grand"><span>Total</span><span>' + money(total) + '</span></div></div>' +
    '<button class="t-btn" type="button" id="t-pay">Pay ' + money(total) + '</button>' +
    '<button class="t-btn secondary" type="button" id="t-back">Back to order</button>' +
    '<div class="t-secure">Card details are entered into Clover&rsquo;s secure fields and never touch this website.</div>';

  foot.querySelector('#t-back').addEventListener('click', function () { showView('cart'); });
  foot.querySelector('#t-pay').addEventListener('click', pay);

  if (!mountClover()) {
    showErr('Payment fields could not load. Check your connection and try again, or call (803) 659-3434.');
    foot.querySelector('#t-pay').disabled = true;
  }
}
function showErr(msg) {
  var e = body.querySelector('#t-err');
  if (e) e.innerHTML = '<div class="t-err">' + esc(msg) + '</div>';
  body.scrollTop = 0;
}
function fulfillment() {
  return { type: 'pickup', address: '' };
}
function validForm() {
  var name = body.querySelector('#t-name').value.trim();
  var phone = body.querySelector('#t-phone').value.replace(/\D/g, '');
  var email = body.querySelector('#t-email').value.trim();
  if (!name) { showErr('Please enter your name.'); return null; }
  if (phone.length < 7) { showErr('Please enter a valid phone number.'); return null; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { showErr('Please enter a valid email for your receipt.'); return null; }
  var f = fulfillment();
  return { name: name, phone: body.querySelector('#t-phone').value.trim(), email: email,
           fulfillment: f, note: body.querySelector('#t-note').value.trim() };
}

function pay() {
  var form = validForm();
  if (!form) return;
  var btn = foot.querySelector('#t-pay');
  btn.disabled = true;
  btn.textContent = 'Processing...';
  showErr('');
  var items = Object.keys(cart).map(function (k) {
    var e = cart[k];
    return { name: e.name, qty: e.qty,
             mods: (e.mods || []).map(function (m) { return { g: m.g, o: m.o }; }) };
  });

  function fail(msg) {
    btn.disabled = false;
    btn.textContent = 'Pay ' + money(cartSubtotal() + Math.round(cartSubtotal() * TAX_RATE));
    showErr(msg);
  }

  clover.createToken().then(function (result) {
    if (result.errors) {
      var msgs = Object.keys(result.errors).map(function (k) { return result.errors[k]; });
      fail(msgs[0] || 'There is a problem with your card details.');
      return;
    }
    btn.textContent = 'Placing your order...';
    fetch('/.netlify/functions/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items,
        customer: { name: form.name, phone: form.phone, email: form.email },
        fulfillment: { type: form.fulfillment.type, address: form.fulfillment.address },
        note: form.note
      })
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
    .then(function (res) {
      if (!res.ok) { fail(res.j.error || 'Could not start your order.'); return; }
      btn.textContent = 'Charging your card...';
      return fetch('/.netlify/functions/pay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: res.j.orderId, source: result.token })
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j, order: res.j }; }); });
    })
    .then(function (pres) {
      if (!pres) return;
      if (pres.ok && (pres.j.status === 'paid' || pres.j.recovered)) {
        showSuccess(pres.j, pres.order);
      } else {
        fail(pres.j.error || 'Payment did not go through.');
      }
    })
    .catch(function () { fail('Something went wrong. Please try again or call (803) 659-3434.'); });
  }).catch(function () { fail('Could not read your card. Please check the details and try again.'); });
}

function showSuccess(payRes, order) {
  headTitle.textContent = 'Order confirmed';
  var ref = payRes.refNum || payRes.chargeId || order.orderId;
  var cardLine = payRes.last4 ? '<p>Paid with ' + esc(payRes.brand || 'card') + ' ending in ' + esc(payRes.last4) + '.</p>' : '';
  body.innerHTML =
    '<div class="t-success"><div class="t-check">✅</div><h3>Thank you!</h3>' +
    '<p>Your order is in and the kitchen has it. We&rsquo;ll text you at pickup time.</p>' + cardLine +
    '<div class="t-ref">Order ref: ' + esc(ref) + '<br>Total: ' + money(order.total) + '</div></div>';
  foot.innerHTML = '<button class="t-btn" type="button" id="t-done">Done</button>';
  foot.querySelector('#t-done').addEventListener('click', function () {
    cart = {}; save(); renderCartBtn(); closeDrawer();
  });
}

/* ---------- modifier popup ---------- */
var modModal = null;
function closeModModal() {
  if (modModal && modModal.parentNode) modModal.parentNode.removeChild(modModal);
  modModal = null;
}
function openModModal(name, qids) {
  closeModModal();
  modModal = document.createElement('div');
  modModal.id = 't-mod-modal';
  var html = '<div class="t-mm-card" role="dialog" aria-label="Customize ' + esc(name) + '">' +
    '<div class="t-mm-head"><h3>' + esc(name) + '</h3>' +
    '<button class="t-d-close" type="button" id="t-mm-x" aria-label="Close">&times;</button></div>' +
    '<div class="t-mm-body">';
  qids.forEach(function (q, qi) {
    if (!q || !MOD_QUESTIONS[q.id]) return;
    var qid = q.id;
    html += '<div class="t-mm-q"><div class="t-mm-qt">' + esc(q.title) +
      (q.required ? ' <span class="t-req">Required</span>' : '') + '</div>';
    q.options.forEach(function (o, oi) {
      var on = typeof o === 'string' ? o : o[0];
      var op = typeof o === 'string' ? 0 : o[1];
      var type = q.multi ? 'checkbox' : 'radio';
      html += '<label class="t-mm-opt"><input type="' + type + '" name="t-mm-' + qi + '" value="' + esc(on) + '">' +
        '<span>' + esc(on) + '</span>' +
        (op ? '<span class="t-mm-price">+' + money(op) + '</span>' : '') + '</label>';
    });
    html += '</div>';
  });
  html += '</div><div class="t-mm-err" id="t-mm-err"></div>' +
    '<div class="t-mm-foot"><button class="t-btn secondary" type="button" id="t-mm-cancel">Cancel</button>' +
    '<button class="t-btn" type="button" id="t-mm-add">Add to order</button></div></div>';
  modModal.innerHTML = html;
  document.body.appendChild(modModal);
  modModal.querySelector('#t-mm-x').addEventListener('click', closeModModal);
  modModal.querySelector('#t-mm-cancel').addEventListener('click', closeModModal);
  modModal.addEventListener('click', function (e) { if (e.target === modModal) closeModModal(); });
  modModal.querySelector('#t-mm-add').addEventListener('click', function () {
    var mods = [], errEl = modModal.querySelector('#t-mm-err'), errMsg = '';
    qids.forEach(function (q, qi) {
      if (!q || !MOD_QUESTIONS[q.id]) return;
      var qid = q.id;
      var checked = modModal.querySelectorAll('input[name="t-mm-' + qi + '"]:checked');
      if (q.required && !checked.length) errMsg = 'Please choose: ' + q.title;
      Array.prototype.forEach.call(checked, function (c) { mods.push({ g: qid, o: c.value }); });
    });
    if (errMsg) { errEl.textContent = errMsg; return; }
    addToCart(name, mods);
    closeModModal();
  });
}

/* ---------- public API (only when the ordering backend is live) ---------- */
function enableOrdering() {
  window.TandoorCart = {
    add: function (name) {
      if (!MENU_PRICES[name]) return;
      var qids = questionsFor(name);
      if (!qids.length) { addToCart(name, []); }
      else openModModal(name, qids);
    }
  };
  buildChrome();
  // The menu renders before this script runs, so re-render it now that the
  // cart exists — this adds the "Add" buttons next to each dish.
  if (typeof window.render === 'function') { try { window.render(); } catch (e) {} }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModModal(); closeDrawer(); }
  });
  // "Order Online" / "Start an Order" buttons anywhere on the page open the cart.
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('[data-open-cart]') : null;
    if (b) { e.preventDefault(); openDrawer('cart'); }
  });
}

// On-site ordering is live for all visitors.
enableOrdering();
})();