import React from 'react';

function Testimonials() {
  return (
    <section className="home-inicial">
      <div className="home-inicial home-container">
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"El cambio a ContaWeb Pro fue un acierto. Su interfaz y funcionalidades nos han impresionado."</p>
            <p className="testimonial-author">Carlos Gómez<br />Director, GestionAYA</p>
          </div>
          <div className="testimonial-card">
            <p>"La eficiencia en el manejo de cuentas mejoró notablemente. Es la herramienta que esperábamos."</p>
            <p className="testimonial-author">Luisa Martín<br />Contadora, Finanzas al Día</p>
          </div>
          <div className="testimonial-card">
            <p>"ContaWeb Pro adaptó nuestra contabilidad a la era digital con facilidad y eficacia."</p>
            <p className="testimonial-author">Ana Torres<br />CEO, Inversiones AT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
