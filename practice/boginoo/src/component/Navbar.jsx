import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "40px",
          justifyContent: "flex-end",
          marginTop: "66px",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "25px", color: "#02B589", lineHeight: "23px" }}>
          Хэрхэн ажилладаж вэ?
        </p>
        <button
          style={{
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
