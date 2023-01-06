import App from "../App.css";
import bg from "../imgs/bg.svg";
import photo2 from "../imgs/photo2.jpg";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Switch from "@mui/material/Switch";
import { ColorModeContext } from "../Context/Context";

function Header() {
  const navigate = useNavigate();
  const { changeTheme } = useContext(ColorModeContext);
  const [offset, setOffset] = useState(0);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const headerTitles = [
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
    {
      name: "Login",
      path: "/Login",
    },
    {
      name: "Movie",
      path: "/Movie",
    },
    {
      name: "Game",
      path: "/Game",
    },
    {
      name: "Giphy",
      path: "/Giphy",
    },
  ];
  const Team = {
    path: "/",
  };

  return (
    <div
      className="header"
      style={{
        backgroundColor: offset >= 1 ? "lightgrey" : "",
      }}
    >
      <div className="row-1">
        <div className="txt1">
          <div className="team" onClick={() => navigate(`${Team.path}`)}>
            team
          </div>
          <div className="bluee"></div>
        </div>
        <div className="tools">
          <Switch {...label} defaultChecked onChange={() => changeTheme()} />
          {headerTitles.map((title, index) => {
            return (
              <>
                <p
                  key={index}
                  className="titles"
                  onClick={() => navigate(`${title.path}`)}
                >
                  {title.name}
                </p>
              </>
            );
          })}
          <button className="header_bttn">Get access</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
