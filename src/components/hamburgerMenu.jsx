import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/hamburgerMenuStatusSlice";

function HamburgerMenu({ darkMode }) {
  const dispatch = useDispatch();
  const menuIsOPen = useSelector((state) => state.hamburgerMenuStatus);

  const handleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className="hamburger-menu w-10 h-10 flex justify-center fixed right-4 top-4 sm:hidden"
      onClick={handleHamburgerMenu}
    >
      {!menuIsOPen && (
        <img
          src={
            darkMode
              ? "../src/assets/menu-hamburger2.svg"
              : "../src/assets/menu-hamburger.svg"
          }
          alt="menu"
        />
      )}
      {menuIsOPen && (
        <img
          src={
            darkMode ? "../src/assets/close2.svg" : "../src/assets/close.svg"
          }
          alt="close"
        />
      )}
    </div>
  );
}

export default HamburgerMenu;
