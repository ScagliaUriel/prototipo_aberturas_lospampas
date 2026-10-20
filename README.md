# Prototipo funcional — Aberturas Los Pampas

Prototipo navegable del sistema, basado en los wireframes y los casos de uso del Trabajo Final. Es un único archivo (`index.html`): no necesita instalar nada ni tener servidor. Los datos se guardan en el navegador (`localStorage`) y el botón **Reiniciar demo** del pie de página vuelve al estado inicial.

## Cómo publicarlo en GitHub Pages

1. Copiá `index.html` al repositorio. Opciones:
   - en la raíz del repo, o
   - en una carpeta, por ejemplo `docs/prototipo/index.html`.
2. Hacé commit y push.
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, elegí la rama `main` y la carpeta `/ (root)`.
4. En un par de minutos queda disponible en `https://<usuario>.github.io/<repositorio>/` (o `.../docs/prototipo/` si lo pusiste en una carpeta).

También se puede abrir con doble clic sobre `index.html`.

## Cuentas de prueba

| Rol | E-mail | Clave |
|---|---|---|
| Cliente Registrado | juan.perez@constructora.com | Cliente123 |
| Gestor de Ventas | ventas@lospampas.com | Ventas123 |
| Operador de Depósito | deposito@lospampas.com | Deposito123 |
| Administrador | admin@lospampas.com | Admin123 |

El rol lo determina la cuenta (wireframe 06). También se puede crear un cliente nuevo con "Registrarse" (la clave pide 8 caracteres, un número y una mayúscula, RNF-06).

## Qué cubre cada caso de uso

| CU | Dónde probarlo |
|---|---|
| CU-01 Consultar catálogo | Home y ficha de producto, con filtros por categoría, material y precio |
| CU-02 Cotización a medida | "Cotizador": valida rango (500 a 3000 mm), estimación, plano opcional; el Gestor de Ventas la cotiza o rechaza en su panel |
| CU-03 Iniciar sesión / registrarse | "Ingresar" |
| CU-04 Carrito | Límite por stock e instalación opcional |
| CU-05 / CU-06 Checkout y pago | Mercado Pago (con casilla para simular rechazo) o transferencia bancaria; "Reintentar pago" en Mis Pedidos |
| CU-07 Mis pedidos y cotizaciones | "Mis Pedidos" |
| CU-08 Productos y stock | Panel del Operador de Depósito: Inventario |
| CU-09 / CU-10 Pedidos, despachos e instalación | Panel del Operador: Pedidos (avanzar estado, agendar instalación) |
| CU-11 Orden de compra | Panel de Ventas o Depósito: Órdenes de compra |
| CU-12 Dashboard | Panel del Gestor de Ventas |
| CU-13 Auditoría | Panel del Administrador |
| CU-14 Proveedores | Panel del Administrador |

## Qué es de demostración

- No hay servidor ni base de datos: no se envían e-mails reales ni se conecta con Mercado Pago.
- El plano técnico del cotizador solo guarda el nombre del archivo.
- Las claves de prueba están a la vista a propósito.
