import React from 'react';

const Card = ({ nombre, descripcion, imagenUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagenUrl} alt="Avatar" />
      <div className="container">
        <h4><b>{nombre}</b></h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
