import React from 'react';

const ProgramacionSalida: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8 text-black">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-xl font-bold">Programacion Salida</h1>
          <p className="text-sm text-gray-500">Activo hace 20m</p>
          <span className="text-sm">Programación</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-full">Docente</button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Botones de acción */}
      <div className="flex gap-4 mb-10">
        <button className="bg-black text-white px-4 py-2 rounded-full">● Crear</button>
        <button className="bg-black text-white px-4 py-2 rounded-full">● Ver Programaciones</button>
        <button className="bg-black text-white px-4 py-2 rounded-full">● Eliminar</button>
      </div>

      {/* Formulario */}
      <div className="grid grid-cols-3 gap-6 max-w-5xl">
        <label className="flex flex-col">
          <span className="font-semibold mb-1">Docente</span>
          <input type="text" className="border px-2 py-1 rounded" />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Grupo</span>
          <input type="text" className="border px-2 py-1 rounded" />
        </label>

        <div></div>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Numero De Estudiantes</span>
          <input type="number" className="border px-2 py-1 rounded" />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Fecha</span>
          <input type="date" className="border px-2 py-1 rounded" />
        </label>

        <div></div>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Hora de salida</span>
          <input type="time" className="border px-2 py-1 rounded" />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold mb-1">Hora de regreso</span>
          <input type="time" className="border px-2 py-1 rounded" />
        </label>

        <div></div>

        <label className="flex flex-col col-span-2">
          <span className="font-semibold mb-1">Destino</span>
          <input type="text" className="border px-2 py-1 rounded" />
        </label>
      </div>

      {/* Botón Crear Final */}
      <div className="mt-10 flex justify-end">
        <button className="bg-black text-white px-6 py-2 rounded-full">● Crear</button>
      </div>
    </div>
  );
};

export default ProgramacionSalida;
