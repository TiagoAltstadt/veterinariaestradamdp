/*----Vistas----*/
import Home from "./home.js";
import AboutUs from "./aboutUs.js";
import Mission from "./mission.js";
import Location from "./location.js";
import Appointments from "./appointments.js";

/*----Media----*/
import img from "../public/images/veterinariaestradamdpLogo.jpg";

/*----React-router-dom----*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="body">
      <Router>
        <section className="header">
          {/*----Logo----*/}
          <div className="headerLogo">
            <Link to="/veterinariaestradamdp/">
              <img className="headerImage" src={img}></img>
            </Link>

          {/*----Links----*/}
          <div id="myLinks1">
            <Link to="/veterinariaestradamdp/">Home</Link>
            <Link to="/veterinariaestradamdp/aboutUs">¿Quienes somos?</Link>
            <Link to="/veterinariaestradamdp/mission">¿Que hacemos?</Link>
            <Link to="/veterinariaestradamdp/location">Ubicacion</Link>
          </div>
          </div>
          {/*----Links----*/}
          <div id="myLinks">
            <Link to="/veterinariaestradamdp/">Home</Link>
            <Link to="/veterinariaestradamdp/aboutUs">¿Quienes somos?</Link>
            <Link to="/veterinariaestradamdp/mission">¿Que hacemos?</Link>
            <Link to="/veterinariaestradamdp/location">Ubicacion</Link>
          </div>

          {/*----Hamburguer----*/}
            <div className="headerMenuSign">
              <p>Menu! <i class="arrow right"></i></p>
            </div>

          {/*----Hamburguer----*/}
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={() => myFunction()}
          >
            <p className="headerHamburguer">☰</p>
          </a>
        </section>

        <Switch>
          <Route exact path="/veterinariaestradamdp/">
            <Home />
          </Route>
          <Route path="/veterinariaestradamdp/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/veterinariaestradamdp/mission">
            <Mission />
          </Route>
          <Route path="/veterinariaestradamdp/location">
            <Location />
          </Route>
          <Route path="/veterinariaestradamdp/appointments">
            <Appointments />
          </Route>
        </Switch>
      </Router>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
  );
}
export default Header;
