import React from 'react';

const DatosEstudiantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      {/* Título */}
      <h2 className="text-lg font-bold mb-6 border-b pb-2">Datos De Estudiantes</h2>

      <form className="grid grid-cols-2 gap-6 max-w-3xl">
        {/* Campos alineados por fila con botón a la izquierda */}
        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Nombre
          </button>
          <input type="text" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Apellido
          </button>
          <input type="text" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            TI/CC
          </button>
          <input type="text" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Correo
          </button>
          <input type="email" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Número
          </button>
          <input type="tel" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Cargar Documentos
          </button>
          <input type="file" className="border px-3 py-1 rounded w-full" />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="bg-black text-white px-4 py-2 rounded">
            Cargar Permisos
          </button>
          <input type="file" className="border px-3 py-1 rounded w-full" />
        </div>
      </form>

      {/* Botón Enviar */}
      <div className="flex justify-end mt-10">
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default DatosEstudiantes;
