import React from "react";
import App from "../App.css";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";

import woman1 from "../imgs/woman1.jpg";
import Namecart from "./namecart";

function Home() {
  return (
    <div className="">
      <Content1 />;
      <Content2 />
      <Content3 />
      <div
        className=""
        style={{
          display: "flex",
          gap: "30px",
          flexDirection: "row",
          marginTop: "50px",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="whatt">What people say about us</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "70px",
            }}
          >
            <Namecart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
