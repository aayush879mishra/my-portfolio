"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import img from "../public/me3.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, My name is Ayush",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={img.src}
        className="relative rounded-full h-32 w-32 mx-auto object-cover transition-transform duration-300 hover:scale-110"
        alt="Ayush's Profile Picture"
      />
      <div className="z-20 ">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">
            {text} <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>
        <div className="pt-3 md:pt-5 flex flex-wrap justify-center gap-2">
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>  
        </div>
      </div>
    </div>
  );
}
