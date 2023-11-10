import React from 'react'
import { NavBar } from '../../../components/NavBar'
import { CardGimnasio } from '../../../components/CardGimnasio'
import '../../../css/menus.css'

export const VerGimnasios = () => {
    const elementosRenderizados=[]
    for (let i=0; i<20; i++){
        elementosRenderizados.push(<li key={i}><CardGimnasio/></li>)
    }
  return (
    <>
    <div className="container-menu-ver">
    </div>
    <NavBar/>

    <div className='container-cards row rows-cols-1 row-cols-md-2'>
        {/* <h2>Gimnasios registrados</h2> */}
            {elementosRenderizados}
        
    </div>
    
    
        
    </>
    
  )
}
