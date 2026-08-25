import SectionTitle from '../components/SectionTitle.jsx'
import iconGrid from '../assets/icon-grid.svg'
import iconComponents from '../assets/icon-components.svg'
import iconMail from '../assets/icon-mail.svg'

const features = [
  {
    icon: iconGrid,
    title: 'Diseño responsive con XY Grid',
    text: 'Un sistema de rejilla basado en Flexbox que permite construir layouts adaptables a cualquier tamaño de pantalla con clases simples (grid-x, grid-y, cell).',
  },
  {
    icon: iconComponents,
    title: 'Componentes de interfaz listos',
    text: 'Botones, tarjetas, menús, modales, pestañas, acordeones, alertas y más — todos pensados para accesibilidad (ARIA) desde el diseño.',
  },
  {
    icon: iconMail,
    title: 'Foundation for Emails',
    text: 'Una variante especializada para maquetar correos HTML responsive, resolviendo los problemas de compatibilidad entre clientes de correo.',
  },
]

const useCases = [
  'Sitios corporativos y de marketing',
  'Aplicaciones web y paneles de administración',
  'Prototipos rápidos de alta fidelidad',
  'Plantillas de correo electrónico responsive',
]

export default function ParaQueSirve() {
  return (
    <>
      <SectionTitle
        eyebrow="Propósito"
        title="¿Para qué sirve Foundation?"
        description="Es un framework front-end para construir sitios y aplicaciones responsive de forma rápida, consistente y accesible, sin partir de cero en cada proyecto."
      />

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {features.map((f) => (
            <div className="cell small-12 medium-4" key={f.title}>
              <div className="feature-card">
                <img src={f.icon} alt="" className="feature-icon" />
                <h5>{f.title}</h5>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-x grid-margin-x align-middle use-cases">
          <div className="cell small-12 medium-6">
            <h4>¿Dónde se usa normalmente?</h4>
            <ul>
              {useCases.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>

          <div className="cell small-12 medium-6">
            <div className="callout primary">
              <h6>¿Por qué elegirlo frente a otros frameworks?</h6>
              <p>
                Su punto fuerte es la <strong>personalización</strong>: casi todo se controla con
                variables de Sass antes de compilar, evitando cargar CSS que no se va a usar,
                además de un fuerte compromiso con la <strong>accesibilidad</strong> desde el
                diseño de cada componente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
