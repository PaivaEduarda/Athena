import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar'
import RelatoItem from './RelatoItem'
import './Relato.css'
import { PencilSimpleLine, X } from "phosphor-react";
import PostRelato from './PostRelato'

const urlAPI = "http://localhost:5015/api/Relato"
const initialState = {
    relato: { numero_relato: 0, relato: '', id_usuario: '', data: 0, rua: '', bairro: '', cidade: ''},
    lista: []
}

export default function Relato () {
    const [relato, setRelato] = useState(initialState)
    const [showPostRelato, setPostRelato] = useState(false)

    function postRelato() {
        setPostRelato(!showPostRelato)
    }

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setRelato({ lista: resp.data})
        })
    })

    return (
        <div>
            <Sidebar>
                <div className={showPostRelato? "post-relato" : "post-relato hidden"}>
                    <div className='cancel'><button className='btnCancel' onClick={postRelato}><X size={20} color='#333333'/></button></div>
                    <PostRelato postRel={postRelato} /> 
                </div>
                <div className={showPostRelato? "page hidden" : "page"}>
                    <div className='relato-header'>
                        <button className='create-relato' onClick={postRelato}><PencilSimpleLine size={30} color="#000000"/></button>
                    </div>


                    <div className='relatos' id="relatos">
                        {relato.lista.map ((rel) =>
                        <RelatoItem 
                            id={rel.numero_relato}
                            user={ rel.id_usuario } 
                            data={rel.dataRelato} 
                            relato={ rel.relato } 
                            rua={rel.rua} 
                            bairro={rel.bairro} 
                            cidade={rel.cidade}/>
                        )}
                    </div>
                </div>

            </Sidebar>
        </div>
    )
}