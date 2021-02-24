import React from "react";
import Link from "@material-ui/core/Link";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

function ProjectCard({
  title,
  description,
  image_url,
  link_url,
  link_text,
  reverse,
}) {
  return (
    <div class="flex flex-row my-auto space-x-12 fade pb-10">
      <Fade up duration="800" delay="200" distance="5%">
        <div class={"grid grid-cols-1 gap-6 my-auto mx-6 flex-1"}>
          <p class="text-4xl">{title}</p>
          <p class="text-lightGrayText text-md"> {description}</p>
          <div class="mt-6">
            <Link href={link_url} underline="none">
              <a class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                {link_text}
              </a>
            </Link>
          </div>
        </div>
        <div class="flex-1">
          <img
            src={image_url}
            class="rounded-lg max-h-72 black mx-auto my-auto shadow-xl"
          />{" "}
        </div>
      </Fade>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 text-black items-center"
    >
      <div class="text-4xl lg:text-title mb-16">Recent Projects</div>
      <div class="flex flex-col space-y-24">
        <ProjectCard
          title="anomaly-detection"
          description="An automated anomaly detection library for hierarchical time series."
          image_url="https://github.com/ntlind/anomaly-detection/raw/master/examples/example_graph.PNG"
          link_text="View on GitHub"
          link_url="https://github.com/ntlind/anomaly-detection"
        />
        <ProjectCard
          title="ForecastFrame"
          description="A fast and accurate hierarchical timeseries forecasting library for Python."
          image_url="https://s.yimg.com/ny/api/res/1.2/MCBJaot4sCn8x1wTgmhEjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/en/simply_wall_st__316/01d1f05695ab07ad4c1f411240c3afe9"
          link_text="View on GitHub"
          link_url="https://github.com/ntlind/forecastframe"
        />
        <ProjectCard
          title="Next.js Landing Blog"
          description="A full Next.js landing page and blog built using Material UI's components."
          image_url="https://github.com/quantilegroup/nextjs-landing-page/raw/main/public/images/blog_example.gif?raw=true"
          link_text="View on GitHub"
          link_url="https://github.com/ntlind/nextjs-react-landing-blog"
        />
        <ProjectCard
          title="This website"
          description="Built from scratch using React components on Next.js with Tailwind CSS."
          link_url="https://github.com/ntlind/nextjs-minimalist-template"
          link_text="View on GitHub"
          image_url="website_example.png"
        />
      </div>
    </div>
  );
}
