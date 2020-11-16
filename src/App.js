import React from "react";
import "./public/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

/* api google maps: AIzaSyAMFQlsVHkIZgXobf-CdYQEGNdvkxTaCZs */
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

function App() {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "20vh",
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

  return (
    <div className="App">
      <Header />
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

      <Footer />
    </div>
  );
}

export default App;
