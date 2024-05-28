import React from 'react';
import './App.css';
import Header from './Views/Header';
import About from './Views/About';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
import Home from './Views/home'

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Home />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

