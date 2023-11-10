import React from 'react'
import '../../../css/menus.css'
import { NavBarGimnasios } from '../../../components/NavBarGimnasios'
import { CardPerfilGerente } from '../../../components/CardPerfilGerente'
import { CardEntrenadorConntratado } from '../../../components/CardEntrenadorConntratado'
import miImage from '../../../img/Imagen_fondo4.jpg'


export const MenuDeGimnasios = () => {
  return (
    <>
    <div className="container-menu-ver">
    </div>
    <div className='posicion container bg-white'>
      <br />
      <h5>Tus clientes</h5>
      <br />
      <div className='container-cards row rows-cols-1 row-cols-md-2 '>
      <CardEntrenadorConntratado/>
      <CardEntrenadorConntratado/>
      <CardEntrenadorConntratado/>
      </div>
      
      </div>
    <NavBarGimnasios/>
    <CardPerfilGerente/>
    
    <div class="card styleCard">
      <br />
      <h5>-----------------Tu Gimnasio-----------------</h5>
      <br />
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
            Editar caracteristicas
          </a>
        </div>
        <br />
      </div>
      <div className='card styleCard'>
        <br />
      <h5>--------------Tus Entrenadores--------------</h5>
      <br />
      <CardEntrenadorConntratado/>
      <CardEntrenadorConntratado/>
      <CardEntrenadorConntratado/>
      <CardEntrenadorConntratado/>
      </div>
      
      
    </>
    
  )
}
