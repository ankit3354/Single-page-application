import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { TbArrowBadgeUp } from "react-icons/tb";
import { TbArrowBadgeDown } from "react-icons/tb";

function Projects() {
  const [showProject, setShowProject] = useState(false);
  const [startIndex, setStartIndex] = useState(3); // Initial start index for additional projects

  const projectDetails = [
    {
      projectName: "Single Page Application",
      projectNo: "Project 1",
      projectDetails: `I've showcased my ability to create dynamic, responsive web applications. The portfolio includes a variety of small projects such as a Calculator, API-handling React Cards, a Password Generator, and a Currency Converter. Each project demonstrates my proficiency in React.js, user-friendly UI design, and the seamless integration of external APIs.`,
      alt: "1Logo",
      imgLink: "/ProjectImg/SinglepageApp.svg",
      projectLink: "https://single-page-application-seven.vercel.app/",
    },
    {
      projectName: "Todo List",
      projectNo: "Project 2",
      projectDetails: `Todo List application using Appwrite for data storage. It features a seamless toggle function for task management, showcasing my ability to integrate backend services and create interactive, user-friendly interfaces.`,
      alt: "2Logo",
      imgLink: "/ProjectImg/TodoList.svg",
      projectLink: "https://todo-list-vert-omega-47.vercel.app/",
    },
    {
      projectName: "Chat App",
      projectNo: "Project 3",
      projectDetails: `Chat app project, users can engage in real-time conversations with authorized individuals, utilizing Appwrite for data storage. The app features seamless message deletion and a secure, efficient communication experience.`,
      alt: "3Logo",
      imgLink: "/ProjectImg/ChatApp.svg",
      projectLink: "https://chat-app-ujea.vercel.app",
    },
    {
      projectName: "Histagram ",
      projectNo: "Project 4",
      projectDetails: `Histagram clone is similar to Instagram app where I've implemented a multi-page application with features like CRUD operations, an Explore section, profile management, post interactions (like, delete, save), and user authentication. This project highlights my skills in building comprehensive social media platforms with React and ensuring a smooth, engaging user experience.
      `,
      alt: "4Logo",
      imgLink: "/ProjectImg/Histagram.svg",
      projectLink: "https://github.com/ankit3354/Histagram.git",
    },
    {
      projectName: "Crypto Dashbord",
      projectNo: "Project 5",
      projectDetails: `Crypto Dashboard, Responsive ReactJS application using Chakra UI. It has three pages: Transactions, Dashboard, and Support, providing a comprehensive and user-friendly interface for managing crypto assets.`,
      alt: "4Logo",
      imgLink: "/ProjectImg/Dashboard.svg",
      projectLink: "https://dashboard-pi-dun.vercel.app",
    },
  ];

  return (
    <main className="container flex flex-col bg-teal-950 pt-16 sm:max-w-full sm:mx-auto ring-gray-900/5 shadow-xl ring-1 transition-all">
      <div>
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
              projectLink={project.projectLink}
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
                  projectLink={project.projectLink}
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
    </main>
  );
}

export default Projects;
