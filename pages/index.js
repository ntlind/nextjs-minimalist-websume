import React from "react";
import Link from "@material-ui/core/Link";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";

function InfoCard({ title, description, tags }) {
  return (
    <div class="bg-gray rounded">
      <div class="p-10 pb-10">
        <div class="text-xl mb-6">{title}</div>
        <p class="text-lightGrayText text-md">{description}</p>
      </div>
      {/* <div class="px-10 pb-10 grid grid-cols-3">
        <span class="text-sm font-semibold text-gray-700">python</span>
        <span class="text-sm font-semibold text-gray-700">scala</span>
        <span class="text-sm font-semibold text-gray-700">lightgbm</span>
      </div> */}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <SEO title="Fake" description="TODO" />
      <Header />
      <div class="max-w-screen-xl	mx-auto min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center">
        <div className="text-title-responsive pb-10">
          Refining beauty <br />
          in visual identities
        </div>
        <div class="mt-5">
          <Link href="#" underline="none">
            <a class="uppercase text-subtitle-responsive text-black font-light border-bottom">
              Learn more
            </a>
          </Link>
        </div>
      </div>
      <div class="bg-black">
        <div class="max-w-screen-xl	mx-auto min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <img
              src="example.png"
              class="rounded-lg max-h-96 lg:max-h-full black mx-auto"
            />
            <div>
              <div class="text-4xl lg:text-5xl mt-4 lg:mt-10">About us</div>
              <p class="text-lightGrayText text-md mt-4 lg:mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam ut porttitor leo a. Felis bibendum ut tristique et. Nibh
                ipsum consequat nisl vel pretium.
                <br />
                <br />
                Ut consequat semper viverra nam libero justo laoreet sit amet.
                Lacinia quis vel eros donec ac. Nunc sed blandit libero volutpat
                sed. Vitae proin sagittis nisl rhoncus mattis. Accumsan lacus
                vel facilisis volutpat est.
                <div class="mt-4 lg:mt-10">
                  <Link href="#" underline="none">
                    <a class="uppercase text-lg text-white font-light border-bottom-white mb-20">
                      Get started
                    </a>
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="max-w-screen-xl	mx-auto min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
          <div class="text-4xl mt-4 lg:mt-10">Our services</div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 lg:mt-10">
            <InfoCard
              title="Product Management"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
          Voluptatibus quia, nulla!"
            />
            <InfoCard
              title="Data Science"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
          Voluptatibus quia, nulla!"
            />{" "}
            <InfoCard
              title="Machine Learning"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
        Voluptatibus quia, nulla!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
