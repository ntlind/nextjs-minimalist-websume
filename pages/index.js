import React from "react";
import Link from "@material-ui/core/Link";
import Fade from "react-reveal/Fade";

import SEO from "../components/SEO.js";
import Header from "../components/Header.js";
import CalendlyLink from "../components/CalendlyLink.js";

import { Link as ScrollLink } from "react-scroll";

function ExperienceCard({ title, company, date, logo }) {
  return (
    <div class="grid grid-cols-5 gap-8 bg-transparent py-4 lg:py-6">
      <div class="col-span-1  flex flex-wrap content-center">
        <img src={logo} class="rounded-lg max-h-16 black mx-auto my-auto" />
      </div>
      <div class="col-span-4">
        <div class="text-lg">{title}</div>
        <p class="my-2 text-md text-nearWhite">
          {company}, {date}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <SEO
        title="Nick Lind"
        description="Analytics and data science consulting for companies of all sizes"
      />
      <Header />
      <div
        id="header"
        class="max-w-screen-xl	mx-auto min-h-90 py-20 lg:px-40 px-6 flex flex-col justify-center align-center"
      >
        <Fade up duration="800" delay="200" distance="5%">
          <div className="text-title-responsive">Hi, I'm Nick </div>
          <div className="text-subtitle-responsive text-lightGrayText my-6">
            I design, code, and scale data science <br />
            applications to turn insights into action
          </div>
          <div class="mt-16">
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
        </Fade>
      </div>
      <div class="bg-nearBlack">
        <div
          id="about"
          class="max-w-screen-xl	mx-auto py-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <img
              src="bio.png"
              class="rounded-lg max-h-96 lg:max-h-full black mx-auto my-auto"
            />
            <Fade up duration="800" delay="200" distance="5%">
              <div>
                <div class="text-4xl lg:text-title mt-4 xl:mt-10">About me</div>
                <p class="text-lightGrayText text-md mt-4 xl:mt-10">
                  Data science leader and full-stack engineer focused on driving
                  growth through actionable, interpretable analytics. 7+ years
                  of experience across the retail, consumer packaged goods, and
                  fintech sectors. Believes in using the right tools for the
                  job, but loves to build in Python, Scala, and JavaScript
                  (mostly React).
                  <br />
                  <br />
                  Off-road motorcyclist, rugby enthusiast, CodeLabs mentor, and
                  dog lover currently residing in Denver, CO.
                  <div class="mt-8">
                    <CalendlyLink
                      url="https://calendly.com/quantilegroup/30min"
                      text="Connect via Calendly"
                    />
                  </div>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div class="bg-nearBlack">
        <div class="max-w-screen-xl	mx-auto pt-0 pb-20 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Fade up duration="800" delay="200" distance="5%">
                <div class="text-4xl mt-4 xl:mt-10 pb-6">Experience</div>
                <ExperienceCard
                  title="Head of Product & Technology"
                  company="Quantile"
                  date="2020-Present"
                  logo="/experience_logos/quantile.png"
                />
                <ExperienceCard
                  title="Engagement Manager"
                  company="Monitor Deloitte"
                  date="2018-2020"
                  logo="/experience_logos/deloitte.jpg"
                />
                <ExperienceCard
                  title="Senior Data Scientist"
                  company="IBM"
                  date="2017-2017"
                  logo="/experience_logos/ibm.png"
                />
                <ExperienceCard
                  title="Consultant"
                  company="Deloitte Consulting"
                  date="2013-2016"
                  logo="/experience_logos/deloitte.jpg"
                />
                <ExperienceCard
                  title="Econometrics Tutor"
                  company="University of Colorado"
                  date="2011-2013"
                  logo="/experience_logos/cu.png"
                />
              </Fade>
            </div>
            <div>
              <Fade up duration="800" delay="200" distance="5%">
                <div class="text-4xl mt-4 xl:mt-10 pb-6">Education</div>
                <ExperienceCard
                  title="MBA, Strategy & Statistics"
                  company="The Wharton School"
                  date="2016-2018"
                  logo="/experience_logos/wharton.png"
                />{" "}
                <ExperienceCard
                  title="BA, Math & Econometrics"
                  company="University of Colorado"
                  date="2011-2013"
                  logo="/experience_logos/cu.png"
                />
              </Fade>
            </div>
            {/* <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10 xl:mt-10">
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
          </div> */}
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
