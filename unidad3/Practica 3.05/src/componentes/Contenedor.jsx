import "../css/Contenedor.css";

const Contenedor = (props) =>{

    //Javascript
    const { children } = props;

    return(
        //JSX
        <>
            <div id='contenedor-contenedor'>{children}</div>  
        </>
    );
};

export default Contenedor;