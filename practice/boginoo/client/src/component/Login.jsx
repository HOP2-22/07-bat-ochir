import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Footer from "./Footer";

const Login = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Logo />
      <p style={{ fontSize: "32px", color: "#02B589", marginTop: "200px" }}>
        Нэвтрэх
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="">
          <p style={{ fontSize: "18px", paddingLeft: "20px" }}>Цахим хаяг</p>
          <input
            placeholder="name@mail.domain"
            style={{
              width: "381px",
              height: "44px",
              borderRadius: "100px",
              border: "1px solid grey",
              paddingLeft: "20px",
              fontSize: "20px",
            }}
          />
        </div>
        <div className="">
          <p style={{ fontSize: "18px", paddingLeft: "20px" }}>Нууц үг</p>
          <input
            placeholder="••••••••••"
            style={{
              width: "381px",
              height: "44px",
              borderRadius: "100px",
              border: "1px solid grey",
              paddingLeft: "20px",
              fontSize: "20px",
            }}
          />
        </div>
        <div
          className=""
          style={{ display: "flex", flexDirection: "row", gap: "120px" }}
        >
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                border: "1px solid #02B589",
              }}
            />
            <p
              style={{ fontSize: "16px", color: "#02B589", marginLeft: "8px" }}
            >
              Намайг сана
            </p>
          </div>
          <p style={{ fontSize: "16px", marginLeft: "33px" }}>
            Нууц үгээ мартсан
          </p>
        </div>
        <button
          style={{
            width: "381px",
            height: "44px",
            backgroundColor: "#02B589",
            borderRadius: "100px",
            border: "none",
            fontSize: "20px",
            color: "white",
          }}
        >
          Нэвтрэх
        </button>
        <p
          style={{
            fontSize: "16px",
            color: "#02B589",
            textDecoration: "underline",
          }}
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </p>
      </div>

      <Footer />
    </div>
  );
};
export default Login;
