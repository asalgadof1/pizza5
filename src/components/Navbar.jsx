// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  
  return (
   
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Pizzería</a>
     
      
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Inicio</Link></li>
        <li className="nav-item"><Link to="/register">Registrarse</Link></li>
        <li className="nav-item"><Link to="/login">Iniciar Sesión</Link></li>
        <li className="nav-item"><Link to="/profile">Perfil</Link></li>
        <li className="nav-item"><Link to="/cart">🛒 Total: $xxx</Link></li>
      </ul>
      </div>
      
      
    </nav>
    
  );
};

export default Navbar;

