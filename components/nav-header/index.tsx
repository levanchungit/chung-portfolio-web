import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navMenu } from "@/global/constants";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between fixed top-0 left-0 right-0 px-5 py-5 text-white">
      <div className="flex flex-1 justify-start items-center">
        <Image
          alt="Logo ChungPortfolio"
          src={
            "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688480880/logo_bzghgx.png"
          }
          width={175}
          height={100}
          className="cursor-pointer max-h-72 max-w-200"
        />
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
