import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const headerStyle = {
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s ease',
    transform: menuOpen ? 'translateX(-300px)' : 'translateX(0)',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
  };

  const menuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '300px',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    borderRadius: '0 5px 5px 0',
    overflowY: 'auto',
    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div>
      <div style={headerStyle}>
        <button onClick={() => window.history.back()} className="back-button">
          Regresar
        </button>
        <button onClick={handleMenuToggle} className="menu-button">
          {menuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
        </button>
      </div>
      <div style={menuStyle}>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;



