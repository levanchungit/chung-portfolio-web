import { itemWorks } from "@/global/constants";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Work({}: Props) {
  return (
    <div className="flex flex-col w-full justify-center min-h-screen bg-red-primary ">
      <div className="flex flex-col mx-10">
        <h1 className="text-some_type-medium-20 text-moon_mist">Work/&gt;</h1>
        <h2 className="text-some_type-medium-20 text-white">
          Selected UI web, mobile, video projects...
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
        {itemWorks.map((item) => (
          <div key={item.index} className="relative my-5">
            <div
              className={`flex flex-col text-white absolute bottom-1 left-0 w-32 items-start`}
            >
              <h2 className={`font-bold text-left`}>{item.title}</h2>
              <div className="flex flex-col h-px w-full bg-main"></div>
              <h2 className="">{item.numberCount}</h2>
              
            </div>

            <div className="flex flex-1 justify-center items-center">
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
  );
}
