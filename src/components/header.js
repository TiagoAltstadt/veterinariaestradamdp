import img from "../public/images/veterinariaestradamdpLogo.jpg";

function Header() {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"  />;

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="topnav">
      {/*----Logo----*/}
      <a href="#home" className="headerLogo">
        <img className="headerImage" src={img}></img>
      </a>

      {/*----Links----*/}
      <div id="myLinks">
        <a href="#Inicio">
          Inicio<i class="fas fa-paw"></i>
        </a>
        <a href="#turnos">Turnos</a>
        <a href="#contacto">Contacto</a>
      </div>

      {/*----Links Button----*/}
      <a
        href="javascript:void(0);"
        className="icon"
        onClick={() => myFunction()}
      >
        <p className="headerHamburguer">🐾</p>
      </a>
    </div>
  );
}

export default Header;
