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
import EncabezadoSalidas from '../components/ComponentesPagInicio/Actividades/EncabezadoSalidas';
import HorariosProgramacion from '../components/ComponentesPagInicio/Horario/HorariosProgramacion';

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
      case 'Lista Actividades':
        return <EncabezadoSalidas />;
      case 'Horario':
        return <HorariosProgramacion />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelectItem={(item) => setSeccionActual(item)} />

      <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-100 via-white to-white">
        {/* Encabezado */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-blue-200 bg-white shadow-sm">
          <div className="text-base font-semibold text-blue-900">Grupo</div>
          <div className="flex items-center gap-4">
            
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm shadow">
              Docente
            </button>
            <img
              src="https://via.placeholder.com/32"
              alt="Avatar"
              className="w-9 h-9 rounded-full object-cover border border-blue-500"
            />
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-y-auto">{renderContenido()}</main>
      </div>
    </div>
  );
};

export default PaginaInicio;

