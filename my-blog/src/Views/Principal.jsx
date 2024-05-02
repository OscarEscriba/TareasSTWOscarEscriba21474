import React, {useState, useEffect} from "react"; 
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import tuImagen from './imagenFondo.jpg'; 
import { useLocation } from "react-router-dom";
import SidebarMenu from "../Components/SideBarMenu";
//import axios from "axios";

/* datos de la base de datos
- usuario root
- contrasenia BaseDeDatosApi
*/

const Principal = () =>  {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    // funcion para manejar el estado de expansion de la tarjeta
    const [expandedIndex, setExpandedIndex] = useState(null); 
    // funcion para lo de las categorias
    const [categoriaActual, setCategoriaActual] = useState('');
    const location = useLocation();
    const rutaActual = location.pathname;
    const nombreRuta = rutaActual.split('/').pop(); // Obtén el último segmento de la ruta

const [isModalOpen, setIsModalOpen] = useState(false);

        // Dentro del componente Principal
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const openSidebar = () => {
    setIsSidebarOpen(true);
};

const closeSidebar = () => {
    setIsSidebarOpen(false);
};

    useEffect(() => {
        fetchData(); // Llama a la función fetchData al montar el componente
      }, []);

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/posts');
          const data = await response.json();
    
          if (data.length === 0) {
            // Si no hay datos, establece el estado de loading en falso
            setLoading(false);
          } else {
            // Si hay datos, establece el estado de las noticias y el estado de loading en falso
            setNews(data);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          // En caso de error, establece el estado de loading en falso
          setLoading(false);
          // Podrías manejar el error de otra manera, como mostrando un mensaje de error al usuario
        }
      };
      // para hacer lo de la categoria
      const handleCategoryChange = (categoria) => {
        setCategoriaActual(categoria);
        console.log(`Categoría seleccionada: ${categoria}`);
    };
      // Función para manejar el evento de clic en la tarjeta
        const handleCardClick = (index) => {
            if (expandedIndex === index) {
             // Si la tarjeta ya está expandida, ciérrala
             console.log("cerrada");
                setExpandedIndex(null);
            } else {
                // Si la tarjeta está cerrada, ábrela
                console.log("abierta");
                setExpandedIndex(index);
            }
        };

// ----- STYLE PART -----
    const conteinerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding:0,
        border: 'none'
    }
    const HeaderStyle = {
        padding: 0,
        border: 'none'
    }
    const SidebarStyle = {
        padding: 0,
        border: 'none' 
    }
    const cardStyle = {
        backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Agregar sombra para un efecto 3D
    border: '2px solid #00f', // Borde neon azul
    overflow: 'hidden',
    width: '100%',
    marginTop: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Agregar transición para efecto al pasar el mouse
    transform: 'perspective(500px) rotateY(0deg)', // Inicialmente no rotado
    zIndex: isModalOpen ? 0 : 2 // Define el z-index de las tarjetas dependiendo de si el modal está abierto o no

    }
     // Agregar efecto de rotación al pasar el mouse sobre la tarjeta
const handleCardHover = (event) => {
    event.currentTarget.style.transform = 'perspective(500px) rotateY(10deg)';
};

// Agregar efecto de rotación al retirar el mouse de la tarjeta
const handleCardLeave = (event) => {
    event.currentTarget.style.transform = 'perspective(500px) rotateY(0deg)';
};
    const infoContainer = {
        display: 'flex',
        justifyConten: 'center',
        flexDirection: 'row', // Alinear las tarjetas en una fila
        flexWrap: 'wrap', // Permitir que las tarjetas pasen a la siguiente línea si no caben en el ancho de la pantalla
        gap: '20px', // Espacio entre las tarjetas
        width: '100%', // Ancho máximo del contenedor de tarjetas
        marginTop: 0, // Espacio superior para separar las tarjetas del Header
        overflowY: 'hidden', // Oculta el scroll vertical
        backgroundImage: `url(${tuImagen})`, // Ajusta la ruta de la imagen
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita

    }
    const cardsContainter = {
       // marginTop: '2%',
        display: 'flex',
        flexDirection: 'column', // Alinear las tarjetas en una columna
        justifyContent: 'center', // Centrar las tarjetas horizontalmente
        alignItems: 'center', // Centrar las tarjetas verticalmente
        width: '100%', // Ocupa todo el ancho de la pantalla
        padding: '0 20%', // Agrega relleno horizontal para centrar las tarjetas
        boxSizing: 'border-box', // Incluye el relleno en el ancho total del contenedor
        maxHeight: '100vh', // Altura máxima del contenedor de las tarjetas
        overflowY: 'auto', // Agrega scroll vertical si el contenido excede la altura máxima
        scrollbarWidth: 'none', // Oculta la barra de desplazamiento en Firefox
        '-ms-overflow-style': 'none', // Oculta la barra de desplazamiento en Internet Explorer y Edge
        '&::-webkit-scrollbar': {
            display: 'none' // Oculta la barra de desplazamiento en Chrome, Safari y Opera
        },
        
    }

    return (
        <div className="Principal" style={conteinerStyle}>
            <div style={HeaderStyle}>
                <Header name="Blog Tecnologico"
                 categorias={['Principal','Tecnologia', 'Ciencia', 'IA', 'Electronicos']} 
                 onCategoryChange={handleCategoryChange} 
                 vistaActual={nombreRuta}
                 openSidebar={openSidebar} // Paso de la función para abrir el menú lateral
                />
                <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
            </div>
            <div style={infoContainer} className="background-container">
            <div style={SidebarStyle}>
            
            </div>
            <div style={cardsContainter}>
                {loading ? ( 
                    // si el loading es true, muestra un indicador de carga. 
                    <div> Cargando... </div> 
                ): news.length ===0 ? (
                    // si mo hay noticias, muetra un mensaje de estado vacio. 
                    <div> No hay datos cargados </div>
                ) : (
                    // Si hay noticias, renderiza las tarjetas de noticias
                    <div>
                        {news.map((item, index) => (
                            <div key={index} className="card" style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
                            <Card
                                key={index}
                                nombre={item.title}
                                descripcion={item.content.substr(0, 100) + '...'}
                                imagenUrl={item.imagenUrl}
                                imgStyle={{ width: '100%', height: 'auto' }}
                                containerStyle={{ padding: '20px', textAlign: 'left' }}
                                titleStyle={{ marginTop: '0' }}
                                descriptionStyle={{ marginBottom: '0' }}
                                onClick={() => handleCardClick(index)}
                            />
                            {expandedIndex === index && (
                            <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
                                <p>{item.content}</p>
                            </div>
                            )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>
            </div>
    )
}
export default Principal;