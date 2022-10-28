import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./comp/namecart";
import { UserId } from "./pages/Userid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path=":Userid" element={<UserId />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
