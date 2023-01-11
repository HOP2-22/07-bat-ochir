import { useState } from "react";
import logo from "../images/logo.png";
import left from "../images/left.png";
import mid from "../images/mid.png";
import rigth from "../images/rigth.png";
import App from "../style/App.css";

const Logo = () => {
  const [hover, setHover] = useState(true);
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
          <img src={left} className="left" />
          <img src={mid} className="mid" />
          <img src={rigth} className="rigth" />
        </div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Logo;
