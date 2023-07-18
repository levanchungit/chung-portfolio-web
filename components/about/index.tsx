import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex w-full h-screen px-12 bg-about bg-cover bg-center overflow-hidden md:flex-row md:justify-start md:px-10">
      <div className="flex flex-1 h-full gap-4 relative">
        <div className="w-0.5 h-full bg-main rounded-full relative top-[2%]">
          <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
        </div>
        <div className="flex flex-1 flex-col relative top-[1%]">
          <h1 className="text-18 font-medium text-moon_mist font-stm">
            About/&gt;
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-16 text-moon_mist font-bold font-stm">
              <span className="text-main">function</span>{" "}
              <span className="text-moon_mist">createLeVanChung() &#123;</span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="opacity-0 ">...</span>
              <span className="text-comment">{"//"} I can, because I did.</span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="opacity-0 ">...</span>
              <span className="text-comment">
                {"//"} My vast variety of skills is continuously expanding.
              </span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="opacity-0 ">...</span>
              <span className="text-main">return </span>
              <span className="text-moon_mist">{"{"}</span>
            </p>

            <div className="text-16 text-moon_mist font-bold font-stm">
              <p>
                name ={" "}
                <span className="text-green font-normal">
                  {"'"}Le Van Chung{"'"}
                </span>
                ,
              </p>
              <p>
                dayOfBirth ={" "}
                <span className="text-green font-normal">
                  {"'"}2003-08-08{"'"}
                </span>
                ,
              </p>
              <p>
                email ={" "}
                <span className="text-green font-normal">
                  {"'"}levanchung.it@gmail.com{"'"}
                </span>
                ,
              </p>
              <p>
                phone ={" "}
                <span className="text-green font-normal">
                  {"'"}0378484047{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="text-orange">
                  workExperience <span>() {"{"}</span>{" "}
                </span>
                <span className="text-green font-normal">
                  {"'"}0378484047{"'"}
                </span>
                ,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
