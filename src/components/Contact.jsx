import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react"; // Ensure lucide-react is installed
import grainTexture from "/grain-texture.png";

export default function Contact() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-200 to-pink-300 text-black px-6 md:px-12 lg:px-20 py-16">
      
      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${grainTexture})` }}
      ></div>

  
      {/* Contact Content */}
      <motion.div
        className="w-full max-w-3xl text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold md:text-5xl tracking-wide">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-800">
          Questions, collaborations, or just want to say hi? Reach out!
        </p>

        {/* Email Block */}
        <div className="mt-8 flex items-center justify-center bg-white rounded-full shadow-lg px-8 py-5 w-fit space-x-4 cursor-pointer hover:bg-gray-100 transition">
          <Mail className="w-7 h-7 text-gray-600" />
          <span className="text-lg font-semibold text-gray-900 select-all">
            islandglowsmoothies@gmail.com
          </span>
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center justify-center space-x-3 text-gray-800">
          <MapPin className="w-7 h-7 text-red-500" />
          <span className="text-lg font-semibold">
            Coming soon to <span className="text-black"> W Happy Valley Rd / Lake Pleasant Area</span>
          </span>
        </div>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/islandglowsmoothieaz"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center space-x-3 text-lg font-semibold text-gray-900 hover:text-yellow-500 transition"
        >
          <Instagram className="w-7 h-7 text-gray-900 hover:text-yellow-500 transition" />
          <span>Follow us on Instagram</span>
        </a>
      </motion.div>

    </section>
  );
}