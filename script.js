'use strict';

/* ==========================================================================
   SOLE SOCIETY — script.js
   ========================================================================== */

/* ============ 1. ДАННЫЕ ============ */

const CATEGORY_LABELS = {
  running: 'Running',
  lifestyle: 'Lifestyle',
  basketball: 'Basketball',
  classic: 'Classic'
};

const ALL_SIZES = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const FREE_DELIVERY_FROM = 10000;
const DELIVERY_COST = 490;

const PRODUCTS = [
  { id: 'ss-01', name: 'Aeroflux Glide Pro', category: 'running', price: 24900, oldPrice: 29900, badge: 'bestseller', popularity: 98, dateAdded: 12, sizes: [39,40,41,42,43,44,45], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Флагманская беговая модель с амортизирующей пеной нового поколения и дышащим верхом. Создана для длинных дистанций и быстрых тренировок.' },
  { id: 'ss-02', name: 'Aeroflux Glide Lite', category: 'running', price: 18900, oldPrice: null, badge: 'new', popularity: 85, dateAdded: 98, sizes: [37,38,39,40,41,42,43], image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80', description: 'Облегчённая версия культового силуэта. Минималистичный верх и упругая подошва для ежедневных пробежек по городу.' },
  { id: 'ss-03', name: 'Velocity Drift 2', category: 'running', price: 21500, oldPrice: null, badge: null, popularity: 76, dateAdded: 62, sizes: [38,39,40,41,42,43,44,45,46], image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80', description: 'Стабильность и контроль на любой поверхности. Продуманная геометрия подошвы и плотная фиксация стопы.' },
  { id: 'ss-04', name: 'Pulse Runner X', category: 'running', price: 16400, oldPrice: 19900, badge: 'sale', popularity: 64, dateAdded: 40, sizes: [36,37,38,39,40,41,42], image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80', description: 'Универсальная модель для быстрых пробежек и интервальных тренировок. Лёгкая, отзывчивая, дышащая.' },
  { id: 'ss-05', name: 'Terra Trail Nomad', category: 'running', price: 27200, oldPrice: null, badge: 'new', popularity: 71, dateAdded: 88, sizes: [40,41,42,43,44,45,46,47], image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=800&q=80', description: 'Трейловая модель с агрессивным протектором и защитой от влаги. Для тех, кто выбирает маршруты без асфальта.' },
  { id: 'ss-06', name: 'Mono Court Low', category: 'lifestyle', price: 19900, oldPrice: null, badge: 'bestseller', popularity: 92, dateAdded: 55, sizes: [36,37,38,39,40,41,42,43,44], image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80', description: 'Чистый минималистичный силуэт на каждый день. Кожаный верх и мягкая стелька для комфорта с утра до вечера.' },
  { id: 'ss-07', name: 'Concrete Wave Hi', category: 'lifestyle', price: 22400, oldPrice: null, badge: null, popularity: 68, dateAdded: 34, sizes: [38,39,40,41,42,43,44,45], image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80', description: 'Высокий верх, плотная посадка и характерная подошва. Для тех, кто любит выразительные формы.' },
  { id: 'ss-08', name: 'Paper Lane Knit', category: 'lifestyle', price: 15700, oldPrice: 18900, badge: 'sale', popularity: 59, dateAdded: 28, sizes: [36,37,38,39,40,41,42,43], image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80', description: 'Вязаный верх, который садится по ноге как вторая кожа. Идеально для города и долгих прогулок.' },
  { id: 'ss-09', name: 'Rim Breaker 90', category: 'basketball', price: 28900, oldPrice: null, badge: 'bestseller', popularity: 88, dateAdded: 70, sizes: [40,41,42,43,44,45,46,47], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80', description: 'Баскетбольная модель с усиленной поддержкой голеностопа и высоким отскоком. Для игры на паркете и улице.' },
  { id: 'ss-10', name: 'Rim Breaker Lite', category: 'basketball', price: 23900, oldPrice: null, badge: 'new', popularity: 74, dateAdded: 92, sizes: [39,40,41,42,43,44,45,46], image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80', description: 'Облегчённая баскетбольная модель для быстрых смен направления. Отзывчивая подошва и надёжная фиксация.' },
  { id: 'ss-11', name: 'Hardwood Legacy', category: 'basketball', price: 31500, oldPrice: null, badge: null, popularity: 66, dateAdded: 20, sizes: [41,42,43,44,45,46,47], image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80', description: 'Премиальная баскетбольная пара с акцентом на материалы и детализацию. Для тех, кто ценит классику игры.' },
  { id: 'ss-12', name: 'Heritage 77 Low', category: 'classic', price: 17600, oldPrice: null, badge: null, popularity: 81, dateAdded: 46, sizes: [36,37,38,39,40,41,42,43,44,45], image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80', description: 'Классический низкий силуэт, который не выходит из моды. Кожаный верх и аккуратная подошва.' },
  { id: 'ss-13', name: 'Heritage 77 Suede', category: 'classic', price: 19800, oldPrice: null, badge: 'new', popularity: 70, dateAdded: 85, sizes: [37,38,39,40,41,42,43,44,45], image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80', description: 'Замшевая версия культового силуэта. Мягкие материалы и тёплая, приглушённая палитра.' },
  { id: 'ss-14', name: 'Court Classic Canvas', category: 'classic', price: 12900, oldPrice: 15400, badge: 'sale', popularity: 55, dateAdded: 15, sizes: [36,37,38,39,40,41,42,43,44], image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80', description: 'Лёгкая текстильная пара на каждый день. Простой дизайн, честная посадка и доступная цена.' }
];

/* ============ 2. УТИЛИТЫ ============ */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const formatPrice = (value) => new Intl.NumberFormat('ru-RU').format(value) + ' \u20BD';

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[ch]);

const debounce = (fn, delay = 220) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const placeholderImage = (label) => {
  const safe = escapeHtml(String(label).slice(0, 24));
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
    '<rect width="600" height="600" fill="#EFECE6"/>' +
    '<path d="M150 380h300c20 0 30 12 30 26s-12 26-32 26H160c-22 0-34-10-34-24 0-14 10-28 24-28Z" fill="#DDD8CE"/>' +
    '<text x="300" y="300" font-family="Arial, sans-serif" font-size="26" fill="#9A9A9A" text-anchor="middle">' + safe + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

/* ============ 3. СОСТОЯНИЕ И ХРАНИЛИЩЕ ============ */

const STORAGE_KEYS = {
  cart: 'sole-society:cart',
  favorites: 'sole-society:favorites'
};

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (err) {
    console.warn('[SOLE SOCIETY] Ошибка чтения localStorage:', err);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('[SOLE SOCIETY] Ошибка записи localStorage:', err);
  }
}

let cart = loadFromStorage(STORAGE_KEYS.cart, []);
let favorites = loadFromStorage(STORAGE_KEYS.favorites, []);
if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(favorites)) favorites = [];

const filters = {
  category: 'all',
  min: null,
  max: null,
  sizes: new Set(),
  saleOnly: false,
  query: ''
};

let sortMode = 'popular';
let activeModal = null;
let lastFocusedElement = null;

/* ============ ОБРАБОТКА ОШИБОК ИЗОБРАЖЕНИЙ ============ */

function handleImageError(img) {
  if (img.dataset.fallbackApplied === '1') return;
  img.dataset.fallbackApplied = '1';
  const label = img.dataset.fallback || img.alt || 'SOLE SOCIETY';
  img.src = placeholderImage(label);
}

function bindImageFallback(root) {
  if (!root) return;
  $$('img', root).forEach((img) => {
    img.addEventListener('error', function () { handleImageError(this); });
    if (img.complete && img.naturalWidth === 0) handleImageError(img);
  });
}

/* ============ 4. КАТАЛОГ ============ */

const productGrid = $('#productGrid');
const catalogEmpty = $('#catalogEmpty');
const catalogCount = $('[data-count]');
const sortSelect = $('#sortSelect');
const filtersPanel = $('#filters');
const activeFiltersBadge = $('[data-active-filters]');

function getBadgeMarkup(badge) {
  if (!badge) return '';
  const map = {
    new: { cls: 'badge--new', text: 'NEW' },
    sale: { cls: 'badge--sale', text: 'SALE' },
    bestseller: { cls: 'badge--best', text: 'BESTSELLER' }
  };
  const item = map[badge];
  if (!item) return '';
  return '<span class="badge ' + item.cls + '">' + item.text + '</span>';
}

function isFavorite(id) {
  return favorites.indexOf(id) > -1;
}

function productCardMarkup(product) {
  const hasOld = typeof product.oldPrice === 'number' && product.oldPrice > product.price;
  const favActive = isFavorite(product.id) ? ' is-active' : '';
  const sizesPreview = product.sizes.slice(0, 6).map((s) => '<span class="card__size">' + s + '</span>').join('');
  const moreSizes = product.sizes.length > 6 ? '<span class="card__size">+' + (product.sizes.length - 6) + '</span>' : '';

  return '' +
    '<article class="card" data-id="' + escapeHtml(product.id) + '">' +
      '<div class="card__media" data-open-product="' + escapeHtml(product.id) + '" role="button" tabindex="0" aria-label="Открыть карточку ' + escapeHtml(product.name) + '">' +
        '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + ' — ' + escapeHtml(CATEGORY_LABELS[product.category]) + '" loading="lazy" width="600" height="600" data-fallback="' + escapeHtml(product.name) + '" />' +
        '<div class="card__badges">' + getBadgeMarkup(product.badge) + '</div>' +
        '<button class="card__fav' + favActive + '" type="button" data-toggle-fav="' + escapeHtml(product.id) + '" aria-label="Избранное" aria-pressed="' + (favActive ? 'true' : 'false') + '">' +
          '<svg class="icon"><use href="#i-heart"></use></svg>' +
        '</button>' +
        '<span class="card__quick">Быстрый просмотр</span>' +
      '</div>' +
      '<div class="card__body">' +
        '<span class="card__cat">' + escapeHtml(CATEGORY_LABELS[product.category]) + '</span>' +
        '<h3 class="card__name" data-open-product="' + escapeHtml(product.id) + '">' + escapeHtml(product.name) + '</h3>' +
        '<div class="card__sizes">' + sizesPreview + moreSizes + '</div>' +
        '<div class="card__foot">' +
          '<div class="card__prices">' +
            '<span class="card__price">' + formatPrice(product.price) + '</span>' +
            (hasOld ? '<span class="card__old">' + formatPrice(product.oldPrice) + '</span>' : '') +
          '</div>' +
          '<button class="card__add" type="button" data-add-to-cart="' + escapeHtml(product.id) + '" aria-label="Добавить в корзину">' +
            '<svg class="icon"><use href="#i-plus"></use></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</article>';
}

function getFilteredProducts() {
  const query = filters.query.trim().toLowerCase();

  return PRODUCTS.filter(function (product) {
    if (filters.category !== 'all' && product.category !== filters.category) return false;

    if (filters.min !== null && product.price < filters.min) return false;
    if (filters.max !== null && product.price > filters.max) return false;

    if (filters.sizes.size > 0) {
      const hasSize = product.sizes.some(function (s) { return filters.sizes.has(s); });
      if (!hasSize) return false;
    }

    if (filters.saleOnly) {
      const hasDiscount = typeof product.oldPrice === 'number' && product.oldPrice > product.price;
      if (!hasDiscount) return false;
    }

    if (query) {
      const haystack = (product.name + ' ' + CATEGORY_LABELS[product.category]).toLowerCase();
      if (haystack.indexOf(query) === -1) return false;
    }

    return true;
  });
}

function sortProducts(list) {
  const sorted = list.slice();
  switch (sortMode) {
    case 'price-asc':
      sorted.sort(function (a, b) { return a.price - b.price; });
      break;
    case 'price-desc':
      sorted.sort(function (a, b) { return b.price - a.price; });
      break;
    case 'new':
      sorted.sort(function (a, b) { return b.dateAdded - a.dateAdded; });
      break;
    case 'name':
      sorted.sort(function (a, b) { return a.name.localeCompare(b.name, 'ru'); });
      break;
    case 'popular':
    default:
      sorted.sort(function (a, b) { return b.popularity - a.popularity; });
      break;
  }
  return sorted;
}

function renderCatalog() {
  if (!productGrid) return;
  const filtered = getFilteredProducts();
  const sorted = sortProducts(filtered);

  if (sorted.length === 0) {
    productGrid.innerHTML = '';
    if (catalogEmpty) catalogEmpty.hidden = false;
    if (catalogCount) catalogCount.textContent = 'Найдено: 0';
  } else {
    if (catalogEmpty) catalogEmpty.hidden = true;
    productGrid.innerHTML = sorted.map(productCardMarkup).join('');
    if (catalogCount) catalogCount.textContent = 'Найдено: ' + sorted.length + ' из ' + PRODUCTS.length;
  }

  bindImageFallback(productGrid);
  updateActiveFiltersBadge();
}

function updateActiveFiltersBadge() {
  let count = 0;
  if (filters.category !== 'all') count++;
  if (filters.min !== null || filters.max !== null) count++;
  if (filters.sizes.size > 0) count++;
  if (filters.saleOnly) count++;
  if (filters.query.trim()) count++;

  if (!activeFiltersBadge) return;
  if (count > 0) {
    activeFiltersBadge.hidden = false;
    activeFiltersBadge.textContent = String(count);
  } else {
    activeFiltersBadge.hidden = true;
  }
}

function renderSizeFilter() {
  const wrap = $('[data-filter-sizes]');
  if (!wrap) return;
  wrap.innerHTML = ALL_SIZES.map(function (size) {
    return '<button class="chip" type="button" data-size="' + size + '">' + size + '</button>';
  }).join('');
}

function resetFilters() {
  filters.category = 'all';
  filters.min = null;
  filters.max = null;
  filters.sizes.clear();
  filters.saleOnly = false;
  filters.query = '';

  $$('[data-filter-category] .chip').forEach(function (chip) {
    chip.classList.toggle('is-active', chip.dataset.category === 'all');
  });
  $$('[data-filter-sizes] .chip').forEach(function (chip) { chip.classList.remove('is-active'); });

  const nameInput = $('#filterName');
  const minInput = $('#filterMin');
  const maxInput = $('#filterMax');
  const saleInput = $('#filterSale');

  if (nameInput) nameInput.value = '';
  if (minInput) minInput.value = '';
  if (maxInput) maxInput.value = '';
  if (saleInput) saleInput.checked = false;

  renderCatalog();
}

/* ============ 5. КОРЗИНА ============ */

const cartDrawer = $('#cartDrawer');
const cartBody = $('#cartBody');
const cartFoot = $('#cartFoot');

function getCartItemCount() {
  return cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function getCartSubtotal() {
  return cart.reduce(function (sum, item) {
    const product = getProduct(item.productId);
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);
}

function getDeliveryCost(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_COST;
}

function getCartGrandTotal() {
  const subtotal = getCartSubtotal();
  return subtotal + getDeliveryCost(subtotal);
}

function findCartIndex(productId, size) {
  return cart.findIndex(function (item) {
    return item.productId === productId && item.size === size;
  });
}

function addToCart(productId, size, qty) {
  qty = qty || 1;
  const product = getProduct(productId);
  if (!product) return false;

  if (!size) {
    showToast('Выберите размер перед добавлением', 'error');
    return false;
  }

  const index = findCartIndex(productId, size);
  if (index > -1) {
    cart[index].qty += qty;
  } else {
    cart.push({ productId: productId, size: size, qty: qty });
  }

  saveToStorage(STORAGE_KEYS.cart, cart);
  updateCartUI();
  showToast(product.name + ' (' + size + ') в корзине');
  return true;
}

function changeCartQty(index, delta) {
  const item = cart[index];
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart.splice(index, 1);
  }

  saveToStorage(STORAGE_KEYS.cart, cart);
  updateCartUI();
}

function removeCartItem(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  saveToStorage(STORAGE_KEYS.cart, cart);
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveToStorage(STORAGE_KEYS.cart, cart);
  updateCartUI();
  showToast('Корзина очищена');
}

function cartItemMarkup(item, index) {
  const product = getProduct(item.productId);
  if (!product) return '';

  return '' +
    '<div class="cart-item">' +
      '<img class="cart-item__img" src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" loading="lazy" width="84" height="84" data-fallback="' + escapeHtml(product.name) + '" />' +
      '<div class="cart-item__info">' +
        '<span class="cart-item__name">' + escapeHtml(product.name) + '</span>' +
        '<span class="cart-item__meta">' + escapeHtml(CATEGORY_LABELS[product.category]) + ' · Размер ' + item.size + '</span>' +
        '<span class="cart-item__price">' + formatPrice(product.price * item.qty) + '</span>' +
      '</div>' +
      '<div class="cart-item__side">' +
        '<div class="qty" role="group" aria-label="Количество">' +
          '<button class="qty__btn" type="button" data-cart-dec="' + index + '" aria-label="Уменьшить">' +
            '<svg class="icon"><use href="#i-minus"></use></svg>' +
          '</button>' +
          '<span class="qty__val">' + item.qty + '</span>' +
          '<button class="qty__btn" type="button" data-cart-inc="' + index + '" aria-label="Увеличить">' +
            '<svg class="icon"><use href="#i-plus"></use></svg>' +
          '</button>' +
        '</div>' +
        '<button class="cart-item__remove" type="button" data-cart-remove="' + index + '" aria-label="Удалить">' +
          '<svg class="icon"><use href="#i-trash"></use></svg>' +
        '</button>' +
      '</div>' +
    '</div>';
}

function updateCartUI() {
  const count = getCartItemCount();
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryCost(subtotal);
  const grand = subtotal + delivery;

  $$('[data-cart-counter]').forEach(function (el) { el.textContent = String(count); });
  $$('[data-cart-total]').forEach(function (el) { el.textContent = formatPrice(subtotal); });

  const badge = $('[data-cart-badge]');
  if (badge) {
    badge.textContent = String(count);
    badge.hidden = count === 0;
    if (count > 0) {
      badge.classList.remove('is-pulse');
      void badge.offsetWidth;
      badge.classList.add('is-pulse');
    }
  }

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '' +
      '<div class="drawer-empty">' +
        '<svg class="icon"><use href="#i-bag"></use></svg>' +
        '<p class="drawer-empty__title">Корзина пуста</p>' +
        '<p>Добавьте кроссовки, чтобы оформить демонстрационный заказ.</p>' +
      '</div>';
    if (cartFoot) cartFoot.hidden = true;
  } else {
    cartBody.innerHTML = cart.map(cartItemMarkup).join('');
    if (cartFoot) cartFoot.hidden = false;

    $$('[data-cart-subtotal]').forEach(function (el) { el.textContent = formatPrice(subtotal); });
    $$('[data-cart-delivery]').forEach(function (el) {
      el.textContent = delivery === 0 ? 'Бесплатно' : formatPrice(delivery);
    });
    $$('[data-cart-grand]').forEach(function (el) { el.textContent = formatPrice(grand); });
  }

  bindImageFallback(cartBody);
}

/* ============ 6. ИЗБРАННОЕ ============ */

const favDrawer = $('#favDrawer');
const favBody = $('#favBody');

function toggleFavorite(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const index = favorites.indexOf(productId);
  let added = false;

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
    added = true;
  }

  saveToStorage(STORAGE_KEYS.favorites, favorites);
  updateFavoritesUI();
  updateCardFavoriteStates();
  showToast(added ? product.name + ' в избранном' : product.name + ' убран из избранного');
}

function updateCardFavoriteStates() {
  $$('[data-toggle-fav]').forEach(function (btn) {
    const id = btn.dataset.toggleFav;
    const active = isFavorite(id);
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function favItemMarkup(productId) {
  const product = getProduct(productId);
  if (!product) return '';

  return '' +
    '<div class="fav-item">' +
      '<img class="fav-item__img" src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" loading="lazy" width="84" height="84" data-fallback="' + escapeHtml(product.name) + '" />' +
      '<div class="fav-item__info">' +
        '<span class="fav-item__name">' + escapeHtml(product.name) + '</span>' +
        '<span class="card__cat">' + escapeHtml(CATEGORY_LABELS[product.category]) + '</span>' +
        '<span class="fav-item__price">' + formatPrice(product.price) + '</span>' +
      '</div>' +
      '<div class="fav-item__actions">' +
        '<button class="btn btn--dark" type="button" data-open-product="' + escapeHtml(product.id) + '">Открыть</button>' +
        '<button class="btn btn--ghost" type="button" data-toggle-fav="' + escapeHtml(product.id) + '">Убрать</button>' +
      '</div>' +
    '</div>';
}

function updateFavoritesUI() {
  const count = favorites.length;

  $$('[data-fav-counter]').forEach(function (el) {
    el.textContent = String(count);
    if (el.classList.contains('counter')) {
      el.hidden = count === 0;
      if (count > 0) {
        el.classList.remove('is-pulse');
        void el.offsetWidth;
        el.classList.add('is-pulse');
      }
    }
  });

  if (favBody) {
    if (count === 0) {
      favBody.innerHTML = '' +
        '<div class="drawer-empty">' +
          '<svg class="icon"><use href="#i-heart"></use></svg>' +
          '<p class="drawer-empty__title">Избранное пусто</p>' +
          '<p>Нажмите на сердце у товара, чтобы сохранить его здесь.</p>' +
        '</div>';
    } else {
      favBody.innerHTML = favorites.map(favItemMarkup).join('');
      bindImageFallback(favBody);
    }
  }

  updateCardFavoriteStates();
}

/* ============ 7. МОДАЛЬНЫЕ ОКНА ============ */

function lockScroll() {
  document.body.classList.add('is-locked');
}

function unlockScroll() {
  if (activeModal) return;
  document.body.classList.remove('is-locked');
}

function openModal(rootEl, contentEl, htmlContent) {
  if (!rootEl) return;
  lastFocusedElement = document.activeElement;
  activeModal = rootEl;

  if (contentEl) contentEl.innerHTML = htmlContent;

  const overlay = $('#overlay');
  if (overlay) {
    overlay.hidden = false;
    requestAnimationFrame(function () { overlay.classList.add('is-open'); });
  }

  rootEl.hidden = false;
  rootEl.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(function () { rootEl.classList.add('is-open'); });

  lockScroll();
  bindImageFallback(rootEl);

  const focusable = rootEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) setTimeout(function () { focusable.focus(); }, 60);
}

function closeModal() {
  if (!activeModal) return;
  const root = activeModal;

  root.classList.remove('is-open');
  root.setAttribute('aria-hidden', 'true');

  const overlay = $('#overlay');
  if (overlay) overlay.classList.remove('is-open');

  setTimeout(function () {
    root.hidden = true;
    if (overlay && !cartDrawer.classList.contains('is-open') && !favDrawer.classList.contains('is-open')) {
      overlay.hidden = true;
    }
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }, 320);

  activeModal = null;
  unlockScroll();
}

/* ============ 8. КАРТОЧКА ТОВАРА ============ */

const productModal = $('#productModal');
const productModalContent = $('#productModalContent');
let productModalState = { productId: null, size: null };

function productModalMarkup(product) {
  const hasOld = typeof product.oldPrice === 'number' && product.oldPrice > product.price;

  return '' +
    '<div class="pd">' +
      '<div class="pd__media">' +
        '<img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '" width="800" height="800" data-fallback="' + escapeHtml(product.name) + '" />' +
      '</div>' +
      '<div class="pd__body">' +
        '<span class="pd__cat" id="productModalTitle">' + escapeHtml(CATEGORY_LABELS[product.category]) + '</span>' +
        '<h2 class="pd__title">' + escapeHtml(product.name) + '</h2>' +
        '<div class="pd__badges">' + getBadgeMarkup(product.badge) + '</div>' +
        '<div class="pd__price">' +
          '<span class="pd__price-now">' + formatPrice(product.price) + '</span>' +
          (hasOld ? '<span class="pd__price-old">' + formatPrice(product.oldPrice) + '</span>' : '') +
        '</div>' +
        '<p class="pd__desc">' + escapeHtml(product.description) + '</p>' +
        '<div>' +
          '<span class="pd__label">Выберите размер (EU)</span>' +
          '<div class="pd__sizes" data-pd-sizes>' +
            product.sizes.map(function (s) {
              return '<button class="size-btn" type="button" data-size="' + s + '">' + s + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<p class="pd__error" data-pd-error></p>' +
        '<div class="pd__stock"><span class="pd__stock-dot"></span> Есть в демонстрационном ассортименте</div>' +
        '<div class="pd__actions">' +
          '<button class="btn btn--dark btn--lg" type="button" data-pd-add>Добавить в корзину</button>' +
          '<button class="btn btn--outline btn--lg" type="button" data-pd-fav aria-label="В избранное">' +
            '<svg class="icon"><use href="#i-heart"></use></svg>' +
          '</button>' +
        '</div>' +
        '<div class="pd__meta">' +
          '<span><svg class="icon"><use href="#i-truck"></use></svg> Доставка 1–3 дня</span>' +
          '<span><svg class="icon"><use href="#i-refresh"></use></svg> Возврат 14 дней</span>' +
        '</div>' +
      '</div>' +
    '</div>';
}

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  productModalState = { productId: productId, size: null };
  openModal(productModal, productModalContent, productModalMarkup(product));

  const favBtn = productModalContent.querySelector('[data-pd-fav]');
  if (favBtn && isFavorite(productId)) favBtn.classList.add('is-active');

  updateProductFavIcon();
}

function updateProductFavIcon() {
  const favBtn = productModalContent && productModalContent.querySelector('[data-pd-fav]');
  if (!favBtn) return;
  const active = isFavorite(productModalState.productId);
  favBtn.classList.toggle('is-active', active);
  favBtn.style.color = active ? 'var(--orange)' : '';
}

function selectProductSize(btn) {
  const size = Number(btn.dataset.size);
  productModalState.size = size;

  $$('.size-btn', productModalContent).forEach(function (b) {
    b.classList.toggle('is-active', Number(b.dataset.size) === size);
  });

  const err = productModalContent.querySelector('[data-pd-error]');
  if (err) err.textContent = '';
}

/* ============ 9. ОФОРМЛЕНИЕ ЗАКАЗА ============ */

const checkoutModal = $('#checkoutModal');
const checkoutContent = $('#checkoutContent');

function checkoutMarkup() {
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryCost(subtotal);
  const grand = subtotal + delivery;

  return '' +
    '<div class="checkout">' +
      '<h2 class="checkout__title" id="checkoutTitle">Оформление заказа</h2>' +
      '<p class="checkout__sub">Демонстрационный режим. Реальная оплата не производится.</p>' +
      '<div class="checkout__summary">' +
        '<dl class="summary">' +
          '<div class="summary__row"><dt>Товары</dt><dd>' + formatPrice(subtotal) + '</dd></div>' +
          '<div class="summary__row"><dt>Доставка</dt><dd>' + (delivery === 0 ? 'Бесплатно' : formatPrice(delivery)) + '</dd></div>' +
          '<div class="summary__row summary__row--total"><dt>Итого</dt><dd>' + formatPrice(grand) + '</dd></div>' +
        '</dl>' +
      '</div>' +
      '<form class="checkout__form" id="checkoutForm" novalidate>' +
        '<div class="form-row">' +
          '<label for="coName">Имя и фамилия</label>' +
          '<input class="field" id="coName" name="name" type="text" autocomplete="name" placeholder="Иван Иванов" />' +
          '<span class="form-error" data-error-for="coName"></span>' +
        '</div>' +
        '<div class="form-row">' +
          '<label for="coPhone">Телефон</label>' +
          '<input class="field" id="coPhone" name="phone" type="tel" autocomplete="tel" placeholder="+7 (900) 000-00-00" />' +
          '<span class="form-error" data-error-for="coPhone"></span>' +
        '</div>' +
        '<div class="form-row">' +
          '<label for="coAddress">Адрес доставки</label>' +
          '<input class="field" id="coAddress" name="address" type="text" autocomplete="street-address" placeholder="Город, улица, дом, квартира" />' +
          '<span class="form-error" data-error-for="coAddress"></span>' +
        '</div>' +
        '<button class="btn btn--accent btn--block btn--lg" type="submit">Подтвердить демонстрационный заказ</button>' +
      '</form>' +
    '</div>';
}

function openCheckout() {
  if (cart.length === 0) {
    showToast('Корзина пуста', 'error');
    return;
  }
  if (favDrawer && favDrawer.classList.contains('is-open')) closeDrawer(favDrawer);
  openModal(checkoutModal, checkoutContent, checkoutMarkup());
}

function validateCheckout() {
  let valid = true;
  const fields = [
    { id: 'coName', msg: 'Укажите имя' },
    { id: 'coPhone', msg: 'Укажите телефон' },
    { id: 'coAddress', msg: 'Укажите адрес' }
  ];

  fields.forEach(function (f) {
    const input = $('#' + f.id);
    const err = $('[data-error-for="' + f.id + '"]');
    if (!input) return;

    const value = input.value.trim();
    let ok = value.length > 0;

    if (f.id === 'coPhone' && ok) {
      const digits = value.replace(/\D/g, '');
      ok = digits.length >= 10;
      if (!ok) f.msg = 'Некорректный номер телефона';
    }

    if (!ok) {
      input.classList.add('is-error');
      if (err) err.textContent = f.msg;
      valid = false;
    } else {
      input.classList.remove('is-error');
      if (err) err.textContent = '';
    }
  });

  return valid;
}

function submitCheckout(event) {
  event.preventDefault();

  if (!validateCheckout()) return;

  const name = ($('#coName') || {}).value ? $('#coName').value.trim() : '';

  checkoutContent.innerHTML = '' +
    '<div class="success">' +
      '<span class="success__icon"><svg class="icon"><use href="#i-check"></use></svg></span>' +
      '<h2 class="success__title">Заказ оформлен (демо)</h2>' +
      '<p class="success__text">Спасибо, ' + escapeHtml(name || 'друг') + '! Это демонстрационный проект — реальная оплата не производится, заказ никуда не отправляется.</p>' +
      '<button class="btn btn--dark btn--lg" type="button" data-close-modal>Закрыть</button>' +
    '</div>';

  cart = [];
  saveToStorage(STORAGE_KEYS.cart, cart);
  updateCartUI();

  showToast('Демонстрационный заказ оформлен');
}

/* ============ 10. ПОИСК ============ */

const searchToggle = $('#searchToggle');
const searchPanel = $('#searchPanel');
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');
const searchClear = $('#searchClear');

function openSearch() {
  if (!searchPanel) return;
  searchPanel.hidden = false;
  searchToggle.setAttribute('aria-expanded', 'true');
  setTimeout(function () { if (searchInput) searchInput.focus(); }, 60);
}

function closeSearch() {
  if (!searchPanel) return;
  searchPanel.hidden = true;
  searchToggle.setAttribute('aria-expanded', 'false');
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
  if (searchClear) searchClear.hidden = true;
}

function renderSearchResults(query) {
  if (!searchResults) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '';
    return;
  }

  const matches = PRODUCTS.filter(function (p) {
    const haystack = (p.name + ' ' + CATEGORY_LABELS[p.category]).toLowerCase();
    return haystack.indexOf(q) > -1;
  }).slice(0, 8);

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-empty">Ничего не найдено</div>';
    return;
  }

  searchResults.innerHTML = matches.map(function (p) {
    return '' +
      '<button class="search-item" type="button" data-open-product="' + escapeHtml(p.id) + '">' +
        '<img src="' + escapeHtml(p.image) + '" alt="" width="52" height="52" data-fallback="' + escapeHtml(p.name) + '" />' +
        '<span class="search-item__info">' +
          '<span class="search-item__name">' + escapeHtml(p.name) + '</span>' +
          '<span class="search-item__meta">' + escapeHtml(CATEGORY_LABELS[p.category]) + '</span>' +
        '</span>' +
        '<span class="search-item__price">' + formatPrice(p.price) + '</span>' +
      '</button>';
  }).join('');

  bindImageFallback(searchResults);
}

/* ============ 11. DRAWER (КОРЗИНА / ИЗБРАННОЕ) ============ */

function openDrawer(drawerEl) {
  if (!drawerEl) return;
  const overlay = $('#overlay');
  if (overlay) {
    overlay.hidden = false;
    requestAnimationFrame(function () { overlay.classList.add('is-open'); });
  }
  drawerEl.classList.add('is-open');
  drawerEl.setAttribute('aria-hidden', 'false');
  lockScroll();
}

function closeDrawer(drawerEl) {
  if (!drawerEl) return;
  drawerEl.classList.remove('is-open');
  drawerEl.setAttribute('aria-hidden', 'true');

  const overlay = $('#overlay');
  if (overlay) overlay.classList.remove('is-open');

  setTimeout(function () {
    if (overlay && !activeModal && !cartDrawer.classList.contains('is-open') && !favDrawer.classList.contains('is-open')) {
      overlay.hidden = true;
    }
  }, 320);

  if (!activeModal) unlockScroll();
}

/* ============ 12. УВЕДОМЛЕНИЯ ============ */

const toastsRoot = $('#toasts');

function showToast(message, type) {
  if (!toastsRoot) return;
  const toast = document.createElement('div');
  toast.className = 'toast' + (type === 'error' ? ' toast--error' : '');
  toast.innerHTML = '' +
    '<span class="toast__icon"><svg class="icon"><use href="' + (type === 'error' ? '#i-close' : '#i-check') + '"></use></svg></span>' +
    '<span class="toast__text"></span>';
  toast.querySelector('.toast__text').textContent = message;

  toastsRoot.appendChild(toast);

  setTimeout(function () {
    toast.classList.add('is-out');
    setTimeout(function () { toast.remove(); }, 300);
  }, 2600);
}

/* ============ 13. REVEAL ============ */

function initReveal() {
  const items = $$('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach(function (el) { observer.observe(el); });
}

/* ============ 14. ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ============ */

function handleDocumentClick(event) {
  const target = event.target;

  // Открыть карточку товара
  const openBtn = target.closest('[data-open-product]');
  if (openBtn) {
    event.preventDefault();
    openProductModal(openBtn.dataset.openProduct);
    return;
  }

  // Переключить избранное
  const favBtn = target.closest('[data-toggle-fav]');
  if (favBtn) {
    event.preventDefault();
    toggleFavorite(favBtn.dataset.toggleFav);
    return;
  }

  // Добавить в корзину из карточки товара
  const addBtn = target.closest('[data-add-to-cart]');
  if (addBtn) {
    event.preventDefault();
    addToCart(addBtn.dataset.addToCart, null);
    return;
  }

  // Изменение количества в корзине
  const dec = target.closest('[data-cart-dec]');
  if (dec) {
    changeCartQty(Number(dec.dataset.cartDec), -1);
    return;
  }
  const inc = target.closest('[data-cart-inc]');
  if (inc) {
    changeCartQty(Number(inc.dataset.cartInc), 1);
    return;
  }
  const rem = target.closest('[data-cart-remove]');
  if (rem) {
    removeCartItem(Number(rem.dataset.cartRemove));
    return;
  }

  // Выбор размера в модалке товара
  const sizeBtn = target.closest('.size-btn');
  if (sizeBtn && productModalContent && productModalContent.contains(sizeBtn)) {
    selectProductSize(sizeBtn);
    return;
  }

  // Добавить в корзину из модалки
  const pdAdd = target.closest('[data-pd-add]');
  if (pdAdd) {
    const err = productModalContent.querySelector('[data-pd-error]');
    if (!productModalState.size) {
      if (err) err.textContent = 'Пожалуйста, выберите размер';
      return;
    }
    const ok = addToCart(productModalState.productId, productModalState.size, 1);
    if (ok) closeModal();
    return;
  }

  // Избранное из модалки
  const pdFav = target.closest('[data-pd-fav]');
  if (pdFav) {
    toggleFavorite(productModalState.productId);
    updateProductFavIcon();
    return;
  }

  // Открыть корзину
  if (target.closest('[data-open-cart]')) {
    event.preventDefault();
    openDrawer(cartDrawer);
    return;
  }

  // Открыть избранное
  if (target.closest('[data-open-favorites]')) {
    event.preventDefault();
    openDrawer(favDrawer);
    return;
  }

  // Закрыть корзину
  if (target.closest('[data-close-cart]')) {
    closeDrawer(cartDrawer);
    return;
  }

  // Закрыть избранное
  if (target.closest('[data-close-favorites]')) {
    closeDrawer(favDrawer);
    return;
  }

  // Закрыть модалку по кнопке
  if (target.closest('[data-close-modal]')) {
    closeModal();
    return;
  }

  // Клик по подложке модалки
  if (target.classList.contains('modal-root__backdrop')) {
    closeModal();
    return;
  }

  // Открыть фильтры (мобильные)
  if (target.closest('[data-open-filters]')) {
    event.preventDefault();
    if (filtersPanel) {
      filtersPanel.classList.add('is-open');
      const overlay = $('#overlay');
      if (overlay) {
        overlay.hidden = false;
        requestAnimationFrame(function () { overlay.classList.add('is-open'); });
      }
      lockScroll();
    }
    return;
  }

  // Закрыть фильтры
  if (target.closest('[data-close-filters]')) {
    if (filtersPanel) filtersPanel.classList.remove('is-open');
    const overlay = $('#overlay');
    if (overlay) overlay.classList.remove('is-open');
    setTimeout(function () {
      if (overlay && !activeModal && !cartDrawer.classList.contains('is-open') && !favDrawer.classList.contains('is-open')) {
        overlay.hidden = true;
      }
    }, 320);
    unlockScroll();
    return;
  }

  // Переход в категорию
  const catJump = target.closest('[data-category-jump]');
  if (catJump) {
    event.preventDefault();
    const cat = catJump.dataset.categoryJump;
    const chip = $('[data-filter-category] .chip[data-category="' + cat + '"]');
    if (chip) {
      chip.click();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  // Клик по подложке (общий оверлей)
  if (target.id === 'overlay') {
    if (cartDrawer.classList.contains('is-open')) closeDrawer(cartDrawer);
    if (favDrawer.classList.contains('is-open')) closeDrawer(favDrawer);
    if (filtersPanel && filtersPanel.classList.contains('is-open')) {
      filtersPanel.classList.remove('is-open');
      unlockScroll();
    }
  }
}

function handleDocumentKeydown(event) {
  if (event.key === 'Escape') {
    if (activeModal) { closeModal(); return; }
    if (cartDrawer.classList.contains('is-open')) { closeDrawer(cartDrawer); return; }
    if (favDrawer.classList.contains('is-open')) { closeDrawer(favDrawer); return; }
    if (filtersPanel && filtersPanel.classList.contains('is-open')) {
      filtersPanel.classList.remove('is-open');
      const overlay = $('#overlay');
      if (overlay) overlay.classList.remove('is-open');
      unlockScroll();
    }
    if (searchPanel && !searchPanel.hidden) closeSearch();
  }
}

/* ============ 15. ИНИЦИАЛИЗАЦИЯ ============ */

function initHeaderScroll() {
  const header = $('#header');
  if (!header) return;
  const onScroll = function () {
    header.classList.toggle('is-stuck', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initCatalogControls() {
  // Категория
  const catWrap = $('[data-filter-category]');
  if (catWrap) {
    catWrap.addEventListener('click', function (e) {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      filters.category = chip.dataset.category;
      $$('.chip', catWrap).forEach(function (c) { c.classList.toggle('is-active', c === chip); });
      renderCatalog();
    });
  }

  // Размеры
  const sizesWrap = $('[data-filter-sizes]');
  if (sizesWrap) {
    sizesWrap.addEventListener('click', function (e) {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const size = Number(chip.dataset.size);
      if (filters.sizes.has(size)) {
        filters.sizes.delete(size);
        chip.classList.remove('is-active');
      } else {
        filters.sizes.add(size);
        chip.classList.add('is-active');
      }
      renderCatalog();
    });
  }

  // Поиск по названию
  const nameInput = $('#filterName');
  if (nameInput) {
    const onInput = debounce(function () {
      filters.query = nameInput.value;
      renderCatalog();
    }, 200);
    nameInput.addEventListener('input', onInput);
  }

  // Цена
  const minInput = $('#filterMin');
  const maxInput = $('#filterMax');

  const onPriceChange = debounce(function () {
    const minVal = minInput && minInput.value !== '' ? Number(minInput.value) : null;
    const maxVal = maxInput && maxInput.value !== '' ? Number(maxInput.value) : null;
    filters.min = (minVal === null || isNaN(minVal)) ? null : minVal;
    filters.max = (maxVal === null || isNaN(maxVal)) ? null : maxVal;
    renderCatalog();
  }, 250);

  if (minInput) minInput.addEventListener('input', onPriceChange);
  if (maxInput) maxInput.addEventListener('input', onPriceChange);

  // Скидка
  const saleInput = $('#filterSale');
  if (saleInput) {
    saleInput.addEventListener('change', function () {
      filters.saleOnly = saleInput.checked;
      renderCatalog();
    });
  }

  // Сброс
  const resetBtn = $('#resetFilters');
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);
  const emptyReset = $('#emptyReset');
  if (emptyReset) emptyReset.addEventListener('click', resetFilters);

  // Сортировка
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      sortMode = sortSelect.value;
      renderCatalog();
    });
  }
}

function initSearch() {
  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      if (searchPanel && searchPanel.hidden) {
        openSearch();
      } else {
        closeSearch();
      }
    });
  }

  if (searchInput) {
    const onInput = debounce(function () {
      renderSearchResults(searchInput.value);
      if (searchClear) searchClear.hidden = searchInput.value === '';
    }, 150);
    searchInput.addEventListener('input', onInput);

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      if (searchResults) searchResults.innerHTML = '';
      searchClear.hidden = true;
    });
  }

  // Клик по результату
  if (searchResults) {
    searchResults.addEventListener('click', function (e) {
      const item = e.target.closest('[data-open-product]');
      if (!item) return;
      closeSearch();
      openProductModal(item.dataset.openProduct);
    });
  }
}

function initBurger() {
  const burger = $('#burger');
  const mobileMenu = $('#mobileMenu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function () {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    burger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });

  mobileMenu.addEventListener('click', function (e) {
    const link = e.target.closest('.mobile-menu__link');
    if (link) {
      mobileMenu.hidden = true;
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

function initCartButtons() {
  const clearBtn = $('#clearCartBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearCart);

  const checkoutBtn = $('#checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);

  // Форма оформления заказа
  if (checkoutContent) {
    checkoutContent.addEventListener('submit', function (e) {
      if (e.target && e.target.id === 'checkoutForm') {
        submitCheckout(e);
      }
    });
  }
}

function initNavJump() {
  // Кнопка "Новинки" — сортировка по новым
  $$('[data-jump="new"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (sortSelect) {
        sortSelect.value = 'new';
        sortMode = 'new';
        renderCatalog();
      }
    });
  });
}

function initFooterYear() {
  const y = $('#footerYear');
  if (y) y.textContent = String(new Date().getFullYear());
}

function init() {
  // Рендер данных
  renderSizeFilter();
  renderCatalog();
  updateCartUI();
  updateFavoritesUI();
  initHeaderScroll();
  initCatalogControls();
  initSearch();
  initBurger();
  initCartButtons();
  initNavJump();
  initFooterYear();
  initReveal();

  // Обработка ошибок изображений по всему документу
  bindImageFallback(document);

  // Глобальные слушатели
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleDocumentKeydown);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}