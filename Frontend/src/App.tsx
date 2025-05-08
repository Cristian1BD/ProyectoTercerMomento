// App.tsx
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import PaginaInicio from './pages/PaginaInicio';
import GruposProgramacion from './pages/GruposProgramacion';
import ProgramacionSalida from './pages/ProgramacionSalida';
import Login from './pages/Login';
import FormularioEstudiante from './pages/FormularioEstudiante';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Inicio" element={<PaginaInicio />} />
      <Route path="/grupos-programacion" element={<GruposProgramacion />} />
      <Route path="/programacion-salida" element={<ProgramacionSalida />} />
      <Route path="/Formulario" element={<FormularioEstudiante />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default App;