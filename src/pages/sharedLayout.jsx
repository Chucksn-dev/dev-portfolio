import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

function SharedLayout() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
