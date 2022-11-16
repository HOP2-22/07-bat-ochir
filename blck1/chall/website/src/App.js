import React from "react";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home2 from "./comp2/Home2";
import Layout from "./layout/index";
import { ThemeComponent } from "../src/Context/Context";
import Full from "./comp2/Fullinfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ThemeComponent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home2 />} />
              <Route path="/:id" element={<Full />} />
            </Routes>
          </ThemeComponent>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
