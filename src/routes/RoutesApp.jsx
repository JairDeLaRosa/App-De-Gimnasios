import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Login} from './../pages/Login'
import { Registrar } from '../pages/Registrar'
import { RegistroEntrenador } from './../pages/registros/RegistroEntrenador'
import { RegistroUsuarioComun } from './../pages/registros/RegistroUsuarioComun'
import { RegistroGerenteDeGym } from './../pages/registros/RegistroGerenteDeGym'


export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='registro' element={<Registrar/>}/>
        <Route path='registroUsuarioComun' element={<RegistroUsuarioComun/>}/>
        <Route path='registroEntrenador' element={<RegistroEntrenador/>}/>
        <Route path='registroGerenteGimnasio' element={<RegistroGerenteDeGym/>}/>

        <Route path='login' element={<Login/>}/>
        <Route path='/*' element={<Navigate to={'/login'}/>}/>
    </Routes>
  )
}
