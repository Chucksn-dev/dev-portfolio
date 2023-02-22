import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeIcon from "..//assets/home.svg";
import portfolioIcon from "..//assets/portfolio2.svg";
import lightIcon from "..//assets/light-mode3.svg";
import nightIcon from "..//assets/night-mode.svg";

function NavBar({ darkMode, setDarkMode }) {
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const menuIsOPen = useSelector((state) => state.hamburgerMenuStatus);

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

  return (
    <motion.div
      className={`nav ${
        menuIsOPen ? "flex" : "hidden"
      }  md:flex flex-col justify-around items-center h-1/3 w-14 sm:w-16 p-1 bg-black/90 dark:bg-black/30 rounded-full fixed right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 text-xs z-40`}
      variants={introVariant}
      animate="animate"
      initial="initial"
    >
      <Link to="/">
        <img src={homeIcon} alt="home" className="home  p-3" />
      </Link>

      <Link to="projects">
        <img src={portfolioIcon} alt="portfolio" className="home  p-3" />
      </Link>

      <div
        className="w-9 h-9  relative cursor-pointer"
        onClick={handleThemeToggle}
      >
        {darkMode && (
          <img src={lightIcon} alt="light" className=" light absolute" />
        )}
        {!darkMode && (
          <img src={nightIcon} alt="night" className="night absolute" />
        )}
      </div>
    </motion.div>
  );
}

export default NavBar;
