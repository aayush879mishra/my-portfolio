"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky p-3 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer "
      >
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          url=" https://www.linkedin.com/in/ayush879"
          fgColor="#B5B9C1"
          bgColor="transparent"
          className=" cursor-pointer transition-transform duration-300 hover:scale-110"
        />
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          network="twitter"
          fgColor="#B5B9C1"
          bgColor="transparent"
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          network="instagram"
          fgColor="#B5B9C1"
          bgColor="transparent"
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
        <SocialIcon
          target="_blank"
          rel="noopener noreferrer"
          network="github"
          fgColor="#B5B9C1"
          bgColor="transparent"
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </motion.div>
     <motion.div
  initial={{
    x: 500,
    opacity: 0,
    scale: 0.5,
  }}
  animate={{
    x: 0,
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1.5,
  }}
  className="flex items-center gap-4 cursor-pointer pt-3 pr-3 md:pt-0"
>
  {/* Email Link */}
  <div>
  <a
    href="mailto:aayush879mishra@gmail.com?subject=Portfolio%20Contact"
    target="_blank"
      rel="noopener noreferrer"
    className="text-sm text-[#B5B9C1] uppercase flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105"
    aria-label="Get in touch"
  >
    <IoIosMail className="h-6 w-6" />
    <span className="hidden md:inline">Get in touch</span>
  </a>
</div>


  {/* Resume Download */}
  <div>
    <Link
      href="/Ayush Mishra CVv.pdf"
      download="Ayush_Mishra_Resume.pdf"
      className="text-sm text-[#B5B9C1] uppercase flex items-center justify-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
    >
      <FaFileDownload className="h-4 w-6" />
      <span className="hidden md:inline">Download Resume</span>
    </Link>
  </div>
</motion.div>
    </header>
  );
}
