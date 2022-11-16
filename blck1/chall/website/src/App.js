import React from "react";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home2 from "./comp2/Home2";
import Layout from "./layout/index";
import ThemeContext from "./Context/Context";
import Full from "./comp2/Fullinfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home2 />} />
              <Route path="/:id" element={<Full />} />
            </Routes>
          </Layout>
        </ThemeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
