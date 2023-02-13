import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export function Provider({ children }) {
  console.log("children == > ", children);
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
