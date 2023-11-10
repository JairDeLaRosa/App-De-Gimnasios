import React from 'react'
import miImage from '../img/ImagenPerfil.jpg'

export const CardPerfilGerente = () => {
  return (
    <>
    <div class="card styleCard">
        <img src={miImage} class="card-img-top imagePerfil" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Jair De La Rosa</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Edad: 20 años</li>
          <li class="list-group-item">Gerente de: Sport top</li>
        </ul>
      </div>
    </>
  )
}
