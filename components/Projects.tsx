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
    id: 4,
    title: "Mingle - Social Media App",
    description:
      "Instagram-inspired social media app themed around the FRIENDS TV series. Includes user authentication, post sharing, comments, likes, and real-time chat.",
    image:
      "./mingle.avif",
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
    liveUrl: "https://github.com/aayush879mishra", 
    githubUrl: "https://github.com/aayush879mishra",
  },
  {
    id: 2,
    title: "DocEase - Doctor Booking Platform",
    description:
      "A role-based web app for patients to book appointments and doctors/admins to manage slots and users. Includes real-time availability, JWT auth, and dashboards.",
    image:
      "./docease.avif", 
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "useContext"],
    tag: "Full-Stack",
    liveUrl: "https://github.com/aayush879mishra", 
    githubUrl: "https://github.com/aayush879mishra",
  },
  {
    id: 3,
    title: "BlogWorld - Blogging Platform",
    description:
      "Feature-rich blog platform with post creation, media upload, likes/comments, and modern UI. Uses CKEditor for editing, Firebase for storage, and Zod for validation.",
    image:
      "./blogworld.avif", 
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
    liveUrl: "https://github.com/aayush879mishra", 
    githubUrl: "https://github.com/aayush879mishra",
  },
  {
    id: 1,
    title: "Techspire - IT company website",
    description:
      "A responsive website for a tech company, showcasing services, team, and contact form. Worked on both user interface and admin dashboard.",
    image:
      "./it-company.jpg", 
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "react query",
      "quill",
      "Cloudinary",
      "React Icons",
    ],
    tag: "Frontend",
    liveUrl: "https://tecnospire.com/", 
    githubUrl: "https://github.com/aayush879mishra",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (projects.length <= 1) return;

    const autoScroll = () => {
      if (!scrollRef.current || isPaused) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      const nextScroll = scrollLeft + clientWidth;
      scrollRef.current.scrollTo({
        left: nextScroll >= maxScroll ? 0 : nextScroll,
        behavior: "smooth",
      });
    };

    intervalRef.current = setInterval(autoScroll, 5000);

    return () => clearInterval(intervalRef.current!);
  }, [isPaused]);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full space-y-6 min-h-screen px-4 sm:px-8 md:px-10 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <motion.h3
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xl sm:text-2xl uppercase tracking-[14px] text-gray-400 mb-2 text-center"
      >
        Projects
      </motion.h3>

      {/* Description */}
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-500 text-sm text-center mb-10 max-w-xl"
      >
        Swipe or drag to explore my full-stack and frontend projects.
      </motion.p> */}

      {/* Projects Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="w-full flex overflow-x-auto overflow-hidden snap-x snap-mandatory scrollbar-hide gap-8 scroll-smooth"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-center flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-4 w-full flex flex-col lg:flex-row gap-6 items-center"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Info */}
              <div className="flex flex-col justify-between w-full h-full text-center lg:text-left space-y-2">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                    {project.title}
                  </h4>
                  <p className="text-xs font-semibold bg-[#F7AB0A]/20 text-[#7e6b42] px-3 py-1 inline-block rounded-full mt-2 uppercase">
                    {project.tag}
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 justify-center lg:justify-start">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#F7AB0A] text-white text-sm rounded-md hover:bg-[#e6a20a] transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
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
        className=" text-gray-500 text-sm flex items-center gap-2"
      >
        <span>{isPaused ? "Paused" : "Scroll horizontally"}</span>
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
          className="animate-bounce-horizontal"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
