import Map from "./bigMap.js";
function Contact() {
    return (
        <section className="Location">
            <div className="locationMap"><Map /></div>
            <section id="contact_info">
                <h4>Direccion</h4>
                <h6>Av. José Manuel Estrada 5824</h6>
                <h4>Whatsapp</h4>
                <h6><a href="https://wa.me/5492235939602">+5492235939602</a></h6>
                <h4>Instagram</h4>
                <h6><a href="https://www.instagram.com/veterinarianuevaestrada/"> @veterinarianuevaestrada</a></h6>
                <h4>Facebook</h4>
                <h6><a href="https://www.facebook.com/Cl%C3%ADnica-Veterinaria-Nueva-Estrada-2245260169041606">Veterinaria Estrada</a></h6>
            </section>
        </section>
    );
}
export default Contact;