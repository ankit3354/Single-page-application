import React from "react";
import { IoIosEye } from "react-icons/io";

function ProjectCard({
  alternate,
  projectName,
  projectNo,
  alt,
  projectDetails,
  imgLink,
  projectLink,
  i,
}) {
  return (
    <>
      <div className={`project-wrapper`} key={i}>
        <div
          className={`field-wrapper flex ${
            alternate ? "flex-wrap-reverse" : "flex-wrap"
          } w-full items-center text-white lg:px-24 py-6`}
        >
          {alternate ? (
            <>
              <div className="image-section flex justify-center items-center w-full sm:w-1/2  pt-6 ">
                <p className="relative border-4 border-teal-300 rounded-md w-40 h-40 sm:w-60 sm:h-60">
                  <a href={projectLink}>
                    <img
                      src={imgLink}
                      alt={alt}
                      className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-[55%] rounded-md"
                    />
                  </a>
                </p>
              </div>
              <div className="summary-section w-full sm:w-1/2 md:p-10 xl:p-20  ">
                <p className="font-bold text-4xl px-2 sm:px-2 md:px-0">
                  {projectNo}
                </p>
                <div className="">
                  <p className="text-3xl flex gap-3 font-bold underline-offset-8 underline decoration-2 px-2 sm:px-2 md:px-0 py-3">
                    {projectName}
                    <a
                      href={projectLink}
                      className="cursor-pointer flex justify-center items-center text-zinc-700 hover:text-zinc-600"
                    >
                      <IoIosEye className="text-md" />
                    </a>
                  </p>
                  <summary className="mx-auto text-justify rounded-md bg-pink/50 px-4 sm:px-0 list-none mt-3 max-w-xl leading-none tracking-tight ">
                    {projectDetails}
                  </summary>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="summary-section w-full sm:w-1/2 md:p-10 xl:p-20 "
                key={i}
              >
                <p className="font-bold text-4xl px-2 sm:px-2 md:px-0 ">
                  {projectNo}
                </p>
                <div className="">
                  <p className="text-3xl flex gap-3 font-bold underline-offset-8 underline decoration-2 px-2 sm:px-2 md:px-0 py-3">
                    {projectName}
                    <a
                      href={projectLink}
                      className="cursor-pointer flex justify-center items-center text-zinc-700 hover:text-zinc-60"
                    >
                      <IoIosEye className="text-md" />
                    </a>
                  </p>
                  <summary className="mx-auto text-justify rounded-md bg-pink/50 px-4 sm:px-0 list-none mt-3 max-w-xl leading-none tracking-tight">
                    {projectDetails}
                  </summary>
                </div>
              </div>

              <div className="image-section flex justify-center items-center w-full sm:w-1/2  pt-6">
                <p className="relative border-4 border-teal-300 rounded-md w-40 h-40 sm:w-60 sm:h-60">
                  <a href={projectLink}>
                    <img
                      src={imgLink}
                      alt={alt}
                      className="absolute -translate-x-1/2 -translate-y-1/2 top-[45%] left-[55%] rounded-md"
                    />
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
        <hr className="sm:max-w-6xl text-center mx-auto text-teal-400" />
      </div>
    </>
  );
}

export default ProjectCard;
