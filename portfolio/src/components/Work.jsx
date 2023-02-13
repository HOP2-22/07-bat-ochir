import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Work({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[20px]">
      <div className="w-full">
        <p
          className={`${
            changeTheme
              ? "text-[black] border-[gray]"
              : "text-gray-200/70 border-[white]/50 "
          } text-[20px] font-semibold border-b-2 w-[56px]
    }`}
        >
          Work
        </p>
      </div>
      <p
        className={`${changeTheme ? "text-[black]" : "text-gray-200/70 "}
    text-justify text-[12px] indent-4 md:text-[20px]`}
      >
        Takuya is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called
        <span
          className={`${
            changeTheme ? "text-[#6d97e8]" : "text-[#df59ab] "
          } hover:underline pl-1 pr-1  `}
        >
          Inkdrop
        </span>
        . He publishes content for marketing his products and his YouTube
        channel called
        <span
          className={`${
            changeTheme ? "text-[#6d97e8]" : "text-[#df59ab] "
          } hover:underline pl-1 pr-1  `}
        >
          "Dev as Life"
        </span>
        has more than 100k subscribers.
      </p>

      <button className="bg-[#339795] flex items-center justify-center text-white w-[150px] h-[40px] rounded-lg">
        My portfolio
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
}

export default Work;
