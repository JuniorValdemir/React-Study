import React from "react"

export default function Random(props) {
    const { min, max } = props;

    const random = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2><strong>Number Random</strong></h2>
            <h3>
                <strong>Number Max:</strong> { max }
            </h3>
            <h3>
                <strong>Numver Min:</strong> { min }
            </h3>
            <h3>
                <strong>Number Chosen: </strong> { random }
            </h3>
        </div>
    )
    

}

