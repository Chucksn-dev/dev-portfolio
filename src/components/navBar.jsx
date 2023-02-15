import { useState } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="nav flex flex-col justify-around items-center h-1/2 w-14 sm:w-16 p-1 bg-black/90 rounded-full fixed right-4 top-1/2 -translate-y-1/2 text-xs">
      <img src="../src/assets/home.svg" alt="home" className="home  p-3" />
      <img src="../src/assets/about.svg" alt="about" className="about  p-3" />
      <img
        src="../src/assets/portfolio2.svg"
        alt="portfolio"
        className="home  p-3"
      />
      <img
        src="../src/assets/contact.svg"
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
    </div>
  );
}

export default NavBar;
