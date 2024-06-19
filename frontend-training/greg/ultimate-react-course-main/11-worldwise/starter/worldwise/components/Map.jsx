import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useCities} from "../contexts/CitiesContext.jsx";

function Map() {
    const { cities } = useCities();
    const [searchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([40,0])
    const mapLat = searchParams.get('lat');
    const mapLng = searchParams.get('lng');

    useEffect(function(){
        if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);

    return (
        <div className={styles.mapContainer}>
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) =>
                    (
                    <Marker position={[city.position.lat,city.position.lng]} key={city.id} >
                        <Popup>
                            <span>{city.emoji}</span>
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                    ))
                    }
                    <ChangeCenter position={mapPosition}/>
                <DetectClick />
            </MapContainer>
        </div>
    );
}

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position)
    return null;
}

function DetectClick(){
    const navigate = useNavigate();
    useMapEvents({
        click: (e) => {
            console.log(e)
            navigate(`form?lat${e.latlng.lat}&lng=${e.latlng.lng}`)
        },
    });
}

export default Map;