import React from "react";
import { useInView } from "react-intersection-observer";

import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#00b0ff",
  },
}))(LinearProgress);

function SkillCard({ title, progress }) {
  return (
    <div class="grid grid-cols-4 gap-8 bg-transparent py-4 lg:py-6">
      <div class="col-span-2  flex flex-wrap content-center">
        <div class="text-lg">{title}</div>
      </div>
      <div class="col-span-2 flex flex-col justify-center">
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div class="bg-nearBlack text-white">
      <div
        id="skills"
        ref={ref}
        class={
          inView
            ? "max-w-screen-xl	mx-auto pb-20 lg:px-40 px-6 flex flex-col justify-center fade"
            : "invisible"
        }
      >
        {" "}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div class={"text-4xl mt-4 xl:mt-10 pb-6 fade"}>
              Functional Skills
            </div>
            <SkillCard title="Data Science" progress="90" />
            <SkillCard title="Product Strategy" progress="90" />
            <SkillCard title="Machine Learning" progress="80" />
            <SkillCard title="Product Development" progress="80" />
            <SkillCard title="A/B Testing" progress="65" />
          </div>
          <div>
            <div class={"text-4xl mt-4 xl:mt-10 pb-6 fade"}>
              Technical Skills
            </div>
            <SkillCard title="Python" progress="90" />
            <SkillCard title="SQL" progress="90" />
            <SkillCard title="Julia" progress="80" />
            <SkillCard title="Scala" progress="60" />
            <SkillCard title="JavaScript, HTML, CSS" progress="50" />
          </div>
        </div>
      </div>
    </div>
  );
}
