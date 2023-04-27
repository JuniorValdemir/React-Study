// Link to React to use JSX //
import React from "react"

export default function ComParamentro(props) {

    const status = props.nota >= 7 ? ' aprovado' : ' reprovado'

    return (
        <div>
            <h2>
                <strong>{ props.aluno }</strong>
                , nota: <strong>{ props.nota }</strong>
                <strong>{ status }</strong>
            </h2>
        </div>
    )
}