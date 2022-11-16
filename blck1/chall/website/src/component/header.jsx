import App from "../App.css";
import bg from "../imgs/bg.svg";
import photo2 from "../imgs/photo2.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const headerTitles = [
    {
      name: "Home",
      path: "/Home",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ];
  return (
    <div
      className="header"
      style={{
        backgroundColor: offset >= window.innerHeight ? "lightgrey" : "",
      }}
    >
      <div className="row-1">
        <div className="txt1">
          <div className="team">team</div>
          <div className="bluee"></div>
        </div>
        <div className="tools">
          {headerTitles.map((title, index) => {
            return (
              <p
                key={index}
                className="titles"
                onClick={() => navigate(`${title.path}`)}
              >
                {title.name}
              </p>
            );
          })}
          <button className="header_bttn">Get access</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
