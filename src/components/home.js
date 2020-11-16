
import map from "../public/images/map.JPG";
import clinica from '../public/images/clinica.jpg';
import CarouselOK from './carousel.js';
import Map from './map.js';



function Home() {

  

  return (
    <section className="Home">

      <CarouselOK/>
      
      <div className="homeVeteInfo">
        <img className="homeVeteImage" src={clinica}></img>
        <Map/>
      </div>
      <div></div>
    </section>
  );
}

export default Home;
