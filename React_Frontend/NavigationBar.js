const NavigationBar = () => {
    return (
      <nav className="navigation-bar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/noticias">Noticias</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    );
  };
  window.NavigationBar = NavigationBar;
