import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia (props) {
    return (
        <div>
            <h2>
            {(15 + 3 ) / 2}    
            { props.children }
            </h2>
        </div>
    )
}