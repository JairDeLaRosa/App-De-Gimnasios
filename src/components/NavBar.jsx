import React from "react";
import miImagen from '../img/logo.png'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div className="d-flex">
            <a class="navbar-brand" href="#">
            <img className="logo" src={miImagen} alt="logo"/>
            Fit life web
          </a>
          <div className="search">
          <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          
            </div>
         
            <div><div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cliente/perfilDeCliente">
                  Tu perfil
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
                    <a class="dropdown-item" href="#">
                      Ver entrenadores
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ver mensajes
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            
          </div></div>

          
        </div>
      </nav>
  );
};
