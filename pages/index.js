import React from "react";
import Link from "@material-ui/core/Link";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";
import CalendlyLink from "../components/CalendlyLink.js";

import Hero from "../page-sections/Hero.js";
import About from "../page-sections/About.js";
import Experience from "../page-sections/Experience.js";
import Portfolio from "../page-sections/Portfolio.js";
import Services from "../page-sections/Services.js";
import VideoBar from "../page-sections/VideoBar.js";

export default function Home() {
  return (
    <div id="top">
      <SEO
        title="Nick Lind"
        description="Analytics and data science consulting for companies of all sizes"
      />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <VideoBar />
    </div>
  );
}
