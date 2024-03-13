import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center dark:bg-black/100 dark:text-white">
      <div className="w-[1400px] md:p-5 p-2 flex flex-col items-center">
        <div className="flex items-center gap-5 mt-5">
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/facebook.png"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/twitter.png"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/instagram.webp"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/linkedin.webp"
            alt=""
          />
        </div>
        <span className="text-sm mt-5">
          Copyright © 2023 Renie Adjani. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
