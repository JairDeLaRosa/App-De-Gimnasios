import React from "react";
import "./../css/registros.css";
import { useNavigate } from "react-router-dom";
export const Registrar = () => {
    const navigate=useNavigate()
    const RegistroUsuarioComun=()=>navigate('/registroUsuarioComun')
    const RegistroEntrenador=()=>navigate('/registroEntrenador')
    const RegistroGerenteDeGym=()=>navigate('/registroGerenteGimnasio')
  return (
    <>
      <div className="container-registrar">
        <div className="opciones animate__animated animate__animated animate__fadeIn">
          <h2 className="title">REGISTRAR COMO</h2>
          <div className="buttons">
            <button type="button" className="btn btn-light btn2" onClick={RegistroUsuarioComun}>
              USUARIO COMÚN
            </button>
            <button type="button" className="btn btn-light btn2" onClick={RegistroEntrenador}>
              ENTRENADOR
            </button>
            <button type="button" className="btn btn-light btn2" onClick={RegistroGerenteDeGym}>
              GERENTE DE GIMNASIO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
