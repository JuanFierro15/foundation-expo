# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React + Vite site presenting an exposición (school assignment for "Lenguajes para la Web") about the CSS framework **Foundation for Sites**: its history, purpose, installation, and design examples. Foundation is integrated as an npm dependency (`foundation-sites`) and consumed purely as Sass/CSS — no jQuery, no Foundation JS plugins.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

There is no test suite and no linter configured in this project.

## Architecture

- **Routing**: `src/index.jsx` mounts `<BrowserRouter><App /></BrowserRouter>`. `src/App.jsx` defines all routes with `react-router-dom`'s `<Routes>/<Route>` and wraps every page in a persistent `Navbar` + `Footer` shell. `useScrollTop` (a custom hook) resets scroll position on route change.
- **Pages vs. components**: `src/pages/` holds one file per full route (Home, Historia, ParaQueSirve, Instalacion, Ejemplos — mapped 1:1 to the paths in `src/utils/navLinks.js`, which is the single source of truth for nav entries). `src/components/` holds cross-page pieces (Navbar, Footer, CodeBlock, SectionTitle).
- **Styling**: Foundation is pulled in once, in `src/styles/main.scss`, in a strict three-step order that matters:
  1. `_settings.scss` — project overrides of Foundation's Sass variables (colors, radius, fonts), declared *before* Foundation loads so they override its `!default` values.
  2. `foundation-sites/scss/foundation` + `@include foundation-everything` — the full framework.
  3. `_custom.scss` — site-specific styles, imported last so they can override Foundation and freely use Foundation's Sass functions/variables (e.g. `rem-calc`, `$primary-color`).

  `main.scss` is imported exactly once, from `src/index.jsx`. Don't import it elsewhere or import Foundation partials directly from page/component files — add new site styles to `_custom.scss` and new variable overrides to `_settings.scss`.
- **index.html location**: lives at the project root (not in `public/`) because Vite requires its entry HTML there; it references `src/index.jsx`. Only truly static assets (favicon) belong in `public/`.
- **Content data**: `src/utils/siteInfo.js` centralizes site metadata (title, author, links) used across pages/footer — prefer editing it over hardcoding strings in components.

## Language

Code comments, README, and all page copy are in Spanish (the target audience is a Spanish-speaking course). Keep new user-facing text and comments in Spanish for consistency.
