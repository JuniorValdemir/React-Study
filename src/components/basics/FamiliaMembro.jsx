import React from "react";

export default function FamiliaMembro (props) {
    return (
        <div><h2>{ props.nome } <strong>{ props.sobrenome }</strong></h2></div>
    )
}