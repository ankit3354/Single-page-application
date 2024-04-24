import React from "react";
import { Bio } from "../index";
import { ImMail4 } from "react-icons/im";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import Button from "../Button";

function Home() {
  const ResumeHanlder = () => {
    window.open(Bio.resume, "_blank");
  };

  const socialMediaList = [
    {
      href: "https://github.com/ankit3354",
      icon: <RxGithubLogo className="text-cyan-300 text-2xl" />,
    },
    {
      href: "https://www.linkedin.com/in/ankit3354/",
      icon: <FaLinkedin className="text-cyan-300 text-2xl" />,
    },
    {
      href: "https://www.fiverr.com/ankit3354?up_rollout=true#!",
      icon: <TbBrandFiverr className="text-cyan-300 text-2xl" />,
    },
  ];

  return (
    <>
      <div className="flex h-screen w-full flex-wrap items-center bg-blue-950 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-h-screen sm:max-w-full sm:px-10 overflow-hidden">
        <div className="mx-auto max-w-md rounded-lg  p-1 ">
          <div>
            <img
              src="https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image"
            />
          </div>
        </div>

        <div className="mx-auto max-w-lg rounded-lg p-1 text-justify overflow-hidden ">
          <div className=" ubuntu-light">
            <p className="py-1 sm:text-7xl lg:text-8xl text-3xl leading-none tracking-tighter font-sans text-cyan-300  ubuntu-light ">
              Hello I'm
            </p>
            <p className="sm:text-7xl lg:text-8xl text-3xl text-white tracking-tight ubuntu-light">
              Ankit
            </p>
          </div>

          <p className="text-cyan-300 gap-2 w-full  min-[320px]:w-100 opacity-90 sm:font-medium sm:leading-5 tracking-tight py-4 border-b-[1px] border-zinc-400 ubuntu-light-400">
            <strong className="sm:opacity-100 text-cyan-700 text-xl">
              Introduction:
            </strong>
            <br />
            This is Ankit Vishwakarma, I'm on a relentless journey as a frontend
            developer, driven by my unwavering passion for creativity and
            innovation. With a heart fueled by the desire to craft compelling
            digital experiences, I embark on each project with enthusiasm and
            dedication.
          </p>

          <div className="flex flex-col gap-2 rounded-lg px-4 pb-2 pt-1">
            <ul className="flex flex-wrap justify-evenly py-4 text-cyan-300 sm:py-2">
              {socialMediaList.map((data, i) => (
                <li className="hover:text-cyan-400">
                  <a href={data.href}>{data.icon}</a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-2 flex-wrap justify-evenly text-cyan-300">
              <Button onClick={ResumeHanlder} label={"My Resume"} />
              <p className="flex justify-start items-start ">
                <a
                  href="https://www.gmail.com"
                  className="flex flex-wrap justify-center px-4 py-2  items-center border font-bold text-cyan-400 hover:text-white hover:bg-cyan-600  gap-2 rounded-md font-sans"
                >
                  <ImMail4 /> Gmail
                </a>
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full sm:max-w-full sm:mx-auto sm:max-h-screen ring-gray-900/5 shadow-xl ring-1"></div>
      <div className="flex bg-pink-300 h-screen w-full sm:max-w-full sm:mx-auto sm:max-h-screen ring-gray-900/5 shadow-xl ring-1"></div>
    </>
  );
}

export default Home;
