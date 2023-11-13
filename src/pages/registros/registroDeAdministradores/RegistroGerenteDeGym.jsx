import React from "react";
import { RegistroUsuarios } from "./../../../components/RegistroUsuarios";
import { useState } from "react";
export const RegistroGerenteDeGym = () => {
  const [data, setData] = useState();
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("d-none");
  const register = (d) => {
    setData(d);
    setDisplay1("d-none");
    setDisplay2("");
  };
  return (
    <>
      <div className="container-registrar">
        <div className={display1}>
          <RegistroUsuarios tipoRegistro={"Gerente de gym"} data={register} />
        </div>
        <div className={display2}>
          <div className="contenedor-formulario animate__animated animate__fadeIn">
            <h2>Registro de Gimnasio</h2>
            <form>
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese nombre del Gimnasio
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese horade ingreso regular
                  </label>
                  <input className="form-control" type="time" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese hora de salida regular
                  </label>
                  <input className="form-control" type="time" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese costo diario del Gimnasio
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese costo membresia mensual
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese NIT del GYM
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <br />
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese ciudad del gimnasio
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese barrio del gimnasio
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese dirección del gimnasio
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label for="formFile" class="form-label">
                    Ingrese logo del gimnasio
                  </label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div className="col"></div>
                <div class="col">
                  <button type="submit" class="btn btn-primary mt-2">
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
