import React, { useContext } from "react";
import { ColorModeContext } from "./ThemeContext";
function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div
      style={{
        backgroundColor: `${theme ? "lightblue" : "lightgrey"}`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>home theme : {theme ? "dark" : "white"}</div>
      <button onClick={() => changeTheme()}>click here</button>
    </div>
  );
}
export default Home;
