import React from "react";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home2 from "./comp2/Home2";
import Layout from "./layout/index";
import ThemeContext from "./Context/Context";
import Full from "./comp2/Fullinfo";
import Login from "./comp2/Login";
import Gif from "./gif/Gif";
import Movie from "./movie/Moive_Site";
import MovieContextParent from "./Context/Movie-context";

function App() {
  return (
    <>
      {/* {" "}
      <BrowserRouter>
        <ThemeContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home2 />} />
              <Route path="/:id" element={<Full />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </Layout>
        </ThemeContext>
      </BrowserRouter> */}
      {/* <MovieContextParent>
        <Movie /> */}
      {/* </MovieContextParent> */}
      <Gif />
    </>
  );
}

export default App;
