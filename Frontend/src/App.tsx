import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/PaginaInicio';
import Navbar from './pages/Navbar';
import GruposProgramacion from './pages/GruposProgramacion';
import ProgramacionSalida from './pages/ProgramacionSalida';
import DatosEstudiantes from './pages/DatosEstudiantes';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Ruta con Navbar */}
      <Route
        path=""
        element={
          <>
            <Navbar />
          </>
        }
      />

      {/* Ruta sin Navbar */}
      <Route path="/inicio" element={<PaginaInicio />} />

      {/* Ruta 404 */}
      <Route path="*" element={<h1>Página no encontrada</h1>} />
      <Route path="/grupos-programacion" element={<GruposProgramacion />} />
      <Route path="/programacion-salida" element={<ProgramacionSalida />} />
      <Route path="/datos-estudiantes" element={<DatosEstudiantes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;