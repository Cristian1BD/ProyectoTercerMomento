import React, { useState } from "react";
import FormLabelInput from "../components/ComponentesForEstudiante/FormLabelInput";
import FormLabelSelect from "../components/ComponentesForEstudiante/FormLabelSelect";
import FormLabelDate from "../components/ComponentesForEstudiante/FormLabelDate";
import FormFileUpload from "../components/ComponentesForEstudiante/FormFileUpload";

const FormularioEstudiante: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    correo: "",
    telefono: "",
    grupo: "",
    genero: "",
    direccion: "",
    eps: "",
    grupoSanguineo: "",
    documentoIdentidad: null as File | null,
    permisoMenor: null as File | null,
  });

  // Esta función sirve tanto para <input> como para <select>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del estudiante:", formData);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        Datos del Estudiante
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormLabelInput
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <FormLabelInput
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <FormLabelSelect
          label="Tipo de Documento"
          name="tipoDocumento"
          value={formData.tipoDocumento}
          onChange={handleChange}
          options={[
            { value: "TI", label: "Tarjeta de Identidad" },
            { value: "CC", label: "Cédula de Ciudadanía" },
            { value: "CE", label: "Cédula de Extranjería" },
          ]}
        />
        <FormLabelInput
          label="Número de Documento"
          name="numeroDocumento"
          value={formData.numeroDocumento}
          onChange={handleChange}
        />
        <FormLabelDate
          label="Fecha de Nacimiento"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />
        <FormLabelInput
          label="Correo Electrónico"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          type="email"
        />
        <FormLabelInput
          label="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          type="tel"
        />
        <FormLabelSelect
          label="Grupo"
          name="grupo"
          value={formData.grupo}
          onChange={handleChange}
          options={[
            { value: "A", label: "Grupo A" },
            { value: "B", label: "Grupo B" },
            { value: "C", label: "Grupo C" },
          ]}
        />
        <FormLabelSelect
          label="Género"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          options={[
            { value: "masculino", label: "Masculino" },
            { value: "femenino", label: "Femenino" },
            { value: "otro", label: "Otro" },
            { value: "no_declara", label: "Prefiero no decirlo" },
          ]}
        />
        <FormLabelInput label="Dirección de Residencia" name="direccion" value={formData.direccion} onChange={handleChange} />
        <FormLabelInput label="EPS" name="eps" value={formData.eps} onChange={handleChange} />
        <FormLabelSelect
          label="Grupo Sanguíneo y RH"
          name="grupoSanguineo"
          value={formData.grupoSanguineo}
          onChange={handleChange}
          options={[
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
          ]}
        />
        <FormFileUpload
          label="Documento de Identidad"
          name="documentoIdentidad"
          onChange={handleFileChange}
        />

        <FormFileUpload
          label="Permiso para Menores"
          name="permisoMenor"
          onChange={handleFileChange}
        />
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:opacity-90"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormularioEstudiante;
