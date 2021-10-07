import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./Abouts";

function Abouts() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <h1>Who do you want to see ? </h1>
      <ul>
        <li>
          <Link to={`${url}/fulan`}>Fulan</Link>
        </li>
        <li>
          <Link to={`${url}/fulana`}>Fulana</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a name.</h3>
        </Route>
        <Route path={`${path}/:name`}>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default Abouts;
