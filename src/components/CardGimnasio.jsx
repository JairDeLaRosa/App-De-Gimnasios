import React from "react";
import miImage from '../img/Imagen_fondo4.jpg'
import { Link } from "react-router-dom";

export const CardGimnasio = ({nombre, costoMensual, ciudad, barrio, direcccion, horarios,Nit}) => {
  return (
    <>
      <div class="card styleCard">
        <img src={miImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Costo Mensual: {costoMensual}</li>
          <li class="list-group-item">Ciudad: {ciudad}</li>
          <li class="list-group-item">Barrio: {barrio}</li>
          <li class="list-group-item">Dirección: {direcccion}</li>
          <li class="list-group-item">Horarios: {horarios}</li>        
          <li class="list-group-item">NIT: {Nit}</li>          
        </ul>
        <div class="card-body">
          <Link to="/cliente/verGimnasios/comprarMembresia" class="card-link">
            Comprar membresía
          </Link>
        </div>
      </div>
    </>
  );
};
