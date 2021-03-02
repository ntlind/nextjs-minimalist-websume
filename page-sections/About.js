import React from "react";
import { useInView } from "react-intersection-observer";

import Experience from "../page-sections/Experience.js";
import CalendlyLink from "../components/CalendlyLink.js";

export default function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div class="bg-nearBlack text-white">
      <div id="about" class="section">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <img
            src="bio.webp"
            class={"rounded-lg max-h-96 lg:max-h-full black mx-auto my-auto"}
          />
          <div ref={ref} class={inView ? "fade" : "invisible"}>
            <div class="text-4xl lg:text-title mt-4 xl:mt-10">About me</div>
            <p class="text-lightGrayText text-md mt-4 xl:mt-10">
              Data science leader and full-stack engineer focused on driving
              growth through actionable, interpretable analytics. 7+ years of
              experience across the retail, consumer packaged goods, and fintech
              sectors. Believes in using the right tools for the job, but loves
              to build in Python, Scala, and JavaScript (mostly React).
              <br />
              <br />
              Off-road motorcyclist, rugby enthusiast, CodeLabs mentor, and dog
              lover currently residing in Denver, CO.
              <div class="mt-8">
                <CalendlyLink
                  url="https://calendly.com/quantilegroup/30min"
                  text="Connect with Nick"
                  class_style="uppercase text-lg text-white font-light border-bottom-white mb-20 font-light tracking-wide cursor-pointer"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}
