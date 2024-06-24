import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-scroll";
import { useThemeStore } from "../zustand/themeStore";
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Project",
    path: "project",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { setTheme, darkMode } = useThemeStore();

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
    setTheme();
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: { x: "50vw" },
    opened: {
      x: "0",
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div
      className={
        active
          ? "h-[70px] bg-white sticky top-0 dark:bg-black/100 dark:text-white z-50"
          : "h-[70px] sticky top-0 dark:bg-black/70 dark:text-white z-50"
      }
    >
      <div className="layout h-full flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-2xl font-semibold tracking-wide"
        >
          Renie
        </motion.h1>
        <motion.ul
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
          className="hidden sm:flex items-center gap-5 text-lg"
        >
          {links.map((link) => (
            <li key={link.title}>
              <Link
                activeClass="active"
                to={`${link.path}`}
                className="cursor-pointer hover:pb-1 hover:border-b-2 hover:border-blue-700 dark:hover:border-green-700"
                spy={true}
                smooth={true}
                offset={link.path === "home" ? -70 : 0}
                duration={100}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </motion.ul>
        <div className="flex items-center gap-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center gap-3"
          >
            <button className="z-[60]" onClick={toggleTheme}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
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
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            {/* Hamburger Icon */}
            <button
              className="sm:hidden w-7 h-6 flex flex-col justify-between z-50 relative"
              onClick={() => setOpen((prev) => !prev)}
            >
              <motion.div
                variants={topVariants}
                animate={open ? "opened" : "closed"}
                className="w-7 h-1 bg-black dark:bg-white rounded origin-left"
              ></motion.div>
              <motion.div
                variants={centerVariants}
                animate={open ? "opened" : "closed"}
                className="w-7 h-1 bg-black dark:bg-white rounded origin-left"
              ></motion.div>
              <motion.div
                variants={bottomVariants}
                animate={open ? "opened" : "closed"}
                className="w-7 h-1 bg-black dark:bg-white rounded origin-left"
              ></motion.div>
            </button>
            {open && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="opened"
                className="sm:hidden fixed right-0 top-[70px] h-screen w-1/2 bg-black/70 z-40 flex justify-end p-2"
                onClick={() => setOpen(!open)}
              >
                <ul className="text-white w-full text-center text-2xl font-semibold flex flex-col gap-5 py-5">
                  {links.map((link) => (
                    <motion.li
                      variants={listItemVariants}
                      key={link.title}
                      className="border w-full h-14 flex justify-center items-center rounded-md hover:bg-green-300 dark:hover:bg-blue-300 hover:text-black cursor-pointer"
                    >
                      <Link
                        to={link.path}
                        className="w-full"
                        spy={true}
                        smooth={true}
                        offset={link.path === "home" ? -70 : 0}
                        duration={0}
                        onClick={() => setOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
