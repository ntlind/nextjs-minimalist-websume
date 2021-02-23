  import React from "react";

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

export default function Services() {
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
