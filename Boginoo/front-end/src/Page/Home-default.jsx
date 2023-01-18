import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Short from "../components/Short";
import Search from "../components/Search";
import { Context, inputValue, setInputValue } from "../Context/Context";
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [shortLink, setShortLink] = useState("");
  const { inputValue, setInputValue } = useContext(Context);
  const { value, setValue } = useContext(Context);

  const createPost = async () => {
    try {
      console.log("111");
      const shortRes = await axios.post("http://localhost:7070/link/", {
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
        height: "50%",
        width: "100%",
      }}
    >
      <Logo />
      <Search />
    </div>
  );
}
