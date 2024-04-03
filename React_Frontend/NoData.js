// Define el componente EmptyState
function EmptyState(props) {
    const { message } = props; // Extrae el mensaje de las props
    return <div>{message}</div>;
  }
  
  // Dentro de tu función donde se verifica si hay datos
  if (data.length === 0) {
    // Si no hay publicaciones, renderizar el estado vacío utilizando el componente EmptyState
    ReactDOM.render(
      <EmptyState message="No hay publicaciones disponibles." />,
      document.getElementById('cards')
    );
  }
  window.EmptyState = EmptyState;