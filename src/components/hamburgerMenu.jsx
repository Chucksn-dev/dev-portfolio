import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/hamburgerMenuStatusSlice";
import hamburgerIconDarkMode from "../assets/menu-hamburger2.svg";
import hamburgerIconLightMode from "../assets/menu-hamburger.svg";
import closeIconDarkMode from "../assets/close2.svg";
import closeIconLightMode from "../assets/close.svg";

function HamburgerMenu({ darkMode }) {
  const dispatch = useDispatch();
  const menuIsOPen = useSelector((state) => state.hamburgerMenuStatus);

  const handleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className="hamburger-menu w-10 h-10 flex justify-center fixed right-4 top-4 z-40 md:hidden"
      onClick={handleHamburgerMenu}
    >
      {!menuIsOPen && (
        <img
          src={darkMode ? hamburgerIconDarkMode : hamburgerIconLightMode}
          alt="menu"
        />
      )}
      {menuIsOPen && (
        <img
          src={darkMode ? closeIconDarkMode : closeIconLightMode}
          alt="close"
        />
      )}
    </div>
  );
}

export default HamburgerMenu;
