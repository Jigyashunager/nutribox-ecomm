import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: 'https://i.ibb.co/0mBqdRG/red-location-icon-map-png-4.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
  iconSize: [34, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapLeaflet = () => {

  
  return (
    <div className='map-container' style={{"width": "45%", "position": "absolute", "height": "35rem", "right": "70px","top": "58pc"}}>
      <MapContainer className='map'  center={[27.876150, 78.084703]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.896365512877697, 78.08627099969445]}>
            <Popup>
            Home
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  )
}

export default MapLeaflet