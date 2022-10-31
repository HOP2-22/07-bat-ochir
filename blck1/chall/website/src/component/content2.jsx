import React from "react";
import App from "../App.css";
import photo2 from "../imgs/photo2.jpg";
import Infos from "./infos";
function Content2() {
  return (
    <div
      className="Home2"
      style={{
        marginTop: "150px",
      }}
    >
      <Infos />
      <div className="photo2">
        <img src={photo2} alt="" />
        <div className="bell-case">
          <div className="bell">🔔</div>
        </div>

        <div className="calendar-case">
          <p className="calendar">🗓️</p>
        </div>
      </div>
    </div>
  );
}
export default Content2;
