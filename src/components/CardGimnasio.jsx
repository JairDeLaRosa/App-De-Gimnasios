import React from "react";
import miImage from '../img/Imagen_fondo4.jpg'

export const CardGimnasio = () => {
  return (
    <>
      <div class="card styleCard">
        <img src={miImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Sport Top</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Costo Mensual: </li>
          <li class="list-group-item">Ciudad: </li>
          <li class="list-group-item">Barrio: </li>
          <li class="list-group-item">Dirección: </li>
          <li class="list-group-item">Horarios: </li>          
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Comprar membresía
          </a>
        </div>
      </div>
    </>
  );
};
