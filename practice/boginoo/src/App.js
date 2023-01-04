import React from "react";
import Menu from "./component/MenuPage";
import Login from "./component/Login";
import Short from "./component/Short";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Done" element={<Short />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
