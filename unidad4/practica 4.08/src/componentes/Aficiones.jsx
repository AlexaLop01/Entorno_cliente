import React from 'react';
import "./Aficiones.css"

const Aficiones = (props) => {
    //Javascript
    const {aficiones} = props;
  return (
    //JSX
    <>
    <div className='contendor-aficiones'>
        {aficiones.map((aficion, indice)=>{
                return(
                    <p key={indice} className='elemento-aficion'> {aficion}</p>
                );
            })
        }

    </div>
    </>
  )
}

export default Aficiones;