import React, { Component, useEffect, useState } from "react";
import { data } from "./Data";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Purple from "./Purple.css";

const Card = ({
  dataa,
  index,
  setCount,
  count,
  setImages,
  image,
  ID,
  setID,
  setTouch,
  touch,
}) => {
  const FlipCard = () => {
    setCount(count + 1);
    let newArr = image;
    newArr[index].pick = !newArr[index].pick;
    setImages([...newArr]);
  };
  const flipBack = () => {
    setImages(
      image.map((el) => {
        if (el) {
          el.pick = false;
          return el;
        } else {
          return null;
        }
      })
    );
  };

  const CheckId = (id) => {
    if (!ID) {
      setID(id);
      return;
    }
    if (id == ID) {
      setTimeout(() => {
        setImages(
          image.map((image) =>
            image ? (image.id == id ? null : { ...image, pick: false }) : null
          )
        );
        setID(null);
        // flipBack();
      }, 1000);
    } else {
      setTimeout(() => {
        flipBack();
      }, 400);
      setID(null);
    }
  };
  if (dataa == null) {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    );
  }

  return (
    <div
      onClick={() => {
        FlipCard();
        CheckId(dataa.id);
        setTouch(true);
      }}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        transform: `rotateY(${dataa.pick ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "red",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          pointerEvents: `${touch ? "none " : "auto"}`,
        }}
      ></div>
      <img
        src={dataa.image}
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          pointerEvents: `${touch ? "none " : "auto"}`,
        }}
      />
    </div>
  );
};

function Game() {
  const [ID, setID] = useState(null);
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  const [touch, setTouch] = useState(false);
  const generate = () => {
    setImages(
      data.sort(function () {
        return Math.random() - 0.5;
      })
    );
  };
  console.log(images);
  useEffect(() => {
    generate();
  }, []);
  return (
    <body
      style={{
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
          {images?.map((dataa, index) => {
            return (
              <Card
                dataa={dataa}
                index={index}
                setCount={setCount}
                count={count}
                setImages={setImages}
                image={images}
                setID={setID}
                ID={ID}
                key={index}
                setTouch={setTouch}
                touch={touch}
              />
            );
          })}
        </div>
      </Container>
    </body>
  );
}
export default Game;
