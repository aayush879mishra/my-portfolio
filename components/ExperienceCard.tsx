"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  techIcons: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
  index: number;
};

export default function ExperienceCard({
  companyLogo,
  jobTitle,
  companyName,
  techIcons = [],
  startDate,
  endDate,
  summaryPoints = [],
  index
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="relative group h-full">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#F7AB0A]/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card container */}
        <div className="relative bg-gray-900/80 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-[#F7AB0A]/30 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F7AB0A]/30 p-0.5"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={companyLogo} 
                alt={`${companyName} Logo`} 
                className="w-full h-full object-cover rounded-full" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/128x128/333/FFF?text=Logo";
                }}
              />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold text-white">{jobTitle}</h4>
              <p className="text-gray-300">{companyName}</p>
            </div>
          </div>

          {/* Date */}
          <div className="mb-6 relative">
            <p className="text-sm text-gray-400">{startDate} — {endDate}</p>
            <motion.div 
              className="absolute bottom-0 left-0 h-px bg-gray-700 w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {techIcons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -2 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#F7AB0A]/10 transition-all"
              >
                <img
                  src={icon}
                  alt="Tech icon"
                  className="h-5 w-5 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/40x40/333/FFF?text=Tech";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Points */}
          <ul className="space-y-3 flex-grow">
            {summaryPoints.map((point, i) => (
              <motion.li 
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="flex items-start group"
              >
                <span className="text-[#F7AB0A] mr-2 mt-1">▹</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}