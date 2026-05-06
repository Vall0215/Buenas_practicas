import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component from './componente'

function App() {
 const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Hola parceros</h1>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
      <button onClick={() => setContador(0)}>Resetiar</button> 
      <Component texto={contador} />
    </div>
  )
}

export default App
