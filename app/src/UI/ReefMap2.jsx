import '../styles/ReefMap.css'
import L from 'leaflet'
import React from 'react';


export default class ReefMap2 extends React.Component {
    componentDidMount() {
        var container = L.DomUtil.get("map");

        if (container != null) {
            container._leaflet_id = null;
        }

        var m = L.map('map', {
            center: [-15, -220],
            zoom: 6,
            timeDimension: true,
            timeDimensionControl: true,
            scrollWheelZoom: true
        })

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,            
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(m);

        L.tileLayer.wms('https://dapds00.nci.org.au/thredds/wms/fx3/GBR1_H2p0_B3p2_Cfur_Dnrt.ncml', {
            layers: 'Secchi',
            timeDimension: true,
            timeDimensionControl: true,
            opacity: 0.5
        }).addTo(m);        
    }
  
    render() {
        return (
            <>
                <div id="map" className="mapContainer">

                </div>
            </>
        )
    }    
}
