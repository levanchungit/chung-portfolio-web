"use client";
import React from "react";

type Props = {
  children: string;
};

export default function Button({ children }: Props) {
  const handleClick = () => {
    console.log("HANDLE");
  };
  return <button onClick={handleClick}>{children}</button>;
}
