import React from 'react'
import miImage from '../img/ImagenPerfil.jpg'

export const CardPerfil = () => {
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
          <h5 class="card-title">Jair De La Rosa</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">20 años</li>
          <li class="list-group-item">89 kg</li>
          <li class="list-group-item">1.87 metros</li>
          <li class="list-group-item">IMC: {imc(1.87,89)}</li>
          <li class="list-group-item">Estado: {estado(imc(1.87,89))}</li>

        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Editar caracteristicas
          </a>
        </div>
      </div>
    </>
  )
}
