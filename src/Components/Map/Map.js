import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const position = [21.77333, 92.427099];
  return (
    <div>
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            My Address: <br /> Merul Badda, Dhaka-1212.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
