import Link from "next/link";
import React from "react";
import { navMenu } from "@/global/constants";
import Logo from "@/icons/logo";

import { motion, useScroll, useSpring } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <header className="flex flex-row justify-between fixed top-0 left-0 right-0 px-4 py-6 text-white z-50 md:px-10 bg-[rgba(0,0,0,0.3)]">
      <div className="flex flex-1 justify-start items-center max-w-[200px] ">
        <Logo />
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
      <div className="hidden gap-20 md:flex items-center leading-[normal]">
        {navMenu.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className="text-[20px] text-regular font-medium"
            >
              {item.name}/&gt;
            </Link>
          );
        })}
      </div>

      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
    </header>
  );
}
