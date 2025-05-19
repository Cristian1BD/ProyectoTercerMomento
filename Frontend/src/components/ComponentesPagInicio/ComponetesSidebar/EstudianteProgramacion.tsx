import { useState } from 'react';

interface Estudiante {
  nombre: string;
  documento: string;
  grupo: string;
}

const EstudiantesProgramacion: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { nombre: 'Ana Torres', documento: '12345678', grupo: 'FIG-112' },
    { nombre: 'Carlos Mejía', documento: '87654321', grupo: 'FIG-113' },
  ]);

  const [editandoEstudiante, setEditandoEstudiante] = useState<Estudiante | null>(null);
  const [indexEditando, setIndexEditando] = useState<number | null>(null);

  const handleGuardar = () => {
    if (indexEditando !== null && editandoEstudiante) {
      const nuevosEstudiantes = [...estudiantes];
      nuevosEstudiantes[indexEditando] = editandoEstudiante;
      setEstudiantes(nuevosEstudiantes);
      setEditandoEstudiante(null);
      setIndexEditando(null);
    }
  };

  return (
    <div className="border border-blue-400 p-4 rounded-lg w-full">
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-600 border-b">
            <th>Nombre</th>
            <th>Documento</th>
            <th>Grupo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index} className="border-t text-sm">
              <td className="py-2">{estudiante.nombre}</td>
              <td>{estudiante.documento}</td>
              <td>{estudiante.grupo}</td>
              <td>
                <button
                  className="text-blue-600 underline text-xs"
                  onClick={() => {
                    setEditandoEstudiante(estudiante);
                    setIndexEditando(index);
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editandoEstudiante && (
        <div className="mt-4 border-t pt-4">
          <h3 className="text-sm font-semibold mb-2">
            Editar Estudiante: {editandoEstudiante.nombre}
          </h3>
          <div className="flex gap-4 mb-2">
            <div>
              <label className="block text-xs mb-1">Nombre</label>
              <input
                type="text"
                value={editandoEstudiante.nombre}
                onChange={(e) =>
                  setEditandoEstudiante({ ...editandoEstudiante, nombre: e.target.value })
                }
                className="border rounded px-2 py-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Documento</label>
              <input
                type="text"
                value={editandoEstudiante.documento}
                onChange={(e) =>
                  setEditandoEstudiante({ ...editandoEstudiante, documento: e.target.value })
                }
                className="border rounded px-2 py-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Grupo</label>
              <input
                type="text"
                value={editandoEstudiante.grupo}
                onChange={(e) =>
                  setEditandoEstudiante({ ...editandoEstudiante, grupo: e.target.value })
                }
                className="border rounded px-2 py-1 text-xs"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleGuardar}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
            >
              Guardar
            </button>
            <button
              onClick={() => {
                setEditandoEstudiante(null);
                setIndexEditando(null);
              }}
              className="bg-gray-300 text-black px-3 py-1 rounded text-xs"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstudiantesProgramacion;
