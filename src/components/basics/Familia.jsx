import React, { cloneElement } from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia (props) {
    return (
        <div>
            <h2>
            {
            React.Children.map(props.children, child => {
                return cloneElement(child, { ...props})
            })
            }
            </h2>
        </div>
    )
}