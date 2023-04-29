import React from 'react'
import './App.css'

// Link to os Compenents //
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/Layout/Card'
import Familia from './components/basics/Familia'

export default function App() {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className='Cards'>
            <Card titulo = '#05 - Componentes com Filhos' color = '#F5DEB3'>
                    <Familia sobrenome = 'GETEC'/>
                </Card>

                <Card titulo = '#04 - Desafio Aleatorio' color = '#080'>
                    <Random min={1} max={60}/>
                </Card>

                <Card titulo = '#03 - Fragment' color = '#000'>
                    <Fragment />
                </Card>

                <Card titulo = '#02 - Com Parametro' color ='#191970'>
                <ComParametro
                    titulo = 'Situação do Aluno'
                    aluno='Junior'
                    nota={9.2}/>
                </Card>

                <Card titulo = '#01 - Primeiro Componente' color = '#00FA9A'>
                <Primeiro
                    component = "Primeiro Componente"/>
                </Card>

        </div>
        </div>
    )
}
