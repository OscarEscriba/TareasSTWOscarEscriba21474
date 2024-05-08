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

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.map((item, index) => (
        <div key={index}>
          <p>Título: {item.Titulo}</p>
          <p>Contenido: {item.Contenido}</p>
          <button onClick={() => handleDelete(item.Titulo)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Eliminar;
