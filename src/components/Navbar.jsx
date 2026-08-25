import { NavLink } from 'react-router-dom'
import { navLinks } from '../utils/navLinks.js'

export default function Navbar() {
  return (
    <header className="top-bar-wrapper">
      <div className="top-bar">
        <div className="top-bar-title">
          <NavLink to="/" className="logo-link">
            <span className="logo-badge">F</span>
            <span>
              Foundation<span className="text-primary">Sites</span>
            </span>
          </NavLink>
        </div>

        <ul className="menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active-link' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
