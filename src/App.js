/*----Basic Stuff----*/
import React from "react";
import "./public/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*----Views----*/
import Header from "./components/header.js";
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
      <Route>
        <Header />

        <Footer />
      </Route>
    </div>
  );
}

export default App;
