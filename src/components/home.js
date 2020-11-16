
import map from "../public/images/map.JPG";
import clinica from '../public/images/clinica.jpg';
import CarouselOK from './carousel.js';


function Home() {

  

  return (
    <section className="Home">

      <CarouselOK/>
      
      <div className="homeVeteInfo">
        <img className="homeMapImage" src={map}></img>
        <img className="homeVeteImage" src={clinica}></img>
      </div>
      <div></div>
    </section>
  );
}

export default Home;
