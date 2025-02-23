import React from "react";
import "windi.css"; // Ensure WindiCSS is loaded
import "./styles/global.css"; // Import global styles
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}