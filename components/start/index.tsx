import React from "react";

type Props = {};

export default function Start({}: Props) {
  return (
    <div className="flex items-center min-h-screen bg-background-start bg-cover">
      <div className="flex flex-col mx-60">
        <h1 className="text-some_type-medium-30 text-moon_mist">Hi/&gt;</h1>
        <h2>I am</h2>
        <h2 className="text-2xl font-bold ">ChungPortfolio</h2>
        <h2 className="text-2xl font-bold text-white">Mobile Developer</h2>
        <h2 className="text-2xl font-bold text-white">Let me show you...</h2>
      </div>
    </div>
  );
}
