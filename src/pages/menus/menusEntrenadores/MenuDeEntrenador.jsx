import React from 'react'
import '../../../css/menus.css'
import { NavBarEntrenadores } from '../../../components/NavBarEntrenadores'
import miImage2 from '../../..//img/Imagen_fondo.jpg'
import { CardPerfil } from '../../../components/CardPerfil'



export const MenuDeEntrenador = () => {
  return (
    <>
    <div className="container-menu-ver">
    </div>
    <div className='posicion container bg-white'>
      <br />
      <h5>Tus clientes</h5>
      <br />
      <div className='container-cards row rows-cols-1 row-cols-md-2 '>
        <div className='container-card'>
        <CardPerfil/>
        </div>
        <div className='container-card'>
        <CardPerfil/>
        </div>
      </div>
      
      </div>
    <NavBarEntrenadores/>
    <div class="card styleCard">
        <img src={miImage2} class="card-img-top" alt="..." />
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
        </div>
      </div>
    </>
    
  )
}
