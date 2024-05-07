import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import tuImagen from './ImagenCiencia.jpg';
import useApi from "../Views/useApi.ts";

import './Styles.css';

const Ciencia = () => {
  const location = useLocation();
  const rutaActual = location.pathname;
  const nombreRuta = rutaActual.split('/').pop(); 
  const [Loading, setLoading] = useState(true);
  const [cienciaPosts, setCienciaPosts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getData, filterDataByCategory, data: news, loading, error } = useApi();
  useEffect(() => {
      const fetchData = async () => {
          await getData(); // Llama a la función getData al montar el componente
          console.log('estas son las noticias', news); // Imprime la información obtenida en la consola
          setLoading(false); // Establece el estado de carga en falso cuando los datos se han cargado
      };
  
      fetchData();
  }, [getData]); // Solo ejecutar useEffect cuando getData cambia

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
    height: '73vh',
    justifyContent: 'center',
    backgroundImage: `url(${tuImagen})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f00',
    textAlign: 'center',
    animation: 'pulse 1s infinite alternate',
  };

  return ( 
    <div className="Principal">
      <Header 
        name="Blog Tecnologico" 
        categorias={['Principal','Tecnologia', 'Ciencia', 'IA', 'Electronicos']} 
        onCategoryChange={handleCategoryChange} 
        vistaActual={nombreRuta} 
      />
      <div style={content}>
        <div style={cardsContainerStyle}>
        {Loading ? ( 
                    // si el loading es true, muestra un indicador de carga. 
                    <div> Cargando... </div> 
                ): news.length ===0 ? (
                    // si mo hay noticias, muetra un mensaje de estado vacio. 
                    <div> No hay datos cargados </div>
                ) : (
                    // Si hay noticias, renderiza las tarjetas de noticias
                    <div>
                         {news.filter(item => item.Categoria === 'Ciencia').map((item, index) => (
                            <div key={index} className="card" style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
                            <Card
                                key={index}
                                nombre={item.Titulo}
                                descripcion={item.Contendio ? item.Contendio.substr(0, 100) + '...' : ''}
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
  );
};

export default Ciencia;
