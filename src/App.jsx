import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Encabezado */}
      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Título principal */}
      <section className="titulo">
        <h2>SERVICIO NACIONAL DE APRENDIZAJE</h2>
        <h3>CENTRO DE GESTIÓN DE MERCADOS</h3>
        <p>BOGOTÁ</p>
      </section>

      {/* Sección de programas */}
      <section className="programas">
        <div className="card">ADSO</div>
        <div className="card">REDES DE DATOS</div>
        <div className="card">ANIMACIÓN 3D</div>
        <div className="card">LOGÍSTICA</div>
        <div className="card">MERCADERO</div>
        <div className="card">SISTEMAS</div>
      </section>

      {/* Formulario de contacto */}
      <section className="contacto">
        <input type="text" placeholder="Nombres" />
        <input type="email" placeholder="Correo" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
      </section>
    </div>
  );
}

export default App;
