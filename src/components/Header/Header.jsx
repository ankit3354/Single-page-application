import React from "react";
import { SiCodesignal } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  px-2 sm:px-6">
            <div className="flex flex-wrap justify-center items-center h-10">
              <Link to="/">
                <span className="w-auto text-2xl sm:font-sans font-bold text-cyan-600 hover:text-cyan-400">
                  <SiCodesignal />
                </span>
              </Link>
            </div>
            <div className=" sm:ml-6 sm:block">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/passwordgenerator"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Password Generator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/calculator"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Calculator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/currencyconverter"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Currnecy Converter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/todolist"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Todo List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apipage"
                    className={({ isActive }) =>
                      `block py-3 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-200" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-200 lg:p-0 focus:border-b-2`
                    }
                  >
                    Api Page
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
