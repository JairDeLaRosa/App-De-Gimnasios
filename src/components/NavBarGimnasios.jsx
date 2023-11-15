import React from 'react'
import miImagen from '../img/logo.png'
import { Link } from 'react-router-dom'

export const NavBarGimnasios = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div className="d-flex">
            <a class="navbar-brand" href="#">
            <img className="logo" src={miImagen} alt="logo"/>
            Fit life web
          </a>
          
            </div>
         
            <div><div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mensajes
                </a>
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
                      Ver gimnasios
                    </a>
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
  )
}
