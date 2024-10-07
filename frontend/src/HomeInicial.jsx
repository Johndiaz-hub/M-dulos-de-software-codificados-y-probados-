import './HomeInicial.css';
import Header from './HomeInicial/Header';
import Hero from './HomeInicial/Hero';
import AdminSection from './HomeInicial/AdminSection';
import CrearCuenta from './HomeInicial/CrearCuenta';
import Info from './HomeInicial/Info';
import Testimonios from './HomeInicial/Testimonials';
import Footer from './HomeInicial/Footer';

function HomeInicial() {
  return (
    <div>
      <Header />
      <Hero />
      <AdminSection />
      <CrearCuenta />
      <Info />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default HomeInicial;