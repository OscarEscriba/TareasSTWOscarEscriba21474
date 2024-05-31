import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Radar from './components/Radar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/radar" element={<Radar />} />
      </Routes>
    </Router>
  );
};

export default App;
