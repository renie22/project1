import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <div className="flex justify-center bg-white dark:bg-black/70 dark:text-white xl:pt-[30px] lg:pt-0 md:pt-[40px] sm:pt-4 pt-[120px]">
        <div className="w-[1400px] md:p-5 p-2">
          <h2 className="xl:text-lg lg:text-sm text-xs font-light text-center">
            Get To Know More
          </h2>
          <h1 className="xl:text-4xl lg:text-2xl text-xl font-bold text-center tracking-widest mt-2">
            About Me
          </h1>
          <div className="flex xl:flex-row flex-col gap-5 xl:items-stretch items-center mt-5">
            <div className="w-1/2 xl:h-[70vh] h-full flex xl:flex-row flex-col items-center xl:items-stretch">
              <div className="bg-blue-500 dark:bg-[#59b256] xl:h-[400px] xl:w-[400px] lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] h-[250px] w-[250px] relative rounded-xl mb-2">
                <img
                  className="h-full w-full object-cover rounded-xl absolute left-10 top-10"
                  src="/img/programmer.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col xl:gap-10 lg:gap-6 gap-8 xl:py-[100px] lg:py-[45px] md:py-[60px] sm:py-5 py-[20px]">
              <h1 className="text-justify md:text-base text-xs">
                Hello! I'm Renie, a passionate React developer dedicated to
                creating captivating web applications. I'm on a mission to
                master the art of web development and bring innovative ideas to
                life through code.
              </h1>
              <div>
                <h2 className="md:text-xl text-lg font-medium mb-2">
                  Get in Touch
                </h2>
                <p className="text-justify md:text-base text-xs">
                  I'm always open to new opportunities, collaborations, and
                  learning experiences. If you're interested in working
                  together, have a project in mind, or simply want to connect,
                  please don't hesitate to reach out to me at
                  <span className="underline text-bold ml-1">
                    renieadjani62@gmail.com
                  </span>
                  .
                </p>
              </div>
              <span className="md:text-base text-sm">
                Let's learn, grow, and build amazing things together!
              </span>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
