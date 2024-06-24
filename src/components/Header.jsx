import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion, useInView } from "framer-motion";

const Header = () => {
  const textRef = useRef();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { margin: "-300px" });

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
      ],
    });
  }, []);

  const textVariants = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      ref={headerRef}
      id="home"
      className="h-[calc(100vh-70px)] dark:bg-black/70 dark:text-white"
    >
      <motion.div
        variants={textVariants}
        animate={headerInView ? "animate" : {}}
        initial="initial"
        className="layout h-full flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between md:gap-14"
      >
        <motion.div
          variants={textVariants}
          className="md:order-2 md:w-1/2 md:flex md:items-center md:justify-center"
        >
          <div className="h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:w-[550px] lg:h-[550px] relative">
            <div className="hidden lg:block i-bg absolute top-0 right-0 dark:bg-blue-500"></div>
            <img
              className="h-full w-full object-cover absolute"
              src="/img/profile.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="flex flex-col items-center gap-3 md:order-1 md:w-1/2 md:gap-5 lg:gap-10"
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <motion.h1
              variants={textVariants}
              className="flex items-center gap-1 text-lg"
            >
              <img
                className="h-5 w-5 object-cover hover:scale-110 duration-200 transition-all"
                src="/img/hi.png"
                alt=""
              />
              Hello, I'm
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="text-2xl md:text-3xl font-bold"
            >
              Renie Adjani
            </motion.h2>
          </div>
          <motion.h1
            variants={textVariants}
            className="text-xl font-semibold text-gray-600"
          >
            <span
              ref={textRef}
              className="text-blue-600 dark:text-green-500 text-2xl"
            ></span>
          </motion.h1>
          <motion.a
            variants={textVariants}
            href="/img/Resume.pdf"
            download="Resume"
          >
            <button className="border border-gray-400 rounded-full px-5 py-3 hover:bg-gray-500 hover:text-white w-[140px]">
              Download CV
            </button>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
