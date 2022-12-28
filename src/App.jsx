import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Logos } from './Logos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*Componente abaixo responsavel pelas logos*/}
      <Logos />
      {/*Componente abaixo responsavel pelo Hello World! exibido na pagina. 
        Alterando a propriedade 'texto', irá alterar na pagina.*/}
      <HelloWorld texto={"Hello World!"} />
    </div>
  )
}

export default App