import CarouselOK from "./carousel.js";
import Map from "./map.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <section className="Home">
      <CarouselOK />

      <div className="homeVeteInfo">
        <a
          target="_blank"
          href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=de39d67f-dac4-442b-b97d-2899c4b92130"
          className="homeAptLink"
        >
          <div className="homeAptButton btn btn-primary " >
          <button type="button" class=" btn btn-primary btn-lg">Turnos</button>
          </div>
        </a>
        <Map />
      </div>
      <div></div>
    </section>
  );
}

export default Home;
