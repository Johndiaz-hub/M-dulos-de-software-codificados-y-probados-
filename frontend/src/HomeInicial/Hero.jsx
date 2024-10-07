import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="home-inicial">
        <img src="imagenes/image-hero.png" alt="" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
        <div className="home-container Hero" style={{ padding: '20px 0' }}>
          <h1>Bienvenido a <br />Accounting.SC</h1>
          <p>Tu socio confiable al alcance de tus manos</p>
          <button className="btn-hero" onClick={() => window.location.href = '/LoginRegister'}>Regístrate Hoy</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

