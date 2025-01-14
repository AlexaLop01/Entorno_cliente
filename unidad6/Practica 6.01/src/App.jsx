
import './App.css'
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Rutas from './componentes/Rutas/Rutas.jsx';
import Navegacion from './estructura/Navegacion.jsx';
import Pie from './estructura/Pie.jsx';
import ProveedorSesion from './contextos/ProveedorSesion.jsx';

function App() {

  return (
    <>
    <ProveedorSesion>
      <Cabecera/>
      <Navegacion/>
      <Contenido>
        <Rutas/>
      </Contenido>
      <Pie/>

    </ProveedorSesion>
    </>
  )
}

export default App
