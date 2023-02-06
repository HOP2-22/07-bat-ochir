import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function OnWeb({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full  flex flex-col gap-5">
      <div
        className={`${
          changeTheme
            ? "text-[black] border-[gray]"
            : "text-gray-200/70 border-[white]/50 "
        } text-[20px] font-semibold border-b-2 w-[110px] flex items-center gap-4 justify-center
      }`}
      >
        On the web
      </div>

      <div className="flex flex-col gap-3 p-2">
        <p
          className={`${
            changeTheme ? "text-[#2c7a7c]" : "text-[#81e4d8]"
          } flex items-center gap-3 text-[18px] `}
        >
          <AiFillGithub />
          spaceishere
        </p>
        <p
          className={`${
            changeTheme ? "text-[#2c7a7c]" : "text-[#81e4d8]"
          } flex items-center gap-3 text-[18px] `}
        >
          <AiOutlineTwitter />
          batukatoshyyy
        </p>
        <p
          className={`${
            changeTheme ? "text-[#2c7a7c]" : "text-[#81e4d8]"
          } flex items-center gap-3 text-[18px] `}
        >
          <AiOutlineTwitter />
          batukaishere
        </p>
        <p
          className={`${
            changeTheme ? "text-[#2c7a7c]" : "text-[#81e4d8]"
          } flex items-center gap-3 text-[18px] `}
        >
          <AiOutlineInstagram />
          batuka_777
        </p>
      </div>
      <div className="flex  gap-8">
        <div className="flex flex-col justify-center items-center">
          <iframe
            src="https://www.w3schools.com"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
          <p
            className={`${
              changeTheme ? "text-[black]" : "text-gray-200/70 "
            } font-sans text-[16px] text-center
            }`}
          >
            Dev as Life <br />
            My Youtube channel (100k subs)
          </p>
        </div>
        <div className="">
          <iframe
            src="https://www.facebook.com/profile.php?id=100086265115528"
            title="Spaceee"
          ></iframe>
          <p
            className={`${
              changeTheme ? "text-[black]" : "text-gray-200/70 "
            } font-sans text-[16px] text-center
            }`}
          >
            Inkdrop <br />a Markdown note-takin app
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button className="bg-[#339795] flex items-center justify-center text-white w-[150px] h-[40px] rounded-lg">
          Porpular post
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default OnWeb;
