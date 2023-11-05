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


export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='registro' element={<Registrar/>}/>
        <Route path='registroUsuarioComun' element={<RegistroUsuarioComun/>}/>
        <Route path='registroEntrenador' element={<RegistroEntrenador/>}/>
        <Route path='registroGerenteGimnasio' element={<RegistroGerenteDeGym/>}/>

        <Route path='cliente' element={<MenuDeClientes/>}/>
        <Route path='cliente/verGimnasios' element={<VerGimnasios/>}/>

        <Route path='entrenador' element={<MenuDeEntrenador/>}/>
        <Route path='gimnasio' element={<MenuDeGimnasios/>}/>

        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Navigate to={'/login'}/>}/>



    </Routes>
  )
}
