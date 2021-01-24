/*----Media----*/
import img from "../public/images/veterinariaestradamdpLogo.jpg";
import Bone from "../public/images/bone.png"

/*----React-router-dom----*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {

  /*----Functions----*/
  function magicSidebar() {
    var sidebar = document.getElementById("header_sidebar");
    var blurr = document.getElementById("header_sidebar_blurr");

    if (sidebar.style.right === "-100vw") {
      console.log("Show Sidebar");
      console.log("blurr", blurr.style.left);
      console.log("sidebar", sidebar.style.right);
      sidebar.style.right = "-0vw";
      blurr.style.right = "0vw";
    } else {
      console.log("Hide Sidebar");
      console.log("sidebar", sidebar.style.right);
      console.log("blurr", blurr.style.left);
      sidebar.style.right = "-100vw";
      blurr.style.right = "-100vw";
    }
  }

  return (
    <div className="body">

      <section className="header">
        <section id="header_sidebar_blurr"></section>
        <section id="header_sidebar">

          <Link to="/" className="header_sidebar_item">
            <img src={Bone} className="image" /><p className="text">Home</p>
          </Link>
          <Link to="/mission" className="header_sidebar_item">
            <img src={Bone} className="image" /><p className="text">Que hacemos</p>
          </Link>
          <Link to="/aboutUs" className="header_sidebar_item">
            <img src={Bone} className="image" /><p className="text">Quienes somos</p>
          </Link>
          <Link to="/contact" className="header_sidebar_item">
            <img src={Bone} className="image" /><p className="text">Contacto</p>
          </Link>

        </section>

        {/*----Logo----*/}
        <div className="headerLogo">
          <Link to="/">
            <img className="headerImage" src={img}></img>
          </Link>
        </div>

        {/*----Hamburguer Msg----*/}
        <div className="headerMenuSign">
          <p>Menu! <i className="arrow right"></i></p>
        </div>

        {/*----Hamburguer----*/}
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => magicSidebar()}
        >
          <p className="headerHamburguer">☰</p>
        </a>
      </section>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </div>
  );
}
export default Header;
