import React from "react";
import { useParams } from "react-router-dom";
function PageHome() {
  let { name } = useParams();
  return <div>This is the home Page. You Are {name}</div>;
}
export default PageHome;
