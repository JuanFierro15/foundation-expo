import { Link } from 'react-router-dom'
import { team } from '../utils/siteInfo.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="grid-container">
          <div className="grid-x grid-margin-x align-middle">
            <div className="cell small-12 medium-7">
              <p className="eyebrow">Exposición — Lenguajes para la Web</p>
              <h1>Foundation for Sites</h1>
              <p className="lead">
                El framework CSS creado por ZURB para construir sitios, aplicaciones y correos
                electrónicos que se adaptan a cualquier dispositivo, con un sistema de rejilla
                flexible y componentes listos para producción.
              </p>
              <div className="button-group">
                <Link to="/historia" className="button primary">
                  Ver historia
                </Link>
                <Link to="/instalacion" className="button hollow">
                  Cómo instalarlo
                </Link>
              </div>
            </div>

            <div className="cell small-12 medium-5">
              <div className="hero-card card">
                <div className="card-section">
                  <h4>Dato clave</h4>
                  <ul className="no-bullet">
                    <li>📅 Lanzado en 2011 por ZURB</li>
                    <li>🧩 Basado en Sass + Flexbox (XY Grid)</li>
                    <li>🆓 Código abierto, licencia MIT</li>
                    <li>📧 Incluye Foundation for Emails</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-container overview">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-4">
            <div className="card">
              <div className="card-section">
                <h5>Historia</h5>
                <p>De ZURB Foundation a Foundation 6: una década de evolución del framework.</p>
                <Link to="/historia">Leer más →</Link>
              </div>
            </div>
          </div>

          <div className="cell small-12 medium-4">
            <div className="card">
              <div className="card-section">
                <h5>¿Para qué sirve?</h5>
                <p>Prototipado rápido, sitios responsive y componentes accesibles listos para usar.</p>
                <Link to="/para-que-sirve">Leer más →</Link>
              </div>
            </div>
          </div>

          <div className="cell small-12 medium-4">
            <div className="card">
              <div className="card-section">
                <h5>Instalación</h5>
                <p>Vía npm, CDN o Foundation CLI — así se instaló en este mismo proyecto.</p>
                <Link to="/instalacion">Leer más →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-container team-section">
        <h5>Integrantes</h5>
        <div className="grid-x grid-margin-x">
          {team.map((member) => (
            <div className="cell small-12 medium-4" key={member.github}>
              <div className="card team-card">
                <div className="card-section">
                  <div className="team-avatar">
                    {member.name
                      .split(' ')
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <h6>{member.name}</h6>
                  <a href={member.github} target="_blank" rel="noreferrer">
                    {member.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
