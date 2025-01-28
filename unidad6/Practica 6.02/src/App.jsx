import './App.css'
import ProveedorSesion from './contextos/ProveedorSesion.jsx';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Pie from './estructura/Pie.jsx';
import Rutas from './componentes/Rutas/Rutas.jsx';
import Navegacion from './estructura/Navegacion.jsx';

function App() {

  return (
    <>
      <ProveedorSesion>
          <Cabecera>
            <Navegacion/>
          </Cabecera>
          <Contenido>
            <Rutas/>
          </Contenido>
          <Pie/>
      </ProveedorSesion>
    </>
  )
}

export default App
