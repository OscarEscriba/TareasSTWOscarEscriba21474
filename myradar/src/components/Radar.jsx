import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './Radar.css';

const Radar = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getLocation()
      .then(location => {
        setUserLocation(location);
        return axios.get('https://us-central1-radar-25a52.cloudfunctions.net/api/locations');
      })
      .then(response => {
        const data = response.data.map(item => ({
          latitude: item.location?.latitude || item.latitude,
          longitude: item.location?.longitude || item.longitude,
        }));
        setLocations(data);
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
      await deleteLocation();
      await signOut(auth);
      setLoading(false);
      alert('Logout successful!');
      navigate('/');
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

  const calculateOffset = (userLat, userLng, locLat, locLng) => {
    const distance = Math.sqrt(Math.pow(locLat - userLat, 2) + Math.pow(locLng - userLng, 2));
    const angle = Math.atan2(locLng - userLng, locLat - userLat);
    const maxDistance = 0.01; // Ajusta este valor para tu rango máximo

    const normalizedDistance = Math.min(distance / maxDistance, 1);

    return {
      offsetX: normalizedDistance * 50 * Math.cos(angle),
      offsetY: normalizedDistance * 50 * Math.sin(angle)
    };
  };

  return (
    <div className="radar-container">
      <h2>Radar</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="radar">
            {userLocation && (
              <div className="user-location" style={{ top: '50%', left: '50%' }}></div>
            )}
            {locations.map((location, index) => {
              const { offsetX, offsetY } = calculateOffset(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude);
              return (
                <div
                  key={index}
                  className="target"
                  style={{
                    top: `${50 + offsetY}%`,
                    left: `${50 + offsetX}%`,
                  }}
                ></div>
              );
            })}
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Radar;
