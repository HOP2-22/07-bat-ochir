import React, { useEffect, useState } from "react";
import tunel1 from "../imgs/tunel1.png";
import mouse from "../imgs/mouse.png";
import tunel2 from "../imgs/tunel2.png";
import { width } from "@mui/system";

const GameOver = ({ totalPoint, totalMin }) => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "300px",
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
          display: `(${totalMin == 0 ? "flex" : "none"})`,
        }}
      >
        <div
          className=""
          style={{
            height: "100% ",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}>Good❤️😊</p>
          <p style={{ fontSize: "20px" }}>your score:{totalPoint}</p>
          <b>daraagin udaa ilu xicegerei amjilt ~_~</b>
          <button
            style={{ height: "50px", fontSize: "20px" }}
            onClick={refreshPage}
          >
            play again
          </button>
        </div>
      </div>
    </div>
  );
};

function Toy() {
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(30);
  const [click, setClick] = useState(false);

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [move, setMove] = useState(new Array(15).fill(false));
  const translation = () => {
    let set = Math.floor(Math.random() * 15);
    move[set] = true;

    setTimeout(() => {
      move[set] = false;
    }, 700);
  };
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  useEffect(() => {
    let inter = null;
    inter = setInterval(() => {
      translation();
    }, [2000]);
    return () => clearInterval(inter);
  }, [click]);

  useEffect(() => {
    if (click) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 10);
      if (seconds >= 100) {
        setMin(min - 1);
        setSeconds(0);
      }
      if (min == 0) {
        setMin(0);
      }

      return () => clearInterval(interval);
    }
  }, [seconds, click]);

  return (
    <body
      style={{
        backgroundColor: min == 0 ? "blue" : "#b40001",
        width: "100vw",
        height: "100vh",
        padding: "0",
        position: "relative",
      }}
    >
      {min == 0 && <GameOver totalPoint={score} totalMin={min} />}
      <div
        style={{
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          display: min == 0 ? "none" : "flex",
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

                  alignItems: "center",
                }}
              >
                <img
                  draggable="false"
                  src={tunel2}
                  style={{
                    position: "relative",
                    zIndex: "1",
                    width: "128px",
                    height: "100px",
                  }}
                />
                <img
                  draggable="false"
                  onClick={() => {
                    setScore((e) => e + 1);
                  }}
                  src={mouse}
                  style={{
                    position: "relative",
                    zIndex: "2",
                    width: "68px",
                    height: "104px",
                    marginTop: "-65px",
                    transform: `translateY(${!movee ? "50px" : "0px"})`,
                    transition: "all 0.3s",
                  }}
                />
                <img
                  draggable="false"
                  src={tunel1}
                  style={{
                    position: "relative",
                    zIndex: "3",
                    marginTop: "-55px",
                    width: "128px",
                    height: "110px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          className="bttn1"
          onClick={() => {
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
