import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapView = ({ address }) => {
  const location = {
    lat: 18.5204, 
    lng: 73.8567
  };

  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={12}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
