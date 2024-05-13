import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ImMail4 } from "react-icons/im";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { SiReplit } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { SiCodesignal } from "react-icons/si";

function Footer() {
  const navLinks = [
    {
      label: "Home",
      href: "/",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-600",
    },
    {
      label: "Password Generator",
      href: "/passwordgenerator",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-600",
    },
    {
      label: "Calculator",
      href: "/calculator",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-600",
    },
    {
      label: "Todo List",
      href: "/todolist",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-600",
    },
    {
      label: "Api Page",
      href: "/apipage",
      isActive: "text-blue-200 ",
      NoActive: "text-gray-600",
    },
  ];

  const SocialMediaList = [
    {
      href: "https://mail.google.com/mail/u/0/#inbox",
      icon: (
        <ImMail4 className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
    {
      href: "https://github.com/ankit3354",
      icon: (
        <RxGithubLogo className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
    {
      href: "https://www.linkedin.com/in/ankit3354/",
      icon: (
        <FaLinkedin className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
    {
      href: "https://replit.com/@AnkitVishwaka21",
      icon: (
        <SiReplit className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
    {
      href: "https://www.fiverr.com/ankit3354?up_rollout=true#!",
      icon: (
        <TbBrandFiverr className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
    {
      href: "https://leetcode.com/problemset/",
      icon: (
        <SiLeetcode className="text-cyan-600 hover:text-cyan-300   text-3xl" />
      ),
    },
  ];

  return (
    <div className="relative flex bg-teal-950 max-w-full flex-col justify-end overflow-hidden">
      <div className="relative min-w-full  bg-black/50 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto  sm:px-10">
        <div className="mx-auto flex max-w-full flex-col items-center justify-center text-center gap-6">
          <div>
            <Link to="/" className="items-center ">
              <span className="flex justify-center items-center  text-xl gap-2 w-auto sm:font-sans font-bold text-cyan-600 hover:text-cyan-400">
                <SiCodesignal />
                <p>Ankit Vishwakarma</p>
              </span>
            </Link>
          </div>
          {/* footer Navlinks  */}
          <div>
            <ul className="flex flex-row flex-wrap justify-center gap-2 rounded-lg  px-4 py-2">
              {navLinks.map((data, i) => (
                <li key={i}>
                  <NavLink
                    to={data.href}
                    className={`${(isActive) =>
                      `${
                        isActive ? data.isActive : data.NoActive
                      } `}} duration-200 text-blue-200 font-medium active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`}
                  >
                    {data.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* footer social lists  */}
          <div>
            <ul className="flex flex-row flex-wrap justify-evenly gap-2 rounded-lg  px-4 py-2">
              {SocialMediaList.map((data, i) => (
                <li key={i} className="px-4">
                  <a href={data.href} className="cursor-pointer">
                    {data.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="m-2 w-full border bg-white"></p>
          <span className="flex flex-wrap sm:justify-center font-semibold text-gray-600 font-mono">
            Ankit Vishwakarma &copy;copyright | All right reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
