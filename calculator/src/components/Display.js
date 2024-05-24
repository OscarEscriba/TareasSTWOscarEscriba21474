import React from 'react';

const Display = ({ valorAnterior, valorActual, tipoOperacion }) => {
  return (
    <div className="display">
      <div id="valor-anterior">{valorAnterior} {tipoOperacion}</div>
      <div id="valor-actual">{valorActual}</div>
    </div>
  );
};

export default Display;
