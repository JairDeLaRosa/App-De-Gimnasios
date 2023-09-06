import React from "react";
import "./../css/login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="container-principal">
        <form className="formLogin animate__animated animate__bounceInUp">
        <h2 className="title">Inicio de sesión</h2>

          <div class="mb-3">
            <input
              placeholder="Email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              placeholder="Contraseña"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 register">
            <label>¿Eres nuevo?</label>
            <Link className="d-inline-block" to={"/registro"}>
              Registrarse
            </Link>
          </div>
          <button type="submit" class="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
};
