import React from "react";

type Props = {};

export default function Start({}: Props) {
  return (
    <div
      className="flex p-10 w-full justify-center items-center min-h-screen bg-background-start bg-cover bg-center overflow-hidden md:flex-row
    md:justify-start md:px-20"
    >
      <div className="w-px h-screen bg-main rounded-full relative bottom-1/2 translate-y-[44%]">
        <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-800"></div>
      </div>
      <div className="flex flex-col px-10">
        <h1 className="text-some_type-medium-30 text-moon_mist">Hi/&gt;</h1>
        <h2 className="text-white">I am</h2>
        <h2 className="text-2xl font-bold text-white">ChungPortfolio</h2>
        <h2 className="text-2xl font-bold text-white">Mobile Developer</h2>
        <h2 className="text-2xl font-bold text-white">Let me show you...</h2>
      </div>
    </div>
  );
}
