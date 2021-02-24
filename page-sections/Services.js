import React from "react";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

function InfoCard({ title, description, tags }) {
  return (
    <div class="bg-gray rounded">
      <div class="p-10 pb-10">
        <div class="text-xl mb-6">{title}</div>
        <p class="text-lightGrayText text-md">{description}</p>
      </div>
    </div>
  );
}

export function OldServices() {
  return (
    <div class="bg-nearBlack">
      <div class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
        <Fade up duration="800" delay="200" distance="5%">
          <div class="text-4xl lg:text-title mt-4 xl:mt-10">Our services</div>
        </Fade>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 xl:mt-10">
          <Fade down duration="800" delay="125" distance="5%">
            <InfoCard
              title="Product Mgmt."
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
            />
          </Fade>
          <Fade down duration="800" delay="250" distance="5%">
            <InfoCard
              title="Data Science"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
  Voluptatibus quia, nulla!"
            />
          </Fade>
          <Fade down duration="800" delay="375" distance="5%">
            <InfoCard
              title="Machine Learning"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
Voluptatibus quia, nulla!"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div class="bg-nearBlack text-white">
      <div
        id="services"
        ref={ref}
        class={"section" + (inView ? " motion-safe:animate-fadeIn" : "")}
      >
        {" "}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <Fade up duration="800" delay="200" distance="5%">
            <div class="text-4xl lg:text-title">
              A refined design process for a successful project.
            </div>
            <div class="grid grid-rows-3 gap-6 mt-10 lg:mt-0 mb-20">
              <div>
                <div class="text-2xl">Research</div>
                <p class="text-lightGrayText text-md mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aliquam ut porttitor leo a.
                </p>
              </div>
              <div>
                <div class="text-2xl">Brand Design</div>
                <p class="text-lightGrayText text-md mt-4">
                  Felis bibendum ut tristique et. Nibh ipsum consequat nisl vel
                  pretium. Felis bibendum ut tristique et. Nibh ipsum consequat
                  nisl vel pretium.
                </p>
              </div>
              <div>
                <div class="text-2xl">Delivery</div>
                <p class="text-lightGrayText text-md mt-4">
                  Felis bibendum ut tristique et. Nibh ipsum consequat nisl vel
                  pretium. Felis bibendum ut tristique et. Nibh ipsum consequat
                  nisl vel pretium.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-16">
          <Fade down duration="800" delay="125" distance="5%">
            <img
              src="/tech_logos/python.png"
              class="filter-grayscale rounded-lg max-h-16 mx-auto my-auto"
            />
          </Fade>
          <Fade down duration="800" delay="250" distance="5%">
            <img
              src="/tech_logos/js.png"
              class="filter-grayscale rounded-lg max-h-16 mx-auto my-auto"
            />
          </Fade>
          <Fade down duration="800" delay="375" distance="5%">
            <img
              src="/tech_logos/partner_logo_aws.png"
              class="filter-grayscale rounded-lg max-h-16 mx-auto my-auto"
            />
          </Fade>

          <Fade down duration="800" delay="500" distance="5%">
            <img
              src="/tech_logos/partner_logo_gcp.png"
              class="filter-grayscale rounded-lg max-h-16 mx-auto my-auto"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
