import React from "react";
import Link from "@material-ui/core/Link";
import { useInView } from "react-intersection-observer";

export default function VideoBar() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="video">
      {" "}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:pl-40">
        <div
          class={
            "lg:photo-text ml-auto flex flex-col justify-center text-black px-6 lg:px-0 py-8" +
            (inView ? " motion-safe:animate-fadeIn" : "")
          }
        >
          <div class="text-4xl lg:text-title pr-12">
            For more selected work, check us out on GitHub.
          </div>
          <div class="mt-10">
            <Link href="https://github.com/ntlind" underline="none">
              <a class="uppercase text-link-responsive text-black font-light border-bottom font-light tracking-wide cursor-pointer">
                Click here
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
