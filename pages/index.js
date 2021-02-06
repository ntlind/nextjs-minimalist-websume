import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import SEO from "../components/SEO.js";

export default function Home() {
  return (
    <div>
      <SEO title="Fake" description="TODO" />
      <div class="min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center">
        <div item xs={12} className="text-title-responsive pb-10">
          Refining beauty <br />
          in visual identities
        </div>
        <div item xs={12} class="mt-5">
          <Link href="#" underline="none">
            <a class="uppercase text-subtitle-responsive text-black font-light border-bottom">
              Learn more
            </a>
          </Link>
        </div>
      </div>
      <div class="min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center bg-black text-white">
        <div class="text-5xl mb-20 text-center lg:text-left">Our services</div>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-12">
          <div class="bg-gray rounded">
            <div class="p-10 pb-10">
              <div class="font-semibold text-xl mb-6">Machine Learning</div>
              <p class="text-lightGrayText overflow-ellipsis">
                Lorem ipsum dolor sit amet asd asd asd, consectetur adipisicing
                elit. Voluptatibus quia, nulla!
              </p>
            </div>
            <div class="px-10 pb-10 grid grid-cols-3">
              <span class="text-sm font-semibold text-gray-700">python</span>
              <span class="text-sm font-semibold text-gray-700">scala</span>
              <span class="text-sm font-semibold text-gray-700">lightgbm</span>
            </div>
          </div>{" "}
          <div class="bg-gray card-tri">1</div>
          <div class="bg-gray card-tri">1</div>
        </div>
      </div>
    </div>
  );
}
