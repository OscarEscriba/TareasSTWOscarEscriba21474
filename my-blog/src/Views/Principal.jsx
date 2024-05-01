import React, {useState, useEffect} from "react"; 
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";


/* datos de la base de datos
- usuario root
- contrasenia BaseDeDatosApi
*/

const Principal = () =>  {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    // funcion para manejar el estado de expansion de la tarjeta
    const [expandedIndex, setExpandedIndex] = useState(null); 

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
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '100%',
        marginTop: '20px',
        cursor: 'pointer'
    }
    const infoContainer = {
        display: 'flex',
        flexDirection: 'row', // Alinear las tarjetas en una fila
        flexWrap: 'wrap', // Permitir que las tarjetas pasen a la siguiente línea si no caben en el ancho de la pantalla
        gap: '20px', // Espacio entre las tarjetas
        width: '100%', // Ancho máximo del contenedor de tarjetas
        marginTop: 0, // Espacio superior para separar las tarjetas del Header
    }
    const cardsContainter = {
        marginLeft: '20%',
        maxHeight: '100vh', // Altura máxima del contenedor de las tarjetas
        overflowY: 'auto' // Agrega scroll vertical si el contenido excede la altura máxima
      }

    return (
        <div className="Principal" style={conteinerStyle}>
            <div style={HeaderStyle}>
                <Header name="Blog Tecnologico"/>
            </div>
            <div style={infoContainer}>
            <div style={SidebarStyle}>
            <Sidebar />
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
                            <div key={index} className="card" style={cardStyle}>
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