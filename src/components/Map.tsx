import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCountryData } from '../api';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

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
          icon={new L.Icon.Default()}
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
