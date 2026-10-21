# 🪟 Aberturas Los Pampas — Prototipo Navegable

Prototipo web interactivo de alta fidelidad para **Aberturas Los Pampas**, empresa de fabricación y venta de aberturas (ventanas, puertas y portones) con sede en Rosario. Desarrollado como entrega académica basado en 11 wireframes oficiales que cubren tanto el flujo de cliente como el panel de administración interno.

---

## 📁 Estructura del proyecto

```
prototipo los pampas/
├── index.html                        # SPA principal — toda la UI
├── app.js                            # Motor de navegación y lógica del prototipo
├── styles.css                        # Estilos globales
├── 01-home-catalogo.svg              # Wireframe original WF-01
├── 02-ficha-producto.svg             # Wireframe original WF-02
├── 03-carrito.svg                    # Wireframe original WF-03
├── 04-checkout-pago.svg              # Wireframe original WF-04
├── 05-cuenta-cliente.svg             # Wireframe original WF-05
├── 06-login-interno.svg              # Wireframe original WF-06
├── 07-gestion-productos-stock.svg    # Wireframe original WF-07
├── 08-gestion-proveedores.svg        # Wireframe original WF-08
├── 09-gestion-pedidos-ventas.svg     # Wireframe original WF-09
├── 10-reportes.svg                   # Wireframe original WF-10
└── 11-cotizacion-a-medida.svg        # Wireframe original WF-11
```

> No hay dependencias externas de npm, frameworks ni build steps. Sólo HTML + CSS + JS vanilla.

---

## 🖥️ Vistas implementadas

El prototipo implementa 11 pantallas navegables, cada una mapeada a su caso de uso (CU):

| # | Vista | Caso de Uso |
|---|-------|-------------|
| 01 | Home & Catálogo | CU-01 / CU-03 |
| 02 | Ficha de Producto | CU-01 |
| 03 | Carrito de Compras | CU-04 |
| 04 | Checkout y Pago | CU-05 / CU-06 |
| 05 | Cuenta Cliente (Mis Pedidos) | CU-07 |
| 06 | Login Interno (Panel Admin) | CU-03 |
| 07 | Gestión de Inventario y Stock | CU-08 |
| 08 | Gestión de Proveedores y OC | CU-11 / CU-14 |
| 09 | Control de Pedidos y Despachos | CU-09 / CU-10 |
| 10 | Dashboard y Reportes | CU-12 |
| 11 | Cotizador a Medida | CU-02 |

---

## ⚙️ Cómo funciona

### Arquitectura SPA

Es una **Single Page Application** 100% estática. Todo el HTML de las 11 vistas vive en `index.html` como paneles con clase `.view-panel`; el router en `app.js` muestra y oculta el panel correcto mediante la función `navigateTo(viewId)`.

```
navigateTo('03')  →  muestra #view-03 (Carrito), oculta el resto
```

### Estado y persistencia

El estado de la aplicación (`appState`) se guarda en `localStorage` bajo las claves:

- `alp_products` — catálogo de productos con precios y stock
- `alp_cart` — ítems del carrito con cantidades
- `alp_orders` — pedidos del cliente demo

Al abrir la app por primera vez, se cargan datos semilla (`DEFAULT_PRODUCTS`, `DEFAULT_CART`, `DEFAULT_ORDERS`). El botón **Reiniciar** de la barra de control borra el storage y restaura esos valores.

### Barra de control académica

En la parte superior aparece una barra fija (`#wireframe-bar`) que permite:

- Navegar directamente a cualquier wireframe con un click
- Ver qué caso de uso corresponde a la pantalla activa
- Comparar la implementación con el **SVG original** del wireframe mediante un modal
- Reiniciar todos los datos demo a su estado original

### Cabeceras diferenciadas

- **Vistas públicas (01-05, 11):** se muestra el header de cliente con navegación, buscador y carrito.
- **Vistas de panel interno (07-10):** se activa un header de administración con menú lateral y título de módulo. El acceso se simula desde el WF-06 (login interno).

### Cotizador a medida (WF-11)

Calcula dinámicamente el precio de una abertura según:
- **Tipología** (corrediza, oscilobatiente, puerta, portón)
- **Ancho y alto** en centímetros
- **Cantidad de hojas**
- **Tipo de vidriado** (monolítico, DVH, DVH laminado)
- **Color/terminación** del perfil
- **Servicio de instalación** (coeficiente adicional)

Desde la ficha de cualquier producto se puede pre-completar el cotizador con la tipología correspondiente.

### Ilustraciones vectoriales

Los productos se renderizan con SVGs generados en tiempo real por `getAberturaSVG(type)` — sin imágenes externas. La ficha de producto (WF-02) incluye tres modos de visualización: vista frontal, corte técnico DVH y vista en fachada.

---

## 🚀 Deploy

### Localmente (sin servidor)

Basta con abrir `index.html` en cualquier navegador moderno:

```bash
# Opción 1: doble click sobre index.html en el explorador de archivos

# Opción 2: desde terminal con Python
python -m http.server 8080
# Luego abrí http://localhost:8080
```

### GitHub Pages (recomendado)

El proyecto fue diseñado explícitamente para desplegarse como sitio estático en **GitHub Pages**:

1. Subir la carpeta del proyecto a un repositorio de GitHub.
2. Ir a **Settings → Pages**.
3. En *Source*, seleccionar la rama `main` y la carpeta `/ (root)`.
4. Guardar. GitHub Pages publica la URL en segundos.

```
https://<usuario>.github.io/<nombre-del-repo>/
```

> No se requiere ningún paso de build, bundler ni configuración adicional.

### Cualquier hosting estático

El prototipo también se puede alojar en **Netlify**, **Vercel**, **Firebase Hosting** o cualquier servidor que sirva archivos estáticos. Simplemente se sube la carpeta tal como está.

---

## 🧩 Características destacadas

- **Sin dependencias:** no requiere Node.js, npm, ni ningún framework. Sólo un navegador.
- **Datos persistentes:** los cambios en stock, carrito y pedidos se mantienen entre sesiones gracias a `localStorage`.
- **Comparador de wireframes:** modal inline que superpone el SVG original para validar la fidelidad de la implementación.
- **Responsive:** viewport configurado con `viewport-fit=cover` y layout adaptable.
- **Tipografía:** *Plus Jakarta Sans* y *Space Grotesk* vía Google Fonts.
- **Toasts de feedback:** notificaciones no intrusivas para acciones del usuario (añadir al carrito, guardar cambios, etc.).

---

## 🎓 Contexto académico

Este prototipo fue desarrollado como entrega de la materia de **Análisis de Sistemas** (o equivalente) para demostrar la correspondencia entre los casos de uso relevados, los wireframes diseñados y una implementación navegable funcional.

Cada vista puede compararse directamente con su wireframe SVG original usando el botón **Comparar SVG** de la barra de control.
