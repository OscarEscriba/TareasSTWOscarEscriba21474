import './App.css';
import React from 'react';
import Button from './Componentes/Buttons';
import Header from './Componentes/Header';
const App = () => {
  const handleClick = () => {
    alert('Hacer click en el boton')
  }; 

  return (
    <div> 
      <Header />
      <h1> PRUEBA DE BOTON </h1>
      <Button onClick={handleClick} text="Haz click en el boton" />
    </div>
  )
}

export default App;
