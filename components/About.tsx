"use client";
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../public/me1.jpg";

type Props = object;

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center h-screen px-4 mx-auto overflow-hidden text-center md:text-left md:flex-row max-w-7xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F7AB0A]/10 via-transparent to-[#F7AB0A]/10 opacity-20" />

      

      {/* Profile Image - Circular on mobile, Rectangular on larger screens */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="  mb-8 md:mb-0 md:mt-0 md:mr-10"
      >
        <img
          src={aboutImg.src}
          alt="Profile picture"
          className="w-48 h-48 rounded-full md:rounded-lg object-cover shadow-xl md:w-64 md:h-80 xl:w-72 xl:h-96 border-4 border-[#F7AB0A]/50 hover:border-[#F7AB0A] transition-all duration-300"
        />
        <div className="absolute md:hidden inset-0 rounded-full md:rounded-lg border-2 border-white/30 mix-blend-overlay pointer-events-none" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6 px-0 md:px-10 max-w-2xl"
      >

        {/* Section Title */}
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block uppercase tracking-[15px] text-gray-400 text-xl md:text-2xl font-light"
      >
        About Me
      </motion.h3>
        <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F7AB0A] to-yellow-300 bg-clip-text text-transparent">
          Crafting Digital Experiences
        </h4>
        
        <div className="flex flex-col space-y-4 text-base md:text-lg leading-relaxed text-gray-300">
          <p>
            <span className="font-semibold text-white">Hi there!</span> I&apos;m a passionate full-stack developer with expertise in modern web technologies.
          </p>
          
          <div className="relative pl-4 border-l-2 border-[#F7AB0A]/50">
            <p className="italic">
              &quot;I believe in clean code, thoughtful design, and continuous learning.&quot;
            </p>
          </div>
          
          <p>
            With a strong foundation in both frontend and backend development, I bridge the gap between design and functionality. My approach combines technical precision with creative problem-solving to build solutions that make an impact.
          </p>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap justify-center gap-2 pt-4 md:justify-start">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB'].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#F7AB0A]/10 text-[#F7AB0A] border border-[#F7AB0A]/20 hover:bg-[#F7AB0A]/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}