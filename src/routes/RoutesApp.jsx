import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Login} from './../pages/Login'
import { Registrar } from '../pages/Registrar'
import { RegistroEntrenador } from '../pages/registros/registroDeEntrenadores/RegistroEntrenador'
import { RegistroUsuarioComun } from '../pages/registros/registrosClientes/RegistroUsuarioComun'
import { RegistroGerenteDeGym } from '../pages/registros/registroDeAdministradores/RegistroGerenteDeGym'
import { MenuDeClientes } from '../pages/menus/menusClientes/MenuDeClientes'
import { MenuDeEntrenador } from '../pages/menus/menusEntrenadores/MenuDeEntrenador'
import { MenuDeGimnasios } from '../pages/menus/menusGimnasios/MenuDeGimnasios'
import { VerGimnasios } from '../pages/menus/menusClientes/VerGimnasios'
import { PerfilDeCliente } from '../pages/menus/menusClientes/PerfilDeCliente'
import { VerEntrenadores } from '../pages/menus/menusClientes/VerEntrenadores'


export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='registro' element={<Registrar/>}/>
        <Route path='registroUsuarioComun' element={<RegistroUsuarioComun/>}/>
        <Route path='registroEntrenador' element={<RegistroEntrenador/>}/>
        <Route path='registroGerenteGimnasio' element={<RegistroGerenteDeGym/>}/>

        <Route path='cliente' element={<MenuDeClientes/>}/>
        <Route path='cliente/verGimnasios' element={<VerGimnasios/>}/>
        <Route path='cliente/verEntrenadores' element={<VerEntrenadores/>}/>        
        <Route path='cliente/perfilDeCliente' element={<PerfilDeCliente/>}/>
        

        <Route path='entrenador' element={<MenuDeEntrenador/>}/>
        
        <Route path='gimnasio' element={<MenuDeGimnasios/>}/>

        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Navigate to={'/login'}/>}/>



    </Routes>
  )
}
