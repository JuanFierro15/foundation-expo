import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../utils/navLinks.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  // Cerrar el menú cuando el usuario navega a otra ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Cerrar con Escape o haciendo clic fuera del componente
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="top-bar-wrapper" ref={navRef}>
      <div className="top-bar">
        <div className="top-bar-title">
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <span className="logo-badge">F</span>
            <span>
              Foundation<span className="text-primary">Sites</span>
            </span>
          </NavLink>

          {/* Botón hamburguesa para pantallas pequeñas (móviles) */}
          <button
            type="button"
            className={`menu-toggle hide-for-medium ${isOpen ? 'is-open' : ''}`}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            onClick={toggleMenu}
          >
            <span className="hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* Menú de navegación responsive */}
        <nav
          id="main-menu"
          className={`top-bar-menu ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="menu vertical medium-horizontal">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active-link' : '')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

