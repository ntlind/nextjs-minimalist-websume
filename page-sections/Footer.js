import React from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div class="bg-nearBlack text-white">
      <div
        id="footer"
        ref={ref}
        class={
          inView
            ? "max-w-screen-xl	mx-auto h-16 lg:px-40 px-6 flex flex-col justify-center fade"
            : "section invisible"
        }
      >
        <div class="flex justify-between">
          <div>
            <a
              href="https://github.com/ntlind/nextjs-minimalist-websume"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div>© 2020 Nick Lind</div>
        </div>
      </div>
    </div>
  );
}
