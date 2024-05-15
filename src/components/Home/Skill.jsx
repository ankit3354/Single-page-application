import React, { useEffect, useState, useRef } from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { SiEslgaming } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdSportsScore } from "react-icons/md";
import { motion, useScroll } from "framer-motion";

function Skill({ id }) {
  // Litten increase opacity when interact skill section

  // Skill Scetion
  return (
    <div className="container  bg-teal-950 w-full sm:max-w-full overflow-hidden  text-white">
      {/* Skill-wrapper  */}
      <motion.div className="skill-wrapper w-full h-full">
        {/* field-wrpper */}

        <div className="filed-wrapper flex flex-row flex-wrap sm:flex-wrap md:flex-wrap  w-full sm:mx-auto items-center justify-center bg-black/50">
          {/* Software Skills & laguage & Personal skil  */}
          <div className="software-skill-field flex w-full justify-evenly sm:w-1/3 flex-col flex-wrap  rounded-md  min-h-screen ">
            <div className="skills-level px-2 min-[320px]:px-14 sm:px-4 md:px-6 lg:px-10 xl:px-16 ">
              <p className="text-xl font-bold mb-2  underline underline-offset-4 decoration-4">
                Software Tech Skills
              </p>
              <div className="Technical-bars skills">
                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <TfiHtml5 className="text-orange-600" />
                    <span>HTML</span>
                  </div>
                  <div className="progress-line html">
                    <span></span>
                  </div>
                </div>

                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <SiCss3 className="text-blue-500" />
                    <span>CSS</span>
                  </div>
                  <div className="progress-line css">
                    <span></span>
                  </div>
                </div>

                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <RiJavascriptFill className="text-yellow-600" />
                    <span>JavaScript</span>
                  </div>
                  <div className="progress-line javascript">
                    <span></span>
                  </div>
                </div>

                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <TbBrandReactNative className="text-cyan-600" />
                    <span>ReactJS</span>
                  </div>
                  <div className="progress-line reactjs">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <SiCplusplus className="text-blue-500" />
                    <span>C++</span>
                  </div>
                  <div className="progress-line cpp">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <SiTailwindcss className="text-cyan-400" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="progress-line tailwind">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info flex gap-2 justify-left items-center">
                    <FaBootstrap className="text-purple-600" />
                    <span>Bootstrap</span>
                  </div>
                  <div className="progress-line bootstrap">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="laguages-field  px-2 min-[320px]:px-14 sm:px-4 md:px-6 lg:px-10 xl:px-16 ">
              <div className="text-xl  font-bold mb-2  underline underline-offset-4 decoration-4 ">
                Languages
              </div>

              <div className="Technical-bars languages">
                <div className="bar ">
                  <div className="info flex gap-2 justify-left items-center">
                    <span>English</span>
                  </div>
                  <div className="progress-line English">
                    <span></span>
                  </div>
                </div>
                <div className="bar ">
                  <div className="info flex gap-2 justify-left items-center">
                    <span>Hindi</span>
                  </div>
                  <div className="progress-line Hindi">
                    <span></span>
                  </div>
                </div>
                <div className="bar ">
                  <div className="info flex gap-2 justify-left items-center">
                    <span>French</span>
                  </div>
                  <div className="progress-line French">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal-field px-6 sm:px-6 lg:px-14 xl:px-16 ">
              <div className="text-xl  font-bold mb-2  underline underline-offset-4 decoration-4">
                Nature
              </div>
              <p className="text-center ">
                Creative - enthusiastic - Hard Working
              </p>
            </div>
          </div>

          {/* What can i do & Education  */}
          <div
            id="Projects"
            className="Project-field flex flex-col flex-wrap px-10 sm:px-0 xl:px-4 w-full justify-evenly sm:w-1/3  rounded-md  min-h-screen "
          >
            <div className="Expperince-work-field  w-full ">
              <p className="text-xl text-white mb-2 font-bold underline underline-offset-4 decoration-4">
                What can i do?
              </p>
              <div className="text-justify px-2 sm:py-0 md:py-0 ">
                <div className="">
                  <p className="font-bold">Problem-Solving Skills</p>
                  <p className="text-[0.9rem]">
                    Proficient in analyzing complex issues and delivering
                    innovative solutions.
                  </p>
                </div>
                <div className="">
                  <p className="font-bold">Communication and Collaboration</p>
                  <p className="text-[0.9rem]">
                    {" "}
                    Effective communicator with a collaborative approach, adept
                    at working in team environments.
                  </p>
                </div>
                <div className="">
                  <p className="font-bold">Web Development Abilities</p>
                  <p className="text-[0.9rem]">
                    Skilled in front-end and back-end development, specializing
                    in responsive design and UI/UX{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="Education w-full ">
              <div className="px-2 text-justify">
                <p className="text-xl text-white font-bold mb-3 underline underline-offset-4 decoration-4">
                  Education
                </p>
                <div>
                  <div>
                    <p>Degree in Bachelor of Business administration</p>
                  </div>
                  <div>
                    <p>
                      Higher Education Vidya Bhararti School, Rohini Delhi
                      Sector-15 110089
                    </p>
                  </div>
                  <div>
                    <p>
                      Completed Diploma in C/C++, Data Stucture by Aptech
                      Pitampura Rohini Delhi 110085
                    </p>
                  </div>
                  <div>
                    <p>
                      Completed Basic Course in HTML, CSS, JAVASCRIPT on
                      LearnTube by careerNinja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skill & Hobbies  */}
          <div className="Expertise-field flex flex-col flex-wrap justify-evenly  sm:w-1/3  py-5 rounded-md min-h-screen px-10 sm:px-2 lg:px-4 xl:px-14 ">
            <div>
              <p className="flex justify-center items-center text-xl text-white font-bold mb-3 underline underline-offset-4 decoration-4 ">
                Professionl skills
              </p>

              <div className="radial-bars w-full flex flex-wrap justify-evenly overflow-hidden px-16 sm:px-0 md:px-0">
                <div className="radial-bar w-full md:w-1/2 text-left ">
                  <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle
                      className="progress-bar"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                    <circle
                      className="path path-1"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                  </svg>
                  <div className="percentage">90%</div>
                  <div className="text">Calmness</div>
                </div>
                <div className="radial-bar w-full md:w-1/2 text-left ">
                  <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle
                      className="progress-bar"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                    <circle
                      className="path path-2"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                  </svg>
                  <div className="percentage">80%</div>
                  <div className="text">Creativity</div>
                </div>
                <div className="radial-bar w-full md:w-1/2 text-left ">
                  <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle
                      className="progress-bar"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                    <circle
                      className="path path-3"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                  </svg>
                  <div className="percentage">95%</div>
                  <div className="text">Enthusiastic</div>
                </div>
                <div className="radial-bar w-full md:w-1/2 text-left ">
                  <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle
                      className="progress-bar"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                    <circle
                      className="path path-4"
                      cx="100"
                      cy="100"
                      r="80"
                    ></circle>
                  </svg>
                  <div className="percentage">80%</div>
                  <div className="text">Focused</div>
                </div>
              </div>
            </div>

            <div className="Interest&Hobies ">
              <div>
                <p className="flex justify-center items-center text-xl text-white font-bold underline underline-offset-4 decoration-4">
                  Interested & Hobbies
                </p>
              </div>
              <div className="interest-wrapper min-w-full flex gap-2 sm:flex-wrap items-center justify-between overflow-hidden px-16 sm:px-10 mt-4">
                <div className="w-full lg:w-1/4 flex flex-col items-center">
                  <FaTruckPlane className="text-2xl" />
                  <p>Traveling</p>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col items-center">
                  <SiEslgaming className="text-2xl" />
                  <p>Gaming</p>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col  items-center">
                  <BsPersonWorkspace className="text-2xl" />
                  <p>Freelancing</p>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col  items-center">
                  <MdSportsScore className="text-2xl" />
                  <p>Sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
