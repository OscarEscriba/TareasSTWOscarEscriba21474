import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const handleHomeClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.getElementById('home-link').addEventListener('click', handleHomeClick);

    return () => {
      document.getElementById('home-link').removeEventListener('click', handleHomeClick);
    };
  }, []);

  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <Scrollspy items={['home', 'about', 'projects', 'tecnologias', 'Contact']} currentClassName="is-current" activeClass="active" offset={-50}>
          <li><a id="home-link" href="#home">Home</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#tecnologias">Tecnologías</a></li>
          <li><a href="#Contact">Contacto</a></li>
        </Scrollspy>
      </nav>
    </header>
  );
}

export default Header;
