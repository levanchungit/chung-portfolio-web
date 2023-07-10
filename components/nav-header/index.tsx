import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navMenu } from "@/global/constants";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between fixed top-0 left-0 right-0 px-5 py-5 text-white">
      <div className="flex flex-1 justify-start items-center">
        <svg
          id="LogoChungPortfolio"
          data-name="LogoChungPortfolio"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1563.57 270.4"
          fill="white"
          className="sm: w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <path
            d="M372.62,932q4.39,11.21-3.6,20l-69.2,68.4q-3.6,4.41,0,7.2l68.4,68.8q8.79,8.8,4.4,20a17.8,17.8,0,0,1-6.8,8,18.34,18.34,0,0,1-10.4,3.2h-15.2a16,16,0,0,1-12.8-5.6l-80-79.6a17.37,17.37,0,0,1-5.2-12.8v-11.2q0-6.79,5.2-12.8l80-79.6a16,16,0,0,1,12.8-5.6h15.6a17.5,17.5,0,0,1,10.2,3.2A18,18,0,0,1,372.62,932Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M583.81,1106.4a50.26,50.26,0,0,1-7.2,26.4,55.13,55.13,0,0,1-19.19,19.2,50.38,50.38,0,0,1-26.4,7.2H459a51.39,51.39,0,0,1-26.6-7.2,54.49,54.49,0,0,1-19.4-19.2,50.36,50.36,0,0,1-7.21-26.4V942A51.11,51.11,0,0,1,413,915.2a54.49,54.49,0,0,1,19.4-19.2,51.39,51.39,0,0,1,26.6-7.2h72a50.38,50.38,0,0,1,26.4,7.2,55.13,55.13,0,0,1,19.19,19.2,51,51,0,0,1,7.2,26.8v10.8a17.37,17.37,0,0,1-5.2,12.8,17.84,17.84,0,0,1-13.19,5.2H554.61a18.08,18.08,0,0,1-13-5.2,17.08,17.08,0,0,1-5.39-12.8V942c0-3.73-1.74-5.6-5.2-5.6H459q-5.2,0-5.21,5.6v164.4a5.64,5.64,0,0,0,1.61,3.8,4.72,4.72,0,0,0,3.6,1.8h72a4.71,4.71,0,0,0,3.59-1.8,5.64,5.64,0,0,0,1.61-3.8v-12a18.42,18.42,0,0,1,18.39-18.4h10.81a17.51,17.51,0,0,1,13.19,5.4,18.07,18.07,0,0,1,5.2,13Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M794.21,1140.8a18.09,18.09,0,0,1-5.2,13,17.55,17.55,0,0,1-13.2,5.4H765a18.44,18.44,0,0,1-18.4-18.4v-88c0-3.2-1.74-4.8-5.2-4.8h-72q-5.2,0-5.2,4.8v88a18.44,18.44,0,0,1-18.4,18.4h-11.2a18.44,18.44,0,0,1-18.4-18.4V907.2a17.55,17.55,0,0,1,5.4-13.2,18.09,18.09,0,0,1,13-5.2h11.2a18.11,18.11,0,0,1,13,5.2,17.55,17.55,0,0,1,5.4,13.2v87.6c0,3.74,1.73,5.6,5.2,5.6h72c3.46,0,5.2-1.86,5.2-5.6V907.2A17.55,17.55,0,0,1,752,894a18.09,18.09,0,0,1,13-5.2h10.8a17.79,17.79,0,0,1,18.4,18.4Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M1004.6,1106.4a50.35,50.35,0,0,1-7.2,26.4,55.15,55.15,0,0,1-19.2,19.2,50.35,50.35,0,0,1-26.4,7.2h-72a51.39,51.39,0,0,1-26.6-7.2,54.65,54.65,0,0,1-19.4-19.2,50.35,50.35,0,0,1-7.2-26.4V907.2A17.55,17.55,0,0,1,832,894a18.09,18.09,0,0,1,13-5.2h11.2a18.09,18.09,0,0,1,13,5.2,17.55,17.55,0,0,1,5.4,13.2v199.2a5.63,5.63,0,0,0,1.6,3.8,4.75,4.75,0,0,0,3.6,1.8h72a4.75,4.75,0,0,0,3.6-1.8,5.63,5.63,0,0,0,1.6-3.8V907.2a17.55,17.55,0,0,1,5.4-13.2,18.09,18.09,0,0,1,13-5.2h10.8a17.79,17.79,0,0,1,18.4,18.4Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M1220.2,1140.8a18.44,18.44,0,0,1-18.4,18.4h-11.6q-10.8,0-16-9.2L1089,1002.4a1.75,1.75,0,0,0-2.4-1c-1.07.4-1.6,1-1.6,1.8v137.6a17.72,17.72,0,0,1-5.4,13,17.27,17.27,0,0,1-12.6,5.4h-11.2a18.44,18.44,0,0,1-18.4-18.4V907.2a17.55,17.55,0,0,1,5.4-13.2,18.09,18.09,0,0,1,13-5.2h11.6q10.8,0,16,9.2l85.2,147.6c.8,1.07,1.66,1.47,2.6,1.2a1.85,1.85,0,0,0,1.4-2V907.2A17.55,17.55,0,0,1,1178,894a18.09,18.09,0,0,1,13-5.2h10.8a18.11,18.11,0,0,1,13,5.2,17.55,17.55,0,0,1,5.4,13.2Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M1435.79,1106.4a50.35,50.35,0,0,1-7.2,26.4,55.15,55.15,0,0,1-19.2,19.2,50.35,50.35,0,0,1-26.4,7.2h-76.8a51.39,51.39,0,0,1-26.6-7.2,54.57,54.57,0,0,1-19.4-19.2,50.35,50.35,0,0,1-7.2-26.4V942a51.1,51.1,0,0,1,7.2-26.8,54.57,54.57,0,0,1,19.4-19.2,51.39,51.39,0,0,1,26.6-7.2H1383a50.35,50.35,0,0,1,26.4,7.2,55.15,55.15,0,0,1,19.2,19.2,51.1,51.1,0,0,1,7.2,26.8v10.8a17.06,17.06,0,0,1-5.4,12.8,18.07,18.07,0,0,1-13,5.2h-10.8a18,18,0,0,1-13-5.2,17.06,17.06,0,0,1-5.4-12.8V942c0-3.73-1.74-5.6-5.2-5.6h-76.8a5.67,5.67,0,0,0-3.8,1.6,5.13,5.13,0,0,0-1.8,4v164.4a6.25,6.25,0,0,0,5.6,5.6H1383a4.75,4.75,0,0,0,3.6-1.8,5.67,5.67,0,0,0,1.6-3.8v-53.6q0-4.8-4.8-4.8H1355a18.44,18.44,0,0,1-18.4-18.4v-11.2a17.09,17.09,0,0,1,5.4-12.8,18.09,18.09,0,0,1,13-5.2h62.4a18.11,18.11,0,0,1,13,5.2,17.09,17.09,0,0,1,5.4,12.8Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M1639.79,915.2l-125.2,234.4q-5.21,9.6-16,9.6h-12.4q-10.41,0-15.6-8.8-4.8-8.79-.4-18.4l125.2-233.6q5.19-9.6,16-9.6h12.4q10.39,0,15.6,8.8Q1644.58,906,1639.79,915.2Z"
            transform="translate(-242.22 -888.8)"
          />
          <path
            d="M1805.78,1029.6q0,8-5.2,12.8L1721,1122q-6.39,5.61-13.2,5.6h-15.6a16.83,16.83,0,0,1-9.8-3.2,21.14,21.14,0,0,1-7-8q-4.39-10.8,4-20l68.4-68.8q4.41-2.79,0-7.2l-68.4-68.4q-8.79-8-4-20a17.53,17.53,0,0,1,6.8-8.4,17.81,17.81,0,0,1,10-3.2h15.6q6.79,0,13.2,5.6l79.6,79.6a17.4,17.4,0,0,1,5.2,12.8Z"
            transform="translate(-242.22 -888.8)"
          />
        </svg>
      </div>
      <div className="flex flex-1 justify-end items-center md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* no mobile */}
      <div className="hidden gap-20 md:flex">
        {navMenu.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
