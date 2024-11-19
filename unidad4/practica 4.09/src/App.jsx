import { useState } from 'react';
import './App.css'
import Localizador from './componentes/Ejercicio01/Localizador'
import Colorines from './componentes/Ejercicio02/Colorines';

function App() {
  const valorInicial = true;;
  const [mostrar, setMostrar] = useState(valorInicial);

  const montarDesmontar = ()=>{
    setMostrar(!mostrar);
  }
  return (
    <>
      <div>
        <button onClick={()=>{
          montarDesmontar();
        }}>Montar/Desmontar componente</button>
        <div>
          {mostrar && <Localizador/>}
          {mostrar && <Colorines/>}
        </div>
      </div>
    </>
  )
}

export default App
