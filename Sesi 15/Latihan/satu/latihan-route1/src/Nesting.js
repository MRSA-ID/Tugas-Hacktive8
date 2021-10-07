import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
// import About from "./component/about";
import Abouts from "./component/nesting component/Abouts";

function Nesting() {
  return (
    <Router>
      <Link to="/Abouts">About</Link>
      <br />
      <Link to="/Contact">Contact</Link>
      <br />
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/Abouts">
          <Abouts />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Redirect exact from="/" to="/Home" />
      </Switch>
    </Router>
  );
}

export default Nesting;
