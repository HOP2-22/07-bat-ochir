import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import validator from "validator";

export const Context = createContext({});

export function Provider({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [outside, setOutside] = useState();
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
      const res = await axios.post(
        "https://boginoo-web-app-batuka.onrender.com/user/login",
        {
          email: emailValue,
          password: passwordValue,
        }
      );
      console.log(res);
      setUser(res?.data?.user);
      navigate("/home");

      // User_post();
    } catch (error) {
      alert("Нууц үг эсвэл Цахим хаяг буруу байна");
    }
  };

  const createPost = async () => {
    if (validator.isURL(inputValue)) {
      try {
        const shortRes = await axios.post(
          "https://boginoo-web-app-batuka.onrender.com/link",
          {
            orignal_link: inputValue,
            ownerID: user?._id,
          }
        );
        setOutside(shortRes);
        setOrignal(inputValue);
        setShort(shortRes?.data?.short_link);
        setCheckUpdates(!checkUpdates);
      } catch (error) {
        console.log("erer");
      }
    } else {
      alert("Is Not Valid URL");
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,

        checkUpdates,

        inputValue,
        setInputValue,

        outside,

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
