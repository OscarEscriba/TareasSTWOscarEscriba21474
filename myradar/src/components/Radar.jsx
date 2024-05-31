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
              const offsetX = (location.latitude - userLocation.latitude) * 1000;
              const offsetY = (location.longitude - userLocation.longitude) * 1000;
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
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Radar;
