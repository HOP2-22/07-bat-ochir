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
import See from "./movie/See";
import Toy from "./toy/Toy";
import Game from "./purble place/Purple";
import Bodlogo from "./Lodash/Lodash";

function App() {
  return (
    <>
      <Bodlogo />
      {/* <Game /> */}
      {/* <BrowserRouter>
        <MovieContextParent>
          <ThemeContext>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blog" element={<Home2 />} />
                <Route path="/:id" element={<Full />} />
                <Route path="/Login" element={<Login />} />

                <Route path="/Game" element={<Toy />} />
                <Route path="/Giphy" element={<Gif />} />
                <Route path="/Movie" element={<Movie />} />
                <Route path=":MovieId" element={<See />} />
              </Routes>
            </Layout>
          </ThemeContext>
        </MovieContextParent>
      </BrowserRouter> */}
      {/* <MovieContextParent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path=":MovieId" element={<See />} />
          </Routes>
        </BrowserRouter>
      </MovieContextParent>{" "}
      <Gif />
      <Toy /> */}
    </>
  );
}

export default App;
