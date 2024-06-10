import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';     
import L from 'leaflet';



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
export default function OficeMap({}){
    const office =[50.79498499546976, 25.268893122092017]
    return(
        <MapContainer center={[50.79498499546976, 25.268893122092017]} zoom={13} style={{ height: "500px", width: "500px"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
        <Marker  position={office}>
          <Popup>Головний офіс</Popup>
        </Marker>
      
    </MapContainer>
  );
};