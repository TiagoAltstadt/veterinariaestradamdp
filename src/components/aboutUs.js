import Badge from "./badge.js";
import img1 from "../public/images/badges/Default.jpg";
import Nico from '../public/images/badges/Nico.jpg';
import Cris from '../public/images/badges/Cris.jpg';
import Carlitos from '../public/images/badges/Carlitos.jpg';
import Caro from '../public/images/badges/Caro.jpg';
function AboutUs() {
  return (
    <section className=" AboutUs">
      <section className="aboutUsBadges">
      <Badge
          img={Nico}
          name="Nicolas Morteo"
          rol=""
          description=""
        />
        <Badge
          img={Cris}
          name="Cristian Monte"
          rol=""
          description=""
        />
        <Badge
          img={Carlitos}
          name="Carlos Aragón"
          rol=""
          description=""
        />
        <Badge
          img={Caro}
          name="Carolina"
          rol="Reperreros"
          description=""
        />
      </section>
    </section>
  );
}

export default AboutUs;
