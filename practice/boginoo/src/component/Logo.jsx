import React from "react";
import logo from "../images/logo.png";
import left from "../images/left.png";
import mid from "../images/mid.png";
import rigth from "../images/rigth.png";

const Logo = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={left} />
          <img src={mid} />
          <img src={rigth} />
        </div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Logo;
