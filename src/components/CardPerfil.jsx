import React from 'react'
import miImage from '../img/ImagenPerfil.jpg'
import { Link } from 'react-router-dom'


export const CardPerfil = ({nombres, apellidos, fechaDeNacimiento, altura, peso}) => {

    const imc=(altura, peso)=>{
        const imc= peso/(altura*altura)
        return imc.toFixed(2)
    }
    const estado=(imc)=>{
        if(imc<18.5){
            return 'Peso bajo'
        }else if(imc>=18.5 && imc<25){
            return 'Peso normal'
        }else if(imc>=25 && imc<30){
            return 'Sobrepeso'
        }else if(imc>=30 && imc<35){
            return 'Obesidad leve'
        }else if(imc>=35 && imc<40){
            return 'Obesidad media'
        }else{
            return 'Obesidad morbida'
        }
    }
  return (
    <>
    <div class="card styleCard">
        <img src={miImage} class="card-img-top imagePerfil" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{nombres+' '+apellidos}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{`Fecha de Nacimiento: ${fechaDeNacimiento}`}</li>
          <li class="list-group-item">{`Peso: ${peso}`} kg</li>
          <li class="list-group-item">{`Altura: ${altura}`} metros</li>
          <li class="list-group-item">IMC: {imc(altura,peso)}</li>
          <li class="list-group-item">Estado: {estado(imc(altura,peso))}</li>

        </ul>
        <div class="card-body">
          <Link to="/cliente/perfilDeCliente/editarCaracteristicas" class="card-link">
            Editar caracteristicas
          </Link>
        </div>
      </div>
    </>
  )
}
