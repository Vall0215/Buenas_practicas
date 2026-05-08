import { useState } from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta'

function App() {
  const [contador, setContador] = useState(0)
  const [nombre, setNombre] = useState('')

  const incrementar = () => {
    setContador(contador + 1)
  }

  const disminuir = () => {
    setContador(contador - 1)
  }

  const resetear = () => {
    setContador(0)
  }

return (
  <div className="contenedor">

    <h1>Proyecto React con Props y State</h1>

    <h2 className="contador">
      Clicks realizados: {contador}
    </h2>

    <div className="botones">
      <button onClick={incrementar}>Agregar click</button>
      <button onClick={disminuir}>Quitar click</button>
      <button onClick={resetear}>Reiniciar contador</button>
    </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <h3>Hola {nombre}</h3>
      </div>

      <div className="tarjetas-container">
        <Tarjeta
          titulo="React"
          imagen="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          descripcion="React es una biblioteca de JavaScript para construir interfaces de usuario."
          botonTexto="Me gusta React"
          accionBoton={() => alert('Te gusta React')}
        />

        <Tarjeta
          titulo="Vite"
          imagen="https://vitejs.dev/logo.svg"
          descripcion="Vite es una herramienta moderna para desarrollar proyectos frontend rápidamente."
          botonTexto="Me gusta Vite"
          accionBoton={() => alert('Te gusta Vite')}
        />

        <Tarjeta
          titulo="JavaScript"
          imagen="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          descripcion="JavaScript es el lenguaje principal para desarrollo web interactivo."
          botonTexto="Me gusta JavaScript"
          accionBoton={() => alert('Te gusta JavaScript')}
        />
      </div>
    </div>
  )
}

export default App