import React from "react";
import Link from "@material-ui/core/Link";
import { useInView } from "react-intersection-observer";

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
          class={
            "lg:photo-text flex flex-col justify-center text-black px-6 lg:px-0 py-8 lg:py-24" +
            (inView ? " motion-safe:animate-fadeIn" : "")
          }
        >
          <div class="text-4xl lg:text-title pr-12">Contact</div>
          <div class="mt-12">
            <Link
              href="mailto:nthorlind@gmail.com"
              underline="none"
              target="_blank"
            >
              <span class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                nthorlind@gmail.com
              </span>
            </Link>
          </div>
          <div class="mt-8">
            <Link href="https://github.com/ntlind" underline="none">
              <a class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                Calendly
              </a>
            </Link>
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
