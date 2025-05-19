import React, { useState } from 'react';
import Sidebar from '../components/ComponentesPagInicio/Sidebar/Sidebar';
import GrupoLista from '../components/ComponentesPagInicio/ComponetesSidebar/ProgramacionGrupos';
import EstudiantesProgramacion from '../components/ComponentesPagInicio/ComponetesSidebar/EstudianteProgramacion';
import HorarioProgramacion from '../components/ComponentesPagInicio/ComponetesSidebar/HorarioProgramacion';
import SalidaProgrmacion from '../components/ComponentesPagInicio/ComponetesSidebar/SalidaProgrmacion';

const PaginaInicio: React.FC = () => {
  const [seccionActual, setSeccionActual] = useState('');

  const renderContenido = () => {
    switch (seccionActual) {
      case 'Ver Grupos':
        return <GrupoLista />;
      case 'Ver Estudiantes':
        return <EstudiantesProgramacion />;
      case 'Ver Horario':
        return <HorarioProgramacion />;
      case 'Crear Programacion':
      case 'Eliminar Programacion':
      case 'Modificar Programacion':
      case 'Ver Programaciones':
        return <SalidaProgrmacion tipo={seccionActual as any} />;
      default:
        return (
          <div className="text-gray-400 text-center mt-10">
            Selecciona una opción del menú
          </div>
        );
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

