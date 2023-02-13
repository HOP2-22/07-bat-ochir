import React from "react";

function Main({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full  flex flex-col items-center gap-4">
      <div className="w-full flex flex-col justify-center items-center gap-[20px]">
        <div className="bg-[white]/50 w-full flex items-center justify-center h-[50px] rounded-[12px] drop-shadow-2xl text-[14px] sm:text-[16px] md:text-[20px]">
          Hello, I'm study at software engineer in Mongolia
        </div>

        <div className="flex  items-center w-full gap-5 flex-col lg:flex-row lg:justify-between">
          <div className="w-full flex flex-col lg:w-auto">
            <p
              className={`${
                changeTheme ? "text-[black]" : "text-gray-200/70 "
              } font-sans text-[36px]             }`}
            >
              Bat-Ochir Daramjav
            </p>
            <p
              className={`${changeTheme ? "text-[black]" : "text-gray-200/70 "}
            } text-[14px] md:text-[20px]`}
            >
              Digital Craftsman ( Developer / Designer / Gamer )
            </p>
          </div>
          <div className="border-2 w-[96px] h-[96px] border-white rounded-full">
            <img src="/pf.jpeg" className="w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
