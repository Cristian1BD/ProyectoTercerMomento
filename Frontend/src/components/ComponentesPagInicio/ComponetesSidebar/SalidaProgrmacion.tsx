import React from 'react';

interface Props {
  tipo: 'Crear Programacion' | 'Eliminar Programacion' | 'Modificar Programacion' | 'Ver Programaciones';
}

const SalidaProgrmacion: React.FC<Props> = ({ tipo }) => {
  const renderContenido = () => {
    switch (tipo) {
      case 'Crear Programacion':
        return <p className="text-sm text-gray-600">Aquí puedes crear una nueva programación de salida.</p>;
      case 'Eliminar Programacion':
        return <p className="text-sm text-gray-600">Aquí puedes eliminar una programación existente.</p>;
      case 'Modificar Programacion':
        return <p className="text-sm text-gray-600">Aquí puedes modificar una programación de salida.</p>;
      case 'Ver Programaciones':
        return <p className="text-sm text-gray-600">Aquí se listarán todas las programaciones de salida.</p>;
      default:
        return <p className="text-sm text-gray-400">Seleccione una opción de programación.</p>;
    }
  };

  return (
    <div className="border border-blue-400 p-4 rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-4">{tipo}</h2>
      {renderContenido()}
    </div>
  );
};

export default SalidaProgrmacion;
