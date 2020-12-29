import CarouselOK from "./carousel.js";
import Map from "./map.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() { //this is called a functional component
  return (
    <section className="Home">
       <section className="carouselClass"><CarouselOK /></section>

      <div className="homeVeteInfo">
        <a
          target="_blank"
          href="https://veterinariaestrada4852.setmore.com/"
          className="homeAptLink"
        ><h2 className="homeAptButton">Turnos</h2>
        </a>
        <Map />
      </div>

    </section>
  );
}
export default Home;
