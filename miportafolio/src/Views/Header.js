import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li><a href='#Home'>Home</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#Tecnologias">Tecnologias</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
