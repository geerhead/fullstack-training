import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useCities} from "../contexts/CitiesContext.jsx";

function Map() {
    const navigate = useNavigate()
    const {cities} = useCities();
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([40,0])
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');


    return (
        <div className={styles.mapContainer} onClick={() => {
            navigate("form");
        }}>
            <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker position={[city.position.lat,city.position.lng]} key={city.id} />
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                    ))
                    }
            </MapContainer>
        </div>
    );
}

export default Map;