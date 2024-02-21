import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import "./Sidebar.css";
import logo from '../../image/logoAthena.png'
import profile from '../../image/profile.png'
import { Info, List, MapPin, Chats, Bell, SignOut } from "phosphor-react";
import AuthService from "../../services/AuthService";


export default function Sidebar(props)
{
    const [sidebar, setSidebar] = useState(false)
    const [currentUser, setCurrentUser] = useState(undefined)
    const navigate = useNavigate()

    function showSidebar () {
        setSidebar(!sidebar)
    }

    function sair(){
        AuthService.logout();
        console.log("logout");
        navigate("/login");
        window.location.reload();
    }

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        console.log(user.user.usuario)
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return(
        <>
            <div className={sidebar? "sidebar close" : "sidebar"}>
                <div className="logo-details">
                    <img src={logo} alt="Athena" onClick={showSidebar}/>
                    <span className="logo_name">Athena</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to='/info'>
                            <i className='icon'><Info size={26}/></i>
                            <span className="link_name">Informação</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to='/info'><span className="link_name">Informação</span></Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/denuncia'>
                            <i className='icon'><Bell size={26}/></i>
                            <span className="link_name">Denúncia</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to='/denuncia'><span className="link_name">Denúncia</span></Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/relatos/' + (currentUser? currentUser.user.usuario: "" )}>
                            <i className='icon'><Chats size={26}/></i>
                            <span className="link_name">Relatos</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to={'/relatos/' + (currentUser? currentUser.user.usuario: "")}><span className="link_name">Relatos</span></Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/registros-na-regiao'>
                            <i className='icon'><MapPin size={26}/></i>
                            <span className="link_name">Registros na Região</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to='/registros-na-regiao'><span className="link_name">Registros na Região</span></Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/user/' + (currentUser? currentUser.user.usuario: "") }>
                            <div className="profile-details">
                                <div className="profile-content">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="name-job">
                                    <div className="profile_name">{currentUser? currentUser.user.nome: ""}</div>
                                    <div className="job">{currentUser? currentUser.user.usuario: ""}</div>
                                </div>
                                <i className='icon sair' onClick={sair}><SignOut size={26} /></i>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <section className="home-section">
            <div className="home-content">
                <div className="p">
                    <i className="menu" onClick={showSidebar}>
                    <List size={32} weight="bold" className="iconMenu" />
                    </i>
                </div>
                {props.children}
            </div>
      </section>
        </>
    )
}