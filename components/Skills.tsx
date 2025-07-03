"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  const skillsData = [
    { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-5 mx-auto max-w-7xl overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7AB0A]/5 via-transparent to-transparent" />
      </div> */}

      {/* Section Title */}
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-24 uppercase tracking-[15px] text-gray-400 text-xl md:text-2xl font-light"
      >
        Skills
      </motion.h3>

      {/* Subtitle */}
      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="absolute top-36 text-gray-400 text-sm sm:text-base max-w-md px-4 text-center"
>
  These are the tools I use to build exceptional digital experiences
</motion.p>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 w-full max-w-4xl mt-40 md:mt-48 px-4"
      >
        {skillsData.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Skill
              imageUrl={skill.imageUrl}
              skillName={skill.name}
              directionLeft={i % 2 === 0}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-gray-500 text-sm flex items-center gap-2"
      >
        <span>Scroll down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#F7AB0A" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}