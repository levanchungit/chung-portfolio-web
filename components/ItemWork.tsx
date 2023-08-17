import Arrow from "@/icons/arrow";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  id: number;
  title: string;
  image: string;
};

export default function ItemWork({ id, title, image }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="item-work"
      ref={ref}
      style={{
        transform: isInView
          ? "none"
          : id % 2 == 0
          ? "translateX(200px)"
          : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="image">
        <Image
          alt="Picture of the author"
          src={image}
          width={200}
          height={100}
          className="min-w-[100px] md:min-w-[400px]"
        />
      </div>

      <div className={`content  ${id % 2 == 0 ? "reverse" : ""}`}>
        <h2 className="font-bold text-[16px] sm:text-xl">{title}</h2>
        <div className="flex flex-col h-px w-full bg-main"></div>
        <h2 className="">{id > 9 ? id : `0${id}`}</h2>
        <Arrow />
      </div>
    </div>
  );
}
