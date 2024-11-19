import { useState } from 'react';
import './App.css'
import Localizador from './componentes/Ejercicio01/Localizador.jsx';
import Colorines from './componentes/Ejercicio02/Colorines.jsx';
import ContadorClics from './componentes/Ejercicio03/ContadorClics.jsx';
import Cronometro from './componentes/Ejercicio04/Cronometro.jsx';

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
          {mostrar && <ContadorClics/>}
        </div>

        <Cronometro/>
      </div>
    </>
  )
}

export default App
