import React from "react";

function Main({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full h-[100%] flex flex-col items-center">
      <div className={`${changeTheme ? "bg-white" : "bg-[#313134]"}`}>
        <p className={`${changeTheme ? "text-[#313134]" : "text-white"}`}>
          {" "}
          Hello, I'm an indie app developer based in Japan!
        </p>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
export default Main;
