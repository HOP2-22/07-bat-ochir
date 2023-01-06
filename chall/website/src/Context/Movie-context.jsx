import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const MovieContextData = createContext();

function MovieContextParent({ children }) {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState();

  const ColorModeHander = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=05af63efcb55ad1e4aa3775e5ecacef4&language=en-US"
      );
      setData(res.data.results);
    };
    getData();
  }, []);

  return (
    <MovieContextData.Provider
      value={{ theme: theme, changeTheme: ColorModeHander, data: data }}
    >
      {children}
    </MovieContextData.Provider>
  );
}
export default MovieContextParent;
