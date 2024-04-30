import React, { useState, useEffect } from 'react';

function Sidebar() {
  const [news, setNews] = useState([]);
  const [activeLink, setActiveLink] = useState(null);

  // Método para obtener las noticias del API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/posts');
        const data = await response.json();
        setNews(data); // Almacenar las noticias en el estado
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Ejecutar solo al montar el componente

  // Función para manejar el clic en un título de noticia
  const handleLinkClick = (index) => {
    setActiveLink(index);
    // Obtener el elemento de la tarjeta de noticias correspondiente
    const cardElement = document.getElementById(`card-${index}`);
    // Desplazarse a la tarjeta de noticias correspondiente
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', 
    width: '200px', 
    backgroundColor: 'blue', 
    color: 'white'
  }
  return (
    <aside style={sidebarStyle}>
      <h2>Noticias</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <a
              href={`#card-${index}`}
              className={activeLink === index ? 'active' : ''}
              onClick={() => handleLinkClick(index)}
              style={{ color: 'white' }} // Esto le cambia el color al texto.
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
