// src/components/Radar.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { firestore } from '../firebase';
import 'leaflet/dist/leaflet.css';

const Radar = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('locations').onSnapshot(snapshot => {
      const locs = snapshot.docs.map(doc => doc.data());
      setLocations(locs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc) => (
        <Marker key={loc.uid} position={[loc.latitude, loc.longitude]}>
          <Popup>
            {loc.displayName}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Radar;
