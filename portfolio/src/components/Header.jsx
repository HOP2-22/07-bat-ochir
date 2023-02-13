import React, { useState } from "react";
import { FaPaw, FaGithub } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Header({ changeTheme, setChangeTheme }) {
  const [burger, setBurger] = useState(false);
  return (
    <div
      className={`${
        changeTheme ? "bg-[#F4EDE5]" : "dark"
      } w-full  h-[60px] flex justify-center items-center fixed `}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[620px] flex justify-between items-center">
        <div className="flex gap-1">
          <div className="flex gap-1 items-between group">
            <FaPaw
              className={`${
                changeTheme ? "text-black" : "text-white"
              } text-[20px] -rotate-[30deg] group-hover:rotate-[0] transition-transform`}
            />
            <p
              className={`${
                changeTheme ? "text-[black]" : "text-[white]"
              } text-[18px] w-[150px] font-bold `}
            >
              Bat-Ochir
            </p>
          </div>

          <div className="hidden jus gap-7 items-center md:flex ">
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
        <div className="flex gap-4">
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
          <div
            className={`${
              burger ? "hidden" : "flex"
            }bg-white border-2 w-[40px] h-[40px] flex items-center justify-center rounded-md md:hidden flex-col gap-1`}
            onClick={() => {
              setBurger(!burger);
            }}
          >
            <div
              className={`${
                burger ? "rotate-45 translate-y-[3px]" : ""
              }   h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
            ></div>
            <div
              className={`${
                burger ? "hidden" : "block"
              }  h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
            ></div>
            <div
              className={`${
                burger ? "-rotate-45 -translate-y-[3px]" : ""
              }  h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
