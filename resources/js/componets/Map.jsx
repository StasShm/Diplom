// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import L from 'leaflet';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// import 'leaflet.markercluster/dist/MarkerCluster.css';

// // Додавання іконок для маркерів
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const markers = [
//   { position: [51.505, -0.09], text: "Marker 1" },
//   { position: [51.51, -0.1], text: "Marker 2" },
//   { position: [51.51, -0.12], text: "Marker 3" },
//   // Додайте більше маркерів за необхідності
// ];

// const Map = () => {
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={6} style={{ height: "600px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <MarkerClusterGroup>
//         {markers.map((marker, idx) => (
//           <Marker key={idx} position={marker.position}>
//             <Popup>{marker.text}</Popup>
//           </Marker>
//         ))}
//       </MarkerClusterGroup>
//     </MapContainer>
//   );
// };

// export default Map;