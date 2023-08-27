import React from "react";
import "./../../css/registroUsuarioComun.css";

export const RegistroUsuarioComun = () => {
  return (
    <div className="container-registrar">
      <div className="contenedor-formulario">
        <h2>Registro de usuario común</h2>
        <form className="formulario">
          <div className="contenedor1">
            <input
              type="text"
              className="form-control d-inline-block"
              placeholder="Nombre"
              aria-label="First name"
            />
            <input
              placeholder="Email"
              type="email"
              className="form-control d-inline-block"
              id="inputEmail4"
            />
          </div>

          <div className="contenedor1">
            <input
              placeholder="Contraseña"
              type="password"
              class="form-control"
              id="inputPassword4"
            />
            <input
              placeholder="Confirmar Contraseña"
              type="password"
              class="form-control"
              id="inputPassword4"
            />
          </div>

          <div className="contenedor1">
            <input type="text" class="form-control" placeholder="Edad" />
            <input type="text" class="form-control" placeholder="Altura" />
          </div>

          <div className="contenedor1">
            <input type="text" class="form-control" placeholder="Peso" />
            <button type="submit" class="btn btn-primary col-3">
              Registrar
            </button>
          </div>
            
        </form>
      </div>
    </div>
  );
};
