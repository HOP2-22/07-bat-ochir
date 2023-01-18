import axios from "axios";
import React, { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export function Provider({ children }) {
  const [user, setUser] = useState("");
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
      alert("Нууц үг буруу байна");
    }
  };

  return (
    <Context.Provider value={{ Login, user }}>{children}</Context.Provider>
  );
}
