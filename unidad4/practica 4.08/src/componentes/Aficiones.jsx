import React from 'react';

const Aficiones = (props) => {
    //Javascript
    const {aficiones} = props;
  return (
    //JSX
    <>
    <div>
        {aficiones.lenght ? 
            aficiones.map((aficion)=>{
                return(
                    aficion
                )
            })
        : "No se ha encontrado ninguna aficion"}
    </div>
    </>
  )
}

export default Aficiones;