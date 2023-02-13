import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import validator from "validator";
import Cookies from "js-cookie";

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
      console.log(emailValue, passwordValue);
      const res = await axios.post(
        "https://boginoo-web-app-batuka.onrender.com/user/login",
        {
          email: emailValue,
          password: passwordValue,
        }
      );
      console.log("is done");
      console.log(res.data);
      setUser(res?.data?.user.email);
      // console.log(res.data);
      Cookie.set("token", res.data?.token);
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
        console.log("done");
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

  axios.interceptors.request.use((req) => {
    const token = Cookies.get("token");
    if (token) {
      req.headers.token = Cookies.get("token");
    }
    return req;
  });

  useEffect(() => {
    const getUser = async () => {
      const token = Cookies.get("token");
      if (!token) return;
      const res = await axios.get(
        "https://boginoo-web-app-batuka.onrender.com/user/getUser"
      );
      setUser(res.data.user);
    };
    getUser();
  }, []);

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
