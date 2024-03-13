import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/themeSlice";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState(false);

  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div
      className={
        active
          ? "flex justify-center bg-white duration-300 sticky top-0 dark:bg-black/100 dark:text-white z-50"
          : "flex justify-center duration-300 sticky top-0 py-[5px] dark:bg-black/70 dark:text-white z-50"
      }
    >
      <div className="w-[1400px] h-[80px] md:p-5 p-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">Renie</h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex items-center gap-10 text-lg">
            <li>
              <Link
                activeClass="active"
                to="home"
                className="cursor-pointer hover:text-blue-700 hover:pb-1 hover:border-b-2 hover:border-blue-700 dark:hover:text-green-700 dark:hover:border-green-700"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                className="cursor-pointer hover:text-blue-700 hover:pb-1 hover:border-b-2 hover:border-blue-700 dark:hover:text-green-700 dark:hover:border-green-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                className="cursor-pointer hover:text-blue-700 hover:pb-1 hover:border-b-2 hover:border-blue-700 dark:hover:text-green-700 dark:hover:border-green-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                className="cursor-pointer hover:text-blue-700 hover:pb-1 hover:border-b-2 hover:border-blue-700 dark:hover:text-green-700 dark:hover:border-green-700"
                spy={true}
                smooth={true}
                offset={-50}
                duration={100}
              >
                Contact
              </Link>
            </li>
          </ul>
          {openMenu && (
            <div
              className={
                active
                  ? "sm:hidden absolute right-0 top-[80px] h-screen w-1/2 bg-black/70 z-40 flex justify-end p-2"
                  : "sm:hidden absolute right-0 top-[90px] h-screen w-1/2 bg-black/70 z-40 flex justify-end p-2"
              }
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ul className="text-white w-full text-center text-2xl font-semibold flex flex-col gap-5 py-5">
                <li className="border w-full h-14 flex justify-center items-center rounded-md hover:bg-green-300 hover:text-black">
                  <a href="#" className="w-full">
                    Home
                  </a>
                </li>
                <li className="border w-full h-14 flex justify-center items-center rounded-md hover:bg-green-300 hover:text-black">
                  <a href="#about" className="w-full">
                    About
                  </a>
                </li>
                <li className="border w-full h-14 flex justify-center items-center rounded-md hover:bg-green-300 hover:text-black">
                  <a href="#projects" className="w-full">
                    Projects
                  </a>
                </li>
                <li className="border w-full h-14 flex justify-center items-center rounded-md hover:bg-green-300 hover:text-black">
                  <a href="#contact" className="w-full">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button className="z-[60]" onClick={toggleTheme}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          {/* Hamburger Icon */}
          <div
            className="sm:hidden cursor-pointer z-50"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
          <button
            className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-full active:scale-90 duration-100 transition-all dark:bg-green-500 dark:hover:bg-green-600"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
