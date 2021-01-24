/*----Basic Stuff----*/
import React from "react";
import "./public/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*----React-router-dom----*/
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*----Views----*/
import Header from "./components/header.js";
import Home from "./components/home.js";
import AboutUs from "./components/aboutUs.js";
import Mission from "./components/mission.js";
import Contact from "./components/contact.js";
import Appointments from "./components/appointments.js";
import Footer from "./components/footer.js";

/*----Fonts----*/
<link rel="preconnect" href="https://fonts.gstatic.com"/>;
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>;

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
