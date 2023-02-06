import React from "react";

function Bio({ changeTheme, setChangeTheme }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className={`${
          changeTheme
            ? "text-[black] border-[gray]"
            : "text-gray-200/70 border-[white]/50 "
        } text-[20px] font-semibold border-b-2 w-[33px] 
            }`}
      >
        Bio
      </div>
      <div
        className={`${
          changeTheme ? "text-[black]" : "text-gray-200/70 "
        } text-lg `}
      >
        <div className="flex gap-4">
          <p>2005</p>
          <p
            className={`${changeTheme ? "text-[black]" : "text-gray-200/70 "}`}
          >
            Born in Darkhan (Дархан), Mongila.
          </p>
        </div>
        <div className="flex gap-4">
          <p>2010</p>
          <p className="text-justify">
            Completed the Master's Program in the Graduate School of Information
            Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </p>
        </div>
        <div className="flex gap-4">
          <p>2012</p>
          <p>Studied at 82th School! Mongolia Ulaanbaatar</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Bio;
