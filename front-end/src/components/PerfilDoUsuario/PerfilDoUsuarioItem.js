import React from "react";
import { Link } from 'react-router-dom';

import "../PerfilDoUsuario/PerfilDoUsuario.css";
import profile from '../../image/profile.png'
import moment from 'moment'

import {PencilLine} from "phosphor-react";

export default function PerfilDoUsuario(props)
{
    return(
        <>
              <div className="profileInformation"> 
                    <div className="cabecalho">
                        <div className="profileSelf">
                            <img src={profile} alt=""  className = "imgProfile"/>
                        </div>

                        <div className="nameInformation">

                            <div className="container">
                                <h1 className="nomeH1"> {props.nome} </h1>
                                <Link to='/editar'>
                                    <div className='icon-pencil'>
                                        <i><PencilLine size={17} color="#8C8585"/></i>
                                    </div>
                                </Link>
                            </div>

                            <p className="nomeUser"> {props.user} </p>
                        </div>
                    </div>

                    <div className = "information">

                        <div className="aboutTitle">
                            <h2 className="tel">Telefone</h2>
                            <div className="email">
                                <h2>Email</h2>
                            </div>
                        </div>

                        <div className="about">
                            <p>({props.telefone.substring(0,2)}) {props.telefone.substring(2,7)}-{props.telefone.substring(7,11)}</p>
                            <div className="emailInformation">
                                <p> {props.email} </p>
                            </div>
                        </div>
                        
                        <div className="aboutTitle">
                            <h2 className="adress">Endereço</h2>
                        </div>
                        <div className="aboutTitle">
                            <p className="adressInformation">{props.endereco}</p>
                        </div>
                        <div className = "Contato de Segurança">
                            <div className="aboutTitle">
                                <h1 className="tContato">Contato de Segurança</h1>
                            </div>

                            <div className="aboutTitle">
                                <h2 className="infoSeguranca">Nome</h2>
                                <div className="telSegDiv">
                                    <h2 className="infoSeguranca">Telefone</h2>
                                </div>
                            </div>

                                <div className="aboutTitle">
                                    <p className="ntSeg">{props.nomeSeguranca}</p>
                                    <div className="telInfo">
                                        <p className="ntSeg">({props.telefoneSeguranca.substring(0,2)}) {props.telefoneSeguranca.substring(2,7)}-{props.telefoneSeguranca.substring(7,11)}</p>
                                    </div>
                                </div>
                        </div>

                        <div className="saude">
                                 <div className="aboutTitle">
                                    <h1 className="tSaude">Dados de Saúde</h1>
                                </div>

                                <div className="aboutTitle">
                                    <h2 className="infoTSaude">Altura</h2>
                                    <div className="telSegDiv">
                                        <h2 className="infoTSaude">Peso</h2>
                                    </div>
                                </div>

                                    <div className="aboutTitle">
                                        <p className="infoSaude">{props.altura} cm</p>
                                        <div className="pesoInfo">
                                            <p className="infoSaude"> {props.peso} Kg </p>
                                        </div>
                                    </div>
                            </div>
                            <div className="aboutTitle">
                                    <h2 className="infoT2Saude">Tipo Sanguíneo</h2>
                                    <div className="dtDiv">
                                        <h2 className="infoT2Saude">Data de Nascimento</h2>
                                    </div>
                            </div>
                            <div className="aboutTitle">
                                        <div className="tipoSanguineoInfo">
                                        <p className="info2Saude">{props.tipo_sanguineo}</p>
                                        </div>
                                        
                                        <div className="dataNascimentoInfo">
                                            <p className="info2Saude">{moment(props.data_de_nascimento).format("DD/MM/YYYY")}</p>
                                        </div>
                            </div>

                            <div className="doencas">
                                <div className="aboutTitle">
                                    <h2 className="tDoencas">Doenças</h2>
                                </div>
                                <div className="pDivDoencas">
                                    <div className="doencasP">
                                        <p> {props.doenca}  </p>
                                    </div>
                                </div>
                            </div>
                          
                    </div>

                </div>
        </>
    )
}
