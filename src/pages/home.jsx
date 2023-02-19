import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../components/icon";
import { iconData } from "../iconData";
import ProgressBar from "../components/progressBar";

const introVariant_left = {
  initial: { opacity: 0, x: "-100vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 5,
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
      delay: 1,
      duration: 7,
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
      delay: 0,
      duration: 1,
      ease: "linear",
      type: "spring",
      stiffness: 40,
    },
  },
};

function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });

  return (
    <>
      <div className="main w-screen min-h-screen  ">
        <div className="hero-bg bg-[url('../src/assets/setup6.jpg')] bg-no-repeat lg:bg-fixed bg-center bg-cover w-full h-screen -z-20">
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
                  "Front-end Developer",
                  1500,
                  "Web Developer",
                  1500,
                  "Web Designer",
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
              <a
                href="#about"
                className="about-btn cursor-pointer hover:lg:text-teal-600"
              >
                ABOUT
              </a>
              <div className="proj-btn cursor-pointer hover:lg:text-teal-600">
                PROJECTS
              </div>
              <div className="contact-btn cursor-pointer hover:lg:text-teal-600">
                CONTACT
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className="content text-zinc-700 bg-gray-300 dark:bg-neutral-900 dark:text-gray-200 p-8 md:p-12 md:pr-28  w-screen"
          id="about"
        >
          <motion.div
            className="about-section text-lg font-sans dark:bg-zinc-700 p-6 rounded-xl shadow shadow-gray-400 dark:shadow-none"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
            exit="hidden"
          >
            <span className="block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6 ">
              ABOUT ME
            </span>
            <div className="about-content flex text-center  sm:justify-center flex-wrap xl:flex-nowrap w-full sm:text-justify">
              <div className="img-container min-w-72 rounded-xl p-4 mb-4  dark:bg-slate-800 sm:w-3/5 xl:w-full xl:max-w-72 flex items-center">
                <img
                  src="../src/assets/me/me.jpg"
                  alt="me"
                  className="rounded-full"
                />
              </div>
              <div className="about-text px-4 lg:px-8 mb-4 sm:text-xl font-medium">
                <span className="block">
                  Hi, my name is Chucks Nwosu and I'm a self-taught frontend
                  developer with a focus on becoming a full-stack developer.
                  With over 2 years of programming experience, I have a passion
                  for creating high-quality, user-friendly and responsive, web
                  and mobile applications . As a quick learner and
                  problem-solver, I am constantly seeking new challenges to
                  improve my skills and knowledge. My goal is to become a
                  full-stack developer, which is why I'm constantly learning new
                  technologies and honing my skills.
                </span>
                <br />
                <span>
                  I believe that great application development is all about
                  striking a balance between functionality, usability, and
                  aesthetics. That's why I strive to create applications that
                  are not only easy to use and navigate but also visually
                  appealing. My projects are built with attention to detail,
                  ensuring that they're accessible and user-friendly across all
                  devices and platforms.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="skills p-6 mt-16 lg:mt-24 md:px-16 lg:px-40"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
            exit="hidden"
          >
            <span className="header-txt block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6">
              MY SKILLS
            </span>
            <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
              Skills and Tools
            </span>
            <div className="skills-icon flex flex-wrap justify-center gap-4 md:gap-8 font-sans font-medium">
              {iconData.map((data, index) => (
                <Icon key={index} icon_name={data.name} icon_path={data.path} />
              ))}
            </div>
          </motion.div>
          <div
            className="proficiency mt-8 lg:mt-10 sm:px-20 md:px-24 lg:px-48"
            ref={ref3}
          >
            <span className="block m-4 text-center font-unbounded text-lg text-yellow-800 dark:text-yellow-600">
              Proficiency
            </span>
            {iconData.map((data, index) => (
              <ProgressBar
                key={index}
                inView3={inView3}
                name={data.name}
                progressLimit={data.proficiency}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
