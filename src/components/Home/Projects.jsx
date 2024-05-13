import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { TbArrowBadgeUp } from "react-icons/tb";
import { TbArrowBadgeDown } from "react-icons/tb";
import { motion, useScroll } from "framer-motion";

function Projects({ id }) {
  const [showProject, setShowProject] = useState(false);
  const [startIndex, setStartIndex] = useState(3); // Initial start index for additional projects

  const projectDetails = [
    {
      projectName: "Single Page Application",
      projectNo: "Project 1",
      projectDetails: `Lorem Nesciunt accusantium deserunt nam. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Lorem ipsum dolor sit
      amet. accusantium deserunt nam. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Lorem ipsum dolor sit amet.`,

      alt: "1Logo",
      imgLink: "/ProjectImg/SinglePageApp.svg",
    },
    {
      projectName: "React Cards",
      projectNo: "Project 2",
      projectDetails: `Lorem Nesciunt accusantium deserunt nam. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Lorem ipsum dolor sit
      amet. accusantium deserunt nam. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Lorem ipsum dolor sit amet.`,
      alt: "2Logo",
      imgLink: "/ProjectImg/ReactCards.svg",
    },
    {
      projectName: "Chat App",
      projectNo: "Project 3",
      projectDetails: `Lorem Nesciunt accusantium deserunt nam. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Lorem ipsum dolor sit
      amet. accusantium deserunt nam. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Lorem ipsum dolor sit amet.`,
      alt: "3Logo",
      imgLink: "/ProjectImg/ChatApp.svg",
    },
    {
      projectName: "Histagram ",
      projectNo: "Project 4",
      projectDetails: `Lorem Nesciunt accusantium deserunt nam. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Lorem ipsum dolor sit
      amet. accusantium deserunt nam. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Lorem ipsum dolor sit amet.`,
      alt: "4Logo",
      imgLink: "/ProjectImg/SinglePageApp.svg",
    },
  ];

  const [IsVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <motion.main
      ref={skillRef}
      style={{ scaleX: scrollYProgress }}
      className="container flex flex-col bg-teal-950 pt-16 sm:max-w-full sm:mx-auto ring-gray-900/5 shadow-xl ring-1 transition-all"
    >
      <div
        initial={{ opacity: 0 }}
        animate={IsVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <p className="text-2xl font-bold text-center text-white/50 uppercase underline underline-offset-4">
          Projects.
        </p>

        {projectDetails.slice(0, startIndex).map((project, i) => (
          <div className="flex flex-col" key={i}>
            <ProjectCard
              alternate={i % 2 === 0}
              projectName={project.projectName}
              projectNo={project.projectNo}
              projectDetails={project.projectDetails}
              alt={project.alt}
              imgLink={project.imgLink}
              i={i}
            />
          </div>
        ))}

        {showProject && (
          <>
            {projectDetails.slice(startIndex).map((project, i) => (
              <div className="flex flex-col" key={i + startIndex}>
                <ProjectCard
                  alternate={(i + startIndex) % 2 === 0}
                  projectName={project.projectName}
                  projectNo={project.projectNo}
                  projectDetails={project.projectDetails}
                  alt={project.alt}
                  imgLink={project.imgLink}
                  i={i + startIndex}
                />
              </div>
            ))}
          </>
        )}

        <div className="ReadMore-Btn p-4">
          <div className="flex items-center justify-center ">
            <p>
              {showProject ? (
                <TbArrowBadgeUp
                  onClick={() => setShowProject((prev) => !prev)}
                  className="text-teal-200 text-3xl font-bold cursor-pointer transition-all "
                />
              ) : (
                <TbArrowBadgeDown
                  onClick={() => setShowProject((prev) => !prev)}
                  className="text-teal-200 text-3xl font-bold cursor-pointer transition-all "
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Projects;
