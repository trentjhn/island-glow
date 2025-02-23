import React from "react";
import { motion } from "framer-motion";

// Import background and assets
import palmTree from "../../public/palm-tree.png";
const fruitImages = [
  "/footer-fruits/banana.png",
  "/footer-fruits/coconut.png",
  "/footer-fruits/guava.png",
  "/footer-fruits/kiwi.png",
  "/footer-fruits/mango.png",
  "/footer-fruits/passionfruit.png",
  "/footer-fruits/pineapple.png",
  "/footer-fruits/strawberry.png",
];

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6"
      style={{
        background: "linear-gradient(to bottom, #FF8A5B, #D8496B, #922C75, #3D348B)",
      }}
    >
      {/* Soft Sun Glow Behind the Palm Trees */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-[380px] h-[380px] bg-yellow-300 rounded-full opacity-25 z-[-3]"></div>

      {/* Moving Clouds Behind Palm Trees */}
      <motion.div
        className="absolute top-[5%] left-[-10%] w-full h-full z-[-2] opacity-40"
        initial={{ opacity: 0.1, x: -100 }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ background: "url('/backgrounds/clouds.png') repeat-x center / cover" }}
      ></motion.div>

      {/* Palm Tree Background - Slightly Reduced Opacity */}
      <motion.img
        src={palmTree}
        alt="Palm Tree"
        className="absolute top-[-10%] left-0 w-[130%] h-[130%] object-cover opacity-75 z-[-1]"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Text - Lowered Position */}
      <motion.h1
        className="text-white text-7xl font-extrabold tracking-tight z-10 leading-tight text-center relative mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          textShadow: "0px 3px 10px rgba(255, 255, 255, 0.4)",
          letterSpacing: "-0.01em",
        }}
      >
        Glow from Within
      </motion.h1>

      <motion.p
        className="text-white text-xl mt-4 text-center w-[85%] max-w-[650px] z-10 leading-relaxed relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Real ingredients. Bold flavors. No shortcuts. Fresh smoothies, juices, and wellness blends made to
        <span className="font-bold text-yellow-300 ml-2">fuel your glow </span>
        — pure, powerful, and straight from the source.
      </motion.p>

      {/* Call-to-Action Button - Lowered Position */}
      <div className="mt-6 relative z-20">
        <motion.a
          href="#menu"
          className="px-8 py-3 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-yellow-500 to-orange-500 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ background: "linear-gradient(to right, #FFB347, #FF6F61)" }}
        >
          Explore Our Menu
        </motion.a>
      </div>

      {/* Floating Fruits */}
      <div className="absolute bottom-0 w-full flex justify-between px-12 pb-8 z-10">
        {fruitImages.map((fruit, index) => (
          <motion.img
            key={index}
            src={fruit}
            alt={`Fruit ${index}`}
            className="h-20 md:h-24"
            initial={{ y: 4 }}
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: [0, 1.5, -1.5, 0], transition: { duration: 0.2 } }}
          />
        ))}
      </div>
    </div>
  );
}