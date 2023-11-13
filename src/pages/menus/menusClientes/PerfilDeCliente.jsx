import React from 'react'
import '../../../css/menus.css'
import { NavBarPerfilCLientes } from '../../../components/NavBarPerfilClientes'
import { CardPerfil } from '../../../components/CardPerfil'
import { CardEntrenadorConntratado } from '../../../components/CardEntrenadorConntratado'
import miImage from '../../../img/Imagen_fondo4.jpg'
export const PerfilDeCliente = () => {
  return (
    <>
    <div className='container-menu-ver'>
    </div>
    <NavBarPerfilCLientes/>
    <div className='cardPerfil'>
        <CardPerfil/>
    </div>
    <div className='containerEntrenadores'>
        <br />
        <h3>Tus entrenadores</h3>
        <br />
        <>
      <CardEntrenadorConntratado/>
    </>
        <br />
        <br />
    </div>
    <div className='containerGimnasios'>
        <br />
        <h3>Gimnasios suscritos</h3>
        <br />
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
          <h5>Membresía adquirida</h5>
        </div>
      </div>
    </>
        <br />
        <br />
    </div>
    </>
  )
}
