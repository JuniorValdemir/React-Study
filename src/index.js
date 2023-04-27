// Link to ReactDom //
import ReactDOM from 'react-dom'

// Link to React to use JSX //
import React from 'react'

// Link to CSS //
import './index.css'

// Link to os Compenents //
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'


ReactDOM.render(
    <div>
        <Primeiro
        linha = 'Relatorio'
        ></Primeiro>
        <ComParametro
            aluno = 'Junior' 
            nota =  { 9.2 }
        />
        <ComParametro
            aluno = 'Felipe' 
            nota =  { 6.2 }
        />
    </div>,

    //Link for the Header Main//
    document.getElementById('root')
    )