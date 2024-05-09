// src/views/Login.js
import React, { useState } from 'react';
import Input from '../Components/inputs';
import Button from '../Components/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'user') {
      localStorage.setItem('user', JSON.stringify({ username: 'user' }));
      window.location.href = '/Principal';
    } else if (username === 'admin' && password === 'admin') {
      localStorage.setItem('admin', JSON.stringify({ username: 'admin' }));
      window.location.href = '/AdminMenu';
    }
  };

  const login = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%', 
    height: '100vh',
    border: 0,
    padding: 0
  };

  const cardLogin = {
    alignSelf: 'center',
    width: '300px',
    height: '300px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const ButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  };

  return (
    <div style={login}>
      <div style={cardLogin}>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={ButtonStyle}>
            <Button type="button" onClick={handleLogin} color='green'>
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
