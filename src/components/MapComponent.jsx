export default function MapComponent() {
  return (
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22493.01446387177!2d-76.0848433642526!3d5.805366925284148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4647b157f21f27%3A0x2f83bfe617852423!2smonte%20blanco!5e1!3m2!1ses-419!2sco!4v1720316104383!5m2!1ses-419!2sco"width="100%" 
      height="100%" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      title="map">
      
      </iframe>
    );
  }


/*
import React, { useState } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 5.801602887660148,
  lng: -76.03182566916878
};

const mapOptions = {
  mapTypeId: 'hybrid',
  styles: [
    {
      featureType: "road",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]
};

// Define libraries as a constant outside of the component
const libraries = ['geometry', 'drawing'];

function MapComponent({ googleMapsApiKey }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries, // Use the constant here
  });

  const [map, setMap] = useState(null);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  return (
    <>
      {/*isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={mapOptions}
          onLoad={handleMapLoad}
        >
          <Marker position={center} label="A" />
        </GoogleMap>
      )
        </>
 
 );
}

export default MapComponent;
 */


  

