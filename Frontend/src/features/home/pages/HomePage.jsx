import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="header-container">
      <div className="left-section">
        <a href="#">Idioma</a>
        <a href="#">Soporte</a>
        <a href="#">Contáctanos</a>
      </div>
      <div className="right-section">
        <button>Estudiante</button>
        <button>Inicio de sesión</button>
      </div>
    </div>
  );
};

export default HomePage;
