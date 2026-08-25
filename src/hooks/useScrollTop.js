import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Lleva el scroll al inicio de la página cada vez que cambia la ruta,
// para que al navegar entre secciones (Historia, Instalación, etc.)
// no se quede la posición de scroll de la página anterior.
export default function useScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
