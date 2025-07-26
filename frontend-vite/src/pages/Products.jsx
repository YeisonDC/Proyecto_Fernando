// src/pages/Products.jsx

import Header from "../components/Header";

const products = [
  {
    name: "Cemento Gris Profesional",
    description: "Ideal para construcción general. Alta resistencia y rendimiento.",
    image: "https://media.falabella.com/sodimacCO/13846_01/public", // Imagen de ejemplo
  },
  {
    name: "Cemento Blanco Decorativo",
    description: "Perfecto para acabados estéticos y arquitectura visible.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86LnIJiGeP0xVJkK9CNvNJ3Mf2JCCscxxnA&s", // Imagen de ejemplo
  },
  {
    name: "Cemento Rápido",
    description: "Secado rápido para obras urgentes. Gran adherencia.",
    image: "https://mayoristademateriales.com/wp-content/uploads/2021/12/Cemento-Gris-UG-x-50-Kilos.png", // Imagen de ejemplo
  },
];

function Products() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Nuestros productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded shadow hover:shadow-lg transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-t"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2025 MECAR. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Products;
