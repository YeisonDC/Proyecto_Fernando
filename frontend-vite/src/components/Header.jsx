// src/components/Header.jsx
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo con enlace al home */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dvj1tw3ui/image/upload/v1753494863/Proyecto_nuevo_chidqp.png"
            alt="MECAR Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navegación */}
        <nav className="space-x-4">
          <Link to="/" className="text-black hover:text-black">Inicio</Link>
          <Link to="/products" className="text-black hover:text-black">Productos</Link>
          <a href="#" className="text-black hover:text-black">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
