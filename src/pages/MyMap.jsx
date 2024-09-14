import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import '../components/styles/MyMap.scss';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const iconCreate = (color) => {
  return L.icon({
    iconUrl: 'https://img.icons8.com/fluency/48/marker.png', 
    iconSize: [40, 40], 
  });
};

function MyMap() {
  const [position, setPosition] = useState([51.505, -0.09]); // Default coordinates

  useEffect(() => {
    const locateUser = () => {
      if (!navigator.geolocation) {
        console.error('Geolocation is not supported by your browser');
        return;
      }

      function success(pos) {
        const newPosition = [pos.coords.latitude, pos.coords.longitude];
        setPosition(newPosition);
      }

      function error(err) {
        console.error('Error getting location:', err);
      }

      navigator.geolocation.getCurrentPosition(success, error);
    };

    locateUser();
  }, []);

  return (
    <div className="App-Map">
      <div className="App-header">
        <h1>Where to find us</h1>
      </div>
      {/* <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconCreate('blue')}>
          <Popup>You are here!</Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer> */}
      <div className="google-maps">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7975.077064636468!2d30.13067653615382!3d-1.9369971694291273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca73f5f622543%3A0xc071ca8511772801!2sIngenzi%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sfr!2sci!4v1708993581023!5m2!1sfr!2sci" 
          width="1000" 
          height="350" 
          style={{ border: '1px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default MyMap;
