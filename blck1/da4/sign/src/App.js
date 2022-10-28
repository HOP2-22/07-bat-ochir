import React, { useState } from "react";
import "./App.css";
import Home from "./copm/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fullinfo from "./copm/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Fullinfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
 