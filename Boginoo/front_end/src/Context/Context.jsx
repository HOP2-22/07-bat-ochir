import axios from "axios";
import React, { createContext, useState } from "react";
import cookie from "js-cookie";
// import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export function Provider({ children }) {
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const Login = async ({ user, password }) => {
    try {
      await axios
        .post("http://localhost:7070/user/login", {
          email: user,
          password: password,
        })
        .then((el) => {
          setUser(el?.data?.user);
        });
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };
  const createPost = async () => {
    try {
      const shortRes = await axios.post("http://localhost:7070/link/", {
        orignal_link: inputValue,
      });
      setShort(shortRes?.data?.short_link);
      console.log(short);
      console.log(shortRes);
    } catch (error) {
      console.log("erer");
    }
  };

  return (
    <Context.Provider
      value={{
        Login,
        user,
        inputValue,
        createPost,
        setInputValue,
        orignal,
        setOrignal,
        short,
        setShort,
      }}
    >
      {children}
    </Context.Provider>
  );
}
