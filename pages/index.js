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
                My name is Roxanne. I specialize in minimal logo and content
                design. Condensing information in every aspect enables me to
                create a strong presence for your brand in the most delicate way
                possible. I work closely with all my clients updating them
                regularly during the design process to ensure the best results.
                Transparency between myself and my clients is key to a
                successful brand, such as portraying your business values and
                maintaining clean aesthetics.
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
          <div class="text-5xl mt-4 lg:mt-10">Our services</div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mt-10 lg:mt-10">
            <InfoCard
              title="Machine Learning"
              description="Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing elit.
          Voluptatibus quia, nulla!"
            />
            <InfoCard
              title="Machine Learning"
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
