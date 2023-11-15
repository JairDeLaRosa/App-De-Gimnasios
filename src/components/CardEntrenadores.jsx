import React from 'react'
import miImage from '../img/Imagen_fondo.jpg'

export const CardEntrenadores = ({nombre, apellido, descripcion, fechaDeNacimiento, especialidad, celular, costo}) => {
  return (
    <>
      <div class="card styleCard">
        <img src={miImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{`${nombre} ${apellido}`}</h5>
          <p class="card-text">
            {descripcion}
          </p>
          <p className='card-text'>Fecha de nacimiento: {fechaDeNacimiento}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Especialidad: {especialidad}</li>
          <li class="list-group-item">Costo mensual: {costo}</li>
          <li class="list-group-item">Numero de contacto: +57 {celular} </li>
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
