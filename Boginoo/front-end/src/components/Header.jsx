import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const path = window.location.pathname;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        fontSize: "20px",
        color: "#02B589",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "2%",
          width: "100%",
          paddingTop: "56px",
          paddingRight: "78px",
        }}
      >
        <p
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          ХЭРХЭН АЖИЛЛАДАЖ ВЭ?
        </p>
        <Link
          style={{
            display: path === "/login" || path === "/signup" ? "none" : "block",
          }}
          to={"/login"}
        >
          <button
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              padding: "10px",
              color: "white",
              backgroundColor: "#02B589",
              borderRadius: "100px",
              border: "none",
              paddingLeft: "35px",
              paddingRight: "35px",
            }}
          >
            НЭВТРЭХ
          </button>
        </Link>
      </div>
    </div>
  );
}
