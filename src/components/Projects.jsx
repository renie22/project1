import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center bg-white dark:bg-black/70 dark:text-white sm:pt-0 pt-10"
    >
      <div className="w-[1400px] md:p-5 p-2 mt-10 mb-20">
        <h2 className="xl:text-lg lg:text-sm text-xs font-light text-center">
          Browse My Recent
        </h2>
        <h1 className="xl:text-4xl lg:text-2xl text-xl font-bold text-center tracking-widest mt-2 md:mb-0  mb-[65px]">
          Project
        </h1>
        <div className="flex items-center justify-center h-[70vh] w-full">
          <div className="flex flex-col items-center md:mt-[20px] mt-0">
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
                  href="https://github.com/renie62/Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="githubButton w-[125px]">Github</button>
                </a>
                <a
                  href="https://bubble-tea-mern.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectButton w-[125px]">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
