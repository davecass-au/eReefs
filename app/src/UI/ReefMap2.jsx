import '../styles/ReefMap.css'
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import L from 'leaflet'
import { Component, useEffect } from 'react';
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
        //m.setView([-15, -220], 6);

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
        //var a = L.map('map')

        //if (a != 'undefined' || a != null) {
        //    a.remove();
        //} 
        //a.setView([37.7749, -122.4194], 13);
        
        //var b = L.map('map')
        //b.setView([37.7749, -122.4194], 13);
        //var m = L.map('map').remove();

    }
//        //testmap = L.map('map').off();
//        //var myMap = L.map('map').remove();
//        /*var a = L.map('map').remove();*/
//        //console.log(myMap)

//        L.map('map').setView([37.7749, -122.4194], 13);
//    }

   
    //useEffect(() => {

    //    let map = L.map('map', {
    //        center: [-15, -220],
    //        zoom: 6,
    //        scrollWheelZoom: true
    //    })
    //});


    //L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //    maxZoom: 19,
    //    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //}).addTo(map);


    render() {
        return (

            <>
                <div id="map" className="mapContainer">

                </div>
            </>
        )
    }
    
}
