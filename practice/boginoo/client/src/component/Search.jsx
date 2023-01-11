import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import {
  Context,
  inputValue,
  setInputValue,
  value,
  setValue,
  random,
  setRandom,
} from "../Context/Context";

const Search = () => {
  const [succes, setSucces] = useState("");
  const { random, setRandom } = useContext(Context);
  const createPost = async () => {
    setRandom((Math.random() + 1).toString(36).substring(7));
    try {
      await axios
        .post("http://localhost:8080/create", {
          orignal_link: inputValue,
          short_link: `www.boginoo.com/${random}`,
        })
        .then((el) => setSucces(el));
    } catch (error) {
      console.log("erer");
    }
  };
  const path = window.location.pathname;
  const { inputValue, setInputValue } = useContext(Context);
  const { value, setValue } = useContext(Context);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="https://www.web-huudas.mn"
          style={{
            fontSize: "20px",
            width: "23%",
            height: "44px",
            borderRadius: "100px",
            border: "1px solid grey",
            paddingLeft: "30px",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />
        <button
          style={{
            width: "192px",
            height: "44px",
            border: "none",
            backgroundColor: "#02B589",
            borderRadius: "100px",
            color: "white",
            fontSize: "20px",
          }}
          onClick={() => {
            setValue(inputValue);
            createPost();
          }}
        >
          Богиносгох
        </button>
      </div>
    </>
  );
};

export default Search;
