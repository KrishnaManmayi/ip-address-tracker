import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "./Map.css";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = (props) => {
  const lat = parseInt(props.ipLocDetails.resLat);
  const lng = parseInt(props.ipLocDetails.resLng);
  return (
    <MapContainer center={[lat, lng]} zoom={8}>
      <ChangeView center={[lat, lng]} zoom={8} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}></Marker>
    </MapContainer>
  );
};

export default Map;
