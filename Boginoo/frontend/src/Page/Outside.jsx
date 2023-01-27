import React, { useEffect } from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Context } from "../Context/Context";

import Logo from "../components/Logo";
import Search from "../components/Search";

export default function Outside() {
  const { user, checkUpdates, outside } = useContext(Context);
  console.log(outside);
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10">
        <Logo />
        <Search />
      </div>
      <div className="w-full flex">
        {outside && (
          <>
            <div className="w-full  pb-4 flex justify-center mb-2 items-center">
              <div className="w-[25%] flex gap-[30px] mt-11 flex-col">
                <div className="">
                  <p className="text-gray-500">Өгөгдсөн холбоос:</p>
                  <p>{outside?.data?.orignal_link}</p>
                </div>
                <div>
                  <p className="text-gray-500">Богино холбоос:</p>
                  <div className="flex gap-[200px]">
                    <p>http://localhost:3000/{outside?.data?.short_link}</p>
                    <p
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `http://localhost:3000/${outside?.data?.short_link}`
                        );
                      }}
                      className="text-[#02B589]"
                    >
                      Хуулж авах
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
