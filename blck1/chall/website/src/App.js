import React from "react";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
