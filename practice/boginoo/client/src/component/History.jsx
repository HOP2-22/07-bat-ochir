import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Search from "./Search";
import axios from "axios";
import { useState, useEffect } from "react";

// import Data from "../../Backend/model/model";
export default function History() {
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/user");
      setDataa(data);
      console.log(dataa);
    } catch (error) {
      console.log("erer");
    }
  };
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Navbar />
      <Logo />
      <Search />
      <div
        style={{
          width: "100vw",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "33.5%",
            height: "100%",
          }}
        >
          .
        </div>

        <div
          style={{
            width: "66.5%",
          }}
        >
          <p style={{ color: "#02B589", fontSize: "32px" }}>Түүх</p>
          {dataa?.map((dataaa) => {
            return (
              <>
                <p>{dataaa?._id}</p>
                <div
                  style={{
                    width: "850px",
                    heigth: "1px",
                    backgroundColor: "grey",
                    border: "1px solid grey",
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
