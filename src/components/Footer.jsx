import { siteInfo } from '../utils/siteInfo.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-middle">
          <div className="cell small-12 medium-6">
            <p>&copy; {new Date().getFullYear()} {siteInfo.author}</p>
          </div>
          <div className="cell small-12 medium-6 text-right show-for-medium">
            <a href={siteInfo.docs} target="_blank" rel="noreferrer">
              Documentación oficial
            </a>
            {' · '}
            <a href={siteInfo.repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
