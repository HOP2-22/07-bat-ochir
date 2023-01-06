import React from "react";
import namecart from "../namecart.js";
import Card1 from "./Card1";
function Namecart() {
  return (
    <div style={{ display: "flex", overFollow: "scroll", Direction: "row" }}>
      {namecart.map((data, index) => {
        return (
          <Card1
            starNumber={data.star}
            comment={data.comment}
            avatar={data.avatar}
            name={data.name}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Namecart;
