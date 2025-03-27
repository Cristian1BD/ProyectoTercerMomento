import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.button}>Inicio</Link>
        <Link to="/about" style={styles.button}>Acerca de</Link>
        <Link to="/contact" style={styles.button}>Contacto</Link>
      </div>
      <div style={styles.right}>
        <Link to="/login" style={styles.button}>Iniciar Sesión</Link>
        <Link to="/student" style={styles.button}>Soy Estudiante</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#282c34' },
  left: { display: 'flex', gap: '10px' },
  right: { display: 'flex', gap: '10px' },
  button: { color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', background: '#61dafb' }
};

export default Navbar;
