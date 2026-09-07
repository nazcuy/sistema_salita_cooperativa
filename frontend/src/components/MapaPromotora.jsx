import { MapContainer, TileLayer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

// Arreglar iconos por defecto de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function ClickHandler({ onSeleccionarPunto, setMarcadorTemporal }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarcadorTemporal([lat, lng]);
      onSeleccionarPunto(lat, lng);
    },
  });

  return null;
}

function MapaPromotora({ puntos, cuadriculaSeleccionada, onSeleccionarPunto }) {
  const [marcadorTemporal, setMarcadorTemporal] = useState(null);

  // Ejemplo de manzanas con cuadrícula
  const manzanas = [
    {
      cuadricula: '1',
      color: 'blue',
      coordenadas: [
        [-34.69213, -58.30917],
        [-34.69033, -58.30705],
        [-34.69231, -58.30440],
        [-34.69423, -58.30654],
      ],
    },
    {
      cuadricula: '2',
      color: 'blue',
      coordenadas: [
        [-34.69019, -58.30692],
        [-34.69221, -58.30434],
        [-34.69038, -58.30220],
        [-34.68835, -58.30481],
      ],
    },
    {
      cuadricula: '5',
      color: 'green',
      coordenadas: [
        [-34.69026, -58.30209],
        [-34.68824, -58.30467],
        [-34.68705, -58.30332],
        [-34.68907, -58.30069],
      ],
    },
  ];

  const manzanasFiltradas = cuadriculaSeleccionada
    ? manzanas.filter((m) => m.cuadricula === cuadriculaSeleccionada)
    : manzanas;

  return (
    <MapContainer center={[-34.6037, -58.3816]} zoom={14} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {manzanasFiltradas.map((manzana, index) => (
        <Polygon
          key={index}
          positions={manzana.coordenadas}
          pathOptions={{
            color: manzana.color,
            fillColor: manzana.color,
            fillOpacity: 0.4,
          }}
        />
      ))}

      {puntos.map((p, index) => (
        <Marker key={index} position={[p.lat, p.lng]} />
      ))}

      {marcadorTemporal && <Marker position={marcadorTemporal} />}

      <ClickHandler onSeleccionarPunto={onSeleccionarPunto} setMarcadorTemporal={setMarcadorTemporal} />
    </MapContainer>
  );
}

export default MapaPromotora;