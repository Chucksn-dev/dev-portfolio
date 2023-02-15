import { TypeAnimation } from "react-type-animation";
import {
  AnimateOnRevealLeft,
  AnimateOnRevealRight,
} from "../components/animateOnReveal";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="main flex flex-col w-screen min-h-screen dark:bg-neutral-900 ">
        <div className="top-header-section bg-[url('../src/assets/setup6.jpg')] bg-no-repeat bg-fixed bg-center bg-cover w-full h-screen -z-20">
          <div className="overlay w-full min-h-screen bg-black/70 flex justify-start items-center px-4 md:px-6 lg:px-10 ">
            <div className="intro-text-container lg:w-1/2 font-roboto text-white font-medium ">
              <span className="into-text block text-5xl lg:text-7xl ">
                Hello, I'm Chucks
              </span>

              <TypeAnimation
                className="inline-block lg:text-4xl font-robotoMono text-2xl text-yellow-500 mt-2 md:mt-4 text-shadow-text-shadow-1"
                sequence={[
                  "Software Developer",
                  1500,
                  "Front-end Developer",
                  1500,
                  "Web Developer",
                  1500,
                  "Web Designer",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                speed={10}
              />
            </div>
          </div>
        </div>
        <div className="content  bg-white dark:bg-neutral-900 w-full">
          <AnimateOnRevealRight>
            <div className="about-section text-xl py-16 px-16 font-unbounded ">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                doloribus adipisci ipsum officiis animi tempore dolore eveniet
                cum saepe, error debitis dolores beatae dicta est assumenda sit,
                ratione iusto hic. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eum doloribus Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum doloribus adipisci ipsum
                officiis animi tempore dolore eveniet cum saepe, error debitis
                dolores beatae dicta est assumenda sit, ratione iusto hic. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                doloribus adipisci ipsum officiis animi tempore dolore eveniet
                cum saepe, error debitis dolores beatae dicta est assumenda sit,
                ratione iusto hic. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eum doloribus Lorem ipsum dolor sit amet
              </span>
            </div>
          </AnimateOnRevealRight>
        </div>
      </div>
    </>
  );
}

export default Home;
