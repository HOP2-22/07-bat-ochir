import React from "react";
import Logo from "../components/Logo";

function Forgetpass() {
  const sendmail = () => {};
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-[50px]">
      <Logo />
      <div>
        <p className="text-[#02B589] text-[32px] font-sans">Нууц үг сэргээх</p>
        <p className="text-[16px] leading-[25px]">
          Бид таны цахим хаяг руу нууц үг <br /> сэргээх хаяг явуулах болно.
        </p>
      </div>
      <div className="flex gap-[-10px] flex-col">
        <div className="mb-[30px]">
          <p className="text-[16px] font-sans ml-[20px]">Цахим хаяг</p>
          <input
            className="w-[381px] h-[44px] rounded-[100px] focus:outline-none pl-6"
            style={{ boxShadow: "0px 0px 15px -10px" }}
          />
        </div>
        <button
          className="w-[381px] h-[44px] rounded-[100px] bg-main text-white text-[20px] font-sans"
          onClick={() => {
            sendmail();
          }}
        >
          Илгээх
        </button>
      </div>
    </div>
  );
}
export default Forgetpass;
