import SectionTitle from '../components/SectionTitle.jsx'

const timeline = [
  {
    year: '1998',
    title: 'La empresa Detrás de Foundation',
    text: 'ZURB, una empresa de diseño de producto, páginas webs,  con sede en California (EE. UU.), comienza a crear herramientas internas para acelerar el diseño y prototipado de interfaces.',
  },
  {
    year: '2008',
    title: 'La base de Foundation',
    text: 'ZURB lanza ZURB Style Guide, un sistema de diseño interno que permite a los equipos de diseño y desarrollo crear prototipos de manera más rápida y consistente. Unión y mezcla de códigos, elementos, bloques globales de HTML, CSS y JavaScript.',
  },
  {
    year: '2010',
    title: 'Nacimiento de Foundation',
    text: 'ZURB Style Guide evoluciona y se convierte en Foundation, un framework CSS que usarse manera interna para proyectos de clientes, aplicaciones web y sitios de la misma compañía.',
  },
  {
    year: '2011',
    title: 'Foundation para Todos',
    text: 'ZURB libera Foundation como framework de código abierto bajo licencia MIT. Nace como una de las primeras alternativas serias a Bootstrap, con un fuerte enfoque "mobile-first".',
  },
  {
    year: '2012',
    title: 'Foundation 3.0',
    text: 'Se introduce un grid semántico basado en mixins de Sass. Gran agregado por ZURB, que permite a los desarrolladores crear diseños más flexibles y personalizados.',
  },
  {
    year: '2013',
    title: 'Foundation 4.0, Muchas Novedades',
    text: 'Se introduce una reescritura completa pensada primero para dispositivos móviles, con un enfoque más moderno y flexible. Además se desarrolló la versión 5.0 centrada en la modularidad y la personalización. Finalmente, este mismo año, en Noviembre, se lanza Ink, un framework de correo electrónico basado en Foundation, con la finalidad de permitir a los desarrolladores crear correos electrónicos responsivos y atractivos de manera más sencilla.',
  },
  {
    year: '2014',
    title: 'Foundation 5',
    text: 'ZURB trae un nuevo agregado: Foundation for Apps, enfocado en el desarrollo de aplicaciones web y móviles. Enfocado para el desarrollo de SPA\'s (Single Page Applications), por su arquitectura y agilidad.',
  },
  {
    year: '2015 – actualidad',
    title: 'Foundation 6 y su Final',
    text: 'Versión mayor que unifica el código base de Foundation for Sites e Emails, con la adición del XY Grid, un sistema de rejilla basado en Flexbox. Es la versión que se sigue manteniendo y ampliando hoy en día, gracias a la comunidad open-source, debido a que dejó de recibir mantemiento por parte de ZURB desde 2019.',
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
