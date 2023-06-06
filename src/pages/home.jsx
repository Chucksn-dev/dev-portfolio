import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Icon from "../components/icon";
import { iconData } from "../iconData";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import { projectData } from "../projectData";
import SendMessage from "../components/sendMessage";
import GetInTouch from "../components/getInTouch";
import About from "../components/about";

const introVariant_left = {
  initial: { opacity: 0, x: "-100vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: "linear",
      type: "spring",
      stiffness: 40,
    },
  },
};

const introVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 2,
      ease: "linear",
    },
  },
};

const scrollReveal_up = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 30,
    },
  },
};

function Home() {
  const [ref0, inView0] = useInView({ triggerOnce: false });
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0, "smooth");
  };

  useEffect(() => {
    handleScrollToTop();
  }, [location.pathname]);

  return (
    <>
      <div className="main w-screen min-h-screen">
        <div
          className="hero-bg bg-[url('../src/assets/setup6.jpg')] bg-no-repeat lg:bg-fixed bg-center bg-cover w-full h-screen -z-20"
          ref={ref0}
        >
          <div className="hero-overlay w-full min-h-full bg-black/70 flex justify-start items-center px-8 md:px-10 lg:px-16 relative">
            <motion.div
              className="hero-content font-roboto font-medium "
              variants={introVariant_left}
              animate="animate"
              initial="initial"
            >
              <span className="into-text block text-yellow-500 text-5xl lg:text-7xl text-shadow-text-shadow-1 mb-4 sm:mb-6">
                Hello,{" "}
                <span className="block text-neutral-300 mt-4 text-shadow-text-shadow-2 sm:inline">
                  I'm Chucks
                </span>
              </span>

              <TypeAnimation
                className="inline-block lg:text-4xl  text-3xl text-green-400 font-sans "
                sequence={[
                  2500,
                  "Software Developer",
                  1500,
                  "Full-Stack Developer",
                  1500,
                  "Front-End Developer",
                  1500,
                  "Back-End Developer",
                  1500,
                  "MERN-Stack Developer",
                  1500,
                  "Web Developer",
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                speed={10}
              />
            </motion.div>
            <motion.div
              className="hero-links absolute flex justify-around font-unbounded font-medium w-full sm:w-4/5 md:w-3/5 p-4 left-1/2 -translate-x-1/2 bottom-28 lg:bottom-24 text-gray-300/50 text-sm sm:text-base"
              variants={introVariant}
              animate="animate"
              initial="initial"
            >
              <a href="#about" className="about-btn  hover:lg:text-teal-600">
                ABOUT
              </a>
              <Link to="projects" className="proj-btn  hover:lg:text-teal-600">
                PROJECTS
              </Link>
              <a
                href="#contact-section"
                className="contact-btn  hover:lg:text-teal-600"
              >
                CONTACT
              </a>
            </motion.div>
          </div>
        </div>
        <div
          className="content text-zinc-700 bg-gray-200 dark:bg-neutral-900 dark:text-gray-200 p-6 sm:p-8 md:p-12 md:pr-28  w-screen"
          id="about"
        >
          <motion.div
            className="about-section text-lg font-sans dark:bg-white/5 p-6 rounded-xl bg-black/5 dark:bg-none shadow shadow-gray-400 dark:shadow-none"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
          >
            <About />
          </motion.div>
          <motion.div
            className="skills p-6 mt-16 lg:mt-24 md:px-16 lg:px-40 bg-black/5  dark:bg-white/5 rounded-xl shadow shadow-gray-400 dark:shadow-none"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
          >
            <span className="header-txt block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6">
              TECHNOLOGY STACK
            </span>
            <div className="languages my-4 md:my-8">
              <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
                Languages
              </span>
              <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
                {iconData.map((data, index) => {
                  if (data.type === "language")
                    return (
                      <Icon
                        key={index}
                        icon_name={data.name}
                        icon={data.path}
                      />
                    );
                })}
              </div>
            </div>
            <div className="frameworks my-4 md:my-8">
              <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
                Frameworks
              </span>
              <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
                {iconData.map((data, index) => {
                  if (data.type === "framework")
                    return (
                      <Icon
                        key={index}
                        icon_name={data.name}
                        icon={data.path}
                      />
                    );
                })}
              </div>
            </div>
            <div className="tools my-4 md:my-8">
              <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
                Dev Tools
              </span>
              <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
                {iconData.map((data, index) => {
                  if (data.type === "others")
                    return (
                      <Icon
                        key={index}
                        icon_name={data.name}
                        icon={data.path}
                      />
                    );
                })}
              </div>
            </div>
            <div className="backend my-4 md:my-8">
              <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
                Backend
              </span>
              <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
                {iconData.map((data, index) => {
                  if (data.type === "backend")
                    return (
                      <Icon
                        key={index}
                        icon_name={data.name}
                        icon={data.path}
                      />
                    );
                })}
              </div>
            </div>
            <div className="database my-4 md:my-8">
              <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
                Database
              </span>
              <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
                {iconData.map((data, index) => {
                  if (data.type === "database")
                    return (
                      <Icon
                        key={index}
                        icon_name={data.name}
                        icon={data.path}
                      />
                    );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project md:p-6 mt-16 lg:mt-24 md:px-16 flex flex-col bg-black/5 dark:bg-white/5 rounded-xl shadow shadow-gray-400 dark:shadow-none"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            ref={ref5}
          >
            <span className="project-txt block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6">
              PROJECT HIGHLIGHT
            </span>
            <div className="project-container flex flex-wrap justify-center gap-8  p-4 ">
              {projectData.slice(0, 4).map((data, index) => (
                <ProjectCard
                  key={index}
                  url={data.url}
                  project_Img={data.image}
                  description={data.description}
                  name={data.name}
                  tech={data.tech}
                  features={data.features}
                />
              ))}
            </div>
            <div className="flex justify-center mt-4 lg:mt-8">
              <Link
                to="projects"
                className="font-unbounded text-white text-xs lg:text-sm p-3 rounded-lg bg-teal-800 dark:bg-teal-700  lg:hover:bg-teal-700 lg:hover:dark:bg-teal-600"
              >
                VIEW MORE PROJECTS
              </Link>
            </div>
          </motion.div>
          <div id="contact-section">
            <motion.div
              variants={scrollReveal_up}
              initial="hidden"
              animate={inView6 ? "visible" : "hidden"}
              ref={ref6}
            >
              <span className="project-txt block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mt-12 md:mt-20 mb-4 md:mb-6">
                CONTACT ME
              </span>
              <div className="contact-section w-full bg-[url('../src/assets/setup7.jpg')] bg-no-repeat lg:bg-fixed bg-center bg-cover mt-8">
                <div className="overlay w-full h-full py-12 sm:py-20 md:py-24 dark:bg-black/70 bg-gray-900/50 flex flex-col justify-center">
                  <SendMessage />
                  <GetInTouch />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {!inView0 && (
          <i
            className="fa-solid fa-circle-arrow-up text-sky-700 text-3xl fixed bottom-6 right-6 lg:hover:cursor-pointer animate-bounce"
            onClick={handleScrollToTop}
          ></i>
        )}
      </div>
    </>
  );
}

export default Home;
