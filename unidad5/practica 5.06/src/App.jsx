import './App.css'
import ProveedorPeliculas from './componentes/contexto/ProveedorPeliculas.jsx';
import ListadoPeliculas from './componentes/estructuraListas/peliculas/ListadoPeliculas.jsx';

function App() {

  return (
    <>
      <ProveedorPeliculas>
        <ListadoPeliculas />  

      </ProveedorPeliculas>
    </>
  )
}

export default App
