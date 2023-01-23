import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";

export default function Outside() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50%",
        width: "100%",
      }}
    >
      <Logo />
      <Search />
    </div>
  );
}
