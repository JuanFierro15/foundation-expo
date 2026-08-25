import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import useScrollTop from './hooks/useScrollTop.js'
import Home from './pages/Home.jsx'
import Historia from './pages/Historia.jsx'
import ParaQueSirve from './pages/ParaQueSirve.jsx'
import Instalacion from './pages/Instalacion.jsx'
import Ejemplos from './pages/Ejemplos.jsx'

export default function App() {
  useScrollTop()

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/para-que-sirve" element={<ParaQueSirve />} />
          <Route path="/instalacion" element={<Instalacion />} />
          <Route path="/ejemplos" element={<Ejemplos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
