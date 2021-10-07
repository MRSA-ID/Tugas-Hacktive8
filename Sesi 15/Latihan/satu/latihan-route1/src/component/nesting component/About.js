import React from "react";
import { useParams } from "react-router";

function About() {
  let { name } = useParams();
  return <h1>About {name}</h1>;
}

export default About;
