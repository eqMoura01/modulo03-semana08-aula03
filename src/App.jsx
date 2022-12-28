import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Logos } from './Logos'
import { NomeUsuario } from './NomeUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*Componente abaixo responsavel pelas logos*/}
      <Logos />
      {/*Componente abaixo responsavel pelo Hello World! exibido na pagina. 
        Alterando a propriedade 'texto', irá alterar na pagina.*/}
      <HelloWorld texto={"Hello World!"} />

      {/*Componente abaixo responsavel pelo nome que é exibido na pagina. 
        Alterando a propriedade 'nomeUsuario', irá alterar na pagina.*/}
      <NomeUsuario nomeUsuario={"Victor Mora"} />
    </div>
  )
}

export default App