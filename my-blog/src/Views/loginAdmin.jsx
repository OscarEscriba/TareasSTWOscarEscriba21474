import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Components/inputs';
import Button from '../Components/Button';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Si las credenciales son correctas, establece isLoggedIn en true
      setIsLoggedIn(true);
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      setLoginError(true);
    }
  };

  const login= {
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

  let adminMenuLink = null;
  if (isLoggedIn) {
    adminMenuLink = (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/AdminMenu" style={{ color: 'black' }}>Ir a MenuAdmin</Link>
      </div>
    );
  }

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
      {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. Por favor, intenta de nuevo.</p>}
      {adminMenuLink}
    </div>
  );
};

export default LoginAdmin;

