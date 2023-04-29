import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia (props) {
    return (
        <div>
            <FamiliaMembro nome = 'Junior' sobrenome = { props.sobrenome }/>
            <FamiliaMembro nome = 'Denilson' {...props}/>
            <FamiliaMembro nome = 'Felipe' sobrenome = 'Viana'/>
        </div>
    )
}