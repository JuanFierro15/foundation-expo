# Foundation Expo

Página web de exposición sobre el framework CSS **Foundation for Sites**
(historia, para qué sirve, instalación y ejemplos de diseño), construida con
**React + Vite** e integrando **Foundation** vía `npm`.

Trabajo para la asignatura **Lenguajes para la Web** (Universidad
Surcolombiana). El sitio es una SPA (single-page application) con enrutado
del lado del cliente y estilos basados en el Sass de Foundation.

## Stack y tecnologías

| Categoría        | Herramienta                                   |
| ---------------- | --------------------------------------------- |
| Librería UI      | React 18 (`react-dom`)                         |
| Bundler / dev    | Vite 5 (`@vitejs/plugin-react`)               |
| Enrutado         | React Router 6 (`react-router-dom`)           |
| Framework CSS    | Foundation for Sites 6.9 (`foundation-sites`) |
| Preprocesador    | Sass / SCSS (Dart Sass 1.77.8, versión fija)  |
| Lenguaje         | JavaScript (JSX), módulos ES                  |
| Gestor de paquetes | npm (solo `package-lock.json` versionado)    |

## Capturas de pantalla

<!--
  Agrega aquí una captura por cada vista principal del sitio. Sugerencia de
  formato (guarda las imágenes en docs/screenshots/ y referéncialas):

  ### Inicio
  ![Inicio](docs/screenshots/home.png)

  ### Historia
  ![Historia](docs/screenshots/historia.png)

  ### Ejemplos de diseño
  ![Ejemplos](docs/screenshots/ejemplos.png)
-->

> Pendiente: agregar capturas de las vistas Inicio, Historia, ¿Para qué
> sirve?, Instalación y Ejemplos.

## Requisitos

- Node.js 18 o superior
- **Usar npm** (no pnpm ni yarn) — el repo solo trae `package-lock.json`.
  Instalar con otro gestor genera un árbol de dependencias distinto y puede
  romper la compilación de Sass de Foundation.

## Instalación y ejecución

```bash
npm install
npm run dev       # entorno de desarrollo en http://localhost:5173
npm run build      # build de producción en dist/
npm run preview    # sirve el build de producción localmente
```

## Estructura del proyecto

```
public/                  Archivos públicos estáticos (favicon)
src/
├── components/          Componentes reutilizables (Navbar, Footer, CodeBlock, SectionTitle)
├── pages/                Vistas completas (Home, Historia, ParaQueSirve, Instalacion, Ejemplos)
├── styles/               main.scss + settings/custom de Foundation
├── assets/               Íconos SVG usados en las páginas
├── hooks/                Custom hooks (useScrollTop)
├── utils/                Funciones/datos auxiliares (navLinks, siteInfo)
├── App.jsx               Componente raíz (rutas + layout)
└── index.jsx             Punto de entrada de React
index.html                Plantilla HTML base (ver nota abajo)
```

## Cómo se integró Foundation

1. Se instaló como dependencia de npm:

   ```bash
   npm install foundation-sites
   ```

2. Se importó en `src/styles/main.scss`:

   ```scss
   @import 'settings';
   @import 'foundation-sites/scss/foundation';
   @include foundation-everything;
   ```

3. Ese archivo se importa una sola vez en `src/index.jsx`:

   ```jsx
   import './styles/main.scss'
   ```

4. A partir de ahí, las clases de Foundation (`grid-x`, `cell`, `button primary`,
   `card`, `callout`, etc.) se usan directamente en los componentes React, por
   ejemplo: `<button className="button primary">Guardar</button>`.

> **Nota:** este proyecto usa solo las clases **CSS** de Foundation. El
> JavaScript de Foundation (menús desplegables, off-canvas, tabs, acordeones)
> depende de jQuery, y en una app de React esa interactividad se maneja mejor
> con estado de React en lugar de mezclarla con los plugins jQuery de
> Foundation — por eso no se importó `foundation-sites/js`.

## Nota sobre `index.html`

Vite requiere que `index.html` esté en la **raíz del proyecto** (es el punto
de entrada real del bundler, que referencia `src/index.jsx`). El favicon y
cualquier otro archivo verdaderamente estático sí vive en `public/`, tal como
pide la estructura solicitada.

## Rutas de la aplicación

| Ruta              | Página                          |
| ------------------ | -------------------------------- |
| `/`                 | Inicio                            |
| `/historia`         | Historia de Foundation            |
| `/para-que-sirve`   | ¿Para qué sirve?                  |
| `/instalacion`      | Instalación (CDN, npm, CLI)       |
| `/ejemplos`         | Ejemplos de diseño (grid, botones, cards, navbar) |

## Autores

Exposición preparada para **Lenguajes para la Web** (Universidad Surcolombiana):

- Juan Manuel Villalba Rincón — [@jmvr24](https://github.com/jmvr24)
- Miguel Angel Medina Diaz — [@MiguelMD06](https://github.com/MiguelMD06)
- Juan David Fierro Calderón — [@JuanFierro15](https://github.com/JuanFierro15)

## Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [`LICENSE`](LICENSE)
para el texto completo.
