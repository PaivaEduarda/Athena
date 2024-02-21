import "../Logon/Logon.css";
import React, { useState } from "react";
//import { Textbox } from "phosphor-react";
import { Link } from "react-router-dom";
import WomanLogin from "../../image/LoginWoman.png";

import { useNavigate } from "react-router";
import AuthService from "../../services/AuthService";

export default function LogonUsuario() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Preencha o username e a senha para continuar!");
    } else {
      AuthService.login(username, password).then(
        () => {
          console.log("localStorage: " + localStorage.getItem("user"));
          navigate("/user/"+ username);
          window.location.reload(); // atualiza o localStorage
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        }
      );
    }
  }
  return (
    <>
      <div className="logon-form">
        <div className="internal">
          <h2 className="title"> BEM-VINDO(A)! </h2>
        </div>
        <form>
          <div className="user">
            <input
              type="text"
              id="username"
              className="username"
              name="Username"
              placeholder="Username"
              onChange={({ target }) => { setUsername(target.value);
              setMessage(""); }}
            />
          </div>

          <div className="password">
            <input
              type="password"
              id="senha"
              className="senha"
              name="senha"
              placeholder="Password"
              onChange={({ target }) => { setPassword(target.value);
              setMessage(""); }}
            />
          </div>
          <div className="divLogin">
            <button className="btnLogin" onClick={handleSubmit}> Login </button>
          </div>
          <div className="divLogin"><h4 className="msgErro">{message}</h4></div>
          <div className="labelCadastro">
            <Link to="/logon">
              <label className="logonLabel">
                {" "}
                Não tem cadastro? Crie uma conta!
              </label>
            </Link>
          </div>
        </form> 
        <img src={WomanLogin} className="imgWomanLogin" alt="login" />
      </div>
    </>
  );
}
