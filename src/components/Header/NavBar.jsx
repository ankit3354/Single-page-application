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
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
      scrollToId: "home",
    },
    {
      label: "Projects",
      href: "",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
      scrollToId: "projects",
    },
    {
      label: "Skills",
      href: "",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
      scrollToId: "skills",
    },
    {
      label: "Currency Convertor",
      href: "/currencyconverter",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
    },
    {
      label: "Password Generator",
      href: "/passwordgenerator",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
    },
    {
      label: "Calculator",
      href: "/calculator",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
    },
    {
      label: "React Cards",
      href: "/react_cards",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
    },
    {
      label: "Api Page",
      href: "/apipage",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-700",
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
                  onClick={() => handleScrollToSection(data.scrollToId)}
                  className={`${(isActive) =>
                    `${
                      isActive ? data.isActive : data.NoActive
                    } `}} flex duration-200 border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-blue-200  focus:border-b-2 text-center px-3 text-blue-200 w-fit rounded-lg`}
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
                    className={`${(isActive) =>
                      `${
                        isActive ? data.isActive : data.NoActive
                      } `}} hidden lg:block block pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2 text-blue-200 `}
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
