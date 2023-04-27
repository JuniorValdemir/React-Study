import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'


ReactDOM.render(
    <div>
        <Primeiro
        linha = 'Escola Teste'
        ></Primeiro>
        <ComParametro 
            titulo = "Nome do Aluno e Nota" 
            aluno = "Junior"
            nota = {9.5}
        
        />

        <ComParametro 
            aluno = "Maria"
            nota = { 6.8 }
        
        />
    </div>,
    document.getElementById('root')
    )