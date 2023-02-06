import React from "react";

function Main({ changeTheme, setChangeTheme }) {
  const image =
    "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/324091240_1288137451965921_2673753385246419627_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=8lBceEczWakAX_3rN9-&_nc_ht=scontent.fuln2-2.fna&oh=00_AfA6hYopQ2lgkI2FAAKgiJWKUcm4N7W0njVrI3cOGVjoWg&oe=63E5B125";
  return (
    <div className="w-[620px]  flex flex-col items-center gap-4">
      <div className="w-full flex flex-col justify-center items-center gap-[20px]">
        <div className="bg-[white]/50 w-full flex items-center justify-center h-[50px] rounded-[12px] drop-shadow-2xl">
          Hello, I'm an indie app developer based in Mongolia!
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div>
              <p
                className={`${
                  changeTheme ? "text-[black]" : "text-gray-200/70 "
                } font-sans text-[36px]
            }`}
              >
                Bat-Ochir Daramjav
              </p>
              <p
                className={`${
                  changeTheme ? "text-[black]" : "text-gray-200/70 "
                }
            }`}
              >
                Digital Craftsman ( Developer / Designer / Gamer )
              </p>
            </div>
            <div className="border-2 border-white rounded-full">
              <img src={image} className="w-[96px] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
