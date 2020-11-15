import './public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Footer from './components/footer.js';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <Footer/>

    </div>
  );
}

export default App;
