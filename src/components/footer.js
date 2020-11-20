import insta from "../public/images/insta.jpg";
import face from "../public/images/face.jpg";
import whatsapp from "../public/images/whatsapp.png";

function Footer() {
  return (
    <section className="Footer">
      <div className="footerLeft">
        <div className="footerSNcontainer">
          <img className="footerSNimage" src={insta}></img>
          <p>Instagram</p>
        </div>
        <div className="footerSNcontainer">
          <img className="footerSNimage" src={face}></img>
          <p>Facebook</p>
        </div>
        <div className="footerSNcontainer">
          <img className="footerSNimage" src={whatsapp}></img>
          <p>Whatsapp</p>
        </div>
      </div>
      <div className="footerRight">
        <p>Clínica Veterinaria Estrada. </p>
          <p>🐾Clínica Gral </p>
          <p>🐾Cirugía </p>
          <p>🐾Traumatología. </p>
          <p>🐾Citología.</p>
          <p>🐾Laboratorio básico. </p>
          <p>🐾Diagnóstico por imágenes.</p>
      </div>
    </section>
  );
}

export default Footer;
