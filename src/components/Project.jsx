import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Project = () => {
  const projectRef = useRef(null);
  const projectInView = useInView(projectRef, { margin: "-300px" });

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
      ref={projectRef}
      id="project"
      className="h-screen bg-white dark:bg-black/70 dark:text-white"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={projectInView ? "animate" : {}}
        className="layout h-full flex flex-col justify-center items-center pt-14"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            projectInView
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4 },
                }
              : {}
          }
          className="py-3 md:pb-20 md:pt-0"
        >
          <h2 className="text-sm md:text-lg font-light text-center">
            Browse My Recent
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-center tracking-widest mt-2">
            Project
          </h1>
        </motion.div>
        <div className="flex flex-col items-center md:gap-10 gap-5 border p-5 rounded-3xl shadow-xl">
          <h1 className="text-2xl font-semibold">MERN APP</h1>
          <div className="hidden md:block lg:w-[600px] lg:h-[379px] relative">
            <img src="/img/laptop.png" alt="" />
            <div className="laptopScreen">
              <img className="w-full" src="/img/mern-app.png" alt="" />
            </div>
          </div>
          <div className="md:hidden w-[300px] h-[600px] relative">
            <img src="/img/phone.png" alt="" />
            <div className="phoneScreen">
              <img className="w-full" src="/img/mern-app.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <a
              href="https://github.com/renie22/project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="githubButton w-[125px]">Github</button>
            </a>
            <a
              href="https://bubbble-tea.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectButton w-[125px]">Learn More</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
