import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../Login/Login.css";
import axios from 'axios'
import WomanLogin from '../../image/WomenLogon.png'

const urlAPI = "http://localhost:5015/api/Usuario"

const initialState = {
    user: { usuario: '', senha: '', telefone: '', nome: '', email: '', endereco: '', altura: 0, peso: 0, tipo_sanguineo: '', doenca: '', data_de_nascimento: '',  nomeSeguranca: '', telefoneSeguranca:'' },
    lista: []
}
export default function LoginUsuario()
{
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [nomeSeguranca, setNomeSeguranca] = useState('')
    const [telefoneSeguranca, setTelefoneSeguranca] = useState('')
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [tipo_sanguineo, setTipoSanguineo] = useState('')
    const [data_de_nascimento, setDataDeNascimento] = useState('')
    const [doenca, setDoenca] = useState('')
    const [endereco, setEndereco] = useState('')
    const [senha, setSenha] = useState('')
    const [message, setMessage] = useState("");
    const navigate = useNavigate()


    function salvar() {
        if (!usuario || !senha || !telefone || !nome || !email || !endereco || !altura || !peso || !tipo_sanguineo || !doenca || !data_de_nascimento || !nomeSeguranca || !telefoneSeguranca) {
            setMessage("Preencha todos os dados corretamente!");
        } 
        else {
            const novoUsuario = {
            usuario: usuario,
            senha: senha,
            telefone: telefone,
            nome: nome,
            email: email,
            endereco: endereco,
            altura: altura,
            peso: peso,
            tipo_sanguineo: tipo_sanguineo,
            doenca: doenca,
            data_de_nascimento: data_de_nascimento,
            nomeSeguranca: nomeSeguranca,
            telefoneSeguranca: telefoneSeguranca
            };
            console.log(novoUsuario)
            axios.post(urlAPI, novoUsuario)
            .then(resp => {
                //<PerfilDoUsuario usuario = {novoUsuario.usuario} />
                navigate("/login")
                window.location.reload()
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });
        }
    }
      
    function atualizarNome(event) {
        setNome( event.target.value );
        console.log(nome)
    }
    function atualizarUsuario(event) {
        setUsuario( event.target.value );
    }
    function atualizarTelefone(event) {
        setTelefone( event.target.value );
    }
    function atualizarEmail(event) {
        setEmail( event.target.value );
    }
    function atualizarNomeSeguranca(event) {
        setNomeSeguranca( event.target.value );
    }
    function atualizarTelefoneSeguranca(event) {
        setTelefoneSeguranca( event.target.value );
    }
    function atualizarAltura(event) {
        setAltura( event.target.value );
    }
    function atualizarPeso(event) {
        setPeso( event.target.value );
    }
    function atualizarTipoSanguineo(event) {
        setTipoSanguineo( event.target.value );
    }
    function atualizarDataDeNascimento(event) {
        setDataDeNascimento( event.target.value );
    }
    function atualizarDoenca(event) {
        setDoenca( event.target.value );
    }
    function atualizarEndereco(event) {
        setEndereco( event.target.value );
    }
    function atualizarSenha(event) {
        setSenha( event.target.value );
    }

    return(
        <div className="login-form">
            <div className="decoracao">
                <img src={WomanLogin} className="imgWoman"/>
                <h1 className="cadastroH1">Cadaste-se!</h1>
                <Link to='/login'>
                    <div className="psDoLogin">
                        <div className="loginS">
                            <p> Já possui uma conta? </p>
                        </div>
                        <div className="loginP">
                            <p> Conecte-se! </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="informacoesDoUsuario">

                <div className="pLinha">
                    <div className="labels">
                        <div className="label1">
                            <label>Nome*</label>
                        </div>
                        <div className="label2">
                            <label>Usuário*</label>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="input1"> 
                            <input
                                type="text"
                                id="nomeInput"
                                className="nomeInput"
                                name="nome"
                                onChange={atualizarNome}
                                maxLength="50"
                            />
                        </div>
                                
                        <div className="input2"> 
                            <input
                                type="text"
                                id="usuarioInput"
                                className="userInput"
                                name="user"
                                onChange={atualizarUsuario}
                                maxLength="15"
                            />
                        </div>
                    </div>
                </div>

                <div className='sLinha'>
                    <div className="labels">
                        <div className="label1">
                            <label>Telefone*</label>
                        </div>
                        <div className="label2">
                            <label>E-mail*</label>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="input1"> 
                            <input
                                type="text"
                                id="telefoneInput"
                                className="telefoneInput"
                                name="telefone"
                                onChange={atualizarTelefone}
                                maxLength="11"
                            />
                        </div>
                                
                        <div className="input2"> 
                            <input
                                type="text"
                                id="emailInput"
                                className="emailInput"
                                name="email"
                                onChange={atualizarEmail}
                                maxLength="50"
                            />
                        </div>
                    </div>
                </div>

                <div className='nLinha'>
                    <div className="labels">
                        <div className="label1">
                            <label>Endereço*</label>
                        </div>
                        <div className="label2">
                            <label>Senha*</label>
                        </div>
                    </div>

                    <div className="inputs">
                        <div className="input1"> 
                            <input
                                type="text"
                                id="enderecoInput"
                                className="enderecoInput"
                                name="endereco"
                                onChange={atualizarEndereco}
                            />
                        </div>
                                
                        <div className="input2"> 
                            <input
                                type="password"
                                id="senhaInput"
                                className="senhaInput"
                                name="senha"
                                onChange={atualizarSenha}
                            />
                        </div>
                    </div>
                </div>

                <div className="tLinha">
                    <h2 className="h2Login">Contato de segurança</h2>

                    <div className="labels">
                        <div className="label1">
                            <label>Nome*</label>
                        </div>
                        <div className="label2">
                            <label>Telefone*</label>
                        </div>
                    </div>

                    <div className="inputs">                                        
                        <div className="input1"> 
                            <input
                                type="text"
                                id="nomeSegInput"
                                className="nomeSegInput"
                                name="nomeSeguranca"
                                onChange={atualizarNomeSeguranca}
                                maxLength="50"
                            />
                        </div>
                        <div className="input2"> 
                            <input
                                type="text"
                                id="telefoneSegInput"
                                className="telefoneSegInput"
                                name="telefoneSeguranca"
                                onChange={atualizarTelefoneSeguranca}
                                maxLength="11"
                            />
                        </div>
                    </div>
                </div>

                <div className="qLinha">
                    <h2 className="h2Login">Dados de saúde</h2>

                    <div className="labels">
                        <div className="label1">
                            <label>Altura (cm)*</label>
                        </div>
                        <div className="label2">
                            <label>Peso (Kg)*</label>
                        </div>
                    </div>

                    <div className="inputs">                                        
                        <div className="input1"> 
                            <input
                                type="text"
                                id="alturaInput"
                                className="alturaInput"
                                name="altura"
                                onChange={atualizarAltura}
                                maxLength="3"
                            />
                        </div>
                        <div className="input2"> 
                            <input
                                type="text"
                                id="pesoInput"
                                className="pesoInput"
                                name="peso"
                                onChange={atualizarPeso}
                                maxLength="3"
                            />
                        </div>
                    </div>
                </div>

                <div className="sLinha">
                    <div className="labels">
                        <div className="label1">
                            <label>Tipo sanguíneo*</label>
                        </div>
                        <div className="labData">
                            <label>Data de nascimento*</label>
                        </div>
                    </div>

                    <div className="inputs">                                        
                        <div className="input1"> 
                            <input
                                type="text"
                                id="tipoSangInput"
                                className="tipoSangInput"
                                name="tipo_sanguineo"
                                onChange={atualizarTipoSanguineo}
                                maxLength="2"
                            />
                        </div>

                        <div className="input2"> 
                            <input
                                type="date"
                                id="dataInput"
                                className="dataInput"
                                name="data_de_nascimento"
                                onChange={atualizarDataDeNascimento}
                            />
                        </div>

                    </div>

                </div>
                <div className="oLinha">
                    <div className="labels">
                        <div className="label1">
                            <label> Doença </label>
                        </div>
                    </div>
                    <div className="inputsDoenca">                                        
                        <div className="inputDoenca"> 
                            <input
                                type="text"
                                id="doencaInput"
                                className="doencaInput"
                                name="doenca"
                                onChange={atualizarDoenca}
                            />
                        </div>
                    </div>
                </div>

                <div className="divLogon"> 
                    <button className="btnLogon" onClick={salvar}> Cadastrar </button>
                    <h4 className="msgErro">{message}</h4>
                </div>
            </div>

        </div>
    )
    
}