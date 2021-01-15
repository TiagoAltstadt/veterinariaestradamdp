import CarouselOK from "./carousel.js";
import Map from "./map.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

function Home() {
  //this is called a functional component
  return (
    <section className="Home">
      <section id="carouselClass">
        <CarouselOK />
      </section>

      <section id="homeVideo">
        <ReactPlayer loop="true" playing="true" muted="true" url="https://www.youtube.com/watch?v=yCouD90SvB0" width="40vw" />
      </section>

      <section id="homeVeteInfo">
        <div id="home_turno">
          <h4>Ahora podes pedir turno online!</h4>
          <a href="https://veterinariaestrada4852.setmore.com/">
            <h5>Haceme click!</h5>
          </a>
        </div>
        <Map />
      </section>
    </section>
  );
}
export default Home;
