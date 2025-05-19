import { useState } from 'react';

interface Grupo {
  nombre: string;
  estudiantes: number;
  hora: string;
  lugar: string;
  salida: string;
}

const ProgrmacionGrupos: React.FC = () => {
  const [grupos, setGrupos] = useState<Grupo[]>([
    { nombre: 'FIG-112', estudiantes: 20, hora: '6:AM', lugar: 'Estadio', salida: 'Enombre' },
    { nombre: 'FIG-113', estudiantes: 25, hora: '7:AM', lugar: 'Auditorio', salida: 'Otro' },
  ]);

  const [editandoGrupo, setEditandoGrupo] = useState<Grupo | null>(null);
  const [indexEditando, setIndexEditando] = useState<number | null>(null);

  const handleGuardar = () => {
    if (indexEditando !== null && editandoGrupo) {
      const nuevosGrupos = [...grupos];
      nuevosGrupos[indexEditando] = editandoGrupo;
      setGrupos(nuevosGrupos);
      setEditandoGrupo(null);
      setIndexEditando(null);
    }
  };

  return (
    <div className="border border-blue-400 p-4 rounded-lg w-full">
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-gray-600 border-b">
            <th>Grupo</th>
            <th>N° Estudiantes</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Salida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {grupos.map((grupo, index) => (
            <tr key={index} className="border-t text-sm">
              <td className="py-2">{grupo.nombre}</td>
              <td>{grupo.estudiantes}</td>
              <td>{grupo.hora}</td>
              <td>{grupo.lugar}</td>
              <td>{grupo.salida}</td>
              <td>
                <button
                  className="text-blue-600 underline text-xs"
                  onClick={() => {
                    setEditandoGrupo(grupo);
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

      {/* FORMULARIO DE EDICIÓN */}
      {editandoGrupo && (
        <div className="mt-4 border-t pt-4">
          <h3 className="text-sm font-semibold mb-2">Editar Grupo: {editandoGrupo.nombre}</h3>
          <div className="flex gap-4 mb-2">
            <div>
              <label className="block text-xs mb-1">Hora</label>
              <input
                type="text"
                value={editandoGrupo.hora}
                onChange={(e) =>
                  setEditandoGrupo({ ...editandoGrupo, hora: e.target.value })
                }
                className="border rounded px-2 py-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Lugar</label>
              <input
                type="text"
                value={editandoGrupo.lugar}
                onChange={(e) =>
                  setEditandoGrupo({ ...editandoGrupo, lugar: e.target.value })
                }
                className="border rounded px-2 py-1 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Salida</label>
              <input
                type="text"
                value={editandoGrupo.salida}
                onChange={(e) =>
                  setEditandoGrupo({ ...editandoGrupo, salida: e.target.value })
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
                setEditandoGrupo(null);
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

export default ProgrmacionGrupos;

