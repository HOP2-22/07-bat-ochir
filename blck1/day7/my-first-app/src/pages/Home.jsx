import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Home() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to={"/login"}>click here</Link>
    </div>
  );
}
export default Home;
