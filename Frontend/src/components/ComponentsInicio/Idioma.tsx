import { useState } from "react";

const Idioma = () => {
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState("Español");

  const idiomas = ["Español", "Inglés", "Francés", "Alemán", "Portugués"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdiomaSeleccionado(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Selecciona tu idioma:</h2>
      <select
        value={idiomaSeleccionado}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {idiomas.map((idioma) => (
          <option key={idioma} value={idioma}>
            {idioma}
          </option>
        ))}
      </select>
      <p className="mt-4 text-gray-700">
        Idioma seleccionado: <strong>{idiomaSeleccionado}</strong>
      </p>
    </div>
  );
};

export default Idioma;
