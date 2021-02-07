import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
              "transform fixed bg-white flex flex-col text-right justify-top pt-12   px-10 top-0 right-0 transform-menuBar w-screen z-50 h-full" +
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
                <img class="h-8 w-auto sm:h-10" src="./close-24px.svg" alt="" />
              </button>
            </div>
            <nav class="flex flex-col space-y-16">
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
