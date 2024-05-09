import React from 'react';
import './SidebarMenu.css'; // Archivo de estilos para el menú

const SidebarMenu = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose(); // Llama a la función onClose proporcionada por el componente padre para cerrar el menú
  };

  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      {/* Contenido del menú */}
      <div className="menu-content">
        <ul>
          <li>La tecnologia avanza</li>
          <li>A pasos agigantados </li>
          <li>estas listo para</li>
          <li>seguir el ritmo?</li>
        </ul>
        {/* Botón para cerrar el menú */}
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SidebarMenu;
