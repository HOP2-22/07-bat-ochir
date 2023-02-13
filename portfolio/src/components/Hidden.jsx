import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Hidden({ changeTheme }) {
  return (
    <div
      className={`${
        changeTheme ? "hover:decoration-gray-900" : "hover:decoration-white"
      } flex items-center cursor-pointer hover:underline`}
    >
      (
      <div>
        <AiFillGithub
          className={`${changeTheme ? "text-white" : "text-black"} `}
        />
      </div>
      )
      <p
        className={`${
          changeTheme
            ? "text-white hover:decoration-white"
            : "text-gray-800 hover:decoration-gray-8000"
        } hover:underline underline-offset-4`}
      ></p>
    </div>
  );
}

export default Hidden;
