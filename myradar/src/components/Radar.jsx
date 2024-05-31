import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth'; 
import { auth } from '../firebaseConfig'; 
import './Radar.css';

const Radar = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    setLoading(true);
    getLocation()
      .then(location => {
        setUserLocation(location);
        return axios.get('https://us-central1-radar-25a52.cloudfunctions.net/api/locations');
      })
      .then(response => {
        setLocations(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error obtaining locations:', error);
        setLoading(false);
      });
  }, []);

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

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      await deleteLocation();
      setLoading(false);
      alert('Logout successful!');
    } catch (error) {
      console.error('Error logging out:', error);
      setLoading(false);
      alert('An error occurred while logging out. Please try again later.');
    }
  };

  const deleteLocation = async () => {
    try {
      if (auth.currentUser) {
        await axios.delete(`https://us-central1-radar-25a52.cloudfunctions.net/api/locations/${auth.currentUser.uid}`);
      } else {
        console.error('No user authenticated');
      }
    } catch (error) {
      console.error('Error deleting location:', error);
      throw error;
    }
  };

  const calculatePosition = (targetLocation) => {
    const userLat = userLocation.latitude;
    const userLng = userLocation.longitude;
    const targetLat = targetLocation.latitude;
    const targetLng = targetLocation.longitude;

    // Convertir coordenadas a radianes
    const toRadians = (angle) => angle * (Math.PI / 180);
    const φ1 = toRadians(userLat);
    const φ2 = toRadians(targetLat);
    const Δλ = toRadians(targetLng - userLng);

    // Calcular distancia y ángulo
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const bearing = Math.atan2(y, x);

    // Convertir a grados y ajustar el ángulo
    const toDegrees = (angle) => (angle * 180) / Math.PI;
    const angle = toDegrees(bearing) - 90;

    // Calcular la distancia
    const R = 6371; // Radio de la Tierra en km
    const d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * R;

    // Escalar la distancia para que quepa en el radar
    const scaleFactor = 50; // Factor de escala, ajusta según sea necesario
    const distance = Math.min(d * scaleFactor, 100); // Limitar la distancia a 100px

    // Calcular las coordenadas del punto en el radar
    const radarX = (Math.cos(bearing) * distance).toFixed(2);
    const radarY = (Math.sin(bearing) * distance).toFixed(2);

    return { x: radarX, y: radarY };
  };

  return (
    <div className="radar-container">
      <h2>Radar</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="radar">
            <div className="user-location"></div>
            {locations.map((location, index) => {
              const position = calculatePosition(location);
              return (
                <div
                  key={index}
                  className="target"
                  style={{ top: `calc(50% + ${position.y}px)`, left: `calc(50% + ${position.x}px)` }}
                ></div>
              );
            })}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Radar;
