import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

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

function Home() {
  const [menuIsOPen, setMenuStatus] = useState(false);

  const handleHamburgerMenu = () => {
    setMenuStatus(!menuIsOPen);
  };
  return (
    <>
      <div className="main w-screen min-h-screen  ">
        <div className="top-header-section bg-[url('../src/assets/setup6.jpg')] bg-no-repeat bg-fixed bg-center bg-cover w-full h-screen -z-20">
          <div className="overlay w-full min-h-full bg-black/70 flex justify-start items-center px-8 md:px-10 lg:px-16 ">
            <div
              className="hamburger-menu w-10 h-10 flex justify-center fixed right-4 top-4 sm:hidden"
              onClick={handleHamburgerMenu}
            >
              {!menuIsOPen && (
                <img src="../src/assets/menu-hamburger2.svg" alt="menu" />
              )}
              {menuIsOPen && <img src="../src/assets/close2.svg" alt="close" />}
            </div>
            <motion.div
              className="intro-text-container lg:w-1/2 font-roboto font-medium "
              variants={introVariant_left}
              animate="animate"
              initial="initial"
            >
              <span className="into-text block text-yellow-500 text-5xl lg:text-7xl text-shadow-text-shadow-1">
                Hello,{" "}
                <span className="block text-neutral-300 mt-4 text-shadow-text-shadow-2 sm:inline">
                  I'm Chucks
                </span>
              </span>

              <TypeAnimation
                sequence={[1500, "I am a:"]}
                className="block lg:text-4xl font-robotoMono text-2xl text-green-300 mt-4 "
                wrapper="span"
                speed={10}
                cursor={false}
              />

              <TypeAnimation
                className="inline-block lg:text-4xl font-robotoMono text-2xl text-sky-500 mt-2"
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
          <div className="about-section text-xl py-16 px-16 font-unbounded">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
