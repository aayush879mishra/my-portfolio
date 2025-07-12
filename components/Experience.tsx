"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type ExperienceItem = {
  id: number;
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  techIcons: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      companyLogo: "./digipal.png",
      jobTitle: "Social Media Manager",
      companyName: "Digipal Solutions Pvt. Ltd.",
      techIcons: [],
      startDate: "Jan 2022",
      endDate: "Dec 2023",
      summaryPoints: [
        "Managed social media campaigns and content strategy",
        "Collaborated with cross-functional teams to enhance brand visibility",
      ],
    },
    {
      id: 2,
      companyLogo: "./skillspark.jpg",
      jobTitle: "Frontend Intern",
      companyName: "Skill Spark Pvt. Ltd.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      ],
      startDate: "Feb 2025",
      endDate: "Present",
      summaryPoints: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Optimized web applications for maximum speed and scalability",
        "Collaborated with designers to implement modern UI/UX principles",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center space-y-6 px-4 md:px-10 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl md:text-2xl uppercase tracking-[10px] text-gray-400 "
      >
        Experience
      </motion.h3>

      {/* Scrollable Cards Wrapper */}
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory space-x-6 md:space-x-10  scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="flex-shrink-0 w-[92vw] md:w-[400px] snap-center"
          >
            <ExperienceCard {...exp} index={index} />
          </div>
        ))}
      </div>

      {/* Scroll Prompt */}
      <motion.div
        className=" text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="flex items-center gap-2">
          <span className="md:hidden">Scroll</span>
          <span className="hidden md:inline">Drag</span>
          <span className="text-[#F7AB0A] animate-pulse">→</span>
        </span>
      </motion.div>
    </motion.section>
  );
}
