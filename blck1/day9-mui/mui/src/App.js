import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./compentent/Header";
import Content from "./compentent/Content";
import AllCard from "./compentent/allCard";
import { Footer } from "./compentent/Footer";
import ThemeContext, { ColorModeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ColorModeContext);
  console.log(theme);
  return (
    <div
      style={{
        backgroundColor: `${theme ? "lightblue" : "lightgrey"}`,
      }}
    >
      <Header />
      <Content />
      <AllCard />
      <Footer />
    </div>
  );
}

export default App;
