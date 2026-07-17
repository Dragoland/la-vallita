# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [2.0.0] — 2026-07-17

### Reorganización de arquitectura

#### Cambiado
- **Home (`/`)** simplificada: ahora solo muestra Hero → Catálogo → Consejos → BitCriollo.
- **Historia, Legado, Reconocimientos y Medios** movidos a página aparte `/historia`.
- **Visítanos y Contacto** fusionados en una sola página `/contacto`.
- Navbar actualizado: links directos a `/historia` y `/contacto`.

---

## [1.2.0] — 2026-07-17

### Añadido
- **Página de detalle de producto** (`/planta/:slug`) con información completa, precios y botón de acción.
- **Cross-link a BitCriollo** reemplaza el antiguo "ArregloLinuxero".

### Cambiado
- `ArregloLinuxero.tsx` eliminado. Reemplazado por `BitCriollo.tsx`.

---

## [1.1.0] — 2026-07-13

### Añadido
- **Sistema Markdown como fuente de verdad**:
  - Productos en `src/content/productos/*.md` con frontmatter.
  - Consejos en `src/content/consejos/*.md` con frontmatter.
  - Parser de frontmatter nativo (`src/lib/parseMarkdown.ts`) sin dependencias externas.
  - Hooks `useProductos` y `useConsejos` que cargan archivos `.md` vía `import.meta.glob` de Vite.
- **Carrito de compras + Calculadora**:
  - Hook `useCarrito` con persistencia en `localStorage`.
  - Sidebar flotante (`CarritoSidebar.tsx`) con overlay.
  - Añadir/quitar/eliminar productos con cantidades.
  - Generador de mensaje pre-llenado para WhatsApp con totales CUP/MLC.
- **Precios visibles** en cada producto (CUP y MLC).
- **Estados de disponibilidad mejorados**:
  - `disponible` → verde, añadir al carrito.
  - `brotando` → amarillo, reservar.
  - `encargo` → azul, encargar.
  - `legacy` → púrpura, consultar por WhatsApp.
  - `agotado` → gris, avisarme.
- **Página de consejos** (`/consejos`) con filtro por los 12 meses del año.
- **Consejos en home** muestran los 4 más relevantes del mes actual.
- **Tipos TypeScript** centralizados en `src/types/index.ts`.

### Cambiado
- `Catalogo.tsx` refactorizado para usar `useProductos` y `ProductoCard`.
- `Consejos.tsx` refactorizado para usar `useConsejos` y `ConsejoCard`.
- `Navbar.tsx` ahora incluye badge del carrito y menú móvil funcional.
- `App.tsx` actualizado con rutas: `/`, `/consejos`, `/planta/:slug`.

### Eliminado
- Datos hardcodeados de productos y consejos de los componentes React.
- Sección "Consultar" sin precios en el catálogo.

---

## [1.0.0] — 2026-07-01

### Añadido
- Lanzamiento inicial del sitio web de La Vallita.
- Secciones: Hero, Historia, Legado, Reconocimientos, Medios, Catálogo, Visítanos, Consejos, Contacto, ArregloLinuxero, Footer.
- Diseño responsive con paleta de colores orgánicos (tierra, hoja, trigo).
- Animaciones con GSAP + Lenis para scroll suave.
- Video de fondo en el hero.
- Mapa de OpenStreetMap en la sección Visítanos.
- Contacto directo por WhatsApp.
- Cross-link a ArregloLinuxero (ahora BitCriollo).
- Despliegue en Cloudflare Pages.

---

## [Unreleased]

### Planeado
- [ ] Galería de fotos reales de la finca.
- [ ] Modo oscuro.
- [ ] Blog integrado (misma arquitectura `.md`).
- [ ] PWA básica (manifest, service worker).
- [ ] SEO completo (meta tags dinámicos, Open Graph, sitemap).
- [ ] Filtros de búsqueda en catálogo por nombre/tag.
