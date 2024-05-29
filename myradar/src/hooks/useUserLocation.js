// src/hooks/useUserLocation.js
import { useState, useEffect } from 'react';

const useUserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }, []);

  return location;
};

export default useUserLocation;
