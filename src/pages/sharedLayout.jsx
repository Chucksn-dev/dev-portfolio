import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

function SharedLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
