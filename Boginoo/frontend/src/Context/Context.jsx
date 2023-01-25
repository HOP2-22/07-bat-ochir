import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

export const Context = createContext({});

export function Provider({ children }) {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/home");
  };

  const [userData, setUserData] = useState();
  const [user, setUser] = useState();
  const [inputValue, setInputValue] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkUpdates, setCheckUpdates] = useState(false);

  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:7070/user/login", {
        email: emailValue,
        password: passwordValue,
      });

      setUser(res?.data?.user);
      navigate("/home");

      // User_post();
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  const createPost = async () => {
    try {
      const shortRes = await axios.post("http://localhost:7070/link/", {
        orignal_link: inputValue,
        ownerID: user._id,
      });

      setOrignal(inputValue);
      setShort(shortRes?.data?.short_link);
      setCheckUpdates(!checkUpdates);
    } catch (error) {
      console.log("erer");
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        checkUpdates,

        inputValue,
        setInputValue,

        orignal,
        setOrignal,

        short,
        setShort,

        ownerEmail,
        setOwnerEmail,

        emailValue,
        setEmailValue,

        passwordValue,
        setPasswordValue,

        userData,

        //function
        createPost,
        Login,
      }}
    >
      {children}
    </Context.Provider>
  );
}
