import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import SEO from "../components/SEO.js";

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/icons/Menu";
import ListItemText from "@material-ui/core/ListItemText";

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const logo_path = "./favicon_small.png";

  const logo = (
    <Link href="/" as="/">
      <Button style={{ padding: 0 }}>
        <img
          src={logo_path}
          alt="Quantile Group logo"
          style={{ width: "96px", height: "auto" }}
        />
      </Button>
    </Link>
  );

  const rightLinks = (
    <nav class="hidden md:flex space-x-10">
      {" "}
      <a
        href="#"
        class="text-lightGrayText hover:text-black uppercase text-subtitle-responsive font-light"
      >
        About
      </a>
      <a
        href="#"
        class="text-lightGrayText hover:text-black uppercase text-subtitle-responsive font-light"
      >
        Services
      </a>
      <a
        href="#"
        class="text-lightGrayText hover:text-black uppercase text-subtitle-responsive font-light"
      >
        Portfolio
      </a>
      <a
        href="#"
        class="text-lightGrayText hover:text-black uppercase text-subtitle-responsive font-light"
      >
        Contact
      </a>
    </nav>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div class="relative bg-white mt-10">
      <div class="max-w-screen-xl mx-auto	lg:px-40 px-6">
        <div class="flex justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-4 w-auto sm:h-6" src="./black.svg" alt="" />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span class="sr-only">Open menu</span>
              <img class="h-8 w-auto sm:h-10" src="./menu.png" alt="" />
            </button>
          </div>
          <div
            class={
              "fixed bg-white flex flex-col text-right justify-top pt-12 px-10 top-0 right-0 transform-menuBar w-screen z-50 h-full" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div class="-mr-2 -my-2 md:hidden align-left text-left">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span class="sr-only">Open menu</span>
                <img class="h-8 w-auto sm:h-10" src="./menu.png" alt="" />
              </button>
            </div>
            <nav class="flex flex-col space-y-20">
              {" "}
              <a
                href="/"
                class="text-gray text-4xl hover:text-black uppercase font-light"
              >
                About
              </a>
              <a
                href="/"
                class="text-gray text-4xl hover:text-black uppercase font-light"
              >
                Services
              </a>
              <a
                href="/"
                class="text-gray text-4xl hover:text-black uppercase font-light"
              >
                Portfolio
              </a>
              <a
                href="/"
                class="text-gray text-4xl hover:text-black uppercase font-light"
              >
                Contact
              </a>
            </nav>
          </div>
          {rightLinks}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <SEO title="Fake" description="TODO" />
      <Header />
      <div class="max-w-screen-xl	mx-auto min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center">
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
      <div class="bg-black">
        <div class="max-w-screen-xl	mx-auto min-h-90 pt-10 lg:px-40 px-6 flex flex-col justify-center align-center text-white">
          <div class="text-5xl mb-20 text-center lg:text-left">
            Our services
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-12">
            <div class="bg-gray rounded">
              <div class="p-10 pb-10">
                <div class="font-semibold text-xl mb-6">Machine Learning</div>
                <p class="text-lightGrayText overflow-ellipsis">
                  Lorem ipsum dolor sit amet asd asd asd, consectetur
                  adipisicing elit. Voluptatibus quia, nulla!
                </p>
              </div>
              <div class="px-10 pb-10 grid grid-cols-3">
                <span class="text-sm font-semibold text-gray-700">python</span>
                <span class="text-sm font-semibold text-gray-700">scala</span>
                <span class="text-sm font-semibold text-gray-700">
                  lightgbm
                </span>
              </div>
            </div>{" "}
            <div class="bg-gray card-tri">1</div>
            <div class="bg-gray card-tri">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
