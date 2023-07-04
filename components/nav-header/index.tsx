import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navMenu } from "@/global/constants";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex flex-row justify-between fixed top-0 left-0 right-0 p-10 bg-slate-600">
      <div>
        <Image
          alt="Logo ChungPortfolio"
          src={
            "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688480880/logo_bzghgx.png"
          }
          width={200}
          height={72}
          style={{ height: "auto", width: "80%" }}
        />
      </div>

      <div className="flex gap-20">
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
