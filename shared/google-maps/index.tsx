import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import Head from 'next/head';

const GoogleMaps = () => {

    const mapContainerStyle = {
        width: '45pc',
        height: '670px',
        marginTop: "100px",
        marginLeft: "50px"
    };

    const center = {
        lat: 37.7749, // set the latitude of the map center
        lng: -122.4194 // set the longitude of the map center
    };

    const zoom = 14; // set the zoom level of the map

    return (
        <div>
            <Head>
                <script
                async
                defer
                src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDRnc0K3kPkgnVDN90b-7CWsE0yXHKz9GU&libraries=places`}
                />
            </Head>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={zoom}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}

export default GoogleMaps