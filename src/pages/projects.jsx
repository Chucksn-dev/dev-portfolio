import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import { projectData } from "../projectData";
import { motion } from "framer-motion";

const pageRouteVariant = {
  initial: { x: "100vw" },
  animate: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "linear",
      type: "spring",
      stiffness: 30,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.3,
      ease: "linear",
      type: "spring",
      stiffness: 30,
    },
  },
};

function Projects() {
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0, "smooth");
  };

  useEffect(() => {
    handleScrollToTop();
  }, [location.pathname]);

  return (
    <div className="project min-h-screen text-zinc-700 bg-gray-300 dark:bg-neutral-900 dark:text-gray-200 p-6 sm:p-8 md:p-12 md:pr-28  w-screen">
      <span className="project-txt block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6">
        MY PROJECTS
      </span>
      <motion.div
        className="project-container flex flex-wrap justify-center gap-8 rounded-xl p-4 shadow shadow-gray-400 dark:shadow-none"
        variants={pageRouteVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {projectData.map((data, index) => (
          <ProjectCard
            key={index}
            url={data.url}
            description={data.description}
            name={data.name}
            project_Img={data.image}
            tech={data.tech}
            features={data.features}
          />
        ))}
      </motion.div>
      <a
        className="button-link flex justify-center mt-6"
        href="https://github.com/chucksn?tab=repositories"
        target="_blank"
      >
        <button className="font-unbounded text-white text-xs lg:text-sm p-3 rounded-lg bg-teal-800 dark:bg-teal-700  lg:hover:bg-teal-700 lg:hover:dark:bg-teal-600">
          <i className="fa-brands fa-github"></i> GitHub Project Repo
        </button>
      </a>
    </div>
  );
}

export default Projects;
