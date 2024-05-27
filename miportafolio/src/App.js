import React from 'react';
import './App.css';
import Header from './Views/Header';
import About from './Views/About';
import Projects from './Views/Projects';
import Contact from './Views/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

