import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Localizador from './componentes/Ejercicio01/Localizador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Localizador/>
    </>
  )
}

export default App
