import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
import About from "./component/about";

function App() {
  return (
    <Router>
      <Link to="/About">About</Link>
      <br />
      <Link to="/Contact">Contact</Link>
      <br />
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
