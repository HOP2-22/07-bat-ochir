import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";

export default function Outside() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: "100%",
        width: "100%",
      }}
    >
      <div className="flex flex-col gap-6">
        <Logo />
        <Search />
      </div>
      <div></div>
    </div>
  );
}
