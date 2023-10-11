import { useState } from "react";
import { RegistroUsuarios } from "./../../../components/RegistroUsuarios";
import "./../../../css/registroUsuarioComun.css";
export const RegistroUsuarioComun = () => {
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
          <RegistroUsuarios tipoRegistro={"Clientes"} data={register} />
        </div>
        <div className={display2}>
          <div className="contenedor-formulario animate__animated animate__fadeIn">
            <h2>Registro de clientes</h2>
            <br />
            <h4>Ingresar foto de perfil</h4>
            <br />
            <img
              src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg"
              alt="FotoPerfil"
            />
            <br />
            <form >
              <div className="row">
              <input type="file" className="file"/>
              </div>
              <br />
           <div className="row">
           <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter weight
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Weight"
                aria-label="name"
                step={0.01}
              />
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Enter height
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Height"
                aria-label="name"
                step={0.01}
              />
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
};
