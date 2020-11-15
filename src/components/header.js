/*----Vistas----*/
import Home from './home.js';
import AboutUs from './aboutUs.js';
import Mission from './mission.js';
import Location from './location.js';
import Appointments from './appointments.js';

/*----Media----*/
import img from "../public/images/veterinariaestradamdpLogo.jpg";

/*----React-router-dom----*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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

    <div className="topnav">
      <Router>
      {/*----Logo----*/}
      <div className="headerLogo">
      <a href="/home" >
        <img className="headerImage" src={img}></img>
      </a>
      </div>

      {/*----Links----*/}
      <div id="myLinks">
        <Link to='/'>Home</Link>
        <Link to='/aboutUs'>¿Quienes somos?</Link>
        <Link to='/mission'>¿Que hacemos?</Link>
        <Link to='/location'>Ubicacion</Link>
        <Link to='/appointments'>Turnos</Link>
      </div>
      

      {/*----Links Button----*/}
      <a
        href="javascript:void(0);"
        className="icon"
        onClick={() => myFunction()}
      >
        <p className="headerHamburguer">🐾</p>
      </a>
      
        
      
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/aboutUs'>
            <AboutUs/>
          </Route>
          <Route path='/mission'>
            <Mission/>
          </Route>
          <Route path='/location'>
            <Location/>
          </Route>
          <Route path='/appointments'>
            <Appointments/>
          </Route>
        </Switch>
      </Router>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"  />;
    </div>
  );
}

export default Header;
