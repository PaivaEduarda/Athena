import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Relato from "./components/Relato/Relato";
import PerfilDoUsuario from "./components/PerfilDoUsuario/PerfilDoUsuario";
import Login from "./components/Login/LoginItem";
import Logon from "./components/Logon/LogonItem";
import SMSForm from './components/SMSForm/SMSForm';
import Denuncia from "./components/Denuncia/Denuncia";
import Registro from './components/Registros/Registro';

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to={'/login'} />} />
            <Route path='/relatos/:usuario' element={<Relato/>}/>
            <Route path='/user/:usuario' element={<PerfilDoUsuario />}/>
            <Route path='/logon' element={<Login />}/>
            <Route path='/login' element={<Logon />}/>
            <Route path='/sms' element={<SMSForm />}/>
            <Route path='/denuncia' element={<Denuncia />} />
            <Route path='/registros-na-regiao' element={<Registro />} />
            <Route path='/*' element={<Sidebar children={<p> Endereço não localizado!</p>} />}/>
        </Routes>
    )
}