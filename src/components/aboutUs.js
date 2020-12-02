import Badge from "./badge.js";
import img1 from "../public/images/badges/Default.jpg";
import Nico from '../public/images/badges/Nico.jpg';
import Cris from '../public/images/badges/Cris.jpg';
import Carlitos from '../public/images/badges/Carlitos.jpg';
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
        
      </section>
    </section>
  );
}

export default AboutUs;
