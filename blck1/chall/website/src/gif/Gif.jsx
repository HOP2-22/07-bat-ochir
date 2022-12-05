import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Repeat } from "@mui/icons-material";

function Gif() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=GdQF2Y8WBlfFCARXtpK9pLpVGefoxPod&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`,
  });
  const getData = async () => {
    try {
      const res = await instance.get("/");
      console.log(res);
      setData(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <body
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            width: "100vw",
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <input
            placeholder="gif search here"
            type={"text"}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            style={{
              fontSize: "30px",
              backgroundColor: "transparent",
              border: "2px solid blue",
              borderRadius: "5px",
              height: "50px",
            }}
            onKeyDown={(e) => {
              e.key == "Enter" && getData();
            }}
          />

          <button
            onClick={getData}
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: "transparent",
              border: "2px solid red",
              borderRadius: "5px",
              fontSize: "30px",
            }}
          >
            search
          </button>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "Repeat(5,minmax(0 , 1fr))",
          }}
        >
          {data?.map((dataa, index) => {
            if (data.length === 0) {
              return <div>nonne</div>;
            } else {
              return (
                <div
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={dataa.images.fixed_height.url}
                    style={{ width: "100%", height: "250px" }}
                  />
                </div>
              );
            }
            console.log(dataa);
          })}
        </div>
      </div>
    </body>
  );
}
export default Gif;
