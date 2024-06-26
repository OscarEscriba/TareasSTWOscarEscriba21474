import React from 'react';
import './App.css';
import Header from './Views/Header';
import About from './Views/About';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
import Home from './Views/home'
import Technologies from './Views/Tecnologies'
import Historial from './Views/Historial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Home />
      <Header />
      <About />
      <Historial />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

