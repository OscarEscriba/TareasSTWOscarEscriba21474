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
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        {/* Botón para cerrar el menú */}
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SidebarMenu;
