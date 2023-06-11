
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useGlobalContext } from "./UseGlobalContext"
import { useRef, useEffect } from 'react'
import icon from '../assets/icon-location.svg'

const LeafletMap = () => {

    const { coordinates } = useGlobalContext()
    const mapRef = useRef(null);

    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [33, 38]
    })

    console.log(coordinates)
    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.setView(coordinates, 10);
        }
    }, [coordinates]);
    return <>

        {

            coordinates[0] && <div className="map_container map" id="map" >
                <MapContainer ref={mapRef} center={coordinates} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coordinates} icon={customIcon}>

                    </Marker>
                </MapContainer>
            </div>
        }
    </>



}
export default LeafletMap