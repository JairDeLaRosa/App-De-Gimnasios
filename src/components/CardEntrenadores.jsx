import React from 'react'
import miImage from '../img/Imagen_fondo.jpg'

export const CardEntrenadores = () => {
  return (
    <>
      <div class="card styleCard">
        <img src={miImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Alberto Manjarrez</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className='card-text'>Edad: </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Especialidad: </li>
          <li class="list-group-item">Numero de contacto: +57 3008021971 </li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Contratar
          </a>
          <a href="#" class="card-link">
            Contactar
          </a>
        </div>
      </div>
    </>
  )
}
