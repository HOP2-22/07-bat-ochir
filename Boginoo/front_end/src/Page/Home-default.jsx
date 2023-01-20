import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Search from "../components/Search";
import { Context, inputValue, setInputValue } from "../Context/Context";
export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50%",
        width: "100%",
      }}
    >
      <Logo />
      <Search />
    </div>
  );
}
