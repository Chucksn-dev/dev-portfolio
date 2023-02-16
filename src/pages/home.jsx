import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const scrollReveal_left = {
  hidden: { opacity: 0, x: "100vh" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 5,
      ease: "linear",
      type: "spring",
      stiffness: 10,
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
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <>
      <div className="main w-screen min-h-screen  ">
        <div className="hero-bg bg-[url('../src/assets/setup6.jpg')] bg-no-repeat lg:bg-fixed bg-center bg-cover w-full h-screen -z-20">
          <div className="hero-overlay w-full min-h-full bg-black/70 flex justify-start items-center px-8 md:px-10 lg:px-16 ">
            <motion.div
              className="hero-content lg:w-1/2 font-roboto font-medium "
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
          </div>
        </div>
        <div className="content  bg-white dark:bg-neutral-800 dark:text-gray-300 w-screen">
          <motion.div
            className="about-section text-xl py-8 px-16 font-unbounded"
            variants={scrollReveal_up}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            ref={ref1}
            exit="hidden"
          >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              doloribus adipisci ipsum officiis animi tempore dolore eveniet cum
              saepe, error debitis dolores beatae dicta est assumenda sit,
              ratione iusto hic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum doloribus Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum doloribus adipisci ipsum
              officiis animi tempore dolore eveniet cum saepe, error debitis
              dolores beatae dicta est assumenda sit, ratione iusto hic. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              doloribus adipisci ipsum officiis animi tempore dolore eveniet cum
              saepe, error debitis dolores beatae dicta est assumenda sit,
              ratione iusto hic. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum doloribus Lorem ipsum dolor sit amet
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
