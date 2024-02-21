import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'
import PerfilDoUsuarioItem from './PerfilDoUsuarioItem'
import { useParams } from 'react-router-dom'

const urlAPI = "http://localhost:5015/api/Usuario/"
const initialState = {
    perfilDoUsuario: { user: '', telefone: '', nome: '', email: '', nomeSeguranca: '', telefoneSeguranca:'', altura: 0, peso: 0, tipo_sanguineo: '', doenca: '', data_de_nascimento: ''},
    lista: []
}

export default function PerfilDoUsuario () {
    
    const info = useParams();
    const [ iState, setInitialState] = useState(initialState)
    useEffect(() => {
        axios(urlAPI + info.usuario).then(resp => {
            setInitialState({ perfilDoUsuario: resp.data})
        })
    })

    return (
        <>
            
            <Sidebar>
                {
                    <PerfilDoUsuarioItem user={ iState.perfilDoUsuario.usuario } telefone = {iState.perfilDoUsuario.telefone} nome = {iState.perfilDoUsuario.nome} 
                     email = {iState.perfilDoUsuario.nome} nomeSeguranca = {iState.perfilDoUsuario.nomeSeguranca} telefoneSeguranca = {iState.perfilDoUsuario.telefoneSeguranca} 
                     altura = {iState.perfilDoUsuario.altura} peso = {iState.perfilDoUsuario.peso} tipo_sanguineo = {iState.perfilDoUsuario.tipo_sanguineo} doenca = {iState.perfilDoUsuario.doenca} 
                     data_de_nascimento = {iState.perfilDoUsuario.data_de_nascimento} endereco = {iState.perfilDoUsuario.endereco}/> }
            </Sidebar>
        </>
    )
}