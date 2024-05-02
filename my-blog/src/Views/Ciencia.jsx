import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Principal from "./Principal";
import tuImagen from './ImagenCiencia.jpg'
import './Styles.css';
const Ciencia = () => {
// Establecer el estado de la categoría seleccionada
const location = useLocation();
const rutaActual = location.pathname;
const nombreRuta = rutaActual.split('/').pop(); // Obtén el último segmento de la ruta
const [cienciaPosts, setCienciaPosts] = useState([]); // Estado para almacenar los posts de Ciencias
const [loading, setLoading] = useState(true);
const [expandedIndex, setExpandedIndex] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
    fetchData();
}, []);

    // Función para obtener los posts de la categoría "Tecnologia"
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/posts`);
            const data = await response.json();
            // Filtrar los posts que tienen la categoría "Ciencias"
            const cienciaPosts = data.filter(post => post.category === 'Ciencias');
            setCienciaPosts(cienciaPosts);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
        }
    };

    const handleCardClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };
    const handleCardHover = (event) => {
        event.currentTarget.style.transform = 'perspective(500px) rotateY(10deg)';
    };

    const handleCardLeave = (event) => {
        event.currentTarget.style.transform = 'perspective(500px) rotateY(0deg)';
    };
// Función para manejar el cambio de categoría
const handleCategoryChange = (categoria) => {
    console.log(`Categoría seleccionada: ${categoria}`);
};

const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0 20%',
    boxSizing: 'border-box',
    maxHeight: '100vh',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
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
const content = { 
    display: 'flex', 
    height: '73vh',
    justifyContent: 'center',
    backgroundImage: `url(${tuImagen})`, // Ajusta la ruta de la imagen
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
}
const messageStyle = {
    fontSize: '24px',  // Tamaño de fuente más grande
    fontWeight: 'bold',  // Texto en negrita
    color: '#f00',  // Color de texto rojo (puedes ajustarlo según tu preferencia)
    textAlign: 'center',  // Alineación centrada
    animation: 'pulse 1s infinite alternate',  // Animación de pulsación
};
return ( 
    <div className="Principal">
        {/* Pasar la categoría seleccionada y la función para manejar el cambio de categoría */}
        <Header 
            name="Blog Tecnologico" 
            categorias={['Principal','Tecnologia', 'Ciencia', 'IA', 'Electronicos']} 
            onCategoryChange={handleCategoryChange} 
            vistaActual={nombreRuta} 
        />
         <div style={content}>
                <div style={cardsContainerStyle}>
                    {loading ? (
                        <div>Cargando...</div>
                    ) : cienciaPosts.length === 0 ? (
                        <div style={messageStyle}>No hay noticias de Ciencias disponibles.</div>
                    ) : (
                        cienciaPosts.map((post, index) => (
                            <div key={index} className="card" style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
                                <Card
                                    nombre={post.title}
                                    descripcion={post.content.substr(0, 100) + '...'}
                                    imgStyle={{ width: '100%', height: 'auto' }}
                                    containerStyle={{ padding: '20px', textAlign: 'left' }}
                                    titleStyle={{ marginTop: '0' }}
                                    descriptionStyle={{ marginBottom: '0' }}
                                    onClick={() => handleCardClick(index)}
                                />
                                {expandedIndex === index && (
                                    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
                                        <p>{post.content}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
    </div>
);
}
export default Ciencia;