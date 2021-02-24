import React from "react";
import { useInView } from "react-intersection-observer";

import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      id="header"
      ref={ref}
      class={inView ? "section-header fade" : "invisible"}
    >
      <div className="text-title-responsive">Hi, I'm Nick</div>
      <div className="text-subtitle-responsive text-lightGrayText my-6">
        I design, code, and scale data science <br />
        applications to turn insights into action
      </div>
      <div class="mt-10">
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          delay={10}
          class="uppercase text-link-responsive text-black border-bottom font-light tracking-wide cursor-pointer"
        >
          Learn more
        </ScrollLink>
      </div>
    </div>
  );
}
