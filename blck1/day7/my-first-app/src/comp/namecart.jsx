import React from "react";
import "../App.css";
import Ellipse from "./Ellipse.png";
function Cart() {
  return (
    <div className="big">
      <p>⭐</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolorum
        id repudiandae!
      </p>
      <div className="infoo">
        <img src={Ellipse} />
        <h3>Amy Klassen</h3>
      </div>
    </div>
  );
}
export default Cart;
