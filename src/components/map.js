/*-----Important Stuff-----*/
import React from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

function Map() {

  const libraries = ["places"];
  
  const objective = { lat: -37.9519, lng: -57.55416};

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAMFQlsVHkIZgXobf-CdYQEGNdvkxTaCZs", libraries 
  });

  if (loadError) return "Unfortunately, Maps got lost in its way here...";
  if (!isLoaded) return "Maps is brewing some coffe...";

  return (
    <GoogleMap id='mapContainerStyle' zoom={15} center={objective}>

      <Marker key="Veterinaria Estrada" position={objective} />

    </GoogleMap>
  );
}
export default Map;