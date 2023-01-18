import React from "react";
import Logoo from "../img/logo-default.png";

function Logo() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img width={181} height={118} src={Logoo} alt="" />
      </div>
    </>
  );
}
export default Logo;
