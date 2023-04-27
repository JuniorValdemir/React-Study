import React from 'react'

// Link to os Compenents //
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'

export default function App () {
    return (
        <div id='app'>
            <h1>Fundamentos React 2</h1>
            <Fragment
            />
            <ComParametro
                aluno='Junior'
                nota={9.2}
            />
            <Primeiro
            />
        </div>
    )
}
