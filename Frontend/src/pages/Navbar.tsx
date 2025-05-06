import React from "react";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Idioma", href: "#" },
    { name: "Soporte", href: "#" },
    { name: "Contáctanos", href: "#" },
  ];

  return (
    <div className="fixed w-full h-16 bg-white shadow-md z-10">
      <div className="max-w-79xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Enlaces a la izquierda */}
        <div className="flex items-center space-x-4 bg-gray-100 rounded-md p-2">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm px-3 py-1 rounded-md font-medium ${
                index === 0
                  ? "bg-white text-black"
                  : "text-gray-700 hover:bg-white hover:text-black"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botones a la derecha */}
        <div className="flex items-center space-x-3">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
            Soy Estudiante
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
            Inicio de sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
