"use client";
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
      duration:2.5
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#384347] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="absolute border border-[#2d3436] rounded-full h-[350px] w-[350px] mt-52" />
        <div className="absolute border border-[#343d40] rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
        <div className="absolute border border-[#aae2f8] rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
        <div className="absolute border border-[#32393b] rounded-full h-[800px] w-[800px] mt-52 animate-pulse" />
    </motion.div>
  )
}