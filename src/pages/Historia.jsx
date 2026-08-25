import SectionTitle from '../components/SectionTitle.jsx'

const timeline = [
  {
    year: '1998',
    title: 'Nace ZURB',
    text: 'ZURB, una consultora de diseño de producto con sede en California (EE. UU.), comienza a crear herramientas internas para acelerar el diseño y prototipado de interfaces.',
  },
  {
    year: '2011',
    title: 'Foundation se hace público',
    text: 'ZURB libera Foundation como framework de código abierto bajo licencia MIT. Nace como una de las primeras alternativas serias a Bootstrap, con un fuerte enfoque "mobile-first".',
  },
  {
    year: '2012 – 2013',
    title: 'Foundation 3 y 4',
    text: 'Se introduce un grid semántico basado en mixins de Sass y, más adelante, una reescritura completa pensada primero para dispositivos móviles.',
  },
  {
    year: '2014',
    title: 'Foundation 5',
    text: 'El proyecto se divide en tres productos: Foundation for Sites (web), Foundation for Apps y Foundation for Emails (correos responsive).',
  },
  {
    year: '2015 – actualidad',
    title: 'Foundation 6',
    text: 'Versión mayor que unifica el código base e introduce el XY Grid, un sistema de rejilla basado en Flexbox. Es la versión que se sigue manteniendo y ampliando hoy en día.',
  },
]

export default function Historia() {
  return (
    <>
      <SectionTitle
        eyebrow="Origen y evolución"
        title="Historia de Foundation"
        description="De una herramienta interna de diseño a uno de los frameworks CSS de código abierto más usados en la industria."
      />

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-8">
            <ul className="timeline">
              {timeline.map((item) => (
                <li key={item.year}>
                  <span className="timeline-year">{item.year}</span>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="cell small-12 medium-4">
            <div className="card">
              <div className="card-divider">
                <h6>En pocas palabras</h6>
              </div>
              <div className="card-section">
                <p>
                  Foundation es desarrollado y mantenido por <strong>ZURB</strong>, y su código
                  fuente está disponible públicamente en GitHub bajo licencia MIT. Ha sido usado
                  por sitios de empresas como eBay, Mozilla o Disney, entre otras, gracias a su
                  enfoque en personalización y accesibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
