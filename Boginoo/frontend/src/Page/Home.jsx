import Logo from "../components/Logo";
import Search from "../components/Search";
import { Context } from "../Context/Context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const { user, checkUpdates } = useContext(Context);
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);

  return (
    <div
      className="py-[300px]"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Logo />
        <Search />
      </div>
      {links.length !== 0 ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Home;
