import React from 'react';

const PaginaInicio: React.FC = () => {
  const inicioItems = [
    { name: 'Grupos', href: '#' },
    { name: 'Inscripciones', href: '#' },
    { name: 'Horarios', href: '#' },
    { name: 'Programación Salida', href: '#' },
    { name: 'Sede', href: '#' },
    { name: 'Formularios', href: '#' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r p-4">
        <h1 className="font-bold text-lg mb-6">Nombre De La plataforma</h1>
        <nav className="flex flex-col gap-3">
          {inicioItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b bg-white">
          <div className="text-sm text-gray-700">Grupo</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 text-sm"
            />
            <button className="bg-black text-white px-3 py-1 rounded">Docente</button>
            <img
              src="https://via.placeholder.com/32"
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </header>

        <main className="flex-1 p-4">
          {/* Aquí va el contenido principal */}
        </main>
      </div>
    </div>
  );
};

export default PaginaInicio;

