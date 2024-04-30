import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/jersey-20'; // Importa la fuente Jersey 20

// la font a utilizar: 

// npm install @fontsource/jersey-20

const Header = (props) => {
    const Header = { 
        textAlign: "center", 
        color: 'white', 
        backgroundColor: '#114c5f', 
        height: "100px", 
        display: "flex",
        justifyContent: "center", 
        alignItems: 'center',
        width: "100%", 
        paddin:'none', 
        border:0,

    }
    const estiloTexto = {
        fontFamily: '"Jersey 20", sans-serif',  // Establece la fuente como "Jersey 20"
        color: '#39FF14',
        fontSize: '10vh',
        letterSpacing: '2vh' /* Aumenta el espaciado entre letras */

    }
  return (
    <header style={Header}>
      <h1 style={estiloTexto}>{props.name}</h1>
    </header>
  );
};

// Definición de PropTypes
Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;