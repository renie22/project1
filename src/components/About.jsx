import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { margin: "-300px" });

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
      ref={aboutRef}
      id="about"
      className="h-screen bg-white dark:bg-black/70 dark:text-white"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={aboutInView ? "animate" : {}}
        className="layout h-full flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            aboutInView
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4 },
                }
              : {}
          }
          className="pb-10 sm:pb-14 md:pb-20"
        >
          <h2 className="text-sm md:text-lg font-light text-center">
            Get To Know More
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-center tracking-widest mt-2">
            About Me
          </h1>
        </motion.div>
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-14">
          <motion.div variants={textVariants} className="md:w-1/2">
            <div className="h-[350px] w-[350px] lg:w-[450px] lg:h-[450px] relative">
              <img
                className="h-full w-full object-cover rounded-xl absolute z-10"
                src="/img/programmer.svg"
                alt=""
              />
              <div className="h-full w-full bg-blue-500 dark:bg-[#59b256] absolute bottom-5 right-5 rounded-xl"></div>
            </div>
          </motion.div>
          <motion.div
            variants={textVariants}
            className="flex flex-col gap-5 md:w-1/2 lg:gap-10"
          >
            <motion.h1
              variants={textVariants}
              className="text-justify md:text-base"
            >
              Hello! I'm Renie, a passionate React developer dedicated to
              creating captivating web applications. I'm on a mission to master
              the art of web development and bring innovative ideas to life
              through code.
            </motion.h1>
            <motion.div variants={textVariants}>
              <h2 className="md:text-xl text-lg font-medium mb-1">
                Get in Touch
              </h2>
              <p className="text-justify md:text-base">
                I'm always open to new opportunities, collaborations, and
                learning experiences. If you're interested in working together,
                have a project in mind, or simply want to connect, please don't
                hesitate to reach out to me at
                <span className="underline text-bold ml-1">
                  renieadjani62@gmail.com
                </span>
                .
              </p>
            </motion.div>
            <motion.span variants={textVariants}>
              Let's learn, grow, and build amazing things together!
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
