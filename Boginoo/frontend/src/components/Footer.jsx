import React from "react";

export default function Footer() {
  return (
    <div
      className="pb-10"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Made with ♥️ by Nest Academy</p>
      <p
        style={{
          opacity: "30%",
        }}
      >
        ©boginoo.io 2020
      </p>
    </div>
  );
}
