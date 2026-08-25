import SectionTitle from '../components/SectionTitle.jsx'
import CodeBlock from '../components/CodeBlock.jsx'

export default function Ejemplos() {
  return (
    <>
      <SectionTitle
        eyebrow="En la práctica"
        title="Ejemplos de diseño con Foundation"
        description="Todo lo que ves renderizado abajo usa exclusivamente clases de Foundation, sin CSS adicional de terceros."
      />

      <div className="grid-container">
        {/* 1. Grid */}
        <section className="example-block">
          <h4>1. XY Grid</h4>
          <p>El sistema de rejilla de Foundation 6, basado en Flexbox.</p>

          <div className="demo-surface">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-4">
                <div className="demo-box">small-12 medium-4</div>
              </div>
              <div className="cell small-12 medium-4">
                <div className="demo-box">small-12 medium-4</div>
              </div>
              <div className="cell small-12 medium-4">
                <div className="demo-box">small-12 medium-4</div>
              </div>
            </div>
          </div>

          <CodeBlock language="jsx">{`<div className="grid-x grid-margin-x">
  <div className="cell small-12 medium-4">...</div>
  <div className="cell small-12 medium-4">...</div>
  <div className="cell small-12 medium-4">...</div>
</div>`}</CodeBlock>
        </section>

        {/* 2. Botones */}
        <section className="example-block">
          <h4>2. Botones</h4>
          <p>Foundation define variantes de color y estilo mediante clases modificadoras.</p>

          <div className="demo-surface">
            <div className="button-group">
              <button className="button primary">Primary</button>
              <button className="button secondary">Secondary</button>
              <button className="button success">Success</button>
              <button className="button alert">Alert</button>
              <button className="button hollow">Hollow</button>
              <button className="button disabled" disabled>
                Disabled
              </button>
            </div>
          </div>

          <CodeBlock language="jsx">{`<button className="button primary">Primary</button>
<button className="button secondary">Secondary</button>
<button className="button success">Success</button>
<button className="button alert">Alert</button>
<button className="button hollow">Hollow</button>`}</CodeBlock>
        </section>

        {/* 3. Cards */}
        <section className="example-block">
          <h4>3. Cards</h4>
          <p>
            El componente <code>card</code>, usado también en la página de Inicio para agrupar
            contenido.
          </p>

          <div className="demo-surface">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-6">
                <div className="card">
                  <div className="card-image-placeholder">Imagen</div>
                  <div className="card-section">
                    <h5>Título de la card</h5>
                    <p>Texto de ejemplo dentro de una card de Foundation.</p>
                    <a href="#" className="button primary small">
                      Acción
                    </a>
                  </div>
                </div>
              </div>

              <div className="cell small-12 medium-6">
                <div className="card">
                  <div className="card-divider">
                    <h6>Con divider</h6>
                  </div>
                  <div className="card-section">
                    <p>
                      Otra variante usando <code>card-divider</code> en vez de una imagen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock language="jsx">{`<div className="card">
  <div className="card-section">
    <h5>Título de la card</h5>
    <p>Texto de ejemplo...</p>
    <a href="#" className="button primary small">Acción</a>
  </div>
</div>`}</CodeBlock>
        </section>

        {/* 4. Navbar */}
        <section className="example-block">
          <h4>4. Top Bar (navegación)</h4>
          <p>Un mini ejemplo de barra de navegación, como la que usa este mismo sitio.</p>

          <div className="demo-surface">
            <div className="demo-topbar">
              <div className="demo-topbar-title">Mi Sitio</div>
              <ul className="menu">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Productos</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>

          <CodeBlock language="jsx">{`<div className="top-bar">
  <div className="top-bar-title">Mi Sitio</div>
  <ul className="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Productos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</div>`}</CodeBlock>
        </section>
      </div>
    </>
  )
}
