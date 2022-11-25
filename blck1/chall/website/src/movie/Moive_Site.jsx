import { Container } from "@mui/system";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContextData } from "../Context/Movie-context";
import App from "./Movie.css";

function Movie() {
  const [inpuValue, setInputValue] = useState("");
  console.log(inpuValue);
  const navigate = useNavigate();
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
            gridTemplateColumns: "Repeat(3,minmax(0 , 1fr))",
            gap: "30px",
          }}
        >
          {data?.map((dataa, index) => {
            return (
              <div
                style={{
                  border: "1px solid grey",
                  width: "350px",
                  height: "500px",
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  alignItems: "center",
                  background:
                    " linear-gradient(to top, #4281e0, #0085ca,  #ABDCFF, #0396FF)",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${dataa?.poster_path}`}
                  alt=""
                  style={{
                    position: "relative",
                    width: "250px",
                    height: "400px",
                  }}
                />
                <p
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  {dataa?.title}
                </p>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    borderRadius: "3px",
                    width: "100px",
                    height: "25px",
                    fontSize: "15px",
                  }}
                  onClick={() => {
                    navigate(`/${dataa.title}`);
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
