import React from "react";
import Link from "@material-ui/core/Link";
import Fade from "react-reveal/Fade";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";

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

export default function Home() {
  return (
    <div id="top">
      <SEO
        title="Home"
        description="Changing the game for developers everywhere"
      />
      <Header />
      <div class="max-w-screen-xl	mx-auto min-h-90 py-20 lg:px-40 px-6 flex flex-col justify-center align-center">
        <Fade up duration="800" delay="200" distance="5%">
          <div className="text-title-responsive">
            Changing the game <br />
            for developers everywhere
          </div>
          <div class="mt-16">
            <Link href="#" underline="none">
              <a class="uppercase text-subtitle-responsive text-black border-bottom font-light tracking-wide">
                Learn more
              </a>
            </Link>
          </div>
        </Fade>
      </div>

      <div class="bg-nearBlack">
        <div class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <img
              src="example.jpg"
              class="rounded-lg max-h-96 lg:max-h-full black mx-auto my-auto"
            />
            <Fade up duration="800" delay="200" distance="5%">
              <div>
                <div class="text-4xl lg:text-title mt-4 xl:mt-10">About us</div>
                <p class="text-lightGrayText text-md mt-4 xl:mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aliquam ut porttitor leo a. Felis bibendum ut tristique et.
                  Nibh ipsum consequat nisl vel pretium.
                  <br />
                  <br />
                  Ut consequat semper viverra nam libero justo laoreet sit amet.
                  Lacinia quis vel eros donec ac. Nunc sed blandit libero
                  volutpat sed. Vitae proin sagittis nisl rhoncus mattis.
                  Accumsan lacus vel facilisis volutpat est.
                  <div class="mt-8">
                    <Link href="#" underline="none">
                      <a class="uppercase text-lg text-white font-light border-bottom-white mb-20 font-light tracking-wide">
                        Get started
                      </a>
                    </Link>
                  </div>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
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
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:pl-40">
          <div class="lg:photo-text ml-auto flex flex-col justify-center text-black px-6 lg:px-0 py-8">
            <Fade up duration="800" delay="200" distance="5%">
              <div class="text-4xl lg:text-title pr-12">
                For more selected work, check us out on GitHub.
              </div>
            </Fade>
            <div class="mt-10">
              <Link href="https://github.com/ntlind" underline="none">
                <a class="uppercase text-subtitle-responsive text-black font-light border-bottom font-light tracking-wide">
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
      <div class="bg-nearBlack">
        <div class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam ut porttitor leo a.
                  </p>
                </div>
                <div>
                  <div class="text-2xl">Brand Design</div>
                  <p class="text-lightGrayText text-md mt-4">
                    Felis bibendum ut tristique et. Nibh ipsum consequat nisl
                    vel pretium. Felis bibendum ut tristique et. Nibh ipsum
                    consequat nisl vel pretium.
                  </p>
                </div>
                <div>
                  <div class="text-2xl">Delivery</div>
                  <p class="text-lightGrayText text-md mt-4">
                    Felis bibendum ut tristique et. Nibh ipsum consequat nisl
                    vel pretium. Felis bibendum ut tristique et. Nibh ipsum
                    consequat nisl vel pretium.
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
    </div>
  );
}
