import React from 'react'
import '../../../css/menus.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios';

export const MenuDeClientes = () => {
  const cookies= new Cookies()

  axios
      .get("http://localhost:8080/api/entrenadores/list")
      .then(function (respuesta) {
        console.log("Solicitud exitosa. Respuesta del servidor:", respuesta);
        cookies.set('entrenadores',respuesta.data, {path: "/"})
        // Aquí puedes manejar la respuesta del servidor
      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores en caso de que la solicitud falle
        alert("Ocurrió un error, intenta de nuevo");
      });
      
      axios
      .get("http://localhost:8080/api/gimnasios/list")
      .then(function (respuesta) {
        console.log("Solicitud exitosa. Respuesta del servidor:", respuesta);
        cookies.set('gimnasios',respuesta.data, {path: "/"})
        // Aquí puedes manejar la respuesta del servidor
      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
        // Manejo de errores en caso de que la solicitud falle
        alert("Ocurrió un error, intenta de nuevo");
      });  

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
