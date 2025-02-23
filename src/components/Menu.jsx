import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import palmLeaf from "/palm-leaf-left.png";
import smoothieImage from "/menu-smoothie.png";
import grainTexture from "/grain-texture.png";

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: < 768px
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Tablet: 768px - 1023px
    };

    handleResize(); // Set on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-300 to-pink-500 text-white text-center px-6 overflow-hidden">
      
      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${grainTexture})` }}
      ></div>

      {/* Left Palm Leaf - Dynamic for Mobile & Tablet */}
      <motion.img
        src={palmLeaf}
        alt="Palm Leaf Left"
        className={`absolute opacity-90 ${
          isMobile 
            ? "hidden"  // Hide on Mobile
            : isTablet 
              ? "left-[4%] top-[19%] w-[11%]" // Tablet: Adjusted Position & Size
              : "left-[4%] top-[28%] w-[20%]" // Desktop: Default
        }`}
        initial={{ opacity: 1, y: 10 }}
        animate={{
          opacity: 1,
          y: [0, -5, 0],
          transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
        }}
        whileHover={{ scale: 0.85, rotate: -2 }}
      />

      {/* Smoothie Image - Adjusted for Mobile & Tablet */}
      <motion.img
        src={smoothieImage}
        alt="Featured Smoothie"
        className={`absolute drop-shadow-lg ${
          isMobile 
            ? "w-[55%] bottom-[5%] left-[50%] transform -translate-x-1/2"  // Mobile: Bigger & Centered
            : isTablet
              ? "w-[20%] bottom-[10%] left-[70%] transform -translate-x-1/2" // Tablet: Slightly Smaller & Adjusted Position
              : "right-[3%] bottom-[32%] w-[24%]"  // Desktop: Default
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.2 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold md:text-5xl mt-20 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Menu Coming Soon!
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-md font-semibold text-yellow-400 mt-3 mb-2 drop-shadow-md"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        Great things take time... like ripening mangoes and perfecting our recipes!
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-lg max-w-[36rem] md:text-xl leading-relaxed px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Featuring premium tropical smoothies, fresh-pressed juices, and wellness elixirs made with 
        natural ingredients and authentic tropical fruits. Stay tuned!
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="https://www.instagram.com/islandglowsmoothieaz"
        className="mt-6 px-6 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Follow Us on Instagram
      </motion.a>

    </section>
  );
}