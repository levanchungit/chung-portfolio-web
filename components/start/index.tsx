import React from "react";

type Props = {};

export default function Start({}: Props) {
  return (
    // <div
    //   className="flex w-full h-screen items-center px-12 bg-background-start bg-cover bg-center overflow-hidden
    //   md:flex-row md:justify-start md:px-20"
    // >
    //   <div className="flex flex-1 h-full items-center gap-12 relative">
    //     <div className="w-0.5 h-full bg-main rounded-full relative top-[45%]">
    //       <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
    //     </div>
    //     <div className="flex flex-1 flex-col">
    //       <h1 className="text-30 text-moon_mist font-stm">Hi/&gt;</h1>
    //       <div className="flex gap-2">
    //         <h2 className="text-white tz-32 font-ls">I am</h2>
    //         <h2 className="text-name">Le Van Chung</h2>
    //       </div>
    //       <h2 className="text-white tz-32 font-bold font-ls">Mobile Developer</h2>
    //       <h2 className="text-white tz-32 font-ls">Let me show you...</h2>
    //     </div>
    //   </div>
    // </div>

    <div className="flex w-full h-screen items-center justify-items-center bg-background-start bg-cover bg-center">
      <div className="w-0.5 h-full bg-main rounded-full relative left-10 top-[45%] sm:left-[20%]">
        <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
      </div>

      <div className="flex flex-1 flex-col px-[60px] leading-[normal] gap-y-3 sm:px-[25%] text-9xl">
        <h1 className="text-2xl text-moon_mist font-medium font-stm">
          Hi/&gt;
        </h1>{" "}
        <div className="flex gap-2 text-[32px]">
          <h2 className="text-white font-normal font-ls">I am</h2>
          <h2 className="text-name font-semibold font-ls">Le Van Chung</h2>
        </div>{" "}
        <span className="text-white text-[30px] font-bold font-ls">
          Mobile Developer
        </span>
        <h2 className="text-white text-[24px] font-regular font-ls">
          Let me show you...
        </h2>{" "}
      </div>
    </div>
  );
}
