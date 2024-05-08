import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  const menuStyle = {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#00ffcc',
  };

  return (
    <div style={menuStyle}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Menú Principal</h2>
      {/* Enlace para ir a la página de eliminación de registros */}
      <Link to="/Eliminar" style={linkStyle} activeStyle={linkHoverStyle}>
        Eliminar Registros
      </Link>
      {/* Enlace para ir a la página de actualización de registros */}
      <Link to="/actualizar-registros" style={linkStyle} activeStyle={linkHoverStyle}>
        Actualizar Registros
      </Link>
    </div>
  );
};

export default AdminMenu;

