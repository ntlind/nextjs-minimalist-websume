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

function ProjectCard({ title, description, image_url, link_text }) {
  return (
    <div class="flex flex-row my-auto space-x-16">
      <div class="grid grid-cols-1 gap-6 my-auto mx-6 flex-1">
        <p class="text-4xl">{title}</p>
        <p class="text-lightGrayText text-md"> {description}</p>
        <div class="mt-6">
          <Link href={image_url} underline="none">
            <a class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
              {link_text}
            </a>
          </Link>
        </div>
      </div>
      <div class="flex-1">
        <img
          src="website_example.png"
          class="rounded-lg max-h-72 black mx-auto my-auto shadow-xl"
        />{" "}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      id="portfolio"
      class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 text-black items-center"
    >
      <div class="text-4xl lg:text-title mb-16">Recent Projects</div>
      <div class="flex flex-col space-y-20 js-show-on-scrollnpm r">
        <ProjectCard
          title="This website"
          description="Built from scratch using React components on Next.js with Tailwind CSS."
          image_url="https://github.com/ntlind/nextjs-minimalist-template"
          link_text="View on GitHub"
        />
        <ProjectCard
          title="This website"
          description="Built from scratch using React components on Next.js with Tailwind CSS."
          image_url="https://github.com/ntlind/nextjs-minimalist-template"
          link_text="View on GitHub"
        />
      </div>
    </div>
  );
}
