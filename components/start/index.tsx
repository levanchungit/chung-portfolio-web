import React from "react";

type Props = {};

export default function Start({}: Props) {
  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-background-start bg-cover bg-center">
      {/* div line vertical have a dot position top of line */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-px h-10 bg-white rounded-full relative">
          <div className="w-1 h-1 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-800"></div>
        </div>
      </div>
      <div className="flex flex-col mx-10">
        <h1 className="text-some_type-medium-30 text-moon_mist">Hi/&gt;</h1>
        <h2 className="text-white">I am</h2>
        <h2 className="text-2xl font-bold text-white">ChungPortfolio</h2>
        <h2 className="text-2xl font-bold text-white">Mobile Developer</h2>
        <h2 className="text-2xl font-bold text-white">Let me show you...</h2>
      </div>
    </div>
  );
}
