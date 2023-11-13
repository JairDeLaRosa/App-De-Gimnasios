import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export const EditarCaracteristicas = () => {
  return (
    <>
      <div className="container-principal">
      <div className="contenedor-formulario animate__animated animate__fadeIn">
            <h2>Editar caracteristicas</h2>
            <br />
            <h4>Ingresar nueva foto de perfil</h4>
            <br />
            <img
              src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg"
              alt="FotoPerfil"
            />
            <br />
            <form>
              <div className="row">
                <input class="form-control file" type="file" id="formFile" />
              </div>
              <br />
              <div className="row">
                <div class="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    Ingresar peso en kilogramos
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Peso"
                    aria-label="name"
                    step={0.01}
                   
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlInput1" class="form-label">
                    Ingresar altura en metros
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Altura"
                    aria-label="name"
                    step={0.01}
                    
                  />
                </div>
                <div class="col">
                  <br />
                  <button type="submit" class="btn btn-primary mt-2">
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}
