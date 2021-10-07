import React from "react";
import { useLocation } from "react-router-dom";

function PageNotfound() {
  let location = useLocation();
  return (
    <div>Sorry about that, The Page {location.pathname} doesn't Exist</div>
  );
}

export default PageNotfound;
