import SectionTitle from '../components/SectionTitle.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

export default function Instalacion() {
  return (
    <>
      <SectionTitle
        eyebrow="Puesta en marcha"
        title="Instalación de Foundation"
        description="Foundation se puede integrar de varias formas, desde un simple <link> por CDN (igual que Bootstrap) hasta un flujo completo con npm y Sass."
      />

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <div className="install-card">
              <span className="label primary">Opción 1</span>
              <h4>Vía CDN (rápida, sin build)</h4>
              <p>
                Igual que con Bootstrap, se puede enlazar el CSS (y opcionalmente el JS, que
                depende de jQuery) directamente en el <code>&lt;head&gt;</code> del HTML.
              </p>
              <CodeBlock language="html">{`<!-- CSS de Foundation -->
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.9.0/css/foundation.min.css" />

<!-- JS (requiere jQuery) -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.9.0/js/foundation.min.js"></script>
<script>
  $(document).foundation();
</script>`}</CodeBlock>
              <p className="hint">Ideal para pruebas rápidas o páginas sin herramientas de build.</p>
            </div>
          </div>

          <div className="cell small-12 medium-6">
            <div className="install-card">
              <span className="label secondary">Opción 2</span>
              <h4>Vía npm (la que usa este proyecto)</h4>
              <p>Para proyectos con bundler (Vite, Webpack, etc.) se instala como dependencia:</p>
              <CodeBlock language="bash">{`npm install foundation-sites`}</CodeBlock>
              <p>Y se importa en el archivo Sass principal del proyecto:</p>
              <CodeBlock language="scss">{`/* src/styles/main.scss */
@import 'settings';
@import 'foundation-sites/scss/foundation';
@include foundation-everything;`}</CodeBlock>
              <p className="hint">
                Permite personalizar colores, tipografías y breakpoints con variables de Sass.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <div className="install-card">
              <span className="label">Opción 3</span>
              <h4>Foundation CLI (Yeti Launch)</h4>
              <p>
                Para un proyecto completo (con Gulp, Sass, plantillas y despliegue) ZURB ofrece
                una herramienta de línea de comandos que genera un proyecto Foundation entero:
              </p>
              <CodeBlock language="bash">{`npm install foundation-cli --global
foundation new`}</CodeBlock>
              <p className="hint">
                Recomendada para proyectos grandes que usan todo el ecosistema de Foundation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <div className="callout warning">
              <h6>Nota sobre el JavaScript de Foundation</h6>
              <p>
                Los componentes interactivos de Foundation (menús desplegables, off-canvas,
                pestañas, acordeones) dependen de <strong>jQuery</strong>. En este proyecto, al
                estar hecho en React, usamos únicamente las <strong>clases CSS</strong> de
                Foundation y dejamos que React maneje la interactividad, evitando mezclar dos
                formas distintas de manipular el DOM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
