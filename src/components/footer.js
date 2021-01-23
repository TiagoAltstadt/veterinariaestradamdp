import insta from "../public/images/insta.jpg";
import face from "../public/images/face.jpg";
import whatsapp from "../public/images/whatsapp.png";

function Footer() {
  return (
    <section className="Footer">
      <a className="footerSNcontainer" href="https://www.facebook.com/Cl%C3%ADnica-Veterinaria-Nueva-Estrada-2245260169041606">
        <img className="footerSNimage" src={face}></img>
        <p>Facebook</p>
      </a>
      <a className="footerSNcontainer" href="https://www.instagram.com/veterinarianuevaestrada/">
        <img className="footerSNimage" src={insta}></img>
        <p>Instagram</p>
      </a>
      <a className="footerSNcontainer" href="https://wa.me/5492235939602">
        <img className="footerSNimage" src={whatsapp}></img>
        <p>Whatsapp</p>
      </a>
    </section>
  );
}

export default Footer;
