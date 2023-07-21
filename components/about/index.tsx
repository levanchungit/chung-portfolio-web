import { lstExperience, lstSkills } from "@/global/constants";
import React from "react";

type Props = {};

export default function About({}: Props) {
  let lineNumber = 1;
  return (
    <div className="flex w-full h-[1200px] px-12 bg-about bg-cover bg-center overflow-hidden md:flex-row md:justify-start md:px-10">
      <div className="flex flex-1 h-full gap-4 relative">
        <div className="w-0.5 h-full bg-main rounded-full relative top-[2%]">
          <div className="line"></div>
        </div>
        <div className="flex flex-1 flex-col relative top-[1%]">
          <h1 className="text-18 text">About/&gt;</h1>

          <div className="flex flex-col gap-2 absolute top-[4%]">
            <p className="text">
              <span className="text_number">{lineNumber}</span>
              <span className="text-main">function</span>{" "}
              <span className="text-moon_mist">createLeVanChung() &#123;</span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 1}</span>
              <span className="dot">...</span>
              <span className="text-comment">{"//"} I can, because I did.</span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 2}</span>
              <span className="dot">...</span>
              <span className="text-comment">
                {"//"} My vast variety of skills is continuously expanding.
              </span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 3}</span>
              <span className="dot">...</span>
              <span className="text-main">return </span>
              <span className="text-moon_mist">{"{"}</span>
            </p>

            <div className="text">
              <p>
                <span className="text_number">{lineNumber + 4}</span>
                <span className="dot">......</span>
                name ={" "}
                <span className="text-green font-normal">
                  {"'"}Le Van Chung{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 5}</span>
                <span className="dot">......</span>
                dayOfBirth ={" "}
                <span className="text-green font-normal">
                  {"'"}2003-08-08{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 6}</span>
                <span className="dot">......</span>
                email ={" "}
                <span className="text-green font-normal">
                  {"'"}levanchung.it@gmail.com{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 7}</span>
                <span className="dot">......</span>
                phone ={" "}
                <span className="text-green font-normal">
                  {"'"}0378484047{"'"}
                </span>
                ,
              </p>
              {/* WORK EXPERIENCE */}
              <p>
                <span className="text_number">{lineNumber + 8}</span>
                <span className="dot">......</span>
                <span className="text-orange">
                  workExperience <span>()</span>{" "}
                </span>
                {"{"}
              </p>

              {lstExperience.map((item, index) => {
                const startLine = (lineNumber + 9) * (index + 1);

                return (
                  <p className="text" key={index}>
                    <span className="text_number">{startLine}</span>
                    <span className="dot">............</span>
                    <span className="text-moon_mist">{"{"}</span>

                    {Object.entries(item).map(([key, value], subIndex) => {
                      const subLine = startLine + subIndex + 1;
                      return (
                        <p className="text" key={subIndex}>
                          <span className="text_number">{subLine}</span>
                          <span className="dot">...............</span>
                          <span className="text-moon_mist">{key} : </span>
                          <span className="text-green font-normal">
                            {"'"}
                            {value}
                            {"'"}
                          </span>
                          ,
                        </p>
                      );
                    })}

                    <span className="text_number">
                      {startLine + Object.entries(item).length + 1}
                    </span>
                    <span className="dot">............</span>
                    <span className="text-moon_mist">{"},"}</span>
                  </p>
                );
              })}

              <p>
                <span className="text_number">
                  {lineNumber + lstExperience.length + 9}
                </span>
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>

              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
              {/* EDUCATION */}
              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span className="text-orange">
                  education <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["}</span>
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">............</span>
                <span className="text-moon_mist">{"{"}</span>
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">...............</span>
                <span className="text-moon_mist">name : </span>
                <span className="text-green font-normal">
                  {"'"}FPT Polytechnic{"'"}
                </span>
                ,
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">...............</span>
                <span className="text-moon_mist">major : </span>
                <span className="text-green font-normal">
                  {"'"}Mobile Developer (React Native){"'"}
                </span>
                ,
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">...............</span>
                <span className="text-moon_mist">from : </span>
                <span className="text-green font-normal">
                  {"'"}Jan 2021{"'"}
                </span>
                ,<span className="text-moon_mist"> to : </span>
                <span className="text-green font-normal">
                  {"'"}May 2023{"'"}
                </span>
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">............</span>
                <span className="text-moon_mist">{"}"},</span>
              </p>
              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>
              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
              {/* SKILLS */}
              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span className="text-orange">
                  skills <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text">
                <span className="dot">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["} </span>
                <span className="text-moon_mist">
                  {lstSkills.map((item, index) => {
                    return (
                      <span key={index} className="text-green">
                        {"'" + item + "'"}
                        {index !== lstSkills.length - 1 && (
                          <span className="text-moon_mist">, </span>
                        )}
                      </span>
                    );
                  })}
                </span>
              </p>
              <p className="text">
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>
              <p>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
