import React from 'react'
import '../../../css/menus.css'
import { useNavigate } from "react-router-dom";

export const MenuDeClientes = () => {
  const navigate=useNavigate()
  const VerPerfil=()=>navigate('/cliente/perfilDeCliente')
  const VerEntrenadores=()=>navigate('/cliente/verEntrenadores')
  const VerGimnasios=()=>navigate('/cliente/verGimnasios')
return (
  <>
    <div className="container-menu-cliente">
      <div className="opciones animate__animated animate__animated animate__fadeIn">
        <h1 className="title">¡Bienvenido!</h1>
        <br />
        <h3 className='title'>Elige una opción</h3>
        <br />
        <div className="buttons">
          <button type="button" className="btn btn-light btn2" onClick={VerEntrenadores}>
            VER ENTRENADORES
          </button>
          <button type="button" className="btn btn-light btn2" onClick={VerGimnasios}>
            VER GIMNASIOS
          </button>
          <button type="button" className="btn btn-light btn2" onClick={VerPerfil}>
            VER PERFIL
          </button>
        </div>
      </div>
    </div>
  </>
);
};
