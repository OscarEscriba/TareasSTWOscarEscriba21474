import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '@fontsource/jersey-20'; // Importa la fuente Jersey 20
import LogoSVG from '../logoApp.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Styles.css';  // importamos los estilos que queremos utilizar...
import AddPostModal from './PostModal';
import Button from './Button'; 
import { Link } from 'react-router-dom';
import SidebarMenu from './SideBarMenu';
// la font a utilizar: 

/* 
npm install @fontsource/jersey-20
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install axios
*/

const Header = (props) => {
    // el modal para ingresar un nuevo POST
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar si el menú lateral está abierto


     // Función para manejar el cambio de categoría seleccionada
     const handleCategoryClick = (category) => {
        props.onCategoryChange(category);
      };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    // Agrega isSidebarOpen como una prop en SidebarMenu
<SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    const HeaderStyle = { 
        textAlign: "center", 
        color: 'white', 
        backgroundColor: '#114c5f', 
        height: "27vh", // altura del header...
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
        fontSize: '7.5vh',
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
        marginLeft: '2%',
        height: '2vh',
        marginBottom: '3vh'
    }
    
    const buttonText = {
        marginRight: '1px', // Espacio entre el ícono y el texto
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
        alignItems: 'center',
        fontSize: '2.5vh'

    }

    // ------ M E T O D O S ----------

  return (
    <header style={HeaderStyle}>
        <div className='DivGeneral' style={DivGeneral} >

            <div className='DivTextoYtitulo' style={TextoYTitulo}>
        <div style={LogoContainerStyle}> 
        <img src={LogoSVG} alt='Logo' style={{ width: '20vh', height: '20vh' }} />
        </div>
        <h1 style={estiloTexto}>{props.name}</h1>
        </div>

      <div style={buttonStyle}>
        <div>
        <div className="user-button" onClick={openSidebar}>USUARIO</div>
        </div>
        <div>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <h3 onClick={openModal} style={buttonText}>Agregar post </h3>
        {/* Renderiza el modal si isModalOpen es true */}
        {isModalOpen && <AddPostModal closeModal={closeModal} />}
        </div>
      </div>
      <hr style={separatorStyle} />

      <nav style={Menu}>
                    <ul style={ListadoMenu}>
                        {props.categorias.map((category, index) => (
                            <li key={index} onClick={() => handleCategoryClick(category)}  style={{ cursor: 'pointer', margin: '0 5vh' }}> 
                                 <Link
                                    to={`/${category}`}
                                    style={{ color: props.vistaActual === category ? 'red' : 'white' }}
                                    onClick={() => handleCategoryClick(category)}
                                     >
                                   {category}
                                 </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
      </div>
      <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

// Definición de PropTypes
Header.propTypes = {
  name: PropTypes.string.isRequired,
  categorias: PropTypes.array.isRequired,
   // onCategoryChange: PropTypes.func.isRequired,
    vistaActual: PropTypes.string.isRequired
};

export default Header;