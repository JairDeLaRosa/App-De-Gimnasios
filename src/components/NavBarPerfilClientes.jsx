import React from "react";
import miImagen from '../img/logo.png'
import { Link } from "react-router-dom";

export const NavBarPerfilCLientes = () => {


  return (
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div className="d-flex">
            <Link class="navbar-brand" to="/cliente">
            <img className="logo" src={miImagen} alt="logo"/>
            Fit life web
          </Link>
          
            </div>
         
            <div><div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/cliente/verGimnasios">
                  Inicio
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">
                  Mensajes
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Opciones
                </a>
                <ul class="dropdown-menu actions" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/cliente/verEntrenadores">
                      Ver entrenadores
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/cliente/verGimnasios">
                      Ver gimnasios
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/login">
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            
          </div></div>

          
        </div>
      </nav>
  );
};
