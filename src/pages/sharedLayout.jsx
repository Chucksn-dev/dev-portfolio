import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import HamburgerMenu from "../components/hamburgerMenu";
import { useState } from "react";

function SharedLayout() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HamburgerMenu darkMode={darkMode} />
      <Outlet />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default SharedLayout;
