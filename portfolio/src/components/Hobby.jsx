import React from "react";
import { AiFillHeart } from "react-icons/ai";

function Hobby({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div
        className={`${
          changeTheme
            ? "text-[black] border-[gray]"
            : "text-gray-200/70 border-[white]/50 "
        } text-[20px] font-semibold border-b-2 w-[40px] flex items-center gap-4 justify-center
      }`}
      >
        I <AiFillHeart />
      </div>
      <div
        className={`${
          changeTheme ? "text-[black]" : "text-gray-200/70 "
        } flex text-[12px]  indent-1 w-full sm:indent-0 sm:text-[15px] md:text-[20px] lg:text-[19px]`}
      >
        <p className="flex">
          Art, Music,
          <span
            className={`${
              changeTheme ? "text-[#6d97e8]" : "text-[#df59ab] "
            } hover:underline `}
          >
            Drawing
          </span>
          , Playing Drums,
          <span
            className={`${
              changeTheme ? "text-[#6d97e8]" : "text-[#df59ab] "
            } hover:underline  `}
          >
            Photography
          </span>
          , Leica, Machine Learning
        </p>
      </div>
    </div>
  );
}

export default Hobby;
