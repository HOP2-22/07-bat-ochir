import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./compentent/Header";
import Content from "./compentent/Content";
import AllCard from "./compentent/allCard";
import { Footer } from "./compentent/Footer";
function App() {
  return (
    <>
      <Header />
      <Content />
      <AllCard />
      <Footer />
    </>
  );
}

export default App;
