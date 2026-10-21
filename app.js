/**
 * ABERTURAS LOS PAMPAS — MOTOR DE PROTOTIPO NAVEGABLE
 * Basado en los 11 Wireframes Oficiales (01 - 11)
 * Diseñado para despliegue estático autónomo en GitHub Pages
 */

// ==============================================================
// 1. ESTADO Y DATOS SEMILLA (ALINEADOS A LOS WIREFRAMES)
// ==============================================================

const WIREFRAME_METADATA = {
  '01': { title: '01 — Home & Catálogo', cu: 'CU-01 / CU-03', svg: '01-home-catalogo.svg' },
  '02': { title: '02 — Ficha de Producto', cu: 'CU-01', svg: '02-ficha-producto.svg' },
  '03': { title: '03 — Carrito de Compras', cu: 'CU-04', svg: '03-carrito.svg' },
  '04': { title: '04 — Checkout y Pago', cu: 'CU-05 / CU-06', svg: '04-checkout-pago.svg' },
  '05': { title: '05 — Cuenta Cliente', cu: 'CU-07', svg: '05-cuenta-cliente.svg' },
  '06': { title: '06 — Login Interno', cu: 'CU-03', svg: '06-login-interno.svg' },
  '07': { title: '07 — Gestión de Stock', cu: 'CU-08', svg: '07-gestion-productos-stock.svg' },
  '08': { title: '08 — Gestión Proveedores & OC', cu: 'CU-11 / CU-14', svg: '08-gestion-proveedores.svg' },
  '09': { title: '09 — Pedidos y Despachos', cu: 'CU-09 / CU-10', svg: '09-gestion-pedidos-ventas.svg' },
  '10': { title: '10 — Dashboard y Reportes', cu: 'CU-12', svg: '10-reportes.svg' },
  '11': { title: '11 — Cotización a Medida', cu: 'CU-02', svg: '11-cotizacion-a-medida.svg' }
};

const DEFAULT_PRODUCTS = [
  {
    id: 101,
    name: "Ventana Corrediza Modena 150x110",
    fullTitle: "Ventana Corrediza Modena 150x110 cm",
    category: "ventanas",
    material: "Aluminio",
    materialDetail: "Aluminio Blanco DVH",
    specs: [
      "Línea: Aluminio Modena Blanco Anodizado",
      "Vidrio: Doble Vidriado Hermético (DVH 4/12/4)",
      "Cierre: Central con felpa perimetral hermética",
      "Incluye: Premarco y contramarco estándar",
      "Estanqueidad: Desagües mecanizados frontales"
    ],
    price: 185000,
    stock: 12,
    minStock: 3,
    type: "window"
  },
  {
    id: 102,
    name: "Puerta Oblak Oblakium 80x200",
    fullTitle: "Puerta Oblak Oblakium Inyectada PVC 80x200 cm",
    category: "puertas",
    material: "PVC",
    materialDetail: "Inyectada PVC",
    specs: [
      "Línea: PVC Termoacústico Oblakium",
      "Relleno: Poliuretano expandido de alta densidad",
      "Cerradura: Seguridad multipunto Europerfil",
      "Terminación: Símil madera texturada protegida UV"
    ],
    price: 240000,
    stock: 8,
    minStock: 2,
    type: "door"
  },
  {
    id: 103,
    name: "Portón Chapa Inyectada 240x220",
    fullTitle: "Portón Levadizo Chapa Inyectada 240x220 cm",
    category: "portones",
    material: "Chapa",
    materialDetail: "Chapa DD N° 18 Reforzada",
    specs: [
      "Construcción: Chapa electrocincada con aislación",
      "Sistema: Preparado para automatización rápida",
      "Contrapesos: Plomo envainado con cables de acero",
      "Cerradura: Cerrojo de seguridad con llave cruz"
    ],
    price: 210000,
    stock: 2,
    minStock: 5,
    type: "gate"
  },
  {
    id: 104,
    name: "Ventana Oscilobatiente A30 120x100",
    fullTitle: "Ventana Oscilobatiente Aluminio A30 New 120x100 cm",
    category: "ventanas",
    material: "Aluminio",
    materialDetail: "Aluminio Negro Microtexturado DVH",
    specs: [
      "Línea: A30 New Alta Prestación",
      "Vidrio: DVH Laminado de Seguridad 3+3/12/4",
      "Herraje: Mecanismo oscilobatiente Giesse Italia",
      "Cierre perimetral con doble punto de contacto"
    ],
    price: 225000,
    stock: 6,
    minStock: 2,
    type: "window"
  },
  {
    id: 105,
    name: "Puerta Balcón Corrediza 200x200",
    fullTitle: "Puerta Balcón Corrediza Modena 200x200 cm DVH",
    category: "puertas",
    material: "Aluminio",
    materialDetail: "Aluminio Anodizado Natural DVH",
    specs: [
      "Línea: Modena Reforzada 2 hojas corredizas",
      "Rodamientos: Ruedas con rulemanes blindados regulables",
      "Vidrio: Doble vidriado de 4/12/4 con cámara de argón",
      "Guía inferior con desagües canalizados"
    ],
    price: 315000,
    stock: 5,
    minStock: 2,
    type: "door"
  },
  {
    id: 106,
    name: "Paño Fijo Hermético 100x150",
    fullTitle: "Paño Fijo Aluminio Modena Blanco 100x150 cm",
    category: "panos-fijos",
    material: "Aluminio",
    materialDetail: "Aluminio Blanco DVH",
    specs: [
      "Línea: Modena Paño Fijo de alta hermeticidad",
      "Vidrio: DVH Blíndex de seguridad",
      "Ideal para vanos de iluminación sin ventilación",
      "Burletes de EPDM de larga durabilidad"
    ],
    price: 145000,
    stock: 9,
    minStock: 2,
    type: "window"
  }
];

const DEFAULT_CART = [
  { productId: 101, qty: 2 },
  { productId: 102, qty: 1 }
];

const DEFAULT_ORDERS = [
  {
    id: "#1004",
    client: "Juan Pérez",
    date: "09/10/2026",
    paymentStatus: "Pagado",
    logisticsStatus: "En preparación",
    installation: "Sí (Agendada)",
    total: 655000
  },
  {
    id: "#COT-245",
    client: "Juan Pérez",
    date: "05/10/2026",
    paymentStatus: "En Revisión",
    logisticsStatus: "Cotización a medida",
    installation: "No",
    total: 360000,
    isQuote: true
  },
  {
    id: "#1003",
    client: "Constructora SRL",
    date: "08/10/2026",
    paymentStatus: "Pend. Pago",
    logisticsStatus: "En espera",
    installation: "No",
    total: 420000
  }
];

// Almacén reactivo de la aplicación
let appState = {
  currentView: '01',
  selectedProductId: 101,
  installService: true,
  cart: [],
  products: [],
  orders: [],
  activeDetailGalleryMode: 'front'
};

// ==============================================================
// 2. INICIALIZACIÓN Y PERSISTENCIA
// ==============================================================

function initApp() {
  loadStateFromStorage();
  setupEventListeners();
  renderCatalog();
  renderCart();
  renderClientOrders();
  renderAdminStock();
  renderAdminOrders();
  updateHeaderCartBadges();
  renderProductDetail(appState.selectedProductId);
  calculateCustomQuote();

  // Detectar hash inicial si viene en la URL
  const hash = window.location.hash.replace('#', '');
  if (hash === 'cotizador') navigateTo('11');
  else if (hash === 'pedidos') navigateTo('05');
  else if (hash === 'carrito') navigateTo('03');
  else navigateTo('01');
}

function loadStateFromStorage() {
  try {
    const savedProducts = localStorage.getItem('alp_products');
    const savedCart = localStorage.getItem('alp_cart');
    const savedOrders = localStorage.getItem('alp_orders');

    appState.products = savedProducts ? JSON.parse(savedProducts) : [...DEFAULT_PRODUCTS];
    appState.cart = savedCart ? JSON.parse(savedCart) : [...DEFAULT_CART];
    appState.orders = savedOrders ? JSON.parse(savedOrders) : [...DEFAULT_ORDERS];
  } catch (e) {
    console.error("Error al cargar localStorage, usando valores por defecto", e);
    appState.products = [...DEFAULT_PRODUCTS];
    appState.cart = [...DEFAULT_CART];
    appState.orders = [...DEFAULT_ORDERS];
  }
}

function saveStateToStorage() {
  localStorage.setItem('alp_products', JSON.stringify(appState.products));
  localStorage.setItem('alp_cart', JSON.stringify(appState.cart));
  localStorage.setItem('alp_orders', JSON.stringify(appState.orders));
}

function resetDemoData() {
  if (confirm("¿Deseas restablecer todos los datos del prototipo a su estado original según los wireframes?")) {
    localStorage.removeItem('alp_products');
    localStorage.removeItem('alp_cart');
    localStorage.removeItem('alp_orders');
    appState.products = [...DEFAULT_PRODUCTS];
    appState.cart = [...DEFAULT_CART];
    appState.orders = [...DEFAULT_ORDERS];
    appState.installService = true;
    saveStateToStorage();
    renderCatalog();
    renderCart();
    renderClientOrders();
    renderAdminStock();
    renderAdminOrders();
    updateHeaderCartBadges();
    showToast("Datos restablecidos al estado inicial de los wireframes.");
  }
}

// ==============================================================
// 3. ENRUTADOR Y NAVEGACIÓN SPA
// ==============================================================

function navigateTo(viewId) {
  if (!WIREFRAME_METADATA[viewId]) return;

  appState.currentView = viewId;

  // Actualizar paneles visibles
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const targetPanel = document.getElementById(`view-${viewId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Actualizar selector de la barra de wireframes
  document.querySelectorAll('.wf-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
  });

  // Actualizar indicadores superiores
  const meta = WIREFRAME_METADATA[viewId];
  const activeLabel = document.getElementById('current-wf-indicator');
  const cuLabel = document.getElementById('current-cu-indicator');
  if (activeLabel) activeLabel.innerHTML = `Wireframe Activo: <strong>${meta.title}</strong>`;
  if (cuLabel) cuLabel.textContent = meta.cu;

  // Alternar entre cabecera pública y cabecera de panel interno
  const publicHeader = document.getElementById('main-public-header');
  const adminHeader = document.getElementById('main-admin-header');
  const isAdminView = ['07', '08', '09', '10'].includes(viewId);

  if (isAdminView) {
    publicHeader.classList.add('hidden');
    adminHeader.classList.remove('hidden');

    // Actualizar botón activo en menú interno
    document.querySelectorAll('.admin-nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-admin-view') === viewId);
    });

    const adminModuleTitle = document.getElementById('admin-module-title');
    if (adminModuleTitle) {
      if (viewId === '07') adminModuleTitle.textContent = "Gestión de Inventario y Stock";
      else if (viewId === '08') adminModuleTitle.textContent = "Gestión de Proveedores y Órdenes de Compra";
      else if (viewId === '09') adminModuleTitle.textContent = "Control de Pedidos y Despachos";
      else if (viewId === '10') adminModuleTitle.textContent = "Dashboard y Métricas de Ventas";
    }
  } else {
    publicHeader.classList.remove('hidden');
    adminHeader.classList.add('hidden');

    // Actualizar enlaces de navegación pública
    document.querySelectorAll('.public-nav .nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-nav') === viewId);
    });

    // Control de pill de usuario en header
    const authBox = document.getElementById('header-btn-login');
    const userPill = document.getElementById('header-user-pill');
    if (viewId === '05') {
      authBox.classList.add('hidden');
      userPill.classList.remove('hidden');
    } else {
      authBox.classList.remove('hidden');
      userPill.classList.add('hidden');
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==============================================================
// 4. GENERADORES DE ILUSTRACIONES VECTORIALES (SVG REALISTAS)
// ==============================================================

function getAberturaSVG(type, width = "100%", height = "100%") {
  if (type === 'window') {
    return `
      <svg viewBox="0 0 280 180" width="${width}" height="${height}" style="max-height:160px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));">
        <!-- Marco Exterior Aluminio -->
        <rect x="15" y="15" width="250" height="150" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="8"/>
        <!-- Sombra interna marco -->
        <rect x="23" y="23" width="234" height="134" fill="#0f172a" fill-opacity="0.05"/>
        <!-- Hoja Izquierda -->
        <rect x="25" y="25" width="115" height="130" fill="#e0f2fe" stroke="#475569" stroke-width="5"/>
        <line x1="28" y1="28" x2="135" y2="150" stroke="#ffffff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="45" y1="28" x2="135" y2="130" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4"/>
        <rect x="130" y="80" width="6" height="20" rx="2" fill="#0f172a"/>
        <!-- Hoja Derecha (superpuesta) -->
        <rect x="135" y="25" width="120" height="130" fill="#e0f2fe" stroke="#334155" stroke-width="6"/>
        <line x1="140" y1="28" x2="250" y2="150" stroke="#ffffff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="155" y1="28" x2="250" y2="130" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4"/>
        <rect x="142" y="80" width="6" height="20" rx="2" fill="#0f172a"/>
        <!-- Riel inferior -->
        <line x1="20" y1="158" x2="260" y2="158" stroke="#0284c7" stroke-width="3"/>
      </svg>
    `;
  } else if (type === 'door') {
    return `
      <svg viewBox="0 0 200 240" width="${width}" height="${height}" style="max-height:160px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));">
        <!-- Marco Puerta -->
        <rect x="25" y="10" width="150" height="220" rx="3" fill="#f1f5f9" stroke="#1e293b" stroke-width="8"/>
        <!-- Hoja Puerta PVC -->
        <rect x="33" y="18" width="134" height="206" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
        <!-- Molduras Inyectadas Oblakium -->
        <rect x="45" y="32" width="110" height="70" rx="4" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="45" y="115" width="110" height="95" rx="4" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Picaporte de acero inoxidable -->
        <circle cx="145" cy="120" r="5" fill="#334155"/>
        <rect x="135" y="118" width="18" height="5" rx="2" fill="#0f172a"/>
        <!-- Umbral inferior -->
        <line x1="25" y1="228" x2="175" y2="228" stroke="#334155" stroke-width="6"/>
      </svg>
    `;
  } else {
    // Portón Chapa
    return `
      <svg viewBox="0 0 280 180" width="${width}" height="${height}" style="max-height:160px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));">
        <!-- Marco portón -->
        <rect x="15" y="15" width="250" height="150" rx="3" fill="#334155" stroke="#0f172a" stroke-width="8"/>
        <!-- Tablones de Chapa Inyectada -->
        <rect x="23" y="23" width="234" height="26" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
        <rect x="23" y="49" width="234" height="26" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
        <rect x="23" y="75" width="234" height="26" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
        <rect x="23" y="101" width="234" height="26" fill="#334155" stroke="#1e293b" stroke-width="1.5"/>
        <rect x="23" y="127" width="234" height="26" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
        <!-- Apliques de acero inoxidable -->
        <rect x="35" y="32" width="10" height="110" fill="#cbd5e1"/>
        <rect x="55" y="32" width="10" height="110" fill="#cbd5e1"/>
        <!-- Cerradura central -->
        <circle cx="140" cy="90" r="7" fill="#0f172a"/>
        <circle cx="140" cy="90" r="3" fill="#cbd5e1"/>
      </svg>
    `;
  }
}

// ==============================================================
// 5. RENDERIZADO DEL CATÁLOGO (VISTA 01)
// ==============================================================

function renderCatalog() {
  const grid = document.getElementById('products-catalog-grid');
  if (!grid) return;

  const categoryFilter = document.getElementById('filter-category').value;
  const materialFilter = document.getElementById('filter-material').value;
  const minPrice = parseFloat(document.getElementById('filter-price-min').value) || 0;
  const maxPrice = parseFloat(document.getElementById('filter-price-max').value) || Infinity;
  const query = (document.getElementById('catalog-search-input')?.value || '').toLowerCase().trim();

  const filtered = appState.products.filter(p => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (materialFilter !== 'all' && !p.material.toLowerCase().includes(materialFilter.toLowerCase())) return false;
    if (p.price < minPrice || p.price > maxPrice) return false;
    if (query && !p.name.toLowerCase().includes(query) && !p.materialDetail.toLowerCase().includes(query)) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #fff; border-radius: 8px; border: 1px dashed var(--slate-300);">
        <p style="font-size: 1.1rem; color: var(--slate-600); font-weight: 600;">No se encontraron aberturas que coincidan con la búsqueda.</p>
        <button class="btn btn-outline-dark" style="margin-top: 14px;" onclick="clearCatalogFilters()">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-product-id="${p.id}">
      <div class="product-img-wrapper" onclick="openProductDetail(${p.id})">
        <span class="product-badge-corner">${p.material}</span>
        ${getAberturaSVG(p.type)}
      </div>
      <div class="product-info-body">
        <h3 class="product-title" onclick="openProductDetail(${p.id})">${p.name}</h3>
        <p class="product-meta">${p.materialDetail}</p>
        <div class="product-price">$${p.price.toLocaleString('es-AR')}</div>
        <div class="product-card-actions">
          <button class="btn btn-dark" onclick="addToCart(${p.id})">
            Añadir al Carrito
          </button>
          <button class="btn btn-outline-dark" onclick="openProductDetail(${p.id})">
            Ver Ficha Técnica
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function clearCatalogFilters() {
  document.getElementById('filter-category').value = 'all';
  document.getElementById('filter-material').value = 'all';
  document.getElementById('filter-price-min').value = '0';
  document.getElementById('filter-price-max').value = '500000';
  document.getElementById('catalog-search-input').value = '';
  renderCatalog();
}

// ==============================================================
// 6. DETALLE DE PRODUCTO (VISTA 02)
// ==============================================================

function openProductDetail(productId) {
  appState.selectedProductId = productId;
  renderProductDetail(productId);
  navigateTo('02');
}

function renderProductDetail(productId) {
  const p = appState.products.find(item => item.id === productId) || appState.products[0];
  if (!p) return;

  document.getElementById('product-detail-bc-name').textContent = p.name;
  document.getElementById('product-detail-bc-mat').textContent = p.material;
  document.getElementById('product-detail-title').textContent = p.fullTitle || p.name;
  document.getElementById('product-detail-price').textContent = `$${p.price.toLocaleString('es-AR')}`;

  const stockBadge = document.getElementById('product-detail-stock');
  if (p.stock > p.minStock) {
    stockBadge.className = "stock-badge stock-badge-available";
    stockBadge.innerHTML = `<span class="dot-green"></span> Stock Disponible (${p.stock} unidades)`;
  } else {
    stockBadge.className = "stock-badge badge-stock-min";
    stockBadge.innerHTML = `⚠️ Stock Mínimo (${p.stock} unidades restantes)`;
  }

  // Especificaciones técnicas
  const specsList = document.getElementById('product-detail-specs');
  if (specsList && p.specs) {
    specsList.innerHTML = p.specs.map(s => `<li>• ${s}</li>`).join('');
  }

  // Render SVG interactivo de alta resolución
  const svgContainer = document.getElementById('product-detail-svg-container');
  if (svgContainer) {
    if (appState.activeDetailGalleryMode === 'front') {
      svgContainer.innerHTML = getAberturaSVG(p.type, "340px", "260px");
    } else if (appState.activeDetailGalleryMode === 'profile') {
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 220" width="320" height="220" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
          <!-- Vista de corte DVH -->
          <rect x="20" y="20" width="280" height="180" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
          <text x="35" y="45" fill="#0284c7" font-weight="bold" font-size="14">Corte Técnico DVH 4/12/4</text>
          <!-- Vidrio 1 -->
          <rect x="70" y="65" width="16" height="110" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="65" y="195" fill="#64748b" font-size="11">Float 4mm</text>
          <!-- Cámara de aire 12mm con desecante -->
          <rect x="90" y="65" width="48" height="110" fill="#f0f9ff" stroke="#94a3b8" stroke-dasharray="3"/>
          <text x="94" y="125" fill="#0369a1" font-size="10" font-weight="bold">Cámara 12mm</text>
          <!-- Vidrio 2 -->
          <rect x="142" y="65" width="16" height="110" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="135" y="195" fill="#64748b" font-size="11">Float 4mm</text>
          <!-- Perfil aluminio Modena -->
          <path d="M 165 65 L 240 65 L 240 175 L 185 175 L 185 140 L 165 140 Z" fill="#334155" stroke="#0f172a" stroke-width="2"/>
          <text x="180" y="105" fill="#ffffff" font-size="11" font-weight="bold">Alu Modena</text>
        </svg>
      `;
    } else {
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 220" width="320" height="220">
          <!-- Fachada terminada -->
          <rect x="20" y="20" width="280" height="180" rx="6" fill="#e2e8f0" stroke="#94a3b8"/>
          <!-- Mampostería texturada -->
          <line x1="20" y1="70" x2="300" y2="70" stroke="#cbd5e1" stroke-width="1"/>
          <line x1="20" y1="120" x2="300" y2="120" stroke="#cbd5e1" stroke-width="1"/>
          <line x1="20" y1="170" x2="300" y2="170" stroke="#cbd5e1" stroke-width="1"/>
          <!-- Vano con la abertura instalada -->
          <rect x="60" y="40" width="200" height="140" fill="#0f172a" stroke="#ffffff" stroke-width="4"/>
          ${getAberturaSVG(p.type, "180px", "120px")}
        </svg>
      `;
    }
  }

  // Vincular botones de compra
  const btnAdd = document.getElementById('btn-add-detail-to-cart');
  if (btnAdd) {
    btnAdd.onclick = () => {
      addToCart(p.id);
    };
  }

  const btnMedida = document.getElementById('btn-request-custom-from-detail');
  if (btnMedida) {
    btnMedida.onclick = () => {
      prefillCotizadorWithProduct(p);
      navigateTo('11');
    };
  }
}

function prefillCotizadorWithProduct(product) {
  const typoSelect = document.getElementById('quote-typology');
  if (typoSelect) {
    if (product.type === 'window') typoSelect.value = 'corrediza-modena';
    else if (product.type === 'door') typoSelect.value = 'puerta-oblakium';
    else typoSelect.value = 'porton-chapa';
  }
  calculateCustomQuote();
}

// ==============================================================
// 7. GESTIÓN DEL CARRITO DE COMPRAS (VISTA 03)
// ==============================================================

function addToCart(productId) {
  const existing = appState.cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ productId, qty: 1 });
  }
  saveStateToStorage();
  updateHeaderCartBadges();
  renderCart();
  const prod = appState.products.find(p => p.id === productId);
  showToast(`"${prod ? prod.name : 'Producto'}" añadido al carrito.`);
}

function updateCartQty(productId, delta) {
  const item = appState.cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    appState.cart = appState.cart.filter(i => i.productId !== productId);
  }
  saveStateToStorage();
  updateHeaderCartBadges();
  renderCart();
}

function removeFromCart(productId) {
  appState.cart = appState.cart.filter(i => i.productId !== productId);
  saveStateToStorage();
  updateHeaderCartBadges();
  renderCart();
  showToast("Producto eliminado del carrito.");
}

function updateHeaderCartBadges() {
  const totalCount = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalCount;
  });
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div style="background: #ffffff; padding: 40px; border-radius: 10px; border: 1.5px solid var(--slate-300); text-align: center;">
        <p style="font-size: 1.15rem; color: var(--slate-600); font-weight: 700; margin-bottom: 12px;">Tu carrito está vacío.</p>
        <button class="btn btn-primary" onclick="navigateTo('01')">Explorar Catálogo de Aberturas</button>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  let subtotal = 0;

  container.innerHTML = appState.cart.map(item => {
    const prod = appState.products.find(p => p.id === item.productId) || {
      name: "Abertura Los Pampas",
      materialDetail: "Estándar",
      price: 185000,
      type: "window"
    };
    const lineTotal = prod.price * item.qty;
    subtotal += lineTotal;

    return `
      <div class="cart-item-row">
        <div class="cart-item-left">
          <div class="cart-item-img">
            ${getAberturaSVG(prod.type, "70px", "55px")}
          </div>
          <div class="cart-item-info">
            <h4>${prod.name}</h4>
            <div class="cart-item-desc">${prod.materialDetail}</div>
            <div class="cart-item-unit-price">$${prod.price.toLocaleString('es-AR')} c/u</div>
          </div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateCartQty(${item.productId}, -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.productId}, 1)">+</button>
          </div>
          <div class="cart-item-subtotal">$${lineTotal.toLocaleString('es-AR')}</div>
          <button class="btn-remove-item" onclick="removeFromCart(${item.productId})" title="Eliminar del carrito">✕</button>
        </div>
      </div>
    `;
  }).join('');

  updateCartTotals(subtotal);
}

function updateCartTotals(subtotal) {
  const installCost = appState.installService && appState.cart.length > 0 ? 45000 : 0;
  const grandTotal = subtotal + installCost;

  // Actualizar resumen en Vista 03 (Carrito)
  const subtotalEl = document.getElementById('cart-summary-subtotal');
  const installRow = document.getElementById('cart-summary-install-row');
  const installEl = document.getElementById('cart-summary-install');
  const totalEl = document.getElementById('cart-summary-total');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-AR')}`;
  if (installEl) installEl.textContent = installCost > 0 ? `$${installCost.toLocaleString('es-AR')}` : "$0";
  if (installRow) installRow.style.display = appState.installService ? 'flex' : 'none';
  if (totalEl) totalEl.textContent = `$${grandTotal.toLocaleString('es-AR')}`;

  // Actualizar también resumen lateral en Vista 04 (Checkout)
  renderCheckoutRecap(subtotal, installCost, grandTotal);
}

function renderCheckoutRecap(subtotal, installCost, grandTotal) {
  const recapContainer = document.getElementById('checkout-recap-items');
  const recapTotal = document.getElementById('checkout-recap-total');
  const btnPayText = document.getElementById('btn-pay-text');

  if (recapContainer) {
    let rowsHtml = appState.cart.map(item => {
      const prod = appState.products.find(p => p.id === item.productId);
      const name = prod ? prod.name : "Abertura";
      const total = prod ? prod.price * item.qty : 0;
      return `
        <div class="recap-row">
          <span>${item.qty}x ${name}</span>
          <strong>$${total.toLocaleString('es-AR')}</strong>
        </div>
      `;
    }).join('');

    if (appState.installService && installCost > 0) {
      rowsHtml += `
        <div class="recap-row">
          <span>Colocación e Instalación en Obra</span>
          <strong>$45.000</strong>
        </div>
      `;
    }

    recapContainer.innerHTML = rowsHtml;
  }

  if (recapTotal) recapTotal.textContent = `$${grandTotal.toLocaleString('es-AR')}`;

  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'mercadopago';
  if (btnPayText) {
    if (paymentMethod === 'mercadopago') {
      btnPayText.textContent = `Pagar con Mercado Pago ($${grandTotal.toLocaleString('es-AR')})`;
    } else {
      btnPayText.textContent = `Notificar Transferencia Bancaria ($${grandTotal.toLocaleString('es-AR')})`;
    }
  }
}

// ==============================================================
// 8. CHECKOUT Y PAGO (VISTA 04)
// ==============================================================

function handleOrderSubmit() {
  const name = document.getElementById('checkout-name')?.value || "Juan Pérez";
  const address = document.getElementById('checkout-address')?.value || "Av. Pellegrini 1450, Rosario";
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'mercadopago';

  if (appState.cart.length === 0) {
    alert("Tu carrito no tiene artículos.");
    navigateTo('01');
    return;
  }

  // Generar nuevo pedido
  const newOrderNum = 1000 + appState.orders.length + 1;
  const orderCode = `#${newOrderNum}`;

  let subtotal = 0;
  appState.cart.forEach(item => {
    const prod = appState.products.find(p => p.id === item.productId);
    if (prod) {
      subtotal += prod.price * item.qty;
      // Descontar stock disponible
      prod.stock = Math.max(0, prod.stock - item.qty);
    }
  });

  const installCost = appState.installService ? 45000 : 0;
  const total = subtotal + installCost;

  const newOrder = {
    id: orderCode,
    client: name,
    date: new Date().toLocaleDateString('es-AR'),
    paymentStatus: paymentMethod === 'mercadopago' ? "Pagado" : "Verificando transferencia",
    logisticsStatus: "En preparación",
    installation: appState.installService ? "Sí (Agendada)" : "No",
    total: total
  };

  appState.orders.unshift(newOrder);
  appState.cart = []; // Vaciar carrito
  saveStateToStorage();

  // Actualizar vistas afectadas
  updateHeaderCartBadges();
  renderCart();
  renderClientOrders();
  renderAdminStock();
  renderAdminOrders();

  // Mostrar modal de éxito
  const modal = document.getElementById('modal-success');
  const codeEl = document.getElementById('success-code');
  const msgEl = document.getElementById('success-modal-message');

  if (codeEl) codeEl.textContent = orderCode;
  if (msgEl) {
    msgEl.innerHTML = `Gracias por tu compra, <strong>${name}</strong>.<br>Despacho programado hacia <em>${address}</em>. Comprobante enviado a tu correo.`;
  }
  if (modal) modal.classList.remove('hidden');
}

// ==============================================================
// 9. CUENTA CLIENTE (VISTA 05)
// ==============================================================

function renderClientOrders() {
  const tbody = document.getElementById('customer-orders-tbody');
  const countBadge = document.getElementById('client-orders-count');
  if (!tbody) return;

  if (countBadge) countBadge.textContent = `${appState.orders.length} registros`;

  tbody.innerHTML = appState.orders.map(order => {
    let badgeClass = "status-paid";
    if (order.paymentStatus === 'En Revisión') badgeClass = "status-review";
    else if (order.paymentStatus.includes('Verificando') || order.paymentStatus.includes('Pend')) badgeClass = "status-pending";

    return `
      <tr>
        <td><strong class="text-primary">${order.id}</strong></td>
        <td>${order.date}</td>
        <td><span class="order-badge-status ${badgeClass}">${order.paymentStatus}</span></td>
        <td>${order.logisticsStatus}</td>
        <td><strong>$${order.total.toLocaleString('es-AR')}</strong></td>
        <td>
          <button class="btn btn-outline-dark btn-sm" onclick="showReceiptModal('${order.id}')">
            Ver Detalle
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function showReceiptModal(orderId) {
  const order = appState.orders.find(o => o.id === orderId);
  if (!order) return;
  alert(`Comprobante Oficial Aberturas Los Pampas\nOrden: ${order.id}\nCliente: ${order.client}\nFecha: ${order.date}\nEstado Pago: ${order.paymentStatus}\nTotal: $${order.total.toLocaleString('es-AR')}\n\n(Factura electrónica con CAE disponible para descarga)`);
}

// ==============================================================
// 10. LOGIN Y PANEL INTERNO (VISTAS 06, 07, 08, 09, 10)
// ==============================================================

function handleInternalLogin() {
  showToast("Acceso corporativo concedido. Redirigiendo a Gestión de Stock.");
  navigateTo('07');
}

function fillAndLogin(email, roleName) {
  const emailInput = document.getElementById('login-email');
  if (emailInput) emailInput.value = email;
  showToast(`Ingresando como: ${roleName}`);
  navigateTo('07');
}

function renderAdminStock() {
  const tbody = document.getElementById('admin-stock-tbody');
  if (!tbody) return;

  const search = (document.getElementById('admin-stock-search')?.value || '').toLowerCase();
  const lineFilter = document.getElementById('admin-stock-filter-line')?.value || 'all';

  const filtered = appState.products.filter(p => {
    if (lineFilter !== 'all' && !p.material.includes(lineFilter)) return false;
    if (search && !p.name.toLowerCase().includes(search) && !p.id.toString().includes(search)) return false;
    return true;
  });

  tbody.innerHTML = filtered.map(p => {
    const isMinStock = p.stock <= p.minStock;
    const badge = isMinStock
      ? `<span class="badge-stock-min">⚠️ Stock Mínimo</span>`
      : `<span class="badge-stock-normal">Normal</span>`;

    const stockColor = isMinStock ? 'color: var(--rose-600); font-weight: 800;' : 'font-weight: 700;';

    return `
      <tr>
        <td><code>#${p.id}</code></td>
        <td><strong>${p.name}</strong></td>
        <td>${p.material}</td>
        <td>$${p.price.toLocaleString('es-AR')}</td>
        <td style="${stockColor}">${p.stock} unidades</td>
        <td>${badge}</td>
        <td>
          <div class="stock-action-btns">
            <button class="btn-stock-adj" onclick="adjustProductStock(${p.id}, 1)" title="Sumar stock">+</button>
            <button class="btn-stock-adj" onclick="adjustProductStock(${p.id}, -1)" title="Restar stock">-</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function adjustProductStock(productId, delta) {
  const prod = appState.products.find(p => p.id === productId);
  if (!prod) return;

  prod.stock = Math.max(0, prod.stock + delta);
  saveStateToStorage();
  renderAdminStock();
  renderCatalog();
  showToast(`Stock de "${prod.name}" actualizado a ${prod.stock} un.`);
}

function handleAddNewProduct() {
  const name = document.getElementById('new-prod-name').value;
  const category = document.getElementById('new-prod-cat').value;
  const stock = parseInt(document.getElementById('new-prod-stock').value) || 5;
  const price = parseFloat(document.getElementById('new-prod-price').value) || 150000;
  const minStock = parseInt(document.getElementById('new-prod-min-stock').value) || 2;

  const newId = 100 + appState.products.length + 1;
  const newProduct = {
    id: newId,
    name: name,
    fullTitle: `${name} (${category})`,
    category: category.toLowerCase().includes('alu') ? 'ventanas' : 'puertas',
    material: category,
    materialDetail: `${category} Estándar Fabrica`,
    specs: ["Fabricación bajo normas IRAM", "Garantía oficial Los Pampas"],
    price: price,
    stock: stock,
    minStock: minStock,
    type: category.toLowerCase().includes('puerta') ? 'door' : 'window'
  };

  appState.products.push(newProduct);
  saveStateToStorage();
  renderAdminStock();
  renderCatalog();

  document.getElementById('modal-new-product').classList.add('hidden');
  showToast(`Nuevo producto "${name}" agregado al inventario.`);
}

function renderAdminOrders() {
  const tbody = document.getElementById('admin-orders-tbody');
  if (!tbody) return;

  tbody.innerHTML = appState.orders.map((o, idx) => {
    let badgeClass = "status-paid";
    if (o.paymentStatus === 'En Revisión') badgeClass = "status-review";
    else if (o.paymentStatus.includes('Verificando') || o.paymentStatus.includes('Pend')) badgeClass = "status-pending";

    const isInstallYes = o.installation.includes('Sí');
    const installBadge = isInstallYes
      ? `<span class="badge-install-yes">Sí (Agendada)</span>`
      : `<span class="badge-install-no">No</span>`;

    return `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td><strong>${o.client}</strong></td>
        <td>${o.date}</td>
        <td><span class="order-badge-status ${badgeClass}">${o.paymentStatus}</span></td>
        <td>
          <select class="select-status-table" onchange="updateOrderStatus(${idx}, this.value)">
            <option value="En preparación" ${o.logisticsStatus === 'En preparación' ? 'selected' : ''}>En preparación</option>
            <option value="Listo para despacho" ${o.logisticsStatus === 'Listo para despacho' ? 'selected' : ''}>Listo para despacho</option>
            <option value="En reparto" ${o.logisticsStatus === 'En reparto' ? 'selected' : ''}>En reparto</option>
            <option value="Entregado" ${o.logisticsStatus === 'Entregado' ? 'selected' : ''}>Entregado</option>
            <option value="Cotización a medida" ${o.logisticsStatus === 'Cotización a medida' ? 'selected' : ''}>Cotización a medida</option>
          </select>
        </td>
        <td>${installBadge}</td>
        <td><strong>$${o.total.toLocaleString('es-AR')}</strong></td>
      </tr>
    `;
  }).join('');
}

function updateOrderStatus(orderIndex, newStatus) {
  if (appState.orders[orderIndex]) {
    appState.orders[orderIndex].logisticsStatus = newStatus;
    saveStateToStorage();
    renderClientOrders();
    showToast(`Estado de la orden actualizado a: "${newStatus}".`);
  }
}

// ==============================================================
// 11. COTIZADOR A MEDIDA (VISTA 11)
// ==============================================================

function calculateCustomQuote() {
  const widthMm = parseFloat(document.getElementById('quote-width')?.value) || 1500;
  const heightMm = parseFloat(document.getElementById('quote-height')?.value) || 1200;
  const material = document.getElementById('quote-material')?.value || 'aluminio-modena';
  const glass = document.getElementById('quote-glass')?.value || 'dvh-4-12-4';
  const color = document.getElementById('quote-color')?.value || 'negro-micro';

  // Cálculos geométricos
  const areaM2 = (widthMm * heightMm) / 1000000;
  const perimeterM = (2 * (widthMm + heightMm)) / 1000;

  const areaIndicator = document.getElementById('quote-area-indicator');
  const perimIndicator = document.getElementById('quote-perimeter-indicator');
  if (areaIndicator) areaIndicator.textContent = `${areaM2.toFixed(2)} m²`;
  if (perimIndicator) perimIndicator.textContent = `${perimeterM.toFixed(2)} ml`;

  // Factores de costo
  let matBaseCostPerM = 38800; // $/ml de perfil
  if (material === 'aluminio-a30') matBaseCostPerM = 54000;
  else if (material === 'pvc-aleman') matBaseCostPerM = 62000;
  else if (material === 'chapa-pesada') matBaseCostPerM = 32000;

  let glassCostPerM2 = 47200; // $/m2 vidrio DVH
  if (glass === 'dvh-laminado') glassCostPerM2 = 68000;
  else if (glass === 'vidrio-simple') glassCostPerM2 = 18000;
  else if (glass === 'ciego') glassCostPerM2 = 25000;

  const costMaterials = Math.round(perimeterM * matBaseCostPerM);
  const costLabor = Math.round(65000 * (1 + (areaM2 - 1.8) * 0.2));
  const costGlass = Math.round(areaM2 * glassCostPerM2);
  const total = costMaterials + costLabor + costGlass;

  // Actualizar resumen en DOM
  const costMatEl = document.getElementById('cost-materials');
  const costLaborEl = document.getElementById('cost-labor');
  const costGlassEl = document.getElementById('cost-glass');
  const costTotalEl = document.getElementById('cost-total');

  if (costMatEl) costMatEl.textContent = `$${costMaterials.toLocaleString('es-AR')}`;
  if (costLaborEl) costLaborEl.textContent = `$${costLabor.toLocaleString('es-AR')}`;
  if (costGlassEl) costGlassEl.textContent = `$${costGlass.toLocaleString('es-AR')}`;
  if (costTotalEl) costTotalEl.textContent = `$${total.toLocaleString('es-AR')}`;

  const chipsContainer = document.getElementById('quote-specs-chips');
  if (chipsContainer) {
    chipsContainer.innerHTML = `
      <span class="q-chip">${widthMm} x ${heightMm} mm</span>
      <span class="q-chip">${glass.toUpperCase().replace(/-/g, ' ')}</span>
      <span class="q-chip">${color.replace(/-/g, ' ')}</span>
    `;
  }

  return total;
}

function handleSendTechnicalQuote() {
  const total = calculateCustomQuote();
  const widthMm = document.getElementById('quote-width')?.value || 1500;
  const heightMm = document.getElementById('quote-height')?.value || 1200;
  const typo = document.getElementById('quote-typology')?.options[document.getElementById('quote-typology').selectedIndex]?.text || "Ventana Corrediza";

  const newQuoteNum = 246 + appState.orders.length;
  const quoteCode = `#COT-${newQuoteNum}`;

  const newQuote = {
    id: quoteCode,
    client: "Juan Pérez",
    date: new Date().toLocaleDateString('es-AR'),
    paymentStatus: "En Revisión",
    logisticsStatus: `Cotización a medida (${typo} ${widthMm}x${heightMm}mm)`,
    installation: "A coordinar",
    total: total,
    isQuote: true
  };

  appState.orders.unshift(newQuote);
  saveStateToStorage();
  renderClientOrders();
  renderAdminOrders();

  const modal = document.getElementById('modal-success');
  const codeEl = document.getElementById('success-code');
  const titleEl = document.getElementById('success-modal-title');
  const msgEl = document.getElementById('success-modal-message');

  if (titleEl) titleEl.textContent = "¡Cotización Enviada a Oficina Técnica!";
  if (codeEl) codeEl.textContent = quoteCode;
  if (msgEl) {
    msgEl.innerHTML = `Hemos registrado tu solicitud para <strong>${typo} de ${widthMm}x${heightMm} mm</strong>.<br>Nuestro departamento técnico verificará tolerancias y te responderá en menos de 24 horas hábiles.`;
  }
  if (modal) modal.classList.remove('hidden');
}

// ==============================================================
// 12. COMPARADOR DE WIREFRAMES SVG
// ==============================================================

async function openWireframeComparator() {
  const meta = WIREFRAME_METADATA[appState.currentView];
  if (!meta) return;

  const modal = document.getElementById('modal-wireframe-comparator');
  const titleEl = document.getElementById('comparator-title');
  const subEl = document.getElementById('comparator-subtitle');
  const frame = document.getElementById('svg-viewer-container');

  if (titleEl) titleEl.textContent = `Wireframe Oficial ${meta.title}`;
  if (subEl) subEl.textContent = `diagramas/wireframes/${meta.svg}`;

  // Cargar contenido del SVG correspondiente
  try {
    const response = await fetch(meta.svg);
    if (response.ok) {
      const svgText = await response.text();
      frame.innerHTML = svgText;
    } else {
      frame.innerHTML = `<img src="${meta.svg}" alt="${meta.title}" style="max-width:100%; max-height:100%;">`;
    }
  } catch (e) {
    frame.innerHTML = `<img src="${meta.svg}" alt="${meta.title}" style="max-width:100%; max-height:100%;">`;
  }

  modal.classList.remove('hidden');
}

// ==============================================================
// 13. GENERADOR DE ORDEN DE COMPRA (VISTA 08)
// ==============================================================

function handleGenerateOcPdf() {
  const provider = document.getElementById('oc-provider')?.options[document.getElementById('oc-provider').selectedIndex]?.text || "Aluar";
  const ocNum = document.getElementById('oc-number-indicator')?.textContent || "OC-2026-088";
  const total = document.getElementById('oc-total-cost')?.textContent || "$1.973.000";

  alert(`ORDEN DE COMPRA OFICIAL — ABERTURAS LOS PAMPAS\n\nNúmero: ${ocNum}\nProveedor: ${provider}\nFecha: ${new Date().toLocaleDateString('es-AR')}\nCondición: 30 días FF con remito conformado\nMonto Total: ${total}\n\n✓ Documento PDF generado y listo para enviar al proveedor.`);
}

// ==============================================================
// 14. EVENT LISTENERS Y BINDINGS
// ==============================================================

function setupEventListeners() {
  // Navegación por barra de wireframes
  document.querySelectorAll('.wf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      navigateTo(view);
    });
  });

  // Botón reset demo
  document.getElementById('btn-reset-demo')?.addEventListener('click', resetDemoData);

  // Botón comparador con SVG original
  document.getElementById('btn-toggle-wireframe-modal')?.addEventListener('click', openWireframeComparator);
  document.getElementById('btn-close-comparator')?.addEventListener('click', () => {
    document.getElementById('modal-wireframe-comparator')?.classList.add('hidden');
  });
  document.getElementById('btn-close-comparator-2')?.addEventListener('click', () => {
    document.getElementById('modal-wireframe-comparator')?.classList.add('hidden');
  });

  // Navegación header admin
  document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const v = item.getAttribute('data-admin-view');
      navigateTo(v);
    });
  });

  // Galería de miniaturas en Ficha de Producto
  document.querySelectorAll('.thumb-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.thumb-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeDetailGalleryMode = btn.getAttribute('data-view-mode');
      renderProductDetail(appState.selectedProductId);
    });
  });

  // Checkbox medidas especiales en ficha
  document.getElementById('check-medidas-especiales')?.addEventListener('change', (e) => {
    if (e.target.checked) {
      const p = appState.products.find(item => item.id === appState.selectedProductId);
      if (p) prefillCotizadorWithProduct(p);
      navigateTo('11');
    }
  });

  // Filtros de catálogo
  document.getElementById('btn-apply-filters')?.addEventListener('click', renderCatalog);
  document.getElementById('btn-clear-filters')?.addEventListener('click', clearCatalogFilters);
  document.getElementById('catalog-search-input')?.addEventListener('input', renderCatalog);

  // Checkbox de instalación en carrito
  document.getElementById('check-instalacion-obra')?.addEventListener('change', (e) => {
    appState.installService = e.target.checked;
    renderCart();
  });

  // Métodos de pago en Checkout
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const bankInfo = document.getElementById('bank-transfer-info');
      const isTransfer = radio.value === 'transfer';
      if (bankInfo) bankInfo.classList.toggle('hidden', !isTransfer);

      // Actualizar texto del botón de pago
      const subtotal = appState.cart.reduce((s, i) => {
        const prod = appState.products.find(p => p.id === i.productId);
        return s + (prod ? prod.price * i.qty : 0);
      }, 0);
      const installCost = appState.installService ? 45000 : 0;
      renderCheckoutRecap(subtotal, installCost, subtotal + installCost);
    });
  });

  // Ejecución de pedido en Checkout
  document.getElementById('btn-submit-order')?.addEventListener('click', handleOrderSubmit);

  // Modal Éxito Acciones
  document.getElementById('btn-success-primary-action')?.addEventListener('click', () => {
    document.getElementById('modal-success')?.classList.add('hidden');
    navigateTo('05');
  });
  document.getElementById('btn-success-secondary-action')?.addEventListener('click', () => {
    document.getElementById('modal-success')?.classList.add('hidden');
    navigateTo('01');
  });

  // Modal Nuevo Producto en Stock
  document.getElementById('btn-open-new-product-modal')?.addEventListener('click', () => {
    document.getElementById('modal-new-product')?.classList.remove('hidden');
  });
  document.getElementById('btn-close-new-product')?.addEventListener('click', () => {
    document.getElementById('modal-new-product')?.classList.add('hidden');
  });
  document.getElementById('btn-cancel-new-product')?.addEventListener('click', () => {
    document.getElementById('modal-new-product')?.classList.add('hidden');
  });

  // Filtros del buscador en Panel de Stock
  document.getElementById('admin-stock-search')?.addEventListener('input', renderAdminStock);
  document.getElementById('admin-stock-filter-line')?.addEventListener('change', renderAdminStock);

  // Cotizador interactivo inputs
  ['quote-width', 'quote-height', 'quote-material', 'quote-glass', 'quote-color', 'quote-typology'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', calculateCustomQuote);
    document.getElementById(id)?.addEventListener('change', calculateCustomQuote);
  });
  document.getElementById('btn-recalculate-quote')?.addEventListener('click', calculateCustomQuote);
  document.getElementById('btn-send-quote-technical')?.addEventListener('click', handleSendTechnicalQuote);

  // Drag and drop simulado de plano técnico
  const dropzone = document.getElementById('quote-dropzone');
  const fileInput = document.getElementById('quote-file-input');
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files[0]) {
        document.getElementById('quote-file-label').textContent = `✓ Archivo adjunto: ${fileInput.files[0].name}`;
        showToast("Plano técnico adjuntado para revisión.");
      }
    });
  }

  // Generar Orden de Compra en Vista 08
  document.getElementById('btn-generate-oc-pdf')?.addEventListener('click', handleGenerateOcPdf);
  document.getElementById('btn-add-oc-item')?.addEventListener('click', () => {
    alert("Función de agregar ítem habilitada en el formulario.");
  });

  // Contacto en header
  document.getElementById('nav-contacto-trigger')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}

// ==============================================================
// 15. UTILIDADES (TOAST, COPIAR AL PORTAPAPELES, SCROLL)
// ==============================================================

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copiado al portapapeles: ${text}`);
  }).catch(() => {
    showToast(`Texto: ${text}`);
  });
}

function scrollSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Iniciar aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', initApp);
