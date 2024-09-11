import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCountryData } from '../api';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const { data, isLoading } = useCountryData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((country: any) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <strong>{country.country}</strong><br />
            Active Cases: {country.active}<br />
            Recovered Cases: {country.recovered}<br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
