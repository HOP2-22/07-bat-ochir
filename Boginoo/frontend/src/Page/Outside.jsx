import React, { useEffect } from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { Context } from "../Context/Context";

export default function Outside() {
  const { user, checkUpdates } = useContext(Context);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:7070/link/${user?._id}`);
      setLinks(res?.data);
    };
    getData();

    console.log(links);
  }, [checkUpdates]);
  return (
    <div className="w-[730px]">
      <p className="text-3xl font-bold text-[#02B589] pt-10 mb-4">Түүх</p>
      {links?.map((el, index) => {
        return (
          <div
            className="w-full border-b pb-4 flex justify-between mb-2"
            key={index}
          >
            <div className="">
              <p className="text-[]">Өгөгдсөн холбоос:</p>
              <p>{el?.orignal_link}</p>
            </div>
            <div className="flex gap-8 items-end w-[300px]">
              <div className="flex flex-col ">
                <p>Богино холбоос:</p>
                <p>http://localhost:3000/{el?.short_link}</p>
              </div>
              <div
                className="text-[#02B589] underline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `http://localhost:3000/${el?.short_link}`
                  );
                }}
              >
                Хуулж авах
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
