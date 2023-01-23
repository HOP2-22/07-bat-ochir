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

  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState();
  const [inputValue, setInputValue] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:7070/user/login", {
        email: emailValue,
        password: passwordValue,
      });
      console.log(res);
      setUser(res?.data?.user);
      User_post();
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  const User_post = async () => {
    try {
      const res = await axios.get(`http://localhost:7070/link/${emailValue}`);
      console.log(res);
      setUserData(res);
      setTimeout(() => {
        handleProfile();
      }, [800]);
      handleProfile();
    } catch (error) {
      console.log("asdhjaks");

      console.log(error);
    }
  };

  const createPost = async () => {
    try {
      const shortRes = await axios.post("http://localhost:7070/link/", {
        orignal_link: inputValue,
        ownerID: user._id,
      });
      console.log(shortRes);
      setOrignal(inputValue);
      setShort(shortRes?.data?.short_link);
      User_post();
    } catch (error) {
      console.log("erer");
    }
  };

  return (
    <Context.Provider
      value={{
        user,

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
        User_post,
      }}
    >
      {children}
    </Context.Provider>
  );
}
