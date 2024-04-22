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
  return (
    <div className="relative flex max-w-full flex-col justify-end overflow-hidden">
      <div className="relative min-w-full bg-gray-900 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto  sm:px-10">
        <div className="mx-auto flex max-w-full flex-col items-center justify-center text-center gap-6">
          <div>
            <Link to="/" className="items-center ">
              <span className="flex justify-center items-center  text-xl gap-2 w-auto sm:font-sans font-bold text-cyan-600 hover:text-cyan-400">
                <SiCodesignal />
                <p>Ankit Vishwakarma</p>
              </span>
            </Link>
          </div>
          <div className="">
            <ul className="flex flex-row flex-wrap justify-center gap-2 rounded-lg  px-4 py-2">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/passwordgenerator"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Password Generator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calculator"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Calculator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/currencyconverter"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Currency Converter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todolist"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Todo List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apipage"
                  className={({ isActive }) =>
                    `duration-200 font-medium  ${
                      isActive ? "text-blue-200 " : "text-gray-600"
                    } active:border-b-2 focus:border-b-2 py-1 px-2 hover:text-blue-200`
                  }
                >
                  Api Page
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row flex-wrap justify-evenly gap-2 rounded-lg  px-4 py-2">
              <li className="px-4 ">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="sm:cursor-pointer"
                >
                  <ImMail4 className="text-cyan-600 hover:text-cyan-300  text-3xl" />
                </a>
              </li>
              <li className="px-4 ">
                <a
                  href="https://github.com/ankit3354"
                  className="sm:cursor-pointer"
                >
                  <RxGithubLogo className="text-cyan-600 hover:text-cyan-300   text-3xl" />
                </a>
              </li>
              <li className="px-4 ">
                <a
                  href="https://www.linkedin.com/in/ankit3354/"
                  className="sm:cursor-pointer"
                >
                  <FaLinkedin className="text-cyan-600 hover:text-cyan-300   text-3xl" />
                </a>
              </li>
              <li className="px-4 ">
                <a
                  href="https://replit.com/@AnkitVishwaka21"
                  className="sm:cursor-pointer"
                >
                  <SiReplit className="text-cyan-600 hover:text-cyan-300   text-3xl" />
                </a>
              </li>
              <li className="px-4">
                <a
                  href="https://www.fiverr.com/ankit3354?up_rollout=true#!"
                  className="sm:cursor-pointer"
                >
                  <TbBrandFiverr className="text-cyan-600 hover:text-cyan-300 text-3xl" />
                </a>
              </li>
              <li className="px-4">
                <a
                  href="https://leetcode.com/problemset/"
                  className="sm:cursor-pointer"
                >
                  <SiLeetcode className="text-cyan-600 hover:text-cyan-300  text-3xl" />
                </a>
              </li>
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
