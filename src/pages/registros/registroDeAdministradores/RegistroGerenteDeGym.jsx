import React from 'react'
import {RegistroUsuarios} from './../../../components/RegistroUsuarios'
import { useState } from 'react'
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
              <div className='row'>
              <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese nombre del Gimnasio
                  </label>
                <input className='form-control' type="text" />
                </div>
                <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese horade ingreso regular
                  </label>
                <input className='form-control' type="time" />
                </div>
                <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese hora de salida regular
                  </label>
                <input className='form-control' type="time" />
                </div>
              </div>
              <br />
              <div className="row">
              <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese costo diario del Gimnasio
                  </label>
                <input className='form-control' type="text" />
                </div>
                <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese costo membresia mensual
                  </label>
                <input className='form-control' type="text" />
                </div>
                <div className='col'>
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese NIT del GYM
                  </label>
                <input className='form-control' type="text" />
                </div>
                <br /> 
                <div className="row">
                <label for="exampleFormControlTextarea1" class="form-label">
                    Ingrese imagen del gym
                  </label>
                <input type="file" className="file" />
              </div>
                <div class="col">
                  <br />
                  <button type="submit" class="btn btn-primary mt-2">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
