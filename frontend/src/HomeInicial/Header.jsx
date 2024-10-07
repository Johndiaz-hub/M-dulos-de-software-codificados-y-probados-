import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header  className="header-inicial">
      <div className="home-inicial">
      <div className="home-container container-header">
        <p className="logo">Accounting.SC</p>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contactos">Contactos</Link>
          <button className="button" onClick={() => navigate('/LoginRegister')}>Iniciar sesión</button>
          <button className="button" onClick={() => navigate('/LoginRegister')}>Crear cuenta</button>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
