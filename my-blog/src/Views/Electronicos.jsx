import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { useLocation } from "react-router-dom";
import tuImagen from './ImagenElectronicos.jpg';
import './Styles.css';

const Electronicos = () => {
    const location = useLocation();
    const rutaActual = location.pathname;
    const nombreRuta = rutaActual.split('/').pop();
    const [electronicosPosts, setElectronicosPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/posts`);
            const data = await response.json();
            const electronicosPosts = data.filter(post => post.category === 'Electronicos');
            setElectronicosPosts(electronicosPosts);
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
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        border: '2px solid #00f',
        overflow: 'hidden',
        width: '100%',
        marginTop: '50px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: 'perspective(500px) rotateY(0deg)',
        zIndex: isModalOpen ? 0 : 2
    };

    const content = {
        display: 'flex',
        height:'73vh',
        justifyContent: 'center',
        backgroundImage: `url(${tuImagen})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const messageStyle = {
        fontSize: '24px',  // Tamaño de fuente más grande
        fontWeight: 'bold',  // Texto en negrita
        color: '#f00',  // Color de texto rojo (puedes ajustarlo según tu preferencia)
        textAlign: 'center',  // Alineación centrada
        animation: 'pulse 1s infinite alternate',  // Animación de pulsación
    };
    return (
        <div className="Principal">
            <Header 
                name="Blog Tecnologico" 
                categorias={['Principal','Tecnologia', 'Ciencia', 'IA', 'Electronicos']} 
                vistaActual={nombreRuta} 
            />
            <div style={content}>
                <div style={cardsContainerStyle}>
                    {loading ? (
                        <div>Cargando...</div>
                    ) : electronicosPosts.length === 0 ? (
                        <div style={messageStyle}>No hay noticias de Electronicos disponibles.</div>
                    ) : (
                        electronicosPosts.map((post, index) => (
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
};

export default Electronicos;
