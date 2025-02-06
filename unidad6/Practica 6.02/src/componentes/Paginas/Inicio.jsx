import React from 'react';
import './Inicio.css';
import ListaCompra from '../ListasCompra/ListaCompra';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h2 className="inicio-title">Inicio</h2>
      <p className="inicio-description">
        Bienvenido a mi aplicación de lista de compras. Esta app está
        desarrollada utilizando React (jsx) y Supabase para ofrecer una experiencia
        moderna y sencilla al gestionar tus compras. :)
        <ListaCompra/>
      </p>
    </div>
  );
};

export default Inicio;
