import React from "react";
import { FaPaw, FaGithub } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Header({ changeTheme, setChangeTheme }) {
  return (
    <div
      className={`${
        changeTheme ? "bg-[#F4EDE5]" : "dark"
      } w-full  h-[60px] flex justify-center items-center fixed`}
    >
      <div className="w-[50%] flex justify-center items-center gap-[250px]">
        <div className="flex gap-10">
          <div className="flex gap-1 items-center group">
            <FaPaw
              className={`${
                changeTheme ? "text-black" : "text-white"
              } text-[20px] -rotate-[30deg] group-hover:rotate-[0] transition-transform`}
            />
            <p
              className={`${
                changeTheme ? "text-[black]" : "text-[white]"
              } text-[18px] font-bold`}
            >
              Bat-Ochir Daramjav
            </p>
          </div>
          <div className="flex gap-7 items-center ">
            <p className={`${changeTheme ? "text-[black]" : "text-[white]"}`}>
              Works
            </p>
            <p className={`${changeTheme ? "text-[black]" : "text-[white]"}`}>
              Posts
            </p>
            <p className={`${changeTheme ? "text-[black]" : "text-[white]"}`}>
              Uses
            </p>
            <div className="flex items-center gap-1">
              <FaGithub
                className={`${changeTheme ? "text-[black]" : "text-[white]"}`}
              />
              <p className={`${changeTheme ? "text-[black]" : "text-[white]"}`}>
                Source
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {changeTheme ? (
            <div
              onClick={() => {
                setChangeTheme(!changeTheme);
              }}
              className="w-[40px] h-[40px] bg-[#805BD5] rounded-md flex items-center justify-center text-white "
            >
              <BsFillMoonFill className="text-[20px]" />
            </div>
          ) : (
            <div
              onClick={() => {
                setChangeTheme(!changeTheme);
              }}
              className="w-[40px] h-[40px] bg-[#FAD18D] rounded-md flex items-center justify-center 	"
            >
              <BsFillSunFill className="text-[20px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
