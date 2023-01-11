import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";
import Search from "./Search";

const Menu = () => {
  const path = window.location.pathname;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 0,
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <Logo />
        <Search />
      </div>

      <Footer />
    </div>
  );
};
export default Menu;
