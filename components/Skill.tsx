"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  imageUrl: string;
  skillName: string;
};

export default function Skill({ directionLeft, imageUrl, skillName }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      {/* Skill Icon */}
      <motion.div
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        className="rounded-full bg-gray-900/80 border border-gray-800 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2 transition-all duration-300"
      >
        <Image
          src={imageUrl}
          alt={skillName}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/48x48/333/FFF?text=Skill";
          }}
        />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-3 py-1 rounded-md border border-gray-700 whitespace-nowrap">
        <p className="text-xs md:text-sm text-white">{skillName}</p>
      </div>
    </div>
  );
}