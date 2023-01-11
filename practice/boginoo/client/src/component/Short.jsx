import React, { useContext, useState } from "react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import Search from "./Search";
import {
  Context,
  inputValue,
  setInputValue,
  value,
  setValue,
  random,
  setRandom,
} from "../Context/Context";

const Short = () => {
  const { inputValue, setInputValue } = useContext(Context);
  const { value, setValue } = useContext(Context);
  const { random, setRandom } = useContext(Context);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Navbar />
      <div
        style={{
          marginTop: "0px",
          display: "flex",
          gap: "50px",
          flexDirection: "column",
        }}
      >
        <Logo />
        <Search />
      </div>
      <div
        style={{
          width: "800px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="">
          <p style={{ fontSize: "16px", color: "black", opacity: "0.5" }}>
            Өгөгдсөн холбоос:
          </p>
          <p style={{ fontSize: "20px", color: "black" }}>{value}</p>
        </div>
        <div className="">
          <p style={{ fontSize: "16px", color: "black", opacity: "0.5" }}>
            Богино холбоос:
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <p
              style={{ fontSize: "20px", color: "black" }}
            >{`www.boginoo.com/${random}`}</p>
            <p
              style={{
                fontSize: "20px",
                color: "#02B589",
                textDecoration: "underline",
              }}
            >
              Хуулж авах
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Short;
