import React, { createContext, useState } from "react";

export const Context = createContext({
  inputValue: "",
  setInputValue: () => {},
  value: "",
  setValue: () => {},
  random: "",
  setRandom: () => {},
});

export function Provider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [random, setRandom] = useState("");

  return (
    <Context.Provider
      value={{ inputValue, setInputValue, value, setValue, random, setRandom }}
    >
      {children}
    </Context.Provider>
  );
}
