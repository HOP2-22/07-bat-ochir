import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../img/logo-default.png";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataa, setDataa] = useState();
  const [value, setValue] = useState("");
  const [shortLink, setShortLink] = useState("");

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:7070/user/");
  //     setDataa(data);
  //   } catch (error) {
  //     console.log("erer");
  //   }
  // };

  const createPost = async () => {
    try {
      console.log("111");
      const shortRes = await axios.post("http://localhost:7070/user/", {
        orignal_link: inputValue,
      });

      setShortLink(shortRes.data.shortLink);
    } catch (error) {
      console.log("erer");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignIteme: "center",
          gap: "10%",
          marginBottom: "5%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img width={181} height={118} src={Logo} alt="" />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "1%",
          }}
        >
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            style={{
              height: "44px",
              width: "531px",
              borderRadius: "100px",
              paddingLeft: "50px",
              fontSize: "20px",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 15px -10px",
            }}
            placeholder="https://www.web-huudas.mn"
            type="text"
          />
          <button
            onClick={() => {
              createPost();
              setClicked(true);
            }}
            style={{
              height: "100%",
              borderRadius: "100px",
              paddingRight: "35px",
              paddingLeft: "35px",
              color: "white",
              backgroundColor: "#02B589",
              fontSize: "20px",
              border: "none",
            }}
          >
            БОГИНОСГОХ
          </button>
        </div>
        <div
          style={{
            display: clicked ? "flex" : "none",
            flexDirection: "column",
            marginLeft: "32%",
          }}
        >
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Өгөгдсөн холбоос:
            </p>
            <p>{value}</p>
          </div>
          <div>
            <p
              style={{
                opacity: "30%",
              }}
            >
              Богино холбоос:
            </p>
            <p>{shortLink}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
