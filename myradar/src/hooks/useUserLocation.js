// src/hooks/useUserLocation.js
import { useState, useEffect } from 'react';

const useUserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return;
    }

    const success = (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`);
      setLocation({ latitude, longitude });
    };

    const error = (err) => {
      console.error(`ERROR(${err.code}): ${err.message}`);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return location;
};

export default useUserLocation;

