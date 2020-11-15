import carousel1 from "../public/images/nico.jpg";
import carousel2 from "../public/images/cris.jpg";
import carousel3 from "../public/images/3.jpg";
import map from "../public/images/map.JPG";
import clinica from '../public/images/clinica.jpg'

import Carousel from 'react-bootstrap/Carousel'
function Home() {
  return (
    <section className="Home">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>Nico Morteo</h3>
            <p>Descripcion de foto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="First slide" />
          <Carousel.Caption>
            <h3>Nico Morteo</h3>
            <p>Descripcion de foto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="First slide" />
          <Carousel.Caption>
            <h3>Nico Morteo</h3>
            <p>Descripcion de foto</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="homeVeteInfo">
        <img className="homeMapImage" src={map}></img>
        <img className="homeVeteImage" src={clinica}></img>
      </div>
      <div></div>
    </section>
  );
}

export default Home;
