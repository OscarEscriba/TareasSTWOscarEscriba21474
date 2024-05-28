import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

const Header = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <Scrollspy items={['home', 'about', 'projects', 'tecnologias', 'Contact']} currentClassName="is-current" activeClass="active" offset={-50}>
          <li>
            <a id="home-link" href="#home" onClick={handleHomeClick}>Home</a>
            <CSSTransition in={showBar} timeout={300} classNames="nav-slide" unmountOnExit>
              <div className="nav-bar"></div>
            </CSSTransition>
          </li>
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
