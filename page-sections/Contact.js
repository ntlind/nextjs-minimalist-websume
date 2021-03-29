import React from "react";
import { useInView } from "react-intersection-observer";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";

import { openPopupWidget } from "react-calendly";

export default function VideoBar() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const onClick = () =>
    openPopupWidget({ url: "https://calendly.com/quantilegroup/30min" });

  return (
    <div id="contact">
      {" "}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:pl-40 min-h-70">
        <div
          ref={ref}
          class={
            inView
              ? "lg:photo-text flex flex-col justify-center text-black px-6 lg:px-0 py-8 lg:py-24 lg:ml-auto fade"
              : "lg:photo-text flex flex-col justify-center text-black px-6 lg:px-0 py-8 lg:py-24 lg:ml-auto invisible"
          }
        >
          <div class="text-4xl lg:text-title pr-12 text-black">Contact</div>
          <div class="mt-12">
            <a href="mailto:nthorlind@gmail.com" target="_blank">
              <span class="text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                nthorlind@gmail.com
              </span>
            </a>
          </div>
          <div class="mt-12 flex flex-row space-x-10">
            <a href="https://github.com/ntlind" target="_blank">
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholasthorlind/"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              target="_blank"
              onClick={onClick}
              class="tracking-wide cursor-pointer"
            >
              <FaCalendarPlus size={32} />
            </a>
          </div>
        </div>
        <div>
          <video
            playsinline
            autoPlay
            autoBuffer
            loop
            muted
            class="block object-cover w-full h-full overflow-hidden"
          >
            <source src="./video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
