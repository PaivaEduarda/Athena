import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PostRelato.css'
import profile from '../../image/profile.png'
import AuthService from '../../services/AuthService';

const urlAPI = "http://localhost:5015/api/Relato"

export default function PostRelato(props) {

    const [descRelato, setDescRelato] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [currentUser, setCurrentUser] = useState(undefined)
    
    function salvar(){
        const date = new Date()
        const datetime = date.toJSON() 
        const novoRelato = {relato: descRelato, rua: rua, bairro: bairro, cidade: cidade, dataRelato: datetime, id_usuario: currentUser? currentUser.user.usuario: ""}
        console.log(novoRelato)
        axios.post(urlAPI, novoRelato).then(resp => {
            props.postRel()
        })
    }

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        console.log(user.user.usuario)
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    function atualizarRelato(event) {
        setDescRelato( event.target.value );
    }
    function atualizarRua(event) {
        setRua( event.target.value );
    }
    function atualizarBairro(event) {
        setBairro( event.target.value );
    }
    function atualizarCidade(event) {
        setCidade( event.target.value );
    }

    return (
        <>
            <div className='page-relato'>
                    <div className="postRelato-user">
                        <img src={profile} alt={currentUser? currentUser.user.usuario: ""} />
                        <h4>{currentUser? currentUser.user.usuario: ""}</h4>
                    </div>
                    <textarea name="relato" className='desc-relato' id="descRelato" placeholder='Escreva o seu relato aqui' onChange={atualizarRelato}></textarea>
            </div>
            <div className='infos'>
                <div className="endereco">
                    <label className='onde'>Onde ocorreu?</label>
                    <input
                        type="text"
                        id="rua"
                        name="rua"
                        className="rua"
                        placeholder="Rua"
                        onChange={atualizarRua}
                    />
                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        className="bairro"
                        placeholder="Bairro"
                        onChange={atualizarBairro}
                    />
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        className="cidade"
                        placeholder="Cidade"
                        onChange={atualizarCidade}
                    />
                </div>
                <button className='btnPublicar' onClick={salvar}>Publicar</button>
            </div>
        </>
    )
} 