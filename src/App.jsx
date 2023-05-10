import React from 'react'
import './App.css'

// Link to os Compenents //
import TabelaProdutos from './components/repetition/TabelaProdutos'
import ListaAlunos from './components/repetition/ListaAlunos'
import FamiliaMembro from './components/basics/FamiliaMembro'
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
            <Card titulo = '#07 - Desafio Repetition' color = '#b684ab'>
                <TabelaProdutos>
                </TabelaProdutos>
            </Card>

            <Card titulo = '#06 - Repetition' color = '#1E90FF'>
                <ListaAlunos>

                </ListaAlunos>
            </Card>

            <Card titulo = '#05 - Components with Children' color = '#F5DEB3'>
                <Familia sobrenome = 'GETEC'>
                <FamiliaMembro nome = 'Weney' />
                <FamiliaMembro nome = 'Raphael' />
                <FamiliaMembro nome = 'Felipe' />
                </Familia>
            </Card>

            <Card titulo = '#04 - Random Challenge' color = '#080'>
                <Random min={1} max={60}/>
            </Card>

            <Card titulo = '#03 - Fragment' color = '#000'>
                <Fragment />
            </Card>

            <Card titulo = '#02 - With Parameter' color ='#191970'>
                <ComParametro
                    titulo = 'Situação do Aluno'
                    aluno='Angelo'
                    nota={6.2}/>
            </Card>

            <Card titulo = '#01 - First Component' color = '#00FA9A'>
                <Primeiro
                    component = "Primeiro Componente"/>
            </Card>

        </div>
        </div>
    )
}
