import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageAbout from "./pages/PageAbout";
import PageHome from "./pages/PageHome";
import Projects from "./pages/Projects";
import PageNotfound from "./pages/PageNotFound";
function TutorialRouter() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vw",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/:name" exact component={PageHome} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/about" exact component={PageAbout} />
          <Route path="*" exact component={PageNotfound} />
        </Switch>
      </Router>
    </>
  );
}

export default TutorialRouter;
