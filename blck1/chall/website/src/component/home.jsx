import React from "react";
import App from "../App.css";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";

import woman1 from "../imgs/woman1.jpg";

function Home() {
  return (
    <div className="">
      <Content1 />;
      <Content2 />;
      <Content3 />;
      <div className="carts">
        <div className="">
          <p>What people say about us</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Home;
