import { motion } from "framer-motion";
import { useSelector } from "react-redux";

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
        duration: 5,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className={`nav ${
        menuIsOPen ? "flex" : "hidden"
      }  sm:flex flex-col justify-around items-center h-1/2 w-14 sm:w-16 p-1 bg-black/90 dark:bg-black/30 rounded-full fixed right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 text-xs`}
      variants={introVariant}
      animate="animate"
      initial="initial"
    >
      <img src="../src/assets/home.svg" alt="home" className="home  p-3" />
      <img src="../src/assets/about.svg" alt="about" className="about  p-3" />
      <img
        src="../src/assets/portfolio2.svg"
        alt="portfolio"
        className="home  p-3"
      />
      <img
        src="../src/assets/contact2.svg"
        alt="contact"
        className="contact  p-3"
      />
      <div
        className="w-9 h-9  relative cursor-pointer"
        onClick={handleThemeToggle}
      >
        {darkMode && (
          <img
            src="../src/assets/light-mode3.svg"
            alt="light"
            className=" light absolute"
          />
        )}
        {!darkMode && (
          <img
            src="../src/assets/night-mode.svg"
            alt="night"
            className="night absolute"
          />
        )}
      </div>
    </motion.div>
  );
}

export default NavBar;
