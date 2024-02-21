import React from "react";
import './RelatoItem.css'
import profile from '../../image/profile.png'
import moment from 'moment'

export default function RelatoItem(props) {
    return (
        <div className="relatoItem-wrap">
            <div className="relatoItem-user">
                <img src={profile} alt={props.user} />
                <h4>{props.user}</h4>
                <p>{moment(props.data).format("DD/MM/YYYY")}</p>
            </div>
            <h5 className="relatoItem-end">R. {props.rua} - {props.bairro}, {props.cidade}</h5>
            <p className="relatoItem-desc">{props.relato}</p>
        </div>
    )
}