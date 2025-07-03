"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state in case user is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#F7AB0A] text-white p-3 rounded-full shadow-lg hover:bg-[#f7ab0acc] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:ring-opacity-75"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
