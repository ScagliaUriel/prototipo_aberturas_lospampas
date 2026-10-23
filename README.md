# Aberturas Los Pampas — Prototipo navegable

Prototipo web interactivo de alta fidelidad de la plataforma de **Aberturas Los Pampas**, empresa de fabricación y venta de aberturas (ventanas, puertas y portones) con sede en Rosario. Está construido a partir de los 11 wireframes del proyecto y cubre tanto el flujo del cliente como el panel de administración interno.

---

## Demo en línea

**https://scagliauriel.github.io/prototipo_aberturas_lospampas/**

> Proyecto académico. Los datos (precios, clientes, CUIT, datos bancarios y teléfonos) son ficticios y de demostración. Es un prototipo de interfaz sin servidor: no hay base de datos ni cobros reales.

---

## Cómo probarlo

1. **Navegación:** la barra superior permite saltar a cualquiera de las 11 pantallas y muestra qué caso de uso corresponde a cada una.
2. **Flujo de compra:** catálogo (con filtros) → ficha de producto → carrito → checkout (Mercado Pago o transferencia) → "Ver en Mi Cuenta" para consultar el pedido.
3. **Cotización a medida:** desde "Cotizar a Medida", completá tipología, medidas, material, vidrio y color, y presioná "Calcular Estimación" para ver el desglose.
4. **Panel interno:** entrá por "06 Login Interno" (barra superior) o por "Acceso Personal Interno" (pie de página) y usá un atajo de demo (Ventas, Depósito o Administración). Desde ahí se accede a stock, proveedores y órdenes de compra, pedidos y despachos, y reportes.
5. **Comparar SVG** superpone el wireframe original de la pantalla activa, y **Reiniciar** restaura los datos de demostración.

---

## Vistas implementadas

El prototipo implementa 11 pantallas navegables, cada una asociada a su caso de uso (CU):

| # | Vista | Caso de uso |
|---|-------|-------------|
| 01 | Home y catálogo | CU-01 / CU-03 |
| 02 | Ficha de producto | CU-01 |
| 03 | Carrito de compras | CU-04 |
| 04 | Checkout y pago | CU-05 / CU-06 |
| 05 | Cuenta del cliente (pedidos y cotizaciones) | CU-07 |
| 06 | Login interno | CU-03 |
| 07 | Gestión de inventario y stock | CU-08 |
| 08 | Gestión de proveedores y órdenes de compra | CU-11 / CU-14 |
| 09 | Control de pedidos y despachos | CU-09 / CU-10 |
| 10 | Dashboard y reportes | CU-12 |
| 11 | Cotizador a medida | CU-02 |

---

## Cómo funciona

### Arquitectura SPA

Es una **Single Page Application** 100% estática. El HTML de las 11 vistas vive en `index.html` como paneles con clase `.view-panel`, y el router de `app.js` muestra y oculta el panel correcto mediante la función `navigateTo(viewId)`.

```
navigateTo('03')  →  muestra #view-03 (Carrito), oculta el resto
```

### Estado y persistencia

El estado de la aplicación (`appState`) se guarda en `localStorage` del navegador bajo las claves:

- `alp_products`: catálogo de productos con precios y stock.
- `alp_cart`: ítems del carrito con cantidades.
- `alp_orders`: pedidos del cliente demo.

Al abrir la app por primera vez se cargan datos semilla (`DEFAULT_PRODUCTS`, `DEFAULT_CART`, `DEFAULT_ORDERS`). El botón **Reiniciar** borra el almacenamiento y los restaura.

### Barra de control académica

En la parte superior hay una barra fija (`#wireframe-bar`) que permite:

- Navegar directamente a cualquier wireframe.
- Ver qué caso de uso corresponde a la pantalla activa.
- Comparar la implementación con el **SVG original** del wireframe mediante un modal.
- Reiniciar los datos demo.

### Cabeceras diferenciadas

- **Vistas públicas (01 a 05 y 11):** header de cliente con navegación, buscador y carrito.
- **Vistas del panel interno (07 a 10):** header de administración con menú de módulos. El acceso se simula desde el login interno (WF-06).

### Cotizador a medida (WF-11)

El formulario solicita:

- Tipología (corrediza, oscilobatiente, puerta balcón, paño fijo o portón).
- Dimensiones en milímetros, con superficie y perímetro calculados.
- Material, tipo de vidrio y color o acabado.
- Plano técnico (opcional) y observaciones especiales.

Al calcular, muestra el desglose estimado (materiales, mano de obra y vidrio), el total y el plazo estimado de fabricación. Desde la ficha de un producto se puede abrir el cotizador con la tipología correspondiente.

### Ilustraciones vectoriales

Los productos se dibujan con SVG generados en tiempo real por `getAberturaSVG(type)`, sin imágenes externas. La ficha de producto (WF-02) ofrece tres vistas: frontal, corte técnico DVH y fachada.

---

## Características

- Sin npm, frameworks ni pasos de build: solo HTML, CSS y JavaScript.
- Datos que persisten entre sesiones gracias a `localStorage`.
- Diseño responsive, con viewport configurado con `viewport-fit=cover`.
- Notificaciones (toasts) para las acciones del usuario.
- Tipografías *Plus Jakarta Sans* y *Space Grotesk*, cargadas desde Google Fonts.

---

## Estructura del proyecto

```
prototipo_aberturas_lospampas/
├── index.html                        # SPA principal: toda la UI
├── app.js                            # Navegación y lógica del prototipo
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

---

## Ejecutar localmente

Basta con abrir `index.html` en un navegador moderno, o servirlo desde la terminal:

```bash
python -m http.server 8080
# luego abrí http://localhost:8080
```

---

## Contexto académico

Prototipo desarrollado como entrega académica de la Tecnicatura Superior en Análisis Funcional de Sistemas Informáticos, presentado en **Prácticas Profesionalizantes II** (docente: Dante Roselli). Su objetivo es demostrar la correspondencia entre los casos de uso relevados, los wireframes diseñados y una implementación navegable.

**Equipo:** Máximo Manno y Uriel Scaglia.
