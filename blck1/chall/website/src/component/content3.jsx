import React from "react";
import App from "../App.css";
import woman2 from "../imgs/woman2.jpg";
import woman1 from "../imgs/woman1.jpg";
import Infos from "./infos";
import Iinfos from "./infos2";
function Content3() {
  return (
    <div
      className=""
      style={{
        flexDirection: "column",
        marginTop: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        className="home3-1"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        <img
          className=""
          src={woman1}
          style={{ marginLeft: "-500px", width: "800px", height: "800px" }}
        ></img>
        <Infos />
      </div>
      <div
        className="home3-2"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "200px",
          marginTop: "50px",
        }}
      >
        <Iinfos />
        <img src={woman2} />
      </div>
    </div>
  );
}
export default Content3;
