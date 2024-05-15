import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { TiThMenu } from "react-icons/ti";
import clsx from "clsx";
import { CgClose } from "react-icons/cg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "/",
      scrollToId: "home",
    },
    {
      label: "Currency Convertor",
      href: "/currencyconverter",
    },
    {
      label: "Password Generator ",
      href: "/passwordgenerator",
    },
    {
      label: "Calculator",
      href: "/calculator",
    },
    {
      label: "React Cards",
      href: "/reactcards",
    },
    {
      label: "Api Page",
      href: "/apipage",
    },
  ];

  const handleScrollToSection = (scrollToId) => {
    const element = document.getElementById(scrollToId);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const projectSectionHeight =
        document.getElementById("projects").offsetHeight;

      const offset = navbarHeight + projectSectionHeight;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: -navbarHeight,
      });
      console.log(offset);
    }
  };

  return (
    <>
      <nav
        id="navbarHeight"
        className="flex flex-wrap justify-between h-14 items-center bg-teal-950 px-6 md:px-10 lg:px-14 xl:px-24"
      >
        {/* {Logo} */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Mobile sidebar */}
        <section
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/10 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isOpen && "translate-x-0"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex bg-teal-950/50 flex-col absolute top-0 left-0 h-screen p-8 gap-8 z-[50] w-56 items-center"
          >
            <CgClose
              className="text-3xl font-bold text-cyan-600 hover:text-cyan-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {navLinks.map((data, i) => (
              <li key={i} className="list-none">
                <NavLink
                  to={data.href}
                  onClick={() => {
                    handleScrollToSection(data.scrollToId);
                    setIsOpen(false);
                  }}
                  className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-cyan-300 decoration-teal-700 underline underline-offset-4"
                      : "text-cyan-600"
                  } flex w-fit  text-center duration-200 lg:p-0 px-3 hover:text-cyan-300`}
                >
                  {data.label}
                </NavLink>
              </li>
            ))}
          </div>
        </section>

        {/* Desktop view NavLinks  */}
        <section className="flex">
          <div>
            <ul className="flex flex-col mt-4 py-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((data, i) => (
                <li key={i}>
                  <NavLink
                    to={data.href}
                    onClick={() => handleScrollToSection(data.scrollToId)}
                    className={({ isActive }) => `
                     ${
                       isActive
                         ? "text-cyan-300 decoration-teal-700 underline underline-offset-8"
                         : "text-cyan-600"
                     }  hidden lg:block duration-200 lg:p-0 pr-4 pl-3 hover:text-cyan-300`}
                  >
                    {data.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <TiThMenu
              onClick={() => setIsOpen(true)}
              className="text-2xl text-cyan-600 hover:text-cyan-400 lg:hidden cursor-pointer"
            />
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
