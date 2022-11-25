import React, { useEffect, useState } from "react";
import tunel1 from "../imgs/tunel1.png";
import mouse from "../imgs/mouse.png";
import tunel2 from "../imgs/tunel2.png";
import { width } from "@mui/system";

function Toy() {
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(30);
  const [click, setClick] = useState(true);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [score, setScore] = useState(0);
  const [move, setMove] = useState(new Array(15).fill(false));
  const translation = () => {
    let set = Math.floor(Math.random() * 15);
    move[set] = true;

    setTimeout(() => {
      move[set] = false;
    }, 1000);
  };
  useEffect(() => {
    let inter = null;
    inter = setInterval(() => {
      translation();
    }, [2000]);
    return () => clearInterval(inter);
  }, [click]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 10);
      if (seconds >= 100) {
        setMin(min - 1);
        setSeconds(0);
      }

      return () => clearInterval(interval);
    }
  }, [seconds, start]);

  return (
    <body
      style={{
        backgroundColor: "#b40001",
        width: "100vw",
        height: "100vh",
        padding: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className=""
          style={{ width: "100vw ", display: "flex", justifyContent: "center" }}
        >
          <div
            className=""
            style={{ display: "flex", flexDirection: "row", gap: "150px" }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <p style={{ fontSize: "36px", color: "white" }}>Time:</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ fontSize: "36px", color: "white" }}>{min}</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "36px", color: "white" }}>Score:{score}</p>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className=""></div>
        <div></div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "Repeat(5,minmax(0 , 1fr))",
            gap: "20px",
          }}
        >
          {move.map((movee, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "px",
                  alignItems: "center",
                }}
              >
                <img
                  src={tunel2}
                  style={{
                    position: "relative",
                    zIndex: "1",
                    width: "128px",
                    height: "128px",
                  }}
                />
                <img
                  onClick={() => {
                    setScore((e) => e + 1);
                  }}
                  src={mouse}
                  style={{
                    position: "relative",
                    zIndex: "2",
                    width: "64px",
                    height: "128px",
                    marginTop: "-100px",
                    transform: `translateY(${!movee ? "50px" : "0px"})`,
                    transition: "all 1s",
                  }}
                />
                <img
                  src={tunel1}
                  style={{
                    position: "relative",
                    zIndex: "3",
                    marginTop: "-50px",
                    width: "128px",
                    height: "104px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          className="bttn1"
          onClick={() => {
            setStart(true);
            setClick(true);
          }}
          style={{
            width: "320px",
            height: "96px",
            borderRadius: "64px",
            border: "none",
            backgroundColor: "#00CEA9",
            fontSize: "32px",
            color: "white",
            marginTop: "100px",
          }}
        >
          START
        </button>
      </div>
    </body>
  );
}
export default Toy;
