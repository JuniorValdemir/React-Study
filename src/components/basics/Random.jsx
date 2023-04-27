import React from "react"

export default function Random(props) {
    const { min, max } = props;

    const random = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Number Random</h2>
            <p>
                <strong>Number Max:</strong> { max }
            </p>
            <p>
                <strong>Numver Min:</strong> { min }
            </p>
            <p>
                <strong>Number Chosen: </strong> { random }
            </p>
        </div>
    )
    

}

