import React from 'react'
import { NavBarVerEntrenadores } from '../../../components/NavBarVerEntrenadores' 
import { CardEntrenadores } from '../../../components/CardEntrenadores'

export const VerEntrenadores = () => {
    const elementosRenderizados=[]
    for (let i=0; i<20; i++){
        elementosRenderizados.push(<li key={i}><CardEntrenadores/></li>)
    }
  return (
    <>
    <div className="container-menu-ver">
    </div>
    <NavBarVerEntrenadores/>

    <div className='container-cards row rows-cols-1 row-cols-md-3'>
        {/* <h2>Gimnasios registrados</h2> */}
            {elementosRenderizados}
        
    </div>
    
    
        
    </>
    
  )
}
