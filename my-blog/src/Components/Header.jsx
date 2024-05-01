import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/jersey-20'; // Importa la fuente Jersey 20
import LogoSVG from '../logoApp.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Styles.css';  // importamos los estilos que queremos utilizar...

// la font a utilizar: 

/* 
npm install @fontsource/jersey-20
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
*/

const Header = (props) => {
    const Header = { 
        textAlign: "center", 
        color: 'white', 
        backgroundColor: '#114c5f', 
        height: "35vh", // altura del header...
        display: "flex",
        flexDirection: 'column',
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
        letterSpacing: '2vh', /* Aumenta el espaciado entre letras */
        animation: 'moveUp 1.5s infinite, changeColor 3s infinite'
    }
    const LogoContainerStyle = {
        marginRight: '10px', // Espacio entre el logo y el título
      }
    const buttonStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
       // marginLeft: 'auto', // Coloca el botón al final del header
        marginRight: '2%', // Añade un espacio entre el botón y el texto
        marginLeft: '2%'
    }
    
    const buttonText = {
        marginRight: '10px', // Espacio entre el ícono y el texto
    }
    const TextoYTitulo = {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 0,
        border: 0, 
        height: '15vh'
    }

    const separatorStyle = {
        border: 'none',
        borderBottom: '1px solid white',
        width: '100%', // La línea ocupa todo el ancho del header
        margin: '1px 0', // Espacio vertical entre el texto y la línea
    }
    const DivGeneral ={
        width: "100%",
        height: "100%",
        border: 0,
        padding: 0
    }
    const Menu = {
        display: 'flex', 
        justifyContent: 'center' 
    }
    const ListadoMenu = {
        listStyleType: 'none', 
        padding: '0', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center' 
    }
    // configuracion para el menu de opciones desplegables...
    const categorias = ['Tecnologia','Ciencia','Inteligencia Artificial','Electronicos']; 
    // ------ M E T O D O S ----------
    const handleCategoryClick = (category) => {
        // Aquí puedes manejar la navegación a las noticias relacionadas con la categoría seleccionada
        console.log(`Navegar a noticias de la categoría: ${category}`);
    };

  return (
    <header style={Header}>
        <div className='DivGeneral' style={DivGeneral} >

            <div className='DivTextoYtitulo' style={TextoYTitulo}>
        <div style={LogoContainerStyle}> 
        <img src={LogoSVG} alt='Logo' style={{ width: '20vh', height: '20vh' }} />
        </div>
        <h1 style={estiloTexto}>{props.name}</h1>
        </div>

      <div style={buttonStyle}>
        <div>
            <h1> USUARIO </h1>
        </div>
        <div>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <span style={buttonText}>Agregar post </span>
        </div>
      </div>
      <hr style={separatorStyle} />

      <nav style={Menu}>
                    <ul style={ListadoMenu}>
                        {categorias.map((category, index) => (
                            <li key={index} onClick={() => handleCategoryClick(category)} style={{ cursor: 'pointer', margin: '0 5vh' }}> 
                                {category}
                            </li>
                        ))}
                    </ul>
                </nav>
      </div>
    </header>
  );
};

// Definición de PropTypes
Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;