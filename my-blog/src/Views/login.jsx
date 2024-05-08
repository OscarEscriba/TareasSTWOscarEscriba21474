import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import Input from '../Components/inputs';
import Button from '../Components/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // Verifica las credenciales del usuario
    if (username === 'user' && password === 'user') {
      // Si las credenciales son correctas, redirecciona a la página principal del usuario
      window.location.href = '/Principal';
    } else if (username === 'admin' && password === 'admin') {
      // Si las credenciales son para administrador, redirecciona a la vista de inicio de sesión del admin
      window.location.href = '/AdminMenu';
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      setLoginError(true);
    }
  };

  // Estilos
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
  const buttonStyle = {
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
          <div style={buttonStyle}>
            <Button type="button" onClick={handleLogin} color='green'>
              Iniciar sesión
            </Button>
            <Link to="/login-admin">
              <Button type="button" color='blue'>
                Ingresar como Administrador
              </Button>
            </Link>
          </div>
        </form>
      </div>
      {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. Por favor, intenta de nuevo.</p>}
    </div>
  );
};

export default Login;
