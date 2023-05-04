import React from "react";
import Familia from "./Familia";

export default function FamiliaMembro (props) {
    return (
        <div>{ props.nome } <strong>{ props.sobrenome }</strong></div>
    )
}