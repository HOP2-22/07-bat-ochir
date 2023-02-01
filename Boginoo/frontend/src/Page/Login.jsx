import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Logo from "../img/logo-default.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import eye from "../img/eye.png";
import hide from "../img/hide.png";
import { Context } from "../Context/Context";
import app from "../App.css";

export default function Login() {
  const navigate = useNavigate();
  const { Login, emailValue, passwordValue, setEmailValue, setPasswordValue } =
    useContext(Context);

  const [show, setShow] = useState(false);

  const handleLogin = () => {
    Login();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        paddingTop: "250px",
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
            value={emailValue}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "44px",
              width: "350px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
              borderRadius: "100px",
            }}
          >
            <input
              style={{
                border: "none ",
                fontSize: "20px",
              }}
              value={passwordValue}
              placeholder="••••••••••"
              type={`${show ? "text" : "password"}`}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              className="input"
            />
            <img
              style={{ width: "22px" }}
              src={`${show ? hide : eye}`}
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
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#02B589",
            }}
          >
            <input
              label="Намайг сана"
              className="checkbox"
              style={{
                height: "20px",
                width: "20px",
              }}
              type="checkbox"
            />
            <p>Намайг сана</p>
          </div>
          <a
            style={{
              color: "black",
            }}
            href="/forget"
          >
            Нууц үгээ мартсан
          </a>
        </div>

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
          onClick={handleLogin}
        >
          НЭВТРЭХ
        </button>
        <a
          style={{
            color: "#02B589",
            padding: "15px",
            fontSize: "16px",
          }}
          href="signup"
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </a>
      </div>
    </div>
  );
}
