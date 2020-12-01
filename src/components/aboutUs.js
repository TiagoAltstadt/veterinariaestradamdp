import Badge from "./badge.js";
import img1 from "../public/images/badges/Default.jpg";
function AboutUs() {
  return (
    <section className=" AboutUs">
      <section className="aboutUsBadges">
      <Badge
          img={img1}
          name="Nicolas Morteo"
          rol="Cirujano"
          description="Descripcion de Nico"
        />
        <Badge
          img={img1}
          name="Cris"
          rol="Anestecista"
          description="Descripcion de Cris"
        />
        <Badge
          img={img1}
          name="Carlos"
          rol="Ecografias"
          description="Descripcion de Carlitos"
        />
        
      </section>
    </section>
  );
}

export default AboutUs;
