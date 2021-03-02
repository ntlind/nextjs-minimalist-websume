import React from "react";
import { useInView } from "react-intersection-observer";
import CalendlyLink from "../components/CalendlyLink.js";

export default function VideoBar() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="contact">
      {" "}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:pl-40">
        <div
          ref={ref}
          class={
            inView
              ? "photo-text flex flex-col justify-center text-black px-6 lg:px-0 py-8 lg:py-24 ml-auto fade"
              : "photo-text flex flex-col justify-center text-black px-6 lg:px-0 py-8 lg:py-24 ml-auto invisible"
          }
        >
          <div class="text-4xl lg:text-title pr-12 text-black">Contact</div>
          <div class="mt-12">
            <a href="mailto:nthorlind@gmail.com" target="_blank">
              <span class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                nthorlind@gmail.com
              </span>
            </a>
          </div>
          <div class="mt-8">
            <CalendlyLink
              url="https://calendly.com/quantilegroup/30min"
              text="Calendly"
              class_style="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer"
            />
          </div>
        </div>
        <div>
          <video
            playsinline
            autoPlay
            autoBuffer
            loop
            muted
            class="block object-fill w-full h-full overflow-hidden"
          >
            <source src="./video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
