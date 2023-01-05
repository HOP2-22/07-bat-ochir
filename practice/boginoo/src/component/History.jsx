import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Search from "./Search";
export default function History() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          border: "1px solid",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            gap: "70px",
          }}
        >
          <Logo />
          <Search />
        </div>
        <div
          style={{
            marginTop: "64px",
            width: "100%",
            height: "100%",
            border: "1px solid",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "100%",
              margin: "0",
              fontSize: "37px",
              paddingLeft: "41%",
              color: "#02B589",
            }}
          >
            Түүх
          </p>
          <div>{}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
