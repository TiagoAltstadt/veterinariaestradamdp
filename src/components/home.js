import CarouselOK from "./carousel.js";
import Map from "./map.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() { //this is called a functional component
  return (
    <section className="Home">
      <section className="carouselClass"><CarouselOK /></section>

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
