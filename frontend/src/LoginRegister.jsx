import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import "./LoginRegister.css";
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline, personOutline, logoTwitter, logoFacebook, logoLinkedin, logoGoogle } from 'ionicons/icons';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "" 
  });

  const navigate = useNavigate(); // Inicializar el hook useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/auth/login" : "/auth/register"; 
    const response = await fetch(`http://localhost:5000${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      if (isLogin) {
        
        // Si es inicio de sesión, redirigir al dashboard
        console.log("Token:", data.token);
        navigate('/admindashboard'); 
      } else {

        // Si es registro, mostrar un mensaje o redirigir a la página de login
        alert("Registro exitoso. Ahora puede iniciar sesión.");
        setIsLogin(true); // se cambia la vista a la de inicio de sesión
      }
    } else {
      console.error(data);
      alert(data); // Muestra el mensaje de error
    }
  };

  return (
    <div className="loginregister">
      <div className={`loginregister-container ${isLogin ? '' : 'toggle'}`}> 
        <div className="login-register loginregister-container-form">
          <form className={`loginregister-sign-in ${isLogin ? '' : 'hidden'}`} onSubmit={handleSubmit}>

            {/* Formulario de Iniciar Sesión */}
            <h2>Iniciar Sesión</h2>
            <div className="loginregister-social-networks">
              <IonIcon icon={logoTwitter} />
              <IonIcon icon={logoFacebook} />
              <IonIcon icon={logoLinkedin} />
              <IonIcon icon={logoGoogle} />
            </div>
            <span>Use su correo y contraseña</span>
            <div className="loginregister-container-input">
              <IonIcon icon={mailOutline} />
              <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} />
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit" className="loginregister-button">INICIAR SESIÓN</button>                    
          </form>
        </div>

        {/* Formulario de Registro */}
        <div className="loginregister-container-form">
          <form className={`loginregister-sign-up ${isLogin ? 'hidden' : ''}`} onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <div className="loginregister-social-networks">
              <IonIcon icon={logoTwitter} />
              <IonIcon icon={logoFacebook} />
              <IonIcon icon={logoLinkedin} />
              <IonIcon icon={logoGoogle} />
            </div>
            <span>Use su correo electrónico para registrarse</span>
            <div className="loginregister-container-input">
              <IonIcon icon={personOutline} />
              <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={mailOutline} />
              <input type="text" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" name="contraseña" placeholder="Tu contraseña" value={formData.contraseña} onChange={handleChange} />
            </div>
            <button type="submit" className="loginregister-button">REGISTRARSE</button>
          </form>
        </div>

        <div className="loginregister-container-welcome">
          <div className="loginregister-welcome-sign-up loginregister-welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-up" onClick={() => setIsLogin(false)}>Registrarse</button>
          </div>

          <div className="loginregister-welcome-sign-in loginregister-welcome">
            <h3>¡Hola!</h3>
            <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-in" onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
