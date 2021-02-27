import React from "react";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";
import CalendlyLink from "../components/CalendlyLink.js";

import Hero from "../page-sections/Hero.js";
import About from "../page-sections/About.js";
import Experience from "../page-sections/Experience.js";
import Skills from "../page-sections/Skills.js";
import Portfolio from "../page-sections/Portfolio.js";
import Services from "../page-sections/Services.js";
import VideoBar from "../page-sections/VideoBar.js";

export default function Home() {
  return (
    <div id="top">
      <SEO
        title="Home"
        description="Personal page for Nick Lind, and analytics and machine learning consultant"
      />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Skills />
      <VideoBar />
    </div>
  );
}
