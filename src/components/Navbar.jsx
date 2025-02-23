import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import smoothieIcon from "/icons/smoothie.png"; 
import smoothieIconWhite from "/icons/smoothie-white.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { rootMargin: "-20px 0px 0px 0px", threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className={`w-full flex justify-between items-center px-6 md:px-10 py-5 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white" : "bg-black text-white md:bg-black md:text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={scrolled || window.innerWidth < 768 ? smoothieIconWhite : smoothieIconWhite} 
          alt="Smoothie Icon"
          width="40"
          height="40"
          className="object-contain transition-all duration-300"
        />
        <h1 className="text-3xl font-extrabold tracking-wide">Island Glow</h1>
      </div>

      {/* Navigation Links - Hidden on Mobile */}
      <ul className="hidden md:flex space-x-10 text-lg font-semibold">
        {["Home", "About", "Menu", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            className="relative cursor-pointer transition duration-300 hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
          >
            {item}
            <motion.div
              className="absolute left-0 w-full h-0.5 bg-yellow-400 rounded transition-all duration-300 scale-x-0 origin-left"
              whileHover={{ scaleX: 1 }}
            ></motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}