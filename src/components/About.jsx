import React from "react";
import { motion } from "framer-motion";
import aboutImage from "/about-image.jpg"; // Replace with the correct image
import grainTexture from "/grain-texture.png"; // Background texture

export default function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-orange-200 to-pink-300 text-white px-6 md:px-12 lg:px-20 py-10 md:py-14 overflow-hidden gap-6 md:gap-10">
      
      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${grainTexture})` }}
      ></div>

      {/* Image Section - Positioned for Perfect Alignment */}
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-14 lg:mt-16 md:ml-4 lg:ml-6"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={aboutImage}
          alt="Fresh Ingredients"
          className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[380px] h-auto object-contain rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Text Section - Final Refinements */}
      <motion.div
        className="md:w-1/2 max-w-2xl text-center md:text-left z-10 md:ml-[-5px] lg:ml-[-8px]"
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Headline with Adjusted Spacing */}
        <h2 className="text-4xl font-extrabold md:text-5xl text-black leading-tight tracking-wide">
          More Than a Menu—
        </h2>
        <h2 className="text-4xl font-extrabold md:text-[42px] text-black leading-tight tracking-wide mt-0.5">
          A Way of Life
        </h2>
        
        <p className="text-lg md:text-xl mt-6 leading-relaxed text-gray-800 font-medium">
          At <span className="font-semibold text-yellow-500">Island Glow</span>, we believe food is more than fuel—it’s love. It’s culture. The best things in life are made with <span className="font-semibold">love and intention</span>, and that’s exactly how we craft every blend.
        </p>

        <p className="text-lg md:text-xl mt-5 leading-relaxed text-gray-800">
            We keep it real — <span className="font-semibold text-gray-900">no shortcuts, no fillers,</span> just <span className="font-semibold text-gray-900">bold flavors</span> and <span className="font-semibold text-gray-900">powerful ingredients</span> that work with your body, not against it.  
        </p>

        <p className="text-lg md:text-xl mt-5 leading-relaxed text-gray-800">
          From vibrant superfruits to time-honored wellness blends, everything we serve is meant to <span className="font-semibold text-gray-900">nourish from the inside out</span>.
        </p>

        <p className="text-lg md:text-xl mt-5 leading-relaxed text-gray-800">
          Because <span className="font-semibold text-yellow-500">glowing from within</span> starts with what you put in—your body, your mind, your spirit. And when you move with love, that glow spreads.
        </p>

        <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-900 font-semibold italic tracking-wider">
          This isn’t just a menu. It’s a movement.
        </p>
      </motion.div>

    </section>
  );
}