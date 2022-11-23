import { Container } from "@mui/system";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { MovieContextData } from "../Context/Movie-context";
import App from "./Movie.css";

function Movie() {
  const [inpuValue, setInputValue] = useState("");
  console.log(inpuValue);
  const { data } = useContext(MovieContextData);
  console.log(data);
  return (
    <>
      <header
        style={{
          width: "100vw",
          height: "150px",
          backgroundColor: "aqua",
          marginBottom: "50px",
        }}
      ></header>
      <Container>
        <div
          className=""
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "Repeat(2,minmax(0 , 1fr))",
            gap: "50px",
          }}
        >
          {data?.map((dataa, index) => {
            return (
              //   <div
              //     style={{
              //       height: "600px",
              //       display: "flex",
              //       gap: "10px",
              //       flexDirection: "column",
              //       backgroundImage: `url(https://image.tmdb.org/t/p/original${dataa?.poster_path})`,
              //       backgroundSize: "contain",
              //       backgroundRepeat: "no-repeat",
              //     }}
              //   >
              //     <button
              //       style={{
              //         paddingTop: "15px",
              //         paddingBottom: "15px",
              //         width: "300px",
              //         backgroundColor: "transparent",
              //         border: "none",
              //         fontSize: "50px",
              //         color: "white",
              //       }}
              //     >
              //       See more
              //     </button>
              //     <p
              //       style={{
              //         color: "white",
              //         fontSize: "45px ",
              //         marginTop: "500px",
              //         marginLeft: "75px",
              //       }}
              //     >
              //       <span style={{ color: "aqua" }}>VOTE:</span>
              //       {dataa.vote_average}
              //       /10
              //     </p>
              //   </div>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${dataa?.poster_path}`}
                  alt=""
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "500px",
                  }}
                />
                <p style={{ position: "absolute" }}>{dataa.vote_average}</p>
                <button
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    zIndex: "3",
                  }}
                >
                  See More
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
export default Movie;
