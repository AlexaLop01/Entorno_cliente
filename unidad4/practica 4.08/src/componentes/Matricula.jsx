import {useState} from 'react';
import Discentes from './Discentes.jsx';
import listadoDiscientes from "../objetos/matriculados.json";


const Matricula = () => {
    //Javascript
    const valorInicial = listadoDiscientes.discentes;
    const [discentes, setDiscentes] = useState(valorInicial);
    const [ordenar, setOrdenar] = useState("asc")

    //Función de filtrado por 2DAW.
    const filtrar2DAW =()=>{
      const filtro2daw = discentes.filter((discente)=>{
        return discente.curso === "2DAW";
      })
      setDiscentes(filtro2daw);
    }

    //Función de filtrado por primer curso.
    const filtradoPrimerCurso =()=>{
      const filtroPrimerCurso = discentes.filter((discente)=>{
        return discente.curso.startsWith('1');//Usamos starWith para verificar que empieza por 1.
      })
      setDiscentes(filtroPrimerCurso);
    }
    //Función para filtrar por DAW.
    const filtrarPorDAW =()=>{
      const filtroDAW = discentes.filter((discente)=>{
        return discente.curso.includes('DAW'); //El includes es para verificar que contiene esa palabra.
      })
      setDiscentes(filtroDAW);
    }
    //Función para filtrar por Afición de lectura.
    const filtrarPorAficion =()=>{
      const filtroAficion = discentes.filter((discente)=>{
        return discente.aficiones.includes("lectura");
      })
      setDiscentes(filtroAficion);
    }
    //Función para filtrar por Apellido.
    const filtrarPorApellido =()=>{
      //Cambiamos el orden según como esté ese orden actualmente.
      const nuevoOrden = ordenar === "asc" ? "desc" : "asc";
      const ordenDiscientes = [...discentes].sort((a, b)=>{
        if(nuevoOrden === "asc"){
          return a.apellidos.localeCompare(b.apellidos);
        }
        return b.apellidos.localeCompare(a.apellidos);

      });
      setOrdenar(nuevoOrden);
      setDiscentes(ordenDiscientes);
    }

    //Función para reiniciar el listado de discentes.
    const reiniciarListado = () =>{
      setDiscentes(valorInicial);
    }

    //Función para eliminar el discente que clicamos en la lista.
    const eliminarDiscenteLista = (identificador) =>{
      
      const unicoDiscente = discentes.filter((discente)=>{
        return discente.id !== identificador;
      })
      setDiscentes(unicoDiscente);
    }
  return (
    //JSX
    <>
    <div>
        <h2>Discentes filtrados por: </h2>
        <button onClick={()=>{
          filtrar2DAW();
        }}>2º DAW</button>

        <button onClick={()=>{
          filtradoPrimerCurso();
        }}>Primer curso</button>

        <button onClick={()=>{
          filtrarPorDAW();
        }}>DAW</button>

        <button onClick={()=>{
          filtrarPorAficion();
        }}>Aficion lectura</button>

        <button onClick={()=>{
          filtrarPorApellido();
        }}>Apellidos</button>

        <button onClick={()=>{
          reiniciarListado();
        }}>Reiniciar Listado</button>
        {/*El último sería que al clicar en un discente desaparezca el listado. */}
      
      <div className='contenedor-discentes-matricula'>
        {/*El onClickDiscente es para poder pasarselo al componente Discentes por props. */}
          <Discentes discentes={discentes} onClickDiscente={eliminarDiscenteLista}/>
      </div>
        
    </div>
    </>
  )
}

export default Matricula;