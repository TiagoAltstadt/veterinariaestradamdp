import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";
  /* api google maps: AIzaSyAMFQlsVHkIZgXobf-CdYQEGNdvkxTaCZs */

  function Map(){
    const libraries = ["places"];
    const mapContainerStyle = {
      width: "45%",
      margin: "0rem auto"
    };
    const center = {
      lat: -37.9519,
      lng: -57.55416,
    };
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyAMFQlsVHkIZgXobf-CdYQEGNdvkxTaCZs",
      libraries,
    });
  
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return(
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker
          key="Veterinaria Estrada"
          position={{
            lat: -37.9519,
    lng: -57.55416,
          }}
        />
      </GoogleMap>
    )
  }
  export default Map;