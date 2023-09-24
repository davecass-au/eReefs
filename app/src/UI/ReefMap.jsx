import '../styles/ReefMap.css'
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';

function ReefMap() {
    return (
        <>
            <div className="mapContainer">
                <MapContainer
                    center={[-15, -220]}
                    zoom={6}
                    timeDimension={true}
                    timeDimensionControl={true}
                    scrollWheelZoom={true}>
                    <TileLayer                        
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        repeatWorld={"false"}
                        debug={"true" }
                    />
                    <WMSTileLayer
                        layers={"Secchi"}
                        TimeDimension={true}
                        repeatWorld={"false"}
                        opacity={0.5}
                        debug={"true"}
                        url={`https://dapds00.nci.org.au/thredds/wms/fx3/GBR1_H2p0_B3p2_Cfur_Dnrt.ncml`}
                    />
                </MapContainer>
            </div>      
        </>
    )
}

export default ReefMap