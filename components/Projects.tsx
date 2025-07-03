"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tag: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mingle - Social Media App",
    description:
      "Instagram-inspired social media app themed around the FRIENDS TV series. Includes user authentication, post sharing, comments, likes, and real-time chat.",
    image:
      "https://images.unsplash.com/photo-1684132925971-31c258718bd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Redux Toolkit",
      "Socket.io",
    ],
    tag: "Full-Stack",
    liveUrl: "https://github.com/aayush879mishra", // Replace with actual if available
    githubUrl: "https://github.com/aayush879mishra",
  },
  {
    id: 2,
    title: "DocEase - Doctor Booking Platform",
    description:
      "A role-based web app for patients to book appointments and doctors/admins to manage slots and users. Includes real-time availability, JWT auth, and dashboards.",
    image:
      "https://plus.unsplash.com/premium_photo-1663013439760-cb73ca606ae1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "useContext"],
    tag: "Full-Stack",
    liveUrl: "https://github.com/aayush879mishra", // Replace with actual if available
    githubUrl: "https://github.com/aayush879mishra",
  },
  {
    id: 3,
    title: "BlogWorld - Blogging Platform",
    description:
      "Feature-rich blog platform with post creation, media upload, likes/comments, and modern UI. Uses CKEditor for editing, Firebase for storage, and Zod for validation.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1470&q=80",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Redux Toolkit",
      "CKEditor",
      "Cloudinary",
      "Firebase",
      "Slugify",
      "Zod",
      "React Icons",
    ],
    tag: "Full-Stack",
    liveUrl: "https://github.com/aayush879mishra", // Replace with actual if available
    githubUrl: "https://github.com/aayush879mishra",
  },
];


export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      if (projects.length <= 1) {
        stopAutoScroll();
        return;
      }
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!isPaused && scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollTo({
              left: scrollLeft + clientWidth,
              behavior: "smooth",
            });
          }
        }
      }, 5000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoScroll();
    return () => stopAutoScroll();
  }, [isPaused, projects.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen flex flex-col items-center justify-start px-6 sm:px-8 md:px-10 mx-auto overflow-hidden pt-32 pb-20"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900 z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7AB0A]/5 via-transparent to-transparent z-0" />
      </div> */}

      {/* Section Title */}
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-28 md:top-36 uppercase tracking-[15px] text-gray-400 text-xl md:text-2xl font-light z-30"
      >
        Projects
      </motion.h3>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="relative w-full flex overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-hide scroll-smooth mt-8 md:mt-24"
        style={{ height: "calc(100vh - 200px)" }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex items-center justify-center px-4 md:px-10 h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center max-w-6xl w-full overflow-hidden z-40"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7AB0A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Project Image */}
              <motion.div 
                className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Project Content */}
              <div className="text-center md:text-left space-y-4 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {project.title}
                  </h4>
                  <span className="inline-block bg-[#F7AB0A]/20 text-[#7e6b42] font-semibold px-3 py-1 rounded-full text-xs uppercase">
                    {project.tag}
                  </span>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-[#F7AB0A] text-white rounded-lg hover:bg-[#f7ab0acc] transition shadow-md cursor-pointer relative z-50"
                  >
                    <FaExternalLinkAlt /> View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition shadow-md cursor-pointer relative z-50"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 text-gray-500 text-sm flex items-center gap-2 z-30"
      >
        <span>{isPaused ? "Paused" : "Scroll horizontally"}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-bounce-horizontal"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}