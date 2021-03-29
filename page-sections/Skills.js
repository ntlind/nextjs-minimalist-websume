import React from "react";
import { useInView } from "react-intersection-observer";

import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#00b0ff",
  },
}))(LinearProgress);

function SkillCard({ title, progress }) {
  return (
    <div class="grid grid-cols-4 gap-6 bg-transparent py-3">
      <div class="col-span-2  flex flex-wrap content-center">
        <div class="text-lg">{title}</div>
      </div>
      <div class="col-span-2 flex flex-col justify-center">
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>
      {/* <div class="col-span-1 flex flex-col justify-center font-light text-lightGrayText text-sm">
        {progress}%
      </div> */}
    </div>
  );
}

function TechCard({ image, progress }) {
  return (
    <div class="grid grid-cols-4 gap-8 bg-transparent py-4 lg:py-6">
      <div class="col-span-2  flex flex-wrap content-center">
        <img src={image} class="filter-grayscale rounded-lg max-h-12" />{" "}
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
            : "max-w-screen-xl	mx-auto pb-20 lg:px-40 px-6 flex flex-col justify-center invisible"
        }
      >
        {" "}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg: gap-12 mt-4 xl:mt-10">
          <div>
            <div class={"text-4xl pb-6 fade"}>Back-End & ML</div>
            <SkillCard title="Python" progress="100" />
            <SkillCard title="Spark" progress="96" />
            <SkillCard title="SQL" progress="95" />
            <SkillCard title="Scala" progress="75" />
            <SkillCard title="GCP, AWS, and Azure" progress="68" />
          </div>
          <div>
            <div class={"text-4xl pb-6 fade"}>Front-End</div>
            <SkillCard title="Django" progress="90" />
            <SkillCard title="HTML + CSS" progress="80" />
            <SkillCard title="React.js" progress="70" />
            <SkillCard title="Celery + RPC" progress="70" />
            <SkillCard title="jQuery" progress="60" />
          </div>
        </div>
      </div>
    </div>
  );
}

// <SkillCard title="Data Science" progress="90" />
// <SkillCard title="Product Strategy" progress="90" />
// <SkillCard title="Machine Learning" progress="80" />
// <SkillCard title="Product Development" progress="80" />
// <SkillCard title="A/B Testing" progress="65" />
