// src/App.js
import React, { useState, useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from './firebase';
import Login from './components/Login';
import useUserLocation from './hooks/useUserLocation';
import Radar from './components/Radar';

const App = () => {
  const [user, setUser] = useState(null);
  const location = useUserLocation();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        if (location) {
          await firestore.collection('locations').doc(user.uid).set({
            uid: user.uid,
            displayName: user.displayName,
            latitude: location.latitude,
            longitude: location.longitude,
            timestamp: serverTimestamp()
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeAuth();
  }, [location]);

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.displayName}</h2>
          <Radar />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

