import './App.css';
import Discentes from './componentes/Discentes.jsx';
import Listado from './componentes/Listado.jsx';
import listadoDiscientes from "./objetos/matriculados.json";

function App() {

  return (
    <>
      <Listado/>
      <Discentes discentes ={listadoDiscientes.discentes}/>
    </>
  )
}

export default App;
