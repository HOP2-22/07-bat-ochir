import React from "react";

const Navbar = () => {
  const path = window.location.pathname;

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingLeft: "63px ",
          paddingTop: "60px",
          paddingRight: "100px ",
          paddingBottom: "100px",
        }}
      >
        <p
          style={{
            fontSize: "25px",
            color: "#02B589",
            lineHeight: "23px",
          }}
        >
          Хэрхэн ажилладаж вэ?
        </p>
        <button
          style={{
            padding: "12px 50px",
            display: path == "/Login" ? "none" : "flex",
            marginRight: "123px",
            fontSize: "20px",
            borderRadius: "100px",
            width: "183px",
            height: "44px",
            backgroundColor: "#02B589",
            border: "none",
            color: "white",
          }}
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};
export default Navbar;
