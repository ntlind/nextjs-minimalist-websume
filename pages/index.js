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
      <div class="min-h-90 pt-10 lg:px-20 px-6 flex flex-col justify-center align-center">
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
      <div class="min-h-90 pt-10 lg:px-20 px-6 flex flex-col justify-center align-center bg-black text-white">
        <div class="text-5xl mb-20">Our services</div>
        <Grid container class="flex flex-row justify-center align-center">
          <Grid item lg={4}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/mountain.jpg" alt="Mountain" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            Service 2
          </Grid>
          <Grid item lg={4}>
            Service 3
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
