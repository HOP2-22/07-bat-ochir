import React, { Component, useState } from "react";
import { data } from "./Data";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function Game() {
  const [refresh, setRefresh] = useState(false);
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(false);
  const [images, setImages] = useState(
    data.sort(function () {
      return Math.random() - 0.5;
    })
  );

  return (
    <body
      style={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div
          className=""
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "Repeat(4 ,minmax(0 , 1fr))",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          {images.map((dataa, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    height: "200px",
                    width: "200px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "-204px",
                      width: "200px",
                      height: "200px",
                      backgroundColor: "aqua",
                      display: `${!dataa.pick ? "flex" : "none"}`,
                    }}
                    onClick={() => {}}
                  ></div>
                  <img
                    src={dataa.image}
                    style={{
                      width: "200px",
                      height: "200px",
                      zIndex: "1",
                      display: `${dataa.pick ? "flex" : "none"}`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </body>
  );
}
export default Game;
