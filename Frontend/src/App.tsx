import { Routes, Route } from 'react-router-dom';
import PaginaInicio from './pages/PaginaInicio';
import Navbar from './pages/Navbar';

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
    </Routes>
  );
};

export default App;

