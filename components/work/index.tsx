import { itemWorks } from "@/global/constants";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Work({}: Props) {
  return (
    <div className="flex w-full justify-center min-h-screen bg-redd bg-cover bg-center">
      <div className="flex flex-col mx-10 ">
        <h1 className="text-some_type-medium-20 text-moon_mist">Work/&gt;</h1>
        <h2 className="text-some_type-medium-20 text-white">
          Selected UI web, mobile, video projects...
        </h2>

        <div className="flex flex-col justify-center items-center">
          {itemWorks.map((item) => (
            <div key={item.index} className="relative my-5">
              <div className="text-white absolute bottom-1 left-0 w-32">
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex flex-col h-px bg-main"></div>
                <h2>{item.numberCount}</h2>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 22.6667L20 16L13.3333 9.33337V22.6667Z"
                    fill="#F9F5EB"
                  />
                </svg>
              </div>

              <div className="flex flex-1 justify-end items-center">
                <Image
                  alt="image work"
                  src={item.image}
                  width={200}
                  height={100}
                  className="cursor-pointer sm: w-2/3 md:1/2 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
