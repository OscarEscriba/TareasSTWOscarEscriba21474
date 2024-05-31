import React, { useState } from 'react';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Importar los métodos necesarios de Firebase Authentication
import { auth } from '../firebaseConfig'; // Importar la instancia de autenticación de Firebase
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirigir al usuario
import './LoginWithGoogle.css'; // Importar el archivo de estilos CSS

const LoginWithGoogle = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Obtener la función navigate para redirigir al usuario

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      const googleResponse = await signInWithGoogle(); // Iniciar sesión con Google
      const user = googleResponse.user;
      const location = await getLocation(); // Obtener la ubicación del usuario
      await saveLocation(user.uid, location); // Guardar la ubicación del usuario
      setLoading(false);
      alert('Login successful!');
      navigate('/radar'); // Redirigir al usuario a la vista de radar
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  const signInWithGoogle = async () => {
    // Iniciar sesión con Google utilizando Firebase Authentication
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = { latitude, longitude };
          resolve(location);
        },
        (error) => {
          console.error('Error obtaining location:', error);
          reject(error);
        }
      );
    });
  };

  const saveLocation = async (uid, location) => {
    try {
      await axios.post('https://us-central1-radar-25a52.cloudfunctions.net/api/locations', {
        uid,
        location
      });
    } catch (error) {
      console.error('Error saving location:', error);
      throw error;
    }
  };

  return (
    <div className="login-container">
    <h2 className="login-header">Login With Google</h2>
    <button className="login-button" onClick={handleLoginWithGoogle} disabled={loading}>
      {loading ? 'Logging in...' : 'Login with Google'}
    </button>
  </div>
  );
};

export default LoginWithGoogle;
