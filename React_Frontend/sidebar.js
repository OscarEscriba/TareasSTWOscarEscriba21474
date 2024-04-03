function Sidebar(props) {
  const [news, setNews] = React.useState([]);
  const [activeLink, setActiveLink] = React.useState(null);

  // Método para obtener las noticias del API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
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

  return (
    <aside style={{ height: '100vh', width: '200px', backgroundColor: 'blue', color: 'white' }}>
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

window.Sidebar = Sidebar;

