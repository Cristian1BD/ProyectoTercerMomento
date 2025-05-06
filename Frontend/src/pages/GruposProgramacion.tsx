import React from 'react';

const grupos = Array(8).fill({
  nombre: 'FIG-112',
  estudiantes: 20,
  hora: '6 AM',
  lugar: 'Éxito',
  salida: 'Enombre',
});

const GruposProgramacion: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-black">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
        <h2 className="mb-6 text-center font-semibold">Nombre de grupo</h2>
        <nav className="w-full">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
              <span>🔍</span>
              Buscar
            </li>
            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Datos</li>
            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Estudiantes</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        {/* Header */}
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-sm text-gray-500">Activo hace 20m</p>
          <h1 className="text-xl font-bold">Programación</h1>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-6">
          <button className="bg-black text-white px-4 py-2 rounded-full">
            ● Asignar Estudiantes
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            ● Eliminar
          </button>
        </div>

        {/* Tabla */}
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">GRUPOS</th>
              <th>Número Estudiantes</th>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Salida</th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((grupo, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{grupo.nombre}</td>
                <td>{grupo.estudiantes}</td>
                <td>{grupo.hora}</td>
                <td>
                  <button className="border px-2 py-1 rounded text-sm">Éxito</button>
                </td>
                <td>
                  <button className="border px-2 py-1 rounded text-sm">Enombre</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default GruposProgramacion;
