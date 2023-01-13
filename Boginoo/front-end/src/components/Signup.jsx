import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "../img/logo-default.png";
import axios from "axios";
export default function Signup() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const signUp = async (req, res) => {
    try {
      await axios.post("http://localhost:7070/sign/createUser", {
        email: emailValue,
        password: passwordValue,
      });
      alert("User created");
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  const path = window.location.pathname;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10%",
        }}
      >
        <div
          style={{
            witdh: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img width={181} height={118} src={Logo} alt="" />
          <p
            style={{
              fontSize: "32px",
              color: "#02B589",
              fontWeight: "bold",
            }}
          >
            Нэвтрэх
          </p>
        </div>
        <div>
          <p
            style={{
              marginLeft: "15px",
            }}
          >
            Цахим хаяг
          </p>
          <input
            style={{
              height: "44px",
              width: "351px",
              borderRadius: "100px",
              paddingLeft: "30px",
              fontSize: "20px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
            }}
            placeholder="name@mail.domain"
            type="text"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </div>
        <div>
          <p
            style={{
              marginLeft: "15px",
            }}
          >
            Нууц үг
          </p>
          <input
            style={{
              height: "44px",
              width: "351px",
              borderRadius: "100px",
              paddingLeft: "30px",
              fontSize: "20px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
            }}
            placeholder="••••••••••"
            type="text"
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
          />
        </div>
        <div>
          <p
            style={{
              marginLeft: "15px",
            }}
          >
            Нууц үгээ давтна уу?
          </p>
          <input
            style={{
              height: "44px",
              width: "351px",
              borderRadius: "100px",
              paddingLeft: "30px",
              fontSize: "20px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
            }}
            placeholder="••••••••••"
            type="text"
          />
        </div>
        <div
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        <button
          style={{
            height: "44px",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px",
            color: "white",
            backgroundColor: "#02B589",
            borderRadius: "100px",
            border: "none",
            paddingLeft: "145px",
            paddingRight: "145px",
          }}
          onClick={() => {
            signUp();
          }}
        >
          НЭВТРЭХ
        </button>
        <a
          style={{
            display: path === "/signup" ? "none" : "block",
            color: "#02B589",
            padding: "15px",
            fontSize: "16px",
          }}
          href="none"
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </a>
      </div>
      <Footer />
    </div>
  );
}
