"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

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
      techIcons: [

      ],
      startDate: "Jan 2022",
      endDate: "Dec 2023",
      summaryPoints: [
        "Managed social media campaigns and content strategy",
        "Collaborated with cross-functional teams to enhance brand visibility",
        
      ]
    },
    {
      id: 2,
      companyLogo: "./skillspark.jpg",
      jobTitle: "Frontend Intern",
      companyName: "Skill Spark Pvt. Ltd.",
      techIcons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      ],
      startDate: "Feb 2025",
      endDate: "Present",
      summaryPoints: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Optimized web applications for maximum speed and scalability",
        "Collaborated with designers to implement modern UI/UX principles"
      ]
    },
   
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-5 mx-auto max-w-7xl"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 to-gray-900" /> */}

      <motion.h3 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 uppercase tracking-[12px] text-gray-400 text-xl"
      >
        Experience
      </motion.h3>

      <div className="w-full h-full flex items-center justify-center mt-32">
        <div className="w-full flex overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">


          
          {/* Mobile: Full width cards */}
          <div className="flex md:hidden space-x-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex-shrink-0 w-[85vw] snap-center px-2">
                <ExperienceCard {...exp} index={index} />
                
              </div>
            ))}
          </div>
          
          {/* Desktop: Show multiple cards */}
          <div className="hidden md:flex space-x-8 px-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex-shrink-0 w-[400px] snap-center">
                <ExperienceCard {...exp} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 text-gray-500 text-sm"
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