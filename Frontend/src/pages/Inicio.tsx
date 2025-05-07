import { useState } from "react";
import Navbar from "../components/Navbar";

const Inicio = () => {
  const [tab, setTab] = useState("inicio");

  const renderContent = () => {
    switch (tab) {
      case "idioma":
        return <p>Selecciona tu idioma preferido aquí.</p>;
      case "soporte":
        return <p>Accede al soporte técnico para resolver tus dudas.</p>;
      case "contáctanos":
        return <p>Formulario de contacto o información de atención.</p>;
      default:
        return <p>Bienvenido a la plataforma. Esta es la página de inicio.</p>;
    }
  };

  return (
    <div>
      <Navbar onChangeTab={setTab} activeTab={tab} />
      <div className="pt-20 px-6">{renderContent()}</div>
    </div>
  );
};

export default Inicio;
