
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useGlobalContext } from "./UseGlobalContext"
import { useState } from 'react'
import icon from '../assets/icon-location.svg'

const LeafletMap = () => {

    const { coordinates } = useGlobalContext()

    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [33, 38]
    })
    return <>

        {

            coordinates[0] && <div className="map_container map" id="map" >
                <MapContainer center={coordinates} zoom={15} scrollWheelZoom={true}>
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