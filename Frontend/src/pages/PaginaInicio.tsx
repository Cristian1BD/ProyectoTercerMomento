import React, { useState } from 'react';
import Sidebar from '../components/ComponentesPagInicio/Sidebar/Sidebar';
import GruposCrear from '../components/ComponentesPagInicio/Grupos/CrearGrupos';
import GruposVer from '../components/ComponentesPagInicio/Grupos/GruposVer';
import GruposLista from '../components/ComponentesPagInicio/Grupos/GruposLista';
import VerEstudiante from '../components/ComponentesPagInicio/Estudiantes/VerEstudiante';
import AsignarEstudiante from '../components/ComponentesPagInicio/Estudiantes/AsignarEstudiante';
import EliminarEstudiante from '../components/ComponentesPagInicio/Estudiantes/EliminarEstudiante';
import EliminarProgramacion from '../components/ComponentesPagInicio/Programacion/EliminarProgramacion';
import CrearProgramacion from '../components/ComponentesPagInicio/Programacion/CrearProgramacion';
import VerProgramaciones from '../components/ComponentesPagInicio/Programacion/VerProgramaciones';

const PaginaInicio: React.FC = () => {
  const [seccionActual, setSeccionActual] = useState('');

  const renderContenido = () => {
    switch (seccionActual) {
      case 'Ver Grupos':
        return <GruposVer />;
      case 'Crear Grupo':
        return <GruposCrear />;
      case 'Eliminar/Modificar Grupo':
        return <GruposLista />;
      case 'Ver Estudiantes':
        return <VerEstudiante />;
      case 'Asignar Estudiante':
        return <AsignarEstudiante />;
      case 'Modificar Estudiante':
        return <EliminarEstudiante />;
      case 'Crear Programacion':
        return <CrearProgramacion />;
      case 'Eliminar Programacion':
        return <EliminarProgramacion />;
      case 'Ver Programaciones':
        return <VerProgramaciones />;
    }
  };
  
  return (
    <div className="flex h-screen">
      <Sidebar onSelectItem={(item) => setSeccionActual(item)} />

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

        <main className="flex-1 p-4 bg-gray-50">{renderContenido()}</main>
      </div>
    </div>
  );
};

export default PaginaInicio;

