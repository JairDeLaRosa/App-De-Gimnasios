import React from 'react'
import { NavBarVerGimnasios } from '../../../components/NavBarVerGimnasios'
import { CardGimnasio } from '../../../components/CardGimnasio'
import '../../../css/menus.css'
import Cookies from 'universal-cookie'
import { useState } from 'react'

export const VerGimnasios = () => {
  const cookies=new Cookies()
  const gimnasios=cookies.get('gimnasios')
  const [busquedaPorBarrio, setBusquedaPorBarrio]=useState('')
  const [busquedaPorCiudad, setBusquedaPorCiudad]=useState('')

  let elementosEncontrados=[]

  const convertirAMonedaColombiana= (numero) =>{
    try {
        // Formatear el número como moneda colombiana
        const valorEnMonedaColombiana = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
        }).format(numero);

        return valorEnMonedaColombiana;
    } catch (error) {
        return `Error: ${error}`;
    }
}
  const buscarPorBarrio=(nombre)=>{
    elementosEncontrados=[]
    for (let i=0; i<gimnasios.length; i++){
      if(gimnasios[i].barrio.toLowerCase().includes(nombre.toLowerCase())){
        elementosEncontrados.push(<li key={i}><CardGimnasio barrio={gimnasios[i].barrio} ciudad={gimnasios[i].ciudad} direcccion={gimnasios[i].direccion} horarios={gimnasios[i].horarios} nombre={gimnasios[i].nombre} costoMensual={convertirAMonedaColombiana(gimnasios[i].costoMensual)} Nit={gimnasios[i].nit}/></li>)
      }
  }
  return elementosEncontrados
  }
  const buscarPorCiudad=(nombre)=>{
    elementosEncontrados=[]
    for (let i=0; i<gimnasios.length; i++){
      if(gimnasios[i].ciudad.toLowerCase().includes(nombre.toLowerCase())){
        elementosEncontrados.push(<li key={i}><CardGimnasio barrio={gimnasios[i].barrio} ciudad={gimnasios[i].ciudad} direcccion={gimnasios[i].direccion} horarios={gimnasios[i].horarios} nombre={gimnasios[i].nombre} costoMensual={convertirAMonedaColombiana(gimnasios[i].costoMensual)} Nit={gimnasios[i].nit}/></li>)
      }
  }
  return elementosEncontrados
  }
    const elementosRenderizados=[]
    for (let i=0; i<gimnasios.length; i++){
        elementosRenderizados.push(<li key={i}><CardGimnasio barrio={gimnasios[i].barrio} ciudad={gimnasios[i].ciudad} direcccion={gimnasios[i].direccion} horarios={gimnasios[i].horarios} nombre={gimnasios[i].nombre} costoMensual={convertirAMonedaColombiana(gimnasios[i].costoMensual)} Nit={gimnasios[i].nit}/></li>)
    }
  return (
    <>
    <div className="container-menu-ver">
    </div>
    <NavBarVerGimnasios busquedaPorBarrio={setBusquedaPorBarrio} busquedaPorCiudad={setBusquedaPorCiudad}/>

    <div className='container-cards row rows-cols-1 row-cols-md-3'>
        {/* <h2>Gimnasios registrados</h2> */}
        {busquedaPorBarrio===''&& busquedaPorCiudad==='' ? elementosRenderizados: buscarPorBarrio(busquedaPorBarrio) || buscarPorCiudad(busquedaPorCiudad)}


        
    </div>
    
    
        
    </>
    
  )
}
