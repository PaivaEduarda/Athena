import React from "react";
import Mapa from "../Mapa/Mapa";
import Sidebar from "../Sidebar/Sidebar";
import './Registro.css';

export default function Registro() {
    return(
        <Sidebar>
            <div className="mapaRegistros">
                <Mapa getLocation="false" />
            </div>
        </Sidebar>
    )
}