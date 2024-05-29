// src/components/Login.js
import React from 'react';
import { signInWithGoogle } from '../firebase';

const Login = () => (
  <div>
    <h2>Iniciar Sesión</h2>
    <button onClick={signInWithGoogle}>Iniciar Sesión con Google</button>
  </div>
);

export default Login;
