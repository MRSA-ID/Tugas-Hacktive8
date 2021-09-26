import logo from './logo.svg';
// import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Content from './Component/Content';
import Footer from './Component/Footer';
import SignIn from './Component/SignIn';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// don't forget to install popper.js for use bootstrap js
import "bootstrap";
import Home from './Component/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Home" component={() => <Home authorized={true} />} />
          <Route exact path="*" component={SignIn}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
