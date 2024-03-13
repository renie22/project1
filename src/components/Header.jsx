import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Header = () => {
  const textRef = useRef();

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

  return (
    <div
      id="home"
      className="flex justify-center dark:bg-black/70 dark:text-white"
    >
      <div className="w-[1400px] h-[calc(100vh-80px)] md:p-5 p-2 flex xl:flex-row flex-col xl:items-stretch items-center">
        <div className="w-1/2 flex flex-col gap-5 items-center justify-center">
          <h1 className="flex items-center gap-1 text-lg">
            <img
              className="h-5 w-5 object-cover hover:scale-110 duration-200 transition-all"
              src="/img/hi.png"
              alt=""
            />
            Hello, I'm
          </h1>
          <h1 className="text-4xl font-bold">Renie Adjani</h1>
          <h1 className="text-xl font-semibold text-gray-600">
            <span
              ref={textRef}
              className="text-blue-600 dark:text-green-500 ml-2 text-2xl"
            ></span>
          </h1>
          <a href="/img/Resume.pdf" download="Resume">
            <button className="border border-gray-400 rounded-full px-5 py-3 hover:bg-gray-500 hover:text-white w-[140px]">
              Download CV
            </button>
          </a>
        </div>
        <div className="w-1/2 relative xl:my-10 my-5 order-first xl:order-last flex flex-col items-center">
          <div className="hidden xl:block i-bg absolute top-0 right-0 dark:bg-blue-500"></div>
          <img
            className="xl:w-full xl:h-full lg:w-[550px] lg:h-[550px] md:h-[450px] md:w-[450px] h-[350px] w-[350px] object-cover xl:absolute"
            src="/img/profile.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
