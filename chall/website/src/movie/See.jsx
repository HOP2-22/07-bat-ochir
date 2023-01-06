import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContextData } from "../Context/Movie-context";
function See() {
  const { MovieId } = useParams();
  const { data } = useContext(MovieContextData);

  return (
    <>
      {data?.map((dataa, index) => {
        if (MovieId == dataa.title) {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="">
                <img
                  src={`https://image.tmdb.org/t/p/original${dataa?.poster_path}`}
                  style={{ width: "500px", height: "800px" }}
                />
              </div>
              <div className=""></div>
            </div>
          );
        }
      })}
    </>
  );
}
export default See;
