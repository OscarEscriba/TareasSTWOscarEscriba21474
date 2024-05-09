import React, { useEffect } from 'react';
import useApi from './useApi.ts'; // Asegúrate de importar tu hook desde la ruta correcta

const Eliminar = () => {
  const { data, loading, error, getData, deleteData } = useApi();

  useEffect(() => {
    // Llama a getData al montar el componente para obtener los datos
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      // Después de eliminar, puedes volver a cargar los datos para actualizar la vista
      getData();
    } catch (error) {
      console.error('Error al eliminar el dato:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '80%',
    maxWidth: '600px',
  };

  const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.map((item, index) => (
        <div key={index} style={cardStyle}>
          <p>Título: {item.Titulo}</p>
          <p>Contenido: {item.Contenido}</p>
          <p>id: {item.id}</p>
          <button style={buttonStyle} onClick={() => handleDelete(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Eliminar;

