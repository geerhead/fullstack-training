import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function Map() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([40,21])
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');


    return (
        <div className={styles.mapContainer} onClick={() => {
            navigate("form");
        }}>
            <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapPosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;