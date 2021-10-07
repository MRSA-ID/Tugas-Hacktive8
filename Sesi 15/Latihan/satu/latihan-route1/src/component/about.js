import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AboutFulan from "./AboutFulan";
import AboutFulana from "./AboutFulana";

const About = () => {
  return (
    <Router>
      <div>
        <h1>Pilihlah</h1>
        <Link to="/About/fulan">About Fulan</Link>
        <br />
        <Link to="/About/fulana">About Fulana</Link>
        <br />
        <Link to="/About">Back to page About</Link>
      </div>
      <Switch>
        <Route path="/About/:name" children={<AboutFulan />} />
        <Route path="/About/:name" children={<AboutFulana />} />
        <Route path="/About">
          <div>
            <h1>Percobaan route path </h1>
            <h1>Halaman About nihhhhhh</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default About;
