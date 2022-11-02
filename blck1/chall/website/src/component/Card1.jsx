import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "../App.css";
const Card1 = ({ starNumber, comment, avatar, name }) => {
  const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  star.length = starNumber;
  return (
    <div>
      <div className="name-cart-cont">
        <div className="stars">{star.join("")}</div>
        <div className="comments">{comment}</div>
        <div className="row-3">
          <img className="avataricon" src={avatar} />
          <div className="namecart_name">{name}</div>
        </div>
      </div>
    </div>
  );
};
export default Card1;
