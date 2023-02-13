import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Logo from "../img/logo-default.png";
import axios from "axios";
import eye from "../img/eye.png";
import hide from "../img/hide.png";
import app from "../App.css";
export default function Signup() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordCheckValue, setPassworCheckdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [show, setShow] = useState(true);
  const [again, setAgain] = useState(true);

  const navigate = useNavigate();

  const signUp = async (req, res) => {
    console.log(emailValue, passwordValue);
    if (passwordValue == passwordCheckValue) {
      try {
        await axios.post(
          "https://boginoo-web-app-batuka.onrender.com/user/createUser",
          {
            email: emailValue,
            password: passwordValue,
          }
        );
        console.log("hehe");

        alert("User created");
        navigate("/Login");
      } catch (error) {
        alert("Энэ цахим хаяг бүртгэлтэй байна эсвэл цахим хаяг биш байна");
        console.log(error);
      }
    } else {
      alert("Нууц үг тохирохгүй байна");
    }
  };

  const path = window.location.pathname;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
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
            Бүртгүүлэх
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
              height: "50px",
              width: "380px",
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
            className="input"
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
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              padding: "0px 10px",
              borderRadius: "100px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
              alignItems: "center",
              height: "50px",
            }}
          >
            <input
              style={{
                height: "40px",
                width: "351px",
                paddingLeft: "30px",
                fontSize: "20px",
                border: "none",
              }}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              className="input"
              placeholder="••••••••••"
              type={`${again ? "password" : "text"}`}
            />
            <img
              src={`${again ? eye : hide}`}
              style={{ height: "20px" }}
              onClick={() => {
                setAgain(!again);
                console.log(again);
              }}
            />
          </div>
        </div>
        <div>
          <p
            style={{
              marginLeft: "15px",
            }}
          >
            Нууц үгээ давтна уу?
          </p>
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              padding: "0px 10px",
              borderRadius: "100px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
              alignItems: "center",
              height: "50px",
            }}
          >
            <input
              style={{
                height: "40px",
                width: "351px",
                paddingLeft: "30px",
                fontSize: "20px",
                border: "none",
              }}
              onChange={(e) => {
                setPassworCheckdValue(e.target.value);
              }}
              className="input"
              placeholder="••••••••••"
              type={`${show ? "password" : "text"}`}
            />
            <img
              src={`${show ? eye : hide}`}
              style={{ height: "20px" }}
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
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
    </div>
  );
}
