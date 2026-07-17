# 🌿 La Vallita — Finca Agroecológica

> Sitio web oficial de la finca agroecológica familiar ubicada en Falcón, Placetas, Villa Clara, Cuba.
> Primera finca del reino vegetal cubano en alcanzar la **Quinta Corona de Excelencia Nacional**.

[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deployed-orange?logo=cloudflare&logoColor=white)](https://la-vallita.pages.dev)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.2-purple?logo=vite)

---

## 📖 Descripción

**La Vallita** es el sitio web de una finca agroecológica fundada por **Emilio Chávez Estévez**, pionero reconocido como **Finca Agrovida**, que en su mejor momento albergó **171 especies** y **221 variedades** de plantas. Hoy, la familia Chávez trabaja para recuperar este patrimonio, combinando la tradición agrícola con la tecnología moderna.

El sitio tiene como objetivo:

- **Vender plantas** directamente con precios visibles, carrito de compras y pedido por WhatsApp.
- **Documentar la historia** del legado de Emilio Chávez Estévez y los reconocimientos nacionales.
- **Educar** con consejos de vivero agrupados por mes, relevantes para la agricultura en Cuba.
- **Facilitar el contacto** para consultas, compras o visitas a la finca.
- **Integrarse** con el ecosistema digital de la familia, incluyendo el sitio de servicios informáticos **BitCriollo**.

---

## ✨ Características principales

### 🛒 Carrito de compras + Calculadora
- Precios en **CUP y MLC** visibles en cada producto.
- **Carrito persistente** en `localStorage` con cantidades ajustables.
- **Generador de pedido por WhatsApp** con mensaje pre-llenado y totales.
- Estados de disponibilidad semánticos: `disponible`, `brotando`, `encargo`, `legacy`, `agotado`.

### 📝 Contenido en Markdown
- **Productos** como archivos `.md` en `src/content/productos/` con frontmatter.
- **Consejos de vivero** como archivos `.md` en `src/content/consejos/` con frontmatter.
- Parser de frontmatter **nativo** (sin dependencias extras), compatible con Vite `import.meta.glob`.
- Fácil de editar: solo crea un `.md` y el sitio lo detecta automáticamente en build.

### 📅 Consejos por mes
- En la home se muestran **4 consejos del mes actual**.
- Página `/consejos` con **filtro por los 12 meses** del año.
- Priorización por nivel de importancia.

### 🧭 Navegación
- **Home** (`/`): Hero → Catálogo → Consejos → BitCriollo.
- **Historia** (`/historia`): Historia + Legado + Reconocimientos + Medios.
- **Contacto** (`/contacto`): Mapa + Cómo llegar + Horario + Contactos directos.
- **Consejos** (`/consejos`): Todos los consejos filtrables por mes.
- **Detalle de planta** (`/planta/:slug`): Información completa de cada producto.

### 🎨 Diseño
- Paleta de colores orgánica (tierra, hoja, trigo) coherente con la identidad de la finca.
- Totalmente **responsive**.
- Animaciones suaves con **GSAP** + scroll suave con **Lenis**.
- Iconos con **Lucide React**.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.2.0 | Framework de UI |
| **TypeScript** | 5.9.3 | Tipado estático |
| **Vite** | 7.2.4 | Bundler y servidor de desarrollo |
| **Tailwind CSS** | 3.4.19 | Estilos y utilidades |
| **shadcn/ui** | — | Componentes accesibles y reutilizables |
| **GSAP** | 3.15.0 | Animaciones avanzadas y ScrollTrigger |
| **Lenis** | 1.3.25 | Scroll suave y performance |
| **Lucide React** | 0.562.0 | Iconos vectoriales |
| **React Router** | 7.6.1 | Enrutamiento SPA |
| **Cloudflare Pages** | — | Alojamiento y despliegue continuo |

---

## 📁 Estructura del proyecto

```
la-vallita/
├── public/
│   ├── images/                 # Imágenes (cultivos, familia, logo)
│   └── videos/                 # Video de fondo del hero
├── src/
│   ├── content/                # Archivos Markdown como fuente de datos
│   │   ├── productos/          # .md de cada planta/frutal
│   │   │   ├── guayaba.md
│   │   │   ├── mango.md
│   │   │   └── ...
│   │   └── consejos/           # .md de consejos de vivero
│   │       ├── preparar-suelo-lluvia.md
│   │       └── ...
│   ├── components/             # Componentes reutilizables
│   │   ├── ProductoCard.tsx
│   │   ├── ConsejoCard.tsx
│   │   ├── CarritoSidebar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ImagePlaceholder.tsx
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useCarrito.ts       # Carrito + localStorage + WhatsApp
│   │   ├── useProductos.ts     # Carga productos desde .md
│   │   ├── useConsejos.ts      # Carga consejos desde .md
│   │   ├── useScrollAnimation.ts
│   │   └── useSmoothScroll.ts
│   ├── lib/                    # Utilidades
│   │   ├── utils.ts            # cn() para clases Tailwind
│   │   └── parseMarkdown.ts    # Parser de frontmatter nativo
│   ├── pages/                  # Vistas de rutas
│   │   ├── Home.tsx
│   │   ├── HistoriaPage.tsx
│   │   ├── ContactoPage.tsx
│   │   ├── ConsejosPage.tsx
│   │   └── PlantaDetail.tsx
│   ├── sections/               # Secciones de página
│   │   ├── Hero.tsx
│   │   ├── Catalogo.tsx
│   │   ├── Consejos.tsx
│   │   ├── Historia.tsx
│   │   ├── Legado.tsx
│   │   ├── Reconocimientos.tsx
│   │   ├── Medios.tsx
│   │   ├── BitCriollo.tsx
│   │   └── Footer.tsx
│   ├── types/                  # Tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx                 # Rutas principales
│   ├── main.tsx                # Punto de entrada
│   └── index.css               # Estilos globales + CSS variables
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── .npmrc
├── .nvmrc
└── README.md
```

---

## 🛠️ Instalación y desarrollo local

### Requisitos previos

- Node.js 20+ (recomendado) o 22+
- npm 10+
- Git

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Dragoland/la-vallita.git
cd la-vallita

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000 en tu navegador
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build localmente |
| `npm run lint` | Ejecuta ESLint para revisar el código |

---

## 📝 Cómo añadir un producto

1. Crea un archivo `.md` en `src/content/productos/`:

```markdown
---
nombre: Nombre común
slug: nombre-comun
cientifico: Nombre científico
estado: disponible        # disponible | brotando | encargo | legacy | agotado
precio_cup: 150
precio_mlc: 1.50
unidad: planta
categoria: frutal          # frutal | hortaliza | cafe | ornamental | otro
tags: [etiqueta1, etiqueta2]
variedades: [Variedad A, Variedad B]
---

Descripción larga del producto. Puede incluir **markdown**.
```

2. Guarda y haz `git push`. Vite detectará el archivo automáticamente en el siguiente build.

---

## 📝 Cómo añadir un consejo de vivero

1. Crea un archivo `.md` en `src/content/consejos/`:

```markdown
---
titulo: Título del consejo
slug: titulo-consejo
mes: 5                      # 1-12
resumen: Breve descripción para la tarjeta.
tags: [suelo, riego]
prioridad: 5                # 1-5, 5 es máxima prioridad
---

Contenido completo del consejo. Aparece en la página de detalle.
```

2. Guarda y haz `git push`.

---

## 🌐 Despliegue en producción

El sitio está configurado para desplegarse en **Cloudflare Pages** a través de GitHub.

### Configuración en Cloudflare Pages

| Parámetro | Valor |
|-----------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm install && npm run build` |
| **Output directory** | `dist` |
| **Node.js version** | 20 (definida en `.nvmrc`) |
| **Environment variables** | No requiere |

### Archivos de soporte

- **`.npmrc`**: `legacy-peer-deps=true` → evita conflictos de dependencias.
- **`.nvmrc`**: `20` → fija la versión de Node.js.

### Dominio en producción

[https://la-vallita.pages.dev](https://la-vallita.pages.dev)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes, abre primero un issue para discutirlo.

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir funcionalidad X'`.
4. Sube los cambios: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## 📬 Contacto

- **WhatsApp (pedidos)**: [+53 5 540 6632](https://wa.me/5355406632)
- **WhatsApp (soporte técnico)**: [+53 5 641 8463](https://wa.me/5356418463)
- **Sitio hermano**: [BitCriollo — Servicios Informáticos](https://bitcriollo.pages.dev)
- **Canal de Telegram**: [Diario de un Informático](https://t.me/diario_del_informatico)

---

**Desarrollado con `</>` y amor por la tierra — Falcón, Placetas, Villa Clara, Cuba.**

> *"De la tierra nace la vida, y la tecnología la hace florecer."*
