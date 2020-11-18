import Badge from "./badge.js";
import img1 from "../public/images/badges/Tiago.jpg";
function AboutUs() {
  return (
    <section className=" AboutUs">
      <section className="aboutUsBadges">
      <Badge
          img={img1}
          name="Pirulo Mataleones"
          rol="Asesino a sueldo"
          description="Me gustan los trenes, y se me da el helado de chocolate"
        />
        <Badge
          img={img1}
          name="Ronaldo Rodaderizo"
          rol="Calienta Bancas"
          description="Aguante comer lechuga, con dulce de leche y barbacoa"
        />
        <Badge
          img={img1}
          name="Mateista Baseballista"
          rol="Piloto de sobmarinos voladores"
          description="No se nadar, por eso vuelo submarinos"
        />
        
      </section>
    </section>
  );
}

export default AboutUs;
