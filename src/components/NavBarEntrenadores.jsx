import React from 'react'
import miImagen from '../img/logo.png'

export const NavBarEntrenadores = () => {
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
          <a class="nav-link" href="#">
              Cerrar sesión
            </a>
          </li>
        </ul>
        
      </div></div>

      
    </div>
  </nav>
  )
}
