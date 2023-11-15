import React from "react";
import miImagen from "../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBarVerGimnasios = ({
  busquedaPorBarrio,
  busquedaPorCiudad,
}) => {
  const custonChange1 = ({ target }) => {
    if (target.value.length >= 2) {
      busquedaPorBarrio(target.value);
    } else {
      busquedaPorBarrio("");
    }
  };
  const custonChange2 = ({ target }) => {
    if (target.value.length >= 2) {
      busquedaPorCiudad(target.value);
    } else {
      busquedaPorCiudad("");
    }
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="d-flex">
          <Link class="navbar-brand" to="/cliente">
            <img className="logo" src={miImagen} alt="logo" />
            Fit life web
          </Link>
          <div className="search">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Busqueda por ciudad"
                aria-label="Search"
                onChange={custonChange2}
              />
              <input
                class="form-control me-2"
                type="search"
                placeholder="Busqueda por barrio"
                aria-label="Search"
                onChange={custonChange1}
              />

              <div class="btn btn-outline-success" type="submit">
                Search
              </div>
            </form>
          </div>
        </div>

        <div>
          <div
            class="collapse navbar-collapse d-flex"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/cliente/verGimnasios"
                >
                  Inicio
                </Link>
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
                <ul
                  class="dropdown-menu actions"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link class="dropdown-item" to="/cliente/verEntrenadores">
                      Ver entrenadores
                    </Link>
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
                    <Link class="dropdown-item" to="/login">
                      Cerrar sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
