// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://sequopro.com/wp-content/uploads/2021/08/APLICACIONES-Cementera.jpg')",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido encima del fondo */}
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Construye con fuerza, <br /> construye con MECAR
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Somos líderes en la venta de cemento para grandes y pequeños proyectos.
          </p>
          <Link to="/products">
            <button className="bg-white text-black px-8 py-3 rounded text-lg hover:bg-black hover:text-white transition duration-300">
              Ver productos
            </button>
          </Link>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Nuestros productos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Cemento Gris Profesional</h4>
              <p>Ideal para construcción general. Alta resistencia y rendimiento.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Cemento Blanco Decorativo</h4>
              <p>Perfecto para acabados estéticos y arquitectura visible.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Cemento Rápido</h4>
              <p>Secado rápido para obras urgentes. Gran adherencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12 text-center text-sm text-gray-500">
        © 2025 MECAR. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Home;
