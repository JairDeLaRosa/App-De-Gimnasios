import React from 'react'
import { NavBarVerEntrenadores } from '../../../components/NavBarVerEntrenadores' 
import { CardEntrenadores } from '../../../components/CardEntrenadores'
import Cookies from 'universal-cookie'
import { useState } from 'react'

export const VerEntrenadores = () => {
  const [busquedaPorEspecialidad, setBusquedaPorEspecialidad]=useState('')
  const cookies= new Cookies()
  const entrenadores= cookies.get('entrenadores')

  let elementosEncontrados=[]

  const procesarFechaNacimiento=(f)=> `${f[2]}/${f[1]}/${f[0]}`
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
const buscarPorEspecialidad=(nombre)=>{
  elementosEncontrados=[]
  for (let i=0; i<entrenadores.length; i++){
    if(entrenadores[i].especialidad.toLowerCase().includes(nombre.toLowerCase())){
      elementosEncontrados.push(<li key={i}><CardEntrenadores apellido={entrenadores[i].idUsuario.apellidos} celular={entrenadores[i].idUsuario.celular} costo={convertirAMonedaColombiana(entrenadores[i].costoMensual)} fechaDeNacimiento={procesarFechaNacimiento(entrenadores[i].idUsuario.fechaDeNacimiento)} descripcion={entrenadores[i].descripcion} especialidad={entrenadores[i].especialidad} nombre={entrenadores[i].idUsuario.nombres}/></li>)
    }
}
return elementosEncontrados
}

    const elementosRenderizados=[]
    for (let i=0; i<entrenadores.length; i++){
        elementosRenderizados.push(<li key={i}><CardEntrenadores apellido={entrenadores[i].idUsuario.apellidos} celular={entrenadores[i].idUsuario.celular} costo={convertirAMonedaColombiana(entrenadores[i].costoMensual)} fechaDeNacimiento={procesarFechaNacimiento(entrenadores[i].idUsuario.fechaDeNacimiento)} descripcion={entrenadores[i].descripcion} especialidad={entrenadores[i].especialidad} nombre={entrenadores[i].idUsuario.nombres}/></li>)
    }

  return (
    <>
    <div className="container-menu-ver">
    </div>
    <NavBarVerEntrenadores busquedaPorEspecialidad={setBusquedaPorEspecialidad}/>

    <div className='container-cards row rows-cols-1 row-cols-md-3'>
        {/* <h2>Gimnasios registrados</h2> */}
            {buscarPorEspecialidad===''?elementosRenderizados:buscarPorEspecialidad(busquedaPorEspecialidad)}
        
    </div>
    
    
        
    </>
    
  )
}
